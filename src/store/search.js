import { request, abortAllRequest } from '@utils/api';

export default {
  state: {
    results: [],
    query: ''
  },
  mutations: {
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
        commit('setSearchResults', []);
        return;
      }

      request( url, data => {
        if ( data.pages ) {
          commit('setSearchResults', Object.values(data.pages).map(p => {
            return {
              title: p.title,
              desc: p.description,
              thumb: p.thumbnail && p.thumbnail.url,
              goto: { name: 'BrowseArticle', params: { article: p.title } }
            }
          }))
        }
      })
      
    },
    clear: ({commit}) => {
      abortAllRequest();
      commit('setSearchResults', []);
      commit('setQuery', '');
    }
  },
  getters: {
    searchResults: (state) => state.results,
    query: (state) => state.query
  }
}
