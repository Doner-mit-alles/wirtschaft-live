import { createI18n } from 'vue-i18n'

const availableLocales: string[] = []
const localeFiles = import.meta.glob('./locales/*.json')
const DEFAULT_LANGUAGE = 'en'

/**
 * load the language wjson files
 */
for (const path in localeFiles) {
  const match = path.match(/\/([a-z]{2})\.json$/)
  if (match) {
    availableLocales.push(match[1])
  }
}

/**
 * Get the browser language.
 * @returns - language like 'de', 'en'
 */
export const getBrowserLanguage = (): string => {
  const lang = navigator.language || navigator.languages[0]
  return lang.split('-')[0]
}

/**
 * create the i18n instance
 */
const i18n = createI18n({
  locale: DEFAULT_LANGUAGE,
  fallbackLocale: DEFAULT_LANGUAGE,
  messages: {}
})

/**
 * Load language file and set it into the i18n instance.
 * We check if there is a json file for the given locale. If not we will use
 * the language of the browser
 *
 * @param locale - language like 'de', 'en'
 * @see setLanguageToBrowserLanguage
 */
export const setLanguage = async (locale: string): Promise<void> => {
  try {
    if (!getAvailableLocales().includes(locale)) {
      await setLanguageToBrowserLanguage()
      return
    }

    if (locale == '') {
      return
    }

    const messages = await import(`./locales/${locale}.json`)
    i18n.global.setLocaleMessage(locale, messages.default)
    i18n.global.locale = locale
    document.documentElement.lang = locale
  } catch (error) {
    console.error(`Cant load language file ${locale}: `, error)
  }
}

/**
 * Set the language to the browser language. If we don´t support this language we
 * will use the default language with has been configured by DEFAULT_LANGUAGE.
 *
 * @see DEFAULT_LANGUAGE
 */
export const setLanguageToBrowserLanguage = async (): Promise<void> => {
  const browserLang = getBrowserLanguage()
  if (browserLang != null && getAvailableLocales().includes(browserLang)) {
    await setLanguage(browserLang)
    return
  }
  await setLanguageToDefault()
}

/**
 * Get list of all available language files
 * @returns - Array with names of the language files ['en', 'de', ...]
 */
export const getAvailableLocales = (): string[] => {
  return availableLocales
}

/**
 * Set the language to default language.
 * @see DEFAULT_LANGUAGE
 */
export const setLanguageToDefault = async () => {
  await setLanguage(DEFAULT_LANGUAGE)
}

/**
 * Get the lang query from the url
 */
export const getLangFromUrl = (): string =>
  new URLSearchParams(window.location.search).get('lang') ?? ''

export default i18n
