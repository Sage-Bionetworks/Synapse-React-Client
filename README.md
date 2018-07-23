[![Build Status](https://travis-ci.org/Sage-Bionetworks/Synapse-React-Client.svg?branch=master)](https://travis-ci.org/Sage-Bionetworks/Synapse-React-Client)  [![npm version](https://badge.fury.io/js/synapse-react-client.svg)](https://badge.fury.io/js/synapse-react-client)



## Synapse React Client

This project helps you integrate your app with the Synapse API backend.

[Getting started](http://docs.synapse.org/articles/getting_started.html) with Synapse.

[Synapse.org](https://www.synapse.org/) is a client written for the Synapse platform.

## Installation
Run the following command:<br>
`npm install synapse-react-client`

Or add to your dependencies in package.json:<br>
`"synapse-react-client": "latest"`

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
        // handle Error (possibly a HTTPError)
      });
```
### Markdown Rendering

View the demo app usage of markdown [here]((https://github.com/Sage-Bionetworks/Synapse-React-Client/blob/master/src/demo/containers/Markdown.js)).

Step 1: Install Synapse markdown-it and Synapse markdown-it plugins
  + `npm install markdown-it --save`
  + `npm install markdown-it-synapse --save`
  + `npm install markdown-it-center-text --save`
  + `npm install markdown-it-synapse-heading --save`
  + `npm install markdown-it-synapse-table --save`
  + `npm install markdown-it-strikethrough-alt --save`
  + `npm install markdown-it-emphasis-alt --save`
  + `npm install markdown-it-synapse-math  --save`
  + `npm install markdown-it-sup-alt --save`
  + `npm install markdown-it-sub-alt  --save`
  + `npm install markdown-it-inline-comments  --save`
  + `npm install markdown-it-br --save`

Step 2: Include [katex](github.com/Khan/KaTeX) for math support by copying/pasting the CDN into index.html

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.0-beta/dist/katex.min.css" integrity="sha384-9tPv11A+glH/on/wEu99NVwDPwkMQESOocs/ZGXPoIiLE8MU/qkqUcZ3zzL+6DuH" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/katex@0.10.0-beta/dist/katex.min.js" integrity="sha384-U8Vrjwb8fuHMt6ewaCy8uqeUXv4oitYACKdB0VziCerzt011iQ/0TqlSlv8MReCm" crossorigin="anonymous"></script>
```

Step 3: Instantiate Markdown Instance Inside Component, setup Math rendering
```js
  import React from "react";
  /**
   * Import requirements for markdown
   */
  let markdownitSynapse = require('markdown-it-synapse')
  let markdownSubAlt = require('markdown-it-sub-alt');
  let markdownCenterText = require('markdown-it-center-text')
  let markdownSynapseHeading = require('markdown-it-synapse-heading')
  let markdownSynapseTable = require('markdown-it-synapse-table')
  let markdownStrikethrough = require('markdown-it-strikethrough-alt')
  let markdownContainer = require('markdown-it-container')
  let markdownEmpahsisAlt = require('markdown-it-emphasis-alt')
  let markdownInlineComments = require('markdown-it-inline-comments')
  let markdownBr = require('markdown-it-br')
  let sanitizeHtml = require('sanitize-html');
  let synapseMath = require('markdown-it-synapse-math')

  class MarkdownDemo extends React.component {
    constructor() {
      this.setState({md: require(""), markdownText: "# Some Sample Markdown Text"})
      this.processMathJax = this.processMathJax.bind(this)
    }

    /**
     * Find all math identified elements of the form [id^=\"mathjax-\"]
     * (e.g. <dom element id="mathjax-10"> text </dom element>)
     * and transform them to their math markedown equivalents
     */
    processMathJax() {
      // use regex to grab all math identified elements
      let mathExpressions = document.querySelectorAll("[id^=\"mathjax-\"]")
      // go through all obtained elements and transform them with katex
      mathExpressions.forEach(element => {
        window.katex.render(element.textContent, element, {throwOnError: false, delimiters: 
          [
            {left: "$$", right: "$$", display: true},
            {left: "\\(", right: "\\)", display: false},
            {left: "\\[", right: "\\]", display: true}
          ]
        })
      });
    }

    // on component update find and re-render the math items accordingly
    componentDidUpdate () {
        this.processMathJax()
    }

    componentDidMount() {
      markdownitSynapse.init_markdown_it(
        this.state.md, markdownSubAlt, markdownEmpahsisAlt,
        markdownCenterText, markdownSynapseHeading, markdownSynapseTable,
        markdownStrikethrough, markdownContainer, markdownEmpahsisAlt,
        markdownInlineComments, markdownBr
      )
      this.setState({
        md: this.state.md.use(markdownitSynapse, '0').use(synapseMath, '0')
      })

      // process all math identified markdown items
      this.processMathJax()
    }

    render() {
      return (
        <div>
          {this.state.markdownText}
        <div>
      )
    }
  }
```




#### Other calls available.  See functions found in [SynapseClient](https://github.com/Sage-Bionetworks/Synapse-React-Client/blob/master/src/lib/utils/SynapseClient.js)
#### Example calls (with links to documentation) can be found in the [tests](https://github.com/Sage-Bionetworks/Synapse-React-Client/blob/master/src/test/lib/utils/SynapseClient.test.js).

## Project Contents
```
./src/lib/utils/SynapseClient.js : Contains the collection of helper functions to use the Synapse API
./src/lib/utils/SynapseClient.test.js : Integration tests for SynapseClient helper functions.
./src/lib/utils/HTTPError.js : Error class that will be thrown on failure.
./src/demo/containers/App.js : Demo App component
```

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

### `npm test:coverage`

Launches the test runner in the non-interactive mode to run all tests and calculate test coverage.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

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