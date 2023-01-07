import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { user } from "utils/constans";

const loggedRoutes = [
  "dashboard",
  "flash-cards",
  "quotes",
  "stories",
  "texts"
];

const notLoggegdRoutes = [
  "login",
  "register"
];

const useGuardRoutes = () => {
  const router = useNavigate()

  useEffect(() => {
    loggedRoutes.forEach(route => {
      if (window.location.href.includes(route) && !user) {
        router('/auth/login')
      }
    })

    notLoggegdRoutes.forEach(route => {
      if (window.location.href.includes(route) && user) {
        router('/dashboard')
      }
    })
  }, [router])
}

export default useGuardRoutes