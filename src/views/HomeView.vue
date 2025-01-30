<script setup lang="ts">
import TextAndImageContainer from '@/components/container/AboutUsContainer.vue'
import HeadlineContainer from '@/components/container/HeadlineContainer.vue'
import NewsAndAppointmentsContainer from '@/components/container/NewsAndAppointmentsContainer.vue'
import SpacingTool from '@/components/SpacingTool.vue'
import ContactForm from '@/components/container/ContactFormContainer.vue'
import TeamSpace from '@/components/teamSpace/TeamSpace.vue'
import RulesContainer from '@/components/container/RulesContainer.vue'
import BubbleBackground from '@/components/bubbleBackground.vue'
import { useScrollStore } from '@/stores/useScrollStore'
import { onMounted, ref, watch } from 'vue'

const scrollStore = useScrollStore()
const scrollTargetId = ref(scrollStore.getTargetId())

onMounted(() => {
  if (scrollTargetId.value == '') {
    window.scrollTo(0, 0)
  } else {
    scrollStore.scrollToTarget()
  }
})

watch(
  () => scrollStore.getTargetId(),
  () => {
    if (scrollStore.getTargetId() !== '') {
      scrollStore.scrollToTarget()
      scrollStore.setTargetId('')
    }
  }
)
</script>

<template>
  <BubbleBackground>
    <main class="container mt-5 px-5 px-lg-5 px-md-4">
      <HeadlineContainer />
      <SpacingTool mobileHeight="2rem" height="3rem"></SpacingTool>
      <TextAndImageContainer />
      <SpacingTool mobileHeight="2rem" height="3rem"></SpacingTool>
      <TeamSpace />
      <SpacingTool mobileHeight="2rem" height="3rem"></SpacingTool>
      <RulesContainer />
      <SpacingTool mobileHeight="2rem" height="3rem"></SpacingTool>
      <NewsAndAppointmentsContainer />
      <SpacingTool mobileHeight="2rem" height="3rem"></SpacingTool>
      <ContactForm />
      <SpacingTool mobileHeight="2rem" height="4rem"></SpacingTool>
    </main>
  </BubbleBackground>
</template>
<style scoped></style>
