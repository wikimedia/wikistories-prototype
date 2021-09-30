import { request, abortAllRequest } from '@utils/api';

// @todo can we merge this store into search.js? it does things similarly
export default {
  state: {
    commonsLoading: false,
    commonsResults: [],
    commonsQuery: ''
  },
  mutations: {
    setCommonsLoading: (state, loading) => state.commonsLoading = loading,
    setCommonsQuery: (state, query) => state.commonsQuery = query,
    setCommonsSearchResults: (state, results) => state.commonsResults = results,
  },
  actions: {
    searchCommons: ({ commit }, query) => {
      const queryString = query.trim();
      const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&&uselang=en&generator=search&gsrsearch=filetype%3Abitmap%7Cdrawing%20${queryString}&gsrlimit=40&gsroffset=0&gsrinfo=totalhits%7Csuggestion&gsrprop=size%7Cwordcount%7Ctimestamp%7Csnippet&prop=info%7Cimageinfo%7Centityterms&inprop=url&gsrnamespace=6&iiprop=url%7Csize%7Cmime&iiurlheight=180&wbetterms=label`

      commit('setCommonsQuery', query)
      
      if ( !queryString ) {
        abortAllRequest();
        commit('setCommonsLoading', false);
        commit('setCommonsSearchResults', []);
        return;
      }

      commit('setCommonsLoading', true);
      request( url, data => {
        if ( data.query && data.query.pages ) {
          const pages = Object.values( data.query.pages ).sort( ( a, b ) => a.index - b.index );
          commit('setCommonsSearchResults', pages.map(p => {
            const imageinfo = p.imageinfo[0]
            const responsiveUrls = imageinfo.responsiveUrls && Object.values( imageinfo.responsiveUrls )[0]
            return {
              title: p.title,
              desc: p.snippet,
              thumb: responsiveUrls || imageinfo.url,
              width: imageinfo.thumbwidth
            }
          }))
        }
        commit('setCommonsLoading', false);
      })
      
    },
    clearCommons: ({commit}) => {
      abortAllRequest();
      commit('setCommonsLoading', false);
      commit('setCommonsSearchResults', []);
      commit('setCommonsQuery', '');
    }
  },
  getters: {
    commonsLoading: (state) => state.commonsLoading,
    commonsResults: (state) => state.commonsResults,
    commonsQuery: (state) => state.commonsQuery
  }
}
