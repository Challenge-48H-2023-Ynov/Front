<template>
  <div id="app">
    <login></login>
  </div>
</template>
<script>
import Login from "@/pages/Login";

export default {
  name: 'App',
  components: {
    Login
  },
    data() {
    return {
      currentPage: 'ListSoireePage',
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
