import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'


// we first import the module
// import quests from './quests'

// Initialize Feathers Vuex
import feathersClient from '../api';
const { service, auth, FeathersVuex } = feathersVuex(feathersClient, { idField: '_id' })

Vue.use(Vuex)
Vue.use(FeathersVuex)

const store = new Vuex.Store({
  state: {
    isAuthenticated: true,
    canEdit: true,
    isAdmin: true,
    user: null,
    treeView: null
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    canEdit: state => state.canEdit,
    isAdmin: state => state.isAdmin,
    node: state => state.conversation.copy,
    user: state => state.user,
    treeView: state => state.treeView
  },
  mutations: {
    admin (state, t) {
      console.info('CommitAdmin', t)
      state.isAdmin = t
    },
    authenticate (state, t) {
      state.isAuthenticated = t
    },
    usr (state, user) {
      console.info('CommitUser', user)
      state.user = user
    },
    tree (state, tree) {
      state.treeView == tree
    }
  },
  modules: {
    // then we reference it
    //quests
  },
  plugins: [
    service('conversation', { idField: 'id'})
  ]
})
export default store
