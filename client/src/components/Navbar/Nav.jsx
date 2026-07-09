import { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["stack", "work", "projects", "contact"];
    
    const observerCallback = (entries) => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

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

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        setActiveSection("contact");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            aria-label="Scroll to Tech Stack section"
          >
            01 STACK
          </a>
          <a 
            href="#work" 
            className={activeSection === "work" ? "active" : ""} 
            aria-label="Scroll to Work Experience section"
          >
            02 WORK
          </a>
          <a 
            href="#projects" 
            className={activeSection === "projects" ? "active" : ""} 
            aria-label="Scroll to Projects section"
          >
            03 PROJECTS
          </a>
          <a 
            href="#contact" 
            className={activeSection === "contact" ? "active" : ""} 
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