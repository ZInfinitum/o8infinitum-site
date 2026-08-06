// app.jsx — top-level studio site composition.

const { Header, Footer, Hero, NowMaking, DevlogTeaser, About } = window;

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NowMaking />
        <DevlogTeaser />
        <About />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
