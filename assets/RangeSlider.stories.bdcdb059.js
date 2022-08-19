import{R as e}from"./RangeSlider.19d66a3c.js";import{j as n}from"./jsx-runtime.2e925369.js";import"./slicedToArray.e9a7fa03.js";import"./toConsumableArray.8f496188.js";import"./classCallCheck.8304ed06.js";import"./createClass.67a84016.js";import"./inherits.0fdbf119.js";var c={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"range-slider-demo":{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"UI/RangeSlider",component:e,argTypes:{}};const t=o=>n(e,{...o}),r=t.bind({});r.args={domain:["-100","100"],initialValues:{min:"20",max:"80"},step:5,doUpdateOnApply:!1,maxTickCount:15};const g=["RangeSliderDemo"];export{r as RangeSliderDemo,g as __namedExportsOrder,c as default};
//# sourceMappingURL=RangeSlider.stories.bdcdb059.js.map
