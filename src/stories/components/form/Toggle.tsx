export interface ToggleProps {
  /** Label text displayed next to the toggle */
  label: string;
  /** Whether the toggle is on (controlled) */
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

export const Toggle = ({
  label,
  checked,
  onChange,
  disabled = false,
  name,
  id,
}: ToggleProps) => {
  const inputId = id ?? name;
  const wrapperClasses = ['form-toggle', disabled ? 'form-toggle--disabled' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <label className={wrapperClasses} htmlFor={inputId}>
      <input
        className="form-toggle__input"
        type="checkbox"
        role="switch"
        {...(checked !== undefined
          ? { checked }
          : {})}
        onChange={onChange}
        disabled={disabled}
        name={name}
        id={inputId}
      />
      <span className="form-toggle__track">
        <span className="form-toggle__thumb" />
      </span>
      <span className="form-toggle__label">{label}</span>
    </label>
  );
};
