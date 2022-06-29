import{F as o}from"./FullWidthAlert.a054f15b.js";import{j as n}from"./jsx-runtime.2e925369.js";import"./Typography.e08e7569.js";import"./index.f252d424.js";import"./makeStyles.5f6bad01.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./withStyles.4f64abe1.js";import"./toConsumableArray.5f669646.js";import"./index.es.82d55a6a.js";import"./index.06f4a415.js";import"./debounce.6a99f8f3.js";import"./isObject.7e2c8eb3.js";import"./toNumber.81238efb.js";import"./isSymbol.a6e5b306.js";import"./Alert.ad748791.js";import"./Fade.7bfbed49.js";import"./Transition.f54f11c8.js";import"./Button.77571428.js";import"./createWithBsPrefix.f7715523.js";import"./Clear.53a62cf5.js";import"./createSvgIcon.53013205.js";import"./SvgIcon.1f1b3522.js";var L={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FullWidthAlert from './FullWidthAlert'
import { displayToast } from './ToastMessage'

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
`,locationsMap:{"cookie-alert":{startLoc:{col:56,line:16},endLoc:{col:1,line:18},startBody:{col:56,line:16},endBody:{col:1,line:18}},"download-list-package-creation":{startLoc:{col:56,line:16},endLoc:{col:1,line:18},startBody:{col:56,line:16},endBody:{col:1,line:18}}}}},title:"UI/FullWidthAlert",component:o,argTypes:{}};const t=e=>n(o,{...e}),r=t.bind({});r.args={variant:"info",show:!0,title:"Our site uses cookies.",description:"This website uses cookies to enhance your experience and to analyze our traffic. Using this website means that you agree with our cookie policy.",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},secondaryButtonConfig:{text:"Learn More",tooltipText:"Opens a PDF",href:"https://s3.amazonaws.com/static.synapse.org/governance/SynapsePrivacyPolicy.pdf"},isGlobal:!0};const i=t.bind({});i.args={variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1};const M=["CookieAlert","DownloadListPackageCreation"];export{r as CookieAlert,i as DownloadListPackageCreation,M as __namedExportsOrder,L as default};
//# sourceMappingURL=FullWidthAlert.stories.049f7a6f.js.map
