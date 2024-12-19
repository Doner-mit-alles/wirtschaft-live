<script setup lang="ts">
import TextAndImageTemplate from './components/TextAndImageTemplate.vue'
import HeadlineContainer from './components/HeadlineContainer.vue'
import BootstrapTemplate from './components/BootstrapTemplate.vue'
import Menu from '@/components/menu-bar.vue'
import { useMenuBarStore } from '@/stores/useMenuBarStore'
import { storeToRefs } from 'pinia'

const statusStore = useMenuBarStore()
const { isMinimised } = storeToRefs(statusStore)

const targets = [
  { id: 'target2', text: 'TEST' },
  { id: 'target3', text: 'TEST' },
  { id: 'target4', text: 'TEST' }
]
</script>

<template>
  <main class="container mt-5 px-5 px-lg-5 px-md-4">
<!--    BootstrapTemplate wieder reinsetzen-->
    <BootstrapTemplate />
    <HeadlineContainer />
    <TextAndImageTemplate />
  </main>
  <footer class="container mt-5 px-5 px-md-5 mb-4" id="footer">
  </footer>
  <BootstrapTemplate v-if="false" />
  <div class="main-container">
    <Menu />
    <div v-bind:class="{ 'app-container-margin': isMinimised }">
      <div id="target1" class="test-container">
        <p>{{ $t('welcome') }}</p>
      </div>
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
