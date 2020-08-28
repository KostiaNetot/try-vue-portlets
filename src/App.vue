<template>
  <TipPortlet/>
</template>

<script>
import TipPortlet from "./components/TipPortlet";

export default {
  name: 'App',
  components: {
    TipPortlet
  },
}
</script>

<style>
  #app {

  }

  .card-actions button.btn {
    min-width: unset !important;
  }
</style>
