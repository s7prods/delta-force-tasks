import { createApp } from 'vue'
import Frame from './Frame.vue'
import './styles/main.css'
import router from './router'

const app = createApp(Frame)

// 使用路由器
app.use(router)

// 全局配置
app.config.globalProperties.$ui = window.ui

app.mount('#app')