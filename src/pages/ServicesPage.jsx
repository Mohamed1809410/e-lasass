import { useLang } from '../hooks/useLang.jsx';
import { Truck, Search, ShieldCheck, Ship, FileCheck, Activity } from 'lucide-react';

const ICONS = { Truck, Search, ShieldCheck, Ship, FileCheck, Activity };

export default function ServicesPage() {
  const { t } = useLang();
  return (
    <div style={{paddingTop:'90px'}}>
      <div className="page-hero">
        <div className="container">
          <p className="section-label">{t.services.label}</p>
          <h1 className="page-hero-title">{t.services.title}</h1>
          <p style={{color:'rgba(255,255,255,0.65)', marginTop:'12px', maxWidth:'600px'}}>{t.services.subtitle}</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="services-grid">
            {t.services.items.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <div className="service-card" key={i}>
                  <div className="service-icon">
                    {Icon && <Icon size={32} />}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="service-num">0{i+1}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          background: var(--black); padding: 80px 0 60px;
          border-bottom: 3px solid var(--gold);
        }
        .page-hero-title {
          font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 900;
          color: var(--white); margin-top: 12px;
        }
        .services-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px;
        }
        .service-card {
          position: relative; overflow: hidden;
          padding: 40px 32px; border: 1px solid var(--gray-border);
          transition: all 0.35s; background: var(--white);
        }
        .service-card:hover {
          border-color: var(--gold);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(201,162,39,0.12);
        }
        .service-card:hover .service-icon { background: var(--gold); color: var(--black); }
        .service-icon {
          width: 64px; height: 64px; background: var(--black);
          color: var(--gold); display: flex; align-items: center;
          justify-content: center; margin-bottom: 24px; transition: all 0.3s;
          border-radius: 2px;
        }
        .service-card h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 12px; }
        .service-card p { color: var(--gray-mid); line-height: 1.7; font-size: 0.95rem; }
        .service-num {
          position: absolute; top: 16px; right: 20px; font-size: 4rem;
          font-weight: 900; color: rgba(0,0,0,0.04); line-height: 1;
          font-family: 'Inter', sans-serif;
          pointer-events: none;
        }
        body.ltr .service-num { right: auto; left: 20px; }
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
