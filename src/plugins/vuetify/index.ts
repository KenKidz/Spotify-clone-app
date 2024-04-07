import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import defaults from './defaults'
import { icons } from '@/plugins/vuetify/icons'
import { locale } from '@/plugins/i18n'
import theme from './theme'

// Styles
import 'vuetify/styles'

export default createVuetify({
  aliases: {
    IconBtn: VBtn,
  },
  defaults,
  icons,
  locale,
  theme
})
