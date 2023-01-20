import{R as t}from"./RejectDataAccessRequestModal.0c1c093a.js";import{g as r,m}from"./mockRejectionReasonsTableQueryResultBundle.26a1b362.js";import{M as p}from"./getEndpoint.f1f195f5.js";import{j as s}from"./jsx-runtime.32974a61.js";import"./IconSvg.13ae9a2f.js";import"./SvgIcon.85beeea7.js";import"./styled.d39d5dc5.js";import"./Tooltip.86d343dc.js";import"./useTheme.6433d807.js";import"./index.3765caa7.js";import"./iframe.1b774001.js";import"./TransitionGroupContext.a684d657.js";import"./index.ffb97e36.js";import"./SynapseConstants.aef18750.js";import"./Button.335f67c9.js";import"./FullWidthAlert.1407f383.js";import"./hook.b7735453.js";import"./createWithBsPrefix.9bd79cbf.js";import"./divWithClassName.5dac844d.js";import"./index.35ce73ec.js";import"./Typography.c2c9dd4b.js";import"./Fade.40b5902b.js";import"./isArray.c8bb4df8.js";import"./IconButton.adda85b8.js";import"./ButtonBase.38f61443.js";import"./emotion-react.browser.esm.34fe7ce7.js";import"./Link.7609fc67.js";import"./Button.a71922e0.js";import"./useDataAccessSubmission.742869fd.js";import"./useMutation.3e2306a1.js";import"./useInfiniteQuery.bfd93c41.js";import"./useGetQueryResultBundle.ba6bede4.js";import"./queryKeys.f96c2872.js";import"./immutable.es.28139da3.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./LoadingScreen.cff5abbc.js";import"./Modal.a001dbc2.js";import"./contains.bd6ce983.js";import"./inheritsLoose.3e2b8649.js";import"./usePrevious.ac877c6e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.8d2f766c.js";import"./ToastMessage.65ccc322.js";import"./uniqueId.74860187.js";import"./toString.77379481.js";import"./isSymbol.99aea655.js";import"./DialogContent.22f9465f.js";import"./Modal.4574b7b2.js";import"./Paper.b7c27da5.js";import"./Stack.13ec83a2.js";import"./Box.1f8f75c3.js";import"./FormLabel.8837b249.js";import"./isMuiElement.7c30c77d.js";import"./TextField.df0a130e.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.74411e15.js";import"./List.0c52588b.js";import"./index.276bc372.js";import"./inherits_browser.ba1547ee.js";import"./cloneDeep.a6dc1322.js";import"./_baseClone.91bfbf6a.js";import"./_Set.157e39ea.js";const ft={parameters:{storySource:{source:`import React from 'react'
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
