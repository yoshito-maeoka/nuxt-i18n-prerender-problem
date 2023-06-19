import { messages } from './locales/index';

export default defineI18nConfig(_nuxt => ({
  legacy: false,
  locale: 'en',
  locales: ['en', 'ja'], // used in URL path prefix
  defaultLocale: 'en',   // default locale of your project for Nuxt pages and routings
  // add `vueI18n` option to `@nuxtjs/i18n` module options
  // dynamicRouteParams: false,
  fallbackLocale: 'en',
  messages,
}))
