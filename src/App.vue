<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'
import SelectInfo from './components/SelectInfo.vue'

import { store } from './store.js';

export default {
  components: {
    AppHeader,
    CharactersList,
    SelectInfo
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacters() {
      axios
        .get(store.apiURL)
        .then(res => {
          store.characterList = res.data.results
        }
        )
    }
  },
  mounted() {
    this.getCharacters();
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <SelectInfo />
    <CharactersList />
  </main>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
