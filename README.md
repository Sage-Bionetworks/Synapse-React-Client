[![Build Status](https://travis-ci.org/Sage-Bionetworks/Synapse-React-Client.svg?branch=master)](https://travis-ci.org/Sage-Bionetworks/Synapse-React-Client) [![npm version](https://badge.fury.io/js/synapse-react-client.svg)](https://badge.fury.io/js/synapse-react-client)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Synapse React Client

This project helps you integrate your app with the Synapse API backend.

[Getting started](http://docs.synapse.org/articles/getting_started.html) with Synapse.

[Synapse.org](https://www.synapse.org/) is a client written for the Synapse platform.

Interested in contributing to this project? See [contributing](./CONTRIBUTING.md).

## Installation with npm

Run the following command:<br>
`npm install synapse-react-client`

Or add to your dependencies in package.json:<br>
`"synapse-react-client": "latest"`

If using Typescript then you'll need to create a file called "synapse-react-client.d.ts" file with the following content: <br>

```jsx
 declare module "synapse-react-client"
```

## Installation without npm or yarn

To see an example index.html page with all the necessary imports view [here](./src/demo/SingleFileBuild/index.html)

You can use a cdn containing the javascript and css required for the client here (the client is exposed as SRC to the browser)-

```html
<script
  crossorigin
  src="https://unpkg.com/synapse-react-client@1.10.10/umd/synapse-react-client.production.min.js"
/>
<link
  rel="stylesheet"
  src="https://unpkg.com/synapse-react-client@1.10.10/umd/synapse-react-client.production.styles.css"
/>
```

Note there are a number of CDNs required to finish this functionality-

**react**

```html
<script
  crossorigin
  src="https://unpkg.com/react@16/umd/react.production.min.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"
></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.min.js"></script>
```

**react router dom**

```html
<script src="https://unpkg.com/react-router/umd/react-router.min.js"></script>
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
```

**katex**

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css"
  integrity="sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y"
  crossorigin="anonymous"
/>

<script
  defer
  src="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.js"
  integrity="sha384-K3vbOmF2BtaVai+Qk37uypf7VrgBubhQreNQe9aGsz9lB63dIFiQVlJbr92dw2Lx"
  crossorigin="anonymous"
></script>
```

**react-plotly**

```html
<script crossorigin src="https://cdn.plot.ly/plotly-1.31.2.min.js"></script>
<script
  crossorigin
  src="https://unpkg.com/react-plotly.js@1.1.1/dist/create-plotly-component.js"
></script>
```

**react-measure**

```html
<script src="https://unpkg.com/react-measure@2.2.2/dist/index.umd.js"></script>
```

**react-tooltip**

```html
<script
  crossorigin
  src="https://unpkg.com/react-tooltip@3.9.2/standalone/react-tooltip.min.js"
></script>
```

**markdown**

```html
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

## Setting Endpoints

### Configuring endpoint destinations for repo and portal

Specifying the following in the window object will override request endpoints:

```js
window.SRC.OVERRIDE_ENDPOINT_CONFIG = {
  PORTAL: '<endpoint>',
  REPO: '<endpoint>',
}
```

Note - this will apply to all calls being made.

## Theming

## Style

The core css lives in `src/lib/style` and `src/lib/template_style`.

- `src/lib/style` contains all scss that doesn't use any external variables.
- `src/lib/template_style` contains any scss files that require external variables.

## Overrides

Import the main `src/lib/template_style/Index.scss` file into your application and override the main theme color `$primary-action-color`

```scss
$primary-action-color: blue;
@import 'node_modules/synapse-react-client/dist/template_style/Index.scss';
```

## Examples

#### Login

```js
import { SynapseClient } from 'synapse-react-client'

SynapseClient.login('username', 'password').then(response => {
  // session token available in response.sessionToken
})
```

#### Query a Synapse Table/View

```js
import { SynapseClient, SynapseConstants } from 'synapse-react-client'

let request = {
  entityId: 'syn123',
  query: {
    sql: 'SELECT * FROM syn123',
    includeEntityEtag: true,
    isConsistent: true,
    offset: 0,
    limit: 100,
  },

  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
    SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
    SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
    SynapseConstants.BUNDLE_MASK_QUERY_FACETS,
}
SynapseClient.getQueryTableResults(request, sessionToken)
  .then(response => {
    // query results are available
  })
  .catch(function (error) {
    // handle Error (possibly an HTTPError)
  })
```

#### Markdown Rendering Example

View the demo app incorporation of markdown [here](./src/demo/containers/App.tsx).

To use the synapse markdown-it component you must pass it a wiki page id and an owner id. Additionally, you can configure an error view to display.

| Props                                      | Explanation                                             |
| ------------------------------------------ | ------------------------------------------------------- |
| ownerId: String                            | ownerId for the synapse page                            |
| wikiId: String                             | wikiId for the synapse page                             |
| markdown: String                           | markdown that is to be rendered                         |
| errorMessageView?: React.FunctionComponent | Should accept and render an error message to the string |
| token?: string                             | auth token from synapse                                 |

Example 1: Rendering a Synapse Wiki page without any markdown pre-loaded

```jsx
import { SynapseComponents } from 'synapse-react-client'
;<CustomMarkdownView>
  <SynapseComponents.Markdown
    token={this.state.token}
    ownerId={'syn14568473'}
    wikiId={'582406'}
  ></SynapseComponents.Markdown>
</CustomMarkdownView>
```

Example 2: Rendering a Synapse Wiki page with the markdown already loaded

```jsx
import { SynapseComponents } from 'synapse-react-client'
;<CustomMarkdownView>
  <SynapseComponents.Markdown
    token={this.state.token}
    markdown={'# an h1 header in markdown'}
  ></SynapseComponents.Markdown>
</CustomMarkdownView>
```

To use the markdown component with only markdown, simply pass down a prop with the markdown to be processed and rendered.

```jsx
import { SynapseComponents } from 'synapse-react-client'
;<CustomMarkdownView>
  <SynapseComponents.Markdown
    token={this.state.token}
    markdown={'# my own markdown! '}
    errorMessageView={<CustomMarkdownErrorView />}
  ></SynapseComponents.Markdown>
</CustomMarkdownView>
```

### QueryWrapper Example

An example of a view with facets/stacked bar chart/table

```jsx
import { SynapseComponents } from 'synapse-react-client'
;<SynapseComponents.QueryWrapper
  initQueryRequest={{
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      isConsistent: false,
      sql: `SELECT * FROM syn16858331`,
      limit: 25,
      offset: 0,
    },
  }}
  rgbIndex={0}
  token={this.state.token}
  facet={'assay'}
  showMenu
>
  <SynapseComponents.Facets />
  <SynapseComponents.StackedBarChart
    loadingScreen={<div> I'm loading as fast as I can </div>}
  />
  <SynapseComponents.SynapseTable
    synapseId={'syn15661198'}
    visibleColumnCount={8}
  />
</SynapseComponents.QueryWrapper>
```

#### QueryWrapper Props

| Props            | Explanation                                                                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| initQueryRequest | This is the default query to be run on the first render of the component                                                                                  |
| rgbIndex         | Specifies the starting index of the following color wheel: turquoise, blueberry, rose, royal, butterscotch, powder, slate, apricot, fern, lavender, apple |
| facet            | This is the facet that will be default filtered on if using any of StackedBarChart/Facets/Menu.                                                           |
| token            | Session token to make authenticated calls                                                                                                                 |
| loadingScreen    | UI to show when a query is being run                                                                                                                      |
| facetAliases: {} | Object with key = columnName and value as alias from query                                                                                                |

#### QueryWrapperMenu

```jsx
<QueryWrapperMenu
  token={inDevEnv ? token! : this.state.token!}
  tableConfiguration={
    {
      title: "my title here",
      synapseId: "syn16858331",
    }
  }
  unitDescription={"files"}
  menuConfig={
    [
      { sql: "SELECT * FROM syn16858331",
        facet: "assay",
      },
      { sql: "SELECT * FROM syn16858331",
        facet: "Data Type",
        visibleColumnCount: 3
      }
    ]
  }
  rgbIndex={4}
/>

```

#### QueryWrapperMenu Props

| Props                                                                                                                    | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| token                                                                                                                    | Session token to make authenticated calls to Synapse                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| rgbIndex                                                                                                                 | The index into the color pallette starting the color gradient for the view                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| unitDescription                                                                                                          | The units of data for the query                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| tableConfiguration, has keys: synapseId, title, visibleColumnCount                                                       | **title**: The title of the table being used, (NOTE: title must be a non-empty string for the table to show). <br/> **synapseId**: Used to power advanced search and barchart link to table, this id should be the same as the one in the sql <br/> **visibleColumnCount**: The number of columns to be shown for the table                                                                                                                                                                                            |
| cardConfiguration, has keys: type, genericCardSchema, secondaryLabelLimit, iconOptions, titleLinkConfig, labelLinkConfig | The configuration for cards to be show given the query                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| stackedBarChartConfiguration, has keys: loadingScreen, link, linkText                                                    | The configuration for the bar chart                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| searchConfiguration, has key: searchable                                                                                 | The configuration for the search component. Only views that have cards                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| accordionConfig: AccordionConfig []                                                                                      | For using an accordion dropdown. An individual accordion config contains: menuConfig: MenuConfig [], name: string, cardConfiguration, tableConfiguration, stackedBarChartConfiguration.                                                                                                                                                                                                                                                                                                                                |
| MenuConfig []                                                                                                            | Specifications for each view under the facet                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| MenuConfig has keys: sql, facetAliases, facet                                                                            | **sql**: The query driving the specific's facets view <br/> **facet**: the facet being selected <br/> **facetAliases**: This is used for when the sql statement specified has an alias clause- e.g. 'SELECT **id AS "File ID"** ....', it will make the view render the aliased value. NOTE: If the sql statement has an alias and this prop is NOT specified then the table dropdown will function incorrectly, it will fail to recognize the column header was aliased in the sql and filter menus will not display. |

#### Facets

| Props | Explanation |
| ----- | ----------- |
| N/A   | N/A         |

#### SynapseTable

| Props              | Explanation                                                                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| synapseId          | When a user click's advanced search this synapseId will tell the browser where to redirect to.                                                                                                                            |
| visibleColumnCount | This is the number of columns that will be displayed by default. These columns are chosen according to the order of which the columns are specified by the SELECT clause from the query producing the data for this view. |
| title              | The name of the table                                                                                                                                                                                                     |

#### StackedBarChart

| Props         | Explanation                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| loadingScreen | This is an optional loading screen to show when the barchart data is being updated                        |
| link          | If specified this will show a button link at the bottom right of the bar chart that will direct to `link` |
| linkText      | If the `link` prop is specified then the text displayed slink will be `linkText`                          |

#### Search

| Props                     | Explanation                                                               |
| ------------------------- | ------------------------------------------------------------------------- |
| searchable: Searchable [] | Array of objects, where each object has keys `columnName` and `hintText`. |

#### QueryCount

| Props | Explanation                             |
| ----- | --------------------------------------- |
| sql   | sql statement                           |
| name  | Text to display next to the query count |
| token | auth token from synapse                 |

#### CardContainer

CardContainer is used as either a child of QueryWrapperMenu/QueryWrapper OR CardContainerLogic. The two situations are sufficiently different that factoring out the logic into it's own component is not possible.

| Props           | Explanation                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| type            | This is the type of card that will be rendered. Use SynapseConstants to choose the card type: STUDY, DATASET, TOOL, PUBLICATION, FUNDER |
| unitDescription | Specifies the unit description for the rows being displayed, NOTE: If not specified then no label will render                           |

#### CardContainerLogic

This component is used to wrap CardContainer as a standalone renderer for cards, so the cards will appear without any other query based views, e.g. [the view under **Funded Studies**](https://nf.synapse.org/#/Organizations-CTF)

This card can be used in two ways - as a standard row renderer or as a 'Header' where the card content is meant to stretch across the screen and give an overview of whatever content comes below.

| Props                                 | Explanation                                                                                                                                                                                                                                                                                            |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| sql: string                           | The sql to be run against Synapse                                                                                                                                                                                                                                                                      |
| unitDescription: string               | Fills in 'Displaying 50 <unitDescription>', NOTE: If not specified then no label will render                                                                                                                                                                                                           |
| token?: string                        | Authentication token                                                                                                                                                                                                                                                                                   |
| limit?: number                        | Used to constrain the number of cards shown, defaults to Infinity                                                                                                                                                                                                                                      |
| secondaryLabelLimit?: number          | Used to constraint the number of secondary labels shown, defaults to three                                                                                                                                                                                                                             |
| type: string                          | Type of card to be rendered.                                                                                                                                                                                                                                                                           |
| facet?: string                        | If rendering a faceted view this defines the facet that will be used                                                                                                                                                                                                                                   |
| loadingScreen?: JSX.Element           | If rendering a faceted view this defines the facet that will be used                                                                                                                                                                                                                                   |
| genericCardSchema?: GenericCardSchema | Defines schema to be used by cards                                                                                                                                                                                                                                                                     |
| isHeader?: boolean                    | Styles the card to be used as a header -- e.g. doesnt have a 'Show More' for description, no secondaryLabels are shown                                                                                                                                                                                 |
| backgroundColor?: string              | Used as background color for the card in header mode                                                                                                                                                                                                                                                   |
| searchParams?: {}                     | Feeds in additional sql WHERE clause conditions to the SQL provided given a set of key value pairs                                                                                                                                                                                                     |
| sqlOperator?:string                   | Default: `LIKE`, otherwise the current set of operators allowed is - `['=']`                                                                                                                                                                                                                           |
| iconOptions?: IconOptions             | In order to not bloat SRC with custom icons per portal, only a subset of icons will be used across portals. For special icons like when the card is used in 'header mode' it requires a dictionary of key-value pairs with the key being the column value and the value being a corresponding SVG icon |

#### UserCard

UserCard represents a synapse user, it is responsible for three different sized cards, small, medium, and large.

| Props                                                                                                     | Explanation                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userProfile: [UserProfile](https://docs.synapse.org/rest/org/sagebionetworks/repo/model/UserProfile.html) | A [userProfile](https://docs.synapse.org/rest/org/sagebionetworks/repo/model/UserProfile.html) object can get passed in for the component to use as its data                                                                                                                                                                                       |
| preSignedURL: string                                                                                      | If set will show the corresponding img for the user                                                                                                                                                                                                                                                                                                |
| hideEmail: boolean                                                                                        | If set will hide the user's email                                                                                                                                                                                                                                                                                                                  |
| loadingBar: Html Element                                                                                  | An html element can get passed in to show while the component loads data (only applies if userProfile is NOT specified).                                                                                                                                                                                                                           |
| alias: string                                                                                             | An alias that resolves the ownerId for the UserProfile                                                                                                                                                                                                                                                                                             |
| ownerId: string                                                                                           | The ownerId of the UserProfile                                                                                                                                                                                                                                                                                                                     |
| link: string                                                                                              | The link to point to on the user name, defaults to https://www.synapse.org/#!Profile:${userProfile.ownerId}                                                                                                                                                                                                                                        |
| size: string                                                                                              | Either SynapseConstants.SMALL_USER_CARD, SynapseConstants.MEDIUM_USER_CARD, SynapseConstants.LARGE_USER_CARD, specifying the card size.                                                                                                                                                                                                            |
| token: string                                                                                             | Auth token                                                                                                                                                                                                                                                                                                                                         |
| hideText: boolean                                                                                         | ONLY applies to small user card, hides the text next the user profile image.                                                                                                                                                                                                                                                                       |
| menuActions                                                                                               | Array of MenuActions[], where MenuAction is an object of the form - {field:string, callback?: (userProfile: UserProfile) => void}, specifies the dropdown menu functionality for the ellipsis on medium/large cards. If field === 'SEPERATOR' then a break will occur in the menu. NOTE: If left undefined the menu will not render to the screen. |

#### Other calls available. See functions found in [SynapseClient](./src/lib/utils/SynapseClient.ts)

## Project Contents

###

```
└── ./src
   ├── ./__tests__ Folder of tests that contains the same structure as the lib folder
   ├── ./demo
   │   ├── ./containers      Demo of the Client in use with es6/jsx, imported with npm.
   │   ├── ./SingleFileBuild Demo of the Client with pure javascript, imported as a CDN
   ├── ./lib
   │   ├── ./assets      Contains all the svgs/pngs needed for logos or buttons
   │   ├── ./containers  Contains all the distributed React components
   │   ├── ./style       Contains all the prepackaged css
   │   ├── ./template_style       Contains scss to be imported and overriden
   │   ├── ./utils       Contains all utilities
   │       ├── SynapseClient.js       Contains the collection of helper functions to use the Synapse API
   │       ├── SynapseClient.test.js  Integration tests for SynapseClient helper functions.
   │       ├── HTTPError.js           Error class that will be thrown on failure.
   │   ├── ./mocks  Contains JSON data (soon to be deprecated) for demonstrating views powered with only JSON. In future versions,
                    the folder will only contain data that is to be mocked for __tests__.
   ├── /umd
      ├── synapse-react-client.production.min.js: The umd bundle of the client's javascript.
      ├── synapse-react-client.production.styles.css: The umd bundle of the client's styling.
```

### Configuration Files

```
./types.d.ts       In general this would be used as a library with type declarations for other client developers using Typescript. Currently, it contains only definitions for global CDNs used in the project.
./tsconfig.json      Typescript configuration
./rollup.config.js rollup config
```

## Project Development

This project's core dependencies are [Typescript](https://www.typescriptlang.org/docs/home.html), and [rollup](https://rollupjs.org/guide/en).

Motivation for dependencies-

- Typescript is a superset of Javascript that provides static typing. This catches many bugs at compile time and makes the client much more self-documenting.

- rollup allows the client to be built as a UMD bundle **without** having to eject the application from react's built in webpack configuation. The primary motivation for bundling the package as a UMD build is using the package in synapse.org.

Caveats of these dependencies-
When rollup bundles the app and resolves an `import module from 'library'` statement it will attempt to include the module in the final output. This is done by looking through the `node_modules/` folder and attempting to copy the code for the library, it's done via [rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve). This doesn't work for every library nor should it be done for every library. `React`, if bundled in this fashion would bloat the bundle to 100k plus lines, its prefereable to include `React` via CDN. Additionally, some bundles don't resolve well (e.g. they have circular dependencies). If this happens you have to use a CDN for the code and tell rollup to recognize the import as a global in the final output file. In the [rollup config](./rollup.config.js),
specify this in the `external` and `output.globals` fields.

## Release Cycle

The develop branch was created from master
Feature branches are created from develop
When a feature is complete it is merged into the develop branch
If an issue in master is detected a hotfix branch is created from master
Once the hotfix is complete it is merged to both develop and master
Notes:
On a regular basis develop will be merged into master and a new release will be published from master
All proposed changes (to be merged into develop or master) must be via a Pull Request with a code review

## Adding a new component and Publishing a new version of SRC

To expose a component from the library you must export it from [index.ts](src/lib/index.ts).

To expose a component for use in synapse.org, you must export it from [rollup.index.ts](src/lib/rollup.index.ts). See [Project Development](#project-development) for more information on rollup and synapse.org.

To release the react-client, bump the [package version](https://next.yarnpkg.com/cli/version), merge into main,
and run `yarn publish`. Note - you must have access to the synapse-react-client [npm package](https://www.npmjs.com/package/synapse-react-client) to be able to run the command. Publising the package will also release a new version of the rollup build, it can be pulled down using unpkg.com, the URL is available [here](https://unpkg.com/browse/synapse-react-client@latest/dist/umd/synapse-react-client.production.min.js)

## Updating this Project to New Releases

- `react-scripts` is a development dependency in this project.

To update to a new version of `react-scripts`, [open the changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `package.json` and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `react-scripts` painlessly.

## Available Scripts

Before doing anything else run:

### `yarn` (or `yarn install`)

In the project directory, you can run:

### `yarn start`

Runs the Synapse React Client demo app in the development mode.<br>
Open [http://127.0.0.1:3000](http://127.0.0.1:3000) to view it in the browser.

It will automatically open localhost, but you need to use 127.0.0.1 for CORS preflight OPTIONS request to work properly.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn test:coverage`

Launches the test runner in the non-interactive mode to run all tests and calculate test coverage.<br>

The client has its configuration file for tests in `src/setupTests.js`.

- Any predefined functionality must be defined there and CDN dependencies must be imported as npm modules.

Links to Resources on Testing:

- Testing Framework: https://jestjs.io/
- React Class Testing: https://enzymejs.github.io/enzyme/
- React Hooks Testing: https://testing-library.com/docs/react-testing-library/intro

### Common issues with failed tests -

#### React state isn't being updated.

Wrap your code that updates the component inside [https://testing-library.com/docs/preact-testing-library/api#act](act)

#### Enzyme isn't finding the component

If using a class component:

1. Try using [https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/mount.html](mount) - this recursively renders all child components.
2. Try using [https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/update.html](update) - this will sync the enzyme component tree snapshot with the react component tree, useful to use after running a stateful action on a component.

#### Debugging the tests

There are open issues in the microsoft vscode repository that block the ability to run debug mode on our tests.

1. Update launch.json with the json snippet below.
2. The command will fail because of the way vscode treats quotations inside launch.json, re-run the failed command by replacing the text `node_modules/(?!(lodash-es|jest\*)/)` with `"node_modules\/(?!(lodash-es|jest\*)/\)"` and append the command `set -H+` to the front e.g.
   `set -H+ && command with modified text "node_modules\/(?!(lodash-es|jest\*)/\)"`

```json
{
  "name": "Debug CRA Tests",
  "type": "node",
  "request": "launch",
  "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",
  "args": [
    "test",
    "--runInBand",
    "--no-cache",
    "--env=jsdom",
    "--transformIgnorePatterns",
    // https://github.com/microsoft/vscode/issues/81944
    "node_modules/(?!(lodash-es|jest*)/)",
    "--setupFiles",
    "./src/setupTests.js"
  ],
  "cwd": "${workspaceRoot}",
  "protocol": "inspector",
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen"
}
```

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

It produces a build for npm distribution and umd. <br>

### `yarn run build:rollup`

This project can be built as a umd bundle. It produces two files `synapse-react-client.production.min.js` and `synapse-react-client.production.min.styles.css`.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

- [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
- [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
- [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
- [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (stage 2 proposal).
- [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

Learn more about [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).

While we recommend to use experimental proposals with some caution, Facebook heavily uses these features in the product code, so we intend to provide [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb) if any of these proposals change in the future.

Note that **the project only includes a few ES6 [polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

- [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) via [`object-assign`](https://github.com/sindresorhus/object-assign).
- [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) via [`promise`](https://github.com/then/promise).
- [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.

## Syntax Highlighting in the Editor

To configure the syntax highlighting in your favorite text editor, head to the [relevant Babel documentation page](https://babeljs.io/docs/editors) and follow the instructions. Some of the most popular editors are covered.

## Displaying Lint Output in the Editor

> Note: this feature is available with `react-scripts@0.2.0` and higher.

Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.

They are not required for linting. You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can do.

You would need to install an ESLint plugin for your editor first.

> **A note for Atom `linter-eslint` users**

> If you are using the Atom `linter-eslint` plugin, make sure that **Use global ESLint installation** option is checked:

> <img src="http://i.imgur.com/yVNNHJM.png" width="300">

> **For Visual Studio Code users**

> VS Code ESLint plugin automatically detects Create React App's configuration file. So you do not need to create `eslintrc.json` at the root directory, except when you want to add your own rules. In that case, you should include CRA's config by adding this line:

> ```js
> {
>  // ...
>  "extends": "react-app"
> }
> ```

Then add this block to the `package.json` file of your project:

> ```js
> {
>  // ...
>  "eslintConfig": {
>    "extends": "react-app"
>  }
> }
> ```

Finally, you will need to install some packages _globally_:

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
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src",
      "userDataDir": "${workspaceRoot}/.vscode/chrome",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
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
