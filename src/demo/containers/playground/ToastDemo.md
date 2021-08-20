Configure and push a toast message using the settings below.

```js
const [variant, setVariant] = React.useState('info')

const [title, setTitle] = React.useState('')
const [description, setDescription] = React.useState('')
const [autoClose, setAutoClose] = React.useState(0)
const [buttonText, setButtonText] = React.useState('')
const [linkText, setLinkText] = React.useState('')

function fireToast() {
  displayToast(
    variant,
    title,
    description,
    autoClose,
    buttonText ? buttonText : undefined,
    () => {},
    linkText ? linkText : undefined,
    '#',
  )
}
return (
  <div className="bootstrap-4-backport">
    <ReactBootstrap.FormLabel>Alert Variant</ReactBootstrap.FormLabel>
    <RadioGroup
      id="toast-demo-variant"
      options={[
        { label: 'Info', value: 'info' },
        { label: 'Success', value: 'success' },
        { label: 'Warning', value: 'warning' },
        { label: 'Danger', value: 'danger' },
      ]}
      value={variant}
      onChange={value => setVariant(value)}
    />
    <ReactBootstrap.FormLabel>Title</ReactBootstrap.FormLabel>
    <ReactBootstrap.FormControl
      value={title}
      onChange={e => setTitle(e.target.value)}
    />
    <ReactBootstrap.FormLabel>Description</ReactBootstrap.FormLabel>
    <ReactBootstrap.FormControl
      value={description}
      onChange={e => setDescription(e.target.value)}
    />
    <ReactBootstrap.FormLabel>Auto-close (ms)</ReactBootstrap.FormLabel>
    <ReactBootstrap.FormControl
      type="number"
      value={autoClose}
      onChange={e => setAutoClose(Number.parseInt(e.target.value))}
    />
    <ReactBootstrap.FormLabel>Optional Button Text</ReactBootstrap.FormLabel>
    <ReactBootstrap.FormControl
      value={buttonText}
      onChange={e => setButtonText(e.target.value)}
    />
    <ReactBootstrap.FormLabel>Optional Link Text</ReactBootstrap.FormLabel>
    <ReactBootstrap.FormControl
      value={linkText}
      onChange={e => setLinkText(e.target.value)}
    />

    <ReactBootstrap.Button variant="primary-500" onClick={fireToast}>
      Push toast message
    </ReactBootstrap.Button>
  </div>
)
```

Note to developers: `displayToast` won't work unless you've created a SynapseToastContainer and placed it somewhere in your webpage. We don't configure one in this demo because the SynapseToastContainer has been configured for the entire Styleguide.
