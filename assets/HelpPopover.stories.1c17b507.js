import{H as o}from"./HelpPopover.4489fb71.js";import{j as r}from"./jsx-runtime.00d70968.js";import"./MarkdownPopover.6be1e90c.js";import"./usePopperMarginModifiers.0428ddea.js";import"./withStyles.d50e1a5a.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./useWaitForDOMRef.064fee4c.js";import"./FullWidthAlert.9ae706f1.js";import"./Typography.e0d7a65e.js";import"./index.57d09176.js";import"./makeStyles.733638f6.js";import"./Tooltip.006e7cf4.js";import"./SvgIcon.53be2b5b.js";import"./slicedToArray.e72f11da.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.72011e3e.js";import"./MarkdownSynapse.7ef6f751.js";import"./index.a10c4deb.js";import"./assert.488d80ba.js";import"./iframe.c8ac3523.js";import"./getEndpoint.bb7ded34.js";import"./UserCard.c0221aea.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.a15c0bf6.js";import"./times.d1598664.js";import"./toInteger.203805b9.js";import"./Skeleton.c897a2bf.js";import"./IconSvg.e3afc045.js";import"./InfoOutlined.31277c73.js";import"./Overlay.b3559176.js";import"./factory.5feb0853.js";import"./sqlFunctions.59c64146.js";import"./SynapseVideo.67dc9910.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.85b46dc0.js";import"./moment.a565bb48.js";import"./index.fd28b4d1.js";import"./index.ed194d05.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";const Q={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HelpPopover } from './HelpPopover'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/HelpPopover',
  component: HelpPopover,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HelpPopover>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HelpPopover> = args => (
  <HelpPopover {...args} />
)

export const HelpPopoverDemo = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelpPopoverDemo.args = {
  markdownText:
    'Help that supports _rendering_ basic **Markdown**. If a helpUrl is provided then a "More info" button will be available.',
  helpUrl: 'https://help.synapse.org/',
  placement: 'right',
}
`,locationsMap:{"help-popover-demo":{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"UI/HelpPopover",component:o,argTypes:{}},e=t=>r(o,{...t}),p=e.bind({});p.args={markdownText:'Help that supports _rendering_ basic **Markdown**. If a helpUrl is provided then a "More info" button will be available.',helpUrl:"https://help.synapse.org/",placement:"right"};const V=["HelpPopoverDemo"];export{p as HelpPopoverDemo,V as __namedExportsOrder,Q as default};
