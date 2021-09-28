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
    update: ({commit}, e) => {
      commit('setQuery', e.target.value)
    },
    search: async ({commit, state}) => {
      const url = "https://en.wikipedia.org/w/api.php?action=query&generator=prefixsearch&prop=description|pageimages|pageprops&piprop=thumbnail&ppprop=displaytitle&redirects=false&pithumbsize=64&gpslimit=10&gpsnamespace=0&format=json&formatversion=2&origin=*&gpssearch=" + state.query
      const response = await (await fetch(url)).json()
      commit('setSearchResults', Object.values(response.query.pages).map(p => {
        return {
          title: p.title,
          desc: p.description,
          thumb: p.thumbnail && p.thumbnail.source,
          goto: { name: 'BrowseArticle', params: { article: p.title } }
        }
      }))
    },
    clear: ({commit}) => {
      commit('setSearchResults', []);
      commit('setQuery', '');
    }
  },
  getters: {
    searchResults: (state) => state.results,
    query: (state) => state.query
  }
}
