import{A as _,a as I}from"./AccessRequirementList.3b72d65e.js";import{a as o}from"./index.57bbd51d.js";import{M as r}from"./getEndpoint.f1f195f5.js";import{V as y,W as O,X as M,Y as f,Z as k,_ as P,$ as h,a0 as x,S as U,a1 as N,a2 as H}from"./index.f6f857f5.js";import{l as c,n as S,M as A,m as E}from"./mockAccessRequirements.17b462b0.js";import{g as u,m as d}from"./handlers.616c2507.js";import{S as $}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{j as p,a as b}from"./jsx-runtime.6efef3f0.js";import"./useGetInfoFromIds.46c54480.js";import"./use-deep-compare-effect.esm.fa498af3.js";import"./uniq.e676b014.js";import"./_baseSlice.50189bc5.js";import"./toInteger.a03e46d2.js";import"./isSymbol.7ee325a2.js";import"./isArray.ce0fc8e6.js";import"./Button.113b0f45.js";import"./index.35ce73ec.js";import"./_cacheHas.c0fe68d8.js";import"./without.e36cd559.js";import"./toString.931d2742.js";import"./_Set.6076d8f1.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.aef18750.js";import"./IconSvg.a0ac0502.js";import"./SvgIcon.3e939805.js";import"./styled.3d34e36b.js";import"./Tooltip.9a185035.js";import"./useTheme.2b3579a1.js";import"./index.527b2819.js";import"./iframe.b3705b98.js";import"./TransitionGroupContext.962689fd.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.ab408232.js";import"./Modal.db10ea3b.js";import"./createWithBsPrefix.dc61fcfa.js";import"./contains.789c8f44.js";import"./inheritsLoose.0f44c725.js";import"./divWithClassName.39d1e3e2.js";import"./usePrevious.234e4743.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.265683e8.js";import"./Typography.a863760e.js";import"./emotion-react.browser.esm.89334e8c.js";import"./UserCard.89fae007.js";import"./IconCopy.7b0e586f.js";import"./SkeletonTable.43182f64.js";import"./times.ce6f9568.js";import"./Skeleton.c73b94b2.js";import"./ToastMessage.a9162853.js";import"./FullWidthAlert.87654e2f.js";import"./hook.4287fc8d.js";import"./uniqueId.a881a904.js";import"./Overlay.6c0a21b1.js";import"./usePopperMarginModifiers.0eff8b53.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.d0985ce6.js";import"./useInfiniteQuery.6ce8309d.js";import"./DateFormatter.e4b2fe07.js";import"./dayjs.min.8b3c16f0.js";import"./utc.cd0b4238.js";import"./EntityIcon.3b4d81e3.js";import"./core.esm.7728abb9.js";import"./pick.58e246c9.js";import"./_baseClone.27a5ae2d.js";import"./isEmpty.8554a593.js";import"./isEqual.4b0c3d7f.js";import"./index.browser.0c4417bc.js";import"./union.ac9c033b.js";import"./CustomSelectWidget.227adc34.js";import"./Select-54ac8379.esm.1fa52e56.js";import"./isString.ca431768.js";import"./Button.bcc1fc04.js";import"./ButtonBase.42d7166c.js";import"./factory.b6e4d6a7.js";import"./sqlFunctions.ba594ce5.js";import"./QueryFilter.30eec546.js";import"./useEntity.7761124a.js";import"./useMutation.905ce15d.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.8165148a.js";import"./queryUtils.edb96664.js";import"./cloneDeep.53ea7f1e.js";import"./NoSearchResults.e2971c16.js";import"./NoData.867fffb7.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./useGetQueryResultBundle.1228df4a.js";import"./ElementWithTooltip.c54d261b.js";import"./Dropdown.5bd05552.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.fd5e6b6d.js";import"./RadioGroup.bc45bd63.js";import"./RangeSlider.6c9bce2a.js";import"./react-sizeme.db3800c3.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.eb4309d9.js";import"./Close.2b98c3fe.js";import"./relativeTime.220aea01.js";import"./useDownloadList.06df0856.js";import"./QueryCount.62cf06b4.js";import"./react-select.esm.a9ae3588.js";import"./IconList.27dad11c.js";import"./UserCardList.4d0cf000.js";import"./useAccessRequirements.eca13162.js";import"./RestrictionInformation.edfbac5a.js";import"./FileUpload.b7cbe231.js";import"./UserSearchBox.bc3fcd89.js";import"./UserOrTeamBadge.fdcbf44a.js";import"./EntityLink.8a97d7e0.js";import"./ErrorChip.8bb6b297.js";import"./SynapseVideo.b2125f69.js";import"./inherits_browser.432d22d0.js";import"./Fade.ee3053ca.js";import"./IconButton.a32a330b.js";import"./Link.f540f0ea.js";import"./UploadDestination.dcbd5975.js";const Vt={parameters:{storySource:{source:`import React from 'react'
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
