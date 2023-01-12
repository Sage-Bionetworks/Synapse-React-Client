import{R as t}from"./RejectDataAccessRequestModal.403f01a6.js";import{g as r,m}from"./mockRejectionReasonsTableQueryResultBundle.6006b743.js";import{M as p}from"./getEndpoint.f1f195f5.js";import{j as s}from"./jsx-runtime.30b0b063.js";import"./IconSvg.9b38face.js";import"./SvgIcon.a1d78dff.js";import"./styled.4350a8f3.js";import"./Tooltip.f326ea8a.js";import"./useTheme.bbb702a0.js";import"./index.a3b83451.js";import"./iframe.7f20f630.js";import"./TransitionGroupContext.4dd5d6a9.js";import"./index.004e53d6.js";import"./SynapseConstants.aef18750.js";import"./Button.4f0daaa4.js";import"./FullWidthAlert.12957b45.js";import"./hook.82358120.js";import"./createWithBsPrefix.67525ed1.js";import"./divWithClassName.fc6b9e1a.js";import"./index.35ce73ec.js";import"./Typography.e0f3806f.js";import"./Fade.13693e7f.js";import"./isArray.1ceec0fc.js";import"./IconButton.32d1d9ea.js";import"./ButtonBase.32a6d369.js";import"./emotion-react.browser.esm.f592d4ba.js";import"./Link.671fdc30.js";import"./Button.9f139960.js";import"./useDataAccessSubmission.f542be94.js";import"./useMutation.8683269e.js";import"./useInfiniteQuery.26f32ba1.js";import"./useGetQueryResultBundle.eca6bae5.js";import"./queryKeys.f96c2872.js";import"./immutable.es.28139da3.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./LoadingScreen.667d64ee.js";import"./Modal.4b6f87a4.js";import"./contains.4aff3092.js";import"./inheritsLoose.acddc658.js";import"./usePrevious.407c8514.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.0fac0f63.js";import"./ToastMessage.0ad637d7.js";import"./uniqueId.11b542f1.js";import"./toString.0784e7f5.js";import"./isSymbol.a68e106b.js";import"./DialogContent.b8fd3391.js";import"./Modal.b6ac406d.js";import"./Paper.4952611a.js";import"./Stack.e4c8fa9b.js";import"./Box.1e407091.js";import"./FormLabel.5e5cadaa.js";import"./isMuiElement.a0d4a619.js";import"./TextField.c6b6b06c.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.67812265.js";import"./List.60509602.js";import"./index.64232678.js";import"./inherits_browser.faaa32a1.js";import"./cloneDeep.0550986a.js";import"./_baseClone.0658ca9d.js";import"./_Set.24e6e8e7.js";const ft={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import RejectDataAccessRequestModal from './RejectDataAccessRequestModal'
import { getHandlersForTableQuery } from '../../../mocks/msw/handlers/tableQueryHandlers'
import mockRejectionReasonsTableQueryResultBundle from '../../../mocks/query/mockRejectionReasonsTableQueryResultBundle'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'

export default {
  title: 'Governance/RejectDataAccessRequestModal',
  component: RejectDataAccessRequestModal,
  argTypes: {},
} as ComponentMeta<typeof RejectDataAccessRequestModal>

const Template: ComponentStory<typeof RejectDataAccessRequestModal> = args => (
  <RejectDataAccessRequestModal {...args} />
)

export const Demo = Template.bind({})
Demo.parameters = {
  msw: {
    handlers: [
      ...getHandlersForTableQuery(
        mockRejectionReasonsTableQueryResultBundle,
        MOCK_REPO_ORIGIN,
      ),
    ],
  },
}
Demo.args = { open: true, tableId: 'syn50683097' }
`,locationsMap:{demo:{startLoc:{col:70,line:14},endLoc:{col:1,line:16},startBody:{col:70,line:14},endBody:{col:1,line:16}}}}},title:"Governance/RejectDataAccessRequestModal",component:t,argTypes:{}},i=e=>s(t,{...e}),o=i.bind({});o.parameters={msw:{handlers:[...r(m,p)]}};o.args={open:!0,tableId:"syn50683097"};const Dt=["Demo"];export{o as Demo,Dt as __namedExportsOrder,ft as default};
