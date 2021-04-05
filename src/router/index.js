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

import Admin from '../views/admin/Admin.vue'

import aHome from '../views/admin/pages/aHome.vue'
import aVideos from '../views/admin/pages/aVideos.vue'
import aTracks from '../views/admin/pages/aTracks.vue'
import aMovies from '../views/admin/pages/aMovies.vue'
import aBooks from '../views/admin/pages/aBooks.vue'

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
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      { path: '', component: aHome },
      { path: 'movies', component: aMovies },
      { path: 'tracks', component: aTracks },
      { path: 'books', component: aBooks },
      { path: 'videos', component: aVideos }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
