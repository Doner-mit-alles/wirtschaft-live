<script setup lang="ts">
import TeamMember from '@/components/teamSpace/TeamMember.vue'
</script>

<template>
  <!--  <div class="row mb-4">-->
  <!--    <div class="row justify-content-center">-->
  <!--      <div class="col-md-6">-->
  <!--        <div class="gradient-border p-3">-->
  <!--          <div class="col-md-4 col-12 bg-primary text-white text-center p-0 border-radius-20-left">-->
  <!--            <img-->
  <!--              style="width: 300px; height: 300px"-->
  <!--              src="@/assets/images/BallerLosLoggo.png"-->
  <!--              alt=""-->
  <!--            />-->
  <!--          </div>-->
  <!--          <div style="background-color: var(&#45;&#45;primary-color)">-->
  <!--            <h2 style="color: white">Das Team</h2>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <!--  <div class="row justify-content-center p-3 tempClass">-->
  <!--    <div class="row mb-4" id="aboutUs">-->
  <!--      <div class="">-->
  <!--        <div class="col-md-4 col-12 bg-primary text-white text-center p-0 border-radius-20-left">-->
  <!--          <img-->
  <!--            class="object-fit-cover w-100 h-100 border-radius-20-left"-->
  <!--            :alt="$t('containers.aboutUs.imageAltText')"-->
  <!--            src="@/assets/images/BallerLosLoggo.png"-->
  <!--          />-->
  <!--        </div>-->
  <!--        <div-->
  <!--          class="col-md-7 col-12 bg-primary text-white text-left p-4 pl-3 p-md-5 border-radius-20-right"-->
  <!--        >-->
  <!--          <h2 class="font-bold">Das Team</h2>-->
  <!--          <div>-->
  <!--            <p>-->
  <!--              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no-->
  <!--              sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,-->
  <!--              consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et-->
  <!--              dolore magna aliquyam erat, sed diam volup-->
  <!--            </p>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <TeamMember />-->
  <!--    <TeamMember />-->
  <!--    <TeamMember />-->
  <!--  </div>-->

  <div class="row mb-4" id="team" style="border: 1px white solid">
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

          <p style="text-align: left; font-size: 18px; margin-top: 30px;">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam volup
          </p>
        </div>
        <div class="col-md-1 col-12 p-3"></div>
      </div>
      <!-- Row mit 3 Spalten -->
      <div class="row g-3 m-1">
        <div class="col-md-3 col-12 bg-success text-white text-center p-3">Team Foto 1</div>
        <div class="col-md-3 col-12 d-none d-md-block bg-info text-white text-center p-3">
          Team Foto 2
        </div>
        <div class="col-md-3 col-12 d-none d-md-block bg-danger text-white text-center p-3">
          Team Foto 3
        </div>
        <div class="col-md-3 col-12 d-none d-md-block bg-info text-white text-center p-3">
          Team Foto 4
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dark-background {
  background-color: var(--primary-color);
  border-radius: 20px;
  box-shadow: var(--primary-shadow);
}

.gradient-border {
  position: relative;
  padding: 1px;
  border-radius: 20px;
  background: white;
}

.gradient-border::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(to right, #2c86a5 29%, #4bc3b6 64%);
  z-index: -1;
  border-radius: inherit;
}
</style>
