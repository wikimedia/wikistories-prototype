import { wikiSubdomain } from '@utils/wiki'

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
    for (const f of doc.querySelectorAll('figure')) {
      let s = f.querySelector('span[data-src]')
      if (s) {
        let img = doc.createElement('img')
        img.src = s.getAttribute('data-src')
        img.classList.add('pcs-widen-image-override')
        img.classList.add('pcs-lazy-load-image-loaded')
        f.replaceChildren(img)
      } else {
        f.remove()
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
    }
  },
  actions: {
    fetchArticle: async ({commit}, title) => {
      const url = `https://${wikiSubdomain}.wikipedia.org/api/rest_v1/page/mobile-html/${title}`
      const article = await (await fetch(url)).text()
      const doc = new DOMParser().parseFromString(article, 'text/html')
      Object.values(transforms).forEach(t => t(doc))
      commit('setArticle', { title, html: doc.body.outerHTML })
    }
  },
  getters: {
    currentArticle: ({ article }) => article.html
  }
}
