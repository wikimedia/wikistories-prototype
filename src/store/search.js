export default {
  state: {
    results: []
  },
  mutations: {
    setSearchResults: (state, results) => state.results = results,
  },
  actions: {
    search: async ({commit}, query) => {
      const url = "https://en.wikipedia.org/w/api.php?action=query&generator=prefixsearch&prop=description|pageimages|pageprops&piprop=thumbnail&ppprop=displaytitle&redirects=false&pithumbsize=64&gpslimit=10&gpsnamespace=0&format=json&formatversion=2&origin=*&gpssearch=" + query
      const response = await (await fetch(url)).json()
      commit('setSearchResults', Object.values(response.query.pages).map(p => {
        return {
          title: p.title,
          desc: p.description,
          thumb: p.thumbnail && p.thumbnail.source,
          goto: { name: 'BrowseArticle', params: { article: p.title } }
        }
      }))
    }
  },
  getters: {
    searchResults: (state) => state.results,
  }
}
