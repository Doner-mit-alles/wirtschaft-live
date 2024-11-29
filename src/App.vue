<script setup lang="ts">
import Menu from '@/components/menu-bar.vue'
</script>

<template>
  <div class="main-container">
    <Menu />

    <div class="test-container">
      <p>TEST</p>
    </div>

    <div class="test-container">
      <p>TEST</p>
    </div>

    <div class="test-container">
      <p>TEST</p>
    </div>

    <div class="test-container">
      <p>TEST</p>
    </div>
    <div class="test-container">
      <p>TEST</p>
    </div>
    <div class="test-container">
      <p>TEST</p>
    </div>
    <div class="test-container">
      <p>TEST</p>
    </div>
    <div class="test-container">
      <p>TEST</p>
    </div>
    <div class="test-container">
      <p>TEST</p>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.test-container {
  width: 500px;
  height: 200px;
  border: solid #272727;
}
</style>
