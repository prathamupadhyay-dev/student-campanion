import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import BlurText from '../react-bits/BlurText/BlurText';
import PromptBar from '../react-bits/PromptBar/PromptBar';

export default function Hero() {
  const [busy, setBusy] = useState(false);
  const controller = useRef(null);

  const handleSend = async (text, meta) => {
    setBusy(true);
    controller.current = new AbortController();
    await new Promise(resolve => setTimeout(resolve, 1400));
    setBusy(false);
  };

  const handleStop = () => {
    controller.current?.abort();
    setBusy(false);
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '24px'
      }}
    >

      {/* 2. Main Centered Companion Interface */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '680px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Clean Headline: "Meet Iwe, Your Personal AI Companion" */}
        <div style={{ marginBottom: '28px' }}>
          <BlurText
            text="Meet Iwe, Your Personal AI Companion"
            animateBy="words"
            direction="top"
            delay={70}
            className="font-serif"
            style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              color: 'var(--ink-primary)',
              justifyContent: 'center'
            }}
          />
        </div>

        {/* PromptBar with quick action buttons directly ON the prompt bar */}
        <motion.div
          id="prompt-bar-frame"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          style={{
            width: '100%',
            maxWidth: '620px',
            borderRadius: '24px',
            padding: '2.5px',
            background: 'linear-gradient(135deg, rgba(255, 193, 204, 0.8), rgba(232, 180, 248, 0.8))',
            boxShadow:
              '0 20px 48px -10px rgba(232, 180, 248, 0.35), 0 4px 16px rgba(255, 193, 204, 0.22), inset 0 1px 1px rgba(255, 255, 255, 0.8)'
          }}
        >
          <PromptBar
            placeholder="Ask Iwe anything…"
            busy={busy}
            onSend={handleSend}
            onStop={handleStop}
            background="rgba(255, 255, 255, 0.72)"
            color="#0f172a"
            menuBackground="rgba(255, 255, 255, 0.92)"
            sparkColor="#E8B4F8"
            sparkBoost={1}
            width={615}
            radius={22}
            maxRows={5}
            morphDuration={240}
            squash={0.12}
            tilt={8}
            pressScale={0.96}
          />
        </motion.div>
      </div>
    </section>
  );
}
