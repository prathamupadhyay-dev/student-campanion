export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  return (
    <div
      className={`section-header ${className}`}
      style={{
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align === 'center' ? 'center' : 'left'
      }}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
