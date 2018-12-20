import * as React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Demo from './Demo'
import Playground from './Playground'

/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
const App: React.SFC<{}> = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path="/" component={Demo}/>
        {/* tslint:disable-next-line */}
        <Route exact={true} path="/Playground" render={(_) => <Playground rgbIndex={0} />}/>
      </Switch>
    </HashRouter>
  )
}

export default App
