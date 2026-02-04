export interface ButtonProps {
  /** Button color variant */
  color?: 'azure-bolt' | 'deep-azure' | 'obsidian' | 'charcoal' | 'quicksilver';
  /** Button label */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Main CTA button */
export const Button = ({ color = 'azure-bolt', label, ...props }: ButtonProps) => (
  <button type="button" className={`btn btn-${color}`} {...props}>
    {label}
  </button>
);
