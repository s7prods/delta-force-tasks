<template>
    <div>
        <div class="title">{{ title }}</div>
        <div class="desc">{{ description }}</div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
.title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 12px;
}

.desc {
    font-size: 18px;
    line-height: 1.5;
    color: var(--text-sub);
    max-width: 60%;
}
</style>