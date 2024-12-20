<script setup lang="ts">
</script>

<template>
  <footer class="container mt-5 px-5 px-lg-5 px-md-4" id="footer">
    <div class="row g-3 mb-4">
      <div class="col-12 mb-4 d-flex justify-content-around">
        <div><a href="https://www.w3schools.com">FooterRef1</a></div>
        <div>|</div>
        <div><a href="https://www.w3schools.com">FooterRef2</a></div>
        <div>|</div>
        <div><a href="https://www.w3schools.com">FooterRef3</a></div>
        <div>|</div>
        <div><a href="https://www.w3schools.com">FooterRef4</a></div>
        <div>|</div>
        <div><a href="https://www.w3schools.com">FooterRef5</a></div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

footer .row {
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  color: var(--secondary-color);
  font-size: 22px;
  background: var(--primary-color);
}

a {
  color: var(--secondary-color);
  text-decoration: none;
}
</style>
