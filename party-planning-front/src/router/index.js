import {createRouter, createWebHistory} from 'vue-router'
import Brazil from '@/pages/Brazil.vue'

const routes = [
    {path: '/brazil', name: 'brazil', component : Brazil}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router