import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../hooks/useLang.jsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const catImages = {
  excavators: [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
  ],
  loaders: [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80',
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&q=80',
  ],
  bulldozers: [
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80',
  ],
  trucks: [
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
  ],
  road: [
    'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=700&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80',
  ],
  industrial: [
    'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=700&q=80',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80',
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
