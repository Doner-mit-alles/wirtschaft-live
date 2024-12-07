import { defineStore } from 'pinia'

export const useMenuBarStore = defineStore('menuBarStore', {
  state: () => ({
    isMinimised: false as boolean, // Initial status is an empty string
  }),

  actions: {
    setStatus(newStatus: boolean) {
      this.isMinimised = newStatus; // Update the status
    },

    getStatus(): boolean {
      return this.isMinimised; // Return the current status
    },
  },
});