export type InputType = 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';

export interface InputProps {
  /** Visible label above the input */
  label?: string;
  /** HTML input type */
  type?: InputType;
  /** Placeholder text */
  placeholder?: string;
  /** Current value (controlled) */
  value?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Helper / hint text below the input */
  helperText?: string;
  /** Mark the input as errored */
  error?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** HTML name attribute */
  name?: string;
  /** HTML id — also links the label via htmlFor */
  id?: string;
}

export const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  helperText,
  error = false,
  disabled = false,
  name,
  id,
}: InputProps) => {
  const inputId = id ?? name;
  const classes = ['form-input', error ? 'form-input--error' : ''].filter(Boolean).join(' ');

  return (
    <div>
      {label && (
        <label className="form-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        className={classes}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        id={inputId}
      />
      {helperText && <span className="form-helper">{helperText}</span>}
    </div>
  );
};
