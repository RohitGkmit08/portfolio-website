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
            aria-label="Scroll to Tech Stack section"
          >
            01 STACK
          </a>
          <a 
            href="#work" 
            className={activeSection === "work" ? "active" : ""} 
            onClick={(e) => handleNavClick(e, "work")}
            aria-label="Scroll to Work Experience section"
          >
            02 WORK
          </a>
          <a 
            href="#projects" 
            className={activeSection === "projects" ? "active" : ""} 
            onClick={(e) => handleNavClick(e, "projects")}
            aria-label="Scroll to Projects section"
          >
            03 PROJECTS
          </a>
          <a 
            href="#contact" 
            className={activeSection === "contact" ? "active" : ""} 
            onClick={(e) => handleNavClick(e, "contact")}
            aria-label="Scroll to Contact section"
          >
            04 CONTACT
          </a>
        </nav>

        <div className="rail-dot"></div>

      </aside>

      {/* Floating Navigation */}

      <div className="pill">

        <div className="pill-status">
            <span className="dot"></span>

            <span className="status-text">
                Available for work
            </span>
        </div>

        <nav className="pill-links" aria-label="Floating quick links">
          <a 
            href="#projects" 
            className={activeSection === "projects" ? "active" : ""} 
            onClick={(e) => handleNavClick(e, "projects")}
            aria-label="Scroll to Projects section"
          >
            Projects
          </a>
          <a 
            href="https://github.com/RohitGkmit08" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile (opens in new tab)"
          >
            GitHub
          </a>

          <a 
            href="#contact" 
            className={activeSection === "contact" ? "active" : ""} 
            onClick={(e) => handleNavClick(e, "contact")}
            aria-label="Scroll to Contact section"
          >
            Contact
          </a>
        </nav>

      </div>
    </>
  );
}

export default Nav;