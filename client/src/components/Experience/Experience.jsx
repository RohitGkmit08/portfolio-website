import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">

        <div className="experience-header">
          <h2>EXPERIENCE</h2>

          <div className="experience-divider">
            <span>02 / LEDGER OF WORK</span>
          </div>
        </div>

        <div className="experience-line"></div>

        <div className="experience-entry">

          <aside className="experience-meta">
            <p>Sept 2025 – Mar 2026</p>
            <p>Udaipur, India</p>
          </aside>

          <div className="experience-content">

            <h3>Frontend Developer Intern</h3>

            <h4>GKM IT (spark 18)</h4>

            <ul>
              <li>
                Built RBAC and workflow-state transitions into a Jira-like task management system (React + TypeScript), 
                enabling controlled task tracking across two role types.
              </li>

              <li>
                Shipped a full-stack blogging platform with JWT authentication, an admin dashboard,
                and Nodemailer-based moderation alerts for pending, approved, and rejected states.
              </li>

              <li>
                Designed reusable, controlled React components (forms, selects, modals) that cut duplicate UI code across features.
              </li>

              <li>
                Wrote unit and integration tests with Vitest and React Testing Library, catching regressions before they reached production.
              </li>

              <li>
                Deployed and managed applications on AWS EC2, getting hands-on with real production release workflows.
              </li>

              <li>
                Collaborated with peers and senior engineers through GitHub 
                — raising pull requests and incorporating code review feedback before merging.
              </li>
            </ul>

          </div>

        </div>

        <div className="experience-line"></div>

      </div>
    </section>
  );
}

export default Experience;