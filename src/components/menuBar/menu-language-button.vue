<script setup lang="ts">
import i18n, { getLangFromUrl, setLanguage } from '@/i18n'
import { computed, onMounted, onUnmounted, onUpdated, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import germany from '@/assets/flag/germany_round.svg'
import england from '@/assets/flag/england_round.svg'

const selectedLanguage = ref('')
const isMenuVisible = ref(false)
const router = useRouter()
const route = useRoute()
const dropdownRef = ref<HTMLDivElement | null>(null)

async function setVueLanguage() {
  await setLanguage(getLangFromUrl())
}

const changeLanguage = async (lang: string) => {
  await router.push({
    path: route.path,
    query: { ...route.query, lang: lang }
  })
  await setVueLanguage()
  selectedLanguage.value = lang
  toggleMenu()
}

const currentFlag = computed(() => {
  return {
    flag: selectedLanguage.value === 'de' ? germany : england,
    language: selectedLanguage.value
  }
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

const handleKeydown = async (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
    event.preventDefault()
    await toggleMenu()
    const child = document.getElementById('language-0') as HTMLElement
    if (child) {
      child.focus()
    }
  }
}

const handelKeyDownLanguageSelection = async (event: KeyboardEvent, lang: string) => {
  if (event.key === 'Tab') {
    await toggleMenu()
  } else if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
    await changeLanguage(lang)
    closeMenu()
  }
}

const languages = [
  { code: 'de', flag: germany, altText: 'Deutschland' },
  { code: 'en', flag: england, altText: 'England' }
]
const filterLanguageArray = () => {
  const arrayCopy = [...languages]
  const indexToRemove = arrayCopy.findIndex((item) => item.code === selectedLanguage.value)
  if (indexToRemove !== -1) {
    arrayCopy.splice(indexToRemove, 1)
  }

  return arrayCopy
}
setVueLanguage().then(() => {
  selectedLanguage.value = i18n.global.locale
})

const closeMenu = (): void => {
  isMenuVisible.value = false
}

onUpdated(() => {
  const element = document.getElementById('language-drop-box-container')
  if (
    !isMenuVisible.value &&
    element != null &&
    element.classList.contains('language-drop-box-container-open')
  ) {
    element.classList.remove('language-drop-box-container-open')
  }
})

onMounted(async () => {
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
      closeMenu()
    }
  }

  document.addEventListener('click', handleClickOutside)

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

<template>
  <li class="language-drop-box" tabindex="7" @keydown="handleKeydown">
    <div
      class="language-drop-box-container dropdown"
      ref="dropdownRef"
      id="language-drop-box-container"
      aria-haspopup="true"
      :aria-label="$t('menuBar.aria-label.language')"
    >
      <component :is="currentFlag.flag" @click="toggleMenu" />
      <div
        v-if="isMenuVisible"
        class="language-drop-box-select pt-1"
        id="language-drop-box-dropdown"
      >
        <div class="language-drop-box-selection">
          <div
            class="w-100 h-100"
            v-for="(language, index) in filterLanguageArray()"
            :title="language.altText"
            :key="language.code"
            :id="'language-' + index"
            @click="changeLanguage(language.code)"
            @keydown="(event) => handelKeyDownLanguageSelection(event, language.code)"
            :tabindex="7 + index"
          >
            <component :is="language.flag" :alt="language.altText" />
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<style scoped>
.language-drop-box {
  padding-left: 8px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.language-drop-box:hover {
  cursor: pointer;
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
  height: 30px;
  width: 30px;
  border-radius: 30px;
}

.language-drop-box-container-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.language-drop-box-selection {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
