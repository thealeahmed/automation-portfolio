import { Link } from 'react-router-dom';

const process = [
  ['01', 'Understand', 'Map the current process and identify repetitive work.'],
  ['02', 'Connect', 'Integrate the right APIs, tools and data sources.'],
  ['03', 'Automate', 'Build workflow logic, AI processing and actions.'],
  ['04', 'Optimize', 'Test edge cases, improve reliability and refine the system.'],
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-copy">
          <div className="eyebrow">ABOUT ME</div>
          <h1>I build systems, <em>not isolated scripts.</em></h1>
          <p className="lead about-lead">I connect AI, APIs and business tools into practical automated systems that reduce repetitive work and improve how businesses operate.</p>
          <div className="hero-actions"><Link className="btn primary" to="/work">View Projects →</Link><Link className="btn ghost" to="/work">View My Work</Link></div>
        </div>
        <article className="panel code-card"><pre>{'{\n  '}<span className="k">"focus"</span>{': '}<span className="s">"AI Automation"</span>{',\n  '}<span className="k">"automation"</span>{': '}<span className="s">"n8n"</span>{',\n  '}<span className="k">"integration"</span>{': '}<span className="s">"REST / Webhooks / OAuth"</span>{',\n  '}<span className="k">"systems"</span>{': '}<span className="s">"CRM / Voice / Data"</span>{',\n  '}<span className="k">"approach"</span>{': '}<span className="s">"Practical + Reliable"</span>{'\n}'}</pre></article>
      </section>
      <section className="section">
        <div className="section-title"><div><div className="kicker">WHAT I ACTUALLY DO</div><h2>Connect. Automate. Improve.</h2></div></div>
        <div className="about-cols">
          {[
            ['Connect', 'I connect business platforms, APIs, CRMs, databases and communication tools so information can move reliably between systems.'],
            ['Automate', 'I turn repetitive steps into workflows with triggers, conditions, AI processing, integrations and automatic actions.'],
            ['Improve', 'I troubleshoot, test and refine integrations so they are easier to operate and more reliable over time.'],
          ].map(([title, text]) => <article className="panel about-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
      <section className="section">
        <div className="section-title"><div><div className="kicker">MY PROCESS</div><h2>A simple way to build reliable automation.</h2></div></div>
        <div className="process">{process.map(([number, title, description]) => <article className="panel process-card" key={number}><span className="n">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>
      <section className="section">
        <div className="section-title"><div><div className="kicker">AREAS I WORK ACROSS</div><h2>Focused on connected business systems.</h2></div></div>
        <div className="areas">{['AI Automation', 'n8n', 'API Integration', 'AI Agents', 'CRM Automation', 'Voice AI', 'Lead Generation', 'RAG', 'Data Pipelines', 'Web Scraping', 'Email Automation', 'Business Process Automation'].map((area) => <span className="tool" key={area}>{area}</span>)}</div>
      </section>
      <section className="panel cta"><div><div className="kicker">HAVE A SYSTEM IN MIND?</div><h2>Let&apos;s turn it into a connected workflow.</h2></div><Link className="btn primary" to="/work">View Projects →</Link></section>
    </>
  );
}
