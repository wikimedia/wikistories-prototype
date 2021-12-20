import { wikiSubdomain } from '@utils/wiki'
import { strip } from '@utils/strip'
import { convertUrlToMobile } from '@utils/mobile'

const MAX_FRAMES = 5

const makeFrameStyle = f => {
  return f.img ?
    {
      backgroundImage: 'url(' + f.img + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    } :
    { background: 'linear-gradient(338.27deg, #0BD564 -70.53%, #3366CC 71.84%)' }
}

export default {
  state: {
    storyTitle: null,
    creationDate: null,
    currentFrameId: 1,
    frames: [
      {
        id: 1,
        img: null,
        text: '',
        imgTitle: '',
        attribution: null
      }
    ]
  },
  mutations: {
    selectFrame: (state, id) => state.currentFrameId = id,
    addFrame: (state) => {
      if (state.frames.length === MAX_FRAMES) {
        return
      }
      const newId = state.frames.length + 1
      state.frames.push({text:'', img: '', imgTitle: '', id: newId, attribution: null})
      state.currentFrameId = newId
    },
    resetFrame: (state, array) => {
      state.currentFrameId = array.length
      state.frames = array
    },
    setText: (state, text) => {
      const f = state.frames.find(f => f.id === state.currentFrameId)
      f.text = text
    },
    setImg: (state, img) => {
      const f = state.frames.find(f => f.id === state.currentFrameId)
      f.img = img
    },
    setImgTitle: (state, title) => {
      const f = state.frames.find(f => f.id === state.currentFrameId)
      f.imgTitle = title
    },
    setImgAttribution: (state, attribution) => {
      const f = state.frames.find(f => f.id === attribution.id)
      f.attribution = attribution
    },
    setCreationDate: (state, date) => {
      state.creationDate = date;
    },
    updateStoryTitle: (state, title) => {
      state.storyTitle = title;
    }
  },
  actions: {
    selectFrame: ({commit}, id) => {
      commit('selectFrame', id)
    },
    addFrame: ({commit}) => {
      commit('addFrame')
    },
    resetFrame: ({commit}, array) => {
      commit( 'resetFrame', array )
    },
    setText: ({commit}, text) => {
      commit('setText', text)
    },
    setImg: ({commit}, img) => {
      commit('setImg', img)
    },
    setImgTitle: ({commit}, title) => {
      commit('setImgTitle', title)
    },
    updateStoryTitle: ({commit}, title) => {
      commit('updateStoryTitle', title )
    },
    fetchImgAttribution: async ({commit}, image) => {
      const url = `https://${wikiSubdomain}.wikipedia.org/w/api.php?format=json&formatversion=2&origin=*&action=query&prop=imageinfo&iiextmetadatafilter=License%7CLicenseShortName%7CImageDescription%7CArtist&iiextmetadatalanguage=en&iiextmetadatamultilang=1&iiprop=url%7Cextmetadata&titles=${encodeURIComponent(image.title)}`
      const rawAttribution = await (await fetch(url)).text()
      const parsedAttribution = JSON.parse(rawAttribution)
      const imageInfo = parsedAttribution.query.pages[ 0 ].imageinfo[0]
      if (imageInfo) {
        const { Artist, LicenseShortName } = imageInfo.extmetadata
        const attribution = {
          author: Artist ? strip(Artist.value) : '',
          url: convertUrlToMobile(imageInfo.descriptionshorturl),
          license: LicenseShortName && LicenseShortName.value,
          id: image.id
        }
        commit('setImgAttribution', attribution)
      }
    },
    setCreationDate: ({commit}) => {
      commit('setCreationDate', (new Date()).getTime())
    }
  },
  getters: {
    thumbnails: (state) => {
      return state.frames.map(f => {
        const newFrame = {...f}
        if (f.id === state.currentFrameId) {
          newFrame.selected = true
        }
        newFrame.style = makeFrameStyle(f)
        return newFrame
      })
    },
    currentFrame: (state) => {
      const isCoverFrame = state.currentFrameId === 0;
      const f = isCoverFrame ? state.frames[0] : state.frames.find(f => f.id === state.currentFrameId)
      return {
        text: isCoverFrame ? state.storyTitle : f.text,
        style: makeFrameStyle(f),
        noImage: f.img === '',
        id: state.currentFrameId,
        imgAttribution: f.attribution,
        imgTitle: isCoverFrame ? state.storyTitle : f.imgTitle
      }
    },
    storyLength: state => state.frames.length,
    storyViewerLength: state => state.frames.length + 1,
    storyInfo: (state) => {
      return {
        title: state.storyTitle,
        creationDate: state.creationDate
      }
    },
    valid: (state) => {
      return state.frames.length >= 2 && state.frames.every( f => f.img )
    },
    attributionData: (state) => {
      return state.frames.map(f => {
        return {
          id: f.id,
          title: f.imgTitle,
          attribution: f.attribution
        }
      })
    }
  }
}
