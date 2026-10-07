import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import CaseStudyModal from '../components/CaseStudyModal.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import useProjects from '../hooks/useProjects.js';

const capabilities = [
  ['AI Automation', 'End-to-end workflows using n8n, AI models and your existing business tools.'],
  ['API Integration', 'REST, webhooks, OAuth and custom data flows between SaaS platforms.'],
  ['AI Agents', 'Assistants that reason over context, use tools and hand off when needed.'],
  ['Voice AI', 'Call handling, qualification and appointment booking connected to your systems.'],
  ['Data Pipelines', 'Scraping, enrichment, transformation and reporting across multiple sources.'],
];

function WorkflowPreview() {
  return (
    <div className="panel workflow-hero">
      <div className="workflow-top"><span className="status"><b>●</b> Workflow Active</span><span className="chip">Live system</span></div>
      <div className="flow">
        {[
          ['Webhook', 'New lead'],
          ['Enrichment', 'Fetch context'],
          ['AI Agent', 'Qualify lead'],
          ['CRM', 'Create / update'],
        ].map(([title, detail]) => (
          <div className="flow-card" key={title}><strong>{title}</strong><small>{detail}</small></div>
        ))}
      </div>
      <div className="hero-stats">
        <div className="hero-stat"><strong>17+</strong><small>automation projects</small></div>
        <div className="hero-stat"><strong>AI + API</strong><small>connected systems</small></div>
        <div className="hero-stat"><strong>24/7</strong><small>workflow execution</small></div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const { projects, loading, error } = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);
  const closeCase = useCallback(() => setSelectedProject(null), []);
  const featured = [
    projects.find((project) => project.slug === 'ai-voice-agent-and-appointment-automation'),
    projects.find((project) => project.slug.includes('travelgate-fastx')),
  ].filter(Boolean);

  return (
    <>
      <section className="home-hero">
        <div className="home-copy">
          <div className="eyebrow">AI AUTOMATION &amp; API INTEGRATION SPECIALIST</div>
          <h1>AI Automation &amp; <em>API Integrations</em> That Run Real Work.</h1>
          <p>I build n8n workflows, AI agents and API integrations that connect your tools, automate repetitive processes and turn manual operations into reliable systems.</p>
          <div className="hero-actions"><Link className="btn primary" to="/work">View Projects →</Link><Link className="btn ghost" to="/work">View My Work</Link></div>
          <div className="tech-chips">{['n8n', 'OpenAI', 'REST APIs', 'Vapi', 'CRM Automation'].map((tool) => <span className="chip" key={tool}>{tool}</span>)}</div>
        </div>
        <WorkflowPreview />
      </section>

      <section className="cap-strip" aria-label="Portfolio capabilities">
        {[['17+', 'Projects'], ['AI + API', 'Integrations'], ['n8n', 'Workflows'], ['Voice AI', 'Systems'], ['CRM', 'Automation'], ['Data', 'Pipelines']].map(([number, label]) => (
          <div className="cap" key={label}><strong>{number}</strong><small>{label}</small></div>
        ))}
      </section>

      <section className="section">
        <div className="section-title">
          <div><div className="kicker">WHAT I BUILD</div><h2>Systems, not isolated scripts.</h2></div>
          <p>Every build connects tools, logic and business processes into something that can run reliably in the real world.</p>
        </div>
        <div className="home-grid">
          {capabilities.map(([title, description], index) => (
            <article className={`panel feature-card${index === 0 ? ' feature-big' : ''}`} key={title}>
              <h3>{title}</h3><p>{description}</p>
              <div className="mini-ui">
                {(index === 0
                  ? [['Webhook received', 'Success'], ['AI enrichment', 'Complete'], ['CRM updated', 'Complete'], ['Follow-up sent', 'Complete']]
                  : [['Workflow step', 'Active'], ['Connected system', 'Synced']]
                ).map(([label, status]) => <div className="mini-row" key={label}><span>{label}</span><span>{status}</span></div>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <div><div className="kicker">SELECTED WORK</div><h2>Real systems I&apos;ve built.</h2></div>
          <Link className="btn ghost" to="/work">View all projects →</Link>
        </div>
        {error && <p className="api-error" role="alert">Projects could not be loaded: {error}</p>}
        {loading && <p className="loading-message" role="status">Loading projects…</p>}
        {!loading && !error && (
          <div className="project-grid">
            {featured.map((project) => <ProjectCard key={project.slug} project={project} onOpen={setSelectedProject} />)}
          </div>
        )}
      </section>

      <section className="panel cta"><div><div className="kicker">LET&apos;S BUILD TOGETHER</div><h2>Have a process you want to automate?</h2></div><Link className="btn primary" to="/work">View Projects →</Link></section>
      <CaseStudyModal project={selectedProject} onClose={closeCase} />
    </>
  );
}
