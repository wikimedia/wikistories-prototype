import { request, abortAllRequest } from '@utils/api';

// @todo can we merge this store into search.js? it does things similarly
export default {
  state: {
    selection: [],
    commonsLoading: false,
    commonsResults: [],
    commonsQuery: ''
  },
  mutations: {
    setSelection: (state, selection) => state.selection = selection,
    setCommonsLoading: (state, loading) => state.commonsLoading = loading,
    setCommonsQuery: (state, query) => state.commonsQuery = query,
    setCommonsSearchResults: (state, results) => state.commonsResults = results,
  },
  actions: {
    searchCommons: ({ commit }, query) => {
      const queryString = query.trim();
      const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&uselang=en&generator=search&gsrsearch=filetype%3Abitmap%7Cdrawing%20${queryString}&gsrlimit=40&gsroffset=0&gsrinfo=totalhits%7Csuggestion&gsrprop=snippet&prop=imageinfo&gsrnamespace=6&iiprop=url%7Cextmetadata&iiurlheight=180&iiextmetadatafilter=License%7CLicenseShortName%7CImageDescription%7CArtist`

      commit('setCommonsQuery', query)
      
      if ( !queryString ) {
        abortAllRequest();
        commit('setSelection', []);
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
            const extmetadata = imageinfo.extmetadata
            const description = extmetadata && extmetadata.ImageDescription && extmetadata.ImageDescription.value
            return {
              id: p.pageid.toString(),
              title: p.title,
              desc: description || p.snippet,
              thumb: responsiveUrls || imageinfo.url,
              width: imageinfo.thumbwidth
            }
          }))
        }
        commit('setSelection', []);
        commit('setCommonsLoading', false);
      })
      
    },
    clearCommons: ({commit}) => {
      abortAllRequest();
      commit('setSelection', []);
      commit('setCommonsLoading', false);
      commit('setCommonsSearchResults', []);
      commit('setCommonsQuery', '');
    },
    selectCommons: ( {commit}, data ) => {
        commit( 'setSelection', data );
    }
  },
  getters: {
    selection: (state) => state.selection,
    commonsLoading: (state) => state.commonsLoading,
    commonsResults: (state) => state.commonsResults,
    commonsQuery: (state) => state.commonsQuery
  }
}
