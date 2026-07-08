import { projectsData } from "../../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects dark" id="projects">
      <div className="container">
        
        <div className="sec-head">
          <span className="sec-num">03 / ENTRIES</span>
          <h2 className="sec-title">Projects</h2>
        </div>

        <div className="entry-grid">
          {projectsData.map((project) => (
            <div className="entry" key={project.id}>
              
              <div className="entry-head">
                <span className="entry-no">{project.entryNo}</span>
                <div className="entry-links">
                  {typeof project.github === "string" ? (
                    <a 
                      className="entry-link" 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  ) : (
                    <>
                      <a 
                        className="entry-link" 
                        href={project.github.frontend} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Frontend ↗
                      </a>
                      <a 
                        className="entry-link" 
                        href={project.github.backend} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Backend ↗
                      </a>
                    </>
                  )}
                </div>
              </div>

              <div className="entry-title">{project.title}</div>

              <div className="entry-cols">
                
                <div className="dr">
                  <div className="entry-col-label">Built with</div>
                  <p>{project.builtWith}</p>
                </div>

                <div className="cr">
                  <div className="entry-col-label">Delivered</div>
                  <p>{project.delivered}</p>
                </div>

              </div>

              <div className="tag-row">
                {project.tags.map((tag, idx) => (
                  <span className="tag" key={idx}>{tag}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
