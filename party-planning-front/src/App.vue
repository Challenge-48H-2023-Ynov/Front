<template>
  <div id="app">
    <div id="nav">
      <button v-if="currentPage != 'Register'" @click="currentPage = 'Register'">Start</button>
    <Register v-if="currentPage === 'Register'" />
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
// import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";

export default {
  name: 'App',
  components: {
    // HomePage,
    // Login,
    Register,
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
