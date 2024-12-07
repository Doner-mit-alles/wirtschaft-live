<script setup lang="ts"></script>

<template>
  <!-- TODO noch in einzelne Komponenten einbauen!!! -->
  <div class="container mt-5 px-5 px-md-5">
    <!-- Row mit 1 Spalte -->
    <div class="row mb-4">
      <div class="col bg-success text-white text-center p-3">Überschrift (100%)</div>
    </div>

    <!-- Row mit 2 unterschiedlichen Spalten -->
    <div class="row mb-4">
      <div class="col-md-4 g-3 bg-primary text-white text-center p-3">Bild (33%)</div>
      <div class="col-md-8 g-3 bg-secondary text-white text-center p-3">Info Text (67%)</div>
    </div>

    <!-- Row mit Inhalt -->
    <div class="row mb-4">
      <div class="col-md-12 bg-dark text-white text-center p-3">
        Umrandung (100%)
        <!-- Row mit 2 Spalten -->
        <div class="row g-3 m-1">
          <div class="col-md-5 bg-danger p-3">Logo</div>
          <div class="col-md-7 bg-warning text-dark p-3">Text Team</div>
        </div>
        <!-- Row mit 3 Spalten -->
        <div class="row g-3 m-1">
          <div class="col-md-3 bg-success text-white text-center p-3">Team Foto 1</div>
          <div class="col-md-3 d-none d-md-block bg-info text-white text-center p-3">
            Team Foto 2
          </div>
          <div class="col-md-3 d-none d-md-block bg-danger text-white text-center p-3">
            Team Foto 3
          </div>
          <div class="col-md-3 d-none d-md-block bg-info text-white text-center p-3">
            Team Foto 4
          </div>
        </div>
      </div>
    </div>

    <!-- Row mit 1 Spalte -->
    <div class="row g-3 mb-4">
      <div class="col bg-warning text-dark text-center p-3">Regeln 1 (100%)</div>
    </div>

    <div class="row g-3 mb-4">
      <div class="col-md-6 bg-info text-white p-3">Neuigkeiten (50%)</div>
      <div class="col-md-6 bg-light text-dark p-3">Termine (50%)</div>
    </div>

    <!-- Row mit 1 Spalte -->
    <div class="row g-3 mb-4">
      <div class="col bg-dark text-white text-center p-3">Kontaktformular (100%)</div>
    </div>
  </div>

  <div class="container mt-5 px-5 px-md-5 mb-4">
    <div class="row g-3">
      <div class="col bg-success text-black text-center p-3">Footer (100%)</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-width: 200px;
}
</style>
