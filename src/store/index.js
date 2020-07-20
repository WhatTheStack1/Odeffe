import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    initialiseStore (state) {
      if (localStorage.getItem('currentUser')) {
        const user = JSON.parse(localStorage.getItem('currentUser'))
        axios({
          url: `users/${user._id}`,
          method: 'GET'
        })
          .then(
            (response) => {
              state.user = response.data.data
              localStorage.setItem('currentUser', JSON.stringify(response.data.data))
            }
          )
          .catch(
            (error) => {
              if (error) {
                localStorage.removeItem('userId')
                localStorage.removeItem('currentUser')
                localStorage.removeItem('token')
              }
            }
          )
        state.user = JSON.parse(localStorage.getItem('currentUser'))
      }
    },
    currentUser (state, currentUser) {
      state.user = currentUser
      axios.defaults.headers.common.Authorization = currentUser.token
    }
  },
  actions: {
    userSignup ({ commit }, payload) {
      return axios({
        url: '/users',
        method: 'POST',
        data: payload
      })
    },
    userLogin ({ commit }, payload) {
      return axios({
        url: '/users/login',
        method: 'POST',
        data: payload
      })
    },
    updateUser ({ commit }, data) {
      return axios({
        url: `/users/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    forgotPasswordVerificationEmail ({ commit }, payload) {
      return axios({
        url: '/users/forgotpassword',
        method: 'POST',
        data: payload
      })
    },
    changePassword ({ commit }, payload) {
      return axios({
        url: '/users/changepassword',
        method: 'POST',
        data: payload
      })
    },
    updatePassword ({ commit }, data) {
      return axios({
        url: `/users/updatepassword/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    sendWalletOTP ({ commit }, id) {
      return axios({
        url: `/users/wallet/${id}`,
        method: 'PATCH'
      })
    },
    updateWallet ({ commit }, data) {
      return axios({
        url: `/users/wallet/update/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    getPaymentLink ({ commit }, payload) {
      return axios({
        url: '/paykassa/paymentlink',
        method: 'POST',
        data: payload
      })
    },
    startProgram ({ commit }, payload) {
      return axios({
        url: '/programs',
        method: 'POST',
        data: payload
      })
    },
    affiliationReport ({ commit }) {
      return axios({
        url: '/reports',
        method: 'GET'
      })
    },
    affiliations ({ commit }) {
      return axios({
        url: '/affiliations',
        method: 'GET'
      })
    },
    payoutReport ({ commit }) {
      return axios({
        url: '/payouts',
        method: 'GET'
      })
    },
    programs ({ commit }) {
      return axios({
        url: '/programs',
        method: 'GET'
      })
    },
    updateCurrentUser ({ commit }) {
      if (localStorage.getItem('currentUser')) {
        const user = JSON.parse(localStorage.getItem('currentUser'))
        axios({
          url: `users/${user._id}`,
          method: 'GET'
        })
          .then(
            (response) => {
              localStorage.setItem('currentUser', JSON.stringify(response.data.data))
            }
          )
          .catch(
            (error) => {
              if (error) {
                localStorage.removeItem('userId')
                localStorage.removeItem('currentUser')
                localStorage.removeItem('token')
              }
            }
          )
        commit('currentUser', JSON.parse(localStorage.getItem('currentUser')))
      }
    },
    userVerification ({ commit }, payload) {
      return axios({
        url: '/users/verify',
        method: 'POST',
        data: payload
      })
    },
    emailUs ({ commit }, payload) {
      return axios({
        url: '/admin/email',
        method: 'POST',
        data: payload
      })
    }
  },
  modules: {
  }
})
