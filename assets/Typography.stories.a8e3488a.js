import{T as r}from"./Typography.7bd5dd17.js";import{j as e}from"./jsx-runtime.2e925369.js";import"./index.f252d424.js";import"./makeStyles.9976e655.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.ab2e1d33.js";import"./toConsumableArray.b3669986.js";var m={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Typography from './Typography'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Typography>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = args => (
  <Typography {...args}>
    {args.children ??
      "Modify this sample text using the 'children' control below"}
  </Typography>
)

export const TypographyDemo = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TypographyDemo.args = {
  variant: 'headline1',
}
`,locationsMap:{"typography-demo":{startLoc:{col:52,line:17},endLoc:{col:1,line:22},startBody:{col:52,line:17},endBody:{col:1,line:22}}}}},title:"UI/Typography",component:r,argTypes:{children:{control:"text"}}};const n=o=>{var t;return e(r,{...o,children:(t=o.children)!=null?t:"Modify this sample text using the 'children' control below"})},p=n.bind({});p.args={variant:"headline1"};const h=["TypographyDemo"];export{p as TypographyDemo,h as __namedExportsOrder,m as default};
//# sourceMappingURL=Typography.stories.a8e3488a.js.map
