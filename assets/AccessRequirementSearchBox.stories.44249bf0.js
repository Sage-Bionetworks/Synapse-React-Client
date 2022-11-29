import{A as o}from"./AccessRequirementSearchBox.cd0cec41.js";import{d as t}from"./ToastMessage.679431d9.js";import{j as r}from"./jsx-runtime.25f1da80.js";import"./Select-54ac8379.esm.d9aea084.js";import"./emotion-react.browser.esm.de1a23fd.js";import"./styled.61c2cdbd.js";import"./index.09872124.js";import"./iframe.89c4ca26.js";import"./index.69555c85.js";import"./SynapseConstants.290eab74.js";import"./Button.03ce126b.js";import"./utils.653016b9.js";import"./TransitionGroupContext.d4abce3c.js";import"./useTheme.50dbca56.js";import"./Alert.c8ecdb26.js";import"./hook.865145d2.js";import"./createWithBsPrefix.2ba1d399.js";import"./divWithClassName.8bbfe55a.js";import"./index.35ce73ec.js";import"./Fade.5af2af2d.js";import"./isArray.63a07037.js";import"./getEndpoint.bb7ded34.js";import"./Link.7320b292.js";import"./Typography.787f3df0.js";import"./Button.71735648.js";import"./ButtonBase.e51b431c.js";import"./useGetAccessRequirement.c9c5858b.js";import"./useInfiniteQuery.a1c7197d.js";import"./Skeleton.264ae24e.js";import"./FullWidthAlert.ce239055.js";import"./Tooltip.dc683be6.js";import"./createSvgIcon.32db2a88.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b035a11c.js";import"./isSymbol.8bb90a01.js";const J={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"access-requirement-search-box-demo":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}}}}},title:"Synapse/Governance/AccessRequirementSearchBox",component:o,argTypes:{}},n=e=>r(o,{...e}),s=n.bind({});s.args={onChange:e=>{t("Selected id: "+e,"info")}};const K=["AccessRequirementSearchBoxDemo"];export{s as AccessRequirementSearchBoxDemo,K as __namedExportsOrder,J as default};
