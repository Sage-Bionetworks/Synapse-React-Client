import{c as f,P as x}from"./factory.f5aa0ef3.js";import{a as g,j as e,F as h}from"./jsx-runtime.31268528.js";import"./iframe.c7567c2d.js";import"./index.35ce73ec.js";const P=f(x),a=t=>{const{data:n,layout:o,config:d,className:m,containerWidth:u,useResizeHandler:y,plotStyle:b}=t,l=!!(n&&n.length);return g("div",{className:m,children:[!l&&e(h,{children:e("div",{className:"chart-nodata",style:{width:u},children:e("span",{children:"Data Unavailable"})})}),l&&e(P,{data:n,layout:o!=null?o:{},config:d,useResizeHandler:y,style:b})]})},c=a;try{a.displayName="PlotlyWrapper",a.__docgenInfo={description:"",displayName:"PlotlyWrapper",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Data[]"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"Partial<Layout>"}},config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"Partial<Config>"}},useResizeHandler:{defaultValue:null,description:"",name:"useResizeHandler",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},containerWidth:{defaultValue:null,description:"",name:"containerWidth",required:!1,type:{name:"number"}},plotStyle:{defaultValue:null,description:"",name:"plotStyle",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/PlotlyWrapper.tsx#PlotlyWrapper"]={docgenInfo:a.__docgenInfo,name:"PlotlyWrapper",path:"src/lib/containers/PlotlyWrapper.tsx#PlotlyWrapper"})}catch{}const _={distribution:[12184,5175,4148,3481,2151,1175,570,153,21,9],bins:[-.007165802586,.7165802586,1.4331605172,2.1497407758,2.8663210344,3.582901293,4.2994815516,5.0160618102,5.7326420688,6.449222327399999,7.165802586],min:0,max:7.165802586,mean:1.3710040086127533,first_quartile:.26267472635,third_quartile:2.20063426655},C={distribution:[9631,5149,4106,4018,3768,1798,491,91,13,2],bins:[-.003,.3,.6,.8999999999999999,1.2,1.5,1.7999999999999998,2.1,2.4,2.6999999999999997,3],min:0,max:3,mean:.7160479295046273,first_quartile:.2261353865,third_quartile:1.1538092195},W={distribution:[20368,2068,1304,1206,1084,887,758,553,447,392],bins:[-.002,.2,.4,.6000000000000001,.8,1,1.2000000000000002,1.4000000000000001,1.6,1.8,2],min:0,max:2,mean:.3498614540466405,first_quartile:0,third_quartile:.6516586135},B={distribution:[20945,1587,1236,1236,820,812,812,811,418,390],bins:[-.002,.2,.4,.6000000000000001,.8,1,1.2000000000000002,1.4000000000000001,1.6,1.8,2],min:0,max:2,mean:.2970251075102351,first_quartile:0,third_quartile:.365292307692308},D={distribution:[28809,130,90,38,0,0,0,0,0,0],bins:[-.002,.2,.4,.6000000000000001,.8,1,1.2000000000000002,1.4000000000000001,1.6,1.8,2],min:0,max:2,mean:.010936342473337463,first_quartile:0,third_quartile:0},r={logsdon:_,geneticsscore:C,omicsscore:W,literaturescore:B,flyneuropathscore:D},A={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PlotlyWrapper from './PlotlyWrapper'
import rawData from '../../mocks/distribution_data.json'

export default {
  title: 'Components/PlotlyWrapper',
  component: PlotlyWrapper,
} as ComponentMeta<typeof PlotlyWrapper>

const Template: ComponentStory<typeof PlotlyWrapper> = args => (
  <PlotlyWrapper {...args} />
)

const plotConfigs = {
  displayModeBar: false,
}

const boxPlotData = [
  {
    x: [1, 2, 3, 4, 4, 4, 8, 9, 10],
    name: '',
    marker: {
      color: 'rgba(229, 220, 247, 1)', // "rgba(166, 132, 238, 0.25)",
      // line: {
      //   width: 1
      // }
    },
    type: 'box',
    boxmean: false,
    orientation: 'h',
    whiskerwidth: 1,
    hoverinfo: 'x',
  },
  {
    x: [2.3],
    y: [''],
    name: '',
    marker: {
      symbol: 'line-ns',
      color: 'rgba(166, 132, 238, 1)',
    },
    hovertemplate: 'Score: %{x}',
  },
]

const boxPlotLayout = {
  width: 300,
  height: 110,
  margin: {
    t: 10,
  },
  xaxis: {
    visible: false,
  },
}

const barColors = rawData.geneticsscore.distribution.map((item, ind) =>
  ind === 1 ? 'rgba(166, 132, 238, 1)' : 'rgba(166, 132, 238, 0.25)',
)

const sharedBarData = {
  type: 'bar',
  marker: {
    color: barColors,
  },
  width: 0.2,
}

const geneticsscoreData = [
  {
    x: Object.values(rawData.geneticsscore.bins).map(num => num.toFixed(2)),
    y: Object.values(rawData.geneticsscore.distribution),
    ...sharedBarData,
  },
]

// Additional info to customize axis: https://plotly.com/javascript/axes/
const barLayout = {
  width: 300,
  xaxis: {
    title: 'Gene Score'.toUpperCase(),
    titlefont: {
      size: 12,
    },
    tick0: 0,
    dtick: 0.3,
  },
  yaxis: {
    title: 'Number of Genes'.toUpperCase(),
    titlefont: {
      size: 12,
    },
  },
  plot_bgcolor: 'rgba(236, 236, 236, 0.25)',
}

const specialBarLayout = {
  ...barLayout,
  annotations: [
    {
      x: 0.3,
      y: 5149,
      text: '2.5',
      ax: 0,
      ay: -10,
    },
  ],
}

export const BarChart = Template.bind({})
BarChart.args = {
  data: geneticsscoreData,
  layout: specialBarLayout,
  containerWidth: 300,
  config: plotConfigs,
}

export const BoxPlot = Template.bind({})
BoxPlot.args = {
  data: boxPlotData,
  layout: boxPlotLayout,
  containerWidth: 300,
  config: plotConfigs,
  className: 'chart-boxplot',
}

export const NoData = Template.bind({})
NoData.args = {
  data: [],
  layout: specialBarLayout,
  containerWidth: 300,
  config: plotConfigs,
}
`,locationsMap:{"bar-chart":{startLoc:{col:55,line:11},endLoc:{col:1,line:13},startBody:{col:55,line:11},endBody:{col:1,line:13}},"box-plot":{startLoc:{col:55,line:11},endLoc:{col:1,line:13},startBody:{col:55,line:11},endBody:{col:1,line:13}},"no-data":{startLoc:{col:55,line:11},endLoc:{col:1,line:13},startBody:{col:55,line:11},endBody:{col:1,line:13}}}}},title:"Components/PlotlyWrapper",component:c},i=t=>e(c,{...t}),s={displayModeBar:!1},S=[{x:[1,2,3,4,4,4,8,9,10],name:"",marker:{color:"rgba(229, 220, 247, 1)"},type:"box",boxmean:!1,orientation:"h",whiskerwidth:1,hoverinfo:"x"},{x:[2.3],y:[""],name:"",marker:{symbol:"line-ns",color:"rgba(166, 132, 238, 1)"},hovertemplate:"Score: %{x}"}],L={width:300,height:110,margin:{t:10},xaxis:{visible:!1}},q=r.geneticsscore.distribution.map((t,n)=>n===1?"rgba(166, 132, 238, 1)":"rgba(166, 132, 238, 0.25)"),w={type:"bar",marker:{color:q},width:.2},k=[{x:Object.values(r.geneticsscore.bins).map(t=>t.toFixed(2)),y:Object.values(r.geneticsscore.distribution),...w}],v={width:300,xaxis:{title:"Gene Score".toUpperCase(),titlefont:{size:12},tick0:0,dtick:.3},yaxis:{title:"Number of Genes".toUpperCase(),titlefont:{size:12}},plot_bgcolor:"rgba(236, 236, 236, 0.25)"},p={...v,annotations:[{x:.3,y:5149,text:"2.5",ax:0,ay:-10}]},N=i.bind({});N.args={data:k,layout:p,containerWidth:300,config:s};const O=i.bind({});O.args={data:S,layout:L,containerWidth:300,config:s,className:"chart-boxplot"};const j=i.bind({});j.args={data:[],layout:p,containerWidth:300,config:s};const E=["BarChart","BoxPlot","NoData"];export{N as BarChart,O as BoxPlot,j as NoData,E as __namedExportsOrder,A as default};
