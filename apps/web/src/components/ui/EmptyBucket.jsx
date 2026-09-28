export default function EmptyBucket({
  label = '[ placeholder ]',
  sublabel,
  height = 'auto',
  minHeight = '140px',
  width = '100%',
  className = '',
  style = {},
  children
}) {
  return (
    <div
      className={`empty-bucket ${className}`}
      style={{
        width,
        height,
        minHeight,
        ...style
      }}
      role="region"
      aria-label={label}
    >
      {children}
      {label && <span className="empty-bucket__label">{label}</span>}
      {sublabel && <span className="empty-bucket__sublabel">{sublabel}</span>}
    </div>
  );
}
