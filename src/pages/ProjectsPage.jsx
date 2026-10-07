import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CaseStudyModal from '../components/CaseStudyModal.jsx';
import PageHeading from '../components/PageHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import useProjects from '../hooks/useProjects.js';

const filters = [
  ['All', 'all'],
  ['AI Automation', 'ai automation'],
  ['API Integration', 'api integration'],
  ['Voice AI', 'voice ai'],
  ['Lead Automation', 'lead automation'],
  ['Data Automation', 'data automation'],
];

export default function ProjectsPage() {
  const { projects, loading, error } = useProjects();
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const closeCase = useCallback(() => setSelectedProject(null), []);
  const visibleProjects = useMemo(
    () => filter === 'all' ? projects : projects.filter((project) => project.category === filter),
    [filter, projects],
  );

  return (
    <>
      <PageHeading
        eyebrow="SELECTED PROJECTS · 17 BUILDS"
        title={<>Real automation systems for <em>real businesses.</em></>}
        description="AI automation, API integrations, voice systems and data pipelines built around practical business problems — with the workflow shown wherever a project banner is available."
      />
      <section className="section">
        <div className="filters" aria-label="Filter projects">
          {filters.map(([label, value]) => (
            <button key={value} className={`filter${filter === value ? ' active' : ''}`} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>
              {label}
            </button>
          ))}
        </div>
        {error && <p className="api-error" role="alert">Projects could not be loaded: {error}</p>}
        {loading && <p className="loading-message" role="status">Loading projects…</p>}
        {!loading && !error && visibleProjects.length === 0 && <p className="empty-state">No projects are available in this category.</p>}
        {!loading && !error && (
          <div className="project-grid">
            {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} onOpen={setSelectedProject} />)}
          </div>
        )}
      </section>
      <section className="panel cta"><div><div className="kicker">NEED SOMETHING SIMILAR?</div><h2>Tell me what needs to connect.</h2></div><Link className="btn primary" to="/work">Explore Projects →</Link></section>
      <CaseStudyModal project={selectedProject} onClose={closeCase} />
    </>
  );
}
