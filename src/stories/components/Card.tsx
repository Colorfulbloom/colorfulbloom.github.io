import type { ReactNode } from 'react';
import type { ButtonProps } from './Button';
import { Button } from './Button';
import { Label } from './Label';
import type { LabelColor } from './Label';

export interface CardLabel {
  /** Visible text on the label */
  text: string;
  /** Colour override — omit to use the auto-mapped tech colour */
  color?: LabelColor;
}

export interface CardProps {
  /** Optional icon rendered to the left of the title */
  icon?: ReactNode;
  /** Card title */
  title: string;
  /** Body text shown below the title */
  text?: string;
  /** URL of the optional top image */
  imageSrc?: string;
  /** Alt text for the image (defaults to title) */
  imageAlt?: string;
  /** Tech / category labels rendered above the title */
  labels?: CardLabel[];
  /** When provided, renders a footer with a Button. The value is the button label. */
  buttonLabel?: string;
  /** Colour variant passed through to the footer Button */
  buttonColor?: ButtonProps['color'];
  /** When set the footer button becomes a link to this URL */
  buttonHref?: string;
  /** Optional click handler forwarded to the footer Button */
  onButtonClick?: () => void;
  /** Additional CSS classes merged onto the card root */
  className?: string;
}

/** A content card styled to match the Quicksilver dark theme. */
export const Card = ({
  icon,
  title,
  text,
  imageSrc,
  imageAlt,
  labels,
  buttonLabel,
  buttonColor = 'azure-bolt',
  buttonHref,
  onButtonClick,
  className,
}: CardProps) => (
  <div className={`card${className ? ` ${className}` : ''}`}>
    {imageSrc && (
      <img
        className="card__image"
        src={imageSrc}
        alt={imageAlt ?? title}
      />
    )}

    <div className="card__body">
      {labels && labels.length > 0 && (
        <div className="card__labels">
          {labels.map((lbl) => (
            <Label key={lbl.text} text={lbl.text} color={lbl.color} />
          ))}
        </div>
      )}
      <div className="card__title-row">
        {icon && <span className="card__icon">{icon}</span>}
        <h3 className="card__title font-manrope">{title}</h3>
      </div>
      {text && <p className="card__text font-noto">{text}</p>}
    </div>

    {buttonLabel && (
      <div className="card__footer">
        {buttonHref ? (
          <a href={buttonHref} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <Button label={buttonLabel} color={buttonColor} />
          </a>
        ) : (
          <Button label={buttonLabel} color={buttonColor} onClick={onButtonClick} />
        )}
      </div>
    )}
  </div>
);
