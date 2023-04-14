<template>
  <div id="app">
    <button @click="currentPage = 'EventPage'">Accueil</button>
    <event-page v-if="currentPage === 'EventPage'" />
    <button v-if="currentPage !== 'ListSoireePage'" @click="currentPage = 'ListSoireePage'">Liste des soirées</button>
    <list-soiree-page v-if="currentPage === 'ListSoireePage'" />
  </div>
</template>

<script>
import ListSoireePage from "@/pages/ListSoireePage";
import EventPage from "@/pages/EventPage.vue";

export default {
  name: 'App',
  components: {
    EventPage,
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
  margin-top: 60px;
}
</style>
