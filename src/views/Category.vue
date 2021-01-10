<template>
  <div class="text-center">
    <Navbar :dataPick="allData"></Navbar>
    <b-container class="flex">
      <div class="mt-4">
        <h3>Choose your skills</h3>
        <p class="text-muted t-14">
          We will show you relevant gigs associated with your skill set.
        </p>
        <div class="row my-1">
          <div
            class="col-4 my-3"
            v-for="(category, index) in getCategories"
            :key="index"
          >
            <b-card
              :class="{ active: selected2.includes(category.name) }"
              @click="
                selected2.includes(category.name)
                  ? selected2.splice(selected2.indexOf(category.name), 1)
                  : selected2.push(category.name)
              "
            >
              <g-image
                :url="
                  selected2.includes(category.name)
                    ? category.imagePick
                    : category.imageUrl
                "
                class="mb-2"
              />
              <p class="mb-0 t-12">{{ category.name }}</p>
            </b-card>
          </div>
        </div>
      </div>
      <button class="btn btn-lg btn-block mb-2" @click="emitData(selected2)">
        Next
      </button>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Category',
  components: {
    Navbar
  },
  props: {},
  data() {
    return {
      selected: undefined,
      selected2: [],
      allData: []
    }
  },
  mounted() {},
  computed: {
    ...mapGetters(['getCategories'])
  },
  methods: {
    ...mapMutations(['setSelectCategory', 'setAllData']),
    emitData(event) {
      if (event.length < 1) {
        alert('pick category first')
      }
      this.setSelectCategory(event)
      for (let i = 0; i < event.length; i++) {
        axios
          .get(`https://jobs.github.com/positions.json?description=${event[i]}`)
          .then(result => {
            console.log(result.data.length)
            for (let j = 0; j < result.data.length; j++) {
              this.allData.push(result.data[j])
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
      setTimeout(() => {
        this.setAllData(this.allData)
        this.$router.push('/gigs')
      }, 1500)
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .card {
    height: 100px;
    max-height: 100px;
    border-radius: 17px;
    box-sizing: border-box;
    border: 1px solid #eaecfb;
    .card-body {
      padding: 15px;
    }
    &.active {
      border: 1.5px solid #9969d3;
      color: #9969d3;
      .card-body {
        padding: 15px;
        img {
          color: #9969d3 !important;
        }
        p {
          color: #9969d3;
        }
      }
      &::after {
        position: absolute;
        right: -1px;
        top: -1px;
        content: url('./../assets/images/clist.png');
        color: #9969d3;
        height: 25px;
        width: 25px;
        background-color: #9969d3;
        border-bottom-left-radius: 17px;
        border-top-right-radius: 17px;
      }
    }
  }
  button {
    background-color: #9969d3;
    color: #fff;
    &:hover {
      opacity: 0.9;
    }
  }
}
.t-12 {
  font-size: 12px;
  line-height: 14px;
  color: #5a5f69;
}
.t-14 {
  font-size: 14px;
}
</style>
