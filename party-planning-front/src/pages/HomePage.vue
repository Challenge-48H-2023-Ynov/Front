<template>
  <div>
    <div id="nav">
      <router-link to="/brazil">Brazil</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
      <!-- l <span>{{test}}</span> -->
    </div>
   
  </div>
</template>

<script type="module" src="../router/index"></script>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      test: 'ceci est un test'
    }
  },
}
</script>

<style scoped>

</style>