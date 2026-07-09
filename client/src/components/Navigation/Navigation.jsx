import { useState, useEffect } from "react";
import "./Navigation.css";

function Navigation() {
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
      const element = document.getElementById(id);
      if (element) observer.observe(element);
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
      {/* (Visible on Desktop) */}
      <aside className="navigation-rail" aria-label="Global sidebar navigation">
        <div className="navigation-rail-logo">RS</div>

        <nav className="navigation-rail-menu" aria-label="Sidebar section links">
          <a 
            href="#stack" 
            className={`navigation-rail-link ${activeSection === "stack" ? "active" : ""}`} 
          >
            01 STACK
          </a>
          <a 
            href="#work" 
            className={`navigation-rail-link ${activeSection === "work" ? "active" : ""}`} 
          >
            02 WORK
          </a>
          <a 
            href="#projects" 
            className={`navigation-rail-link ${activeSection === "projects" ? "active" : ""}`} 
          >
            03 PROJECTS
          </a>
          <a 
            href="#contact" 
            className={`navigation-rail-link ${activeSection === "contact" ? "active" : ""}`} 
          >
            04 CONTACT
          </a>
        </nav>

        <div className="navigation-rail-indicator" aria-hidden="true" />
      </aside>

      {/* (Visible on Mobile/Tablet) */}
      <nav className="floating-pill-nav" aria-label="Floating navigation">
        <div className="floating-pill-status">
            <span className="status-dot" aria-hidden="true"></span>
            <span className="status-text">Available for work</span>
        </div>

        <div className="floating-pill-menu">
          <a 
            href="#projects" 
            className={`floating-pill-link ${activeSection === "projects" ? "active" : ""}`} 
          >
            Projects
          </a>
          <a 
            href="https://github.com/RohitGkmit08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="floating-pill-link"
            aria-label="GitHub profile (opens in new tab)"
          >
            GitHub
          </a>
          <a 
            href="#contact" 
            className={`floating-pill-link ${activeSection === "contact" ? "active" : ""}`} 
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
