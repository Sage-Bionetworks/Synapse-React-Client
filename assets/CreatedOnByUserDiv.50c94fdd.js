import{_ as y,u as b}from"./Button.498cd291.js";import{c as h}from"./index.57d09176.js";import{R as C,j as n,r as _,a as x}from"./jsx-runtime.f2f98a5a.js";import{c as a}from"./createWithBsPrefix.859b1c88.js";import{d as g}from"./Alert.df9cc8b6.js";import{U as D}from"./UserCard.0ebe4f67.js";import{f as U}from"./index.3643f9f4.js";import{h as I}from"./SynapseConstants.b6aa8bf5.js";var O=C.createContext(null);O.displayName="CardContext";const T=O;var R=["bsPrefix","className","variant","as"],L={variant:null},u=C.forwardRef(function(e,t){var o=e.bsPrefix,l=e.className,d=e.variant,s=e.as,c=s===void 0?"img":s,m=y(e,R),i=b(o,"card-img");return n(c,{ref:t,className:h(d?i+"-"+d:i,l),...m})});u.displayName="CardImg";u.defaultProps=L;const A=u;var $=["bsPrefix","className","bg","text","border","body","children","as"],E=g("h5"),H=g("h6"),N=a("card-body"),j=a("card-title",{Component:E}),q=a("card-subtitle",{Component:H}),F=a("card-link",{Component:"a"}),k=a("card-text",{Component:"p"}),w=a("card-header"),W=a("card-footer"),Z=a("card-img-overlay"),K={body:!1},r=C.forwardRef(function(e,t){var o=e.bsPrefix,l=e.className,d=e.bg,s=e.text,c=e.border,m=e.body,i=e.children,f=e.as,S=f===void 0?"div":f,B=y(e,$),p=b(o,"card"),P=_.exports.useMemo(function(){return{cardHeaderBsPrefix:p+"-header"}},[p]);return n(T.Provider,{value:P,children:n(S,{ref:t,...B,className:h(l,p,d&&"bg-"+d,s&&"text-"+s,c&&"border-"+c),children:m?n(N,{children:i}):i})})});r.displayName="Card";r.defaultProps=K;r.Img=A;r.Title=j;r.Subtitle=q;r.Body=N;r.Link=F;r.Text=k;r.Header=w;r.Footer=W;r.ImgOverlay=Z;const ae=r,M={timeZoneName:"short"},V={timeZone:"UTC",timeZoneName:"short"},v=({userId:e,date:t})=>{const{utcTime:o}=U();return x("div",{className:"created-on",children:[x("span",{children:["Created on"," ",t.toLocaleDateString(void 0,o?V:M).replace(",","")," ","by"," "]}),n(D,{size:I,ownerId:e})]})};try{v.displayName="CreatedOnByUserDiv",v.__docgenInfo={description:"",displayName:"CreatedOnByUserDiv",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"Date"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/CreatedOnByUserDiv.tsx#CreatedOnByUserDiv"]={docgenInfo:v.__docgenInfo,name:"CreatedOnByUserDiv",path:"src/lib/containers/evaluation_queues/CreatedOnByUserDiv.tsx#CreatedOnByUserDiv"})}catch{}export{ae as C,v as a};
