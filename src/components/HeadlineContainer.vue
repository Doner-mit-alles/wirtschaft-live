<script setup lang="ts">
</script>

<template>
  <div class="row mb-4">
    <div class="col-12 text-center">
        <h1>Ein Schülerunternehmen der BBS 1 Lüneburg
          mit<span> Meerwert</span></h1>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: white;
  filter: drop-shadow(var(--primary-shadow));
}

span {
  color: var(--fifth-color);
}

div {
  text-align: center;
}

@media screen and (max-width: 768px) {
  h1{
    font-size: 2.18rem;
  }
}
@media screen and (max-width: 576px) {
  h1 {
    font-size: 1.25rem;
  }
}
</style>
