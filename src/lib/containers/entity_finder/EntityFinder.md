```jsx
<EntityFinder 
  sessionToken={sessionToken}
  initialContainerId={"syn24610451"}
  selectMultiple={true}
  showTypes={[
    'project',
    'table',
    'folder',
    'file',
    'link',
    'entityview',
    'dockerrepo',
  ]}
  disableSelectionForTypes={[
  
  ]}
/>
```

### TODO:

* Tooltip when hovering over project name
* Iconography for tables, views
  * Change colors of icons when selected  
* Error Handling
* Disable caching/don't use `react-query`
* Optimization/tests/code cleanup
* Pagination ✅
* Search ✅
  * Text search ✅
  * Entering a synId ✅
  * Placeholder before search begins 🟡 (need to use fancy asset)
* Space for radio/checkbox ✅
* Placeholders for no results
* Version column/select ✅
  * Hide version column/select for unversionable entities
    * e.g. folders still show versions because the backend returns them
* "autoexpand" to current location given an input selection ✅
* Dropdown options
  * Current Project ✅
  * All Projects ✅
  * Favorites ✅
  * Clear/reset details view when switching between options ✅
* Sorting columns in the detailed view ✅
* Make version selection more intuitive/predictable 🟡 (needs feedback)
