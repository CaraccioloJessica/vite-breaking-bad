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
    <SingleCharacter v-for="character in store.characterList" :key="character.id" :info="character" />
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  min-height: 400px;
  margin: 0 auto;
  padding: 40px;
  background-color: $text-color;
}
</style>
