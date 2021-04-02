
View "Props & Methods" above for full configurability.

Regular two-pane Entity Finder with multi-select

```jsx
<EntityFinder 
  sessionToken={sessionToken}
  treeOnly={false}
  initialScope={"Current Project"}
  projectId={"syn24610451"}
  initialContainerId={"syn24610451"}
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
  initialContainerId={"syn24610451"}
  selectMultiple={false}
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
  visibleTypesInTree={[
    'project',
    'table',
    'folder',
    'entityview',
    'submissionview',
  ]}
  showVersionSelection={true}
  onSelectedChange={(selected) => {console.log("Selection changed:", selected)}}
  selectableTypes={[ 
    'project',
    'folder',
]}
/>
```
