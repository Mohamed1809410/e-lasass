import { useState } from 'react';
import { useLang } from '../hooks/useLang.jsx';
import { Plus, Minus } from 'lucide-react';

export default function FAQPage() {
  const { t } = useLang();
  const [open, setOpen] = useState(0);

  return (
    <div style={{paddingTop:'90px'}}>
      <div className="page-hero">
        <div className="container">
          <p className="section-label">{t.faq.label}</p>
          <h1 className="page-hero-title">{t.faq.title}</h1>
        </div>
      </div>

      <section className="section-padding">
        <div className="container faq-wrap">
          {t.faq.items.map((item, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{item.q}</span>
                {open === i ? <Minus size={20}/> : <Plus size={20}/>}
              </button>
              {open === i && (
                <div className="faq-a">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
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
        .faq-wrap { max-width: 800px; margin: 0 auto; }
        .faq-item {
          border-bottom: 1px solid var(--gray-border); overflow: hidden;
        }
        .faq-item.open { border-color: var(--gold); }
        .faq-q {
          width: 100%; display: flex; align-items: center;
          justify-content: space-between; gap: 16px;
          padding: 24px 0; text-align: right;
          font-family: inherit; font-size: 1.05rem; font-weight: 600;
          color: var(--black); cursor: pointer; transition: color 0.3s;
          background: transparent;
        }
        body.ltr .faq-q { text-align: left; }
        .faq-item.open .faq-q { color: var(--gold); }
        .faq-q svg { flex-shrink: 0; color: var(--gold); }
        .faq-a { padding: 0 0 24px; }
        .faq-a p { color: var(--gray-mid); line-height: 1.8; }
      `}</style>
    </div>
  );
}
