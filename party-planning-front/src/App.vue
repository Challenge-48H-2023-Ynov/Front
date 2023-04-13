<template>
  <div id="app">
    <button @click="currentPage = 'HomePage'">Accueil</button>
    <home-page v-if="currentPage === 'HomePage'" />
  </div>
</template>

<script>
import HomePage from "@/pages/HomePage";

export default {
  name: 'App',
  components: {
    HomePage
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
