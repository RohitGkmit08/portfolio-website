import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">

        <div className="hero-top">
          <span className="hero-name">ROHIT SINHA</span>
          <span>UDAIPUR, INDIA</span>
          <span>FULL-STACK DEVELOPER</span>
        </div>

        <div className="hero-stage">
          <div className="dash-ring r1"></div>
          <div className="dash-ring r2"></div>
          
          <h1 className="poster">
            <span className="line">FRONT TO BACK,</span>
            <span className="line offset">BUILT TO</span>
            <span className="line">BALANCE.</span>
          </h1>

          <aside className="caption-card">
            <p>
                Full-stack developer working across React, Node.js, and MongoDB —
                comfortable owning a feature from the UI down to the database.
                300+ LeetCode problems solved along the way.
            </p>
          </aside>

        </div>

        <div className="hero-bottom">

          <p className="hero-description">
            React, TypeScript, Node.js and MongoDB, day to day — plus
            RBAC workflows, double-entry ledger design, Redis caching,
            GraphQL APIs, and payment integrations when the job needs
            precision, not just features.
         </p>

          <div className="hero-actions">

            <a 
              href="#projects" 
              className="btn btn-primary"
              aria-label="Scroll down to Projects list"
            >
                View Projects →
            </a>
            
            <a 
                href="https://github.com/RohitGkmit08"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (opens in new tab)"
            >
                GitHub ↗
            </a>

            <a
                href="/Rohit-sinha_resume.pdf"
                className="btn btn-secondary"
                download
                aria-label="Download resume PDF (Rohit Sinha)"
            >
                Download Resume ↓
            </a>

         </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;