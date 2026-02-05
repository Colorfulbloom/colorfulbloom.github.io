export interface DividerProps {
  /** Optional extra CSS classes */
  className?: string;
}

/** A full-width horizontal rule with a left-to-right gradient: deep-azure → azure-bolt → quicksilver → frost. */
export const Divider = ({ className }: DividerProps) => (
  <div className={`divider${className ? ` ${className}` : ''}`} />
);
