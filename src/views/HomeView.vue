<script setup lang="ts">
import BootstrapTemplate from '@/components/BootstrapTemplate.vue'
import { useMenuBarStore } from '@/stores/useMenuBarStore'
import { storeToRefs } from 'pinia'
import TextAndImageContainer from '@/components/TextAndImageContainer.vue'
import HeadlineContainer from '@/components/HeadlineContainer.vue'
import MenuBar from '@/components/menuBar/menu-bar.vue'
import SpacingTool from '@/components/SpacingTool.vue'
import ContactForm from '@/components/ContactForm.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import BubbleBackground from '@/components/bubbleBackground.vue'

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
    <BubbleBackground>
      <HeadlineContainer />
      <SpacingTool height="2rem"></SpacingTool>
      <TextAndImageContainer />
      <ContactForm />
    </BubbleBackground>
  </main>

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
