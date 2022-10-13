// Babel configuration currently only used by Jest.
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-typescript', { allowDeclareFields: true }],
    '@babel/preset-react',
  ],
}
