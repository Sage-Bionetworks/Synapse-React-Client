# Examples

## Login

```js
import { SynapseClient } from 'synapse-react-client'

SynapseClient.login('username', 'password').then(response => {
  // access token available in response.accessToken
})
```

## Query a Synapse Table/View

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
SynapseClient.getQueryTableResults(request, accessToken)
  .then(response => {
    // query results are available
  })
  .catch(function (error) {
    // handle Error (possibly an HTTPError)
  })
```

## Markdown Rendering Example

View the demo app incorporation of markdown [here](./src/demo/containers/App.tsx).

To use the synapse markdown-it component you must pass it a wiki page id and an owner id. Additionally, you can configure an error view to display.

| Props                                      | Explanation                                             |
| ------------------------------------------ | ------------------------------------------------------- |
| ownerId: String                            | ownerId for the synapse page                            |
| wikiId: String                             | wikiId for the synapse page                             |
| markdown: String                           | markdown that is to be rendered                         |
| errorMessageView?: React.FunctionComponent | Should accept and render an error message to the string |

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

## SynapseTable

| Props              | Explanation                                                                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| synapseId          | When a user click's advanced search this synapseId will tell the browser where to redirect to.                                                                                                                            |
| visibleColumnCount | This is the number of columns that will be displayed by default. These columns are chosen according to the order of which the columns are specified by the SELECT clause from the query producing the data for this view. |
| title              | The name of the table                                                                                                                                                                                                     |

## Search

| Props                     | Explanation                                                               |
| ------------------------- | ------------------------------------------------------------------------- |
| searchable: Searchable [] | Array of objects, where each object has keys `columnName` and `hintText`. |

## QueryCount

| Props | Explanation                             |
| ----- | --------------------------------------- |
| sql   | sql statement                           |
| name  | Text to display next to the query count |
| token | auth token from synapse                 |

## CardContainer

CardContainer is used as either a child of QueryWrapperMenu/QueryWrapper OR CardContainerLogic. The two situations are sufficiently different that factoring out the logic into it's own component is not possible.

| Props           | Explanation                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| type            | This is the type of card that will be rendered. Use SynapseConstants to choose the card type: STUDY, DATASET, TOOL, PUBLICATION, FUNDER |
| unitDescription | Specifies the unit description for the rows being displayed, NOTE: If not specified then no label will render                           |

## CardContainerLogic

This component is used to wrap CardContainer as a standalone renderer for cards, so the cards will appear without any other query based views, e.g. [the view under **Funded Studies**](https://nf.synapse.org/#/Organizations-CTF)

This card can be used in two ways - as a standard row renderer or as a 'Header' where the card content is meant to stretch across the screen and give an overview of whatever content comes below.

| Props                                 | Explanation                                                                                                                                                                                                                                                                                            |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| sql: string                           | The sql to be run against Synapse                                                                                                                                                                                                                                                                      |
| unitDescription: string               | Fills in 'Displaying 50 <unitDescription>', NOTE: If not specified then no label will render                                                                                                                                                                                                           |
| limit?: number                        | Used to constrain the number of cards shown, defaults to Infinity                                                                                                                                                                                                                                      |
| secondaryLabelLimit?: number          | Used to constraint the number of secondary labels shown, defaults to three                                                                                                                                                                                                                             |
| type: string                          | Type of card to be rendered.                                                                                                                                                                                                                                                                           |
| facet?: string                        | If rendering a faceted view this defines the facet that will be used                                                                                                                                                                                                                                   |
| genericCardSchema?: GenericCardSchema | Defines schema to be used by cards                                                                                                                                                                                                                                                                     |
| isHeader?: boolean                    | Styles the card to be used as a header -- e.g. doesnt have a 'Show More' for description, no secondaryLabels are shown                                                                                                                                                                                 |     |
| searchParams?: {}                     | Feeds in additional sql WHERE clause conditions to the SQL provided given a set of key value pairs                                                                                                                                                                                                     |
| sqlOperator?:string                   | Default: `LIKE`, otherwise the current set of operators allowed is - `['=']`                                                                                                                                                                                                                           |
| iconOptions?: IconOptions             | In order to not bloat SRC with custom icons per portal, only a subset of icons will be used across portals. For special icons like when the card is used in 'header mode' it requires a dictionary of key-value pairs with the key being the column value and the value being a corresponding SVG icon |

# Other calls available

See functions found in [SynapseClient](./src/lib/utils/SynapseClient.ts)
