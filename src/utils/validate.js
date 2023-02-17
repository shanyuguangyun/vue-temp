export function isvalidUsername(str) {
  if(str === undefined) {
    return false
  }
  return str.trim().length >= 3
}

export function isAbsolutePath(path) {
  return /^(https?|tel|mailto)/.test(path)
}
