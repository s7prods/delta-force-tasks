import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import router from './router'

const app = createApp(App)

// 使用路由器
app.use(router)

// 全局配置
app.config.globalProperties.$ui = window.ui

app.mount('#app')