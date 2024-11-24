import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import de from '@/locales/de.json';

const messages = {
  en,
  de,
};

const getBrowserLanguage = (): string => {
  const lang = navigator.language || navigator.userLanguage;
  return lang.split('-')[0];
};

const i18n = createI18n({
  locale: getBrowserLanguage(),
  fallbackLocale: 'en',
  messages,
});

export default i18n;
