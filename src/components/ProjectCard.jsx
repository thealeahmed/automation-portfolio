export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="panel project-card">
      <button className="project-open" type="button" onClick={() => onOpen(project)} aria-label={`Open case study: ${project.title}`}>
        <div className="project-image">
          <img src={`/${project.image}`} alt={`${project.title} workflow`} loading="lazy" />
          <div className="project-hover">
            <span>{project.category}</span>
            <strong>Open case study</strong>
            <b aria-hidden="true">↗</b>
          </div>
        </div>
        <div className="project-card-body">
          <div className="project-meta">
            <span className="project-number">{project.number}</span>
            <span className="role">{project.role}</span>
          </div>
          <div className="tags">
            {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="workflow-label">WORKFLOW</div>
          <div className="workflow-text">{project.workflow}</div>
        </div>
      </button>
      <details className="project-details">
        <summary>Skills &amp; deliverables</summary>
        <ul>{project.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
      </details>
    </article>
  );
}
