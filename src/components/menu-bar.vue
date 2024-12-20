<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import NewsSVG from '@/assets/news.svg'
import CalenderSVG from '@/assets/calendar.svg'
import BookSVG from '@/assets/book-open.svg'
import UserSVG from '@/assets/user.svg'
import MenuElement from '@/components/menu-element.vue'
import MenuLanguageButton from '@/components/menu-language-button.vue'
import { useMenuBarStore } from '@/stores/useMenuBarStore'

const store = useMenuBarStore()
const isMinimised = ref<boolean>(false)

const handleScroll = () => {
  isMinimised.value = window.scrollY > 25
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Watch for changes in isMinimised and update the store
watch(isMinimised, (newValue) => {
  store.setStatus(newValue)
})

// Menu items data with type annotation
const menuItems = [
  { text: 'menuBar.news', svg: NewsSVG, targetId: 'target1' },
  { text: 'menuBar.rules', svg: BookSVG, targetId: 'target2' },
  { text: 'menuBar.appointments', svg: CalenderSVG, targetId: 'target3' },
  { text: 'menuBar.team', svg: UserSVG, targetId: 'target4' }
]

// Computed property for class binding
const menuBarClasses = computed(() => ({
  'menu-bar': true,
  'menu-bar-fixed': isMinimised.value
}))
</script>

<template>
  <header v-bind:class="menuBarClasses" id="menubar"  class="d-flex justify-content-between align-items-center p-3 m-3">
    <p id="menu-team-name">Baller Los</p>

    <nav class="menu-element-container">
      <ul class="p-0 mb-0 text-center" role="menubar">
        <MenuElement
          v-for="(item, index) in menuItems"
          :key="index"
          :text="$t(item.text)"
          :svg="item.svg"
          :is-minimised="isMinimised"
          :target-id="item.targetId"
          :tabIndex="index + 1"
        />
        <MenuLanguageButton />
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.menu-bar {
  border-radius: 50px;
  background: var(--primary-color);
  color: var(--secondary-color);
  font-size: 1.37rem;
  width: 95%;
  transition: all 0.5s ease;
}

.menu-bar-fixed {
  position: sticky;
  width: 100%;
  top: 0;
  border-radius: 0;
  z-index: 1000;
  height: 3.5rem;
  margin: 0;
  font-weight: bold;
}

#menu-team-name {
  font-weight: bold;
  text-shadow: var(--primary-shadow);
  margin-left: 0.625rem;
}

.menu-element-container {
  display: flex;
  flex-direction: row;
  margin-right: 0.625rem;
  gap: 10px;
  li {
    display: inline-block;
    line-height: 1;
  }
}
</style>
