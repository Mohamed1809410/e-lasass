import { useState } from 'react';
import { useLang } from '../hooks/useLang.jsx';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// ✅ Alle Bilder: nur Baumaschinen, Baustellen, Schwerlastfahrzeuge
const GALLERY_IMGS = [
  { src: 'https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RXhjYXZhdG9yc3xlbnwwfHwwfHx8MA%3D%3D', span: 2 },  // Excavator large
  { src: 'https://images.unsplash.com/photo-1630288214173-a119cf823388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RXhjYXZhdG9yc3xlbnwwfHwwfHx8MA%3D%3D' },             // Excavator arm
  { src: 'https://images.unsplash.com/photo-1629807473015-41699c4471b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVsbGRvemVyfGVufDB8fDB8fHww' },             // Bulldozer
  { src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80' },             // Dump truck
  { src: 'https://media.istockphoto.com/id/462959921/photo/road-construction.webp?a=1&b=1&s=612x612&w=0&k=20&c=TfbSVIY1N5zPV_topY3IZNFnYxwSdQWgDEClSmoRw0Y= '},      // Road construction
  { src: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&q=80' },             // Crane
  { src: 'https://plus.unsplash.com/premium_photo-1661963927439-26e74bee3674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RXhjYXZhdG9yc3xlbnwwfHwwfHx8MA%3D%3D' },             // Excavator on site
  { src: 'https://images.unsplash.com/photo-1660508597900-f19ae2dc6b65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9hZCUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D', span: 2 },   // Construction wide
  { src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80' },             // Truck
];

export default function GalleryPage() {
  const { t } = useLang();
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const prev = () => setLightboxIdx(i => (i - 1 + GALLERY_IMGS.length) % GALLERY_IMGS.length);
  const next = () => setLightboxIdx(i => (i + 1) % GALLERY_IMGS.length);

  return (
    <div style={{paddingTop:'90px'}}>
      <div className="page-hero">
        <div className="container">
          <p className="section-label">{t.gallery.label}</p>
          <h1 className="page-hero-title">{t.gallery.title}</h1>
          <p style={{color:'rgba(255,255,255,0.65)', marginTop:'12px'}}>{t.gallery.subtitle}</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="masonry">
            {GALLERY_IMGS.map((img, i) => (
              <div
                key={i}
                className="masonry-item"
                style={{ gridColumn: img.span ? `span ${img.span}` : undefined }}
                onClick={() => setLightboxIdx(i)}
              >
                <img src={img.src} alt={`Gallery ${i + 1}`} />
                <div className="masonry-overlay"><span>+</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIdx !== null && (
        <div className="lightbox" onClick={() => setLightboxIdx(null)}>
          <button className="lb-close" onClick={() => setLightboxIdx(null)}><X size={28}/></button>
          <button className="lb-nav lb-prev" onClick={e => { e.stopPropagation(); prev(); }}><ChevronLeft size={36}/></button>
          <img
            src={GALLERY_IMGS[lightboxIdx].src.replace('w=800', 'w=1400')}
            alt="Gallery"
            onClick={e => e.stopPropagation()}
          />
          <button className="lb-nav lb-next" onClick={e => { e.stopPropagation(); next(); }}><ChevronRight size={36}/></button>
          <div className="lb-counter">{lightboxIdx + 1} / {GALLERY_IMGS.length}</div>
        </div>
      )}

      <style>{`
        .page-hero {
          background: var(--black); padding: 80px 0 60px;
          border-bottom: 3px solid var(--gold);
        }
        .page-hero-title {
          font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 900;
          color: var(--white); margin-top: 12px;
        }
        .masonry { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .masonry-item {
          position: relative; overflow: hidden; cursor: pointer;
          height: 250px; border-radius: 2px;
        }
        .masonry-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .masonry-item:hover img { transform: scale(1.06); }
        .masonry-overlay {
          position: absolute; inset: 0; background: rgba(17,17,17,0);
          transition: background 0.3s; display: flex; align-items: center; justify-content: center;
        }
        .masonry-overlay span { font-size: 3rem; color: var(--gold); opacity: 0; transition: opacity 0.3s; font-weight: 300; }
        .masonry-item:hover .masonry-overlay { background: rgba(17,17,17,0.4); }
        .masonry-item:hover .masonry-overlay span { opacity: 1; }
        .lightbox {
          position: fixed; inset: 0; background: rgba(0,0,0,0.95);
          display: flex; align-items: center; justify-content: center; z-index: 9998;
        }
        .lightbox img { max-width: 90vw; max-height: 85vh; object-fit: contain; border: 2px solid rgba(201,162,39,0.3); }
        .lb-close { position: absolute; top: 20px; right: 24px; color: var(--white); z-index: 1; transition: color 0.3s; }
        .lb-close:hover { color: var(--gold); }
        .lb-nav { position: absolute; color: var(--white); padding: 12px; transition: color 0.3s; z-index: 1; }
        .lb-nav:hover { color: var(--gold); }
        .lb-prev { left: 20px; }
        .lb-next { right: 20px; }
        .lb-counter { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); color: rgba(255,255,255,0.6); font-size: 0.9rem; font-family: 'Inter', sans-serif; }
        @media (max-width: 768px) {
          .masonry { grid-template-columns: repeat(2, 1fr); }
          .masonry-item { grid-column: span 1 !important; height: 180px; }
        }
      `}</style>
    </div>
  );
}
