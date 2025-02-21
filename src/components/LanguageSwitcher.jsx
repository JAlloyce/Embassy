import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (event) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <select
      onChange={changeLanguage}
      value={i18n.language}
      className="px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="en">{t('languages.english')}</option>
      <option value="ru">{t('languages.russian')}</option>
    </select>
  );
};

export default LanguageSwitcher; 