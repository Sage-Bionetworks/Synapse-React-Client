import{u as K,E as Q}from"./ElementWithTooltip.666d9e93.js";import{a0 as U,B as X}from"./index.cdf98c81.js";import{r as D}from"./sqlFunctions.9bad0aa7.js";import{c as I,P as O}from"./factory.0d7085b4.js";import{j as l,a as f,F as j}from"./jsx-runtime.2e925369.js";import{l as y}from"./lodash.default.f0bab0e3.js";import{l as G}from"./LoadingScreen.85210ad1.js";import{a as H}from"./useUserBundle.1e187889.js";import"./index.es.82d55a6a.js";import"./index.06f4a415.js";import"./SynapseTableConstants.07ecdebd.js";import"./index.eef83e87.js";import"./IconSvg.d5022c82.js";import"./SvgIcon.1f1b3522.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./toConsumableArray.5f669646.js";import"./withStyles.4f64abe1.js";import"./utils.ebacc06c.js";import"./useTheme.735ed160.js";import"./Transition.f54f11c8.js";import"./makeStyles.5f6bad01.js";import"./createSvgIcon.53013205.js";import"./InfoOutlined.748401db.js";import"./Clear.53a62cf5.js";import"./RegularExpressions.b87376bf.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./Dropdown.edf6576c.js";import"./index.f252d424.js";import"./Modal.739750b1.js";import"./Fade.7bfbed49.js";import"./useWaitForDOMRef.088a2ede.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./createWithBsPrefix.f7715523.js";import"./Button.77571428.js";import"./Alert.ad748791.js";import"./usePopperMarginModifiers.09a60569.js";import"./isRequiredForA11y.61bbc671.js";import"./getEndpoint.0de7fccf.js";import"./FormLabel.a635baa2.js";import"./assert.45ccb9fa.js";import"./iframe.dedbd728.js";import"./isObject.7e2c8eb3.js";import"./pick.85350d17.js";import"./uniqueId.4eca3697.js";import"./isArray.949e1480.js";import"./isSymbol.a6e5b306.js";import"./_Uint8Array.692793fe.js";import"./_getTag.260cb500.js";import"./_setToArray.78d992a5.js";import"./hasIn.d2b152d7.js";import"./_baseSlice.50189bc5.js";import"./_baseMap.f7bcde20.js";import"./_baseIsEqual.38511a1d.js";import"./_cacheHas.e524ea96.js";import"./uniq.8580a5da.js";import"./toInteger.9c26e41e.js";import"./toNumber.81238efb.js";import"./without.3d8723b5.js";import"./toLower.32a0870b.js";import"./debounce.6a99f8f3.js";import"./times.0a9ef28a.js";import"./cloneDeep.14fe87ca.js";import"./isEmpty.12a3904b.js";import"./isEqual.ed82a077.js";import"./sortBy.9c93c6a0.js";import"./groupBy.4164eb23.js";import"./Typography.e08e7569.js";const W=I(O);function J(e,o){const t=y.cloneDeep(e);if(!o)return t;o.backgroundColor&&(t.plot_bgcolor=o.backgroundColor),t.yaxis.showticklabels=!1,t.xaxis.range=[-5,o.maxValue+30],t.xaxis.visible=o.isXAxis,t.showlegend=o.isLegend,t.margin={t:0,b:o.isXAxis?50:0,l:0,r:0,pad:15};let a=30;return o.isLegend&&(a=35,t.margin.pad=0,t.xaxis={visible:!1,zeroline:!1,showgrid:!1,showline:!1,range:[0,1]},t.yaxis={visible:!1,showline:!1}),o.isXAxis&&(t.yaxis={visible:!1,showgrid:!1,showline:!1},a=50),t.height=a,t}function Z(e,o){const t=new Array(e.length);return o.forEach(a=>{const r=e.indexOf(a.y);t[r]=a.x}),t}function ee(e,o,t,a){const r=t===void 0;var d=y.uniq(e.map(p=>p.group));const n=[],m=["y-down","triangle-up","cross-thin-open","triangle-up-open-dot","star-square-open","diamond-x"];return d.forEach((p,i)=>{n.push({type:"scatter",x:r?[-10]:Z(t,e.filter(g=>g.group===p)),y:t,text:[p],hovertemplate:"%{x} %{text}<extra></extra>",mode:"markers",name:p,marker:{color:o.markerFill,line:{color:o.markerLine,width:1},symbol:a?a[p]:m[i],size:o.markerSize}})}),n}const P=({plotData:e,optionsConfig:o,layoutConfig:t,label:a,id:r,xMax:d,style:n={width:"100%",height:"100%"},markerSymbols:m,plotStyle:p={markerFill:"#515359",markerLine:"#515359",markerSize:9,backgroundColor:"transparent"},onClick:i,isLegend:g=!1,isXAxis:b=!1})=>{const v=a?[a]:void 0;return l(W,{layout:J(t,{isLegend:g,isXAxis:b,maxValue:d,backgroundColor:p.backgroundColor}),style:n,data:ee(e,p,v,m),config:o,onClick:x=>i?i(x):y.noop},`dotPlot_${r}`)};try{P.displayName="DotPlot",P.__docgenInfo={description:"",displayName:"DotPlot",props:{plotData:{defaultValue:null,description:"",name:"plotData",required:!0,type:{name:"GraphItem[]"}},layoutConfig:{defaultValue:null,description:"",name:"layoutConfig",required:!0,type:{name:"Partial<Layout>"}},optionsConfig:{defaultValue:null,description:"",name:"optionsConfig",required:!0,type:{name:"Partial<Config>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},style:{defaultValue:{value:"{ width: '100%', height: '100%' }"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isLegend:{defaultValue:{value:"false"},description:"",name:"isLegend",required:!1,type:{name:"boolean"}},isXAxis:{defaultValue:{value:"false"},description:"",name:"isXAxis",required:!1,type:{name:"boolean"}},xMax:{defaultValue:null,description:"",name:"xMax",required:!1,type:{name:"number"}},plotStyle:{defaultValue:{value:`{
    markerFill: '#515359',
    markerLine: '#515359',
    markerSize: 9,
    backgroundColor: 'transparent',
  }`},description:"",name:"plotStyle",required:!1,type:{name:"PlotStyle"}},markerSymbols:{defaultValue:null,description:"",name:"markerSymbols",required:!1,type:{name:"Dictionary"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"Function"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/themes-plot/DotPlot.tsx#DotPlot"]={docgenInfo:P.__docgenInfo,name:"DotPlot",path:"src/lib/containers/widgets/themes-plot/DotPlot.tsx#DotPlot"})}catch{}const te=I(O);function oe(e,o,t){o&&(e=e.filter(n=>n.y===o));var a=y.uniq(e.map(n=>n.group)).sort();const r=[],d=["(28,118,175,1)","rgba(91,176,181,1)"];return a.forEach((n,m)=>{const p=e.filter(i=>i.group===n);r.push({x:p.map(i=>i.x),y:p.map(i=>i.y),name:n,orientation:"h",marker:{color:t?t[n]:d[m],width:1},text:[n],hovertemplate:"%{x} %{text}<extra></extra>",type:"bar"})}),r}function re(e,{isTop:o,maxValue:t,backgroundColor:a}){const r=y.cloneDeep(e);return r.xaxis={visible:!1,range:[0,t]},a&&(r.plot_bgcolor=a,r.paper_bgcolor=a),o||(r.hoverlabel={font:{size:10}}),r.showlegend=!1,r.height=o?40:20,r}const C=({plotData:e,optionsConfig:o,isTop:t,layoutConfig:a,label:r,xMax:d,colors:n,plotStyle:m={backgroundColor:"transparent"},style:p={width:"100%",height:"100%"},onClick:i})=>l(te,{style:p,layout:re(a,{isTop:t,maxValue:d,backgroundColor:m.backgroundColor}),config:o,data:oe(e,r,n),onClick:g=>i?i(g):y.noop});try{C.displayName="BarPlot",C.__docgenInfo={description:"",displayName:"BarPlot",props:{isTop:{defaultValue:null,description:"",name:"isTop",required:!0,type:{name:"boolean"}},style:{defaultValue:{value:"{ width: '100%', height: '100%' }"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},plotData:{defaultValue:null,description:"",name:"plotData",required:!0,type:{name:"GraphItem[]"}},layoutConfig:{defaultValue:null,description:"",name:"layoutConfig",required:!0,type:{name:"Partial<Layout>"}},optionsConfig:{defaultValue:null,description:"",name:"optionsConfig",required:!0,type:{name:"Partial<Config>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},xMax:{defaultValue:null,description:"",name:"xMax",required:!0,type:{name:"number"}},colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:"Dictionary"}},plotStyle:{defaultValue:{value:"{ backgroundColor: 'transparent' }"},description:"",name:"plotStyle",required:!1,type:{name:"PlotStyle"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"Function"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/themes-plot/BarPlot.tsx#BarPlot"]={docgenInfo:C.__docgenInfo,name:"BarPlot",path:"src/lib/containers/widgets/themes-plot/BarPlot.tsx#BarPlot"})}catch{}const S=window.React.useState,ae=window.React.useEffect,_={displayModeBar:!1,responsive:!0,scrollZoom:!1,editable:!1,autosizable:!0},le={delayShow:0,place:"right",type:"light",effect:"solid",border:!0},w={showlegend:!0,dragmode:!1,legend:{font:{size:11},y:1.1,xanchor:"right",x:1,orientation:"h"},xaxis:{visible:!0,fixedrange:!0,zeroline:!1,showgrid:!1,showline:!0,linecolor:"#ddd",autotick:!0,ticks:"outside",tickcolor:"#ddd"},yaxis:{fixedrange:!0,zeroline:!1,gridcolor:"#ddd",automargin:!0},margin:{pad:20},hovermode:"closest"},R={barmode:"stack",showlegend:!1,dragmode:!1,hovermode:"closest",yaxis:{visible:!1,fixedrange:!0},margin:{l:0,r:0,b:0,t:0,pad:0}};function L(e,{xField:o,yField:t,groupField:a,entityId:r,whereClause:d,infoField:n}){const m=`SELECT ${o} as "x", ${t} as "y", ${n?n+' as "info", ':""}   ${a} as "group" FROM ${r} ${d?" WHERE "+d:""}`;return U({concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:X,entityId:r,query:{sql:m}},e).then(i=>i.queryResult.queryResults)}function q(e,o){const t=e.reduce((r,d)=>(r[d[o]]=(d[o]in r?Number(r[d[o]]):0)+Number(d.x),r),{}),a=[];for(const r in t)a.push({[o]:r,count:t[r]});return a}const A=(e,o)=>{const t=e.points[0].data;let a=t.y[0],r=t.name;return o&&([a,r]=[r,a]),{facetValue:a,type:r,event:e.event}},ne=(e,o)=>l("div",{className:"ThemesPlot__barPlotLegend",children:o.map((t,a)=>f("div",{style:{float:"left"},children:[l("div",{className:"ThemesPlot__barPlotLegend__label",style:{backgroundColor:`${e?e[t]:"transparent"}`}},"topBar_label"),l("div",{className:"ThemesPlot__barPlotLegend__graph",children:t},"topBar_graph")," "]},`topBar_${a}`))}),M=(e,o)=>{for(let t in e)e[t]=e[t].replace(",1)",`, ${o})`).replace(",1.0)",`, ${o})`);return e},ie=(e,o)=>y.first(e.filter(t=>t.y===o).map(t=>t.info)),k=({dotPlot:e,topBarPlot:o,sideBarPlot:t,tooltipProps:a=le,onPointClick:r,dotPlotYAxisLabel:d="Research Themes"})=>{const{accessToken:n}=H(),[m,p]=S(!1),[i,g]=S([]),[b,v]=S([]),[x,z]=S([]);ae(()=>{const s=L(n,e),u=L(n,o),h=L(n,t);return Promise.all([s,u,h]).then(c=>{g(D(c[0].headers,c[0].rows)),v(D(c[1].headers,c[1].rows)),z(D(c[2].headers,c[2].rows)),p(!0)}).catch(c=>{throw c}),()=>{}},[n,e,o,t]);let V=[],F=[],B=0,N=0,E=[],T=[];return m&&(T=q(x,"y"),V=T.sort((s,u)=>u.count-s.count).map(s=>s.y),N=Math.max(...T.map(s=>s.count)),B=Math.max(...i.map(s=>Number(s.x))),E=y.orderBy(q(b,"y"),["y"]),F=y.orderBy(q(b,"group"),["group"]).map(s=>s.group)),f(j,{children:[!m&&G,m&&f("div",{className:"ThemesPlot",children:[l("div",{className:"ThemesPlot__dotPlotLegend",children:l(P,{id:"head",plotData:i,isLegend:!0,markerSymbols:e.markerSymbols,style:{width:"100%",height:"100%"},layoutConfig:w,optionsConfig:{..._,responsive:!0,staticPlot:!0},plotStyle:{...e.plotStyle,backgroundColor:"transparent"}})}),o.colors&&ne(o.colors,F),E.map((s,u)=>f("div",{className:"ThemesPlot__topBarPlot",children:[f("div",{className:"ThemesPlot__topBarPlot__label",children:[s.count,"\xA0",K(s.y)]}),l("div",{className:"ThemesPlot__topBarPlot__plot",children:l(C,{style:{width:"100%",height:"100%"},layoutConfig:y.cloneDeep(R),optionsConfig:{..._},plotData:b,isTop:!0,label:s.y,xMax:s.count,onClick:h=>r(A(h,!0)),colors:u%2===0?o.colors:M({...o.colors},"1")})})]},`topBarDiv_${u}`)),f("div",{style:{display:"flex",position:"relative"},children:[l("div",{className:"ThemesPlot__dotPlotYLabel",children:d}),f("div",{className:"ThemesPlot__dotPlot",children:[V.map((s,u)=>{var h,c;return f("div",{className:"ThemesPlot__dotPlot__row",style:{backgroundColor:(h=e.plotStyle)==null?void 0:h.backgroundColor},children:[l("div",{className:"ThemesPlot__dotPlot__barColumn",children:l(Q,{idForToolTip:`plotDiv1_${+u}`,tooltipText:`${ie(i,s)} `,tooltipVisualProps:a,callbackFn:()=>y.noop,children:f("div",{children:[l("span",{className:"ThemesPlot__dotPlot__themeLabel",children:s}),l("br",{}),f("span",{className:"ThemesPlot__dotPlot__countLabel",children:[T[u].count," ",t.countLabel]}),l("br",{}),l(C,{style:{width:"100%"},layoutConfig:R,optionsConfig:_,plotData:x,isTop:!1,xMax:N,label:s,colors:M({...o.colors},"1")})]})})}),l("div",{className:"ThemesPlot__dotPlot__dotPlotColumn",children:l("div",{style:{width:"100%",backgroundColor:(c=e.plotStyle)==null?void 0:c.backgroundColor},children:l(P,{id:u+"",onClick:Y=>r(A(Y,!1)),plotData:i,plotStyle:e.plotStyle,markerSymbols:e.markerSymbols,xMax:B,label:s,layoutConfig:w,optionsConfig:{..._,responsive:!1}})})})]},`plotDiv_${+u}`)}),f("div",{className:"ThemesPlot__dotPlot__row",children:[l("div",{className:"ThemesPlot__dotPlot__barColumn",style:{textAlign:"right"},children:"VOLUME:"}),l("div",{className:"ThemesPlot__dotPlot__dotPlotColumn",style:{marginTop:"0px"},children:l(P,{id:"footer",plotData:i,isXAxis:!0,xMax:B,layoutConfig:w,optionsConfig:{..._,responsive:!1}})})]})]})]}),l("div",{})]})]})};var $=k;try{k.displayName="ThemesPlot",k.__docgenInfo={description:"",displayName:"ThemesPlot",props:{onPointClick:{defaultValue:null,description:"",name:"onPointClick",required:!0,type:{name:"({ facetValue, type, event }: ClickCallbackParams) => void"}},dotPlot:{defaultValue:null,description:"",name:"dotPlot",required:!0,type:{name:"PlotProps"}},topBarPlot:{defaultValue:null,description:"",name:"topBarPlot",required:!0,type:{name:"PlotProps"}},sideBarPlot:{defaultValue:null,description:"",name:"sideBarPlot",required:!0,type:{name:"PlotProps"}},tooltipProps:{defaultValue:{value:`{
  delayShow: 0,
  place: 'right',
  type: 'light',
  effect: 'solid',
  border: true,
}`},description:"",name:"tooltipProps",required:!1,type:{name:"TooltipVisualProps"}},dotPlotYAxisLabel:{defaultValue:{value:"Research Themes"},description:"",name:"dotPlotYAxisLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/themes-plot/ThemesPlot.tsx#ThemesPlot"]={docgenInfo:k.__docgenInfo,name:"ThemesPlot",path:"src/lib/containers/widgets/themes-plot/ThemesPlot.tsx#ThemesPlot"})}catch{}var vt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"themes-plot-demo":{startLoc:{col:52,line:15},endLoc:{col:1,line:17},startBody:{col:52,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/ThemesPlot",component:$,argTypes:{}};const se=e=>l($,{...e}),de=se.bind({});de.args={onPointClick:e=>{console.log(e.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}};const Bt=["ThemesPlotDemo"];export{de as ThemesPlotDemo,Bt as __namedExportsOrder,vt as default};
//# sourceMappingURL=ThemesPlot.stories.dd8e8364.js.map
