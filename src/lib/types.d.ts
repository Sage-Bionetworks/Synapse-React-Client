declare module 'sql-parser'
declare module 'sql-parser' {
  const lexer: {
    tokenize: (input: string) => string[][]
  }
  const parser: {
    parse: (input: string[][]) => string
  }
}
declare module 'react-native-rss-parser'
declare module '*.svg'
declare module 'column-resizer'
