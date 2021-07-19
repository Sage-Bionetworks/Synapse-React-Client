
```jsx
const [entityOrSchemaId, setEntityOrSchemaId] = React.useState("")
const [liveValidate, setLiveValidate] = React.useState(false)
const [useLargeTestSchema, setUseLargeTestSchema] = React.useState(false)

let isEntityId;
let entityId = undefined;
let schemaId = undefined;

if (entityOrSchemaId.startsWith('syn')) {
    entityId = entityOrSchemaId;
    schemaId = undefined;
} else {
    entityId = undefined;
    schemaId = entityOrSchemaId;
}


return (<div>
    <label>Enter entity ID or schema ID</label>
    <input className="form-control" value={entityOrSchemaId} onChange={e => setEntityOrSchemaId(e.target.value)} style={{ width: '500px', marginBottom: '5px'}} />
    <Checkbox
    label="Live Validation?"
    checked={liveValidate}
    onChange={(checked) => setLiveValidate(checked)}
    ></Checkbox>

    <hr />
    {entityOrSchemaId && <SchemaDrivenAnnotationEditor key={`${entityOrSchemaId}-${liveValidate}-${useLargeTestSchema}`} entityId={entityId} schemaId={schemaId} liveValidate={liveValidate} useTestSchema={useLargeTestSchema} />}
</div>)
```