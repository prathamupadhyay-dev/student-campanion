import { motion } from 'motion/react';
import { PanelLeft, Settings } from 'lucide-react';

export default function MacOSSidebar({ isCollapsed, onToggle, openWidth = 360 }) {
  const sidebarWidth = isCollapsed ? 58 : (openWidth || 360);

  return (
    <motion.aside
      initial={false}
      animate={{
        width: sidebarWidth
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 32 }}
      className="macos-sidebar"
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: isCollapsed ? 'transparent' : '#ffffff',
        borderRight: isCollapsed ? 'none' : '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: isCollapsed ? 'none' : '4px 0 24px rgba(0, 0, 0, 0.05)',
        userSelect: 'none',
        overflow: 'hidden'
      }}
      aria-label="iwe Sidebar"
    >
      {/* 1. Top Section: Icon Slot Placeholder + "iwe" Brand Name + Toggle */}
      <div
        style={{
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isCollapsed ? 'center' : 'space-between',
          padding: isCollapsed ? '0' : '0 16px',
          borderBottom: isCollapsed ? 'none' : '1px solid rgba(0, 0, 0, 0.06)',
          flexShrink: 0
        }}
      >
        {!isCollapsed ? (
          <>
            {/* Top Left: Icon Slot Placeholder + Brand Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Icon Slot Placeholder for future logo/icon */}
              <div
                className="sidebar-icon-slot"
                title="App Icon Slot (Add icon later)"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  border: '1.5px dashed rgba(0, 0, 0, 0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease, background-color 0.2s ease'
                }}
              >
                <span style={{ fontSize: '15px', color: 'var(--ink-muted)', lineHeight: 1 }}>+</span>
              </div>

              {/* Brand Name "iwe" */}
              <span
                className="font-serif"
                style={{
                  fontSize: '19px',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink-primary)',
                  lineHeight: 1
                }}
              >
                iwe
              </span>
            </div>

            {/* Toggle Icon Button */}
            <button
              type="button"
              onClick={onToggle}
              className="macos-icon-btn"
              title="Collapse sidebar into icon rail (⌘B)"
              aria-label="Collapse sidebar"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                color: 'var(--ink-secondary)',
                cursor: 'pointer',
                border: 'none',
                backgroundColor: 'transparent',
                transition: 'background-color 0.15s ease'
              }}
            >
              <PanelLeft size={16} strokeWidth={2} />
            </button>
          </>
        ) : (
          /* Collapsed Top: Single Centered Toggle Button (No vertical line) */
          <button
            type="button"
            onClick={onToggle}
            className="macos-icon-btn"
            title="Expand sidebar (⌘B)"
            aria-label="Expand sidebar"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
              color: 'var(--ink-primary)',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            <PanelLeft size={18} strokeWidth={2} />
          </button>
        )}
      </div>

      {/* 2. Middle Body: Clean Empty Space */}
      <div
        style={{
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Intentionally empty for future tools/context */}
      </div>

      {/* 3. Bottom Section: Just a Settings Option */}
      <div
        style={{
          padding: isCollapsed ? '12px 0' : '12px 14px',
          borderTop: isCollapsed ? 'none' : '1px solid rgba(0, 0, 0, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isCollapsed ? 'center' : 'flex-start',
          flexShrink: 0
        }}
      >
        <button
          type="button"
          onClick={() => alert('iwe Settings & Preferences')}
          className="macos-sidebar-settings-btn"
          title="Settings"
          aria-label="Settings"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: isCollapsed ? 'center' : 'flex-start',
            gap: '10px',
            width: isCollapsed ? '36px' : 'auto',
            minWidth: isCollapsed ? '36px' : '110px',
            height: '36px',
            padding: isCollapsed ? '0' : '0 12px',
            borderRadius: '8px',
            color: 'var(--ink-secondary)',
            fontSize: '13.5px',
            fontWeight: 500,
            cursor: 'pointer',
            border: isCollapsed ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
            backgroundColor: isCollapsed ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
            boxShadow: isCollapsed ? '0 2px 6px rgba(0, 0, 0, 0.04)' : 'none',
            transition: 'background-color 0.15s ease, color 0.15s ease'
          }}
          onMouseEnter={e => {
            if (!isCollapsed) {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.color = '#0f172a';
            } else {
              e.currentTarget.style.backgroundColor = '#ffffff';
            }
          }}
          onMouseLeave={e => {
            if (!isCollapsed) {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--ink-secondary)';
            } else {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
            }
          }}
        >
          <Settings size={18} strokeWidth={1.8} style={{ flexShrink: 0 }} />
          {!isCollapsed && <span>Settings</span>}
        </button>
      </div>
    </motion.aside>
  );
}
