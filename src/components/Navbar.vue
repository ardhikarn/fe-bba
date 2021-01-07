<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="backgroundColor: #9969d3">
      <router-link to="/" class="text-white">Joobs</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <!-- Right aligned nav items -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- Using 'button-content' slot -->
          <b-nav-item-dropdown v-if="!authUser" text="Login / Register" right>
            <b-dropdown-item @click="$router.push('/register')">
              <a> Register</a>
            </b-dropdown-item>
            <b-dropdown-item @click="$router.push('/login')">
              <a> Login</a>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown v-if="authUser" text="User" right>
            <b-dropdown-item @click="logout">
              <a> Logout</a>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Navbar',
  data() {
    return {
      authUser: null
    }
  },
  watch: {
    $route: 'setAuthUser'
  },
  methods: {
    setAuthUser() {
      this.authUser = firebase.auth().currentUser
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('/login')
        })
        .catch(e => {
          alert(e.message)
        })
    }
  },
  created() {
    this.setAuthUser()
  }
}
</script>
