import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Tillarni fayldan yuklash
  .use(initReactI18next) // React bilan integratsiya
  .init({
    fallbackLng: localStorage.getItem('language') || 'ru', // Default til
    debug: true, // Rivojlantirish jarayonida console loglar
    interpolation: {
      escapeValue: false, // XSS xavfsizligi (React buni avtomatik bajaradi)
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Tillarni yuklash yo'li
    },
  });

export default i18n;
