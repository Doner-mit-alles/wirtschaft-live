<script setup lang="ts">
import TextAndImageContainer from '@/components/TextAndImageContainer.vue'
import HeadlineContainer from '@/components/HeadlineContainer.vue'
import NewsAndAppointmentsContainer from '@/components/NewsAndAppointmentsContainer.vue'
import SpacingTool from '@/components/SpacingTool.vue'
import ContactForm from '@/components/ContactForm.vue'
import TeamSpace from '@/components/teamSpace/TeamSpace.vue'
import RulesContainer from '@/components/RulesContainer.vue'
import BubbleBackground from '@/components/bubbleBackground.vue'
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
