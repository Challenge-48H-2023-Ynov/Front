<template>
  <div id="app">
    <button v-if="currentPage !== 'ListSoireePage'" @click="currentPage = 'ListSoireePage'">Liste des soirées</button>
    <list-soiree-page v-if="currentPage === 'ListSoireePage'" />
    <button v-if="currentPage != 'Register'" @click="currentPage = 'Register'">Register</button>
    <Register v-if="currentPage === 'Register'" />
    <button v-if="currentPage != 'Login'" @click="currentPage = 'Login'">Login</button>
    <Login v-if="currentPage === 'Login'" />
    <div id="nav">
      
    <!-- <router-link to="/brazil">Brazil</router-link> -->
    <router-view></router-view>
  </div>
    <div class="container">
    </div>
  </div>
</template>
<!-- <script type="module" src="../router/index.js"></script> -->
<script>
import ListSoireePage from "@/pages/ListSoireePage";
// import HomePage from "@/pages/HomePage";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";

export default {
  name: 'App',
  components: {
    ListSoireePage,
    // HomePage,
    Login,
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
