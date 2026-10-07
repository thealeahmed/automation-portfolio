import { Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading.jsx';

export default function ContactPage() {
  return (
    <>
      <PageHeading
        eyebrow="PROJECT ENQUIRIES"
        title={<>Keep project conversations <em>on-platform.</em></>}
        description="This portfolio intentionally does not publish direct contact details or an off-platform enquiry form. For work originating through a freelance marketplace, continue the conversation through that marketplace."
      />
      <section className="section">
        <article className="panel policy-card">
          <div className="kicker">PORTFOLIO POLICY</div>
          <h2>No direct contact information is published here.</h2>
          <p>Explore the work, services and technical stack on this site, then continue any project discussion through the platform where you found this portfolio.</p>
          <Link className="btn primary" to="/work">Browse Projects →</Link>
        </article>
      </section>
    </>
  );
}
