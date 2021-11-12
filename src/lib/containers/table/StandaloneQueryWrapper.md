Configured to show a Stacked Bar Chart:
```jsx
<StandaloneQueryWrapper
  rgbIndex={7}
  unitDescription='Tools'
  link='Explore/Computational Tools'
  linkText='Explore Computational Tools'
  facet='softwareType'
  sql='SELECT * FROM syn20337467'
/>
```

Configured to show a table:
```jsx
<StandaloneQueryWrapper
  title='Data Files'
  sql={`SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10`}
/>
```

Configured to show a table with top level controls:
```jsx
<StandaloneQueryWrapper
  title='Data Files'
  name='Top Level Controls demo'
  hideDownload={false}
  sql={`SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10`}
  showTopLevelControls={true}
/>
```