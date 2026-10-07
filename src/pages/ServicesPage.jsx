import { Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading.jsx';

const services = [
  ['01', 'AI Automation', 'Build automated workflows using n8n, AI models and business tools.', 'Webhook', 'AI Agent', 'IF / Else', 'CRM / Email'],
  ['02', 'API Integration', 'Connect SaaS platforms, CRMs, databases and custom applications.', 'REST API', 'Webhooks', 'OAuth', 'Connected apps'],
  ['03', 'AI Agents', 'Build assistants, support agents and task automation.', 'Search company information', 'Summarize key details', 'Generate personalized response'],
  ['04', 'Voice AI', 'Deploy voice agents for calls, appointments and customer support.', 'Incoming call', 'Agent responds', 'Appointment booked'],
  ['05', 'Lead Automation', 'Automate lead capture, enrichment, qualification and follow-ups.', 'Capture', 'Enrich', 'Qualify', 'Route'],
  ['06', 'Data Automation', 'Build scraping, enrichment, transformation and reporting pipelines.', 'Scrape / API', 'Transform', 'Database', 'Report'],
];

const commonTools = ['n8n', 'OpenAI', 'HubSpot', 'GoHighLevel', 'Gmail', 'Google Sheets', 'PostgreSQL', 'Vapi', 'WhatsApp', 'Make', 'Zapier'];

export default function ServicesPage() {
  return (
    <>
      <PageHeading
        eyebrow="OUR SERVICES"
        title={<>Automation solutions built for <em>real business needs.</em></>}
        description="I design and build AI-powered automations, API integrations and business systems that save time, reduce manual work and help businesses operate more efficiently."
      >
        <div className="hero-actions"><a className="btn primary" href="#services">Explore Services →</a><Link className="btn ghost" to="/work">View Projects →</Link></div>
      </PageHeading>
      <section className="section" id="services">
        <div className="services-grid">
          {services.map(([number, title, description, ...steps], index) => (
            <article className={`panel service-card${index < 2 ? ' large' : ''}`} key={number}>
              <span className="service-num">{number}</span><h3>{title}</h3><p>{description}</p>
              <div className={index < 2 ? 'workflow-box' : 'api-box'}>
                {index === 2 ? (
                  <div className="agent-box">{steps.map((step) => <div className="agent-line" key={step}><span>◉</span><span>{step}</span><b>✓</b></div>)}</div>
                ) : (
                  <div className="horizontal-flow">
                    {steps.map((step, stepIndex) => <span className="step" key={step}><strong>{step}</strong><small>{stepIndex === 0 ? 'Start' : 'Connected step'}</small></span>)}
                  </div>
                )}
                <div className="mini-row"><span>Workflow run</span><span>Ready</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-title"><div><div className="kicker">COMMON TOOLS</div><h2>Built around the tools you already use.</h2></div></div>
        <div className="tools">{commonTools.map((tool) => <span className="tool" key={tool}>{tool}</span>)}</div>
      </section>
      <section className="panel cta"><div><div className="kicker">READY TO BUILD?</div><h2>Have a process you want to automate?</h2></div><Link className="btn primary" to="/work">View Projects →</Link></section>
    </>
  );
}
