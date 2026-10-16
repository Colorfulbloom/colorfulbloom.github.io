import React, { useEffect, useRef } from 'react';
import { Input } from '../components/form/Input';
import { Textarea } from '../components/form/Textarea';
import { Button } from '../components/Button';
import { Divider } from '../components/Divider';
import { Label } from '../components/Label';
import { Alert } from '../components/Alert';
import { enhanceCodeBlocks, wrapCodeBlocks } from '../components/codeHighlight';

export interface CommentData {
  /** Unique id (also the anchor) */
  id: string;
  /** Commenter name */
  name: string;
  /** ISO date for the datetime attribute (YYYY-MM-DD) */
  date: string;
  /** Visible date, e.g. "June 12, 2026" */
  dateLabel: string;
  /** Comment body HTML (stands in for the processed comment_body field) */
  body: string;
  /** Marks the site owner's reply: shows the "Author" tag */
  isAuthor?: boolean;
  /** Replies, one level deep */
  replies?: CommentData[];
}

export interface CommentsFormErrors {
  /** Message under the Name field */
  name?: string;
  /** Message under the Email field */
  email?: string;
}

export interface CommentsProps {
  /** Comments, newest or oldest first as the site orders them */
  comments?: CommentData[];
  /** Show the inline confirmation instead of the form */
  submitted?: boolean;
  /** Field errors for the form */
  errors?: CommentsFormErrors;
  /** Id of the comment whose reply form is open */
  replyingTo?: string;
  /** Line things up with the post body column when the "On this page" rail is shown */
  alignWithRail?: boolean;
  /** Submit handler */
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const countComments = (comments: CommentData[]): number =>
  comments.reduce((total, c) => total + 1 + countComments(c.replies ?? []), 0);

/** Comment body: the article body styles, with code blocks wrapped and highlighted. */
const CommentBody = ({ html }: { html: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const bodyHtml = wrapCodeBlocks(html);
  useEffect(() => {
    if (ref.current) enhanceCodeBlocks(ref.current);
  }, [bodyHtml]);
  return (
    <div
      ref={ref}
      className="content-elements content-elements--dark article-body comments__body font-noto"
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
};

interface CommentFormProps {
  /** Prefix for field ids, so the main and reply forms never share ids */
  idPrefix: string;
  heading: React.ReactNode;
  submitLabel: string;
  errors?: CommentsFormErrors;
  onCancel?: () => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CommentForm = ({ idPrefix, heading, submitLabel, errors, onCancel, onSubmit }: CommentFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form className="comments__form" onSubmit={handleSubmit}>
      <h3 className="comments__form-heading font-manrope fw-bold">{heading}</h3>
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <Input
            label="Name"
            name="name"
            id={`${idPrefix}-name`}
            placeholder="Your name"
            error={!!errors?.name}
            helperText={errors?.name}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            label="Email"
            name="email"
            id={`${idPrefix}-email`}
            type="email"
            placeholder="you@example.com"
            error={!!errors?.email}
            helperText={errors?.email ?? 'I never show your email.'}
          />
        </div>
        <div className="col-12">
          <Textarea
            label="Comment"
            name="comment"
            id={`${idPrefix}-comment`}
            placeholder="Write your comment here…"
            rows={6}
            helperText="Links and code are allowed."
          />
        </div>
        <div className="col-12">
          <div className="comments__actions">
            <Button label={submitLabel} color="azure-bolt" />
            {onCancel && (
              <a
                className="comments__cancel"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onCancel();
                }}
              >
                Cancel reply
              </a>
            )}
          </div>
          <span className="form-helper comments__privacy">
            Comments wait for my approval before they appear. I don&rsquo;t store your IP address.
          </span>
        </div>
      </div>
    </form>
  );
};

interface CommentItemProps {
  comment: CommentData;
  replyingTo?: string;
  errors?: CommentsFormErrors;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  /** True for a reply (no Reply link, no further nesting) */
  isReply?: boolean;
}

const CommentItem = ({ comment, replyingTo, errors, onSubmit, isReply = false }: CommentItemProps) => {
  const replying = replyingTo === comment.id;
  const firstName = comment.name.split(' ')[0];
  return (
    <li className="comments__item" id={`comment-${comment.id}`}>
      <article>
        <header className="comments__head">
          <span className="comments__name">{comment.name}</span>
          {comment.isAuthor && <Label text="Author" />}
          <time className="comments__meta" dateTime={comment.date}>{comment.dateLabel}</time>
        </header>
        <CommentBody html={comment.body} />
        {!isReply && !replying && (
          <a className="comments__reply" href="#">Reply</a>
        )}
      </article>
      {replying && (
        <div className="comments__reply-form">
          <CommentForm
            idPrefix={`reply-${comment.id}`}
            heading={
              <>
                <span className="comments__heading-accent">Reply to</span>{' '}
                <span className="comments__heading-light">{firstName}.</span>
              </>
            }
            submitLabel="Post Reply"
            errors={errors}
            onCancel={() => undefined}
            onSubmit={onSubmit}
          />
        </div>
      )}
      {comment.replies && comment.replies.length > 0 && (
        <ol className="comments__list comments__list--replies">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} isReply />
          ))}
        </ol>
      )}
    </li>
  );
};

/** Blog post comments: heading, thread (one reply level), and the comment form. */
export const Comments = ({
  comments = [],
  submitted = false,
  errors,
  replyingTo,
  alignWithRail = false,
  onSubmit,
}: CommentsProps) => {
  const total = countComments(comments);
  const gridClass = alignWithRail ? 'body-grid' : 'body-grid body-grid--single';

  return (
    <section className="comments" aria-labelledby="comments-heading">
      <div className="container">
        <div className={gridClass}>
          <div className="body-grid__main">
            <h2 id="comments-heading" className="comments__heading font-manrope fw-bold">
              {total > 0 ? (
                <>
                  <span className="comments__heading-accent">{total}</span>{' '}
                  <span className="comments__heading-light">{total === 1 ? 'Comment.' : 'Comments.'}</span>
                </>
              ) : (
                <span className="comments__heading-accent">Comments.</span>
              )}
            </h2>
            <Divider className="w-25 divider--blue-100 mb-4" />

            {total > 0 ? (
              <ol className="comments__list">
                {comments.map((comment) => (
                  <CommentItem
                    key={comment.id}
                    comment={comment}
                    replyingTo={replyingTo}
                    errors={errors}
                    onSubmit={onSubmit}
                  />
                ))}
              </ol>
            ) : (
              <p className="comments__empty font-noto">No comments yet. Be the first to write one.</p>
            )}

            {submitted ? (
              <div className="comments__confirmation">
                <Alert
                  variant="success"
                  title=""
                  message="Thanks. Your comment is waiting for my approval and will show up here once I approve it."
                  dismissible={false}
                />
              </div>
            ) : (
              !replyingTo && (
                <div className="comments__new">
                  <CommentForm
                    idPrefix="comment"
                    heading={
                      <>
                        <span className="comments__heading-accent">Leave a</span>{' '}
                        <span className="comments__heading-light">Comment.</span>
                      </>
                    }
                    submitLabel="Post Comment"
                    errors={errors}
                    onSubmit={onSubmit}
                  />
                </div>
              )
            )}
          </div>
          {alignWithRail && <div className="body-grid__rail body-grid__spacer" aria-hidden="true"></div>}
        </div>
      </div>
    </section>
  );
};
