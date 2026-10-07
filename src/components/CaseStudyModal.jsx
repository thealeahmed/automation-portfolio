import { useEffect, useRef } from 'react';

export default function CaseStudyModal({ project, onClose }) {
  const closeButton = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const previousFocus = document.activeElement;
    document.body.classList.add('modal-open');
    closeButton.current?.focus();
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="case-modal open" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div className="case-dialog" role="dialog" aria-modal="true" aria-labelledby="case-title">
        <div className="case-head">
          <small>CASE STUDY</small>
          <button ref={closeButton} className="case-close" type="button" onClick={onClose} aria-label="Close case study">×</button>
        </div>
        <div className="case-content">
          <div className="tags"><span className="tag">{project.category}</span></div>
          <h2 id="case-title">{project.title}</h2>
          <div className="case-role">{project.role}</div>
          <div className="case-media"><img src={`/${project.image}`} alt={`${project.title} workflow`} /></div>
          <div className="case-grid">
            <section className="case-block">
              <h3>Project</h3>
              <p>{project.description}</p>
            </section>
            <section className="case-block">
              <h3>Workflow</h3>
              <p>{project.workflow}</p>
            </section>
            <section className="case-block full">
              <h3>Integrations &amp; tools</h3>
              <div className="case-tags">{project.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
