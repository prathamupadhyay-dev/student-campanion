import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MacOSSidebar from './MacOSSidebar';
import SoftAurora from '../react-bits/SoftAurora/SoftAurora';

export default function PageShell({ children }) {
  // Default to collapsed (icon rail mode: 58px)
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Global Keyboard Shortcut: ⌘B or Ctrl+B to toggle sidebar collapse
  useEffect(() => {
    const handleKeyDown = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsCollapsed(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Calculate dynamic openWidth so expanded sidebar aligns exactly with the prompt bar's left edge
  const [openWidth, setOpenWidth] = useState(360);

  const calculatePromptBarStart = () => {
    const el = document.getElementById('prompt-bar-frame');
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.left > 58) {
        setOpenWidth(Math.floor(rect.left));
        return;
      }
    }
    // Mathematical fallback for centered 620px bar: (viewport - 620) / 2
    const viewportWidth = window.innerWidth;
    const barWidth = Math.min(620, viewportWidth - 48);
    const fallback = Math.max(58, Math.floor((viewportWidth - barWidth) / 2));
    setOpenWidth(fallback);
  };

  useEffect(() => {
    calculatePromptBarStart();

    const rafId = requestAnimationFrame(calculatePromptBarStart);
    const timeoutId = setTimeout(calculatePromptBarStart, 120);

    window.addEventListener('resize', calculatePromptBarStart);

    let ro;
    const target = document.getElementById('prompt-bar-frame');
    if (target && window.ResizeObserver) {
      ro = new ResizeObserver(calculatePromptBarStart);
      ro.observe(target);
      if (document.body) ro.observe(document.body);
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      window.removeEventListener('resize', calculatePromptBarStart);
      if (ro) ro.disconnect();
    };
  }, []);

  const toggleSidebar = () => {
    calculatePromptBarStart();
    setIsCollapsed(prev => !prev);
  };

  return (
    <div className="page-shell">
      {/* Full-Page Pastel Aurora Background (Edge-to-Edge across entire viewport) */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      >
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <SoftAurora
            speed={0.3}
            scale={1.4}
            brightness={1.2}
            color1="#FFC1CC"
            color2="#E8B4F8"
            noiseFrequency={1}
            noiseAmplitude={0.5}
            bandHeight={0.4}
            bandSpread={0.6}
            octaveDecay={0.5}
            layerOffset={0.1}
            colorSpeed={0.2}
            enableMouseInteraction
            mouseInfluence={0.2}
          />
        </div>
      </div>

      {/* macOS Sidebar (Floats above full-page aurora) */}
      <MacOSSidebar
        isCollapsed={isCollapsed}
        onToggle={toggleSidebar}
        openWidth={openWidth}
      />

      {/* Top Navbar */}
      <Navbar
        isCollapsed={isCollapsed}
      />

      {/* Main Content Area: Kept centered across entire viewport */}
      <main
        className="page-main-content"
        style={{
          position: 'relative',
          zIndex: 10,
          flex: '1 0 auto',
          width: '100%'
        }}
      >
        {children}
      </main>

      <style>{`
        @media (max-width: 768px) {
          .page-main-content {
            padding-left: 0 !important;
          }
          .macos-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
