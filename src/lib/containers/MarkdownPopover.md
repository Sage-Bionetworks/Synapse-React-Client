No action:

```jsx
<MarkdownPopover
  contentProps={{ markdown: 'Supports _rendering_ basic **Markdown**.' }}
  placement="bottom"
>
  <ReactBootstrap.Button variant="primary-500">
    Button with Popover
  </ReactBootstrap.Button>
</MarkdownPopover>
```

With action:

```jsx
const [show, setShow] = React.useState(false)
return (
  <div>
    <MarkdownPopover
      contentProps={{
        markdown:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis.',
      }}
      actionButton={{
        content: 'Show/Hide Hidden Text',
        onClick: () => setShow(current => !current),
      }}
      placement="right"
    >
      <ReactBootstrap.Button variant="secondary">
        Button with Popover
      </ReactBootstrap.Button>
    </MarkdownPopover>
    <div style={{ display: show ? 'block' : 'none' }}>This was hidden!</div>
  </div>
)
```

It uses MarkdownSynapse, so you can even show a wikipage (be careful about the amount of content!):

```jsx
<MarkdownPopover
  contentProps={{
    ownerId: 'syn12666371',
    wikiId: '585317',
  }}
  showCloseButton={false}
  placement="right"
>
  <ReactBootstrap.Button variant="gray">
    Button with Popover
  </ReactBootstrap.Button>
</MarkdownPopover>
```
