import Nav from "./components/Navbar/Nav";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <>
      <Nav />

      <main className="site-content">
          <Hero/>
      </main>
    </>
  );
}

export default App;