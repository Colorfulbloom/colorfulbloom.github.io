export type AlertVariant = 'success' | 'warning' | 'info' | 'danger';

export interface AlertProps {
  /** Visual variant of the alert */
  variant: AlertVariant;
  /** Alert title (required) */
  title: string;
  /** Alert message body (required) */
  message: string;
  /** Callback when close button is clicked */
  onClose?: () => void;
  /** Additional CSS classes merged onto the alert root */
  className?: string;
  /** Whether to hide the close button */
  dismissible?: boolean;
  /** Show only the variant background without icon/title styling */
  variantOnly?: boolean;
}

const iconMap: Record<AlertVariant, string> = {
  success: 'fa-solid fa-circle-check',
  warning: 'fa-solid fa-triangle-exclamation',
  info: 'fa-solid fa-circle-info',
  danger: 'fa-solid fa-circle-xmark',
};

/**
 * An alert component for displaying success, warning, info, or danger messages.
 * Each variant has its own appropriate background color and icon.
 * The close button features a pulsing beacon effect on hover.
 */
export const Alert = ({
  variant,
  title,
  message,
  onClose,
  className,
  dismissible = true,
  variantOnly = false,
}: AlertProps) => {
  const hasTitle = !!title;
  const variantClass = variant ? `alert--${variant}` : '';
  const classes = ['alert', variantClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes} role="alert">
      {(!variantOnly && !title) ? (
        // Compact mode: icon and message only
        <>
          <div className="alert__header">
            <div className="alert__title-row">
              {hasTitle && (
                <span className="alert__icon">
                  <i className={iconMap[variant]} />
                </span>
              )}
              {title && (
                <h4 className="alert__title font-manrope">{title}</h4>
              )}
            </div>
            {dismissible && onClose && (
              <button
                type="button"
                className="alert__close"
                onClick={onClose}
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            )}
          </div>
          <p className="alert__message font-noto">{message}</p>
        </>
      ) : (
        // Standard mode: with title row
        <>
          <div className="alert__header">
            <div className="alert__title-row">
              {hasTitle && (
                <span className="alert__icon">
                  <i className={iconMap[variant]} />
                </span>
              )}
              {title && (
                <h4 className="alert__title font-manrope">{title}</h4>
              )}
            </div>
            {dismissible && onClose && (
              <button
                type="button"
                className="alert__close"
                onClick={onClose}
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            )}
          </div>
          <p className="alert__message font-noto">{message}</p>
        </>
      )}
    </div>
  );
};
