import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang] = useState('en');
  const t = translations.en;

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.body.dir = 'ltr';
    document.body.className = 'ltr';
  }, []);

  return (
    <LangContext.Provider value={{ lang: 'en', t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);