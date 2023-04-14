<template>
  <div id="app">
    <div id="nav">
      <button v-if="currentPage != 'Login'" @click="currentPage = 'Login'">Start</button>
    <Login v-if="currentPage === 'Login'" />
    <router-link to="/brazil">Brazil</router-link>
    <router-view></router-view>
  </div>
    <div class="container">
    </div>
  </div>
</template>
<!-- <script type="module" src="../router/index.js"></script> -->
<script>
// import HomePage from "@/pages/HomePage";
import Login from "./pages/Login.vue";

export default {
  name: 'App',
  components: {
    // HomePage,
    Login,
},
  data() {
    return {
      currentPage: '',
    }
  },
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
