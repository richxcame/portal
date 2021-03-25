import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Movies from '../views/Movies.vue'
import Tracks from '../views/Tracks.vue'
import Videos from '../views/Videos.vue'
import MovieDetails from '../views/MovieDetails.vue'
import Watch from '../views/Watch.vue'

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
    path: '/videos',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails.vue',
    component: MovieDetails
  },
  {
    path: '/watch/:id',
    name: 'Watch',
    component: Watch
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
