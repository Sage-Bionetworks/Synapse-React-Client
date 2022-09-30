import{R as e}from"./RangeSlider.f92e6857.js";import{j as n}from"./jsx-runtime.05444945.js";import"./slicedToArray.e72f11da.js";import"./toConsumableArray.c4898ee4.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./iframe.ff4ba921.js";const c={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RangeSlider } from './RangeSlider'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/RangeSlider',
  component: RangeSlider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RangeSlider>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RangeSlider> = args => (
  <RangeSlider {...args} />
)

export const RangeSliderDemo = Template.bind({})
RangeSliderDemo.args = {
  domain: ['-100', '100'],
  initialValues: { min: '20', max: '80' },
  step: 5,
  doUpdateOnApply: false,
  maxTickCount: 15,
}
`,locationsMap:{"range-slider-demo":{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"UI/RangeSlider",component:e,argTypes:{}},t=o=>n(e,{...o}),r=t.bind({});r.args={domain:["-100","100"],initialValues:{min:"20",max:"80"},step:5,doUpdateOnApply:!1,maxTickCount:15};const g=["RangeSliderDemo"];export{r as RangeSliderDemo,g as __namedExportsOrder,c as default};
