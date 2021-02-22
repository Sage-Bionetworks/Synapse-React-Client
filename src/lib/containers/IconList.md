```jsx

<h4>Example with no color set, default to current color</h4>
{
  <IconList iconConfigs={
    {
      'genomicVariants': { icon: 'gene1' },
      'geneExpression': { icon: 'gene2'},
      'image': { icon: 'imaging' },
      'drugCombinationScreen': { icon: 'rat' },
      'reload': { icon: 'reload' },
      'check': { icon: 'check' },
      'proteomics': { icon: 'proteomics' },
      'kinomics': { icon: 'kinomics' },
    }
  } 
  iconNames={["reload", "drugCombinationScreen", "proteomics", "check"]}
  />
}
<br></br>
<br></br>
<h4>Example with custom colors</h4>
{
  <IconList iconConfigs={
    {
      'genomicVariants': { icon: 'gene1', color: '#ff0000' },
      'geneExpression': { icon: 'gene2', color: 'orange'},
      'image': { icon: 'imaging', color: 'yellow'},
      'drugCombinationScreen': { icon: 'rat', color: '#00FF00' },
      'reload': { icon: 'reload', color: 'blue' },
      'check': { icon: 'check', 'color': '#2E2B5F' },
      'kinomics': { icon: 'kinomics', 'color': '#8B00FF' },
    }
  }
  iconNames={["image", "genomicVariants", "geneExpression", "drugCombinationScreen", "reload", "check", "kinomics"]}
  />
}
<br></br>
<br></br>
<h4>Example using theme color</h4>
{
  <IconList iconConfigs={
    {
      'drugCombinationScreen': { icon: 'rat' },
      'geneExpression': { icon: 'geneExpression' },
    }
  }
  useTheme={true}
  iconNames={["drugCombinationScreen", "geneExpression"]}
  />
}
<br></br>
<br></br>
<h4>Example using theme color with circle background (only enabled when theme color is set) </h4>
{
  <IconList iconConfigs={
    {
      'drugCombinationScreen': { icon: 'rat' },
      'geneVariants': { icon: 'geneVariants' },
    }
  }
  useTheme={true}
  useBackground={true}
  iconNames={["drugCombinationScreen", "geneVariants"]}
  />
}
<br></br>
<br></br>
<h4>Example with tooltip</h4>
{
  <IconList iconConfigs={
    {
      'drugCombinationScreen': { icon: 'rat', label: 'I am a mouse!' },
      'geneExpression': { icon: 'geneExpression', label: ':-D'},
    }
  } 
  iconNames={["drugCombinationScreen", "geneExpression"]}
  />
}
```