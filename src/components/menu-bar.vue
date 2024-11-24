<script setup lang="ts">
import NewsSVG from '@/assets/news.svg'
import CalenderSVG from '@/assets/calendar.svg'
import BookSVG from '@/assets/book-open.svg'
import UserSVG from '@/assets/user.svg'
import MenuElement from '@/components/menu-element.vue'
import { ref, onMounted } from 'vue'

const isMinimised: ref<Boolean> = ref(false)
onMounted(() => {
  if (isMinimised.value) {
    minimsMenuBar()
  }
})

function minimsMenuBar(): void {
  const divElement = document.getElementsByClassName('menu-bar')[0] as HTMLDivElement
  const currentHeight = divElement.offsetHeight
  divElement.style.height = `${currentHeight / 2}px`

  divElement.style.borderRadius = 0
  divElement.style.width = '100%'
  divElement.style.margin = 0
}
</script>

<template>
  <div class="menu-bar">
    <p id="menu-team-name">Baller Los</p>
    <div class="menu-element-container">
      <MenuElement text="Neuigkeiten" :svg="NewsSVG" :is-minimised="isMinimised" />
      <MenuElement text="Spielregeln" :svg="BookSVG" :is-minimised="isMinimised" />
      <MenuElement text="Termine" :svg="CalenderSVG" :is-minimised="isMinimised" />
      <MenuElement text="Team" :svg="UserSVG" :is-minimised="isMinimised" />
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
  background: #272727;
  color: #ffffff;
  font-size: 22px;
  width: 95%;
}

#menu-team-name {
  padding: 20px;
  font-weight: bold;
  text-shadow: 4px 8px 6px #000000;
  margin-left: 10px;
}

.menu-element-container {
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-right: 10px;
}
</style>
