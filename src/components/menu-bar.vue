<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import NewsSVG from '@/assets/images/news.svg'
import CalenderSVG from '@/assets/images/calendar.svg'
import BookSVG from '@/assets/images/book-open.svg'
import UserSVG from '@/assets/images/user.svg'
import contactSVG from '/src/assets/images/contact.svg';
import MenuElement from '@/components/menu-element.vue'
import MenuLanguageButton from '@/components/menu-language-button.vue'
import { useMenuBarStore } from '@/stores/useMenuBarStore'
import BurgerMenu from '@/components/BurgerMenu.vue'
import BurgerMenuSVG from '@/assets/images/burger-menu.svg'

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
  { text: 'menuBar.aboutUs', svg: NewsSVG, targetId: 'aboutUs' },
  { text: 'menuBar.team', svg: UserSVG, targetId: 'team' },
  { text: 'menuBar.rules', svg: BookSVG, targetId: 'gamingRules' },
  { text: 'menuBar.appointments', svg: CalenderSVG, targetId: 'newsAndAppointments' },
  { text: 'menuBar.contact', svg: contactSVG, targetId: 'contact' }
]

// Computed property for class binding
const menuBarClasses = computed(() => ({
  'menu-bar': true,
  'menu-bar-fixed': isMinimised.value
}))
</script>

<template>
  <header v-bind:class="menuBarClasses" id="menubar"  class="d-flex justify-content-between align-items-center p-3 m-auto mt-2">
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
        <BurgerMenu
          :svg="BurgerMenuSVG"
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
  width: 88%;
  transition: all 0.5s ease;
  @media (min-width: 768px) {
    width: 95%;
  }
}

@media (min-width:768px) and (max-width: 992px) {
  .menu-bar {
    font-size: 1rem;
  }
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
  white-space: nowrap;
  font-weight: bold;
  text-shadow: var(--primary-shadow);
  margin-bottom: 0;
  margin-left: 0.625rem;
  letter-spacing: 1px;
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
