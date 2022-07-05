const o=localStorage.getItem("force-display-original-column-names")==="true",u=(r,e)=>!r||o?r:e!=null&&e[r]?e[r]:r.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b([A-Z]+)([A-Z])([a-z])/,"$1 $2$3").replace(/^./,n=>n.toUpperCase());export{u};
//# sourceMappingURL=unCamelCase.d070537b.js.map
