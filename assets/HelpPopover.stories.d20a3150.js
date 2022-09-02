import{H as o}from"./HelpPopover.4e93ab92.js";import{j as r}from"./jsx-runtime.00d70968.js";import"./MarkdownPopover.79d2267d.js";import"./usePopperMarginModifiers.1c4b2def.js";import"./withStyles.d6b2de44.js";import"./objectWithoutProperties.a0dea5ce.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./useWaitForDOMRef.d07b3a07.js";import"./FullWidthAlert.a73af62a.js";import"./Typography.9748340b.js";import"./index.57d09176.js";import"./makeStyles.2422b359.js";import"./Tooltip.02f85a09.js";import"./SvgIcon.5d5878ed.js";import"./slicedToArray.e9a7fa03.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.0ffd35ff.js";import"./MarkdownSynapse.3a3b4255.js";import"./index.f541c7c2.js";import"./assert.a0977670.js";import"./iframe.66e5fae0.js";import"./getEndpoint.bb7ded34.js";import"./UserCard.49ff3395.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.52fb58fe.js";import"./times.396ab5b7.js";import"./toInteger.80c96920.js";import"./Skeleton.88496afb.js";import"./IconSvg.45071707.js";import"./InfoOutlined.303a7ed9.js";import"./Overlay.3297046e.js";import"./factory.b4f5cce1.js";import"./sqlFunctions.b49ac766.js";import"./SynapseVideo.0322011a.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.4eea88a2.js";import"./moment.a565bb48.js";const K={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"help-popover-demo":{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"UI/HelpPopover",component:o,argTypes:{}},e=t=>r(o,{...t}),p=e.bind({});p.args={markdownText:'Help that supports _rendering_ basic **Markdown**. If a helpUrl is provided then a "More info" button will be available.',helpUrl:"https://help.synapse.org/",placement:"right"};const N=["HelpPopoverDemo"];export{p as HelpPopoverDemo,N as __namedExportsOrder,K as default};
