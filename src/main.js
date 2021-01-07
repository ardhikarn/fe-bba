import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ValidationProvider, extend, configure } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import './assets/css/style.css'
import './GlobalComponents.js'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// VEE-VALIDATE
extend('required', {
  ...required,
  message: 'This field is required'
})
extend('email', {
  ...email,
  message: 'This field must be a valid email'
})
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
Vue.component('ValidationProvider', ValidationProvider)

Vue.config.productionTip = false

let app
var config = {
  apiKey: 'AIzaSyA_MB6wSrfagOwzhVKyp6-7cr63XF71BBo',
  authDomain: 'auth-bba.firebaseapp.com',
  projectId: 'auth-bba',
  storageBucket: 'auth-bba.appspot.com',
  messagingSenderId: '857247080737',
  appId: '1:857247080737:web:c2718ec03aae4624de1e60'
}

firebase.initializeApp(config)

window.firebase = firebase

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
