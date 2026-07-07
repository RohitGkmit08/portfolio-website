import { experienceData } from "../../data/experience";
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