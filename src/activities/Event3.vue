<template>
    <!-- 事件3特有组件 -->
</template>

<script setup>
import { onMounted } from 'vue'
import { useUI } from '../composables/useUI'

const ui = useUI()

onMounted(() => {
    ui.showTextPanel('安静模式：音乐已暂停，专注体验活动剧情。')
})
</script>

<style scoped>
/* 活动3特定样式 */
</style>