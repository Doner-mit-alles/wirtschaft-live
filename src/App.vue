<script setup lang="ts">
import Menu from '@/components/menu-bar.vue'
import { useMenuBarStore } from '@/stores/useMenuBarStore'
import { storeToRefs } from 'pinia'

const statusStore = useMenuBarStore()
const { isMinimised } = storeToRefs(statusStore)
</script>

<template>
  <div class="main-container">
    <Menu />
    <div :class="{ 'app-container-margin': isMinimised }">
      <div id="target1" class="test-container">
        <p>{{ $t('welcome') }}</p>
      </div>

      <div id="target2" class="test-container">
        <p>TEST</p>
      </div>

      <div id="target3" class="test-container">
        <p>TEST</p>
      </div>

      <div id="target4" class="test-container">
        <p>TEST</p>
      </div>
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
  height: 400px;
  margin: 25px;
  border: solid #272727;
}

.app-container-margin {
  margin-top: 45px;
}
</style>
