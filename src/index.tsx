import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './demo/containers/App'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import './lib/style/Cards.scss'
import './lib/style/SWC.scss'
import './lib/style/Core.scss'
import './demo/style/DemoOverrides.scss'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
