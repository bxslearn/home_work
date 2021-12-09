import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import('../views/home/Home.vue')
const Pservices=()=>import("../views/pservices/pservices")
const Examples=()=>import("../views/examples/examples")
const Member=()=>import("../views/member/Member")
const About=()=>import("../views/About/About")
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/examples',
    name: 'Examples',
    component: Examples
  },
  {
    path: '/member',
    name: 'Member',
    component:Member
  },
  {
    path: '/pservices',
    name: 'Pservices',
    component:Pservices
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
