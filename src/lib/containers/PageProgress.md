```jsx
const [percent, setPercent] = React.useState(50);

<PageProgress
  barColor={ "green" }
  barPercent={ percent }
  backBtnLabel={ "Back"}
  backBtnCallback={ ()=>{ setPercent(percent-25) } }
  forwardBtnLabel={ "Next" }
  forwardBtnCallback={ ()=>{ setPercent(percent+25) } }
  forwardBtnActive={ percent < 100 }
/>
```