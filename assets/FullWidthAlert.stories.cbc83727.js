import{F as e}from"./FullWidthAlert.771b5ce8.js";import{j as n}from"./jsx-runtime.6cb91464.js";import"./Alert.f130f9d6.js";import"./Button.719dc857.js";import"./createWithBsPrefix.c2eb45fa.js";import"./index.13becb40.js";import"./iframe.77de7a8b.js";import"./index.35ce73ec.js";import"./Typography.c072ef4f.js";import"./styled.9d49d23e.js";import"./Tooltip.9b073f35.js";import"./createSvgIcon.c493b6c9.js";import"./SvgIcon.7bbcd48d.js";import"./utils.11d89a6f.js";const A={parameters:{storySource:{source:`import React from 'react'
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
