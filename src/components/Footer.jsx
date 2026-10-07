import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span>AA. — AI Automation &amp; API Integration Specialist</span>
        <div className="footlinks">
          <Link to="/work">Work</Link>
          <Link to="/services">Services</Link>
          <Link to="/stack">Stack</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </footer>
  );
}
