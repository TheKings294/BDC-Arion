import './assets/Css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index.js'

createApp(App)
  .use(router)
  .mount('#app')
