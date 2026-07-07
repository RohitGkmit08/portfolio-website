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

          <div className="hero-title">
           <h1>
             <span>FRONT TO</span>
             <span>BACK,</span>
             <span className="accent offset">BUILT TO</span>
             <span>BALANCE.</span>
           </h1>
          </div>

          <aside className="hero-card">
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

            <a href="#projects" className="btn btn-primary">
                View Projects →
            </a>

            <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
            >
                GitHub ↗
            </a>

            <a
                href="#"
                className="btn btn-secondary"
            >
                Download Resume ↓
            </a>

         </div>

        </div>

      </div>
        <div className="hero-circle hero-circle-top"></div>
        <div className="hero-circle hero-circle-bottom"></div>
    </section>
  );
}

export default Hero;