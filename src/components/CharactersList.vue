<script>
import { store } from '../store.js';
export default {
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <section class="container">
    <div class="card">
      <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
      <h4>nome</h4>
      <h5>stato</h5>
      <h5>specie</h5>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
  width: 900px;
  min-height: 400px;
  margin: 0 auto;
  background-color: $text-color;

  h4 {
    text-transform: uppercase;
  }

  h4,
  h5 {
    // da cambiare
    color: black;
  }
}
</style>