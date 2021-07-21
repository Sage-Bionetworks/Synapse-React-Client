
```jsx
const [entityOrSchemaId, setEntityOrSchemaId] = React.useState("")
const [liveValidate, setLiveValidate] = React.useState(false)
const [useLargeTestSchema, setUseLargeTestSchema] = React.useState(false)
const [showToast, setShowToast] = React.useState(false)

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


return (<div className="bootstrap-4-backport">
    <label>Enter entity ID or schema ID</label>
    <input className="form-control" value={entityOrSchemaId} onChange={e => setEntityOrSchemaId(e.target.value)} style={{ width: '500px', marginBottom: '5px'}} />
    <ReactBootstrap.Toast onClose={() => setShowToast(false)} style={{
      position: 'absolute',
      bottom: 0,
      right: 0,
    }} show={showToast} delay={10000} autohide>
        <ReactBootstrap.Toast.Body>Annotations successfully updated.</ReactBootstrap.Toast.Body>
    </ReactBootstrap.Toast>
    <Checkbox
    label="Live Validation?"
    checked={liveValidate}
    onChange={(checked) => setLiveValidate(checked)}
    ></Checkbox>

    <hr />
    {entityOrSchemaId && <SchemaDrivenAnnotationEditor key={`${entityOrSchemaId}-${liveValidate}-${useLargeTestSchema}`} entityId={entityId} schemaId={schemaId} liveValidate={liveValidate} useTestSchema={useLargeTestSchema}     onSuccess={() => { 
        setShowToast(true)
         }}
 />}
</div>)
```