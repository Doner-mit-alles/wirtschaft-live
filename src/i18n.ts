import { createI18n } from 'vue-i18n'

export const getBrowserLanguage = (): string => {
  const lang = navigator.language || navigator.userLanguage
  return lang.split('-')[0]
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {}
})

/**
 * Load language file and set it into the i18n instance.
 * Will throw an error if the file is not found.
 * @param locale - language like 'de', 'en'
 */
export const loadLocaleMessages = async (locale: string): Promise<void> => {
  try {
    const messages = await import(`./locales/${locale}.json`)
    i18n.global.setLocaleMessage(locale, messages.default)
    i18n.global.locale = locale
  } catch (error) {
    console.error(`Cant load language file ${locale}: `, error)
  }
}

export default i18n
