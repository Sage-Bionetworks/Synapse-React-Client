```jsx
const variants = [
  'headline1',
  'headline2',
  'headline3',
  'body1',
  'body2',
  'breadcrumb1',
  'breadcrumb2',
  'smallText1',
  'smallText2',
  'smallLink',
  'label',
  'buttonLink',
  'hintText',
  'sectionTitle',
  'subsectionHeader',
]
variants.map(variant => {
  return <Typography variant={variant}>{variant}</Typography>
})
```
