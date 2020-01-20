// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Implementing_basic_set_operations
export const difference = (setA: Set<string>, setB: Set<string>) => {
  const _difference = new Set(setA)
  for (const elem of Array.from(setB)) {
    _difference.delete(elem)
  }
  return _difference
}
