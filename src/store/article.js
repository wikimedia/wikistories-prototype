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
    currentArticle: ({ article }) => article.html
  }
}
