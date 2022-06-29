const d=window.React.useState,l=o=>{const[s,i]=d(o);return{list:s,handleListChange:e=>t=>{const n=[...s];n[e]=t,i(n)},handleListRemove:e=>()=>{const t=s.filter((n,a)=>e!==a);i(t)},appendToList:(...e)=>{const t=[...s];t.push(...e),i(t)},setList:i}};export{l as u};
//# sourceMappingURL=useListState.7f5a3e64.js.map
