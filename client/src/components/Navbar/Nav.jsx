import { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["stack", "work", "projects", "contact"];
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.1,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    if (activeSection === id) {
      e.preventDefault();
    }
  };

  return (
    <>
      {/* Left Navigation Rail */}

      <aside className="rail">

        <div className="rail-logo">
          RS
        </div>

        <nav className="rail-nav">
          <a 
            href="#stack" 
            className={activeSection === "stack" ? "active" : ""} 
            onClick={(e) => handleNavClick(e, "stack")}
          >
            01 STACK
          </a>
          <a 
            href="#work" 
            className={activeSection === "work" ? "active" : ""} 
            onClick={(e) => handleNavClick(e, "work")}
          >
            02 WORK
          </a>
          <a 
            href="#projects" 
            className={activeSection === "projects" ? "active" : ""} 
            onClick={(e) => handleNavClick(e, "projects")}
          >
            03 PROJECTS
          </a>
          <a 
            href="#contact" 
            className={activeSection === "contact" ? "active" : ""} 
            onClick={(e) => handleNavClick(e, "contact")}
          >
            04 CONTACT
          </a>
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
          <a 
            href="#projects" 
            className={activeSection === "projects" ? "active" : ""} 
            onClick={(e) => handleNavClick(e, "projects")}
          >
            Projects
          </a>
          <a href="https://github.com/RohitGkmit08" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          <a 
            href="#contact" 
            className={activeSection === "contact" ? "active" : ""} 
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </a>
        </nav>

      </nav>
    </>
  );
}

export default Nav;