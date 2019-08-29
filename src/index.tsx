import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './demo/containers/App'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import './lib/style/Index.scss'
import './demo/style/DemoStyle.scss'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
