import Nav from "./components/Navbar/Nav";
import Hero from "./components/Hero/Hero";
import Stack from "./components/Stack/Stack";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <>
      <Nav />

      <main className="site-content">
          <Hero/>
          <Stack/>
          <Experience/>
      </main>
    </>
  );
}

export default App;