export interface CheckboxProps {
  /** Label text displayed next to the checkbox */
  label: string;
  /** Whether the checkbox is checked (controlled) */
  checked?: boolean;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Disabled state */
  disabled?: boolean;
  /** HTML name attribute */
  name?: string;
  /** HTML id */
  id?: string;
}

export const Checkbox = ({
  label,
  checked,
  onChange,
  disabled = false,
  name,
  id,
}: CheckboxProps) => {
  const inputId = id ?? name;
  const wrapperClasses = ['form-checkbox', disabled ? 'form-checkbox--disabled' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <label className={wrapperClasses} htmlFor={inputId}>
      <input
        className="form-checkbox__input"
        type="checkbox"
        {...(checked !== undefined
          ? { checked }
          : {})}
        onChange={onChange}
        disabled={disabled}
        name={name}
        id={inputId}
      />
      <span className="form-checkbox__label">{label}</span>
    </label>
  );
};
