import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Form from '../views/form.vue'
import Detail from '../views/detail.vue'
import NotFound from '../views/404notFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/:patchMatch(.*)*',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
