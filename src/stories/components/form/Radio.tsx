export interface RadioOption {
  /** Display text */
  label: string;
  /** Form value */
  value: string;
  /** Disabled option */
  disabled?: boolean;
}

export interface RadioProps {
  /** Group label displayed above the options */
  legend?: string;
  /** Shared name for the radio group */
  name: string;
  /** Available options */
  options: RadioOption[];
  /** Currently selected value (controlled) */
  value?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Disable the entire group */
  disabled?: boolean;
}

export const Radio = ({
  legend,
  name,
  options,
  value,
  onChange,
  disabled = false,
}: RadioProps) => {
  return (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      {legend && <legend className="form-label">{legend}</legend>}
      <div className="form-radio-group">
        {options.map((opt) => {
          const optDisabled = disabled || opt.disabled;
          const wrapperClasses = ['form-radio', optDisabled ? 'form-radio--disabled' : '']
            .filter(Boolean)
            .join(' ');
          const inputId = `${name}-${opt.value}`;

          const controlled = value !== undefined;

          return (
            <label className={wrapperClasses} htmlFor={inputId} key={opt.value}>
              <input
                className="form-radio__input"
                type="radio"
                name={name}
                value={opt.value}
                {...(controlled
                  ? { checked: value === opt.value }
                  : {})}
                onChange={onChange}
                disabled={optDisabled}
                id={inputId}
              />
              <span className="form-radio__label">{opt.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};
