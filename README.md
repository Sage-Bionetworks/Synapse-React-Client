[![Build Status](https://travis-ci.org/Sage-Bionetworks/Synapse-React-Client.svg?branch=master)](https://travis-ci.org/Sage-Bionetworks/Synapse-React-Client)  [![npm version](https://badge.fury.io/js/synapse-react-client.svg)](https://badge.fury.io/js/synapse-react-client)

## Synapse React Client

This project helps you integrate your app with the Synapse API backend.

[Getting started](http://docs.synapse.org/articles/getting_started.html) with Synapse.

[Synapse.org](https://www.synapse.org/) is a client written for the Synapse platform.

## Installation with npm
Run the following command:<br>
`npm install synapse-react-client`

Or add to your dependencies in package.json:<br>
`"synapse-react-client": "latest"`

If using Typescript then you'll need to create a file called "synapse-react-client.d.ts" file with the following content: <br>
``` jsx
 declare module "synapse-react-client"
 ```

## Installation without npm or yarn
To see an example index.html page with all the necessary imports view [here](https://github.com/leem42/Synapse-React-Client/blob/ts/develop/src/demo/SingleFileBuild/index.html)


You can use a cdn containing the javascript and css required for the client here (the client is exposed as SRC to the browser)-
``` html
<script crossorigin src="https://unpkg.com/synapse-react-client@1.10.10/umd/synapse-react-client.production.min.js"/>
<link rel="stylesheet" src="https://unpkg.com/synapse-react-client@1.10.10/umd/synapse-react-client.production.styles.css"/>
```
Note there are a number of CDNs required to finish this functionality-

**react**
``` html
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/prop-types@15.6/prop-types.min.js"></script>
```

**katex**
``` html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css" integrity="sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y" crossorigin="anonymous"/>
  
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.js" integrity="sha384-K3vbOmF2BtaVai+Qk37uypf7VrgBubhQreNQe9aGsz9lB63dIFiQVlJbr92dw2Lx" crossorigin="anonymous"></script>
```

**react-plotly**
``` html
  <script crossorigin src="https://cdn.plot.ly/plotly-1.31.2.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-plotly.js@1.1.1/dist/create-plotly-component.js"></script>
```
**react-measure**
``` html
  <script src="https://unpkg.com/react-measure@2.2.2/dist/index.umd.js"></script>
```

**react-tooltip**
```html
  <script crossorigin src="https://unpkg.com/react-tooltip@3.9.2/standalone/react-tooltip.min.js"> </script>
```

**markdown**
``` html
  <script src="https://cdn.jsdelivr.net/npm/markdown-it@8.4.2/dist/markdown-it.min.js"></script>
  <script src="https://unpkg.com/markdown-it-synapse@1.1.1/dist/markdown-it-synapse.min.js"></script>
  <script src="https://unpkg.com/markdown-it-center-text@1.0.4/dist/markdown-it-center-text.min.js"></script>
  <script src="https://unpkg.com/markdown-it-synapse-heading@1.0.1/dist/markdown-it-synapse-heading.min.js"></script>
  <script src="https://unpkg.com/markdown-it-synapse-table@1.0.6/dist/markdown-it-synapse-table.min.js"></script>
  <script src="https://unpkg.com/markdown-it-strikethrough-alt@1.0.0/dist/markdown-it-strikethrough-alt.min.js"></script>
  <script src="https://unpkg.com/markdown-it-emphasis-alt@1.0.8/dist/markdown-it-emphasis-alt.min.js"></script>
  <script src="https://unpkg.com/markdown-it-synapse-math@3.0.4/dist/markdown-it-math.min.js"></script>
  <script src="https://unpkg.com/markdown-it-sup-alt@1.0.2/dist/markdown-it-sup.min.js"></script>
  <script src="https://unpkg.com/markdown-it-sub-alt@1.0.0/dist/markdown-it-sub.min.js"></script>
  <script src="https://unpkg.com/markdown-it-inline-comments@1.0.1/dist/markdown-it-inline-comments.min.js"></script>
  <script src="https://unpkg.com/markdown-it-br@1.0.0/dist/markdown-it-br.min.js"></script>
```
## Examples

#### Login
``` js
import {SynapseClient} from 'synapse-react-client';

SynapseClient.login('username', 'password')
    .then(response => {
      // session token available in response.sessionToken
    })
```

#### Query a Synapse Table/View
``` js
import {SynapseClient, SynapseConstants} from 'synapse-react-client';

let request = {
      entityId: "syn123",
      query: {
        sql: "SELECT * FROM syn123",
        includeEntityEtag: true,
        isConsistent: true,
        offset: 0,
        limit: 100
      },

      partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
        | SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
        | SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS
        | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
    };
SynapseClient.getQueryTableResults(request, sessionToken)
      .then(response => {
        // query results are available
      }).catch(function (error) {
        // handle Error (possibly an HTTPError)
      });
```
#### Markdown Rendering Example
View the demo app incorporation of markdown [here]((https://github.com/Sage-Bionetworks/Synapse-React-Client/blob/master/src/demo/containers/App.js)).

To use the synapse markdown-it component you must pass it a wiki page id and an owner id. You can configure its wrapping html by creating your own component to pass it into. In the example below there is a "CustomMarkdownView" component which does this. Additionally, you can configure an error message to display (demonstrated by the [CustomMarkdownErrorView](https://github.com/Sage-Bionetworks/Synapse-React-Client/blob/master/src/lib/containers/CustomMarkdownErrorView.js) being passed into the Markdown component).

*Note* the *Custom\** components serve as template of what a client might do.

```js
  Markdown props:
  ownerId:  String, ownerId for the synapse page

  wikiId:   String, wikiId for the synapse page

  markdown: String, markdown that is to be rendered

  updateLoadState: Function, take a function that tells the parent component isLoading: false once componentDidMount has finished

  hasSynapseResrouces: Boolean, indicates whether this widget needs to contact synapse to load resources for the component
```

Example 1: Rendering a Synapse Wiki page without any markdown pre-loaded

```jsx

  import {SynapseComponents} from 'synapse-react-client'
 

  <CustomMarkdownView>
    <SynapseComponents.Markdown token={this.state.token}
      ownerId={"syn14568473"}
      wikiId={"582406"}
      >
    </SynapseComponents.Markdown>
  </CustomMarkdownView>

```

Example 2: Rendering a Synapse Wiki page with the markdown already loaded

```jsx

  import {SynapseComponents} from 'synapse-react-client'
 

  <CustomMarkdownView>
    <SynapseComponents.Markdown token={this.state.token}
      ownerId={"syn14568473"}
      wikiId={"582406"}
      markdown={"<wiki markdown that corresponds to syn14568473/582406>"}
      >
    </SynapseComponents.Markdown>
  </CustomMarkdownView>

```

Example 3: Rendering a Synapse Wiki page with the markdown already loaded with a loading call back

```jsx

  import {SynapseComponents} from 'synapse-react-client'
  import React from 'react'

  export default class Demo extends React.Component {

    /**
     * Update internal state
     * @param {Object} updatedState new state to be updated by the component
     */
    constructor () {
      this.state = {
        isLoading: true
      }
    }

    handleChange(updatedState) {
      this.setState(
        updatedState
      );
    }

    render () {

      {this.state.isLoading ? "Component loading..." : ""}
      // updateLoadState will notify this that loading from
      // componentDidMount is over
      <CustomMarkdownView>
        <SynapseComponents.Markdown token={this.state.token}
            ownerId={"syn14568473"}
            wikiId={"582406"}
            markdown={"<wiki markdown that corresponds to syn14568473/582406>"}
            updateLoadState={this.handleChange}
            >
        </SynapseComponents.Markdown>
      </CustomMarkdownView>

    }
  }
```

Example 3: Rendering ONLY markdown (if you know that a  wiki page has no synapse resources)

```jsx

  import {SynapseComponents} from 'synapse-react-client'
 

  <CustomMarkdownView>
    <SynapseComponents.Markdown token={this.state.token}
      markdown={"# my first wiki page!"}
      hasSynapseResources={false}
    >
    </SynapseComponents.Markdown>
  </CustomMarkdownView>

```

To use the markdown component with only markdown, simply pass down a prop with the markdown to be processed and rendered.

```jsx

  import {SynapseComponents} from 'synapse-react-client'
 

  <CustomMarkdownView>
    <SynapseComponents.Markdown token={this.state.token}
      markdown={"# my own markdown! "}
      errorMessageView={<CustomMarkdownErrorView/>}>
    </SynapseComponents.Markdown>
  </CustomMarkdownView>

```

### QueryWrapper Example

An example of a view with facets/stacked bar chart/table

```jsx

  import {SynapseComponents} from 'synapse-react-client'
  <SynapseComponents.QueryWrapper
          initQueryRequest={{
            concreteType:
              "org.sagebionetworks.repo.model.table.QueryBundleRequest",
            partMask:
              SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
              | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
              | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
            query: {
                isConsistent: false,
                sql: `SELECT * FROM syn16858331`,
                limit: 25,
                offset: 0
            },
          }}
          rgbIndex={0}
          token={this.state.token}
          filter={"assay"}
          showMenu
          >
          <SynapseComponents.Facets/>
          <SynapseComponents.StackedBarChart
                loadingScreen={
                  <div> I'm loading as fast as I can </div>
                }
          />
          <SynapseComponents.SynapseTable
            synapseId={"syn15661198"}
            visibleColumnCount={8}
          />
  </SynapseComponents.QueryWrapper>
```

#### QueryWrapper Props
  
| Props  | Explanation |
| ------------- | ------------- |
| initQueryRequest  | This is the default query to be run on the first render of the component  |
| rgbIndex | Specifies the starting index of the following color wheel: turquoise, blueberry, rose, royal, butterscotch, powder, slate, apricot, fern, lavender, apple |
| filter | This is the facet that will be default filtered on if using any of StackedBarChart/Facets/Menu. |
| token  | Session token to make authenticated calls  |
| loadingScreen  | UI to show when a query is being run  |

### StaticQueryWrapper Example
```jsx
import syn16787123 from 'folder/to/syn16787123.json'

<SynapseComponents.StaticQueryWrapper
  json={syn16787123}
  >
  <SynapseComponents.SynapseTableCardView
      type={SynapseConstants.STUDY}
      limit={3}
  />
</SynapseComponents.StaticQueryWrapper>

/** An alternative usecase for static query wrapper is if the data only needs to be pulled
down once you can specify the query that will pull down the data for the child components.
**/

<SynapseComponents.StaticQueryWrapper
  sql={"SELECT * FROM syn1234567"}
  token={"1234..."}
  >
  <SynapseComponents.SynapseTableCardView
      type={SynapseConstants.STUDY}
      limit={3}
  />
</SynapseComponents.StaticQueryWrapper>
```

#### StaticQueryWrapper Props

| Props  | Explanation |
| ------------- | ------------- |
| json  | Preloaded data from Synapse  |
| token  | Session token to make authenticated requests to synapse  |
| limit | The number of cards to show, e.g limit = 3 will only render 3 cards  |
| sql  | SQL query to be run on Synapse  |

#### QueryWrapperMenu
```jsx
<QueryWrapperMenu
  token={inDevEnv ? token! : this.state.token!}
  menuConfig={
    [ 
      { sql: "SELECT * FROM syn16858331",
        title: "my title here",
        facetDisplayValue:"Assay",
        synapseId: "syn16858331",
        facetName: "assay",
        unitDescription: "data types"
      },
      { sql: "SELECT * FROM syn16858331",
        title: "Facet is dataType",
        synapseId: "syn16858331",
        facetName: "Data Type",
        unitDescription: "files",
        visibleColumnCount: 3
      }
    ]
  }
  rgbIndex={4}
  type={SynapseConstants.PROJECT}
/>

```

#### QueryWrapperMenu Props
| Props  | Explanation |
| ------------- | ------------- |
| token | Session token to make authenticated calls to Synapse |
| rgbIndex | The index into the color pallette starting the color gradient for the view |
| MenuConfig [] | Specifications for each view under the facet |
| MenuConfig has keys: sql,  title,  synapseId,  facet, unitDescription, visibleColumnCount, facetDisplayValue  | sql: The query driving the specific's facets view <br/>title: The title of the table being used, (NOTE: title must be a non-empty string for the table to show). <br/> synapseId: Used to power advanced search and barchart link to table, this id should be the same as the one in the sql <br/> facet: the facet being selected <br/> unitDescription: This gives the units under the barchart <br/> visibleColumnCount: The number of columns to be shown for the table (NOTE: title must be specified with a non-empty string for the table to show) <br/> facetDisplayValue: The string to display for the facet's name, will default to the facetName if not specified|
| type | The type of card to show for this table view. NOTE: If not specified then no cards will render. |

#### Facets

| Props  | Explanation |
| ------------- | ------------- |
| N/A | N/A |

#### SynapseTable

| Props  | Explanation |
| ------------- | ------------- |
| synapseId | When a user click's advanced search this synapseId will tell the browser where to redirect to. |
| visibleColumnCount | This is the number of columns that will be displayed by default. These columns are chosen according to the order of which the columns are specified by the SELECT clause from the query producing the data for this view.  |
| title | The name of the table |

#### StackedBarChart

| Props  | Explanation |
| ------------- | ------------- |
| loadingScreen | This is an optional loading screen to show when the barchart data is being updated |


#### SynapseTableCardView

| Props  | Explanation |
| ------------- | ------------- |
| type | This is the type of card that will be rendered. Use SynapseConstants to choose the card type: STUDY, DATASET, TOOL, PUBLICATION, FUNDER  |
| hideOrganizationLink | This is a boolean, set to true it will hide the organization's link |
| unitDescription | Specifies the unit description for the rows being displayed |


#### Other calls available.  See functions found in [SynapseClient](https://github.com/Sage-Bionetworks/Synapse-React-Client/blob/master/src/lib/utils/SynapseClient.js)
#### Example calls (with links to documentation) can be found in the [tests](https://github.com/Sage-Bionetworks/Synapse-React-Client/blob/master/src/test/lib/utils/SynapseClient.test.js).

## Project Contents
```
./src/lib/utils/SynapseClient.js : Contains the collection of helper functions to use the Synapse API
./src/lib/utils/SynapseClient.test.js : Integration tests for SynapseClient helper functions.
./src/lib/utils/HTTPError.js : Error class that will be thrown on failure.
./src/demo/containers/App.js : Demo App component
```

## Project Development
This project's core dependencies are [Typescript](https://www.typescriptlang.org/docs/home.html), [tslint](https://github.com/progre/tslint-config-airbnb/#readme), and [rollup](https://rollupjs.org/guide/en).

Motivation for dependencies-
  
  * Typescript is a superset of Javascript that provides static typing. This catches many bugs at compile time and makes the client much more self-documenting.

  * tslint is a linter for typescript, it analyzes the code for both coding style and potential issues.

  * rollup allows the client to be built as a UMD bundle **without** having to eject the application from react's built in webpack configuation.

Caveats of these dependencies-
  When rollup bundles the app and resolves an `import module from 'library'` statement it will attempt to include the module in the final output. This is done by looking through the `node_modules/` folder and attempting to copy the code for the library, it's done via [rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve). This doesn't work for every library nor should it be done for every library. `React`, if bundled in this fashion would bloat the bundle to 100k plus lines, its prefereable to include `React` via CDN. Additionally, some bundles don't resolve well (e.g. they have circular dependencies). If this happens you have to use a CDN for the code and tell rollup to recognize the import as a global in the final output file. In the [rollup config](https://github.com/Sage-Bionetworks/Synapse-React-Client/rollup.config.js),
  specify this in the `external` and `output.globals` fields.


## Updating this Project to New Releases

* `react-scripts` is a development dependency in this project.

To update to a new version of `react-scripts`, [open the changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `package.json` and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `react-scripts` painlessly.

## Available Scripts

As with all npm based projects, before doing anything else run:

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the Synapse React Client demo app in the development mode.<br>
Open [http://127.0.0.1:3000](http://127.0.0.1:3000) to view it in the browser.

It will automatically open localhost, but you need to use 127.0.0.1 for CORS preflight OPTIONS request to work properly. 

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

The client has its configuration file for tests in `src/setupTests.js`. 
* Any predefined functionality must be defined there and CDN dependencies must imported there as npm modules. 


### `npm test:coverage`

Launches the test runner in the non-interactive mode to run all tests and calculate test coverage.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

It produces a build for npm distribution and umd. <br>

### `npm run build:rollup`

This project can be built as a umd bundle. It produces two files `synapse-react-client.production.min.js` and `synapse-react-client.production.min.styles.css`.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

* [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (stage 2 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

Learn more about [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).

While we recommend to use experimental proposals with some caution, Facebook heavily uses these features in the product code, so we intend to provide [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb) if any of these proposals change in the future.

Note that **the project only includes a few ES6 [polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

* [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) via [`object-assign`](https://github.com/sindresorhus/object-assign).
* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) via [`promise`](https://github.com/then/promise).
* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.

## Syntax Highlighting in the Editor

To configure the syntax highlighting in your favorite text editor, head to the [relevant Babel documentation page](https://babeljs.io/docs/editors) and follow the instructions. Some of the most popular editors are covered.

## Displaying Lint Output in the Editor

>Note: this feature is available with `react-scripts@0.2.0` and higher.

Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.

They are not required for linting. You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can do.

You would need to install an ESLint plugin for your editor first.

>**A note for Atom `linter-eslint` users**

>If you are using the Atom `linter-eslint` plugin, make sure that **Use global ESLint installation** option is checked:

><img src="http://i.imgur.com/yVNNHJM.png" width="300">


>**For Visual Studio Code users**

>VS Code ESLint plugin automatically detects Create React App's configuration file. So you do not need to create `eslintrc.json` at the root directory, except when you want to add your own rules. In that case, you should include CRA's config by adding this line:

>```js
>{
>  // ...
>  "extends": "react-app"
>}
>```

Then add this block to the `package.json` file of your project:

>```js
>{
>  // ...
>  "eslintConfig": {
>    "extends": "react-app"
>  }
>}
>```

Finally, you will need to install some packages *globally*:

```sh
npm install -g eslint-config-react-app@0.3.0 eslint@3.8.1 babel-eslint@7.0.0 eslint-plugin-react@6.4.1 eslint-plugin-import@2.0.1 eslint-plugin-jsx-a11y@4.0.0 eslint-plugin-flowtype@2.21.0
```

We recognize that this is suboptimal, but it is currently required due to the way we hide the ESLint dependency. The ESLint team is already [working on a solution to this](https://github.com/eslint/eslint/issues/3458) so this may become unnecessary in a couple of months.

## Debugging in the Editor

**This feature is currently only supported by [Visual Studio Code](https://code.visualstudio.com) editor.**

Visual Studio Code supports live-editing and debugging out of the box with Create React App. This enables you as a developer to write and debug your React code without leaving the editor, and most importantly it enables you to have a continuous development workflow, where context switching is minimal, as you don’t have to switch between tools.

You would need to have the latest version of [VS Code](https://code.visualstudio.com) and VS Code [Chrome Debugger Extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) installed.

Then add the block below to your `launch.json` file and put it inside the `.vscode` folder in your app’s root directory.

```json
{
  "version": "0.2.0",
  "configurations": [{
    "name": "Chrome",
    "type": "chrome",
    "request": "launch",
    "url": "http://localhost:3000",
    "webRoot": "${workspaceRoot}/src",
    "userDataDir": "${workspaceRoot}/.vscode/chrome",
    "sourceMapPathOverrides": {
      "webpack:///src/*": "${webRoot}/*"
    }
  }]
}
```

Start your app by running `npm start`, and start debugging in VS Code by pressing `F5` or by clicking the green debug icon. You can now write code, set breakpoints, make changes to the code, and debug your newly modified code—all from your editor.

# jsconfig.json

For improved vscode intellisense support you can optionally add a jsconfig.json to the root (it should lie at the level of `dist/ node_modules/ public/`) of the project directory. It tells vscode more about the projects settings such as where to look for relative imports (specified with the baseUrl) and the js version being used. View the full docs [here](https://code.visualstudio.com/docs/languages/jsconfig).

```json
 {
    "compilerOptions": {
        "baseUrl": "./src",
        "jsx": "react",
        "module": "es6"
    }
}
```

# rollup.config.js
  This is required to build a umd build, docs can be found here: https://rollupjs.org/guide/en