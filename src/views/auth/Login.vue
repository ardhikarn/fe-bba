<template>
  <CardAuth title="Login" description="Hi, Welcome back!">
    <template #body>
      <form @submit.prevent="signIn" class=" text-left">
        <div class="form-group-auth">
          <ValidationProvider name="email" rules="required|email">
            <div slot-scope="{ errors, classes }">
              <label>Email</label>
              <small class="d-block text-danger">{{ errors[0] }}</small>
              <input
                type="email"
                v-model="form.user_email"
                name="email"
                class="form-control"
                :class="classes"
              />
            </div>
          </ValidationProvider>
        </div>
        <div class="form-group-auth">
          <ValidationProvider name="password" rules="required">
            <div slot-scope="{ errors, classes }">
              <label>Password</label>
              <small class="d-block text-danger">{{ errors[0] }}</small>

              <input
                type="password"
                v-model="form.user_password"
                name="password"
                class="form-control"
                :class="classes"
              />
            </div>
          </ValidationProvider>
        </div>
        <router-link
          :to="{ name: 'Login' }"
          class="float-right font-14 my-2 text-decoration-none bluetext"
          >Forgot Password ?</router-link
        >
        <div class="clearfix"></div>
        <g-button type="submit" class="btn btn-lb btn-block mt-3 rounded-pill"
          >Login</g-button
        >
        <div class="log-with my-4 border-bottom text-center position-relative">
          <span class="bg-white p-3 font-13">Login With</span>
        </div>
        <button
          @click="signInGoogle"
          type="button"
          class="btn btn-outline-lb btn-block rounded-pill d-flex align-items-center justify-content-center"
        >
          <g-image url="icons/google.svg" class="mr-2" />Google
        </button>
        <p class="text-center mt-4 mb-0 font-14 ">
          Don’t have an account?
          <router-link :to="{ name: 'Register' }" class="bluetext"
            >Sign Up</router-link
          >
        </p>
      </form>
    </template>
  </CardAuth>
</template>

<script>
import firebase from 'firebase'
import CardAuth from '@/components/CardAuth'
export default {
  name: 'Login',
  components: {
    CardAuth
  },
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      }
    }
  },
  computed: {},
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.form.user_email,
          this.form.user_password
        )
        .then(user => {
          console.log(user)
          this.$router.replace('/')
          setTimeout(() => {
            this.makeToast('success', 'Success', 'Login Success')
          }, 500)
        })
        .catch(e => {
          this.makeToast('danger', 'Failed', e.message)
        })
    },
    signInGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.$router.replace('/')
          setTimeout(() => {
            const profile = result.additionalUserInfo.profile.name
            this.makeToast('success', 'Success', `${profile} Login Success`)
          }, 500)
        })
        .catch(e => {
          this.makeToast('danger', 'Failed', e.message)
        })
    },
    makeToast(variant, title, message) {
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: true
      })
    }
  }
}
</script>

<style src="@/assets/css/style.css"></style>
