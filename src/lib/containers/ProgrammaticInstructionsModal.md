```jsx
const [isOpen, setIsOpen] = React.useState(false)
;<div className="bootstrap-4-backport">
  <button className="btn btn-default" onClick={() => setIsOpen(true)}>
    Show programmatic instructions
  </button>
  {isOpen && (
    <ProgrammaticInstructionsModal
      show={isOpen}
      onClose={() => setIsOpen(false)}
      title="Programmatic Instructions"
      cliNotes={<>Can provide Synapse CLI specific notes</>}
      cliCode="Synapse CLI client code"
      rNotes={<>Can provide Synapse R Client specific notes</>}
      rCode="Synapse R client code"
      pythonNotes={<>Can provide Synapse Python Client specific notes</>}
      pythonCode="Synapse Python client code"
      helpUrl="https://help.synapse.org"
      helpMarkdown="Option to show a _HelpPopover_ in the title bar with a link to the docs site"
    />
  )}
</div>
```
