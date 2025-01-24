<script setup lang="ts">
import { useScrollStore } from '@/stores/useScrollStore'
import TextAndImageContainer from '@/components/TextAndImageContainer.vue'
import HeadlineContainer from '@/components/HeadlineContainer.vue'
import MenuBar from '@/components/menuBar/menu-bar.vue'
import NewsAndAppointmentsContainer from '@/components/NewsAndAppointmentsContainer.vue'
import SpacingTool from '@/components/SpacingTool.vue'
import ContactForm from '@/components/ContactForm.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import TeamSpace from '@/components/teamSpace/TeamSpace.vue'
import RulesContainer from '@/components/RulesContainer.vue'
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
  <menu-bar />
  <main class="container mt-5 px-5 px-lg-5 px-md-4">
    <!--    BootstrapTemplate wieder raus-->
    <!--    <BootstrapTemplate />-->
    <HeadlineContainer />
    <SpacingTool height="3rem"></SpacingTool>
    <TextAndImageContainer />
    <SpacingTool height="3rem"></SpacingTool>
    <TeamSpace />
    <SpacingTool height="3rem"></SpacingTool>
    <RulesContainer />
    <SpacingTool height="3rem"></SpacingTool>
    <NewsAndAppointmentsContainer />
    <SpacingTool height="3 rem"></SpacingTool>
    <ContactForm />
  </main>
  <FooterContainer />
</template>
<style scoped></style>
