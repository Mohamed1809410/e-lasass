import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../hooks/useLang.jsx';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/equipment', label: t.nav.equipment },
    { to: '/services', label: t.nav.services },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/faq', label: t.nav.faq },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="nav-logo">
          <span className="logo-en">EL ASASS</span>
         
        </Link>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} className={pathname === l.to ? 'active' : ''}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
                    <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`mobile-link${pathname === l.to ? ' active' : ''}`}>{l.label}</Link>
          ))}
          <button className="lang-btn mobile-lang" onClick={toggleLang}>
            <Globe size={16} /> {t.langSwitch}
          </button>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 20px 0;
          transition: all 0.4s ease;
          background: transparent;
        }
        .navbar.scrolled {
          background: rgba(17,17,17,0.97);
          backdrop-filter: blur(12px);
          padding: 12px 0;
          box-shadow: 0 2px 30px rgba(0,0,0,0.5);
        }
        .nav-inner {
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo {
          display: flex; flex-direction: column; line-height: 1.1;
        }
        .logo-en {
          font-family: 'Inter', sans-serif;
          font-weight: 900; font-size: 1.4rem;
          color: var(--gold); letter-spacing: 3px;
        }
        .logo-ar {
          font-size: 0.85rem; color: rgba(255,255,255,0.7);
          font-weight: 400;
        }
        .nav-links {
          display: flex; align-items: center; gap: 32px;
        }
        .nav-links a {
          color: rgba(255,255,255,0.85); font-weight: 500; font-size: 0.95rem;
          position: relative; transition: color 0.3s;
        }
        .nav-links a::after {
          content: ''; position: absolute; bottom: -4px;
          left: 0; right: 0; height: 2px;
          background: var(--gold); transform: scaleX(0);
          transition: transform 0.3s;
        }
        .nav-links a:hover, .nav-links a.active { color: var(--gold); }
        .nav-links a:hover::after, .nav-links a.active::after { transform: scaleX(1); }
        .nav-actions { display: flex; align-items: center; gap: 16px; }
        .lang-btn {
          display: flex; align-items: center; gap: 6px;
          color: rgba(255,255,255,0.8); font-size: 0.9rem; font-weight: 500;
          font-family: inherit;
          padding: 6px 14px; border: 1px solid rgba(255,255,255,0.25);
          border-radius: 4px; transition: all 0.3s;
        }
        .lang-btn:hover { border-color: var(--gold); color: var(--gold); }
        .hamburger { display: none; color: var(--white); }
        .mobile-menu {
          display: none; flex-direction: column;
          background: var(--black); padding: 24px;
          border-top: 1px solid rgba(201,162,39,0.3);
        }
        .mobile-link {
          color: rgba(255,255,255,0.85); font-size: 1.1rem;
          padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.07);
          transition: color 0.3s;
        }
        .mobile-link:hover, .mobile-link.active { color: var(--gold); }
        .mobile-lang { margin-top: 20px; width: fit-content; }
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
          .mobile-menu { display: flex; }
        }
      `}</style>
    </nav>
  );
}
