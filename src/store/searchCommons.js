import { request, abortAllRequest } from '@utils/api';
import { lang } from '@utils/lang'

// @todo can we merge this store into search.js? it does things similarly
export default {
  namespaced: true,
  state: {
    selection: [],
    loading: false,
    results: [],
    query: ''
  },
  mutations: {
    setSelection: (state, selection) => state.selection = selection,
    setLoading: (state, loading) => state.loading = loading,
    setQuery: (state, query) => state.query = query,
    setResults: (state, results) => state.results = results,
  },
  actions: {
    search: ({ commit }, query) => {
      const queryString = query.trim();
      const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&uselang=${lang}&generator=search&gsrsearch=filetype%3Abitmap%7Cdrawing%20${queryString}&gsrlimit=40&gsroffset=0&gsrinfo=totalhits%7Csuggestion&gsrprop=snippet&prop=imageinfo&gsrnamespace=6&iiprop=url%7Cextmetadata&iiurlheight=180&iiextmetadatafilter=License%7CLicenseShortName%7CImageDescription%7CArtist&iiextmetadatalanguage=${lang}`

      commit('setQuery', query)
      
      if ( !queryString ) {
        abortAllRequest();
        commit('setSelection', []);
        commit('setLoading', false);
        commit('setResults', []);
        return;
      }

      commit('setLoading', true);
      request( url, data => {
        if ( data.query && data.query.pages ) {
          const pages = Object.values( data.query.pages ).sort( ( a, b ) => a.index - b.index );
          commit('setResults', pages.map(p => {
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
        commit('setLoading', false);
      })
      
    },
    clear: ({commit}) => {
      abortAllRequest();
      commit('setSelection', []);
      commit('setLoading', false);
      commit('setResults', []);
      commit('setQuery', '');
    },
    select: ( {commit}, data ) => {
        commit( 'setSelection', data );
    }
  },
  getters: {
    selection: (state) => state.selection,
    loading: (state) => state.loading,
    results: (state) => state.results,
    query: (state) => state.query
  }
}
