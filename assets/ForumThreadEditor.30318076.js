import{r as f,j as o,F as V,a as C}from"./jsx-runtime.8ee42ca4.js";import{a4 as i,cN as K,bI as y,cO as W,cP as $,a6 as Q,cQ as B,cR as Y,cS as j,cT as G,cU as H,cV as z,cW as X,cX as Z,cY as J,cZ as D,c_ as ee,aX as ae}from"./index.6e226ad1.js";import{u as S}from"./useMutation.ac2022a1.js";import{u as te}from"./useInfiniteQuery.c55a2f77.js";import{I as F}from"./IconSvg.9744025b.js";import{e as se}from"./AccessRequirementList.3e05cfbf.js";import{U as ne}from"./UserSearchBoxV2.e6c98aff.js";import{M as R}from"./Modal.5b3f34eb.js";import{s as re}from"./startCase.4e7265e4.js";import{b as ce}from"./isArray.649754a9.js";import{B as N}from"./Button.32185a3f.js";function be(e,t,s,a,n,r){const{accessToken:m}=i();return te(["reply",e,s,n,a,t],async d=>K(m,e,s,d.pageParam,a,t,n),{...r,getNextPageParam:(d,h)=>{const k=h.flatMap(M=>M.results).length;if(d.totalNumberOfResults>k)return k}})}function Ie(e,t){const{accessToken:s}=i(),a=async()=>{const n=await Y(e.messageKey,s);return(await fetch(n.messageUrl,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text()};return Q(["reply",e.threadId,e.id,e.messageKey],a,t)}function oe(e){const t=y(),{accessToken:s}=i();return S(a=>W(a,s),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["reply",a.threadId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function ie(e){const t=y(),{accessToken:s}=i();return S(a=>$(a,s),{...e,onSuccess:async(a,n,r)=>{t.invalidateQueries(["reply",a.threadId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function ve(e){const t=y(),{accessToken:s}=i();return S(a=>B(s,a.replyId),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["reply",n.threadId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function qe(e){const{data:t,isLoading:s}=ue(e),{data:a,isLoading:n}=de(t,{enabled:!!t}),{mutate:r}=ye(),{mutate:m}=Se(),d=f.exports.useCallback(()=>{t&&(t!=null&&t.isPinned?m(t):r(t))},[m,r,t]);return{threadData:t,threadBody:a,togglePin:d,isLoading:n||s}}function ue(e,t){const{accessToken:s}=i();return Q(["thread",e,s],()=>j(e,s),t)}function de(e,t){const{accessToken:s}=i(),a=async()=>{const n=await ee(e.messageKey,s);return(await fetch(n.messageUrl,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text()};return Q(["thread",e==null?void 0:e.id,e==null?void 0:e.messageKey,s],a,t)}function le(e){const t=y(),{accessToken:s}=i();return S(a=>G(s,a),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["forumthread",a.forumId]),await t.invalidateQueries(["thread",n.threadId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function fe(e){const t=y(),{accessToken:s}=i();return S(a=>H(s,a),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["thread",n.threadId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function me(e){const t=y(),{accessToken:s}=i();return S(a=>z(s,a),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["forumthread",a.forumId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function Le(e){const t=y(),{accessToken:s}=i();return S(a=>X(s,a.id),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["forumthread",n.forumId]),await t.invalidateQueries(["thread",n.id]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function Oe(e){const t=y(),{accessToken:s}=i();return S(a=>Z(s,a.id),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["forumthread",n.forumId]),await t.invalidateQueries(["thread",n.id]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function ye(e){const t=y(),{accessToken:s}=i();return S(a=>J(s,a.id),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["thread",n.id]),await t.invalidateQueries(["forumthread",n.forumId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function Se(e){const t=y(),{accessToken:s}=i();return S(a=>D(s,a.id),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["thread",n.id]),await t.invalidateQueries(["forumthread",n.forumId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}const ge=["title","bold","italic","strikethrough","code","latex","subscript","superscript","link","image"],P={title:{openSyntax:"###",closeSyntax:""},bold:{openSyntax:"**",closeSyntax:"**"},italic:{openSyntax:"_",closeSyntax:"_"},strikethrough:{openSyntax:"--",closeSyntax:"--"},code:{openSyntax:"```",closeSyntax:"```"},latex:{openSyntax:"$$\\(",closeSyntax:"\\)$$"},subscript:{openSyntax:"~",closeSyntax:"~"},superscript:{openSyntax:"^",closeSyntax:"^"},link:{openSyntax:"[",closeSyntax:"](url)"},image:{openSyntax:"![",closeSyntax:"](image-url)"}},b=({show:e,onClose:t,handleUserTag:s})=>{const a=f.exports.useCallback((n,r)=>{n&&r&&s(r.userName),t()},[t,s]);return o(V,{children:C(R,{show:e,onHide:t,backdrop:"static",animation:!1,children:[o(R.Header,{closeButton:!0,children:o(R.Title,{children:"Find User or Team"})}),o(R.Body,{children:o(ne,{placeholder:"Search for a user or team name",onChange:a,typeFilter:ae.ALL,focusOnSelect:!0})})]})})};try{b.displayName="UserMentionModal",b.__docgenInfo={description:"",displayName:"UserMentionModal",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},handleUserTag:{defaultValue:null,description:"",name:"handleUserTag",required:!0,type:{name:"(user: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/markdown/UserMentionModal.tsx#UserMentionModal"]={docgenInfo:b.__docgenInfo,name:"UserMentionModal",path:"src/lib/containers/markdown/UserMentionModal.tsx#UserMentionModal"})}catch{}var A=(e=>(e.WRITE="WRITE",e.PREVIEW="PREVIEW",e))(A||{});const I=({placeholder:e,text:t,setText:s})=>{const[a,n]=f.exports.useState("WRITE"),[r,m]=f.exports.useState(0),[d,h]=f.exports.useState(!1),[k,M]=f.exports.useState(!1),p=f.exports.useRef(null);f.exports.useEffect(()=>{const c=p.current;c&&c.setSelectionRange(r,r)},[p,r]),f.exports.useEffect(()=>{var c;(c=p.current)==null||c.focus()},[d]);const v=c=>{const u=[],l=p.current;if(l){const T=l==null?void 0:l.selectionStart,w=t.substring(0,T),_=t.substring(T,t.length);m(T+c.length+1),u.push(w,`${k?"":"@"}${c.replace(/\s/g,"")}`,_)}s(u.join("")),M(!1)},q=c=>{c.key=="@"&&(M(!0),h(!0))},L=c=>{const u=p.current;if(u){const l=u.selectionStart,T=u.selectionEnd,w=t.substring(l,T),_=t.substring(0,l),g=t.substring(T,t.length),x=P[c].openSyntax,O=P[c].closeSyntax;switch(c){case"code":{const E=[];E.push(_,x,w,O,g),s(E.join(`\r
`)),u.focus(),m(l+x.length+2);break}case"title":case"bold":case"italic":case"strikethrough":case"latex":case"subscript":case"superscript":case"link":case"image":{const E=`${_}${x}${w}${O}${g}`;u.focus(),m(l+x.length),s(E)}}}};return C("div",{className:"bootstrap-4-backport MarkdownEditor",children:[C("div",{className:"MarkdownEditorControls",children:[o("div",{className:"Tabs",children:Object.keys(A).map(c=>o("button",{className:"Tab",role:"tab","aria-selected":c===a,onClick:u=>{u.stopPropagation(),n(A[c])},children:c},c))}),a==="WRITE"&&C("div",{className:"MarkdownEditorControlsToolbar",children:[ge.map(c=>o("button",{onClick:()=>L(c),children:o(F,{icon:c,label:re(c)})},c)),o("button",{onClick:()=>h(!0),children:o(F,{icon:"tag",label:"Mention"})})]})]}),o("div",{children:a==="WRITE"?o("textarea",{onChange:c=>s(c.target.value),style:{width:"100%"},rows:6,value:t,ref:p,placeholder:e,onKeyDown:q}):t?o(se,{markdown:t}):"Nothing to preview"}),o(b,{show:d,onClose:()=>h(!1),handleUserTag:v})]})};try{I.displayName="MarkdownEditor",I.__docgenInfo={description:"",displayName:"MarkdownEditor",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},setText:{defaultValue:null,description:"",name:"setText",required:!0,type:{name:"(text: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/markdown/MarkdownEditor.tsx#MarkdownEditor"]={docgenInfo:I.__docgenInfo,name:"MarkdownEditor",path:"src/lib/containers/markdown/MarkdownEditor.tsx#MarkdownEditor"})}catch{}const U=({initialText:e,initialTitle:t,id:s,onClose:a,isReply:n})=>{const[r,m]=f.exports.useState(t!=null?t:""),[d,h]=f.exports.useState(e!=null?e:""),{mutate:k,isLoading:M}=le({onSuccess:()=>a()}),{mutate:p,isLoading:v}=fe({onSuccess:()=>a()}),{mutate:q,isLoading:L}=me({onSuccess:()=>a()}),{mutate:c,isLoading:u}=oe({onSuccess:()=>a()}),{mutate:l,isLoading:T}=ie({onSuccess:()=>a()}),w=v||u||L||M||T,_=(g,x)=>{n?e?l({replyId:s,messageMarkdown:g}):c({threadId:s,messageMarkdown:g}):t?(k({title:x,threadId:s}),p({messageMarkdown:g,threadId:s})):q({forumId:s,title:x,messageMarkdown:g})};return C("div",{className:"bootstrap-4-backport",children:[!n&&o(ce,{type:"text",placeholder:"Title",value:r,onChange:g=>m(g.target.value)}),o(I,{text:d,setText:h}),C("div",{style:{display:"flex",justifyContent:"flex-end"},children:[o(N,{onClick:a,variant:"light",children:"Cancel"}),o(N,{disabled:w,onClick:()=>_(d,r),variant:"primary",children:w?"Saving":"Save"})]})]})};try{U.displayName="ForumThreadEditor",U.__docgenInfo={description:"",displayName:"ForumThreadEditor",props:{initialTitle:{defaultValue:null,description:"",name:"initialTitle",required:!1,type:{name:"string"}},initialText:{defaultValue:null,description:"",name:"initialText",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isReply:{defaultValue:null,description:"",name:"isReply",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/discussion_forum/ForumThreadEditor.tsx#ForumThreadEditor"]={docgenInfo:U.__docgenInfo,name:"ForumThreadEditor",path:"src/lib/containers/discussion_forum/ForumThreadEditor.tsx#ForumThreadEditor"})}catch{}export{U as F,ve as a,qe as b,Le as c,Oe as d,be as e,Ie as u};
