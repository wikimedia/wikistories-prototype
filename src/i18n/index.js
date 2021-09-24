import Vue from 'vue'
import i18n from 'vue-banana-i18n'
import en from './en'
import fr from './fr'

const extractLangFromUrl = () => new URL(location.href).searchParams.get('lang') || 'en'

Vue.use(i18n, {
  locale: extractLangFromUrl(),
  messages: { en, fr }
})
