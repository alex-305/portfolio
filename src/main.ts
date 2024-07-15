import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa'
import colors from 'vuetify/util/colors'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
      fa
    }
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.indigo.base,
          secondary: colors.pink.lighten2,
          tertiary: colors.green.base
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: colors.indigo.base,
          secondary: colors.pink.lighten2,
          tertiary: colors.green.base
        }
      }
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
