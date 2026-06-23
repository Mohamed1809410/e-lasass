import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState('ar');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.dir = t.dir;
    document.body.className = lang === 'en' ? 'ltr' : '';
  }, [lang, t.dir]);

  const toggleLang = () => setLang(l => l === 'ar' ? 'en' : 'ar');

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
