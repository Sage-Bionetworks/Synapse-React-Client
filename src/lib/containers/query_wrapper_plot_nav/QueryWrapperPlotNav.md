

Configured to show a table:

```jsx
<QueryWrapperPlotNav
  tableConfiguration={{
    showAccessColumn: true,
    showDownloadColumn: true,
  }}
  visibleColumnCount={30}
  rgbIndex={1}
  name="Table Demo"
  sql="SELECT * from syn27370719"
  downloadCartPageUrl="#/Other%20Components?id=downloadcartpage"
  hideSqlEditorControl={false}
/>
```

Configured to show a dataset:

```jsx
<QueryWrapperPlotNav
  tableConfiguration={{
    showAccessColumn: true,
    showDownloadColumn: true,
  }}
  rgbIndex={1}
  name="Dataset Demo"
  sqlOperator="="
  sql="SELECT * FROM syn26302617"
  downloadCartPageUrl="#/Other%20Components?id=downloadcartpage"
  hideSqlEditorControl={false}
  shouldDeepLink={false}
/>
```
