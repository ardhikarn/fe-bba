<template>
  <CardAuth title="Register" needBack description="Let’s create your account!">
    <template #body>
      <form @submit.prevent="signUp" class="text-left">
        <div class="form-group-auth">
          <label>Name</label>
          <input
            type="text"
            v-model="form.user_name"
            name="name"
            class="form-control"
          />
        </div>
        <ValidationProvider name="email" rules="required|email">
          <div class="form-group-auth" slot-scope="{ errors, classes }">
            <label>Email</label>
            <small class="d-block text-danger">{{ errors[0] }}</small>
            <input
              type="email"
              name="email"
              v-model="form.user_email"
              class="form-control"
              :class="classes"
            />
          </div>
        </ValidationProvider>
        <ValidationProvider name="password" rules="required">
          <div class="form-group-auth" slot-scope="{ errors, classes }">
            <label>Password</label>
            <small class="d-block text-danger">{{ errors[0] }}</small>
            <input
              type="password"
              name="password"
              v-model="form.user_password"
              class="form-control"
              :class="classes"
            />
          </div>
        </ValidationProvider>
        <g-button
          type="submit"
          class="btn-lb btn-block mt-4 p-auth rounded-pill"
          >Register</g-button
        >
        <div class="log-with my-4 border-bottom text-center position-relative">
          <span class="bg-white p-3 font-13">Register With</span>
        </div>
        <button
          type="button"
          class="btn btn-outline-lb btn-block p-auth rounded-pill d-flex align-items-center justify-content-center"
        >
          <g-image url="icons/google.svg" class="mr-2" />Google
        </button>
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
        user_name: '',
        user_email: '',
        user_password: ''
      }
    }
  },
  created() {},
  computed: {},
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.form.user_email,
          this.form.user_password
        )
        .then(user => {
          this.$router.replace('/')
          setTimeout(() => {
            this.makeToast('success', 'Success', 'Register Success')
          }, 500)
        })
        .catch(e => {
          this.makeToast('danger', 'Failed', `oops ${e.message}`)
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
