  const sufixes: string[] = [
    'Bytes',
    'KB',
    'MB',
    'GB',
    'TB',
    'PB',
    'EB',
    'ZB',
    'YB',
  ]


export const unCamelCase = (str: string | undefined): string | undefined => {
    // https://stackoverflow.com/questions/4149276/how-to-convert-camelcase-to-camel-case
    if (!str) {
      return str
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
  
  export function calculateFriendlyFileSize(bytes: number) {
    if (!bytes) {
      return ''
    }
    // https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    // tslint:disable-next-line
    return (
      (!bytes && '0 Bytes') ||
      (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sufixes[i]
    )
  }