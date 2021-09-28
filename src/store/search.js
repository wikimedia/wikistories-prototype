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
      const url = "https://en.wikipedia.org/w/api.php?action=query&generator=prefixsearch&prop=description|pageimages|pageprops&piprop=thumbnail&ppprop=displaytitle&redirects=false&pithumbsize=64&gpslimit=10&gpsnamespace=0&format=json&formatversion=2&origin=*&gpssearch=" + queryString;

      commit('setQuery', query)
      
      if ( !queryString ) {
        abortAllRequest();
        commit('setSearchResults', []);
        return;
      }

      request( url, data => {
        if ( data.query && data.query.pages ) {
          data.query.pages.sort( ( a, b ) => a.index - b.index );    
          commit('setSearchResults', Object.values(data.query.pages).map(p => {
            return {
              title: p.title,
              desc: p.description,
              thumb: p.thumbnail && p.thumbnail.source,
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
