import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dogs from '../views/Dogs.vue'
import Pets from '../views/Pets.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs
  },
  {
    path: '/pets/:species/:id',
    name: 'Pets',
    component: Pets
  },
  {
    path: '/cats',
    name: 'Cats',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cats.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
