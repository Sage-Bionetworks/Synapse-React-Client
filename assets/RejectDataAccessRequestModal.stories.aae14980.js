import{R as t}from"./RejectDataAccessRequestModal.0019d002.js";import{g as r,m}from"./mockRejectionReasonsTableQueryResultBundle.0a7d64ba.js";import{M as p}from"./getEndpoint.f1f195f5.js";import{j as s}from"./jsx-runtime.b9dbe3f2.js";import"./IconSvg.e161b9ac.js";import"./SvgIcon.07fafc9f.js";import"./styled.b8523d56.js";import"./Tooltip.48a3285f.js";import"./useTheme.0510b97a.js";import"./index.1d295946.js";import"./iframe.daa7e99b.js";import"./TransitionGroupContext.550f3593.js";import"./index.5da0c2fe.js";import"./SynapseConstants.aef18750.js";import"./Button.5e8fef04.js";import"./FullWidthAlert.4c795642.js";import"./hook.8a461b2d.js";import"./createWithBsPrefix.e49426e0.js";import"./divWithClassName.39a68f1e.js";import"./index.35ce73ec.js";import"./Typography.67fe2a50.js";import"./Fade.79c18b91.js";import"./isArray.cd664950.js";import"./IconButton.92911f6e.js";import"./ButtonBase.a93e0872.js";import"./emotion-react.browser.esm.c079a2eb.js";import"./Link.da3e8d7d.js";import"./Button.7c5736c7.js";import"./useDataAccessSubmission.496eff5f.js";import"./useMutation.17976629.js";import"./useInfiniteQuery.d3f40dc1.js";import"./useGetQueryResultBundle.c6cba393.js";import"./queryKeys.f96c2872.js";import"./immutable.es.28139da3.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./LoadingScreen.a4b87421.js";import"./Modal.d5b47340.js";import"./contains.c92a1cab.js";import"./inheritsLoose.68af5c28.js";import"./usePrevious.3e9a9e11.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.a0e6e40c.js";import"./ToastMessage.3861395a.js";import"./uniqueId.dbc9074b.js";import"./toString.e4b44ed1.js";import"./isSymbol.0dd8f9e4.js";import"./DialogContent.f37a4ae0.js";import"./Modal.a1ffcc13.js";import"./Paper.d3f81af6.js";import"./Stack.649a669e.js";import"./Box.d2dea44e.js";import"./FormLabel.23106569.js";import"./isMuiElement.b516b39b.js";import"./TextField.bdda78a4.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.dfc5e6d3.js";import"./List.49329722.js";import"./index.1d65f2f1.js";import"./inherits_browser.68f36edf.js";import"./cloneDeep.18f0269c.js";import"./_baseClone.ef57de12.js";import"./_Set.469d2b08.js";const ft={parameters:{storySource:{source:`import React from 'react'
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
