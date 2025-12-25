<template>
  <div class="not-found-container">
    <h1 class="error-code">404</h1>
    <h2 class="error-message">页面未找到</h2>
    <p class="error-description">您访问的页面不存在或已被移除</p>
    <router-link to="/" class="back-home-button">返回首页</router-link>
  </div>
</template>

<script setup>
// NotFound页面组件
</script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 2rem;
  background-color: #f5f5f5;
}

.error-code {
  font-size: 8rem;
  font-weight: 700;
  color: #333;
  margin: 0;
  line-height: 1;
}

.error-message {
  font-size: 2rem;
  color: #555;
  margin: 1rem 0;
}

.error-description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
}

.back-home-button {
  padding: 0.8rem 1.5rem;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.back-home-button:hover {
  background-color: #2980b9;
}
</style>