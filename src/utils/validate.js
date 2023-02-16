export function isvalidUsername(str) {
  if(str === undefined) {
    return false
  }
  return str.trim().length >= 3
}
