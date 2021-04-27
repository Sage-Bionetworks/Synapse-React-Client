// TODO: Figure out a way to get the actual types for plotly if need be
// https://stackoverflow.com/questions/39084438/how-to-import-plotly-js-into-typescript
declare module 'plotly.js-basic-dist-min'
declare module 'sql-parser'
declare module 'sql-parser' {
  var lexer: {
    tokenize: (input: string) => string[][]
  }
  var parser: {
    parse: (input: string[][]) => string
  }
}
declare module 'react-native-rss-parser'
declare module '*.svg'
declare module 'column-resizer'
