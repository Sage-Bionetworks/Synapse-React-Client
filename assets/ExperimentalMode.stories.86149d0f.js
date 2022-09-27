import{r as s,R as M,a as b,F as re,j as l}from"./jsx-runtime.9b9f5ec2.js";import{cI as te,i as ne,cJ as K}from"./index.65b6889e.js";import{u as L,B as ae}from"./Button.17fde95a.js";import{a as ie,_ as se}from"./withStyles.c4d286cc.js";import{_ as P}from"./objectWithoutPropertiesLoose.5e7699d1.js";import{a as le,c as pe}from"./useWaitForDOMRef.6edb2b10.js";import{u as ce}from"./useWillUnmount.a9334a26.js";import{s as de}from"./usePopperMarginModifiers.e3573a90.js";import{e as ue}from"./Alert.a1c2894f.js";import{O as me}from"./Overlay.940ff29e.js";import{I as fe}from"./InfoOutlined.1a2adc17.js";import{c as F}from"./index.57d09176.js";import"./isRequiredForA11y.20ed4857.js";import"./iframe.8f6c7ea4.js";import"./index.9efb4fab.js";import"./isArray.88d141d1.js";import"./index.35ce73ec.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.59ebdbf7.js";import"./toConsumableArray.c4898ee4.js";import"./hasClass.56fd144a.js";import"./Transition.95b45c06.js";import"./createSvgIcon.0c80d9df.js";var j=Math.pow(2,31)-1;function J(e,o,t){var r=t-Date.now();e.current=r<=j?setTimeout(o,r):setTimeout(function(){return J(e,o,t)},j)}function ve(){var e=le(),o=s.exports.useRef();return ce(function(){return clearTimeout(o.current)}),s.exports.useMemo(function(){var t=function(){return clearTimeout(o.current)};function r(n,i){i===void 0&&(i=0),e()&&(t(),i<=j?o.current=setTimeout(n,i):J(o,n,Date.now()+i))}return{set:r,clear:t}},[])}var he=["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"],xe=function(e){ie(o,e);function o(){return e.apply(this,arguments)||this}var t=o.prototype;return t.render=function(){return this.props.children},o}(M.Component);function ge(e){return e&&typeof e=="object"?e:{show:e,hide:e}}function U(e,o,t){var r=o[0],n=r.currentTarget,i=r.relatedTarget||r.nativeEvent[t];(!i||i!==n)&&!pe(n,i)&&e.apply(void 0,o)}var Ee={defaultShow:!1,trigger:["hover","focus"]};function W(e){var o=e.trigger,t=e.overlay,r=e.children,n=e.popperConfig,i=n===void 0?{}:n,u=e.show,d=e.defaultShow,O=d===void 0?!1:d,S=e.onToggle,N=e.delay,g=e.placement,v=e.flip,G=v===void 0?g&&g.indexOf("auto")!==-1:v,q=P(e,he),R=s.exports.useRef(null),h=ve(),C=s.exports.useRef(""),H=ue(u,O,S),k=H[0],m=H[1],x=ge(N),A=typeof r!="function"?M.Children.only(r).props:{},$=A.onFocus,B=A.onBlur,D=A.onClick,Q=s.exports.useCallback(function(){return de(R.current)},[]),w=s.exports.useCallback(function(){if(h.clear(),C.current="show",!x.show){m(!0);return}h.set(function(){C.current==="show"&&m(!0)},x.show)},[x.show,m,h]),E=s.exports.useCallback(function(){if(h.clear(),C.current="hide",!x.hide){m(!1);return}h.set(function(){C.current==="hide"&&m(!1)},x.hide)},[x.hide,m,h]),V=s.exports.useCallback(function(){w();for(var p=arguments.length,c=new Array(p),a=0;a<p;a++)c[a]=arguments[a];$==null||$.apply(void 0,c)},[w,$]),Z=s.exports.useCallback(function(){E();for(var p=arguments.length,c=new Array(p),a=0;a<p;a++)c[a]=arguments[a];B==null||B.apply(void 0,c)},[E,B]),_=s.exports.useCallback(function(){m(!k),D&&D.apply(void 0,arguments)},[D,m,k]),ee=s.exports.useCallback(function(){for(var p=arguments.length,c=new Array(p),a=0;a<p;a++)c[a]=arguments[a];U(w,c,"fromElement")},[w]),oe=s.exports.useCallback(function(){for(var p=arguments.length,c=new Array(p),a=0;a<p;a++)c[a]=arguments[a];U(E,c,"toElement")},[E]),I=o==null?[]:[].concat(o),f={};return I.indexOf("click")!==-1&&(f.onClick=_),I.indexOf("focus")!==-1&&(f.onFocus=V,f.onBlur=Z),I.indexOf("hover")!==-1&&(f.onMouseOver=ee,f.onMouseOut=oe),b(re,{children:[typeof r=="function"?r(se({},f,{ref:R})):l(xe,{ref:R,children:s.exports.cloneElement(r,f)}),l(me,{...q,show:k,onHide:E,flip:G,placement:g,popperConfig:i,target:Q,children:t})]})}W.defaultProps=Ee;var Me=["as","bsPrefix","className","children"],Ce=M.forwardRef(function(e,o){var t=e.as,r=t===void 0?"div":t,n=e.bsPrefix,i=e.className,u=e.children,d=P(e,Me);return n=L(n,"popover-header"),l(r,{ref:o,...d,className:F(n,i),children:u})});const we=Ce;var ye=["as","bsPrefix","className","children"],be=M.forwardRef(function(e,o){var t=e.as,r=t===void 0?"div":t,n=e.bsPrefix,i=e.className,u=e.children,d=P(e,ye);return n=L(n,"popover-body"),l(r,{ref:o,...d,className:F(i,n),children:u})});const X=be;var Pe=["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"],Te={placement:"right"},T=M.forwardRef(function(e,o){var t=e.bsPrefix,r=e.placement,n=e.className,i=e.style,u=e.children,d=e.content,O=e.arrowProps;e.popper,e.show;var S=P(e,Pe),N=L(t,"popover"),g=(r==null?void 0:r.split("-"))||[],v=g[0];return b("div",{ref:o,role:"tooltip",style:i,"x-placement":v,className:F(n,N,v&&"bs-popover-"+v),...S,children:[l("div",{className:"arrow",...O}),d?l(X,{children:u}):u]})});T.defaultProps=Te;T.Title=we;T.Content=X;const Y=T,y=()=>{const[e,o]=s.exports.useState(!1),t=new te;let r=!0;return s.exports.useEffect(()=>(r&&ne()&&o(!0),()=>{r=!1}),[]),b("span",{className:"experimental-mode-wrapper",children:[b(ae,{className:"experimental-mode",variant:"link",onClick:e?()=>{document.cookie=`${K}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`,o(!1)}:()=>{t.set(K,{path:"/"}),o(!0)},children:["Experimental mode is ",e?"on":"off"]}),l(W,{trigger:"click",placement:"top",overlay:({...d})=>l("div",{className:"bootstrap-4-backport",children:l(Y,{id:"experimental-mode-popover",...d,children:l(Y.Content,{children:"This mode gives you early access to features that are still in development. Please note that we do not guarantee an absence of errors, and that the data created using these features may be lost during product upgrade."})})}),children:l(fe,{style:{verticalAlign:"middle"}})})]})},z=y;try{y.displayName="ExperimentalMode",y.__docgenInfo={description:"",displayName:"ExperimentalMode",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ExperimentalMode.tsx#ExperimentalMode"]={docgenInfo:y.__docgenInfo,name:"ExperimentalMode",path:"src/lib/containers/ExperimentalMode.tsx#ExperimentalMode"})}catch{}const Ve={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ExperimentalMode from './ExperimentalMode'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Authentication/ExperimentalMode',
  component: ExperimentalMode,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ExperimentalMode>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExperimentalMode> = args => (
  <ExperimentalMode {...args} />
)

export const Demo = Template.bind({})
`,locationsMap:{demo:{startLoc:{col:58,line:15},endLoc:{col:1,line:17},startBody:{col:58,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ExperimentalMode",component:z,argTypes:{}},Oe=e=>l(z,{...e}),Ze=Oe.bind({}),_e=["Demo"];export{Ze as Demo,_e as __namedExportsOrder,Ve as default};
