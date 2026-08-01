// Bits.jsx — small reusable atoms used across the studio site.
// Each component is exported to window at the bottom so Layout/Sections
// can pick them up under their bare names.

const { useState, useEffect } = React;

// ---- Eyebrow (mono caps label) ----
function Eyebrow({ children, color = 'var(--fg-3)', style }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: 11,
      letterSpacing: '0.24em', textTransform: 'uppercase',
      color, ...style,
    }}>{children}</div>
  );
}

// ---- Button ----
function Button({ kind = 'primary', children, onClick, icon, style }) {
  const base = {
    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
    letterSpacing: '0.02em',
    padding: '12px 20px',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: 'pointer', display: 'inline-flex',
    alignItems: 'center', gap: 8,
    transition: 'background 200ms var(--ease-out), color 200ms var(--ease-out), box-shadow 200ms var(--ease-out)',
  };
  const variants = {
    primary: {
      background: 'var(--accent)', color: 'var(--bg)',
      boxShadow: 'var(--shadow-glow)',
    },
    secondary: {
      background: 'transparent', color: 'var(--fg-1)',
      borderColor: 'var(--border-strong)',
    },
    ghost: { background: 'transparent', color: 'var(--fg-2)' },
    mono: {
      fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500,
      letterSpacing: '0.16em', textTransform: 'uppercase',
      background: 'transparent', color: 'var(--accent-2)',
      borderColor: 'var(--accent-2)', padding: '11px 18px',
    },
  };
  return (
    <button onClick={onClick} style={{ ...base, ...variants[kind], ...style }}
            onMouseEnter={(e) => {
              if (kind === 'primary') e.currentTarget.style.background = 'var(--accent-hover)';
              if (kind === 'secondary') e.currentTarget.style.background = 'var(--bg-elev-2)';
              if (kind === 'mono') e.currentTarget.style.background = 'rgba(108,220,255,0.08)';
              if (kind === 'ghost') { e.currentTarget.style.background = 'var(--bg-elev-1)'; e.currentTarget.style.color = 'var(--fg-1)'; }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = variants[kind].background;
              if (kind === 'ghost') e.currentTarget.style.color = variants[kind].color;
            }}>
      {icon}
      {children}
    </button>
  );
}

// ---- Tag (filter / sentence-case) ----
function Tag({ children }) {
  return (
    <span style={{
      display: 'inline-flex', padding: '4px 10px',
      border: '1px solid var(--border)', borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--fg-2)',
    }}>{children}</span>
  );
}

// ---- Status pill (mono caps) ----
function Pill({ kind = 'info', children }) {
  const colors = {
    info:    { bg: 'rgba(108,220,255,0.14)', fg: 'var(--accent-2)' },
    plasma:  { bg: 'var(--accent)',          fg: 'var(--bg)' },
    success: { bg: 'rgba(94,209,138,0.14)',  fg: 'var(--color-success)' },
    yellow:  { bg: 'var(--accent-3)',        fg: 'var(--bg)' },
    ghost:   { bg: 'transparent',            fg: 'var(--fg-2)', border: '1px solid var(--border)' },
  };
  const c = colors[kind];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 11px', borderRadius: 999,
      fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500,
      letterSpacing: '0.22em', textTransform: 'uppercase',
      background: c.bg, color: c.fg, border: c.border || 'none',
    }}>{children}</span>
  );
}

// ---- Monogram icon (inline SVG, uses currentColor) ----
function MonogramIcon({ size = 32, color = 'currentColor', strokeWidth = 18, style }) {
  return (
    <svg viewBox="0 0 240 120" fill="none" stroke={color}
         strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
         style={{ width: size * 2, height: size, ...style }}>
      <path d="M 120 60 C 95 30, 50 30, 50 60 C 50 90, 95 90, 120 60 C 145 30, 190 30, 190 60 C 190 90, 145 90, 120 60 Z" />
    </svg>
  );
}

// ---- Lucide-style stroke icon helper ----
function Ico({ d, size = 18, strokeWidth = 1.5, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth={strokeWidth}
         strokeLinecap="round" strokeLinejoin="round" style={style}>
      {d}
    </svg>
  );
}

const Icons = {
  arrowRight: <path d="M5 12h14M13 5l7 7-7 7"/>,
  arrowDown:  <path d="M12 5v14M19 12l-7 7-7-7"/>,
  external:   <><path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>,
  search:     <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></>,
  steam:      <><circle cx="12" cy="12" r="10"/><path d="M9 12l3 3 6-6"/></>,
  itch:       <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 12h10"/></>,
  rss:        <><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.5"/></>,
  menu:       <path d="M3 6h18M3 12h18M3 18h18"/>,
  close:      <path d="M18 6L6 18M6 6l12 12"/>,
  eye:        <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></>,
};

// ---- A11y dyslexia toggle ----
function A11yToggle() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute('data-a11y', on ? 'dyslexia' : 'off');
  }, [on]);
  return (
    <button
      aria-pressed={on}
      onClick={() => setOn(!on)}
      title={on ? 'Standard font (Sora)' : 'Dyslexia-friendly font (OpenDyslexic)'}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '7px 12px',
        background: on ? 'rgba(108,220,255,0.14)' : 'transparent',
        color: on ? 'var(--accent-2)' : 'var(--fg-2)',
        border: '1px solid ' + (on ? 'var(--accent-2)' : 'var(--border)'),
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-mono)', fontSize: 10,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 200ms var(--ease-out)',
      }}>
      <Ico size={13} d={Icons.eye} />
      a11y · {on ? 'on' : 'off'}
    </button>
  );
}

Object.assign(window, { Eyebrow, Button, Tag, Pill, MonogramIcon, Ico, Icons, A11yToggle });
