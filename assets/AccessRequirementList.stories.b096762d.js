import{A as _,a as I}from"./AccessRequirementList.f4adc840.js";import{a as o}from"./index.a6ad674f.js";import{M as r}from"./getEndpoint.f1f195f5.js";import{V as y,W as O,X as M,Y as f,Z as k,_ as P,$ as h,a0 as x,S as U,a1 as N,a2 as H}from"./index.3aece391.js";import{l as c,n as S,M as A,m as E}from"./mockAccessRequirements.cd428040.js";import{g as u,m as d}from"./handlers.1a674b51.js";import{S as $}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{j as p,a as b}from"./jsx-runtime.2345241f.js";import"./useGetInfoFromIds.0475603f.js";import"./use-deep-compare-effect.esm.172e5a35.js";import"./uniq.3e57be38.js";import"./_baseSlice.50189bc5.js";import"./toInteger.accec1ae.js";import"./isSymbol.f2edf3f1.js";import"./isArray.594b9061.js";import"./Button.dd9fc4ec.js";import"./index.35ce73ec.js";import"./_cacheHas.444d0de0.js";import"./without.fdcdbb83.js";import"./toString.f6d778fc.js";import"./_Set.9e8317f4.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.aef18750.js";import"./IconSvg.c0ad7b85.js";import"./SvgIcon.c3dd5893.js";import"./styled.8a79803b.js";import"./Tooltip.c4c31d9f.js";import"./useTheme.7300f82e.js";import"./index.5a7af4ba.js";import"./iframe.b6c45fd3.js";import"./TransitionGroupContext.ce30fb83.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.2eed530c.js";import"./Modal.d74fe065.js";import"./createWithBsPrefix.767a2de5.js";import"./contains.ca3b169c.js";import"./inheritsLoose.13574b27.js";import"./divWithClassName.ada2c499.js";import"./usePrevious.87cbdf7d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.6e025e2e.js";import"./Typography.5428f494.js";import"./emotion-react.browser.esm.782cdb58.js";import"./UserCard.ba59470c.js";import"./IconCopy.96dd679a.js";import"./SkeletonTable.a46ba30a.js";import"./times.cf7726b4.js";import"./Skeleton.153caf19.js";import"./ToastMessage.67e8dd8b.js";import"./FullWidthAlert.f758387e.js";import"./hook.40948bbb.js";import"./uniqueId.15511b65.js";import"./Overlay.38d5df1d.js";import"./usePopperMarginModifiers.279ac1d5.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.03df17ea.js";import"./useInfiniteQuery.9f720242.js";import"./DateFormatter.5a5aee7a.js";import"./dayjs.min.08f55bec.js";import"./utc.ea4d26d5.js";import"./EntityIcon.4499e1cb.js";import"./core.esm.6fa18c80.js";import"./pick.4daa287c.js";import"./_baseClone.917156e4.js";import"./isEmpty.cf2813c7.js";import"./isEqual.389c33db.js";import"./index.browser.ffb67eb2.js";import"./union.9ee7bb2c.js";import"./CustomSelectWidget.f2975d6b.js";import"./Select-54ac8379.esm.e28782ed.js";import"./isString.0282577e.js";import"./Button.2a6d5e68.js";import"./ButtonBase.37e9a56e.js";import"./factory.b43af774.js";import"./sqlFunctions.2fd3fba9.js";import"./QueryFilter.a3eb9749.js";import"./useEntity.8bf3c388.js";import"./useMutation.1f6b4381.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.9125323f.js";import"./queryUtils.3d9a8b34.js";import"./cloneDeep.4edbf6d2.js";import"./NoSearchResults.a5221c5b.js";import"./NoData.42b2b531.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./useGetQueryResultBundle.fd8402b4.js";import"./ElementWithTooltip.cc59464c.js";import"./Dropdown.1de75e35.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.90f0cc6b.js";import"./RadioGroup.293e52dc.js";import"./RangeSlider.765e12f1.js";import"./react-sizeme.8f705d02.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.33f9f454.js";import"./Close.bf8fe8a1.js";import"./relativeTime.98f5c2df.js";import"./useDownloadList.55e1fa91.js";import"./QueryCount.78040131.js";import"./react-select.esm.2244a417.js";import"./IconList.1efc798b.js";import"./UserCardList.15756da8.js";import"./useAccessRequirements.175d805e.js";import"./RestrictionInformation.edfbac5a.js";import"./FileUpload.059ff184.js";import"./UserSearchBox.976219e3.js";import"./UserOrTeamBadge.11ab92e9.js";import"./EntityLink.32811989.js";import"./ErrorChip.124f27be.js";import"./SynapseVideo.3f73dbfc.js";import"./inherits_browser.c7781f14.js";import"./Fade.544d2c09.js";import"./IconButton.479fa89c.js";import"./Link.10558e7e.js";import"./UploadDestination.dcbd5975.js";const Vt={parameters:{storySource:{source:`import React from 'react'
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
