<script>
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'

import { store } from './store.js';

export default {
  components: {
    AppHeader,
    CharactersList
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <AppHeader />
  <main>
    <CharactersList />
  </main>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
