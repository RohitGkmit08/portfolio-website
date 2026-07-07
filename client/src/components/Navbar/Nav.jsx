import "./Nav.css";

function Nav() {
  return (
    <>
      {/* Left Navigation Rail */}

      <aside className="rail">

        <div className="rail-logo">
          RS
        </div>

        <nav className="rail-nav">
          <a href="#stack">01 STACK</a>
          <a href="#work">02 WORK</a>
          <a href="#projects">03 PROJECTS</a>
          <a href="#contact">04 CONTACT</a>
        </nav>

        <div className="rail-dot"></div>

      </aside>

      {/* Floating Navigation */}

      <nav className="pill">

        <div className="pill-status">
            <span className="dot"></span>

            <span className="status-text">
                Available for work
            </span>
        </div>

        <nav className="pill-links">
          <a href="#projects">Projects</a>
          <a href="https://github.com/RohitGkmit08">
            GitHub
          </a>

          <a href="#contact">
            Contact
          </a>
        </nav>

      </nav>
    </>
  );
}

export default Nav;