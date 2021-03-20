import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeP.vue'
import LoginPage from '../views/LoginPage.vue'
import AboutPage from '../views/AboutPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  	path: '/login',
  	name: 'Login',
  	component: LoginPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
