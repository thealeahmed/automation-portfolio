import { Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading.jsx';

const groups = [
  [['AI & Intelligence', 'OpenAI', 'GPT Models', 'RAG', 'Vector DBs', 'AI Agents'], ['Communication', 'Gmail', 'WhatsApp', 'SMS', 'RingCentral'], ['Data', 'PostgreSQL', 'Google Sheets', 'Web Scraping', 'Enrichment']],
  [['CRM / Business', 'GoHighLevel', 'HubSpot', 'Zoho', 'Monday.com', 'Coupler.io'], ['Voice AI', 'Vapi', 'WAVV', 'Telephony APIs'], ['APIs / Integration', 'REST', 'JSON', 'Webhooks', 'OAuth', 'Third-party APIs']],
];

export default function StackPage() {
  return (
    <>
      <PageHeading
        eyebrow="TECHNOLOGY STACK"
        title={<>Tools &amp; platforms I <em>work with.</em></>}
        description="A focused stack for building automation systems, AI integrations, API-driven workflows and connected business operations."
      />
      <section className="section">
        <div className="stack-map">
          <div className="stack-col">
            {groups[0].map(([title, ...tools]) => <article className="panel stack-group" key={title}><h3>{title}</h3><div className="tools">{tools.map((tool) => <span className="tool" key={tool}>{tool}</span>)}</div></article>)}
          </div>
          <div className="panel stack-center"><div><strong>n8n</strong><small>Automation Layer</small></div></div>
          <div className="stack-col">
            {groups[1].map(([title, ...tools]) => <article className="panel stack-group" key={title}><h3>{title}</h3><div className="tools">{tools.map((tool) => <span className="tool" key={tool}>{tool}</span>)}</div></article>)}
          </div>
        </div>
        <div className="tech-examples">
          <article className="panel example"><h3>API Integration</h3><pre>{'POST /api/contact\nAuthorization: ******\nContent-Type: application/json\n\n200 OK'}</pre></article>
          <article className="panel example"><h3>Workflow Trigger</h3><pre>{'{\n  "trigger": "webhook",\n  "event": "lead.created",\n  "source": "website"\n}'}</pre></article>
          <article className="panel example"><h3>AI Processing</h3><pre>{'input\n→ classify intent\n→ retrieve context\n→ generate response\n→ validate output'}</pre></article>
        </div>
      </section>
      <section className="panel cta"><div><div className="kicker">NEED AN INTEGRATION?</div><h2>Connect the tools already running your business.</h2></div><Link className="btn primary" to="/work">View Projects →</Link></section>
    </>
  );
}
