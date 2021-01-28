```jsx
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

<p>Available sizes: only sm (14px in height) for now.  </p>
<p>
  Available icons (only 4 for now):
</p>
<table>
<tr>
  <th>Name</th>
  <td>Icon</td>
</tr>
<tr>
  <td>data</td>
  <td>
    <IconSvg options={{ icon: 'data', color: '#BBBBBC', padding: 'left' }}/>
  </td>
</tr>
<tr>
  <td>dataLocked</td>
  <td>
    <IconSvg options={{ icon: 'dataLocked', color: '#BBBBBC', padding: 'left' }}/>
  </td>
</tr>
<tr>
  <td>reload</td>
  <td>
    <IconSvg options={{ icon: 'reload', color: '#BBBBBC', padding: 'left' }}/>
  </td>
</tr>
<tr>
  <td>checkMark</td>
  <td>
    <IconSvg options={{ icon: 'check', color: '#BBBBBC', padding: 'left' }}/>
  </td>
</tr>
</table>



```