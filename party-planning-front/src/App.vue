<template>
  <div id="app">
    <button v-if="currentPage !== 'ListSoireePage'" @click="currentPage = 'ListSoireePage'">Liste des soirées</button>
    <list-soiree-page v-if="currentPage === 'ListSoireePage'" />
  </div>
</template>

<script>
import ListSoireePage from "@/pages/ListSoireePage";

export default {
  name: 'App',
  components: {
    ListSoireePage,
  },
  data() {
    return {
      currentPage: 'ListSoireePage',
    }
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #101010;
}
</style>
