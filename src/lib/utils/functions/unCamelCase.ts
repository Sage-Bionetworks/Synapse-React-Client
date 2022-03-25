// SWC-5982: check once, which means this value should be set before loading the react component
const forceDisplayOriginalColumnName =
  localStorage.getItem('force-display-original-column-names') === 'true'

export const unCamelCase = (
  str: string | undefined,
  facetAliases?: Record<string, string>,
): string | undefined => {
  // https://stackoverflow.com/questions/4149276/how-to-convert-camelcase-to-camel-case
  // SWC-5982: if force-display-original-column-names is set, then just return the string
  if (!str || forceDisplayOriginalColumnName) {
    return str
  }
  if (facetAliases?.[str]) {
    return facetAliases[str]
  }
  return (
    str
      // insert a space between lower & upper
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
      // uppercase the first character
      .replace(/^./, (str: string) => {
        return str.toUpperCase()
      })
  )
}
