<script setup lang="ts">
</script>

<template>
  <div id="headline">
    <h1>Ein Schülerunternehmen der BBS 1 Lüneburg
    <br>
    mit<span> Meerwert</span></h1>
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
  h1{
    font-size: 1.25rem;
  }
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
