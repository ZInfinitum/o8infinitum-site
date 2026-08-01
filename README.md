# o8infinitum.com — studio site (built from the Claude Design handoff)

Static site, fully self-hosted: React + Babel vendored in `vendor/`, Noto
Serif variable fonts + OpenDyslexic (a11y toggle) in `fonts/`, brand assets
in `assets/`. No build step — every file serves as-is.

**Georgia is gone** (Microsoft-licensed, cannot be self-hosted as a webfont).
Noto Serif — already the design system's own display serif, freely licensed —
now carries both display and body roles; Georgia remains only as a system-font
fallback name in stacks and in the SVG wordmarks. JetBrains Mono still loads
from Google Fonts and Plausible analytics from plausible.io; both degrade
gracefully if blocked.

`CNAME` targets o8infinitum.com for GitHub Pages. Deploy: copy this folder's
CONTENTS to the root of the pages repo/branch (see repo docs or ask Claude).
Local preview: `python3 -m http.server` in this folder.
