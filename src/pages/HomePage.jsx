import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../hooks/useLang.jsx';
import { ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80',
];

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&q=80';

export default function HomePage() {
  const { t, lang } = useLang();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img src={HERO_IMAGES[0]} alt="Heavy equipment" className="hero-img" />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <p className="hero-label">EL ASASS</p>
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-sub">{t.hero.subtitle}</p>
          <div className="hero-btns">
            <Link to="/equipment" className="btn-primary">{t.hero.cta1} <ArrowIcon size={18}/></Link>
            <Link to="/contact" className="btn-outline">{t.hero.cta2}</Link>
          </div>
        </div>
        <a href="#about" className="scroll-down">
          <ChevronDown size={28} />
        </a>
      </section>

      {/* ABOUT SNIPPET */}
      <section id="about" className="section-padding home-about">
        <div className="container about-grid">
          <div className="about-img-wrap">
            <img src={ABOUT_IMAGE} alt="About EL ASASS" />
            <div className="about-badge">
              <span className="badge-num">+10</span>
              <span className="badge-label">{lang === 'ar' ? 'سنوات خبرة' : 'Years Experience'}</span>
            </div>
          </div>
          <div className="about-text">
            <p className="section-label">{t.about.label}</p>
            <div className="gold-bar" />
            <h2 className="section-title">{t.about.title}</h2>
            <p>{t.about.body}</p>
            <p style={{marginTop: '16px'}}>{t.about.body2}</p>
            <div className="stats-grid">
              {t.about.stats.map((s,i) => (
                <div className="stat-item" key={i}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-primary" style={{marginTop:'32px', display:'inline-flex'}}>
              {t.nav.about} <ArrowIcon size={18}/>
            </Link>
          </div>
        </div>
      </section>

      {/* EQUIPMENT PREVIEW */}
      <section className="section-padding equip-preview" style={{background:'var(--gray-light)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'60px'}}>
            <p className="section-label">{t.equipment.label}</p>
            <div className="gold-bar center" />
            <h2 className="section-title">{t.equipment.title}</h2>
            <p className="section-subtitle" style={{margin:'0 auto'}}>{t.equipment.subtitle}</p>
          </div>
          <div className="equip-grid">
            {t.equipment.categories.slice(0,3).map(cat => (
              <Link to="/equipment" key={cat.id} className="equip-card">
                <div className="equip-card-img">
                  <img src={getCatImage(cat.id)} alt={cat.name} />
                </div>
                <div className="equip-card-body">
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                  <span className="equip-link">{t.equipment.quoteBtn} <ArrowIcon size={14}/></span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'48px'}}>
            <Link to="/equipment" className="btn-primary">{lang==='ar'?'عرض جميع المعدات':'View All Equipment'} <ArrowIcon size={18}/></Link>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          position: relative; height: 100vh; min-height: 600px;
          display: flex; align-items: center;
          overflow: hidden;
        }
        .hero-bg { position: absolute; inset: 0; }
        .hero-img { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.6) 100%);
        }
        .hero-content {
          position: relative; z-index: 2;
          max-width: 800px;
        }
        .hero-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem; letter-spacing: 5px;
          color: var(--gold); text-transform: uppercase;
          margin-bottom: 20px; font-weight: 600;
        }
        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900; color: var(--white);
          line-height: 1.1; margin-bottom: 24px;
        }
        .hero-sub {
          font-size: clamp(1rem, 2vw, 1.3rem);
          color: rgba(255,255,255,0.8); margin-bottom: 40px;
          max-width: 560px; line-height: 1.7;
        }
        .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
        .scroll-down {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          color: rgba(255,255,255,0.5); z-index: 2;
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%,100%{transform:translateX(-50%) translateY(0)}
          50%{transform:translateX(-50%) translateY(8px)}
        }
        .section-label {
          font-size: 0.85rem; letter-spacing: 4px; text-transform: uppercase;
          color: var(--gold); font-weight: 600; margin-bottom: 12px;
          font-family: 'Inter', sans-serif;
        }
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        .about-img-wrap { position: relative; }
        .about-img-wrap img {
          width: 100%; height: 500px; object-fit: cover;
          border-radius: 2px;
          box-shadow: 20px 20px 0 var(--gold);
        }
        .about-badge {
          position: absolute; bottom: -20px;
          right: -20px;
          background: var(--black); padding: 20px 28px;
          display: flex; flex-direction: column; align-items: center;
          border: 3px solid var(--gold);
        }
        body.ltr .about-badge { right: auto; left: -20px; }
        .badge-num { font-size: 2.5rem; font-weight: 900; color: var(--gold); line-height: 1; }
        .badge-label { font-size: 0.85rem; color: var(--white); margin-top: 4px; }
        .about-text p { color: var(--gray-mid); line-height: 1.8; }
        .stats-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 40px;
        }
        .stat-item {
          border-right: 3px solid var(--gold); padding-right: 16px;
        }
        body.ltr .stat-item { border-right: none; border-left: 3px solid var(--gold); padding-right: 0; padding-left: 16px; }
        .stat-num { display: block; font-size: 2rem; font-weight: 900; color: var(--black); }
        .stat-label { font-size: 0.9rem; color: var(--gray-mid); }
        .equip-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px;
        }
        .equip-card {
          background: var(--white); border-radius: 4px; overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s;
          display: block;
        }
        .equip-card:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(0,0,0,0.15); }
        .equip-card-img { height: 220px; overflow: hidden; }
        .equip-card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .equip-card:hover .equip-card-img img { transform: scale(1.05); }
        .equip-card-body { padding: 24px; }
        .equip-card-body h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 10px; }
        .equip-card-body p { font-size: 0.9rem; color: var(--gray-mid); margin-bottom: 16px; }
        .equip-link {
          display: inline-flex; align-items: center; gap: 6px;
          color: var(--gold); font-weight: 600; font-size: 0.9rem;
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 60px; }
          .about-img-wrap img { height: 350px; }
          .equip-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .hero-btns { flex-direction: column; }
          .stats-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </>
  );
}

function getCatImage(id) {
  const map = {
    excavators: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    loaders: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    bulldozers: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
    trucks: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
    road: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80',
    industrial: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80',
  };
  return map[id] || map.excavators;
}
