```jsx
{evaluation = {
  "id": "9614690",
  "etag": "6f8aa977-527e-4b2f-9d87-beab2db99503",
  "name": "Sample Evaluation Queue",
  "description": "This is a sample Evaluation Queue",
  "ownerId": "3345868",
  "createdOn": "2021-01-05T00:41:11.670Z",
  "contentSource": "syn23679309",
  "submissionInstructionsMessage": "Do a barrel roll",
  "submissionReceiptMessage": "We received your submission"
}}

<EvaluationCard 
  evaluation={evaluation} utc={true} 
  onEdit={() => alert("Edit clicked")} 
  onModifyAccess={() => alert("Modify Access clicked")} 
  onDelete={() => alert("Delete clicked")} 
  onSubmit={() => alert("Submit clicked")} 
/>

```