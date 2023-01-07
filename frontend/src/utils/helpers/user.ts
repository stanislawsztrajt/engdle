import Cookies from "js-cookie"

export const logout = () => {
  Cookies.remove('user')
  Cookies.remove('jwt')
  Cookies.remove('dateOfLastVisit')
}