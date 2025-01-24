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
import TeamSpace from '@/components/teamSpace/TeamSpace.vue'
import RulesContainer from '@/components/RulesContainer.vue'
import { onMounted } from 'vue';
const statusStore = useMenuBarStore()

onMounted(() => {
  window.scrollTo(0, 0);
});

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
    <ContactForm />
    <SpacingTool height="3 rem"></SpacingTool>
  </main>
    <FooterContainer />
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
