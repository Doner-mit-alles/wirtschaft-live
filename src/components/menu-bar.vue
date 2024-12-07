<script setup lang="ts">
import NewsSVG from '@/assets/news.svg'
import CalenderSVG from '@/assets/calendar.svg'
import BookSVG from '@/assets/book-open.svg'
import UserSVG from '@/assets/user.svg'
import MenuElement from '@/components/menu-element.vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'
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

// Menu items data
const menuItems = [
  { text: 'menuBar.news', svg: NewsSVG },
  { text: 'menuBar.rules', svg: BookSVG },
  { text: 'menuBar.appointments', svg: CalenderSVG },
  { text: 'menuBar.team', svg: UserSVG }
]

// Computed property for class binding
const menuBarClasses = computed(() => ({
  'menu-bar': true,
  'menu-bar-fixed': isMinimised.value
}))
</script>

<template>
  <div :class="menuBarClasses">
    <p id="menu-team-name">Baller Los</p>

    <div class="menu-element-container">
      <MenuElement
        v-for="(item, index) in menuItems"
        :key="index"
        :text="$t(item.text)"
        :svg="item.svg"
        :is-minimised="isMinimised"
      />
      <MenuLanguageButton />
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