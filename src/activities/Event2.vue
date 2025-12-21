<template>
    <!-- 事件2特有组件 -->
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useUI } from '../composables/useUI'

const ui = useUI()

onMounted(() => {
    ui.playVideo('./assets/video/survival_bg.mp4')
    ui.showTextPanel('背景视频已加载，感受真实战场氛围。')
})

onUnmounted(() => {
    // 可选：清理视频资源
})
</script>

<style scoped>
/* 活动2特定样式 */
</style>