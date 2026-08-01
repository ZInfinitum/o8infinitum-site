// Cards.jsx — GameCard, DevlogCard.

const { Eyebrow, Pill, Tag } = window;

// ---- Capsule placeholder ----
// Renders a deterministic "capsule art" placeholder using gradient + a few
// geometric shapes. Each card seeds differently via the `seed` prop so the
// grid feels varied but stays brand-coherent.
function Capsule({ seed = 1, color = 'ruby' }) {
  const palettes = {
    ruby:    ['#1a0410', '#580d23', '#C71F3A'],
    bayside: ['#03142a', '#0e3a78', '#2C5BA0'],
    emerald: ['#08231a', '#0e5b40', '#2E9670'],
    imperial:['#180531', '#3a1170', '#7239B0'],
  };
  const c = palettes[color];
  // pseudo-random from seed
  const r = (n) => {
    const x = Math.sin(seed * 37 + n * 91) * 10000;
    return x - Math.floor(x);
  };
  return (
    <div style={{
      position: 'relative', height: '100%', width: '100%',
      background: `linear-gradient(135deg, ${c[0]} 0%, ${c[1]} 45%, ${c[2]} 105%)`,
      overflow: 'hidden',
    }}>
      <svg viewBox="0 0 340 200" width="100%" height="100%"
           preserveAspectRatio="xMidYMid slice"
           style={{ position: 'absolute', inset: 0 }}>
        {/* Distant planet silhouette */}
        <circle cx={260 + r(1) * 60} cy={180 + r(2) * 30} r={100 + r(3) * 30}
                fill="#050715" opacity="0.7"/>
        {/* Stars */}
        {Array.from({ length: 14 }).map((_, i) => (
          <circle key={i}
                  cx={r(10 + i) * 340}
                  cy={r(20 + i) * 200}
                  r={0.6 + r(30 + i) * 1.5}
                  fill={i % 5 === 0 ? '#F4D35E' : '#F1ECE2'}
                  opacity={0.4 + r(40 + i) * 0.6}/>
        ))}
        {/* Thin orbital arc */}
        <ellipse cx="120" cy="80" rx="160" ry="40"
                 fill="none" stroke="#2C5BA0" strokeOpacity="0.45" strokeWidth="0.8"
                 transform={`rotate(${r(50) * 30 - 15} 120 80)`}/>
      </svg>
    </div>
  );
}

// ---- Game card ----
function GameCard({ title, tagline, status = 'in development', tags = [], color = 'plasma', seed = 1 }) {
  return (
    <a href="#" style={{ textDecoration: 'none', border: 0, display: 'block' }}>
      <article style={{
        background: 'var(--bg-elev-2)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-1)',
        transition: 'border-color 200ms var(--ease-out), transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-strong)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-1)';
      }}>
        <div style={{ height: 200, position: 'relative' }}>
          <Capsule seed={seed} color={color} />
          <div style={{ position: 'absolute', top: 14, left: 14 }}>
            <Pill kind={status === 'shipping' ? 'success' : status === 'demo' ? 'yellow' : 'info'}>
              {status}
            </Pill>
          </div>
        </div>
        <div style={{ padding: '20px 22px 22px' }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500,
            fontSize: 30, lineHeight: 1.0, letterSpacing: '-0.02em',
            color: 'var(--fg-1)', marginBottom: 8,
          }}>{title}</div>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55,
            color: 'var(--fg-2)', marginBottom: 16,
          }}>{tagline}</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>
      </article>
    </a>
  );
}

// ---- Devlog card (compact) ----
function DevlogCard({ number, title, excerpt, date, mins }) {
  return (
    <a href="#" style={{ textDecoration: 'none', border: 0, display: 'block' }}>
      <article style={{
        padding: '24px 0',
        borderTop: '1px solid var(--border)',
        display: 'grid',
        gridTemplateColumns: '120px 1fr auto',
        gap: 24, alignItems: 'baseline',
        transition: 'opacity 200ms var(--ease-out)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.92'; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>
        <Eyebrow color="var(--accent)">No. {String(number).padStart(3, '0')}</Eyebrow>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500,
            fontSize: 26, lineHeight: 1.05, letterSpacing: '-0.02em',
            color: 'var(--fg-1)', marginBottom: 6,
          }}>{title}</div>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55,
            color: 'var(--fg-2)', maxWidth: '56ch',
          }}>{excerpt}</div>
        </div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)',
          letterSpacing: '0.16em', textTransform: 'uppercase', textAlign: 'right',
          whiteSpace: 'nowrap',
        }}>{date}<br/>{mins} min</div>
      </article>
    </a>
  );
}

Object.assign(window, { Capsule, GameCard, DevlogCard });
