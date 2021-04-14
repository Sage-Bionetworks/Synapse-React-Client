
View "Props & Methods" above for full configurability.

Regular two-pane Entity Finder with multi-select

```jsx
<EntityFinder 
  sessionToken={sessionToken}
  treeOnly={false}
  initialScope={"Current Project"}
  projectId={"syn23567475"}
  initialContainer={"syn24183903"}
  selectMultiple={true}
  visibleTypesInList={[
    'project',
    'table',
    'folder',
    'file',
    'link',
    'entityview',
    'submissionview',
    'dockerrepo',
  ]}
  showVersionSelection={true}
  onSelectedChange={(selected) => {console.log("Selection changed:", selected)}}
  selectableTypes={[ 
    'project',
    'table',
    'folder',
    'file',
    'link',
    'entityview',
    'submissionview',
    'dockerrepo',
]}
/>
```

One-pane entity finder with single select: 

```jsx
<EntityFinder 
  sessionToken={sessionToken}
  treeOnly={true}
  initialScope={"Current Project"}
  projectId={"syn23567475"}
  initialContainer={"syn24183903"}
  selectMultiple={false}
  visibleTypesInTree={[
    'project',
    'folder',
    'table',
  ]}
  showVersionSelection={true}
  onSelectedChange={(selected) => {console.log("Selection changed:", selected)}}
  selectableTypes={[ 
    'project',
    'folder',
]}
/>
```
