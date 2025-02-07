<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import NewsSVG from '@/assets/icons/news.svg'
import CalenderSVG from '@/assets/icons/calendar.svg'
import BookSVG from '@/assets/icons/book-open.svg'
import UserSVG from '@/assets/icons/user.svg'
import contactSVG from '/src/assets/icons/contact.svg'
import MenuElement from '@/components/menuBar/MenuElement.vue'
import MenuLanguageButton from '@/components/menuBar/MenuLanguageButton.vue'
import BurgerMenu from '@/components/menuBar/BurgerMenu.vue'
import BurgerMenuSVG from '@/assets/icons/burger-menu.svg'
import { useScrollStore } from '@/stores/useScrollStore'

const scrollStore = useScrollStore()
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

// Menu items data with type annotation
const menuItems = [
  { text: 'menuBar.aboutUs', svg: NewsSVG, targetId: 'aboutUs' },
  { text: 'menuBar.team', svg: UserSVG, targetId: 'team' },
  { text: 'menuBar.rules', svg: BookSVG, targetId: 'gamingRules' },
  { text: 'menuBar.appointments', svg: CalenderSVG, targetId: 'news-and-appointments' },
  { text: 'menuBar.contact', svg: contactSVG, targetId: 'contact' }
]

// Computed property for class binding
const menuBarClasses = computed(() => ({
  'menu-bar': true,
  'menu-bar-fixed': isMinimised.value
}))
</script>

<template>
  <header
    v-bind:class="menuBarClasses"
    id="menubar"
    class="d-flex justify-content-between align-items-center p-3 m-auto mt-2 header-shadow"
  >
    <router-link
      @click="scrollStore.setTargetId('')"
      :to="{ path: '/', query: $route.query }"
      id="menu-team-name"
      tabindex="2"
      >Baller Los
    </router-link>

    <nav class="menu-element-container">
      <ul class="p-0 mb-0 text-center" role="menubar">
        <MenuElement
          v-for="(item, index) in menuItems"
          :key="index"
          :text="$t(item.text)"
          :svg="item.svg"
          :is-minimised="isMinimised"
          :target-id="item.targetId"
          :tabIndex="1 + index + 1"
        />
        <BurgerMenu :svg="BurgerMenuSVG" />
        <MenuLanguageButton />
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header-shadow {
  box-shadow: 0 8px 6px #000000;
}
/* 
  Dont remove!!!
  Are used in script tag
 */
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

/* 
  Dont remove!!!
  Are used in script tag
 */
@media (min-width: 768px) and (max-width: 992px) {
  .menu-bar {
    font-size: 1rem;
  }
}

/* 
  Dont remove!!!
  Are used in script tag
 */
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
  text-decoration: none;
  letter-spacing: 1px;
  color: white;
  cursor: pointer;
}

#menu-team-name:hover {
  color: white;
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
