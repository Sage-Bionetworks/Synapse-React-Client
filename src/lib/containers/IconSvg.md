```jsx
<h4>
  Some Examples:
</h4>
<p>
  Small pink data icon with no padding<IconSvg
      options={{
        icon: 'data',
        color: '#e61899',
      }}
  />
</p>
<p>
  Small green data icon with left padding<IconSvg
      options={{
        icon: 'data',
        color: '#28A745',
        padding: 'left'
      }}
  />
</p>
<p>
  <IconSvg
      options={{
        icon: 'data',
        color: '#28A745',
        padding: 'right'
      }}
    />Small green data icon with right padding
</p>

<h4>
  Available MUI or Custom Icons with MUI Support:
</h4>
<table>
  <tr>
    <th>Name</th>
    <th>Icon</th>
  </tr>
  {
    [
      'check',
      'chromatin',
      'clinical',
      'data',
      'dataLocked',
      'geneExpression',
      'geneVariants',
      'imaging',
      'kinomics',
      'lineGraph',
      'login',
      'other',
      'packagableFile',
      'photoCamera',
      'proteomics',
      'rat',
      'reload',
    ].map(el => {
      return <tr><td>{el}</td> <td> <IconSvg options={{ icon: el, color: '#ff7700', padding: 'left' }}/></td></tr>
    })
  }
</table>



```
