import { Link } from 'react-router-dom';
import { useLang } from '../hooks/useLang.jsx';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useLang();
  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/equipment', label: t.nav.equipment },
    { to: '/services', label: t.nav.services },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-en">EL ASASS</span>
            <span className="logo-ar">الأساس للمعدات الثقيلة</span>
          </div>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>

        <div className="footer-col">
          <h4>{t.footer.links}</h4>
          <ul>
            {links.map(l => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t.footer.contactUs}</h4>
          <ul className="contact-list">
            <li><Mail size={16} /> <a href="mailto:contact@elasass.com">contact@elasass.com</a></li>
            <li><Phone size={16} /> <a href="tel:+218910000000">+41 767659671</a></li>
            <li><MessageCircle size={16} /> <a href="https://wa.me/218910000000" target="_blank" rel="noreferrer">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t.footer.copyright}</p>
      </div>

      <style>{`
        footer {
          background: var(--black);
          color: rgba(255,255,255,0.7);
          padding-top: 70px;
          border-top: 1px solid rgba(201,162,39,0.2);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 60px;
          padding-bottom: 60px;
        }
        .footer-logo { margin-bottom: 16px; }
        .footer-logo .logo-en {
          display: block; font-family: 'Inter', sans-serif;
          font-weight: 900; font-size: 1.8rem;
          color: var(--gold); letter-spacing: 3px;
        }
        .footer-logo .logo-ar {
          font-size: 0.9rem; color: rgba(255,255,255,0.5);
        }
        .footer-tagline { font-size: 0.95rem; line-height: 1.7; max-width: 280px; }
        .footer-col h4 {
          color: var(--gold); font-size: 1rem; font-weight: 700;
          margin-bottom: 20px; padding-bottom: 10px;
          border-bottom: 1px solid rgba(201,162,39,0.3);
        }
        .footer-col ul { display: flex; flex-direction: column; gap: 12px; }
        .footer-col ul li a {
          color: rgba(255,255,255,0.65); transition: color 0.3s;
          font-size: 0.95rem;
        }
        .footer-col ul li a:hover { color: var(--gold); }
        .contact-list li {
          display: flex; align-items: center; gap: 10px;
        }
        .contact-list li svg { color: var(--gold); flex-shrink: 0; }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 20px 0;
          text-align: center;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.4);
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </footer>
  );
}
