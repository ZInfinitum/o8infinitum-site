// Sections.jsx — Hero, NowMaking, DevlogTeaser, About.

const { Eyebrow, Button, Wordmark, OrbitBackdrop, GameCard, DevlogCard, MonogramIcon, Ico, Icons } = window;

// ---- Hero ----
function Hero() {
  return (
    <section id="top" style={{ position: 'relative' }}>
      <OrbitBackdrop height={680}>
        <div style={{
          maxWidth: 'var(--maxw-page)', margin: '0 auto',
          height: '100%', padding: '0 32px',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', gap: 24,
        }}>
          <Eyebrow>★ &nbsp; orion · eight · infinitum &nbsp; ★</Eyebrow>

          {/* Wordmark — hero size */}
          <Wordmark size={220} />

          <div style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 32, lineHeight: 1.15, color: 'var(--fg-2)',
            maxWidth: '24ch',
          }}>
            a studio for games that&nbsp;
            <span style={{ color: 'var(--fg-1)', fontWeight: 500 }}>last</span>
            &nbsp;forever.
          </div>

          <div style={{
            marginTop: 12, display: 'flex', gap: 14, alignItems: 'center',
          }}>
            <Button kind="primary" onClick={() => document.getElementById('games').scrollIntoView({ behavior: 'smooth' })}>
              See what I'm making
              <Ico size={16} d={Icons.arrowDown} />
            </Button>
            <Button kind="secondary" onClick={() => document.getElementById('devlog').scrollIntoView({ behavior: 'smooth' })}>
              Read the devlog
            </Button>
          </div>
        </div>
      </OrbitBackdrop>
    </section>
  );
}

// ---- Now making ----
function NowMaking() {
  const games = [
    { title: 'What In The Health?', tagline: 'A roguelite for healers. Eight floors. Zero damage dealt.',
      status: 'in development', tags: ['Roguelite', 'Healer', 'PC · Mac'], color: 'ruby', seed: 3 },
    { title: 'Neon Vespers',  tagline: 'An action-platformer for the small hours of the morning.',
      status: 'in development', tags: ['Action', 'Platformer', 'PC'], color: 'imperial', seed: 7 },
    { title: 'Quanta',        tagline: 'A pocket puzzle game about superpositions and second chances.',
      status: 'demo', tags: ['Puzzle', 'Casual', 'iOS · Android'], color: 'bayside', seed: 11 },
  ];
  return (
    <section id="games" style={{
      maxWidth: 'var(--maxw-page)', margin: '128px auto 0', padding: '0 32px',
    }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 24,
        marginBottom: 40,
      }}>
        <Eyebrow>01 — now making</Eyebrow>
        <hr style={{ flex: 1, border: 0, borderTop: '1px solid var(--border)' }} />
        <a href="#" style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent-2)',
          letterSpacing: '0.18em', textTransform: 'uppercase',
          textDecoration: 'none', border: 0,
        }}>archive →</a>
      </div>

      <h2 style={{
        fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500,
        fontSize: 56, lineHeight: 1.0, letterSpacing: '-0.025em',
        color: 'var(--fg-1)', maxWidth: '18ch', margin: '0 0 48px',
      }}>
        Three games <span style={{ color: 'var(--accent)' }}>at once.</span> On purpose.
      </h2>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
      }}>
        {games.map((g, i) => <GameCard key={i} {...g} />)}
      </div>
    </section>
  );
}

