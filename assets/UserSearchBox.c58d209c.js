import{_ as $}from"./objectWithoutPropertiesLoose.5e7699d1.js";import{_ as O,a as $e}from"./withStyles.c4d286cc.js";import{_ as pe}from"./toConsumableArray.c4898ee4.js";import{p as o}from"./index.35ce73ec.js";import{r as se,j as T,F as Le,a as ke}from"./jsx-runtime.9b9f5ec2.js";import"./index.582f6d03.js";import{c4 as We}from"./index.65b6889e.js";import{U as je}from"./UserOrTeamBadge.04f4c3b1.js";function ce(t){return typeof t=="object"&&t!=null&&t.nodeType===1}function ge(t,r){return(!r||t!=="hidden")&&t!=="visible"&&t!=="clip"}function ie(t,r){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var i=getComputedStyle(t,null);return ge(i.overflowY,r)||ge(i.overflowX,r)||function(u){var l=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch{return null}}(u);return!!l&&(l.clientHeight<u.scrollHeight||l.clientWidth<u.scrollWidth)}(t)}return!1}function Z(t,r,i,u,l,e,d,v){return e<t&&d>r||e>t&&d<r?0:e<=t&&v<=i||d>=r&&v>=i?e-t-u:d>r&&v<i||e<t&&v>i?d-r+l:0}function Fe(t,r){var i=window,u=r.scrollMode,l=r.block,e=r.inline,d=r.boundary,v=r.skipOverflowHiddenElements,E=typeof d=="function"?d:function(Ue){return Ue!==d};if(!ce(t))throw new TypeError("Invalid target");for(var x=document.scrollingElement||document.documentElement,w=[],I=t;ce(I)&&E(I);){if((I=I.parentElement)===x){w.push(I);break}I!=null&&I===document.body&&ie(I)&&!ie(document.documentElement)||I!=null&&ie(I,v)&&w.push(I)}for(var S=i.visualViewport?i.visualViewport.width:innerWidth,C=i.visualViewport?i.visualViewport.height:innerHeight,b=window.scrollX||pageXOffset,M=window.scrollY||pageYOffset,P=t.getBoundingClientRect(),A=P.height,n=P.width,s=P.top,a=P.right,c=P.bottom,h=P.left,f=l==="start"||l==="nearest"?s:l==="end"?c:s+A/2,p=e==="center"?h+n/2:e==="end"?a:h,g=[],y=0;y<w.length;y++){var m=w[y],H=m.getBoundingClientRect(),R=H.height,D=H.width,_=H.top,U=H.right,re=H.bottom,W=H.left;if(u==="if-needed"&&s>=0&&h>=0&&c<=C&&a<=S&&s>=_&&c<=re&&h>=W&&a<=U)return g;var j=getComputedStyle(m),F=parseInt(j.borderLeftWidth,10),Y=parseInt(j.borderTopWidth,10),q=parseInt(j.borderRightWidth,10),X=parseInt(j.borderBottomWidth,10),K=0,N=0,z="offsetWidth"in m?m.offsetWidth-m.clientWidth-F-q:0,Q="offsetHeight"in m?m.offsetHeight-m.clientHeight-Y-X:0;if(x===m)K=l==="start"?f:l==="end"?f-C:l==="nearest"?Z(M,M+C,C,Y,X,M+f,M+f+A,A):f-C/2,N=e==="start"?p:e==="center"?p-S/2:e==="end"?p-S:Z(b,b+S,S,F,q,b+p,b+p+n,n),K=Math.max(0,K+M),N=Math.max(0,N+b);else{K=l==="start"?f-_-Y:l==="end"?f-re+X+Q:l==="nearest"?Z(_,re,R,Y,X+Q,f,f+A,A):f-(_+R/2)+Q/2,N=e==="start"?p-W-F:e==="center"?p-(W+D/2)+z/2:e==="end"?p-U+q+z:Z(W,U,D,F,q+z,p,p+n,n);var le=m.scrollLeft,de=m.scrollTop;f+=de-(K=Math.max(0,Math.min(de+K,m.scrollHeight-R+Q))),p+=le-(N=Math.max(0,Math.min(le+N,m.scrollWidth-D+z)))}g.push({el:m,top:K,left:N})}return g}var ne=function(){return ne=Object.assign||function(r){for(var i,u=1,l=arguments.length;u<l;u++){i=arguments[u];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(r[e]=i[e])}return r},ne.apply(this,arguments)},Ye=0;function he(t){return typeof t=="function"?t:V}function V(){}function ye(t,r){if(!!t){var i=Fe(t,{boundary:r,block:"nearest",scrollMode:"if-needed"});i.forEach(function(u){var l=u.el,e=u.top,d=u.left;l.scrollTop=e,l.scrollLeft=d})}}function fe(t,r,i){var u=t===r||r instanceof i.Node&&t.contains&&t.contains(r);return u}function ae(t,r){var i;function u(){i&&clearTimeout(i)}function l(){for(var e=arguments.length,d=new Array(e),v=0;v<e;v++)d[v]=arguments[v];u(),i=setTimeout(function(){i=null,t.apply(void 0,d)},r)}return l.cancel=u,l}function B(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return function(u){for(var l=arguments.length,e=new Array(l>1?l-1:0),d=1;d<l;d++)e[d-1]=arguments[d];return r.some(function(v){return v&&v.apply(void 0,[u].concat(e)),u.preventDownshiftDefault||u.hasOwnProperty("nativeEvent")&&u.nativeEvent.preventDownshiftDefault})}}function me(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return function(u){r.forEach(function(l){typeof l=="function"?l(u):l&&(l.current=u)})}}function qe(){return String(Ye++)}function Se(t){var r=t.isOpen,i=t.resultCount,u=t.previousResultCount;return r?i?i!==u?i+" result"+(i===1?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function ve(t,r){return t=Array.isArray(t)?t[0]:t,!t&&r?r:t}function Xe(t){return typeof t.type=="string"}function ze(t){return t.props}var Qe=["highlightedIndex","inputValue","isOpen","selectedItem","type"];function G(t){t===void 0&&(t={});var r={};return Qe.forEach(function(i){t.hasOwnProperty(i)&&(r[i]=t[i])}),r}function Ze(t,r){return Object.keys(t).reduce(function(i,u){return i[u]=ue(r,u)?r[u]:t[u],i},{})}function ue(t,r){return t[r]!==void 0}function Ie(t){var r=t.key,i=t.keyCode;return i>=37&&i<=40&&r.indexOf("Arrow")!==0?"Arrow"+r:r}function oe(t,r,i,u,l){if(l===void 0&&(l=!0),i===0)return-1;var e=i-1;(typeof r!="number"||r<0||r>=i)&&(r=t>0?-1:e+1);var d=r+t;d<0?d=l?e:0:d>e&&(d=l?0:e);var v=k(t,d,i,u,l);return v===-1?r>=i?-1:r:v}function k(t,r,i,u,l){var e=u(r);if(!e||!e.hasAttribute("disabled"))return r;if(t>0){for(var d=r+1;d<i;d++)if(!u(d).hasAttribute("disabled"))return d}else for(var v=r-1;v>=0;v--)if(!u(v).hasAttribute("disabled"))return v;return l?t>0?k(1,0,i,u,!1):k(-1,i-1,i,u,!1):-1}function xe(t,r,i,u){return u===void 0&&(u=!0),r.some(function(l){return l&&(fe(l,t,i)||u&&fe(l,i.document.activeElement,i))})}var Ge=ae(function(t){be(t).textContent=""},500);function we(t,r){var i=be(r);!t||(i.textContent=t,Ge(r))}function be(t){t===void 0&&(t=document);var r=t.getElementById("a11y-status-message");return r||(r=t.createElement("div"),r.setAttribute("id","a11y-status-message"),r.setAttribute("role","status"),r.setAttribute("aria-live","polite"),r.setAttribute("aria-relevant","additions text"),Object.assign(r.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),t.body.appendChild(r),r)}var Ce=0,He=1,Ee=2,J=3,ee=4,Oe=5,De=6,Me=7,Ae=8,Re=9,_e=10,Pe=11,Be=12,Ve=13,Ke=14,Ne=15,Te=16,Je=Object.freeze({__proto__:null,unknown:Ce,mouseUp:He,itemMouseEnter:Ee,keyDownArrowUp:J,keyDownArrowDown:ee,keyDownEscape:Oe,keyDownEnter:De,keyDownHome:Me,keyDownEnd:Ae,clickItem:Re,blurInput:_e,changeInput:Pe,keyDownSpaceButton:Be,clickButton:Ve,blurButton:Ke,controlledPropUpdatedSelectedItem:Ne,touchEnd:Te}),et=["refKey","ref"],tt=["onClick","onPress","onKeyDown","onKeyUp","onBlur"],nt=["onKeyDown","onBlur","onChange","onInput","onChangeText"],rt=["refKey","ref"],it=["onMouseMove","onMouseDown","onClick","onPress","index","item"],ot=function(){var t=function(r){$e(i,r);function i(l){var e;e=r.call(this,l)||this,e.id=e.props.id||"downshift-"+qe(),e.menuId=e.props.menuId||e.id+"-menu",e.labelId=e.props.labelId||e.id+"-label",e.inputId=e.props.inputId||e.id+"-input",e.getItemId=e.props.getItemId||function(n){return e.id+"-item-"+n},e.input=null,e.items=[],e.itemCount=null,e.previousResultCount=0,e.timeoutIds=[],e.internalSetTimeout=function(n,s){var a=setTimeout(function(){e.timeoutIds=e.timeoutIds.filter(function(c){return c!==a}),n()},s);e.timeoutIds.push(a)},e.setItemCount=function(n){e.itemCount=n},e.unsetItemCount=function(){e.itemCount=null},e.setHighlightedIndex=function(n,s){n===void 0&&(n=e.props.defaultHighlightedIndex),s===void 0&&(s={}),s=G(s),e.internalSetState(O({highlightedIndex:n},s))},e.clearSelection=function(n){e.internalSetState({selectedItem:null,inputValue:"",highlightedIndex:e.props.defaultHighlightedIndex,isOpen:e.props.defaultIsOpen},n)},e.selectItem=function(n,s,a){s=G(s),e.internalSetState(O({isOpen:e.props.defaultIsOpen,highlightedIndex:e.props.defaultHighlightedIndex,selectedItem:n,inputValue:e.props.itemToString(n)},s),a)},e.selectItemAtIndex=function(n,s,a){var c=e.items[n];c!=null&&e.selectItem(c,s,a)},e.selectHighlightedItem=function(n,s){return e.selectItemAtIndex(e.getState().highlightedIndex,n,s)},e.internalSetState=function(n,s){var a,c,h={},f=typeof n=="function";return!f&&n.hasOwnProperty("inputValue")&&e.props.onInputValueChange(n.inputValue,O({},e.getStateAndHelpers(),n)),e.setState(function(p){p=e.getState(p);var g=f?n(p):n;g=e.props.stateReducer(p,g),a=g.hasOwnProperty("selectedItem");var y={};return a&&g.selectedItem!==p.selectedItem&&(c=g.selectedItem),g.type=g.type||Ce,Object.keys(g).forEach(function(m){p[m]!==g[m]&&(h[m]=g[m]),m!=="type"&&(g[m],ue(e.props,m)||(y[m]=g[m]))}),f&&g.hasOwnProperty("inputValue")&&e.props.onInputValueChange(g.inputValue,O({},e.getStateAndHelpers(),g)),y},function(){he(s)();var p=Object.keys(h).length>1;p&&e.props.onStateChange(h,e.getStateAndHelpers()),a&&e.props.onSelect(n.selectedItem,e.getStateAndHelpers()),c!==void 0&&e.props.onChange(c,e.getStateAndHelpers()),e.props.onUserAction(h,e.getStateAndHelpers())})},e.rootRef=function(n){return e._rootNode=n},e.getRootProps=function(n,s){var a,c=n===void 0?{}:n,h=c.refKey,f=h===void 0?"ref":h,p=c.ref,g=$(c,et),y=s===void 0?{}:s,m=y.suppressRefError,H=m===void 0?!1:m;e.getRootProps.called=!0,e.getRootProps.refKey=f,e.getRootProps.suppressRefError=H;var R=e.getState(),D=R.isOpen;return O((a={},a[f]=me(p,e.rootRef),a.role="combobox",a["aria-expanded"]=D,a["aria-haspopup"]="listbox",a["aria-owns"]=D?e.menuId:null,a["aria-labelledby"]=e.labelId,a),g)},e.keyDownHandlers={ArrowDown:function(s){var a=this;if(s.preventDefault(),this.getState().isOpen){var c=s.shiftKey?5:1;this.moveHighlightedIndex(c,{type:ee})}else this.internalSetState({isOpen:!0,type:ee},function(){var h=a.getItemCount();if(h>0){var f=a.getState(),p=f.highlightedIndex,g=oe(1,p,h,function(y){return a.getItemNodeFromIndex(y)});a.setHighlightedIndex(g,{type:ee})}})},ArrowUp:function(s){var a=this;if(s.preventDefault(),this.getState().isOpen){var c=s.shiftKey?-5:-1;this.moveHighlightedIndex(c,{type:J})}else this.internalSetState({isOpen:!0,type:J},function(){var h=a.getItemCount();if(h>0){var f=a.getState(),p=f.highlightedIndex,g=oe(-1,p,h,function(y){return a.getItemNodeFromIndex(y)});a.setHighlightedIndex(g,{type:J})}})},Enter:function(s){if(s.which!==229){var a=this.getState(),c=a.isOpen,h=a.highlightedIndex;if(c&&h!=null){s.preventDefault();var f=this.items[h],p=this.getItemNodeFromIndex(h);if(f==null||p&&p.hasAttribute("disabled"))return;this.selectHighlightedItem({type:De})}}},Escape:function(s){s.preventDefault(),this.reset(O({type:Oe},!this.state.isOpen&&{selectedItem:null,inputValue:""}))}},e.buttonKeyDownHandlers=O({},e.keyDownHandlers,{" ":function(s){s.preventDefault(),this.toggleMenu({type:Be})}}),e.inputKeyDownHandlers=O({},e.keyDownHandlers,{Home:function(s){var a=this,c=this.getState(),h=c.isOpen;if(!!h){s.preventDefault();var f=this.getItemCount();if(!(f<=0||!h)){var p=k(1,0,f,function(g){return a.getItemNodeFromIndex(g)},!1);this.setHighlightedIndex(p,{type:Me})}}},End:function(s){var a=this,c=this.getState(),h=c.isOpen;if(!!h){s.preventDefault();var f=this.getItemCount();if(!(f<=0||!h)){var p=k(-1,f-1,f,function(g){return a.getItemNodeFromIndex(g)},!1);this.setHighlightedIndex(p,{type:Ae})}}}}),e.getToggleButtonProps=function(n){var s=n===void 0?{}:n,a=s.onClick;s.onPress;var c=s.onKeyDown,h=s.onKeyUp,f=s.onBlur,p=$(s,tt),g=e.getState(),y=g.isOpen,m={onClick:B(a,e.buttonHandleClick),onKeyDown:B(c,e.buttonHandleKeyDown),onKeyUp:B(h,e.buttonHandleKeyUp),onBlur:B(f,e.buttonHandleBlur)},H=p.disabled?{}:m;return O({type:"button",role:"button","aria-label":y?"close menu":"open menu","aria-haspopup":!0,"data-toggle":!0},H,p)},e.buttonHandleKeyUp=function(n){n.preventDefault()},e.buttonHandleKeyDown=function(n){var s=Ie(n);e.buttonKeyDownHandlers[s]&&e.buttonKeyDownHandlers[s].call(pe(e),n)},e.buttonHandleClick=function(n){n.preventDefault(),e.props.environment.document.activeElement===e.props.environment.document.body&&n.target.focus(),e.internalSetTimeout(function(){return e.toggleMenu({type:Ve})})},e.buttonHandleBlur=function(n){var s=n.target;e.internalSetTimeout(function(){!e.isMouseDown&&(e.props.environment.document.activeElement==null||e.props.environment.document.activeElement.id!==e.inputId)&&e.props.environment.document.activeElement!==s&&e.reset({type:Ke})})},e.getLabelProps=function(n){return O({htmlFor:e.inputId,id:e.labelId},n)},e.getInputProps=function(n){var s=n===void 0?{}:n,a=s.onKeyDown,c=s.onBlur,h=s.onChange,f=s.onInput;s.onChangeText;var p=$(s,nt),g,y={};g="onChange";var m=e.getState(),H=m.inputValue,R=m.isOpen,D=m.highlightedIndex;if(!p.disabled){var _;y=(_={},_[g]=B(h,f,e.inputHandleChange),_.onKeyDown=B(a,e.inputHandleKeyDown),_.onBlur=B(c,e.inputHandleBlur),_)}return O({"aria-autocomplete":"list","aria-activedescendant":R&&typeof D=="number"&&D>=0?e.getItemId(D):null,"aria-controls":R?e.menuId:null,"aria-labelledby":e.labelId,autoComplete:"off",value:H,id:e.inputId},y,p)},e.inputHandleKeyDown=function(n){var s=Ie(n);s&&e.inputKeyDownHandlers[s]&&e.inputKeyDownHandlers[s].call(pe(e),n)},e.inputHandleChange=function(n){e.internalSetState({type:Pe,isOpen:!0,inputValue:n.target.value,highlightedIndex:e.props.defaultHighlightedIndex})},e.inputHandleBlur=function(){e.internalSetTimeout(function(){var n=e.props.environment.document&&!!e.props.environment.document.activeElement&&!!e.props.environment.document.activeElement.dataset&&e.props.environment.document.activeElement.dataset.toggle&&e._rootNode&&e._rootNode.contains(e.props.environment.document.activeElement);!e.isMouseDown&&!n&&e.reset({type:_e})})},e.menuRef=function(n){e._menuNode=n},e.getMenuProps=function(n,s){var a,c=n===void 0?{}:n,h=c.refKey,f=h===void 0?"ref":h,p=c.ref,g=$(c,rt),y=s===void 0?{}:s,m=y.suppressRefError,H=m===void 0?!1:m;return e.getMenuProps.called=!0,e.getMenuProps.refKey=f,e.getMenuProps.suppressRefError=H,O((a={},a[f]=me(p,e.menuRef),a.role="listbox",a["aria-labelledby"]=g&&g["aria-label"]?null:e.labelId,a.id=e.menuId,a),g)},e.getItemProps=function(n){var s,a=n===void 0?{}:n,c=a.onMouseMove,h=a.onMouseDown,f=a.onClick;a.onPress;var p=a.index,g=a.item,y=g===void 0?void 0:g,m=$(a,it);p===void 0?(e.items.push(y),p=e.items.indexOf(y)):e.items[p]=y;var H="onClick",R=f,D=(s={onMouseMove:B(c,function(){p!==e.getState().highlightedIndex&&(e.setHighlightedIndex(p,{type:Ee}),e.avoidScrolling=!0,e.internalSetTimeout(function(){return e.avoidScrolling=!1},250))}),onMouseDown:B(h,function(U){U.preventDefault()})},s[H]=B(R,function(){e.selectItemAtIndex(p,{type:Re})}),s),_=m.disabled?{onMouseDown:D.onMouseDown}:D;return O({id:e.getItemId(p),role:"option","aria-selected":e.getState().highlightedIndex===p},_,m)},e.clearItems=function(){e.items=[]},e.reset=function(n,s){n===void 0&&(n={}),n=G(n),e.internalSetState(function(a){var c=a.selectedItem;return O({isOpen:e.props.defaultIsOpen,highlightedIndex:e.props.defaultHighlightedIndex,inputValue:e.props.itemToString(c)},n)},s)},e.toggleMenu=function(n,s){n===void 0&&(n={}),n=G(n),e.internalSetState(function(a){var c=a.isOpen;return O({isOpen:!c},c&&{highlightedIndex:e.props.defaultHighlightedIndex},n)},function(){var a=e.getState(),c=a.isOpen,h=a.highlightedIndex;c&&e.getItemCount()>0&&typeof h=="number"&&e.setHighlightedIndex(h,n),he(s)()})},e.openMenu=function(n){e.internalSetState({isOpen:!0},n)},e.closeMenu=function(n){e.internalSetState({isOpen:!1},n)},e.updateStatus=ae(function(){var n=e.getState(),s=e.items[n.highlightedIndex],a=e.getItemCount(),c=e.props.getA11yStatusMessage(O({itemToString:e.props.itemToString,previousResultCount:e.previousResultCount,resultCount:a,highlightedItem:s},n));e.previousResultCount=a,we(c,e.props.environment.document)},200);var d=e.props,v=d.defaultHighlightedIndex,E=d.initialHighlightedIndex,x=E===void 0?v:E,w=d.defaultIsOpen,I=d.initialIsOpen,S=I===void 0?w:I,C=d.initialInputValue,b=C===void 0?"":C,M=d.initialSelectedItem,P=M===void 0?null:M,A=e.getState({highlightedIndex:x,isOpen:S,inputValue:b,selectedItem:P});return A.selectedItem!=null&&e.props.initialInputValue===void 0&&(A.inputValue=e.props.itemToString(A.selectedItem)),e.state=A,e}var u=i.prototype;return u.internalClearTimeouts=function(){this.timeoutIds.forEach(function(e){clearTimeout(e)}),this.timeoutIds=[]},u.getState=function(e){return e===void 0&&(e=this.state),Ze(e,this.props)},u.getItemCount=function(){var e=this.items.length;return this.itemCount!=null?e=this.itemCount:this.props.itemCount!==void 0&&(e=this.props.itemCount),e},u.getItemNodeFromIndex=function(e){return this.props.environment.document.getElementById(this.getItemId(e))},u.scrollHighlightedItemIntoView=function(){{var e=this.getItemNodeFromIndex(this.getState().highlightedIndex);this.props.scrollIntoView(e,this._menuNode)}},u.moveHighlightedIndex=function(e,d){var v=this,E=this.getItemCount(),x=this.getState(),w=x.highlightedIndex;if(E>0){var I=oe(e,w,E,function(S){return v.getItemNodeFromIndex(S)});this.setHighlightedIndex(I,d)}},u.getStateAndHelpers=function(){var e=this.getState(),d=e.highlightedIndex,v=e.inputValue,E=e.selectedItem,x=e.isOpen,w=this.props.itemToString,I=this.id,S=this.getRootProps,C=this.getToggleButtonProps,b=this.getLabelProps,M=this.getMenuProps,P=this.getInputProps,A=this.getItemProps,n=this.openMenu,s=this.closeMenu,a=this.toggleMenu,c=this.selectItem,h=this.selectItemAtIndex,f=this.selectHighlightedItem,p=this.setHighlightedIndex,g=this.clearSelection,y=this.clearItems,m=this.reset,H=this.setItemCount,R=this.unsetItemCount,D=this.internalSetState;return{getRootProps:S,getToggleButtonProps:C,getLabelProps:b,getMenuProps:M,getInputProps:P,getItemProps:A,reset:m,openMenu:n,closeMenu:s,toggleMenu:a,selectItem:c,selectItemAtIndex:h,selectHighlightedItem:f,setHighlightedIndex:p,clearSelection:g,clearItems:y,setItemCount:H,unsetItemCount:R,setState:D,itemToString:w,id:I,highlightedIndex:d,inputValue:v,isOpen:x,selectedItem:E}},u.componentDidMount=function(){var e=this;{var d=function(){e.isMouseDown=!0},v=function(C){e.isMouseDown=!1;var b=xe(C.target,[e._rootNode,e._menuNode],e.props.environment);!b&&e.getState().isOpen&&e.reset({type:He},function(){return e.props.onOuterClick(e.getStateAndHelpers())})},E=function(){e.isTouchMove=!1},x=function(){e.isTouchMove=!0},w=function(C){var b=xe(C.target,[e._rootNode,e._menuNode],e.props.environment,!1);!e.isTouchMove&&!b&&e.getState().isOpen&&e.reset({type:Te},function(){return e.props.onOuterClick(e.getStateAndHelpers())})},I=this.props.environment;I.addEventListener("mousedown",d),I.addEventListener("mouseup",v),I.addEventListener("touchstart",E),I.addEventListener("touchmove",x),I.addEventListener("touchend",w),this.cleanup=function(){e.internalClearTimeouts(),e.updateStatus.cancel(),I.removeEventListener("mousedown",d),I.removeEventListener("mouseup",v),I.removeEventListener("touchstart",E),I.removeEventListener("touchmove",x),I.removeEventListener("touchend",w)}}},u.shouldScroll=function(e,d){var v=this.props.highlightedIndex===void 0?this.getState():this.props,E=v.highlightedIndex,x=d.highlightedIndex===void 0?e:d,w=x.highlightedIndex,I=E&&this.getState().isOpen&&!e.isOpen,S=E!==w;return I||S},u.componentDidUpdate=function(e,d){ue(this.props,"selectedItem")&&this.props.selectedItemChanged(e.selectedItem,this.props.selectedItem)&&this.internalSetState({type:Ne,inputValue:this.props.itemToString(this.props.selectedItem)}),!this.avoidScrolling&&this.shouldScroll(d,e)&&this.scrollHighlightedItemIntoView(),this.updateStatus()},u.componentWillUnmount=function(){this.cleanup()},u.render=function(){var e=ve(this.props.children,V);this.clearItems(),this.getRootProps.called=!1,this.getRootProps.refKey=void 0,this.getRootProps.suppressRefError=void 0,this.getMenuProps.called=!1,this.getMenuProps.refKey=void 0,this.getMenuProps.suppressRefError=void 0,this.getLabelProps.called=!1,this.getInputProps.called=!1;var d=ve(e(this.getStateAndHelpers()));if(!d)return null;if(this.getRootProps.called||this.props.suppressRefError)return d;if(Xe(d))return se.exports.cloneElement(d,this.getRootProps(ze(d)))},i}(se.exports.Component);return t.defaultProps={defaultHighlightedIndex:null,defaultIsOpen:!1,getA11yStatusMessage:Se,itemToString:function(i){return i==null?"":String(i)},onStateChange:V,onInputValueChange:V,onUserAction:V,onChange:V,onSelect:V,onOuterClick:V,selectedItemChanged:function(i,u){return i!==u},environment:typeof window>"u"?{}:window,stateReducer:function(i,u){return u},suppressRefError:!1,scrollIntoView:ye},t.stateChangeTypes=Je,t}(),st=ot;function ut(t,r){return r.changes}function at(t){var r=t.selectedItem,i=t.itemToString;return r?i(r)+" has been selected.":""}ae(function(t,r){we(t(),r)},200);function lt(t){return t?String(t):""}var L={itemToString:lt,stateReducer:ut,getA11ySelectionMessage:at,scrollIntoView:ye,circularNavigation:!1,environment:typeof window>"u"?{}:window};o.exports.array.isRequired,o.exports.func,o.exports.func,o.exports.func,o.exports.bool,o.exports.number,o.exports.number,o.exports.number,o.exports.bool,o.exports.bool,o.exports.bool,o.exports.any,o.exports.any,o.exports.any,o.exports.string,o.exports.string,o.exports.string,o.exports.func,o.exports.string,o.exports.func,o.exports.func,o.exports.func,o.exports.func,o.exports.func,o.exports.shape({addEventListener:o.exports.func,removeEventListener:o.exports.func,document:o.exports.shape({getElementById:o.exports.func,activeElement:o.exports.any,body:o.exports.any})});function dt(t){var r=t.isOpen,i=t.resultCount,u=t.previousResultCount;return r?i?i!==u?i+" result"+(i===1?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.":"":"No results are available.":""}ne(ne({},L),{getA11yStatusMessage:dt});o.exports.array.isRequired,o.exports.func,o.exports.func,o.exports.func,o.exports.bool,o.exports.number,o.exports.number,o.exports.number,o.exports.bool,o.exports.bool,o.exports.bool,o.exports.any,o.exports.any,o.exports.any,o.exports.string,o.exports.string,o.exports.string,o.exports.string,o.exports.string,o.exports.string,o.exports.func,o.exports.string,o.exports.string,o.exports.func,o.exports.func,o.exports.func,o.exports.func,o.exports.func,o.exports.func,o.exports.shape({addEventListener:o.exports.func,removeEventListener:o.exports.func,document:o.exports.shape({getElementById:o.exports.func,activeElement:o.exports.any,body:o.exports.any})});O({},L,{getA11yStatusMessage:Se,circularNavigation:!0});function pt(t){var r=t.removedSelectedItem,i=t.itemToString;return i(r)+" has been removed."}o.exports.array,o.exports.array,o.exports.array,o.exports.func,o.exports.func,o.exports.func,o.exports.number,o.exports.number,o.exports.number,o.exports.func,o.exports.func,o.exports.string,o.exports.string,o.exports.shape({addEventListener:o.exports.func,removeEventListener:o.exports.func,document:o.exports.shape({getElementById:o.exports.func,activeElement:o.exports.any,body:o.exports.any})});L.itemToString,L.stateReducer,L.environment;const te=t=>{const{id:r,onSelectCallback:i,filterUserIds:u,typeFilter:l}=t,[e,d]=se.exports.useState([]),v=async x=>{try{const w=await We(x,l),I=u!=null&&u.length?w.children.filter(S=>!u.includes(S.ownerId)):w.children;d(I)}catch(w){console.log("onInputValueChange",w)}},E=x=>{i&&i(x)};return T(Le,{children:T(st,{onInputValueChange:x=>{v(x)},onChange:x=>E(x),itemToString:x=>x!=null&&x.name?x.name:"",children:({getInputProps:x,getMenuProps:w,getItemProps:I,isOpen:S,inputValue:C})=>ke("div",{className:"user-search-box",children:[T("input",{...x({className:"form-control",id:r,type:"search",role:"searchbox",placeholder:"Enter the name..."}),style:{marginBottom:"0"}}),T("ul",{...w(),className:S?"users-visible":"",role:"list",children:S?e.filter(b=>!C||`${b.firstName} ${b.lastName}`.includes(C)||b.userName.includes(C)).map((b,M)=>T("li",{...I({key:b.ownerId,index:M,item:b}),children:T(je,{userGroupHeader:b,disableHref:!0,showFullName:!0})},`userSearchBox-${M}`)):null})]})})})},yt=te;try{te.displayName="UserSearchBox",te.__docgenInfo={description:"",displayName:"UserSearchBox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onSelectCallback:{defaultValue:null,description:"",name:"onSelectCallback",required:!1,type:{name:"((selected: UserGroupHeader) => void)"}},typeFilter:{defaultValue:null,description:"",name:"typeFilter",required:!1,type:{name:"enum",value:[{value:'"USERS_ONLY"'},{value:'"TEAMS_ONLY"'},{value:'"ALL"'}]}},filterUserIds:{defaultValue:null,description:"",name:"filterUserIds",required:!1,type:{name:"string[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/UserSearchBox.tsx#UserSearchBox"]={docgenInfo:te.__docgenInfo,name:"UserSearchBox",path:"src/lib/containers/UserSearchBox.tsx#UserSearchBox"})}catch{}export{yt as U};
