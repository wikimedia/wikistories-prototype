import { request, abortAllRequest } from '@utils/api';

export default {
  state: {
    loading: false,
    results: [],
    query: ''
  },
  mutations: {
    setLoading: (state, loading) => state.loading = loading,
    setQuery: (state, query) => state.query = query,
    setSearchResults: (state, results) => state.results = results,
  },
  actions: {
    search: ({ commit }, query) => {
      const queryString = query.trim();
      const url = `https://en.wikipedia.org/w/rest.php/v1/search/title?q=${queryString}&limit=10`;

      commit('setQuery', query)
      
      if ( !queryString ) {
        abortAllRequest();
        commit('setLoading', false)
        commit('setSearchResults', []);
        return;
      }

      commit('setLoading', true)
      request( url, data => {
        if ( data.pages ) {
          commit('setSearchResults', Object.values(data.pages).map(p => {
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
      commit('setSearchResults', []);
      commit('setQuery', '');
    }
  },
  getters: {
    loading: (state) => state.loading,
    searchResults: (state) => state.results,
    query: (state) => state.query
  }
}
