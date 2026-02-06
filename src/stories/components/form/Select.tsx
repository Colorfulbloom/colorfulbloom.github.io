export interface SelectOption {
  /** Display text */
  label: string;
  /** Form value */
  value: string;
  /** Disabled option */
  disabled?: boolean;
}

export interface SelectProps {
  /** Visible label above the select */
  label?: string;
  /** Dropdown options */
  options: SelectOption[];
  /** Placeholder shown when nothing is selected */
  placeholder?: string;
  /** Current value (controlled) */
  value?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Helper / hint text below the select */
  helperText?: string;
  /** Disabled state */
  disabled?: boolean;
  /** HTML name attribute */
  name?: string;
  /** HTML id — also links the label via htmlFor */
  id?: string;
}

export const Select = ({
  label,
  options,
  placeholder,
  value,
  onChange,
  helperText,
  disabled = false,
  name,
  id,
}: SelectProps) => {
  const selectId = id ?? name;

  return (
    <div>
      {label && (
        <label className="form-label" htmlFor={selectId}>
          {label}
        </label>
      )}
      <select
        className="form-select"
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        id={selectId}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
      {helperText && <span className="form-helper">{helperText}</span>}
    </div>
  );
};
