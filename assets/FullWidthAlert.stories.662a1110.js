import{F as e}from"./FullWidthAlert.4f5282fe.js";import{j as n}from"./jsx-runtime.02a28547.js";import"./Alert.3df3eb36.js";import"./Button.47e26dba.js";import"./createWithBsPrefix.c66fa874.js";import"./index.a309e2be.js";import"./iframe.0b294b31.js";import"./index.35ce73ec.js";import"./Typography.67a640f4.js";import"./styled.2f449268.js";import"./Tooltip.edd9e9f0.js";import"./createSvgIcon.d569702c.js";import"./TransitionGroupContext.70688128.js";import"./utils.34aadcdd.js";const A={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FullWidthAlert from './FullWidthAlert'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/FullWidthAlert',
  component: FullWidthAlert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FullWidthAlert>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FullWidthAlert> = args => (
  <FullWidthAlert {...args} />
)

export const CookieAlert = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CookieAlert.args = {
  variant: 'info',
  show: true,
  title: 'Our site uses cookies.',
  description:
    'This website uses cookies to enhance your experience and to analyze our traffic. Using this website means that you agree with our cookie policy.',
  primaryButtonConfig: {
    text: 'Accept and Continue',
    onClick: () => alert('Accepted'),
  },
  secondaryButtonConfig: {
    text: 'Learn More',
    tooltipText: 'Opens a PDF',
    href: 'https://s3.amazonaws.com/static.synapse.org/governance/SynapsePrivacyPolicy.pdf',
  },
  isGlobal: true,
}

export const DownloadListPackageCreation = Template.bind({})
DownloadListPackageCreation.args = {
  variant: 'success',
  show: true,
  title: 'Package has been downloaded',
  description:
    'The files contained in this zip file have been removed from your list.',
  isGlobal: false,
}

export const SuccessAlertWithPrimaryButtonOnly = Template.bind({})
SuccessAlertWithPrimaryButtonOnly.args = {
  variant: 'success',
  show: true,
  title: 'Success',
  description: 'Lorem ipsum dolor sit amet',
  primaryButtonConfig: {
    text: 'Accept and Continue',
    onClick: () => alert('Accepted'),
  },
  isGlobal: true,
  onClose: undefined,
}
`,locationsMap:{"cookie-alert":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}},"download-list-package-creation":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}},"success-alert-with-primary-button-only":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"UI/FullWidthAlert",component:e,argTypes:{}},t=o=>n(e,{...o}),r=t.bind({});r.args={variant:"info",show:!0,title:"Our site uses cookies.",description:"This website uses cookies to enhance your experience and to analyze our traffic. Using this website means that you agree with our cookie policy.",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},secondaryButtonConfig:{text:"Learn More",tooltipText:"Opens a PDF",href:"https://s3.amazonaws.com/static.synapse.org/governance/SynapsePrivacyPolicy.pdf"},isGlobal:!0};const i=t.bind({});i.args={variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1};const s=t.bind({});s.args={variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0};const w=["CookieAlert","DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly"];export{r as CookieAlert,i as DownloadListPackageCreation,s as SuccessAlertWithPrimaryButtonOnly,w as __namedExportsOrder,A as default};
