import{E as K}from"./ElementWithTooltip.c5e96874.js";import{u as Q}from"./unCamelCase.d070537b.js";import{w as U,Z as X,B as j}from"./index.d8e274a1.js";import{r as D}from"./sqlFunctions.b49ac766.js";import{c as I,P as O}from"./factory.f4988b82.js";import{j as l,a as f,F as G}from"./jsx-runtime.2e925369.js";import{l as y}from"./lodash.default.df105d77.js";import{l as H}from"./LoadingScreen.3ecba03a.js";import"./SynapseTableConstants.07ecdebd.js";import"./index.3539af41.js";import"./IconSvg.05ece234.js";import"./SvgIcon.6d10a3ac.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./objectWithoutProperties.07f8cd75.js";import"./withStyles.461112f3.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Tooltip.3e761ad5.js";import"./slicedToArray.e9a7fa03.js";import"./makeStyles.38be5a7f.js";import"./InfoOutlined.a7449f61.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./Dropdown.c5bbe35b.js";import"./index.f252d424.js";import"./Modal.50036a73.js";import"./FullWidthAlert.4dd40e61.js";import"./Typography.5a45efab.js";import"./Button.c582ea4c.js";import"./index.06f4a415.js";import"./useWaitForDOMRef.679b0e64.js";import"./useWillUnmount.4a16e5cd.js";import"./ToastMessage.093903bc.js";import"./usePopperMarginModifiers.fc55270a.js";import"./isRequiredForA11y.61bbc671.js";import"./assert.4df68bf5.js";import"./iframe.066cc533.js";import"./getEndpoint.0de7fccf.js";import"./_baseMap.611076e7.js";import"./_baseIsEqual.c3a5e0ce.js";import"./_cacheHas.6c83209f.js";import"./_setToArray.a82100c8.js";import"./uniq.8b76bcb6.js";import"./toInteger.93f57d6c.js";import"./_baseDifference.f72e1903.js";import"./toLower.43256c87.js";import"./upperFirst.59278dc4.js";import"./times.cfb71dc5.js";import"./cloneDeep.d5f14fdc.js";import"./isEmpty.e3c7aee8.js";import"./isEqual.a7c437c5.js";import"./differenceWith.8324843a.js";import"./sortBy.2923c888.js";import"./without.cf4a574a.js";import"./groupBy.186a8784.js";const W=I(O);function Z(e,o){const t=y.cloneDeep(e);if(!o)return t;o.backgroundColor&&(t.plot_bgcolor=o.backgroundColor),t.yaxis.showticklabels=!1,t.xaxis.range=[-5,o.maxValue+30],t.xaxis.visible=o.isXAxis,t.showlegend=o.isLegend,t.margin={t:0,b:o.isXAxis?50:0,l:0,r:0,pad:15};let a=30;return o.isLegend&&(a=35,t.margin.pad=0,t.xaxis={visible:!1,zeroline:!1,showgrid:!1,showline:!1,range:[0,1]},t.yaxis={visible:!1,showline:!1}),o.isXAxis&&(t.yaxis={visible:!1,showgrid:!1,showline:!1},a=50),t.height=a,t}function J(e,o){const t=new Array(e.length);return o.forEach(a=>{const r=e.indexOf(a.y);t[r]=a.x}),t}function ee(e,o,t,a){const r=t===void 0;var d=y.uniq(e.map(p=>p.group));const n=[],u=["y-down","triangle-up","cross-thin-open","triangle-up-open-dot","star-square-open","diamond-x"];return d.forEach((p,i)=>{n.push({type:"scatter",x:r?[-10]:J(t,e.filter(g=>g.group===p)),y:t,text:[p],hovertemplate:"%{x} %{text}<extra></extra>",mode:"markers",name:p,marker:{color:o.markerFill,line:{color:o.markerLine,width:1},symbol:a?a[p]:u[i],size:o.markerSize}})}),n}const P=({plotData:e,optionsConfig:o,layoutConfig:t,label:a,id:r,xMax:d,style:n={width:"100%",height:"100%"},markerSymbols:u,plotStyle:p={markerFill:"#515359",markerLine:"#515359",markerSize:9,backgroundColor:"transparent"},onClick:i,isLegend:g=!1,isXAxis:b=!1})=>{const v=a?[a]:void 0;return l(W,{layout:Z(t,{isLegend:g,isXAxis:b,maxValue:d,backgroundColor:p.backgroundColor}),style:n,data:ee(e,p,v,u),config:o,onClick:x=>i?i(x):y.noop},`dotPlot_${r}`)};try{P.displayName="DotPlot",P.__docgenInfo={description:"",displayName:"DotPlot",props:{plotData:{defaultValue:null,description:"",name:"plotData",required:!0,type:{name:"GraphItem[]"}},layoutConfig:{defaultValue:null,description:"",name:"layoutConfig",required:!0,type:{name:"Partial<Layout>"}},optionsConfig:{defaultValue:null,description:"",name:"optionsConfig",required:!0,type:{name:"Partial<Config>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},style:{defaultValue:{value:"{ width: '100%', height: '100%' }"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isLegend:{defaultValue:{value:"false"},description:"",name:"isLegend",required:!1,type:{name:"boolean"}},isXAxis:{defaultValue:{value:"false"},description:"",name:"isXAxis",required:!1,type:{name:"boolean"}},xMax:{defaultValue:null,description:"",name:"xMax",required:!1,type:{name:"number"}},plotStyle:{defaultValue:{value:`{
    markerFill: '#515359',
    markerLine: '#515359',
    markerSize: 9,
    backgroundColor: 'transparent',
  }`},description:"",name:"plotStyle",required:!1,type:{name:"PlotStyle"}},markerSymbols:{defaultValue:null,description:"",name:"markerSymbols",required:!1,type:{name:"Dictionary"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"Function"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/themes-plot/DotPlot.tsx#DotPlot"]={docgenInfo:P.__docgenInfo,name:"DotPlot",path:"src/lib/containers/widgets/themes-plot/DotPlot.tsx#DotPlot"})}catch{}const te=I(O);function oe(e,o,t){o&&(e=e.filter(n=>n.y===o));var a=y.uniq(e.map(n=>n.group)).sort();const r=[],d=["(28,118,175,1)","rgba(91,176,181,1)"];return a.forEach((n,u)=>{const p=e.filter(i=>i.group===n);r.push({x:p.map(i=>i.x),y:p.map(i=>i.y),name:n,orientation:"h",marker:{color:t?t[n]:d[u],width:1},text:[n],hovertemplate:"%{x} %{text}<extra></extra>",type:"bar"})}),r}function re(e,{isTop:o,maxValue:t,backgroundColor:a}){const r=y.cloneDeep(e);return r.xaxis={visible:!1,range:[0,t]},a&&(r.plot_bgcolor=a,r.paper_bgcolor=a),o||(r.hoverlabel={font:{size:10}}),r.showlegend=!1,r.height=o?40:20,r}const C=({plotData:e,optionsConfig:o,isTop:t,layoutConfig:a,label:r,xMax:d,colors:n,plotStyle:u={backgroundColor:"transparent"},style:p={width:"100%",height:"100%"},onClick:i})=>l(te,{style:p,layout:re(a,{isTop:t,maxValue:d,backgroundColor:u.backgroundColor}),config:o,data:oe(e,r,n),onClick:g=>i?i(g):y.noop});try{C.displayName="BarPlot",C.__docgenInfo={description:"",displayName:"BarPlot",props:{isTop:{defaultValue:null,description:"",name:"isTop",required:!0,type:{name:"boolean"}},style:{defaultValue:{value:"{ width: '100%', height: '100%' }"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},plotData:{defaultValue:null,description:"",name:"plotData",required:!0,type:{name:"GraphItem[]"}},layoutConfig:{defaultValue:null,description:"",name:"layoutConfig",required:!0,type:{name:"Partial<Layout>"}},optionsConfig:{defaultValue:null,description:"",name:"optionsConfig",required:!0,type:{name:"Partial<Config>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},xMax:{defaultValue:null,description:"",name:"xMax",required:!0,type:{name:"number"}},colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:"Dictionary"}},plotStyle:{defaultValue:{value:"{ backgroundColor: 'transparent' }"},description:"",name:"plotStyle",required:!1,type:{name:"PlotStyle"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"Function"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/themes-plot/BarPlot.tsx#BarPlot"]={docgenInfo:C.__docgenInfo,name:"BarPlot",path:"src/lib/containers/widgets/themes-plot/BarPlot.tsx#BarPlot"})}catch{}const S=window.React.useState,ae=window.React.useEffect,_={displayModeBar:!1,responsive:!0,scrollZoom:!1,editable:!1,autosizable:!0},le={delayShow:0,place:"right",type:"light",effect:"solid",border:!0},w={showlegend:!0,dragmode:!1,legend:{font:{size:11},y:1.1,xanchor:"right",x:1,orientation:"h"},xaxis:{visible:!0,fixedrange:!0,zeroline:!1,showgrid:!1,showline:!0,linecolor:"#ddd",autotick:!0,ticks:"outside",tickcolor:"#ddd"},yaxis:{fixedrange:!0,zeroline:!1,gridcolor:"#ddd",automargin:!0},margin:{pad:20},hovermode:"closest"},R={barmode:"stack",showlegend:!1,dragmode:!1,hovermode:"closest",yaxis:{visible:!1,fixedrange:!0},margin:{l:0,r:0,b:0,t:0,pad:0}};function L(e,{xField:o,yField:t,groupField:a,entityId:r,whereClause:d,infoField:n}){const u=`SELECT ${o} as "x", ${t} as "y", ${n?n+' as "info", ':""}   ${a} as "group" FROM ${r} ${d?" WHERE "+d:""}`;return X({concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:j,entityId:r,query:{sql:u}},e).then(i=>i.queryResult.queryResults)}function q(e,o){const t=e.reduce((r,d)=>(r[d[o]]=(d[o]in r?Number(r[d[o]]):0)+Number(d.x),r),{}),a=[];for(const r in t)a.push({[o]:r,count:t[r]});return a}const A=(e,o)=>{const t=e.points[0].data;let a=t.y[0],r=t.name;return o&&([a,r]=[r,a]),{facetValue:a,type:r,event:e.event}},ne=(e,o)=>l("div",{className:"ThemesPlot__barPlotLegend",children:o.map((t,a)=>f("div",{style:{float:"left"},children:[l("div",{className:"ThemesPlot__barPlotLegend__label",style:{backgroundColor:`${e?e[t]:"transparent"}`}},"topBar_label"),l("div",{className:"ThemesPlot__barPlotLegend__graph",children:t},"topBar_graph")," "]},`topBar_${a}`))}),M=(e,o)=>{for(let t in e)e[t]=e[t].replace(",1)",`, ${o})`).replace(",1.0)",`, ${o})`);return e},ie=(e,o)=>y.first(e.filter(t=>t.y===o).map(t=>t.info)),k=({dotPlot:e,topBarPlot:o,sideBarPlot:t,tooltipProps:a=le,onPointClick:r,dotPlotYAxisLabel:d="Research Themes"})=>{const{accessToken:n}=U(),[u,p]=S(!1),[i,g]=S([]),[b,v]=S([]),[x,z]=S([]);ae(()=>{const s=L(n,e),c=L(n,o),h=L(n,t);return Promise.all([s,c,h]).then(m=>{g(D(m[0].headers,m[0].rows)),v(D(m[1].headers,m[1].rows)),z(D(m[2].headers,m[2].rows)),p(!0)}).catch(m=>{throw m}),()=>{}},[n,e,o,t]);let V=[],F=[],B=0,N=0,E=[],T=[];return u&&(T=q(x,"y"),V=T.sort((s,c)=>c.count-s.count).map(s=>s.y),N=Math.max(...T.map(s=>s.count)),B=Math.max(...i.map(s=>Number(s.x))),E=y.orderBy(q(b,"y"),["y"]),F=y.orderBy(q(b,"group"),["group"]).map(s=>s.group)),f(G,{children:[!u&&H,u&&f("div",{className:"ThemesPlot",children:[l("div",{className:"ThemesPlot__dotPlotLegend",children:l(P,{id:"head",plotData:i,isLegend:!0,markerSymbols:e.markerSymbols,style:{width:"100%",height:"100%"},layoutConfig:w,optionsConfig:{..._,responsive:!0,staticPlot:!0},plotStyle:{...e.plotStyle,backgroundColor:"transparent"}})}),o.colors&&ne(o.colors,F),E.map((s,c)=>f("div",{className:"ThemesPlot__topBarPlot",children:[f("div",{className:"ThemesPlot__topBarPlot__label",children:[s.count,"\xA0",Q(s.y)]}),l("div",{className:"ThemesPlot__topBarPlot__plot",children:l(C,{style:{width:"100%",height:"100%"},layoutConfig:y.cloneDeep(R),optionsConfig:{..._},plotData:b,isTop:!0,label:s.y,xMax:s.count,onClick:h=>r(A(h,!0)),colors:c%2===0?o.colors:M({...o.colors},"1")})})]},`topBarDiv_${c}`)),f("div",{style:{display:"flex",position:"relative"},children:[l("div",{className:"ThemesPlot__dotPlotYLabel",children:d}),f("div",{className:"ThemesPlot__dotPlot",children:[V.map((s,c)=>{var h,m;return f("div",{className:"ThemesPlot__dotPlot__row",style:{backgroundColor:(h=e.plotStyle)==null?void 0:h.backgroundColor},children:[l("div",{className:"ThemesPlot__dotPlot__barColumn",children:l(K,{idForToolTip:`plotDiv1_${+c}`,tooltipText:`${ie(i,s)} `,tooltipVisualProps:a,callbackFn:()=>y.noop,children:f("div",{children:[l("span",{className:"ThemesPlot__dotPlot__themeLabel",children:s}),l("br",{}),f("span",{className:"ThemesPlot__dotPlot__countLabel",children:[T[c].count," ",t.countLabel]}),l("br",{}),l(C,{style:{width:"100%"},layoutConfig:R,optionsConfig:_,plotData:x,isTop:!1,xMax:N,label:s,colors:M({...o.colors},"1")})]})})}),l("div",{className:"ThemesPlot__dotPlot__dotPlotColumn",children:l("div",{style:{width:"100%",backgroundColor:(m=e.plotStyle)==null?void 0:m.backgroundColor},children:l(P,{id:c+"",onClick:Y=>r(A(Y,!1)),plotData:i,plotStyle:e.plotStyle,markerSymbols:e.markerSymbols,xMax:B,label:s,layoutConfig:w,optionsConfig:{..._,responsive:!1}})})})]},`plotDiv_${+c}`)}),f("div",{className:"ThemesPlot__dotPlot__row",children:[l("div",{className:"ThemesPlot__dotPlot__barColumn",style:{textAlign:"right"},children:"VOLUME:"}),l("div",{className:"ThemesPlot__dotPlot__dotPlotColumn",style:{marginTop:"0px"},children:l(P,{id:"footer",plotData:i,isXAxis:!0,xMax:B,layoutConfig:w,optionsConfig:{..._,responsive:!1}})})]})]})]}),l("div",{})]})]})};var $=k;try{k.displayName="ThemesPlot",k.__docgenInfo={description:"",displayName:"ThemesPlot",props:{onPointClick:{defaultValue:null,description:"",name:"onPointClick",required:!0,type:{name:"({ facetValue, type, event }: ClickCallbackParams) => void"}},dotPlot:{defaultValue:null,description:"",name:"dotPlot",required:!0,type:{name:"PlotProps"}},topBarPlot:{defaultValue:null,description:"",name:"topBarPlot",required:!0,type:{name:"PlotProps"}},sideBarPlot:{defaultValue:null,description:"",name:"sideBarPlot",required:!0,type:{name:"PlotProps"}},tooltipProps:{defaultValue:{value:`{
  delayShow: 0,
  place: 'right',
  type: 'light',
  effect: 'solid',
  border: true,
}`},description:"",name:"tooltipProps",required:!1,type:{name:"TooltipVisualProps"}},dotPlotYAxisLabel:{defaultValue:{value:"Research Themes"},description:"",name:"dotPlotYAxisLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/themes-plot/ThemesPlot.tsx#ThemesPlot"]={docgenInfo:k.__docgenInfo,name:"ThemesPlot",path:"src/lib/containers/widgets/themes-plot/ThemesPlot.tsx#ThemesPlot"})}catch{}var ut={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"themes-plot-demo":{startLoc:{col:52,line:15},endLoc:{col:1,line:17},startBody:{col:52,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/ThemesPlot",component:$,argTypes:{}};const se=e=>l($,{...e}),de=se.bind({});de.args={onPointClick:e=>{console.log(e.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}};const ct=["ThemesPlotDemo"];export{de as ThemesPlotDemo,ct as __namedExportsOrder,ut as default};
//# sourceMappingURL=ThemesPlot.stories.c04182a6.js.map
