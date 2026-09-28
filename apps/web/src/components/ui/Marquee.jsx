import LogoLoop from '../react-bits/LogoLoop/LogoLoop';

export default function Marquee({
  items = [],
  speed = 40,
  pauseOnHover = true,
  renderItem,
  gap = 32,
  logoHeight = 44,
  fadeOut = true,
  fadeOutColor = '#09090b',
  className = '',
  ariaLabel = 'Scrolling partner logos'
}) {
  // Format items for LogoLoop
  const logos = items.map((item, idx) => {
    if (typeof item === 'object' && item !== null) {
      return item;
    }
    return { id: idx, value: item };
  });

  return (
    <div className={`sc-marquee-container ${className}`} style={{ overflow: 'hidden', width: '100%' }}>
      <LogoLoop
        logos={logos}
        speed={speed}
        pauseOnHover={pauseOnHover}
        direction="left"
        gap={gap}
        logoHeight={logoHeight}
        fadeOut={fadeOut}
        fadeOutColor={fadeOutColor}
        ariaLabel={ariaLabel}
        renderItem={renderItem}
      />
    </div>
  );
}
