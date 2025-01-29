<script setup lang="ts">
import MenuElement from '@/components/menuBar/menu-element.vue'
import NewsSVG from '@/assets/icons/news.svg'
import UserSVG from '@/assets/icons/user.svg'
import BookSVG from '@/assets/icons/book-open.svg'
import CalenderSVG from '@/assets/icons/calendar.svg'
import contactImage from '@/assets/icons/contact.svg'
import * as bootstrap from 'bootstrap'

const props = defineProps({
  svg: {
    type: String,
    required: true
  }
})

const menuItems = [
  { text: 'menuBar.aboutUs', svg: NewsSVG, targetId: 'aboutUs' },
  { text: 'menuBar.team', svg: UserSVG, targetId: 'team' },
  { text: 'menuBar.rules', svg: BookSVG, targetId: 'gamingRules' },
  { text: 'menuBar.appointments', svg: CalenderSVG, targetId: 'news-and-appointments' },
  { text: 'menuBar.contact', svg: contactImage, targetId: 'contact' }
]

const handleKeydown = (event: KeyboardEvent) => {

  if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
    event.preventDefault()

    const offcanvasElement = document.getElementById('offcanvasMenu')
    if (offcanvasElement) {
      const bootstrapOffcanvas = new bootstrap.Offcanvas(offcanvasElement)
      bootstrapOffcanvas.show()
    }
  }
}

const closeModal = () => {
  const offcanvas = document.querySelector('.offcanvas.show') as HTMLElement | null;
  if (offcanvas) {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas) || new bootstrap.Offcanvas(offcanvas);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
  }
};
</script>

<template>
  <li
    class="menu-bar-element d-md-none d-md-inline-none mx-2"
    role="menuitem"
    :tabindex="1"
    @keydown="handleKeydown"
  >
    <component
      :is="svg"
      :alt="$t('menuBar.altText.burgerMenuAltText')"
      data-bs-toggle="offcanvas"
      href="#offcanvasMenu"
      role="button"
      aria-controls="offcanvasMenu"
    />

    <div
      class="offcanvas offcanvas-end w-100"
      id="offcanvasMenu"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header p-3">
        <h5 class="offcanvas-title" id="offcanvas-title">Baller Los</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          @keydown="handleKeydown"
          @keydown.enter="closeModal"
          tabindex="2"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="p-0 mb-0 text-center" role="menubar">
          <MenuElement
            v-for="(item, index) in menuItems"
            :key="index"
            :text="$t(item.text)"
            :svg="item.svg"
            :is-minimised="false"
            :target-id="item.targetId"
            :tabIndex="2 + index + 1"
          />
        </ul>
      </div>
    </div>
  </li>
</template>

<style scoped>
.offcanvas {
  background-color: var(--primary-color);
  color: white;

  .menu-bar-element {
    display: block !important;
    margin-bottom: 20px;
    font-size: 1.25rem;
  }
}

.offcanvas-title {
  color: white;
  white-space: nowrap;
  font-weight: bold;
  text-shadow: var(--primary-shadow);
  margin-bottom: 0;
  margin-left: 0.312rem;
  letter-spacing: 1px;
}

.offcanvas-header .btn-close {
  --bs-btn-close-bg: url('data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="%23ffffff"%3e%3cpath d="M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z" fill-opacity="1"/%3e%3c/svg%3e');
}
</style>
