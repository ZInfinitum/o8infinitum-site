// Layout.jsx — Header, Footer, OrbitBackdrop, Wordmark.

const { Eyebrow, Button, MonogramIcon, A11yToggle, Ico, Icons } = window;

// ---- Wordmark (text-based, can scale) ----
// Matches the SVG wordmark: O ruby, 8 imperial, ∞ gradient (ruby → imperial
// → bayside → emerald via CSS background-clip).
function Wordmark({ size = 72 }) {
  return (
    <span style={{
      fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500,
      fontSize: size, lineHeight: 0.92, letterSpacing: '-0.03em',
      color: 'var(--fg-1)', whiteSpace: 'nowrap',
    }}>
      <span style={{ color: 'var(--color-ruby)' }}>O</span>
      <span style={{ color: 'var(--color-imperial-soft)' }}>8</span>
      <span style={{
        fontSize: size * 0.55,
        fontStyle: 'normal',
        verticalAlign: '0.35em',
        marginLeft: size * 0.04,
        background: 'linear-gradient(135deg, #C71F3A 0%, #4D1A85 35%, #2C5BA0 70%, #2E9670 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
      }}>∞</span>
    </span>
  );
}

// ---- Star field (deterministic) ----
function StarField({ count = 80, height = 600 }) {
  const stars = React.useMemo(() => {
    const out = [];
    let s = 9301;
    const rng = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
    for (let i = 0; i < count; i++) {
      out.push({ x: rng() * 100, y: rng() * 100, r: rng() * 1.1 + 0.25, o: rng() * 0.7 + 0.15 });
    }
    return out;
  }, [count]);
  return (
    <svg width="100%" height={height} viewBox="0 0 100 100"
         preserveAspectRatio="none"
         style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      {stars.map((st, i) =>
        <circle key={i} cx={st.x} cy={st.y} r={st.r * 0.09}
                fill="var(--color-star)" opacity={st.o} />
      )}
    </svg>
  );
}

// ---- OrbitBackdrop — Orion constellation hero backdrop ----
// Replaces the generic orbit motif with the brand's signature constellation.
// Used behind the wordmark on the hero.
function OrbitBackdrop({ children, height = 640 }) {
  return (
    <div style={{
      position: 'relative', height, overflow: 'hidden',
      background: 'radial-gradient(ellipse 70% 80% at 50% 55%, var(--bg-elev-1) 0%, var(--bg) 78%)',
    }}>
      <StarField height={height} />
      <svg viewBox="0 0 1200 640" width="100%" height={height}
           preserveAspectRatio="xMidYMid slice"
           style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <defs>
          <radialGradient id="hero-ruby-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#C71F3A" stopOpacity="0.35"/>
            <stop offset="55%" stopColor="#C71F3A" stopOpacity="0.06"/>
            <stop offset="100%" stopColor="#C71F3A" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="hero-betel" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C71F3A" stopOpacity="0.65"/>
            <stop offset="100%" stopColor="#C71F3A" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="hero-rigel" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9BB8FF" stopOpacity="0.55"/>
            <stop offset="100%" stopColor="#9BB8FF" stopOpacity="0"/>
          </radialGradient>
        </defs>
        {/* Soft ruby glow behind the wordmark */}
        <ellipse cx="600" cy="320" rx="460" ry="460" fill="url(#hero-ruby-glow)" />

        {/* Orion constellation — upper right, subtle */}
        <g stroke="#2C5BA0" strokeOpacity="0.55" strokeWidth="0.9" fill="none">
          {/* Bellatrix → Alnitak (right shoulder → belt) */}
          <line x1="1020" y1="130" x2="980" y2="305" />
          {/* Betelgeuse → Mintaka (left shoulder → belt) */}
          <line x1="820" y1="160" x2="840" y2="285" />
          {/* Belt */}
          <polyline points="840,285 910,295 980,305" />
          {/* Mintaka → Saiph (left leg) */}
          <line x1="840" y1="285" x2="820" y2="430" />
          {/* Alnitak → Rigel (right leg) */}
          <line x1="980" y1="305" x2="1050" y2="470" />
          {/* Sword */}
          <line x1="910" y1="295" x2="920" y2="375" strokeOpacity="0.3"/>
        </g>
        {/* Star halos */}
        <circle cx="820" cy="160" r="22" fill="url(#hero-betel)"/>
        <circle cx="1050" cy="470" r="22" fill="url(#hero-rigel)"/>
        {/* Stars */}
        <circle cx="820"  cy="160" r="6"   fill="#C71F3A"/>
        <circle cx="1020" cy="130" r="3.4" fill="#F1ECE2"/>
        <circle cx="840"  cy="285" r="3"   fill="#F1ECE2"/>
        <circle cx="910"  cy="295" r="3.5" fill="#F1ECE2"/>
        <circle cx="980"  cy="305" r="3"   fill="#F1ECE2"/>
        <circle cx="910"  cy="325" r="1.8" fill="#F4D35E" opacity="0.8"/>
        <circle cx="915"  cy="350" r="2.2" fill="#F4D35E"/>
        <circle cx="920"  cy="375" r="1.6" fill="#F4D35E" opacity="0.7"/>
        <circle cx="820"  cy="430" r="2.6" fill="#F1ECE2"/>
        <circle cx="1050" cy="470" r="5.4" fill="#9BB8FF"/>
        {/* Tiny label */}
        <text x="1140" y="104"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10" fill="#2C5BA0" opacity="0.7"
              letterSpacing="3" textAnchor="end">★ ORION</text>
      </svg>
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>{children}</div>
    </div>
  );
}

