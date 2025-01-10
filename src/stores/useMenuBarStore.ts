import { defineStore } from 'pinia'

export const useMenuBarStore = defineStore('menuBarStore', {
  state: () => ({
    isMinimised: false as boolean
  }),

  actions: {
    setStatus(newStatus: boolean) {
      this.isMinimised = newStatus
    },

    getStatus(): boolean {
      return this.isMinimised
    }
  }
})
