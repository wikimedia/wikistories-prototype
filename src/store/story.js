const MAX_FRAMES = 5

const makeFrameStyle = f => {
  return f.img ?
    {
      backgroundImage: 'url(' + f.img + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    } :
    { background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)' }
}

export default {
  state: {
    currentFrameId: 1,
    frames: [
      {
        id: 1,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bandhavgarh_Tigers.jpg/640px-Bandhavgarh_Tigers.jpg',
        text: 'Bandhavgarh Tigers'
      },
      {
        id: 2,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/White_Tiger_in_Touroparc.jpg/640px-White_Tiger_in_Touroparc.jpg',
        text: 'White Tiger in Touroparc'
      },
      {
        id: 3,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/TigerVector.png/640px-TigerVector.png',
        text: 'Taken from the Coat of arms of Vladivostok and modified.'
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
    setText: (state, text) => {
      const f = state.frames.find(f => f.id === state.currentFrameId)
      f.text = text
    },
    setImg: (state, img) => {
      const f = state.frames.find(f => f.id === state.currentFrameId)
      f.img = img
    }
  },
  actions: {
    selectFrame: ({commit}, id) => {
      commit('selectFrame', id)
    },
    addFrame: ({commit}) => {
      commit('addFrame')
    },
    setText: ({commit}, text) => {
      commit('setText', text)
    },
    setImg: ({commit}, img) => {
      commit('setImg', img)
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
        noImage: f.img === ''
      }
    }
  }
}
