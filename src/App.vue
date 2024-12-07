<script setup lang="ts">
import Menu from '@/components/menu-bar.vue'
import { useMenuBarStore } from '@/stores/useMenuBarStore'
import { storeToRefs } from 'pinia'
import i18n from '@/i18n'

// Access the store and its reactive properties
const statusStore = useMenuBarStore()
const { isMinimised } = storeToRefs(statusStore)
// Define the targets data
const targets = [
  { id: 'target1', text: i18n.global.t('welcome') },
  { id: 'target2', text: 'TEST' },
  { id: 'target3', text: 'TEST' },
  { id: 'target4', text: 'TEST' }
]
</script>

<template>
  <div class="main-container">
    <Menu />
    <div v-bind:class="{ 'app-container-margin': isMinimised }">
      <div v-for="(target, index) in targets" :key="index" :id="target.id" class="test-container">
        <p>{{ target.text }}</p>
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
  border: solid var(--primary-color);
}

.app-container-margin {
  margin-top: 45px;
}
</style>
