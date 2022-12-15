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
  <div class="container">
    <!-- evento al click che si collega ad App tramite emit, per poter poi stampare in pagina i risultati in base al parametro specifico -->
    <select name="info" id="info" v-model="store.pickOut" @click="$emit('search')">
      <option value="status">Seleziona o Resetta</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 20px 0;

  select {
    border-radius: 5px;
    padding: 8px;
    border: none;

    &:focus {
      outline: none;
    }
  }
}
</style>