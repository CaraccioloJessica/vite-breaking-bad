<script>
import SingleCharacter from './SingleCharacter.vue'

import { store } from '../store.js';
export default {
  components: {
    SingleCharacter
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <section class="container">
    <!-- componente figlio che si collega al padre, in cui poi cicliamo nell'array dell api per stampare il risultato in pagina -->
    <SingleCharacter v-for="character in store.characterList" :key="character.id" :info="character" />
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
  display: flex;
  flex-wrap: wrap;
  min-height: 400px;
  padding: 40px;
  background-color: $text-color;
}
</style>
