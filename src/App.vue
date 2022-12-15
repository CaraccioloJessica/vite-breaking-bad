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
      let myUrl = store.apiURL;

      // condizioni che al select stampano un parametro specifico
      if (store.pickOut === 'alive' || store.pickOut === 'dead' || store.pickOut === 'unknown') {
        myUrl += `?${store.apiStatusParameter}=${store.pickOut}`
      }

      // per connettersi all api
      axios
        .get(myUrl)
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
    <!-- richiamo all'emit del componente-->
    <SelectInfo @search="getCharacters" />
    <CharactersList />
  </main>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
