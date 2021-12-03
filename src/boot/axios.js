import axios from 'axios'

export const http = axios.create({ baseURL: 'https://segware-book-api.segware.io/api' })

export default {

  cadastrar(usuario) {
    return http.post('/sign-up', usuario)
  },

  entrar(usuario) {
    return http.post('/sign-in', usuario)
  },

  feed() {
    return http.get('/feeds', { headers: { "Authorization" : "Bearer " + sessionStorage.getItem('token') } })
  },

  like(react) {
    return http.post('/reaction', react, { headers: { "Authorization" : "Bearer " + sessionStorage.getItem('token') } })
  },

  love(react) {
    return http.post('/reaction', react, { headers: { "Authorization" : "Bearer " + sessionStorage.getItem('token') } })
  },

  publicar(conteudo) {
    return http.post('/feed', conteudo, { headers: { "Authorization" : "Bearer " + sessionStorage.getItem('token') } })
  },
  
}