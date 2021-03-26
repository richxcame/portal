import Vue from 'vue'
import Vuex from 'vuex'
import service from '../services/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	searchResults: {},
  },
  mutations: {
  	handleResult(state, result) {
  		state.searchResults = result;
  	}
  },
  actions: {
  	searchQuery(context, query) {
			return fetch(`https://api.themoviedb.org/3/search/movie?api_key=b146440b18073f3a81d51c1fbfc859b6/query=${query}`)
				.then((res) => context.commit('handleResult', res));
  	}

  },
  modules: {
  }
})
