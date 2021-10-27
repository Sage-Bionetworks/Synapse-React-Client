Standard generic card renderer:
```jsx
<SynapseContextConsumer>{(synapseContext) => {
  return (
  <CardContainerLogic
    token={synapseContext.accessToken}
    rgbIndex={1}
    name='Publications'
    sql="SELECT * FROM syn22095937.4 order by authors asc"
    limit={2}
    type={GENERIC_CARD}
    genericCardSchema={{
      type: PUBLICATION,
      title: 'title',
      description: 'abstract',
      subTitle: 'authors',
      secondaryLabels: ['year', 'journal', 'study', 'grants', 'DOI'],
    }}
  />)}}
</SynapseContextConsumer>
```

Empty results:
```jsx
<CardContainerLogic  
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

Observation_card renderer:
```jsx
<SynapseContextConsumer>{(synapseContext) => {
  return (
  <CardContainerLogic
    token={synapseContext.accessToken}
    rgbIndex={1}
    name='Publications'
    sql={`SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NULL LIMIT 3`}
    type={OBSERVATION_CARD}
  />)}}
</SynapseContextConsumer>
```
