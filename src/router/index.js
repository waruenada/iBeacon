import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import qr from '../components/dialogGenQr.vue'
// import dialog_search from '../components/dialog_search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/qr',
    name: 'qr',
    component: qr
  }
  // {
  //   path: '/',
  //   name: 'dialog_search',
  //   component: dialog_search
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
