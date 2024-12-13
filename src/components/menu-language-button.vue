<script setup lang="ts">
import i18n, { loadLocaleMessages } from '@/i18n'
import { computed, ref } from 'vue'
import germany from '@/assets/flag/germany_round.svg'
import england from '@/assets/flag/england_round.svg'

const selectedLanguage = ref(i18n.global.locale)
const changeLanguage = async (locale: string) => {
  selectedLanguage.value = locale
  toggleMenu()
  await loadLocaleMessages(locale)
}
const isMenuVisible = ref(false)

const currentFlag = computed(() => {
  return {
    flag: selectedLanguage.value === 'de' ? germany : england,
    language: selectedLanguage.value
  };
})

const toggleMenu = (): void => {
  isMenuVisible.value = !isMenuVisible.value
  const element = document.getElementById('language-drop-box-container')
  if (isMenuVisible.value && element) {
    element.classList.add('language-drop-box-container-open')
  } else if (element) {
    element.classList.remove('language-drop-box-container-open')
  }
}

const languages = [
  { code: 'de', flag: germany, altText: 'Deutschland' },
  { code: 'en', flag: england, altText: 'England' }
]
</script>

<template>
  <div class="language-drop-box">
    <div class="language-drop-box-container" id="language-drop-box-container">
      <component :is="currentFlag.flag" @click="toggleMenu" />
      <div v-if="isMenuVisible" class="language-drop-box-select">
        <div class="language-drop-box-selection">
          <div style="width: 100%; height: 100%" v-for="language in languages" :key="language.code">
            <component
              v-if="currentFlag.language != language.code"
              @click="changeLanguage(language.code)"
              :is="language.flag"
              class="language-drop-box-select-child"
              :alt="language.altText"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.language-drop-box {
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.language-drop-box-select {
  width: 100%;
  position: absolute;
  margin-top: -1px;
  height: max-content;
  background: var(--forth-color);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.language-drop-box-container {
  background: var(--forth-color);
  height: 35px;
  width: 35px;
  border-radius: 30px;
}

.language-drop-box-container-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.language-drop-box-selection {
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
