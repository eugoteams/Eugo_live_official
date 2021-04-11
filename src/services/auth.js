import { navigate } from "gatsby"

export const isBrowser = () => typeof window !== "undefined"

export const getUserLogin = () =>
  window.localStorage.getItem("gatsbyUserSattus")

const setUserLogin = status =>
  window.localStorage.setItem("gatsbyUserSattus", status)

export const handleLogin = username => {
  setUserLogin(username)
  if (username === "false") {
    navigate("/")
  }
}

export const isLoggedIn = () => {
  //if (!isBrowser) return false
  return window.localStorage.getItem("gatsbyUserSattus")
}
