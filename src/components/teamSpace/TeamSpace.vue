<script setup lang="ts">
import TeamMember from '@/components/teamSpace/TeamMember.vue'
import menOne from '@/assets/images/people/men1.jpg'
import menTwo from '@/assets/images/people/men2.jpg'
import menThree from '@/assets/images/people/men3.jpg'
import menFour from '@/assets/images/people/men4.jpg'
</script>

<template>
  <div class="row mb-4 gradient-box" id="team">
    <div class="col-md-12 col-12 text-center p-3">
      <div class="row g-3 m-1">
        <div class="col-md-1 col-12 p-3"></div>
        <div class="col-md-4 col-12 p-3">
          <img
            class="object-fit-cover w-100 h-150 border-radius-20-left border-radius-20-right"
            :alt="$t('containers.aboutUs.imageAltText')"
            src="@/assets/images/BallerLosLoggo.png"
          />
        </div>
        <div class="col-md-6 col-12 text-light p-3 dark-background">
          <h2 style="text-align: left">Das Team</h2>

          <p style="text-align: left; font-size: 18px; margin-top: 30px">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam volup
          </p>
        </div>
        <div class="col-md-1 col-12 p-3"></div>
      </div>
      <div class="row g-3 m-1">
        <div class="col-md-3 col-12 d-none d-md-block text-white text-center p-3">
          <TeamMember member-name="Harri" :imagePath="menOne" />
        </div>
        <div class="col-md-3 col-12 d-none d-md-block text-white text-center p-3">
          <TeamMember member-name="Hussein" :imagePath="menTwo" />
        </div>
        <div class="col-md-3 col-12 d-none d-md-block text-white text-center p-3">
          <TeamMember member-name="Felix" :imagePath="menThree" />
        </div>
        <div class="col-md-3 col-12 d-none d-md-block text-white text-center p-3">
          <TeamMember member-name="Cassandra" :imagePath="menFour" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dark-background {
  background-color: var(--primary-color);
  border-radius: 20px;
  box-shadow: var(--primary-shadow);
}

.gradient-box {
  position: relative;
  box-sizing: border-box;
  $border: 5px;
  background: var(--sixth-color);
  background-clip: padding-box;
  border: solid $border transparent;
  border-radius: 1.5em;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -$border;
    border-radius: inherit;
    background: linear-gradient(to right, #2c86a5 29%, #4bc3b6 64%);
  }
}
</style>
