import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import Home from '../views/Home.vue'
import Register from '@/views/auth/Register.vue'
import Login from '@/views/auth/Login.vue'

import Category from '@/views/Category.vue'
import Gigs from '@/views/Gigs.vue'
import DetailGigs from '@/views/DetailGigs.vue'
import Application from '@/views/Application.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    // meta: {
    //   requiresAuth: true,
    //   requiresVisitor: true
    // }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },

  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/gigs',
    name: 'Gigs',
    component: Gigs,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/detail-gigs',
    name: 'DetailGigs',
    component: DetailGigs,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/application',
    name: 'Application',
    component: Application,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next('login')
  } else if (!requiresAuth && currentUser) {
    next('category')
    next('')
  } else {
    next()
  }
})

export default router
