import{R as t}from"./RejectDataAccessRequestModal.0ba0e21b.js";import{g as r,m}from"./mockRejectionReasonsTableQueryResultBundle.c0568ab4.js";import{M as p}from"./getEndpoint.f1f195f5.js";import{j as s}from"./jsx-runtime.2345241f.js";import"./IconSvg.c0ad7b85.js";import"./SvgIcon.c3dd5893.js";import"./styled.8a79803b.js";import"./Tooltip.c4c31d9f.js";import"./useTheme.7300f82e.js";import"./index.5a7af4ba.js";import"./iframe.b6c45fd3.js";import"./TransitionGroupContext.ce30fb83.js";import"./index.3aece391.js";import"./SynapseConstants.aef18750.js";import"./Button.dd9fc4ec.js";import"./FullWidthAlert.f758387e.js";import"./hook.40948bbb.js";import"./createWithBsPrefix.767a2de5.js";import"./divWithClassName.ada2c499.js";import"./index.35ce73ec.js";import"./Typography.5428f494.js";import"./Fade.544d2c09.js";import"./isArray.594b9061.js";import"./IconButton.479fa89c.js";import"./ButtonBase.37e9a56e.js";import"./emotion-react.browser.esm.782cdb58.js";import"./Link.10558e7e.js";import"./Button.2a6d5e68.js";import"./useDataAccessSubmission.bc4fdfca.js";import"./useMutation.1f6b4381.js";import"./useInfiniteQuery.9f720242.js";import"./useGetQueryResultBundle.fd8402b4.js";import"./queryKeys.f96c2872.js";import"./immutable.es.28139da3.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./LoadingScreen.2eed530c.js";import"./Modal.d74fe065.js";import"./contains.ca3b169c.js";import"./inheritsLoose.13574b27.js";import"./usePrevious.87cbdf7d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.6e025e2e.js";import"./ToastMessage.67e8dd8b.js";import"./uniqueId.15511b65.js";import"./toString.f6d778fc.js";import"./isSymbol.f2edf3f1.js";import"./DialogContent.29337826.js";import"./Modal.0b57f2d9.js";import"./Paper.c9daf98b.js";import"./Stack.1efdcace.js";import"./Box.0cdad8af.js";import"./FormLabel.8d2406da.js";import"./isMuiElement.ac3b4312.js";import"./TextField.e1255d02.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.d35dcc5e.js";import"./List.18fae4ee.js";import"./index.a6ad674f.js";import"./inherits_browser.c7781f14.js";import"./cloneDeep.4edbf6d2.js";import"./_baseClone.917156e4.js";import"./_Set.9e8317f4.js";const ft={parameters:{storySource:{source:`import React from 'react'
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
