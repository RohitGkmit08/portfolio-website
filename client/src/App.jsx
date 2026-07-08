import Nav from "./components/Navbar/Nav";
import Hero from "./components/Hero/Hero";
import Stack from "./components/Stack/Stack";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Stat from "./components/Stat/Stat";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Nav />

      <main className="site-content">
          <Hero/>
          <Stack/>
          <Experience/>
          <Projects/>
          <Stat/>
          <Contact/>
      </main>
    </>
  );
}

export default App;