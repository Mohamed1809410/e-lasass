import { useState } from 'react';
import { useLang } from '../hooks/useLang.jsx';
import { Send, MessageCircle } from 'lucide-react';

// =============================================
// DEINE DATEN — hier anpassen:
const WHATSAPP_NUMBER = '218910000000'; // Ohne + und Leerzeichen
const EMAIL_ADDRESS   = 'info@elasass.com';
// =============================================

export default function ContactPage() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  // Öffnet WhatsApp mit den Formulardaten als Nachricht
  const sendViaWhatsApp = e => {
    e.preventDefault();
    const text = `*اسم / Name:* ${form.name}
*Email:* ${form.email}
*${t.contact.phone}:* ${form.phone}
*${t.contact.message}:*
${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  // Öffnet das E-Mail-Programm mit den Formulardaten
  const sendViaEmail = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`EL ASASS - ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
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

          {/* Info Panel */}
          <div className="contact-info-panel">
            <div className="gold-bar" />
            <h2>{t.contact.title}</h2>
            <p>{t.contact.subtitle}</p>
            <div className="contact-details">
              <div className="cinfo-item">
                <strong>Email</strong>
                <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
              </div>
              <div className="cinfo-item">
                <strong>{t.contact.phone}</strong>
                <a href={`tel:+${WHATSAPP_NUMBER}`}>+{WHATSAPP_NUMBER}</a>
              </div>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank" rel="noreferrer"
              className="btn-primary whatsapp-btn"
            >
              <MessageCircle size={20} /> {t.contact.whatsapp}
            </a>
          </div>

          {/* Formular */}
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>{t.contact.name}</label>
                <input type="text" name="name" placeholder={t.contact.name}
                  value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>{t.contact.email}</label>
                <input type="email" name="email" placeholder={t.contact.email}
                  value={form.email} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label>{t.contact.phone}</label>
              <input type="tel" name="phone" placeholder={t.contact.phone}
                value={form.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>{t.contact.message}</label>
              <textarea name="message" rows={6} placeholder={t.contact.message}
                value={form.message} onChange={handleChange} />
            </div>

            {/* Zwei Buttons — WhatsApp oder E-Mail */}
            <div className="send-btns">
              <button className="btn-primary wa-send-btn" onClick={sendViaWhatsApp}>
                <MessageCircle size={18} />
                {t.contact.whatsapp}
              </button>
              <button className="btn-email-send" onClick={sendViaEmail}>
                <Send size={18} />
                {t.contact.send}
              </button>
            </div>

            <p className="send-hint">
              {t.lang === 'ar'
                ? '* اضغط على الزر المناسب لإرسال رسالتك عبر واتساب أو البريد الإلكتروني'
                : '* Choose WhatsApp or Email to send your message — no account needed'}
            </p>
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
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1.6fr; gap: 80px; align-items: start;
        }
        .contact-info-panel h2 { font-size: 1.8rem; font-weight: 800; margin-bottom: 16px; }
        .contact-info-panel p { color: var(--gray-mid); line-height: 1.7; }
        .contact-details { margin: 32px 0; display: flex; flex-direction: column; gap: 20px; }
        .cinfo-item { display: flex; flex-direction: column; gap: 4px; }
        .cinfo-item strong {
          font-size: 0.8rem; text-transform: uppercase;
          letter-spacing: 2px; color: var(--gold);
        }
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
          transition: border-color 0.3s; outline: none;
          background: var(--white); color: var(--gray-dark); resize: vertical;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: var(--gold); }

        .send-btns {
          display: flex; gap: 14px; flex-wrap: wrap; margin-top: 4px;
        }
        .wa-send-btn { background: #25D366; }
        .wa-send-btn:hover { background: #1da851; box-shadow: 0 8px 24px rgba(37,211,102,0.35); }
        .btn-email-send {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--black); color: var(--white);
          font-weight: 700; font-size: 1rem;
          padding: 14px 32px; border-radius: 4px;
          transition: all 0.3s; font-family: inherit;
        }
        .btn-email-send:hover {
          background: var(--gray-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
        }
        .send-hint {
          font-size: 0.82rem; color: var(--gray-mid); margin-top: 4px;
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 48px; }
          .form-row { grid-template-columns: 1fr; }
          .send-btns { flex-direction: column; }
          .btn-email-send, .wa-send-btn { justify-content: center; }
        }
      `}</style>
    </div>
  );
}
