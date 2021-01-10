<template>
  <div class="text-center">
    <navbar></navbar>
    <div
      class="card"
      v-for="(data, index) in getProgress"
      :key="index"
      v-show="getProgress.length > 0"
    >
      <b-container>
        <div class="row py-4">
          <div class="col-2 align-self-center pr-0">
            <img :src="data.company_logo" class="img-fluid" />
          </div>
          <div class="col-7 text-left align-self-center ">
            <p class="mb-0">{{ data.title }}</p>
            <p class="mb-0 text-muted">{{ data.company }}</p>
          </div>
          <div class="col-3 my-auto pl-0">
            <small class="text-muted">{{ data.created_at.slice(0, 10) }}</small>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Application',
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(['getProgress'])
  },
  mounted() {
    console.log(this.getProgress)
  }
}
</script>
