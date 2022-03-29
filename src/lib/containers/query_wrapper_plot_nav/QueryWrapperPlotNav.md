Configured to show cards:

Configured to show a table:

```jsx
<QueryWrapperPlotNav
  tableConfiguration={{
    showAccessColumn: true,
    showDownloadColumn: true,
    columnLinks: [
      {
        matchColumnName: 'study',
        isMarkdown: false,
        baseURL: 'Explore/Studies/DetailsPage',
        URLColumnName: 'Study_Name',
        wrapValueWithParens: true,
      },
    ],
  }}
  searchConfiguration={{
    searchable: ['assay', 'name', 'consortium', 'study', 'dataType', 'tissue'],
  }}
  visibleColumnCount={10}
  facetsToPlot={['assay', 'study', 'dataType', 'tissue']}
  rgbIndex={1}
  name="Table Demo"
  sqlOperator="="
  sql="SELECT name, assay, study, dataType, tissue, consortium FROM syn11346063.14"
  downloadCartPageUrl="#/Other%20Components?id=downloadcartpage"
  hideSqlEditorControl={false}
/>
<ReactQueryDevtoolsPanel />
```

<!--
A Dataset:

```jsx
<QueryWrapperPlotNav
  tableConfiguration={{
    showAccessColumn: true,
    showDownloadColumn: true,
    columnLinks: [],
  }}
  // searchConfiguration={{
  //   searchable: ['assay', 'name', 'consortium', 'study', 'dataType', 'tissue'],
  // }}
  visibleColumnCount={10}
  // facetsToPlot={['assay', 'study', 'dataType', 'tissue']}
  rgbIndex={1}
  name="Dataset Demo"
  sqlOperator="="
  sql="SELECT * FROM syn26302617"
  downloadCartPageUrl="#/Other%20Components?id=downloadcartpage"
  hideSqlEditorControl={false}
/>
``` -->
