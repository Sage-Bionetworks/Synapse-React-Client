import{cj as re,i as ne,ck as H}from"./index.0378956d.js";import{a as C,F as ae,j as s}from"./jsx-runtime.00d70968.js";import{u as I,B as ie}from"./Button.fda23eee.js";import{a as se,_ as ce}from"./withStyles.5fe35516.js";import{_ as P}from"./objectWithoutPropertiesLoose.5e7699d1.js";import{a as le,c as pe}from"./useWaitForDOMRef.97759fd7.js";import{u as de}from"./useWillUnmount.4a16e5cd.js";import{s as ue}from"./usePopperMarginModifiers.fba68454.js";import{e as me}from"./Alert.b74d1cfd.js";import{O as fe}from"./Overlay.66930c7c.js";import{I as ve}from"./InfoOutlined.60e019a4.js";import{c as L}from"./index.57d09176.js";import"./isRequiredForA11y.20ed4857.js";import"./toString.d84aaeca.js";import"./index.35ce73ec.js";import"./assert.75d17e29.js";import"./iframe.e59a9506.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e37b9412.js";import"./toConsumableArray.c4898ee4.js";import"./hasClass.56fd144a.js";import"./Transition.8278edb2.js";import"./createSvgIcon.99e72c0f.js";const he=window.React.useMemo,ge=window.React.useRef;var j=Math.pow(2,31)-1;function W(e,o,r){var t=r-Date.now();e.current=t<=j?setTimeout(o,t):setTimeout(function(){return W(e,o,r)},j)}function we(){var e=le(),o=ge();return de(function(){return clearTimeout(o.current)}),he(function(){var r=function(){return clearTimeout(o.current)};function t(n,i){i===void 0&&(i=0),e()&&(r(),i<=j?o.current=setTimeout(n,i):W(o,n,Date.now()+i))}return{set:t,clear:r}},[])}var xe=["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"];const X=window.React,Ee=window.React.cloneElement,m=window.React.useCallback,K=window.React.useRef;var Me=function(e){se(o,e);function o(){return e.apply(this,arguments)||this}var r=o.prototype;return r.render=function(){return this.props.children},o}(X.Component);function ye(e){return e&&typeof e=="object"?e:{show:e,hide:e}}function U(e,o,r){var t=o[0],n=t.currentTarget,i=t.relatedTarget||t.nativeEvent[r];(!i||i!==n)&&!pe(n,i)&&e.apply(void 0,o)}var Ce={defaultShow:!1,trigger:["hover","focus"]};function z(e){var o=e.trigger,r=e.overlay,t=e.children,n=e.popperConfig,i=n===void 0?{}:n,d=e.show,p=e.defaultShow,T=p===void 0?!1:p,b=e.onToggle,O=e.delay,w=e.placement,v=e.flip,q=v===void 0?w&&w.indexOf("auto")!==-1:v,Q=P(e,xe),S=K(null),h=we(),E=K(""),F=me(d,T,b),N=F[0],u=F[1],g=ye(O),$=typeof t!="function"?X.Children.only(t).props:{},A=$.onFocus,B=$.onBlur,k=$.onClick,V=m(function(){return ue(S.current)},[]),M=m(function(){if(h.clear(),E.current="show",!g.show){u(!0);return}h.set(function(){E.current==="show"&&u(!0)},g.show)},[g.show,u,h]),x=m(function(){if(h.clear(),E.current="hide",!g.hide){u(!1);return}h.set(function(){E.current==="hide"&&u(!1)},g.hide)},[g.hide,u,h]),Z=m(function(){M();for(var c=arguments.length,l=new Array(c),a=0;a<c;a++)l[a]=arguments[a];A==null||A.apply(void 0,l)},[M,A]),_=m(function(){x();for(var c=arguments.length,l=new Array(c),a=0;a<c;a++)l[a]=arguments[a];B==null||B.apply(void 0,l)},[x,B]),ee=m(function(){u(!N),k&&k.apply(void 0,arguments)},[k,u,N]),oe=m(function(){for(var c=arguments.length,l=new Array(c),a=0;a<c;a++)l[a]=arguments[a];U(M,l,"fromElement")},[M]),te=m(function(){for(var c=arguments.length,l=new Array(c),a=0;a<c;a++)l[a]=arguments[a];U(x,l,"toElement")},[x]),D=o==null?[]:[].concat(o),f={};return D.indexOf("click")!==-1&&(f.onClick=ee),D.indexOf("focus")!==-1&&(f.onFocus=Z,f.onBlur=_),D.indexOf("hover")!==-1&&(f.onMouseOver=oe,f.onMouseOut=te),C(ae,{children:[typeof t=="function"?t(ce({},f,{ref:S})):s(Me,{ref:S,children:Ee(t,f)}),s(fe,{...Q,show:N,onHide:x,flip:q,placement:w,popperConfig:i,target:V,children:r})]})}z.defaultProps=Ce;var Pe=["as","bsPrefix","className","children"];const Re=window.React;var Te=Re.forwardRef(function(e,o){var r=e.as,t=r===void 0?"div":r,n=e.bsPrefix,i=e.className,d=e.children,p=P(e,Pe);return n=I(n,"popover-header"),s(t,{ref:o,...p,className:L(n,i),children:d})});const be=Te;var Oe=["as","bsPrefix","className","children"];const Se=window.React;var Ne=Se.forwardRef(function(e,o){var r=e.as,t=r===void 0?"div":r,n=e.bsPrefix,i=e.className,d=e.children,p=P(e,Oe);return n=I(n,"popover-body"),s(t,{ref:o,...p,className:L(i,n),children:d})});const G=Ne;var $e=["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"];const Ae=window.React;var Be={placement:"right"},R=Ae.forwardRef(function(e,o){var r=e.bsPrefix,t=e.placement,n=e.className,i=e.style,d=e.children,p=e.content,T=e.arrowProps;e.popper,e.show;var b=P(e,$e),O=I(r,"popover"),w=(t==null?void 0:t.split("-"))||[],v=w[0];return C("div",{ref:o,role:"tooltip",style:i,"x-placement":v,className:L(n,O,v&&"bs-popover-"+v),...b,children:[s("div",{className:"arrow",...T}),p?s(G,{children:d}):d]})});R.defaultProps=Be;R.Title=be;R.Content=G;const Y=R,ke=window.React.useEffect,De=window.React.useState,y=()=>{const[e,o]=De(!1),r=new re;let t=!0;return ke(()=>(t&&ne()&&o(!0),()=>{t=!1}),[]),C("span",{className:"experimental-mode-wrapper",children:[C(ie,{className:"experimental-mode",variant:"link",onClick:e?()=>{document.cookie=`${H}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`,o(!1)}:()=>{r.set(H,{path:"/"}),o(!0)},children:["Experimental mode is ",e?"on":"off"]}),s(z,{trigger:"click",placement:"top",overlay:({...p})=>s("div",{className:"bootstrap-4-backport",children:s(Y,{id:"experimental-mode-popover",...p,children:s(Y.Content,{children:"This mode gives you early access to features that are still in development. Please note that we do not guarantee an absence of errors, and that the data created using these features may be lost during product upgrade."})})}),children:s(ve,{style:{verticalAlign:"middle"}})})]})},J=y;try{y.displayName="ExperimentalMode",y.__docgenInfo={description:"",displayName:"ExperimentalMode",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ExperimentalMode.tsx#ExperimentalMode"]={docgenInfo:y.__docgenInfo,name:"ExperimentalMode",path:"src/lib/containers/ExperimentalMode.tsx#ExperimentalMode"})}catch{}const io={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:58,line:15},endLoc:{col:1,line:17},startBody:{col:58,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ExperimentalMode",component:J,argTypes:{}},je=e=>s(J,{...e}),so=je.bind({}),co=["Demo"];export{so as Demo,co as __namedExportsOrder,io as default};
