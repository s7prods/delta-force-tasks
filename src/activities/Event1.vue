<template>
    <!-- 事件1特有组件可以放在这里 -->
    <!-- 通用组件由父组件App.vue统一处理 -->
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useUI } from '../composables/useUI'

const ui = useUI()

// 初始化活动
onMounted(() => {
    ui.showTextPanel('欢迎来到突击行动！完成任务可获得稀有奖励。', 8000)
    ui.addClaimButton('daily1', '领取每日奖励')
    ui.addClaimButton('weekly1', '领取周常奖励')
})

// 清理活动
onUnmounted(() => {
    // 可以在这里添加清理逻辑
})
</script>

<style scoped>
/* 活动1特定样式 */
</style>