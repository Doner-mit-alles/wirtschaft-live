<script setup lang="ts">
import BootstrapTemplate from '@/components/BootstrapTemplate.vue'
import { useMenuBarStore } from '@/stores/useMenuBarStore'
import { storeToRefs } from 'pinia'
import TextAndImageContainer from '@/components/TextAndImageContainer.vue'
import HeadlineContainer from '@/components/HeadlineContainer.vue'
import MenuBar from '@/components/menuBar/menu-bar.vue'
import SpacingTool from '@/components/SpacingTool.vue'
import ContactForm from '@/components/ContactForm.vue'

const statusStore = useMenuBarStore()
const { isMinimised } = storeToRefs(statusStore)

const targets = [
  { id: 'target2', text: 'TEST' },
  { id: 'target3', text: 'TEST' },
  { id: 'target4', text: 'TEST' }
]
</script>

<template>
  <menu-bar />
  <main class="container mt-5 px-5 px-lg-5 px-md-4">
    <!--    BootstrapTemplate wieder raus-->
    <BootstrapTemplate />
    <HeadlineContainer />
    <SpacingTool height="2rem"></SpacingTool>
    <TextAndImageContainer />
    <ContactForm />
  </main>
  <footer class="container mt-5 px-5 px-md-5 mb-4" id="footer"></footer>
  <!--  <BootstrapTemplate v-if="false" />-->
  <!--  <div class="main-container">-->
  <!--    <Menu />-->
  <!--    <div v-bind:class="{ 'app-container-margin': isMinimised }">-->
  <!--      <div id="target1" class="test-container">-->
  <!--        <p>{{ $t('welcome') }}</p>-->
  <!--      </div>-->
  <!--      <div v-for="(target, index) in targets" :key="index" :id="target.id" class="test-container">-->
  <!--        <p>{{ target.text }}</p>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
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
