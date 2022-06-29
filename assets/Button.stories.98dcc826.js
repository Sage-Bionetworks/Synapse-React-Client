import{j as o}from"./jsx-runtime.2e925369.js";import{B as n}from"./Button.77571428.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./index.f252d424.js";var p={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from 'react-bootstrap'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: [
        'sds-primary',
        'outline',
        'tertiary',
        'primary',
        'secondary',
        'light-secondary',
        'default',
        'white',
        'light',
      ],
    },
    className: {
      name: 'shape',
      control: 'select',
      options: ['', 'pill', 'pill-xl'],
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => (
  <div className="bootstrap-4-backport">
    <Button {...args}>{args.label}</Button>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  variant: 'sds-primary',
  label: 'Button',
}
`,locationsMap:{primary:{startLoc:{col:48,line:34},endLoc:{col:1,line:38},startBody:{col:48,line:34},endBody:{col:1,line:38}}}}},title:"UI/Button",component:n,argTypes:{label:{control:"text"},variant:{control:"select",options:["sds-primary","outline","tertiary","primary","secondary","light-secondary","default","white","light"]},className:{name:"shape",control:"select",options:["","pill","pill-xl"]}}};const r=t=>o("div",{className:"bootstrap-4-backport",children:o(n,{...t,children:t.label})}),e=r.bind({});e.args={variant:"sds-primary",label:"Button"};const c=["Primary"];export{e as Primary,c as __namedExportsOrder,p as default};
//# sourceMappingURL=Button.stories.98dcc826.js.map
