import * as React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import logoSvg from '../../images/logo.svg'
import Demo from './Demo'
import Playground from './playground/Playground'

/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
const App: React.SFC<{}> = () => {
  return (
    <Router>
      <div>
      <div className="App-header text-center">
          <img src={logoSvg} className="App-logo" alt="logo" />
          <h4 className="white-text">Synapse React Client Demo</h4>
        </div>
        <ul>
            <li>
              <Link to="/">Demo</Link>
            </li>
            <li>
              <Link to="/Playground">Playground</Link>
            </li>
        </ul>

        <Route exact={true} path="/" component={Demo}/>
        <Route path="/Playground" component={Playground}/>
      </div>
    </Router>
  )
}

export default App
