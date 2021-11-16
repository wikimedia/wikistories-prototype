import { wikiSubdomain } from '@utils/wiki'
import { request } from '@utils/api'

const transforms = {
  'put styles in body': doc => {
    for (const style of doc.head.querySelectorAll('link[rel="stylesheet"]')) {
      doc.body.prepend(style)
    }
  },
  'remove stuff': doc => {
    const stuffToRemove = ['table', '.pcs-collapse-table-container', 'script']
    for (const n of doc.querySelectorAll(stuffToRemove.join(','))) {
      n.remove()
    }
  },
  'unhide sections': doc => {
    for (const s of doc.querySelectorAll('section')) {
      s.style.display = 'block'
    }
  },
  'remove links': doc => {
    let span
    for (const a of doc.querySelectorAll('a')) {
      span = doc.createElement('span')
      span.innerHTML = a.innerHTML
      a.replaceWith(span)
    }
  },
  'load images': doc => {
    for (const s of doc.querySelectorAll('span[data-src]')) {
      // let s = f.querySelector('span[data-src]')
      if (s) {
        let img = doc.createElement('img')
        img.src = s.getAttribute('data-src')
        img.classList.add('pcs-widen-image-override')
        img.classList.add('pcs-lazy-load-image-loaded')
        s.replaceChildren(img)
      } else {
        s.remove()
      }
    }
  }
}

export default {
  state: {
    article: {
      title: '',
      html: ''
    }
  },
  mutations: {
    setArticle: ({ article }, { title, html }) => {
      article.title = title
      article.html = html
    },
    setArticleMedia: ({ article }, { media }) => {
      article.media = media
    }
  },
  actions: {
    fetchArticle: async ({commit}, title) => {
      const url = `https://${wikiSubdomain}.wikipedia.org/api/rest_v1/page/mobile-html/${title}`
      const article = await (await fetch(url)).text()
      const doc = new DOMParser().parseFromString(article, 'text/html')
      Object.values(transforms).forEach(t => t(doc))
      commit('setArticle', { title, html: doc.body.outerHTML })
    },
    fetchArticleMedia: ({commit}, title) => {
      const url = `https://${wikiSubdomain}.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent( title )}`
      request(url, mediaData => {
        const pageMedia = mediaData.items.reduce((mediaArray, item)=>{
          if ( item.showInGallery && item.type === 'image' ) {
            return mediaArray.concat(item)  
          }
          return mediaArray
        },[])
        
        
        if (pageMedia) {
          commit('setArticleMedia', { media: pageMedia })
        }
      })
    }
  },
  getters: {
    currentArticle: ({ article }) => article
  }
}
