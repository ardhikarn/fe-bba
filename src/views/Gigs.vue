<template>
  <div class="text-center">
    <Navbar></Navbar>
    <b-container>
      <div class="mt-4">
        <div class="title-section">
          <h3 class="float-left mb-4">
            Latest Gigs
          </h3>
          <b-button
            class="float-right mb-4 rounded"
            @click="$router.push('/category')"
            >back</b-button
          >
        </div>
        <div class="sidebar-search my-4">
          <div class="input-group mb-3">
            <g-image url="icons/search.svg" width="20" class="search-icon" />
            <input
              type="text"
              class="form-control border-0 mr-3 py-4"
              placeholder="Search for gigs"
            />
            <div class="input-group-append">
              <b-button class=" px-3" type="button">
                <g-image url="icons/filter.svg" width="25" />
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </b-container>
    <hr class="m-0" style="borderTop: 8px solid #f2f2f2" />
    <div
      class="card"
      v-for="(data, index) in getAllData"
      :key="index"
      @click="detailCategory(data.location)"
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
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Gigs',
  components: {
    Navbar
  },
  data() {
    return {
      items: ''
    }
  },
  created() {},
  computed: {
    ...mapGetters(['getAllData'])
  },
  methods: {
    ...mapMutations(['setLocation']),
    ...mapActions(['apiLocation', 'apiDetailGigs']),
    detailCategory(item) {
      this.apiDetailGigs(item)
      this.apiLocation(item)
        .then(response => {
          const arr = [parseFloat(response.lat), parseFloat(response.lon)]
          this.$router.push(`/detail-gigs?${response.display_place}`)
          this.setLocation(arr)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.title-section button,
.input-group-append button {
  border-radius: 11px !important;
  background-color: #9969d3;
}

.search-icon {
  position: absolute;
  z-index: 10;
  left: 15px;
  top: 10px;
  padding: 4px 0;
}

.form-control {
  border-radius: 10px !important;
  &::placeholder {
    color: #9ea1a5;
  }
}

.input-group input {
  padding-left: 45px;
  background-color: #f3f3f3;
}

.card {
  border-radius: 0;
  border-top: 0;
  border-bottom: 8px solid #f2f2f2;
  cursor: pointer;
}
</style>
