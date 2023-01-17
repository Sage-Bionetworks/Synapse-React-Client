import{A as _,a as I}from"./AccessRequirementList.81b763e8.js";import{a as o}from"./index.93e8746a.js";import{M as r}from"./getEndpoint.f1f195f5.js";import{V as y,W as O,X as M,Y as f,Z as k,_ as P,$ as h,a0 as x,S as U,a1 as N,a2 as H}from"./index.6ade810e.js";import{l as c,n as S,M as A,m as E}from"./mockAccessRequirements.94f9a6a4.js";import{g as u,m as d}from"./handlers.e4bd4cc2.js";import{S as $}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{j as p,a as b}from"./jsx-runtime.732db4fa.js";import"./useGetInfoFromIds.cff80146.js";import"./use-deep-compare-effect.esm.629c5c42.js";import"./uniq.4b39b2c8.js";import"./_baseSlice.50189bc5.js";import"./toInteger.e9616708.js";import"./isSymbol.3aa759ff.js";import"./isArray.ab714070.js";import"./Button.14842d9b.js";import"./index.35ce73ec.js";import"./_cacheHas.e143a942.js";import"./without.2d4a20d2.js";import"./toString.083d15f6.js";import"./_Set.592281c9.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.aef18750.js";import"./IconSvg.f8a92c9e.js";import"./SvgIcon.883206f0.js";import"./styled.7d1b1387.js";import"./Tooltip.b3eb933e.js";import"./useTheme.23d779b8.js";import"./index.f08547e5.js";import"./iframe.309bdcd0.js";import"./TransitionGroupContext.25f1619e.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.33c72bbe.js";import"./Modal.4f0d6f21.js";import"./createWithBsPrefix.e55f4707.js";import"./contains.d723cb84.js";import"./inheritsLoose.7bb86332.js";import"./divWithClassName.0d41da1a.js";import"./usePrevious.90faff06.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.08d8bdbd.js";import"./Typography.52fcc329.js";import"./emotion-react.browser.esm.4ae44601.js";import"./UserCard.5dc8ad35.js";import"./IconCopy.8fbe8f6c.js";import"./SkeletonTable.cff03cd3.js";import"./times.37016f17.js";import"./Skeleton.00a5a513.js";import"./ToastMessage.ca9da849.js";import"./FullWidthAlert.b4689dd3.js";import"./hook.7d829a86.js";import"./uniqueId.68f55a89.js";import"./Overlay.c9c798f2.js";import"./usePopperMarginModifiers.7728e467.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.1a638807.js";import"./useInfiniteQuery.bc11444b.js";import"./DateFormatter.98d76ad0.js";import"./dayjs.min.0ad62631.js";import"./utc.36b0c74c.js";import"./EntityIcon.e00edf1c.js";import"./core.esm.62da8fa1.js";import"./pick.059515ca.js";import"./_baseClone.99830f2a.js";import"./isEmpty.6e4b20fe.js";import"./isEqual.60e31e78.js";import"./index.browser.1426cdde.js";import"./union.cd76b5cb.js";import"./CustomSelectWidget.de8d3d0a.js";import"./Select-54ac8379.esm.9fd4da62.js";import"./isString.0a68f6ae.js";import"./Button.2b5fc967.js";import"./ButtonBase.caa5bbee.js";import"./factory.4e484438.js";import"./sqlFunctions.fb8b0140.js";import"./QueryFilter.776eed93.js";import"./useEntity.84240992.js";import"./useMutation.ba47f1f7.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.158b67aa.js";import"./queryUtils.752d1e6f.js";import"./cloneDeep.20d4205c.js";import"./NoSearchResults.61aade90.js";import"./NoData.f4f8ad10.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./useGetQueryResultBundle.04254d85.js";import"./ElementWithTooltip.65064a09.js";import"./Dropdown.77cad14f.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.c545cc03.js";import"./RadioGroup.12a07e83.js";import"./RangeSlider.e6b14cf1.js";import"./react-sizeme.1de254a4.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.98801b8b.js";import"./Close.b8c3677a.js";import"./relativeTime.7988bd7a.js";import"./useDownloadList.9ca9a463.js";import"./QueryCount.02b64b89.js";import"./react-select.esm.76f05765.js";import"./IconList.abb797f2.js";import"./UserCardList.615341b8.js";import"./useAccessRequirements.53cc195c.js";import"./RestrictionInformation.edfbac5a.js";import"./FileUpload.09f14730.js";import"./UserSearchBox.04090696.js";import"./UserOrTeamBadge.294b1b2d.js";import"./EntityLink.a579d43a.js";import"./ErrorChip.37f500a9.js";import"./SynapseVideo.70c89d2b.js";import"./inherits_browser.ece359ec.js";import"./Fade.a9768a9d.js";import"./IconButton.4e309ec1.js";import"./Link.04b76f3f.js";import"./UploadDestination.dcbd5975.js";const Vt={parameters:{storySource:{source:`import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import AccessRequirementList from './AccessRequirementList'
import { rest } from 'msw'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import {
  ACCESS_APPROVAL,
  ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE,
  ACCESS_REQUIREMENT_RESEARCH_PROJECT_FOR_UPDATE,
  ACCESS_REQUIREMENT_STATUS,
  DATA_ACCESS_REQUEST,
  DATA_ACCESS_REQUEST_SUBMISSION,
  ENTITY_ACCESS_REQUIREMENTS,
  FILE_HANDLE_BATCH,
  RESEARCH_PROJECT,
} from '../../utils/APIConstants'
import {
  mockManagedACTAccessRequirement,
  mockSelfSignAccessRequirement,
} from '../../../mocks/mockAccessRequirements'
import mockFileEntity from '../../../mocks/entity/mockFileEntity'
import { getHandlers } from '../../../mocks/msw/handlers'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
} from '../../utils/SynapseContext'
import {
  AccessApproval,
  AccessRequirement,
  AccessRequirementStatus,
  ApprovalState,
  BatchFileResult,
  PaginatedResults,
  RequestInterface,
  SubmissionState,
} from '../../utils/synapseTypes'
import { MOCK_USER_ID } from '../../../mocks/user/mock_user_profile'
import { ResearchProject } from '../../utils/synapseTypes/ResearchProject'
import { mockFileHandle } from '../../../mocks/mock_file_handle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Governance/AccessRequirementList',
  component: AccessRequirementList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof AccessRequirementList>

const Template: ComponentStory<typeof AccessRequirementList> = args => (
  <SynapseContextConsumer>
    {context => (
      <SynapseContextProvider
        synapseContext={{
          ...context,
          accessToken: args.isAuthenticated
            ? context.accessToken || 'fake token'
            : undefined,
        }}
      >
        <p>
          First, use the StackChanger component to switch to the Mocked Data
          stack
        </p>

        <AccessRequirementList {...args} />
      </SynapseContextProvider>
    )}
  </SynapseContextConsumer>
)

type AccessRequirementAndStatus = {
  accessRequirement: AccessRequirement
  status: AccessRequirementStatus
}

function getAccessRequirementHandlers(
  accessRequirements: AccessRequirementAndStatus[],
) {
  return [
    rest.get(
      \`\${MOCK_REPO_ORIGIN}\${ENTITY_ACCESS_REQUIREMENTS(':entityId')}\`,

      async (req, res, ctx) => {
        let status = 200
        let response: PaginatedResults<AccessRequirement> = {
          results: accessRequirements.map(ar => ar.accessRequirement),
          totalNumberOfResults: accessRequirements.length,
        }
        return res(ctx.status(status), ctx.json(response))
      },
    ),
    rest.get(
      \`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_STATUS(':id')}\`,

      async (req, res, ctx) => {
        const matchingArAndStatus = accessRequirements.find(
          accessRequirements =>
            req.params.id ===
            accessRequirements.accessRequirement.id.toString(),
        )
        const response = matchingArAndStatus?.status
        const status = response ? 200 : 404
        return res(ctx.status(status), ctx.json(response))
      },
    ),
  ]
}

export const NoRequirements = Template.bind({})

NoRequirements.parameters = {
  msw: {
    handlers: [
      ...getHandlers(MOCK_REPO_ORIGIN),
      ...getAccessRequirementHandlers([]),
    ],
  },
}

NoRequirements.args = {
  entityId: mockFileEntity.id,
  renderAsModal: true,
}

export const HasMetRequirements = Template.bind({})

HasMetRequirements.parameters = {
  msw: {
    handlers: [
      ...getHandlers(MOCK_REPO_ORIGIN),
      ...getAccessRequirementHandlers([
        {
          accessRequirement: mockManagedACTAccessRequirement,
          status: {
            accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
            isApproved: true,
            expiredOn: '2040-06-01T00:00:00.000Z',
            currentSubmissionStatus: SubmissionState.APPROVED,
          },
        },
      ]),
    ],
  },
}

HasMetRequirements.args = {
  entityId: mockFileEntity.id,
  renderAsModal: true,
}

export const HasUnmetRequirements = Template.bind({})

HasUnmetRequirements.parameters = {
  msw: {
    handlers: [
      ...getHandlers(MOCK_REPO_ORIGIN),
      ...getAccessRequirementHandlers([
        {
          accessRequirement: mockManagedACTAccessRequirement,
          status: {
            accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
            isApproved: false,
          },
        },
        {
          accessRequirement: mockSelfSignAccessRequirement,
          status: {
            accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
            isApproved: false,
          },
        },
      ]),
      rest.post(
        \`\${MOCK_REPO_ORIGIN}\${ACCESS_APPROVAL}\`,
        async (req, res, ctx) => {
          const response: AccessApproval = {
            submitterId: MOCK_USER_ID.toString(),
            accessorId: MOCK_USER_ID.toString(),
            state: ApprovalState.APPROVED,
          }
          return res(ctx.status(201), ctx.json(response))
        },
      ),

      rest.post(
        \`\${MOCK_REPO_ORIGIN}\${RESEARCH_PROJECT}\`,
        async (req, res, ctx) => {
          return res(ctx.status(201), ctx.json({}))
        },
      ),
      rest.get(
        \`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_RESEARCH_PROJECT_FOR_UPDATE(
          ':id',
        )}\`,
        async (req, res, ctx) => {
          const response: ResearchProject = {
            id: '1981321',
            accessRequirementId: req.params.id.toString(),
            institution: 'Black Mesa Research Facility',
            projectLead: 'Gordon Freeman',
            intendedDataUseStatement:
              'We plan to use this data to investigate the properties of antimatter. Our findings will be published in' +
              ' a peer-reviewed journal, and derivative data will be shared on Synapse.',
          }
          return res(ctx.status(200), ctx.json(response))
        },
      ),
      rest.get(
        \`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(
          ':id',
        )}\`,
        async (req, res, ctx) => {
          const response: RequestInterface = {
            accessRequirementId: req.params.id,
            concreteType: 'org.sagebionetworks.repo.model.dataaccess.Request',
          }
          return res(ctx.status(200), ctx.json(response))
        },
      ),
      rest.post(
        \`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_REQUEST}\`,
        async (req, res, ctx) => {
          return res(
            ctx.status(201),
            ctx.json({
              id: '61561981',
              etag: '0000',
            }),
          )
        },
      ),
      rest.post(
        \`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_REQUEST_SUBMISSION(':id')}\`,
        async (req, res, ctx) => {
          return res(ctx.status(201), ctx.json({}))
        },
      ),
      rest.post(
        \`\${MOCK_REPO_ORIGIN}\${FILE_HANDLE_BATCH}\`,
        async (req, res, ctx) => {
          const response: BatchFileResult = {
            requestedFiles: [
              {
                fileHandleId: mockFileHandle.id,
                fileHandle: mockFileHandle,
              },
            ],
          }
          return res(ctx.status(201), ctx.json(response))
        },
      ),
    ],
  },
}

HasUnmetRequirements.args = {
  entityId: mockFileEntity.id,
  renderAsModal: true,
}
`,locationsMap:{"no-requirements":{startLoc:{col:63,line:54},endLoc:{col:1,line:74},startBody:{col:63,line:54},endBody:{col:1,line:74}},"has-met-requirements":{startLoc:{col:63,line:54},endLoc:{col:1,line:74},startBody:{col:63,line:54},endBody:{col:1,line:74}},"has-unmet-requirements":{startLoc:{col:63,line:54},endLoc:{col:1,line:74},startBody:{col:63,line:54},endBody:{col:1,line:74}}}}},title:"Governance/AccessRequirementList",component:_,argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}}},R=n=>p(x,{children:t=>b(U,{synapseContext:{...t,accessToken:n.isAuthenticated?t.accessToken||"fake token":void 0},children:[p("p",{children:"First, use the StackChanger component to switch to the Mocked Data stack"}),p(_,{...n})]})});function l(n){return[o.rest.get(`${r}${N(":entityId")}`,async(t,e,s)=>{let i=200,a={results:n.map(m=>m.accessRequirement),totalNumberOfResults:n.length};return e(s.status(i),s.json(a))}),o.rest.get(`${r}${H(":id")}`,async(t,e,s)=>{const i=n.find(T=>t.params.id===T.accessRequirement.id.toString()),a=i==null?void 0:i.status,m=a?200:404;return e(s.status(m),s.json(a))})]}const C=R.bind({});C.parameters={msw:{handlers:[...u(r),...l([])]}};C.args={entityId:d.id,renderAsModal:!0};const q=R.bind({});q.parameters={msw:{handlers:[...u(r),...l([{accessRequirement:c,status:{accessRequirementId:c.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!0,expiredOn:"2040-06-01T00:00:00.000Z",currentSubmissionStatus:$.APPROVED}}])]}};q.args={entityId:d.id,renderAsModal:!0};const g=R.bind({});g.parameters={msw:{handlers:[...u(r),...l([{accessRequirement:c,status:{accessRequirementId:c.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1}},{accessRequirement:S,status:{accessRequirementId:S.id.toString(),concreteType:"org.sagebionetworks.repo.model.SelfSignAccessRequirement",isApproved:!1}}]),o.rest.post(`${r}${y}`,async(n,t,e)=>{const s={submitterId:A.toString(),accessorId:A.toString(),state:I.APPROVED};return t(e.status(201),e.json(s))}),o.rest.post(`${r}${O}`,async(n,t,e)=>t(e.status(201),e.json({}))),o.rest.get(`${r}${M(":id")}`,async(n,t,e)=>{const s={id:"1981321",accessRequirementId:n.params.id.toString(),institution:"Black Mesa Research Facility",projectLead:"Gordon Freeman",intendedDataUseStatement:"We plan to use this data to investigate the properties of antimatter. Our findings will be published in a peer-reviewed journal, and derivative data will be shared on Synapse."};return t(e.status(200),e.json(s))}),o.rest.get(`${r}${f(":id")}`,async(n,t,e)=>{const s={accessRequirementId:n.params.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.Request"};return t(e.status(200),e.json(s))}),o.rest.post(`${r}${k}`,async(n,t,e)=>t(e.status(201),e.json({id:"61561981",etag:"0000"}))),o.rest.post(`${r}${P(":id")}`,async(n,t,e)=>t(e.status(201),e.json({}))),o.rest.post(`${r}${h}`,async(n,t,e)=>{const s={requestedFiles:[{fileHandleId:E.id,fileHandle:E}]};return t(e.status(201),e.json(s))})]}};g.args={entityId:d.id,renderAsModal:!0};const Jt=["NoRequirements","HasMetRequirements","HasUnmetRequirements"];export{q as HasMetRequirements,g as HasUnmetRequirements,C as NoRequirements,Jt as __namedExportsOrder,Vt as default};
