import PageShell from './components/layout/PageShell';
import Hero from './components/sections/Hero';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-page)', overflowX: 'hidden' }}>
      <PageShell>
        <Hero />
      </PageShell>
    </div>
  );
}
