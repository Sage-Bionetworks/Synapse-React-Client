```jsx
return (
  <SubmissionPage
    submissionId={4}
    onRejectClicked={() => {
      displayToast(
        'Reject clicked -- SWC will show the existing dialog to handle the rest',
        'info',
      )
    }}
  />
)
```
