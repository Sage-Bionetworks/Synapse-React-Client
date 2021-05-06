Configured to show cards:
```jsx
<QueryWrapperPlotNav token={accessToken}  
  rgbIndex={1}
  name='Initiatives'
  sql='SELECT * from syn24189696'
  limit={5}
  defaultShowFacetVisualization={false}
  shouldDeepLink={true}
  facetsToPlot={['fundingAgency']}
  searchConfiguration={{
    searchable: ['initiative'],
  }}

  cardConfiguration={{
    type: GENERIC_CARD,
    titleLinkConfig: {
        matchColumnName: 'initiative',
        isMarkdown: false,
        baseURL: 'Explore/Initiatives/DetailsPage',
        URLColumnName: 'Initiative',
    },
    genericCardSchema: {
      type: 'Initiative',
      title: 'initiative',
      description: 'summary',
      link: 'website',
      imageFileHandleColumnName: 'image',
      
      // secondaryLabels: [
      //   'fundingAgency',
      //   'abbreviation',
      // ],
    },
    ctaLinkConfig: {
      text: 'Visit Website',
      link: 'website'
    }
  }}
/>
```

Configured to show a table:
```jsx
<QueryWrapperPlotNav token={accessToken}
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
      searchable: ['assay','name','consortium', 'study', 'dataType', 'tissue'],
    }}
    visibleColumnCount={10}
    facetsToPlot={['assay', 'study', 'dataType', 'tissue']}
    rgbIndex={1}
    name='Table Demo'
    sqlOperator='='
    sql='SELECT * FROM syn11346063'
  />
```