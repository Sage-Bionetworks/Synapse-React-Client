```jsx
<p>
  Small pink data icon with no padding<IconSvg
      options={{
        icon: 'data',
        color: '#e61899',
        size: 'sm',
      }}
  />
</p>
<p>
  Small green data icon with left padding<IconSvg
      options={{
        icon: 'data',
        color: '#28A745',
        size: 'sm',
        padding: 'left'
      }}
  />
</p>
<p>
  <IconSvg
      options={{
        icon: 'data',
        color: '#28A745',
        size: 'sm',
        padding: 'right'
      }}
    />Small green data icon with right padding
</p>

<p>Available sizes: only sm (14px in height) for now.  </p>
<p>
  Available icons (only 4 for now): 
  <table>
    <tr>
      <th>Name</th>
      <td>Icon</td>
    </tr>
    <tr>
      <td>data</td>
      <td>
        <IconSvg options={{ icon: 'data', color: '#BBBBBC', size: 'sm', padding: 'left' }}/>
      </td>
    </tr>
    <tr>
      <td>dataLocked</td>
      <td>
        <IconSvg options={{ icon: 'dataLocked', color: '#BBBBBC', size: 'sm', padding: 'left' }}/>
      </td>
    </tr>
    <tr>
      <td>reload</td>
      <td>
        <IconSvg options={{ icon: 'reload', color: '#BBBBBC', size: 'sm', padding: 'left' }}/>
      </td>
    </tr>
    <tr>
      <td>checkMark</td>
      <td>
        <IconSvg options={{ icon: 'checkMark', color: '#BBBBBC', size: 'sm', padding: 'left' }}/>
      </td>
    </tr>
  </table>
</p>


```