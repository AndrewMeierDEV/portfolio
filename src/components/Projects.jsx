import { projects } from "../data/portfolio.js";
import ProjectPreview from "./ProjectPreview.jsx";

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <ProjectPreview type={project.type} />
      <div className="project-body">
        <div className="project-meta">
          <span>0{index + 1} / {project.category}</span>
          <span>CONCEPTO</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / EXPLORACIONES</p>
          <h2 id="projects-title">Ideas en <span>pantalla.</span></h2>
        </div>
        <p>Una selección de conceptos.<br />Distintos problemas, el mismo cuidado.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
