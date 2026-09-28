export default function Navbar({ isCollapsed }) {

  return (
    <header
      className="sc-navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'transparent',
        borderBottom: 'none',
        pointerEvents: 'none'
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: '64px',
          padding: '0 24px'
        }}
      >
        {/* Right: Just the Sign in button */}
        <div style={{ pointerEvents: 'auto' }}>
          <a
            href="#signin"
            style={{
              fontSize: '13.5px',
              fontWeight: 600,
              color: 'var(--ink-primary)',
              padding: '8px 18px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.85)',
              backgroundColor: 'rgba(255, 255, 255, 0.65)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 4px 16px rgba(232, 180, 248, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
              transition: 'all 0.2s cubic-bezier(0.23, 1, 0.32, 1)',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.borderColor = 'rgba(232, 180, 248, 0.6)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(232, 180, 248, 0.3), inset 0 1px 0 rgba(255, 255, 255, 1)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.65)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.85)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(232, 180, 248, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Sign in
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sc-navbar {
            padding-left: 0 !important;
          }
        }
      `}</style>
    </header>
  );
}
