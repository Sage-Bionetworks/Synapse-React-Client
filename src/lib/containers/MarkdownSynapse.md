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