import { experienceData } from "../../data/experience";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="work" aria-labelledby="experience-heading">
      <div className="container">

        <header className="section-header">
          <span className="section-number">02 / LEDGER OF WORK</span>
          <h2 className="section-title" id="experience-heading">Experience</h2>
        </header>

        {experienceData.map((exp) => (
          <div key={exp.id}>
            <div className="experience-entry">

              <aside className="experience-meta">
                <p>{exp.period}</p>
                <p>{exp.location}</p>
              </aside>

              <div className="experience-content">

                <h3>{exp.role}</h3>

                <h4>{exp.company}</h4>

                <ul>
                  {exp.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>

              </div>

            </div>

            <div className="experience-line"></div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Experience;