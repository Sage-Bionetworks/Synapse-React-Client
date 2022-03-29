Configured to show a table:

```jsx
<StandaloneQueryWrapper
  title="Data Files"
  sql={`SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10`}
/>
```

Configured to show a table with top level controls:

```jsx
<StandaloneQueryWrapper
  title="Data Files"
  name="Top Level Controls demo"
  hideDownload={false}
  sql={`SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10`}
  showTopLevelControls={true}
/>
```
