export default function Button({
  children,
  variant,
  className = '',
  disabled,
  onClick,
  type = 'button',
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '20px',
    fontWeight: 500,
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    transition: 'opacity 0.15s, background-color 0.15s',
    opacity: disabled ? 0.4 : 1,
  };

  const variants = {
    ghost: {
      background: 'transparent',
      color: '#555',
      border: '1px solid #ccc',
    },
    default: {
      background: '#4767d2',
      color: '#fff',
    },
  };

  const style = { ...base, ...(variants[variant] ?? variants.default) };

  return (
    <button
      type={type}
      style={style}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
