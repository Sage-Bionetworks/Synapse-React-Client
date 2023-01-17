import{R as t}from"./RejectDataAccessRequestModal.d9504e38.js";import{g as r,m}from"./mockRejectionReasonsTableQueryResultBundle.f3bbc31c.js";import{M as p}from"./getEndpoint.f1f195f5.js";import{j as s}from"./jsx-runtime.d6be66a9.js";import"./IconSvg.67904b39.js";import"./SvgIcon.b9658c5d.js";import"./styled.f07e33c6.js";import"./Tooltip.c89a275a.js";import"./useTheme.0cbb662e.js";import"./index.3b7d1b21.js";import"./iframe.78dc3b5d.js";import"./TransitionGroupContext.27368eb3.js";import"./index.b3fc12c1.js";import"./SynapseConstants.aef18750.js";import"./Button.58f5aaec.js";import"./FullWidthAlert.0962330c.js";import"./hook.0245101a.js";import"./createWithBsPrefix.139b0869.js";import"./divWithClassName.f4023709.js";import"./index.35ce73ec.js";import"./Typography.079c4f38.js";import"./Fade.c734522e.js";import"./isArray.3ed41029.js";import"./IconButton.3b892d3a.js";import"./ButtonBase.250c511d.js";import"./emotion-react.browser.esm.8203c469.js";import"./Link.7f48e2dc.js";import"./Button.bef5272a.js";import"./useDataAccessSubmission.0792bcf4.js";import"./useMutation.4d42a75f.js";import"./useInfiniteQuery.153ac882.js";import"./useGetQueryResultBundle.0449041a.js";import"./queryKeys.f96c2872.js";import"./immutable.es.28139da3.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./LoadingScreen.08c127bb.js";import"./Modal.44d2ca28.js";import"./contains.ac446ee4.js";import"./inheritsLoose.a22fc619.js";import"./usePrevious.263ac407.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.8bdf7b9b.js";import"./ToastMessage.1551e33e.js";import"./uniqueId.1755aefe.js";import"./toString.62a6def8.js";import"./isSymbol.eb29c468.js";import"./DialogContent.ae419846.js";import"./Modal.5e05ec5b.js";import"./Paper.57bfbc43.js";import"./Stack.934cd3bf.js";import"./Box.4987088c.js";import"./FormLabel.45d21d04.js";import"./isMuiElement.c70160d0.js";import"./TextField.c7b861c1.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.58fb38a5.js";import"./List.ea77900f.js";import"./index.3439ac6f.js";import"./inherits_browser.17813e51.js";import"./cloneDeep.dc50f27a.js";import"./_baseClone.ecc77bcc.js";import"./_Set.a2615e3e.js";const ft={parameters:{storySource:{source:`import React from 'react'
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
