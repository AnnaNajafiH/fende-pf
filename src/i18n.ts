import i18n from 'i18next';  //i18n: the main translation library.
import { initReactI18next } from 'react-i18next';  //initReactI18next: connects i18n to React.
import LanguageDetector from 'i18next-browser-languagedetector'; //detects the user's language automatically.
import Backend from 'i18next-http-backend'; //Backend: loads translation files from backen, here your public folder (/locales).

i18n
  .use(Backend)   // Load translations from backend (your /public/locales)
  .use(LanguageDetector)   // Detect user's language automatically (from localStorage or browser settings)
  .use(initReactI18next)  //// Connect i18n with React
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',  //Load translation files from /public/locales/{language}/{namespace}.json
    },
    fallbackLng: 'en',   //Fallback language if the user's language is not available(default language).
    supportedLngs: ['en', 'de', 'fa'],  //Supported languages in your app.
    debug: true, // Enable debug mode to see what's happening
    interpolation: {
      escapeValue: false,   //No need to escape text, since React does it already.
    },
    detection: {
      order: ['localStorage', 'navigator'], //Order of detection: first check localStorage, then browser settings.
      caches: ['localStorage'],  //Stores the chosen language in localStorage for next time.
    },
  });

export default i18n;
