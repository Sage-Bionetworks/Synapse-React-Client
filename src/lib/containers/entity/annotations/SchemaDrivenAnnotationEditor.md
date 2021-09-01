```jsx
const [entityOrSchemaId, setEntityOrSchemaId] = React.useState('')
const [liveValidate, setLiveValidate] = React.useState(true)
const [showToast, setShowToast] = React.useState(false)

let isEntityId
let entityId = undefined
let schemaId = undefined

if (entityOrSchemaId.match(/^(syn\d+)(?:\.(\d+))?$/)) {
  entityId = entityOrSchemaId
  schemaId = undefined
} else {
  entityId = undefined
  schemaId = entityOrSchemaId
}

return (
  <div className="bootstrap-4-backport">
    <label>Enter entity ID or schema ID</label>
    <input
      className="form-control"
      value={entityOrSchemaId}
      onChange={e => setEntityOrSchemaId(e.target.value)}
      style={{ width: '500px', marginBottom: '5px' }}
    />
    <Checkbox
      id="liveValidation"
      label="Live Validation?"
      checked={liveValidate}
      onChange={checked => setLiveValidate(checked)}
    />

    <hr />
    {entityOrSchemaId && (
      <SchemaDrivenAnnotationEditor
        key={`${entityOrSchemaId}-${liveValidate}`}
        entityId={entityId}
        schemaId={schemaId}
        liveValidate={liveValidate}
        onSuccess={() => {
          displayToast('Annotations successfully updated.', 'success')
        }}
      />
    )}
  </div>
)
```
