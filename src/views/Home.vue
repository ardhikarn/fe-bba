<template>
  <div class="home">
    <Navbar></Navbar>
    <button class="btn btn-sm btn-primary my-5" @click="toCategory">
      Lets Get Started
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from './../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  methods: {
    toCategory() {
      this.$router.replace('/category')
    }
  }
}
</script>
