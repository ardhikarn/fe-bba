<template>
  <div class="text-center">
    <Navbar></Navbar>
    <div id="mapContainer"></div>
    <div class="section-desc">
      <b-container class="flex">
        <div class="mt-5">
          <p class="text-muted mb-0">
            {{ getDetailGigs.company }}
          </p>
          <h5 class="my-1">{{ getDetailGigs.title }}</h5>
          <small class="text-muted"
            ><span><g-image url="icons/place.svg" class="pb-1"/></span>
            {{ getDetailGigs.location }}</small
          >
          <input
            type="text"
            class="form-control border-0  py-4 my-3"
            placeholder="Description"
          />
          <div class="text-left mt-4">
            <p class="my-2">Overview</p>
            <div class="text-muted" v-html="getDetailGigs.description"></div>
          </div>
        </div>
        <!-- BUTTON -->
        <div class="row mb-2">
          <div class="col-2">
            <b-button class="btn-lg btn-like">
              <g-image url="icons/like.svg" class="search-icon" />
            </b-button>
          </div>
          <div class="col-10">
            <b-button class="btn-lg btn-block btn-apply" @click="apply">
              Apply Now
            </b-button>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import Navbar from '@/components/Navbar.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Category',
  components: {
    Navbar
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getLocation', 'getDetailGigs'])
  },
  methods: {
    ...mapMutations(['setProgress']),
    setupLeafletMap: function() {
      var map = L.map('mapContainer').setView(this.getLocation, 13)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
        map
      )

      const MarkIcon = L.Icon.extend({
        options: {
          iconSize: [30, 30],
          shadowSize: [20, 20]
        }
      })

      const Icon = new MarkIcon({
        iconUrl:
          'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'
      })

      L.marker(this.getLocation, {
        icon: Icon
      })
        .addTo(map)
        .bindPopup('Location Detected')
        .openPopup()
    },
    apply() {
      this.setProgress(this.getDetailGigs)
      this.$router.push('/application')
    }
  },
  mounted() {
    this.setupLeafletMap()
  }
}
</script>

<style lang="scss" scoped>
#mapContainer {
  width: 100vw;
  height: 45vh;
  position: relative;
  z-index: 1;
}

.section-desc {
  position: absolute;
  width: 100%;
  background-color: #fff;
  top: 275px;
  z-index: 2;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  .flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    input {
      background-color: #f3f3f3;
      border-radius: 11px;
      &::placeholder {
        color: #2e3137;
        padding-left: 5px;
      }
    }
    .btn-like {
      background-color: #fff;
      border: 1px solid rgba(158, 161, 165, 0.4);
      border-radius: 12px;
    }
    .btn-apply {
      background-color: #9969d3;
      border-radius: 12px;
    }
  }
}
</style>