// ---- Header ----
function Header() {
  const nav = ['Games', 'Devlog', 'About', 'Press'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(5, 7, 21, 0.78)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 'var(--maxw-page)', margin: '0 auto',
        padding: '14px 32px',
        display: 'flex', alignItems: 'center', gap: 24,
      }}>
        <a href="#top" style={{
          display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', border: 0,
        }}>
          <MonogramIcon size={18} color="var(--accent)" />
          <span style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500,
            fontSize: 22, color: 'var(--fg-1)', letterSpacing: '-0.02em',
          }}>O<span style={{ color: 'var(--accent)' }}>8</span>infinitum</span>
        </a>
        <nav style={{ marginLeft: 32, display: 'flex', gap: 4 }}>
          {nav.map((n) =>
            <a key={n} href={`#${n.toLowerCase()}`} style={{
              padding: '8px 14px',
              fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-2)',
              textDecoration: 'none', border: 0, borderRadius: 4,
              transition: 'color 200ms var(--ease-out), background 200ms var(--ease-out)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--fg-1)'; e.currentTarget.style.background = 'var(--bg-elev-1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-2)'; e.currentTarget.style.background = 'transparent'; }}
            >{n}</a>
          )}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <A11yToggle />
          <Button kind="mono" style={{ padding: '8px 14px', fontSize: 11 }}>
            $ subscribe
          </Button>
        </div>
      </div>
    </header>
  );
}

// ---- Footer ----
function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '64px 32px 40px',
      marginTop: 96,
    }}>
      <div style={{ maxWidth: 'var(--maxw-page)', margin: '0 auto',
                    display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 64,
                    alignItems: 'start' }}>
        <div>
          <Wordmark size={48} />
          <p style={{
            marginTop: 18, fontFamily: 'var(--font-body)', fontSize: 14,
            color: 'var(--fg-2)', lineHeight: 1.55, maxWidth: '36ch',
          }}>
            A tiny studio that cares a lot about the games it makes. Run by Orion;
            named for the constellation, the lucky number, and the hope of lasting.
          </p>
          <Eyebrow style={{ marginTop: 22 }}>
            ★ &nbsp; est · mmxxvi &nbsp; ★
          </Eyebrow>
        </div>
        <div>
          <Eyebrow style={{ marginBottom: 14 }}>Games</Eyebrow>
          {['What In The Health?', 'Neon Vespers', 'Quanta', 'Older work'].map(g => (
            <a key={g} href="#" style={{
              display: 'block', padding: '5px 0', fontSize: 14,
              color: 'var(--fg-1)', textDecoration: 'none', border: 0,
            }}>{g}</a>
          ))}
        </div>
        <div>
          <Eyebrow style={{ marginBottom: 14 }}>Studio</Eyebrow>
          {['Devlog', 'About', 'Press kit', 'Newsletter'].map(g => (
            <a key={g} href="#" style={{
              display: 'block', padding: '5px 0', fontSize: 14,
              color: 'var(--fg-1)', textDecoration: 'none', border: 0,
            }}>{g}</a>
          ))}
        </div>
        <div>
          <Eyebrow style={{ marginBottom: 14 }}>Stay close</Eyebrow>
          {sent ? (
            <div style={{
              padding: '10px 12px', background: 'rgba(94,209,138,0.12)',
              color: 'var(--color-success)', borderRadius: 4,
              fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em',
            }}>✓ thanks · see you in the next devlog</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email.includes('@')) setSent(true); }}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@home.studio"
                style={{
                  width: '100%', fontFamily: 'var(--font-body)', fontSize: 13,
                  color: 'var(--fg-1)', background: 'var(--bg-elev-1)',
                  border: '1px solid var(--border-strong)', borderRadius: 4,
                  padding: '10px 12px', marginBottom: 8, outline: 'none',
                }}
              />
              <button type="submit" style={{
                width: '100%', background: 'var(--accent)', color: 'var(--bg)',
                border: 'none', borderRadius: 4, padding: '10px 12px',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13,
                cursor: 'pointer',
              }}>Subscribe</button>
            </form>
          )}
          <div style={{ marginTop: 16, display: 'flex', gap: 10, color: 'var(--fg-3)' }}>
            <a href="#" style={{ color: 'inherit', border: 0 }}><Ico size={18} d={Icons.steam}/></a>
            <a href="#" style={{ color: 'inherit', border: 0 }}><Ico size={18} d={Icons.itch}/></a>
            <a href="#" style={{ color: 'inherit', border: 0 }}><Ico size={18} d={Icons.rss}/></a>
          </div>
        </div>
      </div>
      <div style={{
        maxWidth: 'var(--maxw-page)', margin: '64px auto 0',
        display: 'flex', justifyContent: 'space-between',
        paddingTop: 24, borderTop: '1px solid var(--border)',
        fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)',
        letterSpacing: '0.18em', textTransform: 'uppercase',
      }}>
        <span>© mmxxvi · O8Infinitum studio · all rights returned</span>
        <span>lat. 38°n · lon. 122°w</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Wordmark, OrbitBackdrop, Header, Footer });
