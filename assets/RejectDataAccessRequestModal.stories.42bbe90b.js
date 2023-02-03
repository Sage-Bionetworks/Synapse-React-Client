import{R as t}from"./RejectDataAccessRequestModal.c5c589ec.js";import{g as r,m}from"./mockRejectionReasonsTableQueryResultBundle.d5f26fd1.js";import{M as p}from"./getEndpoint.f1f195f5.js";import{j as s}from"./jsx-runtime.6efef3f0.js";import"./IconSvg.a0ac0502.js";import"./SvgIcon.3e939805.js";import"./styled.3d34e36b.js";import"./Tooltip.9a185035.js";import"./useTheme.2b3579a1.js";import"./index.527b2819.js";import"./iframe.b3705b98.js";import"./TransitionGroupContext.962689fd.js";import"./index.f6f857f5.js";import"./SynapseConstants.aef18750.js";import"./Button.113b0f45.js";import"./FullWidthAlert.87654e2f.js";import"./hook.4287fc8d.js";import"./createWithBsPrefix.dc61fcfa.js";import"./divWithClassName.39d1e3e2.js";import"./index.35ce73ec.js";import"./Typography.a863760e.js";import"./Fade.ee3053ca.js";import"./isArray.ce0fc8e6.js";import"./IconButton.a32a330b.js";import"./ButtonBase.42d7166c.js";import"./emotion-react.browser.esm.89334e8c.js";import"./Link.f540f0ea.js";import"./Button.bcc1fc04.js";import"./useDataAccessSubmission.8f5de15c.js";import"./useMutation.905ce15d.js";import"./useInfiniteQuery.6ce8309d.js";import"./useGetQueryResultBundle.1228df4a.js";import"./queryKeys.f96c2872.js";import"./immutable.es.28139da3.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./LoadingScreen.ab408232.js";import"./Modal.db10ea3b.js";import"./contains.789c8f44.js";import"./inheritsLoose.0f44c725.js";import"./usePrevious.234e4743.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.265683e8.js";import"./ToastMessage.a9162853.js";import"./uniqueId.a881a904.js";import"./toString.931d2742.js";import"./isSymbol.7ee325a2.js";import"./DialogContent.77506dc8.js";import"./Modal.b3c768d7.js";import"./Paper.1215a022.js";import"./Stack.48d76736.js";import"./Box.1af24e1b.js";import"./FormLabel.d29c28ac.js";import"./isMuiElement.3cef142e.js";import"./TextField.4ead3254.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.a4fdb830.js";import"./List.643e5f14.js";import"./index.57bbd51d.js";import"./inherits_browser.432d22d0.js";import"./cloneDeep.53ea7f1e.js";import"./_baseClone.27a5ae2d.js";import"./_Set.6076d8f1.js";const ft={parameters:{storySource:{source:`import React from 'react'
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
