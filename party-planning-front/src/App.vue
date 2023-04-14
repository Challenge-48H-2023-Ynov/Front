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
</style>
