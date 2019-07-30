import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './demo/containers/App'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import './lib/style/Cards.css'
import './lib/style/Portal.css'
import './lib/style/Input.css'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
