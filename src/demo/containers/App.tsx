import * as React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import logoSvg from '../../images/logo.svg'
import Demo from './Demo'
import Playground from './playground/Playground'
import FileGrid from '../../lib/containers/drug_upload_tool/UserFileGrid'


/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
const App: React.SFC<{}> = () => {
  return (
    <Router
      basename={process.env.PUBLIC_URL}
    >
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
            <li>
              <Link to="/drugUploadTool">DrugUploadTool</Link>
            </li>
        </ul>

        <Route exact={true} path="/" component={Demo}/>
        <Route path="/Playground" component={Playground}/>
        <Route  exact={true}  path="/drugUploadTool" 
             render={(props) => <FileGrid pathpart="drugUploadTool" parentContainerId="syn20673186"
         />} />
      </div>
    </Router>
  )
}

export default App
