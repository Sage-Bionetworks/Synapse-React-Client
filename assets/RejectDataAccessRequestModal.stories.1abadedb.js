import{R as t}from"./RejectDataAccessRequestModal.c66f4653.js";import{g as r,m}from"./mockRejectionReasonsTableQueryResultBundle.57dcd981.js";import{M as p}from"./getEndpoint.f1f195f5.js";import{j as s}from"./jsx-runtime.a638b984.js";import"./IconSvg.9dec1c98.js";import"./SvgIcon.e74d0ad6.js";import"./styled.d7b43787.js";import"./Tooltip.9be437e1.js";import"./useTheme.207e8da2.js";import"./index.357ef824.js";import"./iframe.73217397.js";import"./TransitionGroupContext.f8911474.js";import"./index.b83134ec.js";import"./SynapseConstants.aef18750.js";import"./Button.9991ffcd.js";import"./FullWidthAlert.97efcbea.js";import"./hook.a59baafe.js";import"./createWithBsPrefix.86af4a28.js";import"./divWithClassName.979a7568.js";import"./index.35ce73ec.js";import"./Typography.1d6efe32.js";import"./Fade.cb073591.js";import"./isArray.dae1198f.js";import"./IconButton.7cd1b748.js";import"./ButtonBase.bc378f3c.js";import"./emotion-react.browser.esm.3d42de74.js";import"./Link.e9eeb2e9.js";import"./Button.666a2c38.js";import"./useDataAccessSubmission.96b594a8.js";import"./useMutation.20926710.js";import"./useInfiniteQuery.26e1390d.js";import"./useGetQueryResultBundle.625d0cdf.js";import"./queryKeys.f96c2872.js";import"./immutable.es.28139da3.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./LoadingScreen.aa28caa1.js";import"./Modal.b15b7fde.js";import"./contains.bb95d688.js";import"./inheritsLoose.239e8e0c.js";import"./usePrevious.cd07ee7a.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.1ade44a8.js";import"./ToastMessage.1f086d0d.js";import"./uniqueId.409eda17.js";import"./toString.42e4c32f.js";import"./isSymbol.0dd0ac71.js";import"./DialogContent.7066f2fe.js";import"./Modal.f8b95a2b.js";import"./Paper.90b8bc3b.js";import"./Stack.ea7c6c1e.js";import"./Box.b05d96cb.js";import"./FormLabel.3bba4ebc.js";import"./isMuiElement.352aba54.js";import"./TextField.ef885b7e.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.ae522529.js";import"./List.a4ec4e10.js";import"./index.766b85ba.js";import"./inherits_browser.11f3aeaf.js";import"./cloneDeep.862b3fc1.js";import"./_baseClone.fcfb79d0.js";import"./_Set.7dca34f2.js";const ft={parameters:{storySource:{source:`import React from 'react'
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
