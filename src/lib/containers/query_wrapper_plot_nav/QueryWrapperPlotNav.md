Configured to show cards:
```jsx
<QueryWrapperPlotNav token={sessionToken}  
  rgbIndex={1}
  name='Computational Tools'
  sql='SELECT * from syn20337467 limit 3'
  shouldDeepLink={true}
  facetsToPlot={['grant', 'program', 'softwareType']}
  searchConfiguration={{
    searchable: [
      'contributor',
      'name',
      'grant',
      'program',
      'softwareType',
      'summary',          
    ],
  }}
  cardConfiguration={{
    type: GENERIC_CARD,
    genericCardSchema: {
      type: COMPUTATIONAL,
      title: 'name',
      description: 'summary',
      subTitle: 'softwareType',
      secondaryLabels: ['contributor', 'program', 'grant', 'documentation'],
      link: 'url',  
    },
    labelLinkConfig: [{
      isMarkdown: false,
      matchColumnName: 'grant',
      URLColumnName: 'Grant Number',
      baseURL: 'Explore/Projects/DetailsPage',
    }]
  }}
/>
```

Configured to show a table:
```jsx
<QueryWrapperPlotNav token={sessionToken}
  tableConfiguration={{
      showAccessColumn: true,
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
      searchable: ['assay','name','consortium'],
    }}
    visibleColumnCount={10}
    facetsToPlot={['assay']}
    rgbIndex={1}
    name='Table Demo'
    sqlOperator='='
    sql='SELECT assay, id FROM syn11346063 limit 1000'
  />
```
