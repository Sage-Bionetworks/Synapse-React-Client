import{F as e}from"./FullWidthAlert.9d4713f3.js";import{j as n}from"./jsx-runtime.cae1efce.js";import"./Alert.e36be6ab.js";import"./Button.7727704e.js";import"./hook.9b282447.js";import"./createWithBsPrefix.df7fa21f.js";import"./divWithClassName.5b633697.js";import"./index.3a565a91.js";import"./iframe.61f567f7.js";import"./index.35ce73ec.js";import"./Typography.334f7e13.js";import"./styled.893b6037.js";import"./Tooltip.017a66bf.js";import"./SvgIcon.d977b0c7.js";import"./useTheme.6ac8e7e3.js";import"./TransitionGroupContext.bc025aa2.js";const x={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"cookie-alert":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}},"download-list-package-creation":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}},"success-alert-with-primary-button-only":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"UI/FullWidthAlert",component:e,argTypes:{}},t=o=>n(e,{...o}),r=t.bind({});r.args={variant:"info",show:!0,title:"Our site uses cookies.",description:"This website uses cookies to enhance your experience and to analyze our traffic. Using this website means that you agree with our cookie policy.",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},secondaryButtonConfig:{text:"Learn More",tooltipText:"Opens a PDF",href:"https://s3.amazonaws.com/static.synapse.org/governance/SynapsePrivacyPolicy.pdf"},isGlobal:!0};const i=t.bind({});i.args={variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1};const s=t.bind({});s.args={variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0};const B=["CookieAlert","DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly"];export{r as CookieAlert,i as DownloadListPackageCreation,s as SuccessAlertWithPrimaryButtonOnly,B as __namedExportsOrder,x as default};
