import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Movies from '../views/Movies.vue'
import Info from '../views/Info.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MyPage from '../views/MyPage.vue'
import Booking from '../views/Booking.vue'
import MovieDetails from '../views/MovieDetails.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Movies",
    path: "/movies",
    component: Movies
  },
  {
    name: "Info",
    path: "/info",
    component: Info
  },
  {
    name: "About",
    path: "/about",
    component: About
  },
  {
    name: "Login",
    path: "/login",
    component: Login
  },
  {
    name: "Register",
    path: "/register",
    component: Register
  },
  {
    name: "MyPage",
    path: "/mypage",
    component: MyPage
  },
  {
    name: 'Booking',
    path: "/booking/:id",
    component: Booking
  },
  {
    name: "MovieDetails",
    path: "/moviedetails/:id",
    component: MovieDetails
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: PageNotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
});