// ---- Devlog teaser ----
function DevlogTeaser() {
  const posts = [
    { number: 8, title: 'On the smell of old code',
      excerpt: 'I went back to the prototype I made a year ago. Most of it is unrecognizable. Some of it is exactly what the game still needs.',
      date: '14·v·26', mins: 4 },
    { number: 7, title: 'A heal that feels right',
      excerpt: 'A whole devlog about one parameter. Cast time, target priority, and why "realistic" almost never lands.',
      date: '02·v·26', mins: 6 },
    { number: 6, title: 'Why eight schools of healing',
      excerpt: 'The number eight is in the studio name for a reason. Here is how it ended up structuring a game.',
      date: '21·iv·26', mins: 5 },
  ];
  return (
    <section id="devlog" style={{
      maxWidth: 'var(--maxw-page)', margin: '128px auto 0', padding: '0 32px',
    }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 32,
      }}>
        <Eyebrow>02 — from the devlog</Eyebrow>
        <hr style={{ flex: 1, border: 0, borderTop: '1px solid var(--border)' }} />
        <a href="#" style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent-2)',
          letterSpacing: '0.18em', textTransform: 'uppercase',
          textDecoration: 'none', border: 0,
        }}>all 008 posts →</a>
      </div>

      <h2 style={{
        fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500,
        fontSize: 56, lineHeight: 1.0, letterSpacing: '-0.025em',
        color: 'var(--fg-1)', maxWidth: '18ch', margin: '0 0 16px',
      }}>
        Slow notes from the workbench.
      </h2>

      <div style={{ borderBottom: '1px solid var(--border)' }}>
        {posts.map((p) => <DevlogCard key={p.number} {...p} />)}
      </div>
    </section>
  );
}

// ---- About ----
function About() {
  return (
    <section id="about" style={{
      maxWidth: 'var(--maxw-page)', margin: '128px auto 0', padding: '0 32px',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 40 }}>
        <Eyebrow>03 — about the studio</Eyebrow>
        <hr style={{ flex: 1, border: 0, borderTop: '1px solid var(--border)' }} />
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80,
        alignItems: 'start',
      }}>
        <div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500,
            fontSize: 56, lineHeight: 1.0, letterSpacing: '-0.025em',
            color: 'var(--fg-1)', margin: '0 0 32px',
          }}>
            Hi, I'm <span style={{ color: 'var(--accent)' }}>Orion</span>.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65,
            color: 'var(--fg-1)', margin: '0 0 18px',
          }}>
            I make games on nights and weekends. Most are video games (platformers,
            roguelikes, puzzlers), but I'll happily design a card game or a one-page RPG
            if the idea calls for it.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65,
            color: 'var(--fg-2)', margin: '0 0 18px',
          }}>
            The studio is called O8Infinitum because <strong style={{ color: 'var(--fg-1)' }}>O</strong> is for Orion,
            <strong style={{ color: 'var(--accent)' }}> 8</strong> is my lucky number, and rotated 90°
            an 8 becomes ∞. The hope is that what I make lasts. Either because someone
            else picks it up, or because someone makes a better thing because of it.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65,
            color: 'var(--fg-2)', margin: 0,
          }}>
            Outside of games I think a lot about quantum mechanics, psychology, nature,
            and food. That probably shows up in the games eventually.
          </p>
        </div>

        <aside style={{
          background: 'var(--bg-elev-1)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          padding: 28,
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {/* Photo placeholder */}
          <div style={{
            aspectRatio: '1 / 1', borderRadius: 'var(--radius-sm)',
            background: 'linear-gradient(135deg, #1a1043 0%, #4a1d6e 50%, #ff7a3a 110%)',
            position: 'relative', overflow: 'hidden', marginBottom: 8,
          }}>
            <div style={{
              position: 'absolute', inset: 0, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.24em', textTransform: 'uppercase',
            }}>
              ※ photo placeholder
            </div>
          </div>
          <Eyebrow>The facts</Eyebrow>
          {[
            ['Founded', '2026'],
            ['Founder', 'Orion (solo · for now)'],
            ['Based', 'NorCal · 38°N'],
            ['Open to', 'collab · publishing · press'],
          ].map(([k, v]) => (
            <div key={k} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '8px 0', borderBottom: '1px dashed var(--border)',
              fontFamily: 'var(--font-mono)', fontSize: 13,
            }}>
              <span style={{ color: 'var(--fg-3)' }}>{k}</span>
              <span style={{ color: 'var(--fg-1)' }}>{v}</span>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, NowMaking, DevlogTeaser, About });
