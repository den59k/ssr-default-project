import { createSSRApp } from 'vue'
import './styles/global.sass'
import App from './App.vue'
import { createRouter } from '@curves_digital/builder/router'
import { settingsPlugin } from './pageSettings'
import '@curves_digital/builder'

createSSRApp(App, { state: window.state })
  .use(createRouter())
  .use(settingsPlugin)
  .mount('#app')
