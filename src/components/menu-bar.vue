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
  <div v-bind:class="menuBarClasses" id="menubar">
    <p id="menu-team-name">Baller Los</p>

    <div class="menu-element-container">
      <MenuElement
        v-for="(item, index) in menuItems"
        :key="index"
        :text="$t(item.text)"
        :svg="item.svg"
        :is-minimised="isMinimised"
        :target-id="item.targetId"
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
  position: sticky;
  width: 100%;
  top: 0;
  border-radius: 0;
  z-index: 1000;
  height: 50px;
  margin: 0;
  font-weight: bold;
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
