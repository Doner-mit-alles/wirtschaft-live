<script setup lang="ts">
</script>

<template>
  <div class="row mb-4">
    <div class="col-12" id="headline">
      <h1>Ein Schüler&shy;unternehmen der BBS 1 Lüneburg
        mit<span> Meerwert</span></h1>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: white;
  font-family: Montserrat, sans-serif;
  font-weight: 900;
  filter: drop-shadow(4px 8px 6px black);
}

span {
  color: turquoise;
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
