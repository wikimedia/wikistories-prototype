import Vue from 'vue'
import i18n from 'vue-banana-i18n'
import en from './en'
import fr from './fr'
import id from './id'
import zh from './zh'
import es from './es'
import pt from './pt'

import { lang } from '@utils/lang'

Vue.use(i18n, {
  locale: lang,
  messages: { en, fr, id, zh, es, pt }
})
