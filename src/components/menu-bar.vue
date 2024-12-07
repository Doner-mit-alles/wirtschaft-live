<script setup lang="ts">
import NewsSVG from '@/assets/news.svg'
import CalenderSVG from '@/assets/calendar.svg'
import BookSVG from '@/assets/book-open.svg'
import UserSVG from '@/assets/user.svg'
import MenuElement from '@/components/menu-element.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import MenuLanguageButton from '@/components/menu-language-button.vue'

const isMinimised = ref<boolean>(false)

const handleScroll = () => {
  isMinimised.value = window.scrollY > 10
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div :class="['menu-bar', { 'menu-bar-fixed': isMinimised }]">
    <p id="menu-team-name">Baller Los</p>

    <div class="menu-element-container">
      <MenuElement :text="$t('menuBar.news')" :svg="NewsSVG" :is-minimised="isMinimised" />
      <MenuElement :text="$t('menuBar.rules')" :svg="BookSVG" :is-minimised="isMinimised" />
      <MenuElement
        :text="$t('menuBar.appointments')"
        :svg="CalenderSVG"
        :is-minimised="isMinimised"
      />
      <MenuElement :text="$t('menuBar.team')" :svg="UserSVG" :is-minimised="isMinimised" />
      <menu-language-button />
      <h1>{{}}</h1>
    </div>
  </div>
</template>

<style scoped>
.menu-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  border-radius: 50px;
  background: var(--primary-color);
  color: var(--secondary-color);
  font-size: 22px;
  width: 95%;
  transition: all 0.5s ease;
}

.menu-bar-fixed {
  position: fixed;
  width: 100%;
  top: 0;
  border-radius: 0;
  z-index: 1000;
  height: 50px;
  margin: 0;
}

#menu-team-name {
  padding: 20px;
  font-weight: bold;
  text-shadow: var(--primary-shadow);
  margin-left: 10px;
}

.menu-element-container {
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-right: 10px;
}
</style>
