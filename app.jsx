// app.jsx — HOLDING PAGE (2026-08-06, per Orion: "make my o8infinitum.com
// website have blank text. can keep the frame of the website, just remove the
// text so it's a blank website for now. its not ready to be visible to the
// public.")
//
// The site's real composition is preserved verbatim in app.full.jsx, and every
// section/card/layout component is still in the repo untouched. TO RESTORE THE
// FULL SITE: copy app.full.jsx over app.jsx (and revert the blanked <title> /
// meta description / og+twitter tags in index.html, which were emptied so the
// studio copy does not surface in browser tabs, search results, or social
// previews while the site is parked).
//
// What renders now: the styled shell only - the page background, fonts and
// colors from colors_and_type.css - with no text, no nav, and no content.

function App() {
  return <div className="o8-holding" aria-hidden="true" />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
