Standard generic card renderer:
```jsx
<CardContainerLogic token={sessionToken}  
  rgbIndex={1}
  name='Publications'
  sql="SELECT * FROM syn22095937.4 order by authors asc limit 2"
  type={GENERIC_CARD}
  genericCardSchema={{
    type: PUBLICATION,
    title: 'title',
    description: 'abstract',
    subTitle: 'authors',
    secondaryLabels: ['year', 'journal', 'study', 'grants', 'DOI'],
  }}
/>
```

Empty results:
```jsx
<CardContainerLogic token={sessionToken}  
  rgbIndex={1}
  name='Publications'
  sql="SELECT * FROM syn22095937.4 WHERE study='not a study value'"
  type={GENERIC_CARD}
  genericCardSchema={{
    type: PUBLICATION,
    title: 'title',
    description: 'abstract',
    subTitle: 'authors',
    secondaryLabels: ['year', 'journal', 'study', 'grants', 'DOI'],
  }}
/>
```