Contribution Form
```jsx
<SynapseContextConsumer>
    {synapseContext => 
        <SynapseFormWrapper
        formSchemaEntityId="syn20692910"
        fileNamePath="study.submission_name"
        formUiSchemaEntityId="syn20692911"
        formNavSchemaEntityId="syn20968007"
        isWizardMode={true}
        token={synapseContext.accessToken}
        formTitle="Your Contribution Request"
        formClass="contribution-request"
        />
    }
</SynapseContextConsumer>
```
