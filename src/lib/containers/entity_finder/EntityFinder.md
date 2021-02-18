```jsx
<EntityFinder 
  sessionToken={sessionToken}
  initialContainerId={"syn24610451"}
  selectMultiple={true}
  onConfirm={(selectedEntityIds) => {console.log(selectedEntityIds)}}
/>
```

### TODO:

* Bugs
  * Selecting a search result causes a re-render
  * Selecting anything in the details view re-renders the tree (based on logs)
  * Undoubtedly more
* Pagination
* Search
  * Text search ✅
  * Entering a synId ✅
  * Placeholder before search begins
* Space for radio/checkbox
* Tooltip when hovering over project name
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
* Make version selection more intuitive/predictable
* Iconography for tables, views
  * Change colors of icons when selected
* Error Handling
* Lots of styling
* Optimization/tests/code cleanup
* Much more
