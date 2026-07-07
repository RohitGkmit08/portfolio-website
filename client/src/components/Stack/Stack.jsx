import "./Stack.css";

function Stack() {
  return (
    <section className="stack" id="stack">
      <div className="container">

        <div className="stack-header">
          <h2>STACK</h2>

        
        <div className="stack-divider">
            <span>01 / ASSETS</span>
          </div>
        </div>

        <div className="stack-grid">

        <div className="stack-row">
            <span className="stack-label">Languages</span>
            <span className="stack-value">
            JavaScript (ES6+), TypeScript, C++
            </span>
        </div>

        <div className="stack-row">
            <span className="stack-label">Frontend</span>
            <span className="stack-value">
            React.js, Redux Toolkit, HTML5, CSS3, Vite
            </span>
        </div>

        <div className="stack-row">
            <span className="stack-label">Backend</span>
            <span className="stack-value">
            Node.js, Express.js, REST APIs, JWT Auth, OAuth2
            </span>
        </div>

        <div className="stack-row">
            <span className="stack-label">Database</span>
            <span className="stack-value">
            MongoDB, Mongoose, MongoDB Atlas
            </span>
        </div>

        <div className="stack-row">
            <span className="stack-label">Testing</span>
            <span className="stack-value">
            Vitest, React Testing Library
            </span>
        </div>

        <div className="stack-row">
            <span className="stack-label">DevOps</span>
            <span className="stack-value">
            Docker, AWS EC2, Git, GitHub, Postman
            </span>
        </div>

        </div>
      </div>
    </section>
  );
}

export default Stack;