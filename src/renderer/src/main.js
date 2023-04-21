import { createApp } from 'vue'
import App from './App.vue'
// element ui plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// element ui icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// dark ui
import 'element-plus/theme-chalk/dark/css-vars.css'
// vue router
import router from './plugin/vue-router/config.js'

const app = createApp(App)
app.use(ElementPlus).use(router).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
