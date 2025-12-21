<template>
    <!-- 事件4测试组件 -->
    <div class="test-activity">
        <h3>测试组件区域</h3>
        <div class="test-components">
            <!-- 可以在这里添加测试用的组件 -->
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUI } from '../composables/useUI'

const ui = useUI()

onMounted(() => {
    ui.showTextPanel('这是一个空白测试页，可自由添加组件。')
})
</script>

<style scoped>
.test-activity {
    padding: 20px;
    color: var(--text-sub);
}

.test-activity h3 {
    color: var(--accent-green);
    margin-bottom: 15px;
}

.test-components {
    border: 1px dashed var(--line-thin);
    padding: 20px;
    border-radius: 4px;
}
</style>