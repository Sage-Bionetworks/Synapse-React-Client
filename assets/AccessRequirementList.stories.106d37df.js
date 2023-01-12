import{A as _,a as I}from"./AccessRequirementList.41faf05e.js";import{a as o}from"./index.766b85ba.js";import{M as r}from"./getEndpoint.f1f195f5.js";import{V as y,W as O,X as M,Y as f,Z as k,_ as P,$ as h,a0 as x,S as U,a1 as N,a2 as H}from"./index.b83134ec.js";import{l as c,n as S,M as A,m as E}from"./mockAccessRequirements.43415f15.js";import{g as u,m as d}from"./handlers.a6a801df.js";import{S as $}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{j as p,a as b}from"./jsx-runtime.a638b984.js";import"./useGetInfoFromIds.0695acf2.js";import"./use-deep-compare-effect.esm.84f86818.js";import"./uniq.a9fb9502.js";import"./_baseSlice.50189bc5.js";import"./toInteger.6100b906.js";import"./isSymbol.0dd0ac71.js";import"./isArray.dae1198f.js";import"./Button.9991ffcd.js";import"./index.35ce73ec.js";import"./_cacheHas.3d34eb58.js";import"./without.5a3916f3.js";import"./toString.42e4c32f.js";import"./_Set.7dca34f2.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.aef18750.js";import"./IconSvg.9dec1c98.js";import"./SvgIcon.e74d0ad6.js";import"./styled.d7b43787.js";import"./Tooltip.9be437e1.js";import"./useTheme.207e8da2.js";import"./index.357ef824.js";import"./iframe.73217397.js";import"./TransitionGroupContext.f8911474.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.aa28caa1.js";import"./Modal.b15b7fde.js";import"./createWithBsPrefix.86af4a28.js";import"./contains.bb95d688.js";import"./inheritsLoose.239e8e0c.js";import"./divWithClassName.979a7568.js";import"./usePrevious.cd07ee7a.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.1ade44a8.js";import"./Typography.1d6efe32.js";import"./emotion-react.browser.esm.3d42de74.js";import"./UserCard.48755798.js";import"./IconCopy.9eb37407.js";import"./SkeletonTable.5915fa08.js";import"./times.6c1e506b.js";import"./Skeleton.9bd91a4d.js";import"./ToastMessage.1f086d0d.js";import"./FullWidthAlert.97efcbea.js";import"./hook.a59baafe.js";import"./uniqueId.409eda17.js";import"./Overlay.d99e3370.js";import"./usePopperMarginModifiers.5dd6ca76.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.acc5be8a.js";import"./useInfiniteQuery.26e1390d.js";import"./DateFormatter.d4a7e375.js";import"./dayjs.min.101fce52.js";import"./utc.b447640b.js";import"./EntityIcon.cd547dc5.js";import"./core.esm.5a39768d.js";import"./pick.8f751592.js";import"./_baseClone.fcfb79d0.js";import"./isEmpty.52a3bb94.js";import"./isEqual.e7127514.js";import"./index.browser.8d441949.js";import"./union.1918a2e6.js";import"./CustomSelectWidget.8bed6124.js";import"./Select-54ac8379.esm.6fca8758.js";import"./isString.40efef4d.js";import"./Button.666a2c38.js";import"./ButtonBase.bc378f3c.js";import"./factory.54d8e23b.js";import"./sqlFunctions.32eb366f.js";import"./QueryFilter.b6981f76.js";import"./useEntity.4e3ff0bc.js";import"./useMutation.20926710.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.258625e4.js";import"./queryUtils.54998cc3.js";import"./cloneDeep.862b3fc1.js";import"./NoSearchResults.ed811a7e.js";import"./NoData.d46cdac5.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./useGetQueryResultBundle.625d0cdf.js";import"./ElementWithTooltip.9457f14f.js";import"./Dropdown.c6c87cc1.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.5012e4c0.js";import"./RadioGroup.7c25e269.js";import"./RangeSlider.18e46d9a.js";import"./react-sizeme.51f167fb.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.f7e1757b.js";import"./Close.f1e80c2b.js";import"./relativeTime.86b47aee.js";import"./useDownloadList.8311e29e.js";import"./QueryCount.eb0f2bab.js";import"./react-select.esm.1b1b0c13.js";import"./IconList.e17aeab0.js";import"./UserCardList.2e00fa1e.js";import"./useAccessRequirements.48298cfd.js";import"./RestrictionInformation.edfbac5a.js";import"./FileUpload.7c27e3b0.js";import"./UserSearchBox.f8b4b070.js";import"./UserOrTeamBadge.7c78ec4d.js";import"./EntityLink.4711e14a.js";import"./ErrorChip.097c7e23.js";import"./SynapseVideo.a7ab2161.js";import"./inherits_browser.11f3aeaf.js";import"./Fade.cb073591.js";import"./IconButton.7cd1b748.js";import"./Link.e9eeb2e9.js";import"./UploadDestination.dcbd5975.js";const Vt={parameters:{storySource:{source:`import React from 'react'
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
