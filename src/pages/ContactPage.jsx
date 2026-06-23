import { useState } from 'react';
import { useLang } from '../hooks/useLang.jsx';
import { Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'success' | 'error' | 'loading'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Using Formspree — replace FORM_ID with your actual Formspree form ID
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div style={{paddingTop:'90px'}}>
      <div className="page-hero">
        <div className="container">
          <p className="section-label">{t.contact.label}</p>
          <h1 className="page-hero-title">{t.contact.title}</h1>
          <p style={{color:'rgba(255,255,255,0.65)', marginTop:'12px'}}>{t.contact.subtitle}</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container contact-grid">
          <div className="contact-info-panel">
            <div className="gold-bar" />
            <h2>{t.contact.title}</h2>
            <p>{t.contact.subtitle}</p>
            <div className="contact-details">
              <div className="cinfo-item">
                <strong>Email</strong>
                <a href="mailto:info@elasass.com">info@elasass.com</a>
              </div>
              <div className="cinfo-item">
                <strong>{t.nav.contact}</strong>
                <a href="tel:+218910000000">+218 91 000 0000</a>
              </div>
            </div>
            <a href="https://wa.me/218910000000" target="_blank" rel="noreferrer" className="btn-primary whatsapp-btn">
              <MessageCircle size={20} /> {t.contact.whatsapp}
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>{t.contact.name}</label>
                <input
                  type="text" name="name" required
                  placeholder={t.contact.name}
                  value={form.name} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>{t.contact.email}</label>
                <input
                  type="email" name="email" required
                  placeholder={t.contact.email}
                  value={form.email} onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label>{t.contact.phone}</label>
              <input
                type="tel" name="phone"
                placeholder={t.contact.phone}
                value={form.phone} onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>{t.contact.message}</label>
              <textarea
                name="message" required rows={6}
                placeholder={t.contact.message}
                value={form.message} onChange={handleChange}
              />
            </div>
            {status === 'success' && <div className="form-msg success">{t.contact.successMsg}</div>}
            {status === 'error' && <div className="form-msg error">{t.contact.errorMsg}</div>}
            <button type="submit" className="btn-primary submit-btn" disabled={status === 'loading'}>
              {status === 'loading' ? '...' : <><Send size={18}/> {t.contact.send}</>}
            </button>
          </form>
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
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1.6fr; gap: 80px; align-items: start;
        }
        .contact-info-panel h2 { font-size: 1.8rem; font-weight: 800; margin-bottom: 16px; }
        .contact-info-panel p { color: var(--gray-mid); line-height: 1.7; }
        .contact-details { margin: 32px 0; display: flex; flex-direction: column; gap: 20px; }
        .cinfo-item { display: flex; flex-direction: column; gap: 4px; }
        .cinfo-item strong { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; color: var(--gold); }
        .cinfo-item a { font-size: 1rem; color: var(--gray-dark); transition: color 0.3s; }
        .cinfo-item a:hover { color: var(--gold); }
        .whatsapp-btn { background: #25D366; margin-top: 8px; }
        .whatsapp-btn:hover { background: #1da851; box-shadow: 0 8px 24px rgba(37,211,102,0.4); }
        .contact-form { display: flex; flex-direction: column; gap: 20px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group label { font-size: 0.88rem; font-weight: 600; color: var(--gray-dark); }
        .form-group input, .form-group textarea {
          padding: 14px 18px; border: 1.5px solid var(--gray-border);
          border-radius: 4px; font-family: inherit; font-size: 0.95rem;
          transition: border-color 0.3s; outline: none; background: var(--white);
          color: var(--gray-dark); resize: vertical;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: var(--gold); }
        .form-msg { padding: 14px 18px; border-radius: 4px; font-size: 0.95rem; }
        .form-msg.success { background: #e8f5e9; color: #2e7d32; border: 1px solid #a5d6a7; }
        .form-msg.error { background: #ffebee; color: #c62828; border: 1px solid #ef9a9a; }
        .submit-btn { align-self: flex-start; }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 48px; }
          .form-row { grid-template-columns: 1fr; }
          .submit-btn { align-self: stretch; justify-content: center; }
        }
      `}</style>
    </div>
  );
}
