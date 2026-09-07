import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <header className="nav">
      <NavLink to="/" className="nav-logo">
        eskazee<span className="dot">.</span>
      </NavLink>
      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <NavLink to="/contact" className="nav-cta">Let's talk</NavLink>
    </header>
  );
}
