import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../hooks/useLang.jsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const catImages = {
  excavators: [
    'https://images.unsplash.com/photo-1630288214173-a119cf823388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXhjYXZhdG9yfGVufDB8fDB8fHww',
      ],
  loaders: [
    'https://images.unsplash.com/photo-1629807473015-41699c4471b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9hZGVycyUyMGJhZ2dlcnxlbnwwfHwwfHx8MA%3D%3D',
      ],
  bulldozers: [
    'https://plus.unsplash.com/premium_photo-1682142119293-ba4cb0877108?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVsbGRvemVyfGVufDB8fDB8fHww',
      ],
  trucks: [
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJ1Y2tzfGVufDB8fDB8fHww',
      ],
  road: [
    'https://images.unsplash.com/photo-1591486085897-f433f05e7aed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZCUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D',
      ],
  industrial: [
    'https://images.unsplash.com/photo-1779517226032-e78b30bda468?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFsbGV0JTIwdHJ1Y2t8ZW58MHx8MHx8fDA%3D',
      ],
};

export default function EquipmentPage() {
  const { t, lang } = useLang();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;
  const [active, setActive] = useState(t.equipment.categories[0].id);

  const activeCat = t.equipment.categories.find(c => c.id === active);
  const imgs = catImages[active] || catImages.excavators;

  return (
    <div style={{paddingTop:'90px'}}>
      <div className="page-hero">
        <div className="container">
          <p className="section-label">{t.equipment.label}</p>
          <h1 className="page-hero-title">{t.equipment.title}</h1>
          <p style={{color:'rgba(255,255,255,0.65)', marginTop:'12px'}}>{t.equipment.subtitle}</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="cat-tabs">
            {t.equipment.categories.map(cat => (
              <button
                key={cat.id}
                className={`cat-tab${active === cat.id ? ' active' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="cat-content">
            <div className="cat-imgs">
              {imgs.map((src, i) => (
                <img key={i} src={src} alt={activeCat?.name} className={`cat-img cat-img-${i}`} />
              ))}
            </div>
            <div className="cat-info">
              <h2>{activeCat?.name}</h2>
              <div className="gold-bar" />
              <p>{activeCat?.desc}</p>
              <Link to="/contact" className="btn-primary" style={{marginTop:'32px', display:'inline-flex'}}>
                {t.equipment.quoteBtn} <ArrowIcon size={18}/>
              </Link>
            </div>
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
        .cat-tabs {
          display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 56px;
        }
        .cat-tab {
          padding: 10px 24px; border: 2px solid var(--gray-border);
          border-radius: 4px; font-family: inherit; font-size: 0.95rem;
          color: var(--gray-mid); transition: all 0.3s; cursor: pointer;
          background: transparent;
        }
        .cat-tab:hover { border-color: var(--gold); color: var(--gold); }
        .cat-tab.active { background: var(--gold); border-color: var(--gold); color: var(--black); font-weight: 700; }
        .cat-content {
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
        }
        .cat-imgs {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }
        .cat-img { width: 100%; object-fit: cover; border-radius: 2px; }
        .cat-img-0 { grid-column: 1 / -1; height: 260px; }
        .cat-img-1, .cat-img-2 { height: 180px; }
        .cat-info h2 { font-size: 2rem; font-weight: 900; margin-bottom: 20px; }
        .cat-info p { color: var(--gray-mid); line-height: 1.8; font-size: 1.05rem; }
        @media (max-width: 900px) {
          .cat-content { grid-template-columns: 1fr; }
          .cat-img-0 { height: 200px; }
        }
      `}</style>
    </div>
  );
}
