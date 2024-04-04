import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'he',
  fallbackLng: 'he',
  resources: {
    he: require('../assets/locales/he.json'),
  },
  compatibilityJSON: 'v3',
  defaultNS: 'common',
  debug: true,
});

export default i18n;
