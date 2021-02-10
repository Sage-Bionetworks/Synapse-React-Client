```jsx
<EntityFinder 
  sessionToken={sessionToken}
  initialContainerId={"syn24610451"}
  selectMultiple={true}
  onConfirm={(selectedEntityIds) => {console.log(selectedEntityIds)}}
/>
```

### TODO:

* Search
  * Text search
  * Entering a synId
* Space for radio/checkbox (if desired?)
* Version column/select
* "autoexpand" to current location given an input selection
* "Current Project" dropdown options
  * All
  * Shared With Me
  * Shared By Me
  * Favorites (?)
* Sorting columns in the detailed view
* Filtering columns in the detailed view (?)
* Lots of styling
* Optimization/tests/code cleanup
* Much more
