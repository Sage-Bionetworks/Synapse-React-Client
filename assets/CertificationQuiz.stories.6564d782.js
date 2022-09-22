import{f as E,bM as k,bN as N,bO as O}from"./index.a536ed12.js";import{d as l}from"./ToastMessage.de6992d0.js";import{M as B}from"./CardContainerLogic.9969f463.js";import{T as d}from"./Typography.868473dc.js";import{a as n,j as i,F as g}from"./jsx-runtime.00d70968.js";import{B as w}from"./Button.fda23eee.js";import{H as Q}from"./IconSvg.debd858a.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./toString.d84aaeca.js";import"./assert.fddb1cad.js";import"./iframe.f8de4d79.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e37b9412.js";import"./FullWidthAlert.6afa82c9.js";import"./Tooltip.6d92cd5b.js";import"./createSvgIcon.99e72c0f.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./makeStyles.45e8b79c.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.eba72690.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.9ad81144.js";import"./use-deep-compare-effect.esm.0387ba0e.js";import"./uniq.21cfaf51.js";import"./toInteger.0e6612b4.js";import"./_cacheHas.cc87b06a.js";import"./without.067eb9a7.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.51001575.js";import"./TypeUtils.a2c41307.js";import"./ElementWithTooltip.78af9f5c.js";import"./SynapseTableConstants.07ecdebd.js";import"./index.8ed07549.js";import"./Dropdown.b0dc465f.js";import"./Modal.1fb607f9.js";import"./useWaitForDOMRef.97759fd7.js";import"./useWillUnmount.4a16e5cd.js";import"./usePopperMarginModifiers.44e3343c.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.9e234cde.js";import"./queryUtils.5251d1e3.js";import"./cloneDeep.01d4ff36.js";import"./Checkbox.c68b07e0.js";import"./Collapse.1f37bc76.js";import"./RadioGroup.d19dd04f.js";import"./moment.a565bb48.js";import"./RangeSlider.df5d4da8.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.b55dfb91.js";import"./react-sizeme.35566800.js";import"./Skeleton.99b24529.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.91642215.js";import"./InfoOutlined.60e019a4.js";import"./Select-54ac8379.esm.edd779c2.js";import"./CustomSelectWidget.b1e9ceda.js";import"./core.esm.7e77fe07.js";import"./index.4d54b1e5.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./isEmpty.e0c76c4b.js";import"./_baseIsEqual.464c1a19.js";import"./index.browser.36271dcc.js";import"./union.f396c337.js";import"./react-intersection-observer.esm.e445ee86.js";import"./UserCard.0eeb2c8e.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.ec4e7fc2.js";import"./times.b28c51b3.js";import"./Overlay.7bb560f6.js";import"./DateFormatter.a5d74ef1.js";import"./useGetDownloadListStatistics.4a5e49e5.js";import"./QueryCount.32c1bf4b.js";import"./NoData.22383cce.js";import"./useGetAccessRequirement.daa359ed.js";import"./ManagedACTAccessRequirementStatus.13dcc250.js";import"./FileUpload.535eee0c.js";import"./UserSearchBox.d2a579a3.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.3c5ed09e.js";import"./EntityLink.75067f88.js";import"./NoSearchResults.a01d676d.js";import"./SynapseVideo.481872ef.js";import"./IconList.43e19c16.js";import"./UserCardList.c357a617.js";const M="org.sagebionetworks.repo.model.quiz.MultichoiceResponse",L=window.React,H=window.React.useEffect,u=window.React.useState,m=()=>{const{accessToken:a}=E(),T=k(),[o,_]=u(),[c,f]=u([]),[e,h]=u(),C=L.useRef(null),x="https://help.synapse.org/docs/Getting-Started.2055471150.html",y=async()=>{try{_(await N(a))}catch(t){T(t)}};H(()=>{y()},[a]);const S=(t,s)=>{const p=[...c.filter(r=>r.questionIndex!==t),{questionIndex:t,answerIndex:[s],concreteType:M}];f(p)},R=()=>{var t;(t=C.current)==null||t.reset(),f([]),h(void 0),y()},v=async()=>{try{if(o&&o.questions.length===c.length){const t={quizId:o.id,questionResponses:c},s=await O(a,t);h(s),window.scrollTo(0,0)}else l("Please answer all of the questions and try again.","warning")}catch(t){l(t.reason,"danger")}},b=t=>t?{content:i(g,{children:"More info"}),closePopoverOnClick:!0,onClick:()=>window.open(t,"_blank"),variant:"primary"}:void 0;return n("div",{className:"bootstrap-4-backport CertificationQuiz",children:[e&&i("div",{children:n(g,{children:[!e.passed&&i("div",{className:"failBanner",children:"Quiz Failed"}),n(d,{variant:"hintText",children:["Score: ",e.score," / ",o==null?void 0:o.questions.length]}),e.passed?l(`You passed the Synapse Certification Quiz on ${e.passedOn}`,"success"):n(d,{variant:"body1",children:["Please review the items shown in red below, and"," ",i("a",{href:"#",onClick:t=>{t.preventDefault(),R()},children:"try again"}),"."]})]})}),n("div",{className:"CertificationQuiz__container",children:[n(w,{onClick:()=>window.open(x,"_blank"),className:"help-button",variant:"light-secondary",children:[i(Q,{className:"HelpButton",style:{marginRight:"4px"}}),"Help"]}),o?i("div",{dangerouslySetInnerHTML:{__html:o.header}}):"",i("form",{ref:C,onSubmit:t=>t.preventDefault(),children:i("ol",{children:o==null?void 0:o.questions.map(t=>{var s,p;return n("li",{role:t.exclusive?"radiogroup":void 0,children:[i("div",{dangerouslySetInnerHTML:{__html:t.prompt},className:e&&((p=(s=e.corrections)==null?void 0:s.find(r=>r.question.questionIndex===t.questionIndex))!=null&&p.isCorrect?"":"incorrectQuestion")}),t.answers.map(r=>n("div",{children:[i("input",{id:`${t.questionIndex}-${r.answerIndex}`,name:`${t.questionIndex}`,type:t.exclusive?"radio":"checkbox",value:r.answerIndex,onClick:I=>S(t.questionIndex,Number(I.currentTarget.value)),disabled:!!e}),i("label",{style:{fontWeight:400},htmlFor:`${t.questionIndex}-${r.answerIndex}`,children:r.prompt})]},`${t.questionIndex}-${r.answerIndex}`)),i(B,{contentProps:{markdown:t.helpText},placement:"right",actionButton:b(t.docLink),showCloseButton:!0,children:n(d,{variant:"hintText",color:"primary",children:[i(Q,{className:"HelpButton",style:{marginRight:"4px"}}),"Need help answering this question?"]})})]},t.questionIndex)})})}),!e&&i(w,{className:"help-button",variant:"primary",onClick:()=>v(),children:"Submit"})]})]})},z=m;try{m.displayName="CertificationQuiz",m.__docgenInfo={description:"",displayName:"CertificationQuiz",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/CertificationQuiz.tsx#CertificationQuiz"]={docgenInfo:m.__docgenInfo,name:"CertificationQuiz",path:"src/lib/containers/CertificationQuiz.tsx#CertificationQuiz"})}catch{}const bi={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CertificationQuiz from './CertificationQuiz'

export default {
  title: 'Synapse/CertificationQuiz',
  component: CertificationQuiz,
  argTypes: {},
} as ComponentMeta<typeof CertificationQuiz>

const Template: ComponentStory<typeof CertificationQuiz> = args => (
  <CertificationQuiz {...args} />
)

export const CertificationQuizDemo = Template.bind({})
CertificationQuizDemo.args = {}
`,locationsMap:{"certification-quiz-demo":{startLoc:{col:59,line:12},endLoc:{col:1,line:14},startBody:{col:59,line:12},endBody:{col:1,line:14}}}}},title:"Synapse/CertificationQuiz",component:z,argTypes:{}},$=a=>i(z,{...a}),P=$.bind({});P.args={};const Ii=["CertificationQuizDemo"];export{P as CertificationQuizDemo,Ii as __namedExportsOrder,bi as default};
