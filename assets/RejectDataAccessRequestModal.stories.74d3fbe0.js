import{R as t}from"./RejectDataAccessRequestModal.b503ba54.js";import{g as r,m}from"./mockRejectionReasonsTableQueryResultBundle.4f20b617.js";import{M as p}from"./getEndpoint.f1f195f5.js";import{j as s}from"./jsx-runtime.732db4fa.js";import"./IconSvg.f8a92c9e.js";import"./SvgIcon.883206f0.js";import"./styled.7d1b1387.js";import"./Tooltip.b3eb933e.js";import"./useTheme.23d779b8.js";import"./index.f08547e5.js";import"./iframe.309bdcd0.js";import"./TransitionGroupContext.25f1619e.js";import"./index.6ade810e.js";import"./SynapseConstants.aef18750.js";import"./Button.14842d9b.js";import"./FullWidthAlert.b4689dd3.js";import"./hook.7d829a86.js";import"./createWithBsPrefix.e55f4707.js";import"./divWithClassName.0d41da1a.js";import"./index.35ce73ec.js";import"./Typography.52fcc329.js";import"./Fade.a9768a9d.js";import"./isArray.ab714070.js";import"./IconButton.4e309ec1.js";import"./ButtonBase.caa5bbee.js";import"./emotion-react.browser.esm.4ae44601.js";import"./Link.04b76f3f.js";import"./Button.2b5fc967.js";import"./useDataAccessSubmission.934d3f38.js";import"./useMutation.ba47f1f7.js";import"./useInfiniteQuery.bc11444b.js";import"./useGetQueryResultBundle.04254d85.js";import"./queryKeys.f96c2872.js";import"./immutable.es.28139da3.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./LoadingScreen.33c72bbe.js";import"./Modal.4f0d6f21.js";import"./contains.d723cb84.js";import"./inheritsLoose.7bb86332.js";import"./usePrevious.90faff06.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.08d8bdbd.js";import"./ToastMessage.ca9da849.js";import"./uniqueId.68f55a89.js";import"./toString.083d15f6.js";import"./isSymbol.3aa759ff.js";import"./DialogContent.64edeb3c.js";import"./Modal.5a727a4f.js";import"./Paper.a90a575e.js";import"./Stack.5a0cac3c.js";import"./Box.ff30b46b.js";import"./FormLabel.0bcd6371.js";import"./isMuiElement.68ee6da9.js";import"./TextField.4dcacf54.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.c4065c1d.js";import"./List.e830a7b6.js";import"./index.93e8746a.js";import"./inherits_browser.ece359ec.js";import"./cloneDeep.20d4205c.js";import"./_baseClone.99830f2a.js";import"./_Set.592281c9.js";const ft={parameters:{storySource:{source:`import React from 'react'
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
