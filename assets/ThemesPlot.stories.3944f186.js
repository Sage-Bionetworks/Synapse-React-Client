import{j as l,r as _,a as f,F as K}from"./jsx-runtime.ed0bc2e8.js";import{u as Q,E as U}from"./ElementWithTooltip.aa21c398.js";import{h as X,D as j,C as G}from"./index.444e3572.js";import{r as D}from"./sqlFunctions.1d7d9843.js";import{c as I,P as O}from"./factory.ee8ba69d.js";import{l as y}from"./lodash.default.43ccce09.js";import{l as H}from"./LoadingScreen.d5fc7030.js";import"./iframe.1c77586e.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.af973a0c.js";import"./SvgIcon.1c3fe3f1.js";import"./withStyles.5eea39d5.js";import"./Tooltip.9455954b.js";import"./createSvgIcon.b88943f5.js";import"./utils.31a80d71.js";import"./index.68bd2905.js";import"./makeStyles.83c340c0.js";import"./InfoOutlined.10c65527.js";import"./Dropdown.cea6d11d.js";import"./Button.ead7d59a.js";import"./index.57d09176.js";import"./Modal.2df339d5.js";import"./Alert.e70a23c6.js";import"./index.35ce73ec.js";import"./useWaitForDOMRef.2b50b75b.js";import"./inheritsLoose.02c5cdc5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.2ccc8168.js";import"./isRequiredForA11y.20ed4857.js";import"./isArray.69d02dee.js";import"./getEndpoint.bb7ded34.js";import"./_baseClone.32511df5.js";import"./_getTag.09032bbf.js";import"./_Set.79ce457d.js";import"./isEmpty.c32e2e50.js";import"./isEqual.7b80062a.js";import"./_cacheHas.2f01a71b.js";import"./_setToArray.a82100c8.js";import"./pick.fbb2f290.js";import"./uniqueId.e6e71b68.js";import"./isSymbol.3ae1367c.js";import"./_baseSlice.50189bc5.js";import"./uniq.e0b70e96.js";import"./toInteger.c1671d6c.js";import"./without.ae039a4c.js";import"./toLower.f8fc8363.js";import"./upperFirst.83631a22.js";import"./times.12135b85.js";import"./union.ec09b824.js";import"./cloneDeep.c1db8169.js";import"./groupBy.3d35b60d.js";import"./Typography.935cd23d.js";const W=I(O);function J(e,o){const t=y.cloneDeep(e);if(!o)return t;o.backgroundColor&&(t.plot_bgcolor=o.backgroundColor),t.yaxis.showticklabels=!1,t.xaxis.range=[-5,o.maxValue+30],t.xaxis.visible=o.isXAxis,t.showlegend=o.isLegend,t.margin={t:0,b:o.isXAxis?50:0,l:0,r:0,pad:15};let a=30;return o.isLegend&&(a=35,t.margin.pad=0,t.xaxis={visible:!1,zeroline:!1,showgrid:!1,showline:!1,range:[0,1]},t.yaxis={visible:!1,showline:!1}),o.isXAxis&&(t.yaxis={visible:!1,showgrid:!1,showline:!1},a=50),t.height=a,t}function Z(e,o){const t=new Array(e.length);return o.forEach(a=>{const r=e.indexOf(a.y);t[r]=a.x}),t}function ee(e,o,t,a){const r=t===void 0;var d=y.uniq(e.map(p=>p.group));const n=[],u=["y-down","triangle-up","cross-thin-open","triangle-up-open-dot","star-square-open","diamond-x"];return d.forEach((p,i)=>{n.push({type:"scatter",x:r?[-10]:Z(t,e.filter(g=>g.group===p)),y:t,text:[p],hovertemplate:"%{x} %{text}<extra></extra>",mode:"markers",name:p,marker:{color:o.markerFill,line:{color:o.markerLine,width:1},symbol:a?a[p]:u[i],size:o.markerSize}})}),n}const P=({plotData:e,optionsConfig:o,layoutConfig:t,label:a,id:r,xMax:d,style:n={width:"100%",height:"100%"},markerSymbols:u,plotStyle:p={markerFill:"#515359",markerLine:"#515359",markerSize:9,backgroundColor:"transparent"},onClick:i,isLegend:g=!1,isXAxis:b=!1})=>{const v=a?[a]:void 0;return l(W,{layout:J(t,{isLegend:g,isXAxis:b,maxValue:d,backgroundColor:p.backgroundColor}),style:n,data:ee(e,p,v,u),config:o,onClick:T=>i?i(T):y.noop},`dotPlot_${r}`)};try{P.displayName="DotPlot",P.__docgenInfo={description:"",displayName:"DotPlot",props:{plotData:{defaultValue:null,description:"",name:"plotData",required:!0,type:{name:"GraphItem[]"}},layoutConfig:{defaultValue:null,description:"",name:"layoutConfig",required:!0,type:{name:"Partial<Layout>"}},optionsConfig:{defaultValue:null,description:"",name:"optionsConfig",required:!0,type:{name:"Partial<Config>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},style:{defaultValue:{value:"{ width: '100%', height: '100%' }"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isLegend:{defaultValue:{value:"false"},description:"",name:"isLegend",required:!1,type:{name:"boolean"}},isXAxis:{defaultValue:{value:"false"},description:"",name:"isXAxis",required:!1,type:{name:"boolean"}},xMax:{defaultValue:null,description:"",name:"xMax",required:!1,type:{name:"number"}},plotStyle:{defaultValue:{value:`{
    markerFill: '#515359',
    markerLine: '#515359',
    markerSize: 9,
    backgroundColor: 'transparent',
  }`},description:"",name:"plotStyle",required:!1,type:{name:"PlotStyle"}},markerSymbols:{defaultValue:null,description:"",name:"markerSymbols",required:!1,type:{name:"Dictionary"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"Function"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/themes-plot/DotPlot.tsx#DotPlot"]={docgenInfo:P.__docgenInfo,name:"DotPlot",path:"src/lib/containers/widgets/themes-plot/DotPlot.tsx#DotPlot"})}catch{}const te=I(O);function oe(e,o,t){o&&(e=e.filter(n=>n.y===o));var a=y.uniq(e.map(n=>n.group)).sort();const r=[],d=["(28,118,175,1)","rgba(91,176,181,1)"];return a.forEach((n,u)=>{const p=e.filter(i=>i.group===n);r.push({x:p.map(i=>i.x),y:p.map(i=>i.y),name:n,orientation:"h",marker:{color:t?t[n]:d[u],width:1},text:[n],hovertemplate:"%{x} %{text}<extra></extra>",type:"bar"})}),r}function re(e,{isTop:o,maxValue:t,backgroundColor:a}){const r=y.cloneDeep(e);return r.xaxis={visible:!1,range:[0,t]},a&&(r.plot_bgcolor=a,r.paper_bgcolor=a),o||(r.hoverlabel={font:{size:10}}),r.showlegend=!1,r.height=o?40:20,r}const x=({plotData:e,optionsConfig:o,isTop:t,layoutConfig:a,label:r,xMax:d,colors:n,plotStyle:u={backgroundColor:"transparent"},style:p={width:"100%",height:"100%"},onClick:i})=>l(te,{style:p,layout:re(a,{isTop:t,maxValue:d,backgroundColor:u.backgroundColor}),config:o,data:oe(e,r,n),onClick:g=>i?i(g):y.noop});try{x.displayName="BarPlot",x.__docgenInfo={description:"",displayName:"BarPlot",props:{isTop:{defaultValue:null,description:"",name:"isTop",required:!0,type:{name:"boolean"}},style:{defaultValue:{value:"{ width: '100%', height: '100%' }"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},plotData:{defaultValue:null,description:"",name:"plotData",required:!0,type:{name:"GraphItem[]"}},layoutConfig:{defaultValue:null,description:"",name:"layoutConfig",required:!0,type:{name:"Partial<Layout>"}},optionsConfig:{defaultValue:null,description:"",name:"optionsConfig",required:!0,type:{name:"Partial<Config>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},xMax:{defaultValue:null,description:"",name:"xMax",required:!0,type:{name:"number"}},colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:"Dictionary"}},plotStyle:{defaultValue:{value:"{ backgroundColor: 'transparent' }"},description:"",name:"plotStyle",required:!1,type:{name:"PlotStyle"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"Function"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/themes-plot/BarPlot.tsx#BarPlot"]={docgenInfo:x.__docgenInfo,name:"BarPlot",path:"src/lib/containers/widgets/themes-plot/BarPlot.tsx#BarPlot"})}catch{}const C={displayModeBar:!1,responsive:!0,scrollZoom:!1,editable:!1,autosizable:!0},ae={delayShow:0,place:"right",type:"light",effect:"solid",border:!0},L={showlegend:!0,dragmode:!1,legend:{font:{size:11},y:1.1,xanchor:"right",x:1,orientation:"h"},xaxis:{visible:!0,fixedrange:!0,zeroline:!1,showgrid:!1,showline:!0,linecolor:"#ddd",autotick:!0,ticks:"outside",tickcolor:"#ddd"},yaxis:{fixedrange:!0,zeroline:!1,gridcolor:"#ddd",automargin:!0},margin:{pad:20},hovermode:"closest"},A={barmode:"stack",showlegend:!1,dragmode:!1,hovermode:"closest",yaxis:{visible:!1,fixedrange:!0},margin:{l:0,r:0,b:0,t:0,pad:0}};function w(e,{xField:o,yField:t,groupField:a,entityId:r,whereClause:d,infoField:n}){const u=`SELECT ${o} as "x", ${t} as "y", ${n?n+' as "info", ':""}   ${a} as "group" FROM ${r} ${d?" WHERE "+d:""}`;return j({concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:G,entityId:r,query:{sql:u}},e).then(i=>i.queryResult.queryResults)}function q(e,o){const t=e.reduce((r,d)=>(r[d[o]]=(d[o]in r?Number(r[d[o]]):0)+Number(d.x),r),{}),a=[];for(const r in t)a.push({[o]:r,count:t[r]});return a}const R=(e,o)=>{const t=e.points[0].data;let a=t.y[0],r=t.name;return o&&([a,r]=[r,a]),{facetValue:a,type:r,event:e.event}},le=(e,o)=>l("div",{className:"ThemesPlot__barPlotLegend",children:o.map((t,a)=>f("div",{style:{float:"left"},children:[l("div",{className:"ThemesPlot__barPlotLegend__label",style:{backgroundColor:`${e?e[t]:"transparent"}`}},"topBar_label"),l("div",{className:"ThemesPlot__barPlotLegend__graph",children:t},"topBar_graph")," "]},`topBar_${a}`))}),M=(e,o)=>{for(let t in e)e[t]=e[t].replace(",1)",`, ${o})`).replace(",1.0)",`, ${o})`);return e},ne=(e,o)=>y.first(e.filter(t=>t.y===o).map(t=>t.info)),k=({dotPlot:e,topBarPlot:o,sideBarPlot:t,tooltipProps:a=ae,onPointClick:r,dotPlotYAxisLabel:d="Research Themes"})=>{const{accessToken:n}=X(),[u,p]=_.exports.useState(!1),[i,g]=_.exports.useState([]),[b,v]=_.exports.useState([]),[T,z]=_.exports.useState([]);_.exports.useEffect(()=>{const s=w(n,e),c=w(n,o),h=w(n,t);return Promise.all([s,c,h]).then(m=>{g(D(m[0].headers,m[0].rows)),v(D(m[1].headers,m[1].rows)),z(D(m[2].headers,m[2].rows)),p(!0)}).catch(m=>{throw m}),()=>{}},[n,e,o,t]);let V=[],F=[],B=0,N=0,E=[],S=[];return u&&(S=q(T,"y"),V=S.sort((s,c)=>c.count-s.count).map(s=>s.y),N=Math.max(...S.map(s=>s.count)),B=Math.max(...i.map(s=>Number(s.x))),E=y.orderBy(q(b,"y"),["y"]),F=y.orderBy(q(b,"group"),["group"]).map(s=>s.group)),f(K,{children:[!u&&H,u&&f("div",{className:"ThemesPlot",children:[l("div",{className:"ThemesPlot__dotPlotLegend",children:l(P,{id:"head",plotData:i,isLegend:!0,markerSymbols:e.markerSymbols,style:{width:"100%",height:"100%"},layoutConfig:L,optionsConfig:{...C,responsive:!0,staticPlot:!0},plotStyle:{...e.plotStyle,backgroundColor:"transparent"}})}),o.colors&&le(o.colors,F),E.map((s,c)=>f("div",{className:"ThemesPlot__topBarPlot",children:[f("div",{className:"ThemesPlot__topBarPlot__label",children:[s.count,"\xA0",Q(s.y)]}),l("div",{className:"ThemesPlot__topBarPlot__plot",children:l(x,{style:{width:"100%",height:"100%"},layoutConfig:y.cloneDeep(A),optionsConfig:{...C},plotData:b,isTop:!0,label:s.y,xMax:s.count,onClick:h=>r(R(h,!0)),colors:c%2===0?o.colors:M({...o.colors},"1")})})]},`topBarDiv_${c}`)),f("div",{style:{display:"flex",position:"relative"},children:[l("div",{className:"ThemesPlot__dotPlotYLabel",children:d}),f("div",{className:"ThemesPlot__dotPlot",children:[V.map((s,c)=>{var h,m;return f("div",{className:"ThemesPlot__dotPlot__row",style:{backgroundColor:(h=e.plotStyle)==null?void 0:h.backgroundColor},children:[l("div",{className:"ThemesPlot__dotPlot__barColumn",children:l(U,{idForToolTip:`plotDiv1_${+c}`,tooltipText:`${ne(i,s)} `,tooltipVisualProps:a,callbackFn:()=>y.noop,children:f("div",{children:[l("span",{className:"ThemesPlot__dotPlot__themeLabel",children:s}),l("br",{}),f("span",{className:"ThemesPlot__dotPlot__countLabel",children:[S[c].count," ",t.countLabel]}),l("br",{}),l(x,{style:{width:"100%"},layoutConfig:A,optionsConfig:C,plotData:T,isTop:!1,xMax:N,label:s,colors:M({...o.colors},"1")})]})})}),l("div",{className:"ThemesPlot__dotPlot__dotPlotColumn",children:l("div",{style:{width:"100%",backgroundColor:(m=e.plotStyle)==null?void 0:m.backgroundColor},children:l(P,{id:c+"",onClick:Y=>r(R(Y,!1)),plotData:i,plotStyle:e.plotStyle,markerSymbols:e.markerSymbols,xMax:B,label:s,layoutConfig:L,optionsConfig:{...C,responsive:!1}})})})]},`plotDiv_${+c}`)}),f("div",{className:"ThemesPlot__dotPlot__row",children:[l("div",{className:"ThemesPlot__dotPlot__barColumn",style:{textAlign:"right"},children:"VOLUME:"}),l("div",{className:"ThemesPlot__dotPlot__dotPlotColumn",style:{marginTop:"0px"},children:l(P,{id:"footer",plotData:i,isXAxis:!0,xMax:B,layoutConfig:L,optionsConfig:{...C,responsive:!1}})})]})]})]}),l("div",{})]})]})},$=k;try{k.displayName="ThemesPlot",k.__docgenInfo={description:"",displayName:"ThemesPlot",props:{onPointClick:{defaultValue:null,description:"",name:"onPointClick",required:!0,type:{name:"({ facetValue, type, event }: ClickCallbackParams) => void"}},dotPlot:{defaultValue:null,description:"",name:"dotPlot",required:!0,type:{name:"PlotProps"}},topBarPlot:{defaultValue:null,description:"",name:"topBarPlot",required:!0,type:{name:"PlotProps"}},sideBarPlot:{defaultValue:null,description:"",name:"sideBarPlot",required:!0,type:{name:"PlotProps"}},tooltipProps:{defaultValue:{value:`{
  delayShow: 0,
  place: 'right',
  type: 'light',
  effect: 'solid',
  border: true,
}`},description:"",name:"tooltipProps",required:!1,type:{name:"TooltipVisualProps"}},dotPlotYAxisLabel:{defaultValue:{value:"Research Themes"},description:"",name:"dotPlotYAxisLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/themes-plot/ThemesPlot.tsx#ThemesPlot"]={docgenInfo:k.__docgenInfo,name:"ThemesPlot",path:"src/lib/containers/widgets/themes-plot/ThemesPlot.tsx#ThemesPlot"})}catch{}const st={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"themes-plot-demo":{startLoc:{col:52,line:15},endLoc:{col:1,line:17},startBody:{col:52,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/ThemesPlot",component:$,argTypes:{}},ie=e=>l($,{...e}),se=ie.bind({});se.args={onPointClick:e=>{console.log(e.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}};const dt=["ThemesPlotDemo"];export{se as ThemesPlotDemo,dt as __namedExportsOrder,st as default};
