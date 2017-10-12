import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'https://localhost:3000/'
})

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    artikel: [],
  }
})

export default store
