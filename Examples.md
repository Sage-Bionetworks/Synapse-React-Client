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

## QueryWrapper Example

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
  <SynapseComponents.StackedBarChart}
  />
  <SynapseComponents.SynapseTable
    synapseId={'syn15661198'}
    visibleColumnCount={8}
  />
</SynapseComponents.QueryWrapper>
```

### QueryWrapper Props

| Props            | Explanation                                                                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| initQueryRequest | This is the default query to be run on the first render of the component                                                                                  |
| rgbIndex         | Specifies the starting index of the following color wheel: turquoise, blueberry, rose, royal, butterscotch, powder, slate, apricot, fern, lavender, apple |
| facet            | This is the facet that will be default filtered on if using any of StackedBarChart/Facets/Menu.                                                           |
| token            | Session token to make authenticated calls                                                                                                                 |
| facetAliases: {} | Object with key = columnName and value as alias from query                                                                                                |

## QueryWrapperMenu

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

### QueryWrapperMenu Props

| Props                                                                                                                    | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| token                                                                                                                    | Session token to make authenticated calls to Synapse                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| rgbIndex                                                                                                                 | The index into the color pallette starting the color gradient for the view                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| unitDescription                                                                                                          | The units of data for the query                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| tableConfiguration, has keys: synapseId, title, visibleColumnCount                                                       | **title**: The title of the table being used, (NOTE: title must be a non-empty string for the table to show). <br/> **synapseId**: Used to power advanced search and barchart link to table, this id should be the same as the one in the sql <br/> **visibleColumnCount**: The number of columns to be shown for the table                                                                                                                                                                                            |
| cardConfiguration, has keys: type, genericCardSchema, secondaryLabelLimit, iconOptions, titleLinkConfig, labelLinkConfig | The configuration for cards to be show given the query                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| stackedBarChartConfiguration, has keys: link, linkText                                                    | The configuration for the bar chart                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| searchConfiguration, has key: searchable                                                                                 | The configuration for the search component. Only views that have cards                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| accordionConfig: AccordionConfig []                                                                                      | For using an accordion dropdown. An individual accordion config contains: menuConfig: MenuConfig [], name: string, cardConfiguration, tableConfiguration, stackedBarChartConfiguration.                                                                                                                                                                                                                                                                                                                                |
| MenuConfig []                                                                                                            | Specifications for each view under the facet                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| MenuConfig has keys: sql, facetAliases, facet                                                                            | **sql**: The query driving the specific's facets view <br/> **facet**: the facet being selected <br/> **facetAliases**: This is used for when the sql statement specified has an alias clause- e.g. 'SELECT **id AS "File ID"** ....', it will make the view render the aliased value. NOTE: If the sql statement has an alias and this prop is NOT specified then the table dropdown will function incorrectly, it will fail to recognize the column header was aliased in the sql and filter menus will not display. |

## Facets

| Props | Explanation |
| ----- | ----------- |
| N/A   | N/A         |

## SynapseTable

| Props              | Explanation                                                                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| synapseId          | When a user click's advanced search this synapseId will tell the browser where to redirect to.                                                                                                                            |
| visibleColumnCount | This is the number of columns that will be displayed by default. These columns are chosen according to the order of which the columns are specified by the SELECT clause from the query producing the data for this view. |
| title              | The name of the table                                                                                                                                                                                                     |

## StackedBarChart

| Props         | Explanation                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| link          | If specified this will show a button link at the bottom right of the bar chart that will direct to `link` |
| linkText      | If the `link` prop is specified then the text displayed slink will be `linkText`                          |

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
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| sql: string                           | The sql to be run against Synapse                                                                                                                                                                                                                                                                      |
| unitDescription: string               | Fills in 'Displaying 50 <unitDescription>', NOTE: If not specified then no label will render                                                                                                                                                                                                           |
| token?: string                        | Authentication token                                                                                                                                                                                                                                                                                   |
| limit?: number                        | Used to constrain the number of cards shown, defaults to Infinity                                                                                                                                                                                                                                      |
| secondaryLabelLimit?: number          | Used to constraint the number of secondary labels shown, defaults to three                                                                                                                                                                                                                             |
| type: string                          | Type of card to be rendered.                                                                                                                                                                                                                                                                           |
| facet?: string                        | If rendering a faceted view this defines the facet that will be used                                                                                                                                                                                                                                   |
| genericCardSchema?: GenericCardSchema | Defines schema to be used by cards                                                                                                                                                                                                                                                                     |
| isHeader?: boolean                    | Styles the card to be used as a header -- e.g. doesnt have a 'Show More' for description, no secondaryLabels are shown                                                                                                                                                                                 |                                                                                                                                                             |
| searchParams?: {}                     | Feeds in additional sql WHERE clause conditions to the SQL provided given a set of key value pairs                                                                                                                                                                                                     |
| sqlOperator?:string                   | Default: `LIKE`, otherwise the current set of operators allowed is - `['=']`                                                                                                                                                                                                                           |
| iconOptions?: IconOptions             | In order to not bloat SRC with custom icons per portal, only a subset of icons will be used across portals. For special icons like when the card is used in 'header mode' it requires a dictionary of key-value pairs with the key being the column value and the value being a corresponding SVG icon |

# Other calls available

See functions found in [SynapseClient](./src/lib/utils/SynapseClient.ts)
