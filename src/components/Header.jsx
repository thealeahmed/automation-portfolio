import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navigation = [
  ['Home', '/'],
  ['Work', '/work'],
  ['Services', '/services'],
  ['Stack', '/stack'],
  ['About', '/about'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="container nav">
      <Link className="brand" to="/" onClick={closeMenu} aria-label="AA home">
        AA<i>.</i>
      </Link>
      <nav id="primary-navigation" className={`navlinks${menuOpen ? ' mobile-open' : ''}`} aria-label="Main navigation">
        {navigation.map(([label, to]) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="navright">
        <span className="avail">Available for projects</span>
        <Link className="btn primary" to="/work">View Projects →</Link>
        <button
          className="menu"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </div>
    </header>
  );
}
