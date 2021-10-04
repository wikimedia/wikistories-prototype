import Vue from 'vue'
import i18n from 'vue-banana-i18n'
import en from './en'
import fr from './fr'

import { lang } from '@utils/lang'

Vue.use(i18n, {
  locale: lang,
  messages: { en, fr }
})
