import{A as e}from"./AccessRequirementSearchBox.4a996715.js";import{d as t}from"./ToastMessage.1f086d0d.js";import{j as r}from"./jsx-runtime.a638b984.js";import"./Select-54ac8379.esm.6fca8758.js";import"./emotion-react.browser.esm.3d42de74.js";import"./styled.d7b43787.js";import"./index.357ef824.js";import"./iframe.73217397.js";import"./index.b83134ec.js";import"./SynapseConstants.aef18750.js";import"./Button.9991ffcd.js";import"./Tooltip.9be437e1.js";import"./SvgIcon.e74d0ad6.js";import"./useTheme.207e8da2.js";import"./TransitionGroupContext.f8911474.js";import"./FullWidthAlert.97efcbea.js";import"./hook.a59baafe.js";import"./createWithBsPrefix.86af4a28.js";import"./divWithClassName.979a7568.js";import"./index.35ce73ec.js";import"./Typography.1d6efe32.js";import"./Fade.cb073591.js";import"./isArray.dae1198f.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.9dec1c98.js";import"./IconButton.7cd1b748.js";import"./ButtonBase.bc378f3c.js";import"./Link.e9eeb2e9.js";import"./Button.666a2c38.js";import"./useAccessRequirements.48298cfd.js";import"./useMutation.20926710.js";import"./useInfiniteQuery.26e1390d.js";import"./queryKeys.f96c2872.js";import"./Skeleton.9bd91a4d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.409eda17.js";import"./toString.42e4c32f.js";import"./isSymbol.0dd0ac71.js";const P={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AccessRequirementSearchBox from './AccessRequirementSearchBox'
import { displayToast } from '../ToastMessage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Governance/AccessRequirementSearchBox',
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Governance/AccessRequirementSearchBox",component:e,argTypes:{}},n=o=>r(e,{...o}),i=n.bind({});i.args={onChange:o=>{t("Selected id: "+o,"info")}};const Q=["AccessRequirementSearchBoxDemo"];export{i as AccessRequirementSearchBoxDemo,Q as __namedExportsOrder,P as default};
