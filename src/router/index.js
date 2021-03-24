import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Movies from '../views/Movies.vue'
import Tracks from '../views/Tracks.vue'
import Images from '../views/Images.vue'
import MovieDetails from '../views/MovieDetails.vue'

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
  	component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/tracks',
    name: 'Tracks',
    component: Tracks
  },
  {
    path: '/images',
    name: 'Images',
    component: Images
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails.vue',
    component: MovieDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
