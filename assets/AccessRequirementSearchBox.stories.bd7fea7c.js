import{A as o}from"./AccessRequirementSearchBox.f4e89bf1.js";import{d as t}from"./ToastMessage.0277286d.js";import{j as r}from"./jsx-runtime.43a8fcf9.js";import"./Select-54ac8379.esm.9614dc94.js";import"./emotion-react.browser.esm.4fa41df1.js";import"./styled.76b26431.js";import"./index.91cff701.js";import"./iframe.f725ca92.js";import"./index.05d3527e.js";import"./SynapseConstants.4792b5b5.js";import"./Button.1bf4e27e.js";import"./Tooltip.9e1c2716.js";import"./SvgIcon.6442358d.js";import"./useTheme.af9f301b.js";import"./TransitionGroupContext.b91ad5da.js";import"./Alert.52cd8abc.js";import"./hook.21b06627.js";import"./createWithBsPrefix.5369d369.js";import"./divWithClassName.ce1df20c.js";import"./index.35ce73ec.js";import"./Fade.b7951dc7.js";import"./isArray.ef4abd22.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.710ae2ef.js";import"./IconButton.f195eccf.js";import"./ButtonBase.48ba7e09.js";import"./Link.fae97ed4.js";import"./Typography.1c91c940.js";import"./Button.c355b500.js";import"./useAccessRequirements.6431b8c3.js";import"./useMutation.ee241b25.js";import"./useInfiniteQuery.059ba1ba.js";import"./queryKeys.e0d3085f.js";import"./Skeleton.2b718cf1.js";import"./FullWidthAlert.f72a4ef7.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.5ab1be4f.js";import"./isSymbol.9cf935a3.js";const P={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AccessRequirementSearchBox from './AccessRequirementSearchBox'
import { displayToast } from '../ToastMessage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/Governance/AccessRequirementSearchBox',
  component: AccessRequirementSearchBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AccessRequirementSearchBox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AccessRequirementSearchBox> = args => (
  <AccessRequirementSearchBox {...args} />
)

export const AccessRequirementSearchBoxDemo = Template.bind({})
AccessRequirementSearchBoxDemo.args = {
  onChange: id => {
    displayToast('Selected id: ' + id, 'info')
  },
}
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const Q=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,Q as __namedExportsOrder,P as default};
