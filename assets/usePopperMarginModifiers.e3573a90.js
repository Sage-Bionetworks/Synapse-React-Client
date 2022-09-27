import{_ as F}from"./withStyles.c4d286cc.js";import{_ as wt}from"./objectWithoutPropertiesLoose.5e7699d1.js";import{r as R}from"./jsx-runtime.9b9f5ec2.js";import{a as xt,c as Ot}from"./useWaitForDOMRef.6edb2b10.js";import{o as At,u as Xe,l as ge}from"./Alert.a1c2894f.js";import{R as Et}from"./index.9efb4fab.js";import{h as Re}from"./hasClass.56fd144a.js";import{u as Ye}from"./Button.17fde95a.js";function Ct(e){var t=xt();return[e[0],R.exports.useCallback(function(r){if(!!t())return e[1](r)},[t,e[1]])]}var $="top",B="bottom",T="right",D="left",$e="auto",pe=[$,B,T,D],J="start",fe="end",Rt="clippingParents",it="viewport",oe="popper",Mt="reference",ze=pe.reduce(function(e,t){return e.concat([t+"-"+J,t+"-"+fe])},[]),st=[].concat(pe,[$e]).reduce(function(e,t){return e.concat([t,t+"-"+J,t+"-"+fe])},[]),Pt="beforeRead",$t="read",Dt="afterRead",St="beforeMain",kt="main",Bt="afterMain",Tt="beforeWrite",Lt="write",jt="afterWrite",Wt=[Pt,$t,Dt,St,kt,Bt,Tt,Lt,jt];function H(e){return e.split("-")[0]}function W(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Q(e){var t=W(e).Element;return e instanceof t||e instanceof Element}function N(e){var t=W(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function De(e){if(typeof ShadowRoot>"u")return!1;var t=W(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var K=Math.max,we=Math.min,Z=Math.round;function _(e,t){t===void 0&&(t=!1);var r=e.getBoundingClientRect(),n=1,a=1;if(N(e)&&t){var o=e.offsetHeight,i=e.offsetWidth;i>0&&(n=Z(r.width)/i||1),o>0&&(a=Z(r.height)/o||1)}return{width:r.width/n,height:r.height/a,top:r.top/a,right:r.right/n,bottom:r.bottom/a,left:r.left/n,x:r.left/n,y:r.top/a}}function Se(e){var t=_(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function ft(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&De(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function q(e){return e?(e.nodeName||"").toLowerCase():null}function I(e){return W(e).getComputedStyle(e)}function Ft(e){return["table","td","th"].indexOf(q(e))>=0}function U(e){return((Q(e)?e.ownerDocument:e.document)||window.document).documentElement}function xe(e){return q(e)==="html"?e:e.assignedSlot||e.parentNode||(De(e)?e.host:null)||U(e)}function Ke(e){return!N(e)||I(e).position==="fixed"?null:e.offsetParent}function Ht(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&N(e)){var n=I(e);if(n.position==="fixed")return null}var a=xe(e);for(De(a)&&(a=a.host);N(a)&&["html","body"].indexOf(q(a))<0;){var o=I(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function ce(e){for(var t=W(e),r=Ke(e);r&&Ft(r)&&I(r).position==="static";)r=Ke(r);return r&&(q(r)==="html"||q(r)==="body"&&I(r).position==="static")?t:r||Ht(e)||t}function ke(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ie(e,t,r){return K(e,we(t,r))}function Nt(e,t,r){var n=ie(e,t,r);return n>r?r:n}function ut(){return{top:0,right:0,bottom:0,left:0}}function pt(e){return Object.assign({},ut(),e)}function ct(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var It=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,pt(typeof t!="number"?t:ct(t,pe))};function Vt(e){var t,r=e.state,n=e.name,a=e.options,o=r.elements.arrow,i=r.modifiersData.popperOffsets,s=H(r.placement),u=ke(s),c=[D,T].indexOf(s)>=0,f=c?"height":"width";if(!(!o||!i)){var v=It(a.padding,r),d=Se(o),p=u==="y"?$:D,h=u==="y"?B:T,l=r.rects.reference[f]+r.rects.reference[u]-i[u]-r.rects.popper[f],g=i[u]-r.rects.reference[u],w=ce(o),y=w?u==="y"?w.clientHeight||0:w.clientWidth||0:0,O=l/2-g/2,m=v[p],A=y-d[f]-v[h],b=y/2-d[f]/2+O,x=ie(m,b,A),E=u;r.modifiersData[n]=(t={},t[E]=x,t.centerOffset=x-b,t)}}function qt(e){var t=e.state,r=e.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||!ft(t.elements.popper,a)||(t.elements.arrow=a))}const Ut={name:"arrow",enabled:!0,phase:"main",fn:Vt,effect:qt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ee(e){return e.split("-")[1]}var Xt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Yt(e){var t=e.x,r=e.y,n=window,a=n.devicePixelRatio||1;return{x:Z(t*a)/a||0,y:Z(r*a)/a||0}}function Ge(e){var t,r=e.popper,n=e.popperRect,a=e.placement,o=e.variation,i=e.offsets,s=e.position,u=e.gpuAcceleration,c=e.adaptive,f=e.roundOffsets,v=e.isFixed,d=i.x,p=d===void 0?0:d,h=i.y,l=h===void 0?0:h,g=typeof f=="function"?f({x:p,y:l}):{x:p,y:l};p=g.x,l=g.y;var w=i.hasOwnProperty("x"),y=i.hasOwnProperty("y"),O=D,m=$,A=window;if(c){var b=ce(r),x="clientHeight",E="clientWidth";if(b===W(r)&&(b=U(r),I(b).position!=="static"&&s==="absolute"&&(x="scrollHeight",E="scrollWidth")),b=b,a===$||(a===D||a===T)&&o===fe){m=B;var C=v&&b===A&&A.visualViewport?A.visualViewport.height:b[x];l-=C-n.height,l*=u?1:-1}if(a===D||(a===$||a===B)&&o===fe){O=T;var M=v&&b===A&&A.visualViewport?A.visualViewport.width:b[E];p-=M-n.width,p*=u?1:-1}}var P=Object.assign({position:s},c&&Xt),L=f===!0?Yt({x:p,y:l}):{x:p,y:l};if(p=L.x,l=L.y,u){var S;return Object.assign({},P,(S={},S[m]=y?"0":"",S[O]=w?"0":"",S.transform=(A.devicePixelRatio||1)<=1?"translate("+p+"px, "+l+"px)":"translate3d("+p+"px, "+l+"px, 0)",S))}return Object.assign({},P,(t={},t[m]=y?l+"px":"",t[O]=w?p+"px":"",t.transform="",t))}function zt(e){var t=e.state,r=e.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,i=o===void 0?!0:o,s=r.roundOffsets,u=s===void 0?!0:s,c={placement:H(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ge(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ge(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Kt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:zt,data:{}};var ye={passive:!0};function Gt(e){var t=e.state,r=e.instance,n=e.options,a=n.scroll,o=a===void 0?!0:a,i=n.resize,s=i===void 0?!0:i,u=W(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(f){f.addEventListener("scroll",r.update,ye)}),s&&u.addEventListener("resize",r.update,ye),function(){o&&c.forEach(function(f){f.removeEventListener("scroll",r.update,ye)}),s&&u.removeEventListener("resize",r.update,ye)}}const Jt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Gt,data:{}};var Qt={left:"right",right:"left",bottom:"top",top:"bottom"};function be(e){return e.replace(/left|right|bottom|top/g,function(t){return Qt[t]})}var Zt={start:"end",end:"start"};function Je(e){return e.replace(/start|end/g,function(t){return Zt[t]})}function Be(e){var t=W(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Te(e){return _(U(e)).left+Be(e).scrollLeft}function _t(e){var t=W(e),r=U(e),n=t.visualViewport,a=r.clientWidth,o=r.clientHeight,i=0,s=0;return n&&(a=n.width,o=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=n.offsetLeft,s=n.offsetTop)),{width:a,height:o,x:i+Te(e),y:s}}function er(e){var t,r=U(e),n=Be(e),a=(t=e.ownerDocument)==null?void 0:t.body,o=K(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),i=K(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-n.scrollLeft+Te(e),u=-n.scrollTop;return I(a||r).direction==="rtl"&&(s+=K(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:i,x:s,y:u}}function Le(e){var t=I(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function lt(e){return["html","body","#document"].indexOf(q(e))>=0?e.ownerDocument.body:N(e)&&Le(e)?e:lt(xe(e))}function se(e,t){var r;t===void 0&&(t=[]);var n=lt(e),a=n===((r=e.ownerDocument)==null?void 0:r.body),o=W(n),i=a?[o].concat(o.visualViewport||[],Le(n)?n:[]):n,s=t.concat(i);return a?s:s.concat(se(xe(i)))}function Pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function tr(e){var t=_(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Qe(e,t){return t===it?Pe(_t(e)):Q(t)?tr(t):Pe(er(U(e)))}function rr(e){var t=se(xe(e)),r=["absolute","fixed"].indexOf(I(e).position)>=0,n=r&&N(e)?ce(e):e;return Q(n)?t.filter(function(a){return Q(a)&&ft(a,n)&&q(a)!=="body"}):[]}function nr(e,t,r){var n=t==="clippingParents"?rr(e):[].concat(t),a=[].concat(n,[r]),o=a[0],i=a.reduce(function(s,u){var c=Qe(e,u);return s.top=K(c.top,s.top),s.right=we(c.right,s.right),s.bottom=we(c.bottom,s.bottom),s.left=K(c.left,s.left),s},Qe(e,o));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function dt(e){var t=e.reference,r=e.element,n=e.placement,a=n?H(n):null,o=n?ee(n):null,i=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,u;switch(a){case $:u={x:i,y:t.y-r.height};break;case B:u={x:i,y:t.y+t.height};break;case T:u={x:t.x+t.width,y:s};break;case D:u={x:t.x-r.width,y:s};break;default:u={x:t.x,y:t.y}}var c=a?ke(a):null;if(c!=null){var f=c==="y"?"height":"width";switch(o){case J:u[c]=u[c]-(t[f]/2-r[f]/2);break;case fe:u[c]=u[c]+(t[f]/2-r[f]/2);break}}return u}function ue(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=n===void 0?e.placement:n,o=r.boundary,i=o===void 0?Rt:o,s=r.rootBoundary,u=s===void 0?it:s,c=r.elementContext,f=c===void 0?oe:c,v=r.altBoundary,d=v===void 0?!1:v,p=r.padding,h=p===void 0?0:p,l=pt(typeof h!="number"?h:ct(h,pe)),g=f===oe?Mt:oe,w=e.rects.popper,y=e.elements[d?g:f],O=nr(Q(y)?y:y.contextElement||U(e.elements.popper),i,u),m=_(e.elements.reference),A=dt({reference:m,element:w,strategy:"absolute",placement:a}),b=Pe(Object.assign({},w,A)),x=f===oe?b:m,E={top:O.top-x.top+l.top,bottom:x.bottom-O.bottom+l.bottom,left:O.left-x.left+l.left,right:x.right-O.right+l.right},C=e.modifiersData.offset;if(f===oe&&C){var M=C[a];Object.keys(E).forEach(function(P){var L=[T,B].indexOf(P)>=0?1:-1,S=[$,B].indexOf(P)>=0?"y":"x";E[P]+=M[S]*L})}return E}function ar(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=r.boundary,o=r.rootBoundary,i=r.padding,s=r.flipVariations,u=r.allowedAutoPlacements,c=u===void 0?st:u,f=ee(n),v=f?s?ze:ze.filter(function(h){return ee(h)===f}):pe,d=v.filter(function(h){return c.indexOf(h)>=0});d.length===0&&(d=v);var p=d.reduce(function(h,l){return h[l]=ue(e,{placement:l,boundary:a,rootBoundary:o,padding:i})[H(l)],h},{});return Object.keys(p).sort(function(h,l){return p[h]-p[l]})}function or(e){if(H(e)===$e)return[];var t=be(e);return[Je(e),t,Je(t)]}function ir(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,i=r.altAxis,s=i===void 0?!0:i,u=r.fallbackPlacements,c=r.padding,f=r.boundary,v=r.rootBoundary,d=r.altBoundary,p=r.flipVariations,h=p===void 0?!0:p,l=r.allowedAutoPlacements,g=t.options.placement,w=H(g),y=w===g,O=u||(y||!h?[be(g)]:or(g)),m=[g].concat(O).reduce(function(G,V){return G.concat(H(V)===$e?ar(t,{placement:V,boundary:f,rootBoundary:v,padding:c,flipVariations:h,allowedAutoPlacements:l}):V)},[]),A=t.rects.reference,b=t.rects.popper,x=new Map,E=!0,C=m[0],M=0;M<m.length;M++){var P=m[M],L=H(P),S=ee(P)===J,te=[$,B].indexOf(L)>=0,re=te?"width":"height",k=ue(t,{placement:P,boundary:f,rootBoundary:v,altBoundary:d,padding:c}),j=te?S?T:D:S?B:$;A[re]>b[re]&&(j=be(j));var le=be(j),X=[];if(o&&X.push(k[L]<=0),s&&X.push(k[j]<=0,k[le]<=0),X.every(function(G){return G})){C=P,E=!1;break}x.set(P,X)}if(E)for(var de=h?3:1,Oe=function(V){var ae=m.find(function(me){var Y=x.get(me);if(Y)return Y.slice(0,V).every(function(Ae){return Ae})});if(ae)return C=ae,"break"},ne=de;ne>0;ne--){var ve=Oe(ne);if(ve==="break")break}t.placement!==C&&(t.modifiersData[n]._skip=!0,t.placement=C,t.reset=!0)}}const sr={name:"flip",enabled:!0,phase:"main",fn:ir,requiresIfExists:["offset"],data:{_skip:!1}};function Ze(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function _e(e){return[$,T,B,D].some(function(t){return e[t]>=0})}function fr(e){var t=e.state,r=e.name,n=t.rects.reference,a=t.rects.popper,o=t.modifiersData.preventOverflow,i=ue(t,{elementContext:"reference"}),s=ue(t,{altBoundary:!0}),u=Ze(i,n),c=Ze(s,a,o),f=_e(u),v=_e(c);t.modifiersData[r]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":v})}const ur={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:fr};function pr(e,t,r){var n=H(e),a=[D,$].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,i=o[0],s=o[1];return i=i||0,s=(s||0)*a,[D,T].indexOf(n)>=0?{x:s,y:i}:{x:i,y:s}}function cr(e){var t=e.state,r=e.options,n=e.name,a=r.offset,o=a===void 0?[0,0]:a,i=st.reduce(function(f,v){return f[v]=pr(v,t.rects,o),f},{}),s=i[t.placement],u=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=i}const lr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:cr};function dr(e){var t=e.state,r=e.name;t.modifiersData[r]=dt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const vr={name:"popperOffsets",enabled:!0,phase:"read",fn:dr,data:{}};function mr(e){return e==="x"?"y":"x"}function hr(e){var t=e.state,r=e.options,n=e.name,a=r.mainAxis,o=a===void 0?!0:a,i=r.altAxis,s=i===void 0?!1:i,u=r.boundary,c=r.rootBoundary,f=r.altBoundary,v=r.padding,d=r.tether,p=d===void 0?!0:d,h=r.tetherOffset,l=h===void 0?0:h,g=ue(t,{boundary:u,rootBoundary:c,padding:v,altBoundary:f}),w=H(t.placement),y=ee(t.placement),O=!y,m=ke(w),A=mr(m),b=t.modifiersData.popperOffsets,x=t.rects.reference,E=t.rects.popper,C=typeof l=="function"?l(Object.assign({},t.rects,{placement:t.placement})):l,M=typeof C=="number"?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(!!b){if(o){var S,te=m==="y"?$:D,re=m==="y"?B:T,k=m==="y"?"height":"width",j=b[m],le=j+g[te],X=j-g[re],de=p?-E[k]/2:0,Oe=y===J?x[k]:E[k],ne=y===J?-E[k]:-x[k],ve=t.elements.arrow,G=p&&ve?Se(ve):{width:0,height:0},V=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ut(),ae=V[te],me=V[re],Y=ie(0,x[k],G[k]),Ae=O?x[k]/2-de-Y-ae-M.mainAxis:Oe-Y-ae-M.mainAxis,vt=O?-x[k]/2+de+Y+me+M.mainAxis:ne+Y+me+M.mainAxis,Ee=t.elements.arrow&&ce(t.elements.arrow),mt=Ee?m==="y"?Ee.clientTop||0:Ee.clientLeft||0:0,je=(S=P==null?void 0:P[m])!=null?S:0,ht=j+Ae-je-mt,gt=j+vt-je,We=ie(p?we(le,ht):le,j,p?K(X,gt):X);b[m]=We,L[m]=We-j}if(s){var Fe,yt=m==="x"?$:D,bt=m==="x"?B:T,z=b[A],he=A==="y"?"height":"width",He=z+g[yt],Ne=z-g[bt],Ce=[$,D].indexOf(w)!==-1,Ie=(Fe=P==null?void 0:P[A])!=null?Fe:0,Ve=Ce?He:z-x[he]-E[he]-Ie+M.altAxis,qe=Ce?z+x[he]+E[he]-Ie-M.altAxis:Ne,Ue=p&&Ce?Nt(Ve,z,qe):ie(p?Ve:He,z,p?qe:Ne);b[A]=Ue,L[A]=Ue-z}t.modifiersData[n]=L}}const gr={name:"preventOverflow",enabled:!0,phase:"main",fn:hr,requiresIfExists:["offset"]};function yr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function br(e){return e===W(e)||!N(e)?Be(e):yr(e)}function wr(e){var t=e.getBoundingClientRect(),r=Z(t.width)/e.offsetWidth||1,n=Z(t.height)/e.offsetHeight||1;return r!==1||n!==1}function xr(e,t,r){r===void 0&&(r=!1);var n=N(t),a=N(t)&&wr(t),o=U(t),i=_(e,a),s={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(n||!n&&!r)&&((q(t)!=="body"||Le(o))&&(s=br(t)),N(t)?(u=_(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):o&&(u.x=Te(o))),{x:i.left+s.scrollLeft-u.x,y:i.top+s.scrollTop-u.y,width:i.width,height:i.height}}function Or(e){var t=new Map,r=new Set,n=[];e.forEach(function(o){t.set(o.name,o)});function a(o){r.add(o.name);var i=[].concat(o.requires||[],o.requiresIfExists||[]);i.forEach(function(s){if(!r.has(s)){var u=t.get(s);u&&a(u)}}),n.push(o)}return e.forEach(function(o){r.has(o.name)||a(o)}),n}function Ar(e){var t=Or(e);return Wt.reduce(function(r,n){return r.concat(t.filter(function(a){return a.phase===n}))},[])}function Er(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Cr(e){var t=e.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var et={placement:"bottom",modifiers:[],strategy:"absolute"};function tt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Rr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,o=a===void 0?et:a;return function(s,u,c){c===void 0&&(c=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},et,o),modifiersData:{},elements:{reference:s,popper:u},attributes:{},styles:{}},v=[],d=!1,p={state:f,setOptions:function(w){var y=typeof w=="function"?w(f.options):w;l(),f.options=Object.assign({},o,f.options,y),f.scrollParents={reference:Q(s)?se(s):s.contextElement?se(s.contextElement):[],popper:se(u)};var O=Ar(Cr([].concat(n,f.options.modifiers)));return f.orderedModifiers=O.filter(function(m){return m.enabled}),h(),p.update()},forceUpdate:function(){if(!d){var w=f.elements,y=w.reference,O=w.popper;if(!!tt(y,O)){f.rects={reference:xr(y,ce(O),f.options.strategy==="fixed"),popper:Se(O)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(M){return f.modifiersData[M.name]=Object.assign({},M.data)});for(var m=0;m<f.orderedModifiers.length;m++){if(f.reset===!0){f.reset=!1,m=-1;continue}var A=f.orderedModifiers[m],b=A.fn,x=A.options,E=x===void 0?{}:x,C=A.name;typeof b=="function"&&(f=b({state:f,options:E,name:C,instance:p})||f)}}}},update:Er(function(){return new Promise(function(g){p.forceUpdate(),g(f)})}),destroy:function(){l(),d=!0}};if(!tt(s,u))return p;p.setOptions(c).then(function(g){!d&&c.onFirstUpdate&&c.onFirstUpdate(g)});function h(){f.orderedModifiers.forEach(function(g){var w=g.name,y=g.options,O=y===void 0?{}:y,m=g.effect;if(typeof m=="function"){var A=m({state:f,name:w,instance:p,options:O}),b=function(){};v.push(A||b)}})}function l(){v.forEach(function(g){return g()}),v=[]}return p}}var Mr=Rr({defaultModifiers:[ur,vr,Kt,Jt,lr,sr,gr,Ut]}),rt=function(t){return{position:t,top:"0",left:"0",opacity:"0",pointerEvents:"none"}},Pr={name:"applyStyles",enabled:!1},$r={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(t){var r=t.state;return function(){var n=r.elements,a=n.reference,o=n.popper;if("removeAttribute"in a){var i=(a.getAttribute("aria-describedby")||"").split(",").filter(function(s){return s.trim()!==o.id});i.length?a.setAttribute("aria-describedby",i.join(",")):a.removeAttribute("aria-describedby")}}},fn:function(t){var r,n=t.state,a=n.elements,o=a.popper,i=a.reference,s=(r=o.getAttribute("role"))==null?void 0:r.toLowerCase();if(o.id&&s==="tooltip"&&"setAttribute"in i){var u=i.getAttribute("aria-describedby");if(u&&u.split(",").indexOf(o.id)!==-1)return;i.setAttribute("aria-describedby",u?u+","+o.id:o.id)}}},Dr=[];function zr(e,t,r){var n=r===void 0?{}:r,a=n.enabled,o=a===void 0?!0:a,i=n.placement,s=i===void 0?"bottom":i,u=n.strategy,c=u===void 0?"absolute":u,f=n.modifiers,v=f===void 0?Dr:f,d=wt(n,["enabled","placement","strategy","modifiers"]),p=R.exports.useRef(),h=R.exports.useCallback(function(){var m;(m=p.current)==null||m.update()},[]),l=R.exports.useCallback(function(){var m;(m=p.current)==null||m.forceUpdate()},[]),g=Ct(R.exports.useState({placement:s,update:h,forceUpdate:l,attributes:{},styles:{popper:rt(c),arrow:{}}})),w=g[0],y=g[1],O=R.exports.useMemo(function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(A){var b=A.state,x={},E={};Object.keys(b.elements).forEach(function(C){x[C]=b.styles[C],E[C]=b.attributes[C]}),y({state:b,styles:x,attributes:E,update:h,forceUpdate:l,placement:b.placement})}}},[h,l,y]);return R.exports.useEffect(function(){!p.current||!o||p.current.setOptions({placement:s,strategy:c,modifiers:[].concat(v,[O,Pr])})},[c,s,O,o]),R.exports.useEffect(function(){if(!(!o||e==null||t==null))return p.current=Mr(e,t,F({},d,{placement:s,strategy:c,modifiers:[].concat(v,[$r,O])})),function(){p.current!=null&&(p.current.destroy(),p.current=void 0,y(function(m){return F({},m,{attributes:{},styles:{popper:rt(c)}})}))}},[o,e,t]),w}function Sr(e){return e&&"setState"in e?Et.findDOMNode(e):e!=null?e:null}const kr=function(e){return At(Sr(e))};var Br=27,nt=function(){};function Tr(e){return e.button===0}function Lr(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var at=function(t){return t&&("current"in t?t.current:t)};function Kr(e,t,r){var n=r===void 0?{}:r,a=n.disabled,o=n.clickTrigger,i=o===void 0?"click":o,s=R.exports.useRef(!1),u=t||nt,c=R.exports.useCallback(function(d){var p,h=at(e);s.current=!h||Lr(d)||!Tr(d)||!!Ot(h,(p=d.composedPath==null?void 0:d.composedPath()[0])!=null?p:d.target)},[e]),f=Xe(function(d){s.current||u(d)}),v=Xe(function(d){d.keyCode===Br&&u(d)});R.exports.useEffect(function(){if(!(a||e==null)){var d=window.event,p=kr(at(e)),h=ge(p,i,c,!0),l=ge(p,i,function(y){if(y===d){d=void 0;return}f(y)}),g=ge(p,"keyup",function(y){if(y===d){d=void 0;return}v(y)}),w=[];return"ontouchstart"in p.documentElement&&(w=[].slice.call(p.body.children).map(function(y){return ge(y,"mousemove",nt)})),function(){h(),l(),g(),w.forEach(function(y){return y()})}}},[e,a,i,c,f,v])}function jr(e){var t={};return Array.isArray(e)?(e==null||e.forEach(function(r){t[r.name]=r}),t):e||t}function Wr(e){return e===void 0&&(e={}),Array.isArray(e)?e:Object.keys(e).map(function(t){return e[t].name=t,e[t]})}function Gr(e){var t,r,n,a,o=e.enabled,i=e.enableEvents,s=e.placement,u=e.flip,c=e.offset,f=e.fixed,v=e.containerPadding,d=e.arrowElement,p=e.popperConfig,h=p===void 0?{}:p,l=jr(h.modifiers);return F({},h,{placement:s,enabled:o,strategy:f?"fixed":h.strategy,modifiers:Wr(F({},l,{eventListeners:{enabled:i},preventOverflow:F({},l.preventOverflow,{options:v?F({padding:v},(t=l.preventOverflow)==null?void 0:t.options):(r=l.preventOverflow)==null?void 0:r.options}),offset:{options:F({offset:c},(n=l.offset)==null?void 0:n.options)},arrow:F({},l.arrow,{enabled:!!d,options:F({},(a=l.arrow)==null?void 0:a.options,{element:d})}),flip:F({enabled:!!u},l.flip)}))})}var ot=function(t){return!t||typeof t=="function"?t:function(r){t.current=r}};function Fr(e,t){var r=ot(e),n=ot(t);return function(a){r&&r(a),n&&n(a)}}function Jr(e,t){return R.exports.useMemo(function(){return Fr(e,t)},[e,t])}function Me(e){var t=window.getComputedStyle(e),r=parseFloat(t.marginTop)||0,n=parseFloat(t.marginRight)||0,a=parseFloat(t.marginBottom)||0,o=parseFloat(t.marginLeft)||0;return{top:r,right:n,bottom:a,left:o}}function Qr(){var e=R.exports.useRef(null),t=R.exports.useRef(null),r=R.exports.useRef(null),n=Ye(void 0,"popover"),a=Ye(void 0,"dropdown-menu"),o=R.exports.useCallback(function(c){!c||!(Re(c,n)||Re(c,a))||(t.current=Me(c),c.style.margin="0",e.current=c)},[n,a]),i=R.exports.useMemo(function(){return{name:"offset",options:{offset:function(f){var v=f.placement;if(!t.current)return[0,0];var d=t.current,p=d.top,h=d.left,l=d.bottom,g=d.right;switch(v.split("-")[0]){case"top":return[0,l];case"left":return[0,g];case"bottom":return[0,p];case"right":return[0,h];default:return[0,0]}}}}},[t]),s=R.exports.useMemo(function(){return{name:"arrow",options:{padding:function(){if(!r.current)return 0;var f=r.current,v=f.top,d=f.right,p=v||d;return{top:p,left:p,right:p,bottom:p}}}}},[r]),u=R.exports.useMemo(function(){return{name:"popoverArrowMargins",enabled:!0,phase:"main",fn:function(){},requiresIfExists:["arrow"],effect:function(f){var v=f.state;if(!(!e.current||!v.elements.arrow||!Re(e.current,n))){if(v.modifiersData["arrow#persistent"]){var d=Me(v.elements.arrow),p=d.top,h=d.right,l=p||h;v.modifiersData["arrow#persistent"].padding={top:l,left:l,right:l,bottom:l}}else r.current=Me(v.elements.arrow);return v.elements.arrow.style.margin="0",function(){v.elements.arrow&&(v.elements.arrow.style.margin="")}}}}},[n]);return[o,[i,s,u]]}export{vr as a,gr as b,Kt as c,Ut as d,Jt as e,sr as f,q as g,ur as h,N as i,Kr as j,Qr as k,Jr as l,Gr as m,st as n,lr as o,Rr as p,Sr as s,zr as u};
