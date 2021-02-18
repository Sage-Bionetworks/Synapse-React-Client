```jsx
<EntityFinder 
  sessionToken={sessionToken}
  initialContainerId={"syn24610451"}
  selectMultiple={true}
  onConfirm={(selectedEntityIds) => {console.log(selectedEntityIds)}}
/>
```

### TODO:

* Pagination
* Search
  * Text search ✅
  * Entering a synId ✅
  * Placeholder before search begins
* Space for radio/checkbox
* Placeholders for no results
* Version column/select ✅
  * Hide version column/select for unversionable entities
    * e.g. folders still show versions because the backend returns them
* "autoexpand" to current location given an input selection ✅
* Dropdown options
  * Current Project ✅
  * All Projects ✅
  * Favorites ✅
  * Clear/reset details view when switching between options
* Sorting columns in the detailed view ✅
* Iconography for tables, views
  * Change colors of icons when selected
* Lots of styling
* Optimization/tests/code cleanup
* Much more
