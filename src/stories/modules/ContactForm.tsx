import React from 'react';
import { Input } from '../components/form/Input';
import { Textarea } from '../components/form/Textarea';
import { Button } from '../components/Button';
import { Divider } from '../components/Divider';

export interface IntroItem {
  /** Font Awesome icon class */
  icon: string;
  /** Item text */
  text: string;
}

export interface ContactDetail {
  /** Font Awesome icon class */
  icon: string;
  /** Display text or link label */
  text: string;
  /** Optional URL — renders the text as a link */
  href?: string;
}

export interface ContactFormProps {
  /** Section heading — renders as h2 */
  heading?: React.ReactNode;
  /** List of intro items with icons (e.g. "Need help with a project?") */
  introItems?: IntroItem[];
  /** Closing paragraph below the intro list */
  introClosing?: string;
  /** Contact details shown below the intro (email, github, location) */
  details?: ContactDetail[];
  /** Submit handler */
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

/** A contact form section with name, email, subject, and message fields. */
export const ContactForm = ({ heading, introItems, introClosing, details, onSubmit }: ContactFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  const hasSidebar = introItems || introClosing || details;

  return (
    <section className="contact-form">
      <div className="container">
        {heading && (
          <h2 className="contact-form__heading font-manrope fw-bold">{heading}</h2>
        )}
        <Divider className="w-25 divider--blue-100 mb-4" />
        <div className="row g-4">
          <div className="col-12 col-lg-7">
            <form className="contact-form__body" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <Input label="Name" name="name" placeholder="Your name" />
                </div>
                <div className="col-12 col-md-6">
                  <Input label="Email" name="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="col-12">
                  <Input label="Subject" name="subject" placeholder="What is this about?" />
                </div>
                <div className="col-12">
                  <Textarea label="Message" name="message" placeholder="Write your message here…" rows={6} />
                </div>
                <div className="col-12">
                  <Button label="Send Message" color="azure-bolt" />
                </div>
              </div>
            </form>
          </div>
          {hasSidebar && (
            <div className="col-12 col-lg-5">
              <div className="contact-form__sidebar">
                <div className="contact-form__sidebar-content">
                  {introItems && (
                    <ul className="contact-form__intro-list">
                      {introItems.map((item) => (
                        <li className="contact-form__intro-item" key={item.text}>
                          <span className="contact-form__intro-icon">
                            <i className={item.icon} />
                          </span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {introClosing && <p className="contact-form__intro-closing">{introClosing}</p>}
                  {details && (
                    <div className="contact-form__details">
                      {details.map((detail) => (
                        <div className="contact-form__contact-detail" key={detail.text}>
                          <i className={detail.icon} />
                          {detail.href ? (
                            <a href={detail.href} target="_blank" rel="noopener noreferrer">{detail.text}</a>
                          ) : (
                            <span>{detail.text}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
