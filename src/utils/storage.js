export const getItem = (name) => {
  return JSON.parse(window.localStorage.getItem(name))
}

export const setItem = (name, value) => {
  window.localStorage.setItem(name, JSON.stringify(value))
}

export const clearItem = name => {
  window.localStorage.removeItem(name)
}
