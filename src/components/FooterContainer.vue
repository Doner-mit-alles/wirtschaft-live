<script setup lang="ts">
import LocationElement from '@/assets/icons/location.svg'
import MailElement from '@/assets/icons/mail.svg'
import NoteElement from '@/assets/icons/note.svg'
import PhoneElement from '@/assets/icons/phone.svg'

const bbsEmail = 'info@bbs1-lueneburg.de'
const bbsPhoneNumber = '+49413199220600'
</script>

<template>
  <footer
    class="container mt-5 px-sm-5 px-lg-5 px-md-4"
    id="footer"
    role="contentinfo"
    aria-labelledby="footer-title"
  >
    <div class="row footer-wrapper justify-content-evenly pb-0 position-relative">
      <div class="col-12">
        <div
          class="row d-md-flex ps-2 ps-md-2 d-block justify-content-lg-center justify-content-md-evenly mb-2 mt-3"
        >
          <div class="col-2 d-flex align-items-center mb-2">
            <div class="text">
              <a
                href="https://maps.apple.com/maps/place/Berufsbildende+Schulen+I/@53.2478897,10.423409,16z/data=!3m1!4b1!4m6!3m5!1s0x47b1ddd7656204bb:0xf16f2a9adcf3142f!8m2!3d53.2478897!4d10.423409!16s%2Fg%2F1tfc1234?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
                :aria-label="$t('footer.streetTitle')"
                :title="$t('footer.streetTitle')"
                class="d-flex"
                tabindex="500"
              >
                <component class="icon me-1 align-items-center" :is="LocationElement" />
                {{ $t('footer.street') }},<br />
                {{ $t('footer.zipCode') }}{{ $t('footer.location') }}
              </a>
            </div>
          </div>

          <div class="vertical-line d-md-block d-none" aria-hidden="true"></div>

          <div class="col-2 d-flex align-items-center mb-2">
            <div class="text">
              <a
                :href="`tel:${bbsPhoneNumber}`"
                :aria-label="$t('footer.phoneArialLabel')"
                :title="$t('footer.phoneArialLabel')"
                tabindex="501"
              >
                <component class="icon me-1 align-items-center" :is="PhoneElement" />
                {{ $t('footer.phone') }}
              </a>
            </div>
          </div>

          <div class="vertical-line d-md-block d-none" aria-hidden="true"></div>

          <div class="col-2 d-flex align-items-center mb-2">
            <div class="text">
              <a
                :href="`mailto:${bbsEmail}`"
                :aria-label="$t('footer.mailTitle', { email: bbsEmail })"
                :title="$t('footer.mailTitle', { email: bbsEmail })"
                tabindex="502"
              >
                <component class="icon me-1 align-items-center" :is="MailElement" />
                {{ bbsEmail }}
              </a>
            </div>
          </div>

          <div class="vertical-line d-md-block d-none" aria-hidden="true"></div>

          <div class="col-2 d-flex align-items-center mb-2">
            <div class="text">
              <router-link
                :to="{ path: '/impressum-und-datenschutz', query: $route.query }"
                :aria-label="$t('footer.impressumTitle')"
                :title="$t('footer.impressumTitle')"
                tabindex="503"
              >
                <component class="icon me-1 align-items-center" :is="NoteElement" />
                {{ $t('footer.impressum') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrapper .row > * {
  padding: 10px;
  width: fit-content;
}

.text {
  font-size: 1rem;
  @media (max-width: 576px) {
    font-size: 0.875rem;
  }

  a {
    align-items: center;
  }
}

footer .row {
  align-items: center;
  color: var(--secondary-color);
  font-size: 18px;
}

a {
  color: var(--secondary-color);
  text-decoration: none;
}

.footer-wrapper .vertical-line:not(:last-child) {
  padding: 19px 1px;
  margin-bottom: 8px;
  border-color: var(--secondary-color);
  background-color: white;
}

.footer-wrapper {
  background: var(--primary-color);
  padding: 20px;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
}

.footer-wrapper .row {
  min-width: 300px;
  @media (max-width: 576px) {
    min-width: auto;
  }
}
</style>
