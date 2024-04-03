import '@mdi/font/css/materialdesignicons.css'
import "@fortawesome/fontawesome-free/css/all.css";
import type { IconProps } from '@iconify/vue'
import { Icon } from '@iconify/vue'
import type { IconSet } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export const iconify = {
  component: (props: IconProps) => h(Icon, props),
} as IconSet

export const icons = {
  defaultSet: 'iconify',
  aliases,
  sets: {
    iconify,
    mdi,
  },
}

