Configured to show cards:
```jsx
<QueryWrapperPlotNav
  rgbIndex={1}
  name='Tools'
  sql='SELECT * FROM syn26438037'
  limit={5}
  defaultShowFacetVisualization={false}
  shouldDeepLink={true}
  cardConfiguration={{
    type: GENERIC_CARD,
    titleLinkConfig: {
      isMarkdown: false,
      baseURL: 'Explore/Tools/DetailsPage',
      URLColumnName: 'resourceId',
      matchColumnName: 'resourceId',
      overrideLinkURLColumnName: 'biobankURL',
    },
    secondaryLabelLimit: 4,
    genericCardSchema: {
      type: EXPERIMENTAL_TOOL,
      title: 'resourceName',
      subTitle: 'resourceType',
      description: 'description',
      secondaryLabels: [
        'rrid',
        'synonyms',
        'cellLineCategory',
        'cellLineDisease',
        'modelofManifestation',
        'backgroundStrain',
        'backgroundSubstrain',
        'animalModelDisease',
        'animalModelOfManifestation',
        'targetAntigen',
        'reactiveSpecies',
        'hostOrganism',
        'specimenTissueType',
        'specimenPreparationMethod',
        'diseaseType',
        'tumorType',
        'specimenFormat',
        'specimenType'
      ],
    },
  }}
/>
```

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
      searchable: ['assay','name','consortium', 'study', 'dataType', 'tissue'],
    }}
    visibleColumnCount={10}
    facetsToPlot={['assay', 'study', 'dataType', 'tissue']}
    rgbIndex={1}
    name='Table Demo'
    sqlOperator='='
    sql='SELECT name, assay, study, dataType, tissue, consortium FROM syn11346063.14'
    downloadCartPageUrl='#/Other%20Components?id=downloadcartpage'
  />
```