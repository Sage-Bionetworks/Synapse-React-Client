Hard-coded markdown:
```jsx
    <MarkdownSynapse token={sessionToken} markdown='*markdown* given to the **component**' /> 
```
Or driven by a wiki page:
```jsx
  <MarkdownSynapse token={sessionToken} ownerId='syn12666371' wikiId='585317' />
```
Supports videos, images, and more.  No need to provide the wiki page ID for most entities:
```jsx
    <MarkdownSynapse token={sessionToken} ownerId='syn18142975'  />
```

### Props

| Props         | Type       | Explanation                                          |
| --------------| -----------|------------------------------------------------------|
| token?        | string     | auth token from synapse                              |
| ownerId       | string     | ownerId for the synapse page                         |
| wikiId        | string     | wikiId for the synapse page                          |
| markdown      | string     | markdown that is to be rendered                      |
| renderInline? | boolean    | whether the markdown should be displayed inline      |
| objectType?   | ObjectType | the type of object the Synapse Wiki is attached to   |
