import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next) 
  .init({
    fallbackLng: localStorage.getItem('language') || 'ru',
    debug: false,
    interpolation: {
      escapeValue: false, 
    },
    backend: {
     localePath: typeof window === 'undefined'
    ? require('path').resolve('./public/locales')
    : '/locales',
    },
  });

export default i18n;
