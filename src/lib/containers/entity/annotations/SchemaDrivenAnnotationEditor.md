
```jsx
const [entityId, setEntityId] = React.useState(null)

return (<div>
    <label>Enter entity ID to open editor</label>
    <input className="form-control" value={entityId} onChange={e => setEntityId(e.target.value)} style={{ width: '500px', marginBottom: '5px'}} />
    <hr />
    {entityId && <SchemaDrivenAnnotationEditor key={entityId} entityId={entityId} />}
</div>)
```