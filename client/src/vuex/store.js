import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'https://localhost:3000/'
})

Vue.use(Vuex)

const state = {
  artikel: []
}

const mutations = {
  setArtikel (state, payload) {
    console.log('data di mutations -------> ', payload)
    state.artikel = payload
  }
}

const actions = {
  dapatkanArtikel ({commit}) {
    http.get('/artikel/semua')
    .then(({data}) => {
      commit('setArtikel', data)
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
