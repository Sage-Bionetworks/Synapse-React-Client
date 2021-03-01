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
  selectableVersions={true}
  onSelectedChange={(selected) => {console.log("Selection changed:", selected)}}
  disableSelectionForTypes={[]}
/>
```

### TODO:

* Iconography for tables, views 🟡 (Update to icons in mockup? Should probably try to change in SWC as well)
* Error Handling ❌
* Pagination in Tree View ❌
* Make version selection more intuitive 🟡 (needs feedback)
  * Issue - picking "no version" on a versionable entity
    * Example case: pointing to a FileEntity containing an image in a Wiki. User expects image in wiki to update when the entity is updated.
* Tweak default cache settings for `react-query` 🟡
* Tooltip when hovering over project name ✅
* Optimization/tests/code cleanup
* Pagination ✅
* Search ✅
  * Text search ✅
  * Entering a synId ✅
  * Placeholder before search begins 🟡 (Should use fancy asset)
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
