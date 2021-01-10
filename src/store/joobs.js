import axios from 'axios'
import data from '../../data.json'

export default {
  state: {
    categories: data.category,
    selectCategory: [],
    allData: [],
    location: [],
    detailGigs: {},
    favorites: [],
    progress: []
  },
  mutations: {
    setSelectCategory(state, payload) {
      state.selectCategory = payload
    },
    setAllData(state, payload) {
      state.allData = payload
    },
    setLocation(state, payload) {
      state.location = payload
    },
    setDetailGigs(state, payload) {
      state.detailGigs = payload
    },
    setProgress(state, payload) {
      state.progress.push(payload)
    }
  },
  actions: {
    apiLocation(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://api.locationiq.com/v1/autocomplete.php?key=pk.4b96a31a8870b85f6813dac93af6e644&q=${payload}&limit=1`
          )
          .then(response => {
            context.commit('setLocation', response.data[0])
            resolve(response.data[0])
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    apiDetailGigs(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://jobs.github.com/positions.json?location=${payload}`)
          .then(response => {
            console.log(response.data[0])
            context.commit('setDetailGigs', response.data[0])
            resolve(response.data[0])
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getCategories(state) {
      return state.categories
    },
    getSelectCategory(state) {
      return state.selectCategory
    },
    getAllData(state) {
      return state.allData
    },
    getLocation(state) {
      return state.location
    },
    getDetailGigs(state) {
      return state.detailGigs
    },
    getProgress(state) {
      return state.progress
    }
  }
}
