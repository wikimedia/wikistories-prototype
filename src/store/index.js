import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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

export default new Vuex.Store({
  state: {
    story: {
      currentFrameId: 1,
      frames: [
        {
          id: 1,
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bandhavgarh_Tigers.jpg/320px-Bandhavgarh_Tigers.jpg',
          text: 'Bandhavgarh Tigers'
        },
        {
          id: 2,
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/White_Tiger_in_Touroparc.jpg/320px-White_Tiger_in_Touroparc.jpg',
          text: 'White Tiger in Touroparc'
        },
        {
          id: 3,
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/TigerVector.png/320px-TigerVector.png',
          text: 'Taken from the Coat of arms of Vladivostok and modified.'
        }
      ]
    },
    search: {
      results: []
    },
    article: {
      title: '',
      html: ''
    }
  },
  mutations: {
    selectFrame: ({ story }, id) => story.currentFrameId = id,
    addFrame: ({ story }) => {
      if (story.frames.length === MAX_FRAMES) {
        return
      }
      const newId = story.frames.length + 1
      story.frames.push({text:'', img: '', id: newId})
      story.currentFrameId = newId
    },
    setSearchResults: ({ search }, results) => search.results = results,
    setArticle: ({ article }, { title, html }) => {
      article.title = title
      article.html = html
    }
  },
  actions: {
    selectFrame: ({commit}, id) => {
      commit('selectFrame', id)
    },
    addFrame: ({commit}) => {
      commit('addFrame')
    },
    search: async ({commit}, query) => {
      const url = "https://en.wikipedia.org/w/api.php?action=query&generator=prefixsearch&prop=description|pageimages|pageprops&piprop=thumbnail&ppprop=displaytitle&redirects=false&pithumbsize=64&gpslimit=10&gpsnamespace=0&format=json&formatversion=2&origin=*&gpssearch=" + query
      const response = await (await fetch(url)).json()
      commit('setSearchResults', Object.values(response.query.pages).map(p => {
        return {
          title: p.title,
          desc: p.description,
          thumb: p.thumbnail && p.thumbnail.source
        }
      }))
    },
    fetchArticle: async ({commit}, title) => {
      const url = 'https://en.wikipedia.org/api/rest_v1/page/mobile-html/' + title
      const article = await (await fetch(url)).text()

      const doc = new DOMParser().parseFromString(article, 'text/html')
      for (const n of doc.querySelectorAll('table,script')) {
        n.remove()
      }
      for (const s of doc.querySelectorAll('section')) {
        s.style.display = 'block'
      }
      for (const p of doc.querySelectorAll('p')) {
        p.style.position = 'unset'
      }
      let span
      for (const a of doc.querySelectorAll('a')) {
        span = doc.createElement('span')
        span.innerHTML = a.innerHTML
        a.replaceWith(span)
      }
      commit('setArticle', { title, html: doc.body.outerHTML })
    }
  },
  getters: {
    thumbnails: ({ story }) => {
      return story.frames.map(f => {
        const newFrame = {...f}
        if (f.id === story.currentFrameId) {
          newFrame.selected = true
        }
        newFrame.style = makeFrameStyle(f)
        return newFrame
      })
    },
    currentFrame: ({ story }) => {
      const f = story.frames.find(f => f.id === story.currentFrameId)
      return {
        text: f.text,
        style: makeFrameStyle(f)
      }
    },
    searchResults: ({ search }) => search.results,
    currentArticle: ({ article }) => article.html
  }
})
