import{H as o}from"./HelpPopover.192fce4a.js";import{j as r}from"./jsx-runtime.00d70968.js";import"./MarkdownPopover.6da29553.js";import"./usePopperMarginModifiers.fba68454.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./useWaitForDOMRef.97759fd7.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Button.fda23eee.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./hasClass.56fd144a.js";import"./MarkdownSynapse.ac892534.js";import"./index.edede199.js";import"./toString.d84aaeca.js";import"./assert.ccac0074.js";import"./iframe.91fe6dc0.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e37b9412.js";import"./UserCard.abb73b30.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.0ec45aaf.js";import"./times.398d9368.js";import"./toInteger.e9173c29.js";import"./Skeleton.99b24529.js";import"./Tooltip.b1e63f93.js";import"./createSvgIcon.99e72c0f.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./makeStyles.45e8b79c.js";import"./IconSvg.7fcfdfd8.js";import"./InfoOutlined.60e019a4.js";import"./ToastMessage.00694747.js";import"./FullWidthAlert.c5a09425.js";import"./Typography.35a81ae4.js";import"./removeClass.27874bcb.js";import"./uniqueId.eba72690.js";import"./Overlay.66930c7c.js";import"./factory.2d5ac1f5.js";import"./sqlFunctions.b49ac766.js";import"./SynapseVideo.3475e146.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.b4c818ca.js";import"./moment.a565bb48.js";import"./index.881f6844.js";import"./index.8d87c780.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";const to={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"help-popover-demo":{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"UI/HelpPopover",component:o,argTypes:{}},p=t=>r(o,{...t}),e=p.bind({});e.args={markdownText:'Help that supports _rendering_ basic **Markdown**. If a helpUrl is provided then a "More info" button will be available.',helpUrl:"https://help.synapse.org/",placement:"right"};const ro=["HelpPopoverDemo"];export{e as HelpPopoverDemo,ro as __namedExportsOrder,to as default};
