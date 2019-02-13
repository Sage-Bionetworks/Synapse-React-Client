import * as React from 'react'
import { Link, Route, match } from 'react-router-dom'
import QueryWrapperMenuDemo from './QueryWrapperMenuDemo'
import CardContainerLogicDemo from './CardContainerLogicDemo'
import SearchDemo from './SearchDemo'

/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module
 */
const App = ({ match }: { match: match }) => {
  return (
      <div>
        <h2>Links to components under development </h2>
        <ul>
          <li>
            <Link to={`${match.url}/QueryWrapperMenuDemo`}>QueryWrapperMenuDemo</Link>
          </li>
          <li>
            <Link to={`${match.url}/SearchDemo`}>SearchDemo</Link>
          </li>
          <li>
            <Link to={`${match.url}/SynapseTableCardViewDemo`}>CardContainerLogicDemo</Link>
          </li>
        </ul>

        <Route
          exact={true}
          path={`${match.url}/QueryWrapperMenuDemo`}
          // tslint:disable-next-line:jsx-no-lambda
          render={() => <QueryWrapperMenuDemo rgbIndex={0}/>}
        />

        <Route
          exact={true}
          path={`${match.url}/SearchDemo`}
          // tslint:disable-next-line:jsx-no-lambda
          render={() => <SearchDemo />}
        />

        <Route
          exact={true}
          path={`${match.url}/SynapseTableCardViewDemo`}
          // tslint:disable-next-line:jsx-no-lambda
          component={CardContainerLogicDemo}
        />

        <Route
          exact={true}
          path={match.path}
          // tslint:disable-next-line:jsx-no-lambda
          component={() => <div/>}
        />

      </div>
  )
}

export default App
