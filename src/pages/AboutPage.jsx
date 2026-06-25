import { useLang } from '../hooks/useLang.jsx';

// ✅ Nur Baumaschinen / Baustellen Fotos
const IMGS = [
  'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=700&q=80', // Excavator on site
  'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=700&q=80',   // Road construction machinery
];

export default function AboutPage() {
  const { t } = useLang();
  return (
    <div style={{paddingTop:'90px'}}>
      <div className="page-hero">
        <div className="container">
          <p className="section-label">{t.about.label}</p>
          <h1 className="page-hero-title">{t.about.title}</h1>
        </div>
      </div>

      <section className="section-padding">
        <div className="container about-inner-grid">
          <div>
            <div className="gold-bar" />
            <p style={{fontSize:'1.1rem', lineHeight:'1.9', color:'var(--gray-mid)', marginBottom:'20px'}}>{t.about.body}</p>
            <p style={{fontSize:'1.1rem', lineHeight:'1.9', color:'var(--gray-mid)'}}>{t.about.body2}</p>

            <div className="stats-row" style={{marginTop:'48px'}}>
              {t.about.stats.map((s, i) => (
                <div className="stat-box" key={i}>
                  <span className="stat-num-lg">{s.num}</span>
                  <span className="stat-label-lg">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-imgs">
            {IMGS.map((src, i) => (
              <img key={i} src={src} alt="EL ASASS Heavy Equipment" className="about-img-item" style={{marginTop: i === 1 ? '40px' : 0}} />
            ))}
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
        .about-inner-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .stats-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .stat-box {
          background: var(--black); padding: 28px; text-align: center;
          border-bottom: 3px solid var(--gold);
        }
        .stat-num-lg { display: block; font-size: 2.5rem; font-weight: 900; color: var(--gold); }
        .stat-label-lg { font-size: 0.9rem; color: rgba(255,255,255,0.7); margin-top: 6px; display: block; }
        .about-imgs { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .about-img-item { width: 100%; height: 320px; object-fit: cover; border-radius: 2px; }
        @media (max-width: 900px) {
          .about-inner-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-imgs { grid-template-columns: 1fr; }
          .about-img-item { height: 220px; margin-top: 0 !important; }
        }
      `}</style>
    </div>
  );
}
