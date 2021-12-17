import { parallelRequests, abortAllRequest } from '@utils/api';
import { lang } from '@utils/lang'
import { strip } from '@utils/strip'
import { convertUrlToMobile } from '@utils/mobile'

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
    setResults: (state, results) => state.results = [...state.results, ...results],
    clearResults: (state) => state.results = [],
  },
  actions: {
    search: ({ commit }, query) => {
      const queryString = query.trim();
      const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&uselang=${lang}&generator=search&gsrsearch=filetype%3Abitmap%7Cdrawing%20${queryString}&gsrlimit=40&gsroffset=0&gsrinfo=totalhits%7Csuggestion&gsrprop=snippet&prop=imageinfo&gsrnamespace=6&iiprop=url%7Cextmetadata&iiurlheight=180&iiextmetadatafilter=License%7CLicenseShortName%7CImageDescription%7CArtist&iiextmetadatalanguage=${lang}`
      const wikipediaUrl = `https://${lang}.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent( queryString )}`

      commit('setQuery', query)
      
      if ( !queryString ) {
        abortAllRequest();
        commit('setSelection', []);
        commit('setLoading', false);
        commit('clearResults');
        return;
      }

      commit('setLoading', true);
      commit('clearResults');

      const commonsCallback = (data) => {
        if ( data.query && data.query.pages ) {
          const pages = Object.values( data.query.pages ).sort( ( a, b ) => a.index - b.index );

          const commonsResults = pages.map((p, i) => {
            const imageinfo = p.imageinfo[0]
            const responsiveUrls = imageinfo.responsiveUrls && Object.values( imageinfo.responsiveUrls )[0]
            const extmetadata = imageinfo.extmetadata
            const description = extmetadata && extmetadata.ImageDescription && extmetadata.ImageDescription.value
            const { Artist, LicenseShortName } = imageinfo.extmetadata
            
            return {
              id: i.toString(),
              title: p.title,
              desc: description || p.snippet,
              thumb: responsiveUrls || imageinfo.url,
              width: imageinfo.thumbwidth,
              attribution: {
                author: Artist ? strip(Artist.value) : '',
                url: convertUrlToMobile(imageinfo.descriptionshorturl),
                license: LicenseShortName && LicenseShortName.value
              },
              fromCommons: true
            }
          })
          
          commit('setResults', commonsResults)
        }
        commit('setSelection', []);
        commit('setLoading', false);
      }

      const wikipediaCallback = (data) => {
        const wikipediaResults = data.items.reduce((mediaArray, item, i)=>{
          if ( item.showInGallery && item.type === 'image' ) {
            const withBuffer = i + 100
            return mediaArray.concat({
              id: withBuffer.toString(),
              title: item.title,
              thumb: item.srcset[0].src,
              fromCommons: false
            })
          }
          return mediaArray
        },[])
        
        commit('setResults', wikipediaResults)
      }

      parallelRequests([url, wikipediaUrl], [commonsCallback, wikipediaCallback])      
    },
    clear: ({commit}) => {
      abortAllRequest();
      commit('setSelection', []);
      commit('setLoading', false);
      commit('clearResults');
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
