import Cookies from 'js-cookie'

const TokenKey = 'loginToken'

export function setToken(token) {
  localStorage.setItem('token', token)
}

export function getToken() {
  return localStorage.getItem('token')
}
