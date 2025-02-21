// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const currentLanguage = i18n.language;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-1 bg-black/30 backdrop-blur-sm p-1 rounded-full shadow-lg"
    >
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 text-sm font-semibold rounded-full transition-all duration-300 ${
          currentLanguage === 'en'
            ? 'bg-indigo-600 text-white'
            : 'text-gray-300 hover:bg-indigo-600/20'
        }`}
      >
        EN
      </button>

      <button
        onClick={() => changeLanguage('ru')}
        className={`px-3 py-1 text-sm font-semibold rounded-full transition-all duration-300 ${
          currentLanguage === 'ru'
            ? 'bg-indigo-600 text-white'
            : 'text-gray-300 hover:bg-indigo-600/20'
        }`}
      >
        RU
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher; 