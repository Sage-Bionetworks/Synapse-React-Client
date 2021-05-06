```jsx
<>
  <FileUpload 
    token={sessionToken} 
    uploadCallback={(resp) => {
      document.getElementById("demo-upload-file").textContent = "Your upload is successful!"
    }}
  /><span id={"demo-upload-file"} style={{marginLeft: '2rem'}}></span>
</>
```