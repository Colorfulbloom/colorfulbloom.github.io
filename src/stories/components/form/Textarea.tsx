export interface TextareaProps {
  /** Visible label above the textarea */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Current value (controlled) */
  value?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Helper / hint text below the textarea */
  helperText?: string;
  /** Number of visible rows */
  rows?: number;
  /** Disabled state */
  disabled?: boolean;
  /** HTML name attribute */
  name?: string;
  /** HTML id — also links the label via htmlFor */
  id?: string;
}

export const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  helperText,
  rows = 4,
  disabled = false,
  name,
  id,
}: TextareaProps) => {
  const textareaId = id ?? name;

  return (
    <div>
      {label && (
        <label className="form-label" htmlFor={textareaId}>
          {label}
        </label>
      )}
      <textarea
        className="form-textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        disabled={disabled}
        name={name}
        id={textareaId}
      />
      {helperText && <span className="form-helper">{helperText}</span>}
    </div>
  );
};
