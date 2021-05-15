```jsx
<>
  <FileUpload 
    token={accessToken} 
    uploadCallback={(resp) => {
      if (resp.success) {
        document.getElementById("demo-upload-file").textContent = `Your file "${resp.resp.fileName}" upload is successful!`
      } else {
        document.getElementById("demo-upload-file").textContent = `Your file upload is unsuccessful!`
      }
    }}
  /><span id={"demo-upload-file"} style={{marginLeft: '2rem'}}></span>
</>
```