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
    storyTitle: '', // @todo to be edited by user
    creationDate: null,
    currentFrameId: 1,
    frames: [
      {
        id: 1,
        img: null,
        text: ''
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
      state.frames.push({text:'', img: '', id: newId})
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
    setCreationDate: (state, date) => {
      state.creationDate = date;
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
      const f = state.frames.find(f => f.id === state.currentFrameId)
      return {
        text: f.text,
        style: makeFrameStyle(f),
        noImage: f.img === '',
        id: state.currentFrameId
      }
    },
    storyLength: state => state.frames.length,
    storyInfo: (state) => {
      return {
        title: state.frames[0].text, // @todo to be edited by user
        creationDate: state.creationDate
      }
    }
  }
}
