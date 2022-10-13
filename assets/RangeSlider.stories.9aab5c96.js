import{R as e}from"./RangeSlider.a961b08b.js";import{j as n}from"./jsx-runtime.4ed473f6.js";import"./iframe.b5feb82b.js";const p={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"range-slider-demo":{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"UI/RangeSlider",component:e,argTypes:{}},t=o=>n(e,{...o}),r=t.bind({});r.args={domain:["-100","100"],initialValues:{min:"20",max:"80"},step:5,doUpdateOnApply:!1,maxTickCount:15};const l=["RangeSliderDemo"];export{r as RangeSliderDemo,l as __namedExportsOrder,p as default};
