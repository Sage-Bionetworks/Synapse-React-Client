import{R as t}from"./RejectDataAccessRequestModal.acaa5691.js";import{g as r,m}from"./mockRejectionReasonsTableQueryResultBundle.72d41b60.js";import{M as p}from"./getEndpoint.f1f195f5.js";import{j as s}from"./jsx-runtime.590681cd.js";import"./IconSvg.88997e16.js";import"./SvgIcon.01f2428a.js";import"./styled.1c864c13.js";import"./Tooltip.0f7aeb46.js";import"./useTheme.fa81c060.js";import"./index.220fbbb9.js";import"./iframe.d3c6f1d5.js";import"./TransitionGroupContext.e7de7ea1.js";import"./index.bb7b660b.js";import"./SynapseConstants.aef18750.js";import"./Button.d3c811d3.js";import"./FullWidthAlert.8cff24d3.js";import"./hook.5f699942.js";import"./createWithBsPrefix.4b46c4d7.js";import"./divWithClassName.638b701c.js";import"./index.35ce73ec.js";import"./Typography.62f204bb.js";import"./Fade.dfa4b9be.js";import"./isArray.b759bc77.js";import"./IconButton.7622d68d.js";import"./ButtonBase.c831f7af.js";import"./emotion-react.browser.esm.a07d05d9.js";import"./Link.3f8a0a55.js";import"./Button.6aee65d4.js";import"./useDataAccessSubmission.86c7a7eb.js";import"./useMutation.fbb1c8e7.js";import"./useInfiniteQuery.582193b6.js";import"./useGetQueryResultBundle.42b5d08f.js";import"./queryKeys.f96c2872.js";import"./immutable.es.28139da3.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./LoadingScreen.8ce9c0f0.js";import"./Modal.4704072e.js";import"./contains.5e789a3e.js";import"./inheritsLoose.16461593.js";import"./usePrevious.a5299ce0.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.1c0cdf8b.js";import"./ToastMessage.06f6548f.js";import"./uniqueId.ac4a52ef.js";import"./toString.e4762266.js";import"./isSymbol.acb677d8.js";import"./DialogContent.fe5141da.js";import"./Modal.32fd4057.js";import"./Paper.8b769746.js";import"./Stack.030a5c0c.js";import"./Box.d618e564.js";import"./FormLabel.a1d88a2d.js";import"./isMuiElement.ed383d92.js";import"./TextField.37cd6126.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.6689b856.js";import"./List.a5cb3c90.js";import"./index.232577d7.js";import"./inherits_browser.5ef2ae5f.js";import"./cloneDeep.399b0d62.js";import"./_baseClone.5541a1cb.js";import"./_Set.13ddd322.js";const ft={parameters:{storySource:{source:`import React from 'react'
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
