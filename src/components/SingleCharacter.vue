<script>
export default {
  // oggetto per collegarsi al componente padre
  props: ['info']
}
</script>

<template>
  <div class="card">
    <!-- richiamo delle proprietà dell api che ci servono -->
    <img :src="info.image" :alt="info.name">
    <h4>{{ info.name }}</h4>
    <h5>{{ info.status }}</h5>
    <h5>{{ info.species }}</h5>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
  background-color: $primary-color;
  width: calc(100% / 5 - 20px);
  padding: 10px 10px 40px;
  margin: 0 10px 20px;

  img {
    width: 100%;
  }

  h4 {
    font-size: 0.7rem;
    margin: 10px 0;
    text-transform: uppercase;
    color: $text-color;
  }

  h4,
  h5 {
    text-align: center;
  }

  h5 {
    font-size: 0.7rem;
    color: $subtext-color;
  }
}
</style>