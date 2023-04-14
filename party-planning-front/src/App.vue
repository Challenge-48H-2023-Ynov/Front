<template>
  <div id="app">
    <button @click="currentPage = 'EventPage'">Accueil</button>
    <event-page v-if="currentPage === 'EventPage'" />
  </div>
</template>

<script>

import EventPage from "@/pages/EventPage.vue";
export default {
  name: 'App',
  components: {
    EventPage,
  },
  data() {
    return {
      currentPage: '',
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
