import './FormField.css';

export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  options = [],
  error,
  hint,
  rows = 4,
  placeholder,
  featured = false,
}) {
  function handleChange(e) {
    onChange(name, e.target.value);
  }

  if (type === 'checkbox') {
    return (
      <div className="form-field form-field-checkbox">
        <label className="form-field-checkbox-label">
          <input
            type="checkbox"
            name={name}
            checked={value}
            onChange={(e) => onChange(name, e.target.checked)}
          />
          {label}
        </label>
        {hint && <p className="form-field-hint">{hint}</p>}
      </div>
    );
  }

  return (
    <div className={`form-field${featured ? ' form-field-featured' : ''}`}>
      <label>
        {label}
        {required && <span className="form-field-required"> *</span>}
      </label>

      {hint && <p className="form-field-hint">{hint}</p>}

      {error && <p className="form-field-error">{error}</p>}

      {type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          rows={rows}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
