import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/css/index.less'

import { preventClick } from '@/global/directives';



import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(preventClick, { wait: 300 })

app.use(ElementPlus)

app.use(createPinia())
app.use(router)

app.mount('#app')
