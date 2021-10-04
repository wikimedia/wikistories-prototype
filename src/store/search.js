import { request, abortAllRequest } from '@utils/api'
import { wikiSubdomain } from '@utils/wiki'

export default {
  namespaced: true,
  state: {
    loading: false,
    results: [],
    query: ''
  },
  mutations: {
    setLoading: (state, loading) => state.loading = loading,
    setQuery: (state, query) => state.query = query,
    setResults: (state, results) => state.results = results,
  },
  actions: {
    search: ({ commit }, query) => {
      const queryString = query.trim();
      const url = `https://${wikiSubdomain}.wikipedia.org/w/rest.php/v1/search/title?q=${queryString}&limit=10`;

      commit('setQuery', query)
      
      if ( !queryString ) {
        abortAllRequest();
        commit('setLoading', false)
        commit('setResults', []);
        return;
      }

      commit('setLoading', true)
      request( url, data => {
        if ( data.pages ) {
          commit('setResults', Object.values(data.pages).map(p => {
            return {
              title: p.title,
              desc: p.description,
              thumb: p.thumbnail && p.thumbnail.url,
              goto: { name: 'Article', params: { article: p.title } }
            }
          }))
        }
        commit('setLoading', false)
      })
      
    },
    clear: ({commit}) => {
      abortAllRequest();
      commit('setLoading', false);
      commit('setResults', []);
      commit('setQuery', '');
    }
  },
  getters: {
    loading: (state) => state.loading,
    results: (state) => state.results,
    query: (state) => state.query
  }
}
