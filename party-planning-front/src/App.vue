<template>
  <div id="app">
    <login></login>
  </div>
</template>
<script>
import Login from "@/pages/Login";
// import Register from "./pages/Register.vue";

export default {
  name: 'App',
  components: {
    Login,
    // Register
  },
    data() {
    return {
      currentPage: 'ListSoireePage',
    }
  },
}
  

</script>

<style>
</style>
