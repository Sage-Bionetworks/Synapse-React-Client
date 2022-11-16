import{j as l,r as _,a as c,F as K}from"./jsx-runtime.ef6dd6ca.js";import{E as Q}from"./ElementWithTooltip.392f8e12.js";import{u as U}from"./unCamelCase.07e38083.js";import{j as X,H as j}from"./index.dae95658.js";import{r as D}from"./sqlFunctions.dd1a2d89.js";import{c as I,P as O}from"./factory.e181f874.js";import{l as f}from"./lodash.default.a27d166b.js";import{l as H}from"./LoadingScreen.cd1ee187.js";import{i as G}from"./SynapseConstants.b6aa8bf5.js";import"./iframe.60aac2d9.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.afd54b28.js";import"./TransitionGroupContext.7ee16c7e.js";import"./styled.e27331e3.js";import"./Tooltip.3430fa1d.js";import"./createSvgIcon.f73758be.js";import"./utils.e96b9b4f.js";import"./index.0c4c5f34.js";import"./InfoOutlined.cee1fdf4.js";import"./RegularExpressions.3cd69849.js";import"./Dropdown.db32552a.js";import"./Button.a73b55da.js";import"./usePrevious.c9110e8d.js";import"./createWithBsPrefix.fd753f10.js";import"./index.35ce73ec.js";import"./contains.96785999.js";import"./usePopperMarginModifiers.a06f6977.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Alert.ca959f09.js";import"./isArray.aa335c2b.js";import"./getEndpoint.bb7ded34.js";import"./Link.3eeff9dd.js";import"./Typography.4e908f90.js";import"./Button.325fe68b.js";import"./ButtonBase.acc32807.js";import"./QueryFilter.643bbd26.js";import"./_baseClone.3778e881.js";import"./_getTag.078c4477.js";import"./_Set.13c0b9e0.js";import"./isEmpty.cbc52aef.js";import"./isEqual.ced93aa6.js";import"./_cacheHas.2e3690ee.js";import"./_setToArray.a82100c8.js";import"./pick.8d20f9a6.js";import"./uniqueId.d637a5d8.js";import"./isSymbol.3aa79a3a.js";import"./_baseSlice.50189bc5.js";import"./uniq.342b0f91.js";import"./toInteger.135bf95f.js";import"./without.f35cc972.js";import"./startCase.e608aac4.js";import"./upperFirst.a8693b69.js";import"./toLower.99de219b.js";import"./times.e0b5d62b.js";import"./union.63ad5718.js";import"./cloneDeep.c88aad01.js";import"./groupBy.13a692b4.js";import"./Modal.872b66f0.js";import"./inheritsLoose.794eb6d0.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.c2e120f2.js";const W=I(O);function J(e,o){const t=f.cloneDeep(e);if(!o)return t;o.backgroundColor&&(t.plot_bgcolor=o.backgroundColor),t.yaxis.showticklabels=!1,t.xaxis.range=[-5,o.maxValue+30],t.xaxis.visible=o.isXAxis,t.showlegend=o.isLegend,t.margin={t:0,b:o.isXAxis?50:0,l:0,r:0,pad:15};let a=30;return o.isLegend&&(a=35,t.margin.pad=0,t.xaxis={visible:!1,zeroline:!1,showgrid:!1,showline:!1,range:[0,1]},t.yaxis={visible:!1,showline:!1}),o.isXAxis&&(t.yaxis={visible:!1,showgrid:!1,showline:!1},a=50),t.height=a,t}function Z(e,o){const t=new Array(e.length);return o.forEach(a=>{const r=e.indexOf(a.y);t[r]=a.x}),t}function ee(e,o,t,a){const r=t===void 0;var d=f.uniq(e.map(p=>p.group));const n=[],m=["y-down","triangle-up","cross-thin-open","triangle-up-open-dot","star-square-open","diamond-x"];return d.forEach((p,i)=>{n.push({type:"scatter",x:r?[-10]:Z(t,e.filter(g=>g.group===p)),y:t,text:[p],hovertemplate:"%{x} %{text}<extra></extra>",mode:"markers",name:p,marker:{color:o.markerFill,line:{color:o.markerLine,width:1},symbol:a?a[p]:m[i],size:o.markerSize}})}),n}const P=({plotData:e,optionsConfig:o,layoutConfig:t,label:a,id:r,xMax:d,style:n={width:"100%",height:"100%"},markerSymbols:m,plotStyle:p={markerFill:"#515359",markerLine:"#515359",markerSize:9,backgroundColor:"transparent"},onClick:i,isLegend:g=!1,isXAxis:b=!1})=>{const v=a?[a]:void 0;return l(W,{layout:J(t,{isLegend:g,isXAxis:b,maxValue:d,backgroundColor:p.backgroundColor}),style:n,data:ee(e,p,v,m),config:o,onClick:T=>i?i(T):f.noop},`dotPlot_${r}`)};try{P.displayName="DotPlot",P.__docgenInfo={description:"",displayName:"DotPlot",props:{plotData:{defaultValue:null,description:"",name:"plotData",required:!0,type:{name:"GraphItem[]"}},layoutConfig:{defaultValue:null,description:"",name:"layoutConfig",required:!0,type:{name:"Partial<Layout>"}},optionsConfig:{defaultValue:null,description:"",name:"optionsConfig",required:!0,type:{name:"Partial<Config>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},style:{defaultValue:{value:"{ width: '100%', height: '100%' }"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isLegend:{defaultValue:{value:"false"},description:"",name:"isLegend",required:!1,type:{name:"boolean"}},isXAxis:{defaultValue:{value:"false"},description:"",name:"isXAxis",required:!1,type:{name:"boolean"}},xMax:{defaultValue:null,description:"",name:"xMax",required:!1,type:{name:"number"}},plotStyle:{defaultValue:{value:`{
    markerFill: '#515359',
    markerLine: '#515359',
    markerSize: 9,
    backgroundColor: 'transparent',
  }`},description:"",name:"plotStyle",required:!1,type:{name:"PlotStyle"}},markerSymbols:{defaultValue:null,description:"",name:"markerSymbols",required:!1,type:{name:"Dictionary"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"Function"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/themes-plot/DotPlot.tsx#DotPlot"]={docgenInfo:P.__docgenInfo,name:"DotPlot",path:"src/lib/containers/widgets/themes-plot/DotPlot.tsx#DotPlot"})}catch{}const te=I(O);function oe(e,o,t){o&&(e=e.filter(n=>n.y===o));var a=f.uniq(e.map(n=>n.group)).sort();const r=[],d=["(28,118,175,1)","rgba(91,176,181,1)"];return a.forEach((n,m)=>{const p=e.filter(i=>i.group===n);r.push({x:p.map(i=>i.x),y:p.map(i=>i.y),name:n,orientation:"h",marker:{color:t?t[n]:d[m],width:1},text:[n],hovertemplate:"%{x} %{text}<extra></extra>",type:"bar"})}),r}function re(e,{isTop:o,maxValue:t,backgroundColor:a}){const r=f.cloneDeep(e);return r.xaxis={visible:!1,range:[0,t]},a&&(r.plot_bgcolor=a,r.paper_bgcolor=a),o||(r.hoverlabel={font:{size:10}}),r.showlegend=!1,r.height=o?40:20,r}const x=({plotData:e,optionsConfig:o,isTop:t,layoutConfig:a,label:r,xMax:d,colors:n,plotStyle:m={backgroundColor:"transparent"},style:p={width:"100%",height:"100%"},onClick:i})=>l(te,{style:p,layout:re(a,{isTop:t,maxValue:d,backgroundColor:m.backgroundColor}),config:o,data:oe(e,r,n),onClick:g=>i?i(g):f.noop});try{x.displayName="BarPlot",x.__docgenInfo={description:"",displayName:"BarPlot",props:{isTop:{defaultValue:null,description:"",name:"isTop",required:!0,type:{name:"boolean"}},style:{defaultValue:{value:"{ width: '100%', height: '100%' }"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},plotData:{defaultValue:null,description:"",name:"plotData",required:!0,type:{name:"GraphItem[]"}},layoutConfig:{defaultValue:null,description:"",name:"layoutConfig",required:!0,type:{name:"Partial<Layout>"}},optionsConfig:{defaultValue:null,description:"",name:"optionsConfig",required:!0,type:{name:"Partial<Config>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},xMax:{defaultValue:null,description:"",name:"xMax",required:!0,type:{name:"number"}},colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:"Dictionary"}},plotStyle:{defaultValue:{value:"{ backgroundColor: 'transparent' }"},description:"",name:"plotStyle",required:!1,type:{name:"PlotStyle"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"Function"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/themes-plot/BarPlot.tsx#BarPlot"]={docgenInfo:x.__docgenInfo,name:"BarPlot",path:"src/lib/containers/widgets/themes-plot/BarPlot.tsx#BarPlot"})}catch{}const C={displayModeBar:!1,responsive:!0,scrollZoom:!1,editable:!1,autosizable:!0},ae={delayShow:0,place:"right",type:"light",effect:"solid",border:!0},L={showlegend:!0,dragmode:!1,legend:{font:{size:11},y:1.1,xanchor:"right",x:1,orientation:"h"},xaxis:{visible:!0,fixedrange:!0,zeroline:!1,showgrid:!1,showline:!0,linecolor:"#ddd",autotick:!0,ticks:"outside",tickcolor:"#ddd"},yaxis:{fixedrange:!0,zeroline:!1,gridcolor:"#ddd",automargin:!0},margin:{pad:20},hovermode:"closest"},A={barmode:"stack",showlegend:!1,dragmode:!1,hovermode:"closest",yaxis:{visible:!1,fixedrange:!0},margin:{l:0,r:0,b:0,t:0,pad:0}};function w(e,{xField:o,yField:t,groupField:a,entityId:r,whereClause:d,infoField:n}){const m=`SELECT ${o} as "x", ${t} as "y", ${n?n+' as "info", ':""}   ${a} as "group" FROM ${r} ${d?" WHERE "+d:""}`;return j({concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:G,entityId:r,query:{sql:m}},e).then(i=>i.queryResult.queryResults)}function q(e,o){const t=e.reduce((r,d)=>(r[d[o]]=(d[o]in r?Number(r[d[o]]):0)+Number(d.x),r),{}),a=[];for(const r in t)a.push({[o]:r,count:t[r]});return a}const R=(e,o)=>{const t=e.points[0].data;let a=t.y[0],r=t.name;return o&&([a,r]=[r,a]),{facetValue:a,type:r,event:e.event}},le=(e,o)=>l("div",{className:"ThemesPlot__barPlotLegend",children:o.map((t,a)=>c("div",{style:{float:"left"},children:[l("div",{className:"ThemesPlot__barPlotLegend__label",style:{backgroundColor:`${e?e[t]:"transparent"}`}},"topBar_label"),l("div",{className:"ThemesPlot__barPlotLegend__graph",children:t},"topBar_graph")," "]},`topBar_${a}`))}),M=(e,o)=>{for(let t in e)e[t]=e[t].replace(",1)",`, ${o})`).replace(",1.0)",`, ${o})`);return e},ne=(e,o)=>f.first(e.filter(t=>t.y===o).map(t=>t.info)),k=({dotPlot:e,topBarPlot:o,sideBarPlot:t,tooltipProps:a=ae,onPointClick:r,dotPlotYAxisLabel:d="Research Themes"})=>{const{accessToken:n}=X(),[m,p]=_.exports.useState(!1),[i,g]=_.exports.useState([]),[b,v]=_.exports.useState([]),[T,z]=_.exports.useState([]);_.exports.useEffect(()=>{const s=w(n,e),y=w(n,o),h=w(n,t);return Promise.all([s,y,h]).then(u=>{g(D(u[0].headers,u[0].rows)),v(D(u[1].headers,u[1].rows)),z(D(u[2].headers,u[2].rows)),p(!0)}).catch(u=>{throw u}),()=>{}},[n,e,o,t]);let V=[],F=[],B=0,N=0,E=[],S=[];return m&&(S=q(T,"y"),V=S.sort((s,y)=>y.count-s.count).map(s=>s.y),N=Math.max(...S.map(s=>s.count)),B=Math.max(...i.map(s=>Number(s.x))),E=f.orderBy(q(b,"y"),["y"]),F=f.orderBy(q(b,"group"),["group"]).map(s=>s.group)),c(K,{children:[!m&&H,m&&c("div",{className:"ThemesPlot",children:[l("div",{className:"ThemesPlot__dotPlotLegend",children:l(P,{id:"head",plotData:i,isLegend:!0,markerSymbols:e.markerSymbols,style:{width:"100%",height:"100%"},layoutConfig:L,optionsConfig:{...C,responsive:!0,staticPlot:!0},plotStyle:{...e.plotStyle,backgroundColor:"transparent"}})}),o.colors&&le(o.colors,F),E.map((s,y)=>c("div",{className:"ThemesPlot__topBarPlot",children:[c("div",{className:"ThemesPlot__topBarPlot__label",children:[s.count,"\xA0",U(s.y)]}),l("div",{className:"ThemesPlot__topBarPlot__plot",children:l(x,{style:{width:"100%",height:"100%"},layoutConfig:f.cloneDeep(A),optionsConfig:{...C},plotData:b,isTop:!0,label:s.y,xMax:s.count,onClick:h=>r(R(h,!0)),colors:y%2===0?o.colors:M({...o.colors},"1")})})]},`topBarDiv_${y}`)),c("div",{style:{display:"flex",position:"relative"},children:[l("div",{className:"ThemesPlot__dotPlotYLabel",children:d}),c("div",{className:"ThemesPlot__dotPlot",children:[V.map((s,y)=>{var h,u;return c("div",{className:"ThemesPlot__dotPlot__row",style:{backgroundColor:(h=e.plotStyle)==null?void 0:h.backgroundColor},children:[l("div",{className:"ThemesPlot__dotPlot__barColumn",children:l(Q,{tooltipText:`${ne(i,s)} `,tooltipVisualProps:a,callbackFn:()=>f.noop,children:c("div",{children:[l("span",{className:"ThemesPlot__dotPlot__themeLabel",children:s}),l("br",{}),c("span",{className:"ThemesPlot__dotPlot__countLabel",children:[S[y].count," ",t.countLabel]}),l("br",{}),l(x,{style:{width:"100%"},layoutConfig:A,optionsConfig:C,plotData:T,isTop:!1,xMax:N,label:s,colors:M({...o.colors},"1")})]})})}),l("div",{className:"ThemesPlot__dotPlot__dotPlotColumn",children:l("div",{style:{width:"100%",backgroundColor:(u=e.plotStyle)==null?void 0:u.backgroundColor},children:l(P,{id:y+"",onClick:Y=>r(R(Y,!1)),plotData:i,plotStyle:e.plotStyle,markerSymbols:e.markerSymbols,xMax:B,label:s,layoutConfig:L,optionsConfig:{...C,responsive:!1}})})})]},`plotDiv_${+y}`)}),c("div",{className:"ThemesPlot__dotPlot__row",children:[l("div",{className:"ThemesPlot__dotPlot__barColumn",style:{textAlign:"right"},children:"VOLUME:"}),l("div",{className:"ThemesPlot__dotPlot__dotPlotColumn",style:{marginTop:"0px"},children:l(P,{id:"footer",plotData:i,isXAxis:!0,xMax:B,layoutConfig:L,optionsConfig:{...C,responsive:!1}})})]})]})]}),l("div",{})]})]})},$=k;try{k.displayName="ThemesPlot",k.__docgenInfo={description:"",displayName:"ThemesPlot",props:{onPointClick:{defaultValue:null,description:"",name:"onPointClick",required:!0,type:{name:"({ facetValue, type, event }: ClickCallbackParams) => void"}},dotPlot:{defaultValue:null,description:"",name:"dotPlot",required:!0,type:{name:"PlotProps"}},topBarPlot:{defaultValue:null,description:"",name:"topBarPlot",required:!0,type:{name:"PlotProps"}},sideBarPlot:{defaultValue:null,description:"",name:"sideBarPlot",required:!0,type:{name:"PlotProps"}},tooltipProps:{defaultValue:{value:`{
  delayShow: 0,
  place: 'right',
  type: 'light',
  effect: 'solid',
  border: true,
}`},description:"",name:"tooltipProps",required:!1,type:{name:"TooltipVisualProps"}},dotPlotYAxisLabel:{defaultValue:{value:"Research Themes"},description:"",name:"dotPlotYAxisLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/themes-plot/ThemesPlot.tsx#ThemesPlot"]={docgenInfo:k.__docgenInfo,name:"ThemesPlot",path:"src/lib/containers/widgets/themes-plot/ThemesPlot.tsx#ThemesPlot"})}catch{}const ht={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ThemesPlot from './ThemesPlot'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Home Page/ThemesPlot',
  component: ThemesPlot,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ThemesPlot>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemesPlot> = args => (
  <ThemesPlot {...args} />
)

export const ThemesPlotDemo = Template.bind({})

ThemesPlotDemo.args = {
  onPointClick: e => {
    console.log(e.event)
  },
  topBarPlot: {
    entityId: 'syn21641485',
    xField: 'totalCount',
    yField: 'groupBy',
    groupField: 'consortium',
    colors: {
      CSBC: 'rgba(64,123,160, 1)',
      'PS-ON': 'rgba(91,176,181,1)',
      ICBP: 'rgba(197, 191, 223, 1)',
      TEC: 'rgba(156, 196, 233, 1)',
    },
    whereClause: 'totalCount is not NULL',
  },
  sideBarPlot: {
    entityId: 'syn21649281',
    xField: 'totalCount',
    yField: 'theme',
    groupField: 'consortium',
    countLabel: 'grants',
    plotStyle: {
      backgroundColor: '#f5f9fa',
    },
    colors: {
      CSBC: '#1c76af',
      'PS-ON': '#5bb0b5',
      ICBP: '#9cc4e9',
      TEC: '#c5bfdf',
    },
  },
  dotPlot: {
    entityId: 'syn21639584',
    xField: 'totalCount',
    yField: 'theme',
    groupField: 'groupBy',
    infoField: 'themeDescription',
    whereClause: "groupBy IN ('publications', 'tools', 'datasets')",
    markerSymbols: {
      tools: 'y-down',
      datasets: 'diamond-x',
      publications: 'circle',
    },
    plotStyle: {
      markerLine: 'rgba(0, 0, 0,1)',
      markerFill: 'rgba(255, 255, 255,1)',
      markerSize: 11,
      backgroundColor: '#f5f9fa',
    },
  },
}
`,locationsMap:{"themes-plot-demo":{startLoc:{col:52,line:15},endLoc:{col:1,line:17},startBody:{col:52,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/ThemesPlot",component:$,argTypes:{}},ie=e=>l($,{...e}),se=ie.bind({});se.args={onPointClick:e=>{console.log(e.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}};const Pt=["ThemesPlotDemo"];export{se as ThemesPlotDemo,Pt as __namedExportsOrder,ht as default};
