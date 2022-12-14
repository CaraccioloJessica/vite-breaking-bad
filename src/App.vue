<script>
import AppHeader from './components/AppHeader.vue'
import { store } from './store.js';

export default {
  components: {
    AppHeader,
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

</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
