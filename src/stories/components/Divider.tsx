export interface DividerProps {
  /** Optional extra CSS classes */
  className?: string;
}

/** A full-width horizontal rule with a deep-azure bottom border, matching the primary button style. */
export const Divider = ({ className }: DividerProps) => (
  <div className={`divider${className ? ` ${className}` : ''}`} />
);
