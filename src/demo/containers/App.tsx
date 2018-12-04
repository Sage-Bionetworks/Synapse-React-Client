import * as React from "react";
import {HashRouter, Switch, Route} from 'react-router-dom';
import Demo from './Demo';
import Playground from './Playground';


/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
const App : React.SFC<{}> = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Demo}/>
        <Route exact path="/Playground" render={(props) => <Playground rgbIndex={0} />}/>
      </Switch>
    </HashRouter>
  )
}

export default App