import{A as o}from"./AccessRequirementSearchBox.7160ef87.js";import{d as t}from"./ToastMessage.32c452c3.js";import{j as r}from"./jsx-runtime.254b3176.js";import"./Select-54ac8379.esm.8e1eb034.js";import"./emotion-react.browser.esm.2f156512.js";import"./styled.0b0d8b8c.js";import"./index.0a919fcb.js";import"./iframe.75dade87.js";import"./index.fd010cb7.js";import"./SynapseConstants.4792b5b5.js";import"./Button.87a6ff9f.js";import"./Tooltip.8deb04e4.js";import"./SvgIcon.3abc547b.js";import"./useTheme.c977df4e.js";import"./TransitionGroupContext.8e2c28aa.js";import"./Alert.a3cded27.js";import"./hook.f1fe8c77.js";import"./createWithBsPrefix.df6e431b.js";import"./divWithClassName.7005b84b.js";import"./index.35ce73ec.js";import"./Fade.feae1643.js";import"./isArray.f97a9bbd.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.f20d6379.js";import"./IconButton.903dfe6a.js";import"./ButtonBase.373062e6.js";import"./Link.a0ec5041.js";import"./Typography.770de0a7.js";import"./Button.1f777938.js";import"./useAccessRequirements.f0d1a9da.js";import"./useMutation.fc3c8459.js";import"./useInfiniteQuery.c7bd3506.js";import"./queryKeys.e0d3085f.js";import"./Skeleton.01da34f7.js";import"./FullWidthAlert.3a145ad4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.45db3035.js";import"./isSymbol.26d1d746.js";const P={parameters:{storySource:{source:`import React from 'react'
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
