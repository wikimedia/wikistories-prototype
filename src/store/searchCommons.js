import { request, abortAllRequest } from '@utils/api';

export default {
  state: {
    commonsResults: [],
    commonsQuery: ''
  },
  mutations: {
    setCommonsQuery: (state, query) => state.commonsQuery = query,
    setCommonsSearchResults: (state, results) => state.commonsResults = results,
  },
  actions: {
    searchCommons: ({ commit }, query) => {
      const queryString = query.trim();
      const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&&uselang=en&generator=search&gsrsearch=filetype%3Abitmap%7Cdrawing%20${queryString}&gsrlimit=20&gsroffset=0&gsrinfo=totalhits%7Csuggestion&gsrprop=size%7Cwordcount%7Ctimestamp%7Csnippet&prop=info%7Cimageinfo%7Centityterms&inprop=url&gsrnamespace=6&iiprop=url%7Csize%7Cmime&iiurlheight=180&wbetterms=label`

      commit('setCommonsQuery', query)
      
      if ( !queryString ) {
        abortAllRequest();
        commit('setCommonsSearchResults', []);
        return;
      }

      request( url, data => {
        if ( data.query && data.query.pages ) {
          commit('setCommonsSearchResults', Object.values(data.query.pages).map(p => {
            return {
              title: p.title,
              desc: p.snippet,
              thumb: p.imageinfo && ( Object.values( p.imageinfo[0].responsiveUrls )[0] || p.imageinfo[0].url ),
              width: p.imageinfo[0].thumbwidth
              // goto: { name: 'BrowseArticle', params: { article: p.title } }
            }
          }))
        }
      })
      
    },
    clearCommons: ({commit}) => {
      abortAllRequest();
      commit('setCommonsSearchResults', []);
      commit('setCommonsQuery', '');
    }
  },
  getters: {
    searchCommonsResults: (state) => state.commonsResults,
    commonsQuery: (state) => state.commonsQuery
  }
}
