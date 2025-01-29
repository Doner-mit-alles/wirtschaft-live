import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scrollbarStore', {
  state: () => ({
    targetId: '' as string
  }),
  actions: {
    setTargetId(targetId: string) {
      this.targetId = targetId
    },
    getTargetId(): string {
      return this.targetId
    },
    scrollToTarget() {
      const targetElement = document.getElementById(this.targetId)
      if (targetElement == null) return

      const rect = targetElement.getBoundingClientRect()
      const elementTop = rect.top + window.scrollY // Get the top position of the element relative to the document
      const viewportHeight = window.innerHeight // Height of the viewport

      // Calculate the scroll position to center the element, adjusted to be 50px above the targetElement
      const scrollToPosition = elementTop - viewportHeight / 2 + 300

      // Scroll to the calculated position smoothly
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      })
    }
  }
})
