import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import defaults from './defaults'
import { icons } from '@/plugins/vuetify/icons'
import { locale } from '@/plugins/i18n'
import theme from './theme'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Styles
import 'vuetify/styles'

export default createVuetify({
  components,
  directives,
  aliases: {
    IconBtn: VBtn,
  },
  defaults,
  icons,
  locale,
  theme
})
