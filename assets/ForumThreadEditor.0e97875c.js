import{r as f,j as o,F as P,a as C}from"./jsx-runtime.e6c7cb0f.js";import{M as i,cx as V,bG as y,cy as $,cz as B,T as F,cA as W,cB as G,cC as j,cD as Y,cE as H,cF as z,cG as J,cH as X,cI as Z,cJ as D,cK as ee,aI as ae}from"./index.a4d7c90b.js";import{u as S}from"./useMutation.5ddf68a2.js";import{u as te}from"./useInfiniteQuery.c9325a79.js";import{I as Q}from"./IconSvg.7c6c26ba.js";import{a as se}from"./HasAccessV2.d3489065.js";import{U as ne}from"./UserSearchBoxV2.101b94fb.js";import{M as R}from"./Modal.65e1d9b7.js";import{s as re}from"./startCase.404d4440.js";import{b as ce}from"./isArray.d7f4d705.js";import{B as K}from"./Button.55945b82.js";function be(e,t,s,a,n,r){const{accessToken:m}=i();return te(["reply",e,s,n,a,t],async d=>V(m,e,s,d.pageParam,a,t,n),{...r,getNextPageParam:(d,h)=>{const k=h.flatMap(M=>M.results).length;if(d.totalNumberOfResults>k)return k}})}function Ie(e,t){const{accessToken:s}=i(),a=async()=>{const n=await G(e.messageKey,s);return(await fetch(n.messageUrl,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text()};return F(["reply",e.threadId,e.id,e.messageKey],a,t)}function oe(e){const t=y(),{accessToken:s}=i();return S(a=>$(a,s),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["reply",a.threadId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function ie(e){const t=y(),{accessToken:s}=i();return S(a=>B(a,s),{...e,onSuccess:async(a,n,r)=>{t.invalidateQueries(["reply",a.threadId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function ve(e){const t=y(),{accessToken:s}=i();return S(a=>W(s,a.replyId),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["reply",n.threadId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function qe(e){const{data:t,isLoading:s}=ue(e),{data:a,isLoading:n}=de(t,{enabled:!!t}),{mutate:r}=ye(),{mutate:m}=Se(),d=f.exports.useCallback(()=>{t&&(t!=null&&t.isPinned?m(t):r(t))},[m,r,t]);return{threadData:t,threadBody:a,togglePin:d,isLoading:n||s}}function ue(e,t){const{accessToken:s}=i();return F(["thread",e,s],()=>j(e,s),t)}function de(e,t){const{accessToken:s}=i(),a=async()=>{const n=await ee(e.messageKey,s);return(await fetch(n.messageUrl,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text()};return F(["thread",e==null?void 0:e.id,e==null?void 0:e.messageKey,s],a,t)}function le(e){const t=y(),{accessToken:s}=i();return S(a=>Y(s,a),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["forumthread",a.forumId]),await t.invalidateQueries(["thread",n.threadId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function fe(e){const t=y(),{accessToken:s}=i();return S(a=>H(s,a),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["thread",n.threadId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function me(e){const t=y(),{accessToken:s}=i();return S(a=>z(s,a),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["forumthread",a.forumId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function Le(e){const t=y(),{accessToken:s}=i();return S(a=>J(s,a.id),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["forumthread",n.forumId]),await t.invalidateQueries(["thread",n.id]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function Ae(e){const t=y(),{accessToken:s}=i();return S(a=>X(s,a.id),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["forumthread",n.forumId]),await t.invalidateQueries(["thread",n.id]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function ye(e){const t=y(),{accessToken:s}=i();return S(a=>Z(s,a.id),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["thread",n.id]),await t.invalidateQueries(["forumthread",n.forumId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}function Se(e){const t=y(),{accessToken:s}=i();return S(a=>D(s,a.id),{...e,onSuccess:async(a,n,r)=>{await t.invalidateQueries(["thread",n.id]),await t.invalidateQueries(["forumthread",n.forumId]),e!=null&&e.onSuccess&&await e.onSuccess(a,n,r)}})}const ge=["title","bold","italic","strikethrough","code","latex","subscript","superscript","link","image"],N={title:{openSyntax:"###",closeSyntax:""},bold:{openSyntax:"**",closeSyntax:"**"},italic:{openSyntax:"_",closeSyntax:"_"},strikethrough:{openSyntax:"--",closeSyntax:"--"},code:{openSyntax:"```",closeSyntax:"```"},latex:{openSyntax:"$$\\(",closeSyntax:"\\)$$"},subscript:{openSyntax:"~",closeSyntax:"~"},superscript:{openSyntax:"^",closeSyntax:"^"},link:{openSyntax:"[",closeSyntax:"](url)"},image:{openSyntax:"![",closeSyntax:"](image-url)"}},b=({show:e,onClose:t,handleUserTag:s})=>{const a=f.exports.useCallback((n,r)=>{n&&r&&s(r.userName),t()},[t,s]);return o(P,{children:C(R,{show:e,onHide:t,backdrop:"static",animation:!1,children:[o(R.Header,{closeButton:!0,children:o(R.Title,{children:"Find User or Team"})}),o(R.Body,{children:o(ne,{placeholder:"Search for a user or team name",onChange:a,typeFilter:ae.ALL,focusOnSelect:!0})})]})})};try{b.displayName="UserMentionModal",b.__docgenInfo={description:"",displayName:"UserMentionModal",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},handleUserTag:{defaultValue:null,description:"",name:"handleUserTag",required:!0,type:{name:"(user: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/markdown/UserMentionModal.tsx#UserMentionModal"]={docgenInfo:b.__docgenInfo,name:"UserMentionModal",path:"src/lib/containers/markdown/UserMentionModal.tsx#UserMentionModal"})}catch{}var U=(e=>(e.WRITE="WRITE",e.PREVIEW="PREVIEW",e))(U||{});const I=({placeholder:e,text:t,setText:s})=>{const[a,n]=f.exports.useState("WRITE"),[r,m]=f.exports.useState(0),[d,h]=f.exports.useState(!1),[k,M]=f.exports.useState(!1),p=f.exports.useRef(null);f.exports.useEffect(()=>{const c=p.current;c&&c.setSelectionRange(r,r)},[p,r]),f.exports.useEffect(()=>{var c;(c=p.current)==null||c.focus()},[d]);const v=c=>{const u=[],l=p.current;if(l){const T=l==null?void 0:l.selectionStart,w=t.substring(0,T),_=t.substring(T,t.length);m(T+c.length+1),u.push(w,`${k?"":"@"}${c.replace(/\s/g,"")}`,_)}s(u.join("")),M(!1)},q=c=>{c.key=="@"&&(M(!0),h(!0))},L=c=>{const u=p.current;if(u){const l=u.selectionStart,T=u.selectionEnd,w=t.substring(l,T),_=t.substring(0,l),g=t.substring(T,t.length),x=N[c].openSyntax,A=N[c].closeSyntax;switch(c){case"code":{const E=[];E.push(_,x,w,A,g),s(E.join(`\r
`)),u.focus(),m(l+x.length+2);break}case"title":case"bold":case"italic":case"strikethrough":case"latex":case"subscript":case"superscript":case"link":case"image":{const E=`${_}${x}${w}${A}${g}`;u.focus(),m(l+x.length),s(E)}}}};return C("div",{className:"bootstrap-4-backport MarkdownEditor",children:[C("div",{className:"MarkdownEditorControls",children:[o("div",{className:"Tabs",children:Object.keys(U).map(c=>o("button",{className:"Tab",role:"tab","aria-selected":c===a,onClick:u=>{u.stopPropagation(),n(U[c])},children:c},c))}),a==="WRITE"&&C("div",{className:"MarkdownEditorControlsToolbar",children:[ge.map(c=>o("button",{onClick:()=>L(c),children:o(Q,{icon:c,label:re(c)})},c)),o("button",{onClick:()=>h(!0),children:o(Q,{icon:"tag",label:"Mention"})})]})]}),o("div",{children:a==="WRITE"?o("textarea",{onChange:c=>s(c.target.value),style:{width:"100%"},rows:6,value:t,ref:p,placeholder:e,onKeyDown:q}):t?o(se,{markdown:t}):"Nothing to preview"}),o(b,{show:d,onClose:()=>h(!1),handleUserTag:v})]})};try{I.displayName="MarkdownEditor",I.__docgenInfo={description:"",displayName:"MarkdownEditor",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},setText:{defaultValue:null,description:"",name:"setText",required:!0,type:{name:"(text: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/markdown/MarkdownEditor.tsx#MarkdownEditor"]={docgenInfo:I.__docgenInfo,name:"MarkdownEditor",path:"src/lib/containers/markdown/MarkdownEditor.tsx#MarkdownEditor"})}catch{}const O=({initialText:e,initialTitle:t,id:s,onClose:a,isReply:n})=>{const[r,m]=f.exports.useState(t!=null?t:""),[d,h]=f.exports.useState(e!=null?e:""),{mutate:k,isLoading:M}=le({onSuccess:()=>a()}),{mutate:p,isLoading:v}=fe({onSuccess:()=>a()}),{mutate:q,isLoading:L}=me({onSuccess:()=>a()}),{mutate:c,isLoading:u}=oe({onSuccess:()=>a()}),{mutate:l,isLoading:T}=ie({onSuccess:()=>a()}),w=v||u||L||M||T,_=(g,x)=>{n?e?l({replyId:s,messageMarkdown:g}):c({threadId:s,messageMarkdown:g}):t?(k({title:x,threadId:s}),p({messageMarkdown:g,threadId:s})):q({forumId:s,title:x,messageMarkdown:g})};return C("div",{className:"bootstrap-4-backport",children:[!n&&o(ce,{type:"text",placeholder:"Title",value:r,onChange:g=>m(g.target.value)}),o(I,{text:d,setText:h}),C("div",{style:{display:"flex",justifyContent:"flex-end"},children:[o(K,{onClick:a,variant:"light",children:"Cancel"}),o(K,{disabled:w,onClick:()=>_(d,r),variant:"primary",children:w?"Saving":"Save"})]})]})};try{O.displayName="ForumThreadEditor",O.__docgenInfo={description:"",displayName:"ForumThreadEditor",props:{initialTitle:{defaultValue:null,description:"",name:"initialTitle",required:!1,type:{name:"string"}},initialText:{defaultValue:null,description:"",name:"initialText",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isReply:{defaultValue:null,description:"",name:"isReply",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/discussion_forum/ForumThreadEditor.tsx#ForumThreadEditor"]={docgenInfo:O.__docgenInfo,name:"ForumThreadEditor",path:"src/lib/containers/discussion_forum/ForumThreadEditor.tsx#ForumThreadEditor"})}catch{}export{O as F,ve as a,qe as b,Le as c,Ae as d,be as e,Ie as u};
