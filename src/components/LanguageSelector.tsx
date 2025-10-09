import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';


type SupportedLanguage = 'en' | 'de' | 'fa' ;


const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();

  // Define a mapping of supported languages to their codes and country codes
  const languageMap: Record<SupportedLanguage, { code: string; countryCode: string }> = {
    en: { code: 'EN', countryCode: 'US' }, // or 'GB' for UK
    de: { code: 'DE', countryCode: 'DE' },
    fa: { code: 'FA', countryCode: 'IR' },
  };

  //Check if current language is supported
  const isSupportedLanguage = (lang: string): lang is SupportedLanguage => {
    return ['en', 'de', 'fa'].includes(lang);
  };

  //Set the current language
  const currentLanguage: SupportedLanguage = isSupportedLanguage(i18n.language)
    ? i18n.language
    : 'en';

  //Change the language and update HTML lang attribute
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng; // Update HTML lang attribute for SEO
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
        aria-label={t('language.select')}
      >
        <ReactCountryFlag 
          countryCode={languageMap[currentLanguage].countryCode}
          svg
          style={{ width: '20px', height: '15px' }}
        />
        <span className="text-sm">{languageMap[currentLanguage].code}</span>
        {/* <span className="text-sm">{i18n.language === 'de' ? 'DE' : i18n.language === 'en'? 'EN': 'FA'}</span> */}
      </button>
      
      <div className="absolute right-0 mt-2 w-20 md:w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 invisible group-hover:visible transition-all duration-200 opacity-0 group-hover:opacity-100">
        <div className="py-1" role="menu" aria-orientation="vertical">
        {(['en', 'de', 'fa'] as SupportedLanguage[]).map((lang) => (
          <button
            key={lang}
          onClick={() => changeLanguage(lang)}
            className={`flex items-center space-x-2 px-4 py-2 text-sm w-full text-left ${
              i18n.language === lang
                ? 'text-primary-500 dark:text-primary-400 bg-gray-100 dark:bg-gray-700 text-xs md:text-sm'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700, text-xs md:text-sm'
            }`}
            role="menuitem"
          >
            <ReactCountryFlag 
              countryCode={languageMap[lang].countryCode}
              svg
              style={{ width: '15px', height: '10px' }}
            />
            <span>{t(`language.${lang}`)}</span>
          </button>

          ))} 

        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
