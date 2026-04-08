import React, { createContext, useState, useContext } from 'react';
import en from '../i18n/en.json';
import ua from '../i18n/ua.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en,
    ua
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (let k of keys) {
      if (value[k] === undefined) {
        return key; // return key itself if translation is missing
      }
      value = value[k];
    }
    return value;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ua' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
