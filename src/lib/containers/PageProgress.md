```jsx
      <PageProgress
        barColor={ "green" }
        barPercent={ 75 }
        backBtnLabel={ "Back"}
        backBtnCallback={ ()=>{ console.log("you just clicked back button") } }
        forwardBtnLabel={ "Next" }
        forwardBtnCallback={ ()=>{ console.log("When forwardBtnActive is set to true, you will see this message") } }
        forwardBtnActive={ false }
      />
```