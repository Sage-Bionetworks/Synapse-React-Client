
```jsx
      <UpsetPlot
        sql={"SELECT unnest(individualID), assay FROM syn20821313 WHERE individualID is not null GROUP BY assay, unnest(individualID)"}
        rgbIndex={0}
        maxBarCount={20}
        setName='Individuals (#) per Assay'
        combinationName='Individuals (#)'
        summaryLink='/Synapse-React-Client/Playground/UpsetPlotDemo'
        summaryLinkText='EXPLORE ALL OF SOMETHING'
      />
```