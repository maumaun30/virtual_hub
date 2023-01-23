import { createRouter, createWebHistory } from 'vue-router'

import projectIndex from '../components/projects/index.vue'
import notFound from '../components/notFound.vue'

const routes = [
    {
        path:'/projects',
        component: projectIndex
    },
    {
        path:'/:pathMatch(.*)*',
        component: notFound
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,

})

export default router