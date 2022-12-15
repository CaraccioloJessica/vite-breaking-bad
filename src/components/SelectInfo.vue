<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="container">
    <select name="info" id="info">
      <option disabled selected>Seleziona status</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknow">Unknow</option>
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