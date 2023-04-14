import Vue from 'vue'
import App from './App.vue'
// import {VueRouter} from 'vue-router'
// import Brazil from '@/pages/Brazil.vue'

// Vue.use(VueRouter)

// const routes = [
//     {path: '/brazil', name: 'brazil', component : Brazil}
// ]

// const router = new VueRouter({
//     // history: createWebHistory(),
//     routes
// })

// export default router
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
