```jsx
{evaluation = {
  "id": "9614660",
  "etag": "b2fa1a4f-6d80-4a0f-b807-d2d927a6266f",
  "name": "Test only",
  "description": "",
  "ownerId": "1131050",
  "createdOn": "2020-11-14T05:33:52.996Z",
  "contentSource": "syn5585645",
  "status": "OPEN",
  "submissionInstructionsMessage": "Submit, or not",
  "submissionReceiptMessage": "Thanks"
}}

<EvaluationCard 
  sessionToken={sessionToken} 
  evaluation={evaluation} utc={true} 
  onEdit={() => alert("Edit clicked")} 
  onModifyAccess={() => alert("Modify Access clicked")} 
  onDelete={() => alert("Delete clicked")} 
  onSubmit={() => alert("Submit clicked")} 
/>

```