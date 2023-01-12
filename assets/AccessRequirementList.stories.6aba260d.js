import{A as _,a as I}from"./AccessRequirementList.e3110584.js";import{o as c,p as S,f as o,M as A,m as E}from"./mockAccessRequirements.fca2fcd2.js";import{M as r}from"./getEndpoint.f1f195f5.js";import{V as y,W as O,X as M,Y as f,Z as k,_ as P,$ as h,a0 as x,S as U,a1 as N,a2 as H}from"./index.0297a0cb.js";import{g as u,m as d}from"./handlers.66245cda.js";import{S as $}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{j as p,a as b}from"./jsx-runtime.76b41102.js";import"./useGetInfoFromIds.ad8b47c2.js";import"./use-deep-compare-effect.esm.c9075b1e.js";import"./uniq.4862c17b.js";import"./_baseSlice.50189bc5.js";import"./toInteger.e94666c7.js";import"./isSymbol.945d9b60.js";import"./isArray.8642b77d.js";import"./Button.83b95483.js";import"./index.35ce73ec.js";import"./_cacheHas.0d545133.js";import"./without.79d3af29.js";import"./toString.30e0c932.js";import"./_Set.6089be3d.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.71946a35.js";import"./IconSvg.175e5b3e.js";import"./SvgIcon.7ad855dc.js";import"./styled.0442482c.js";import"./Tooltip.40200d96.js";import"./useTheme.6368534f.js";import"./index.bc4e6645.js";import"./iframe.4ac8fc26.js";import"./TransitionGroupContext.e619b501.js";import"./queryKeys.e0d3085f.js";import"./LoadingScreen.37cafde6.js";import"./Modal.907a4a1e.js";import"./createWithBsPrefix.ec0f4954.js";import"./contains.015a7c6d.js";import"./inheritsLoose.9c2697f4.js";import"./divWithClassName.ae433c15.js";import"./usePrevious.4c8906d5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.ad8cb22c.js";import"./Typography.6181771e.js";import"./emotion-react.browser.esm.cf245846.js";import"./UserCard.29055287.js";import"./IconCopy.ae28a5e2.js";import"./SkeletonTable.4585cee0.js";import"./times.5539d7c0.js";import"./Skeleton.439e65be.js";import"./ToastMessage.a7db9b8d.js";import"./FullWidthAlert.fa5db810.js";import"./hook.9a8069f4.js";import"./uniqueId.db618dfa.js";import"./Overlay.e607fdf1.js";import"./usePopperMarginModifiers.f84a16be.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.0ced2b23.js";import"./useInfiniteQuery.6628dc0b.js";import"./DateFormatter.405593b2.js";import"./dayjs.min.a3177bfa.js";import"./utc.57c73dc3.js";import"./EntityIcon.409d700e.js";import"./core.esm.5ccb1dc5.js";import"./pick.77527010.js";import"./_baseClone.59c3ed7e.js";import"./isEmpty.8d6ae8cd.js";import"./isEqual.f3cbd38f.js";import"./index.browser.dfdbc042.js";import"./union.8f08a467.js";import"./CustomSelectWidget.0f29881d.js";import"./Select-54ac8379.esm.04a57595.js";import"./isString.64d04794.js";import"./Button.09259ba0.js";import"./ButtonBase.bd6b806f.js";import"./factory.0ec07d04.js";import"./sqlFunctions.e7dd183a.js";import"./QueryFilter.b81da185.js";import"./useEntity.d0924c07.js";import"./useMutation.bf55f3f5.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.22071321.js";import"./queryUtils.cba9940e.js";import"./cloneDeep.e7a3eeef.js";import"./NoSearchResults.74466cf1.js";import"./NoData.e5f1e807.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.05b87c21.js";import"./Dropdown.f708dbe5.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b4d66a68.js";import"./RadioGroup.7d7338a2.js";import"./RangeSlider.8c92159c.js";import"./react-sizeme.e70bce6e.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.938aa7f9.js";import"./Close.64702cf9.js";import"./relativeTime.7e299a09.js";import"./useDownloadList.5afd9cdb.js";import"./QueryCount.ea7052b8.js";import"./react-select.esm.6272fded.js";import"./IconList.d9d0dd5d.js";import"./UserCardList.025f49c3.js";import"./useAccessRequirements.dc76750b.js";import"./RestrictionInformation.edfbac5a.js";import"./FileUpload.8f9a5007.js";import"./UserSearchBox.2300e4da.js";import"./UserOrTeamBadge.e0170d2a.js";import"./EntityLink.de0eb36e.js";import"./ErrorChip.fe210de4.js";import"./SynapseVideo.9b0ef7ab.js";import"./inherits_browser.b550d0d9.js";import"./Fade.e47b19bb.js";import"./IconButton.6adff82e.js";import"./Link.dc8bd0fa.js";import"./UploadDestination.dcbd5975.js";const Kt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-requirements":{startLoc:{col:63,line:54},endLoc:{col:1,line:74},startBody:{col:63,line:54},endBody:{col:1,line:74}},"has-met-requirements":{startLoc:{col:63,line:54},endLoc:{col:1,line:74},startBody:{col:63,line:54},endBody:{col:1,line:74}},"has-unmet-requirements":{startLoc:{col:63,line:54},endLoc:{col:1,line:74},startBody:{col:63,line:54},endBody:{col:1,line:74}}}}},title:"Governance/AccessRequirementList",component:_,argTypes:{isAuthenticated:{control:{type:"boolean"},defaultValue:!0}}},R=n=>p(x,{children:t=>b(U,{synapseContext:{...t,accessToken:n.isAuthenticated?t.accessToken||"fake token":void 0},children:[p("p",{children:"First, use the StackChanger component to switch to the Mocked Data stack"}),p(_,{...n})]})});function l(n){return[o.rest.get(`${r}${N(":entityId")}`,async(t,e,s)=>{let i=200,a={results:n.map(m=>m.accessRequirement),totalNumberOfResults:n.length};return e(s.status(i),s.json(a))}),o.rest.get(`${r}${H(":id")}`,async(t,e,s)=>{const i=n.find(T=>t.params.id===T.accessRequirement.id.toString()),a=i==null?void 0:i.status,m=a?200:404;return e(s.status(m),s.json(a))})]}const C=R.bind({});C.parameters={msw:{handlers:[...u(r),...l([])]}};C.args={entityId:d.id,renderAsModal:!0};const q=R.bind({});q.parameters={msw:{handlers:[...u(r),...l([{accessRequirement:c,status:{accessRequirementId:c.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!0,expiredOn:"2040-06-01T00:00:00.000Z",currentSubmissionStatus:$.APPROVED}}])]}};q.args={entityId:d.id,renderAsModal:!0};const g=R.bind({});g.parameters={msw:{handlers:[...u(r),...l([{accessRequirement:c,status:{accessRequirementId:c.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1}},{accessRequirement:S,status:{accessRequirementId:S.id.toString(),concreteType:"org.sagebionetworks.repo.model.SelfSignAccessRequirement",isApproved:!1}}]),o.rest.post(`${r}${y}`,async(n,t,e)=>{const s={submitterId:A.toString(),accessorId:A.toString(),state:I.APPROVED};return t(e.status(201),e.json(s))}),o.rest.post(`${r}${O}`,async(n,t,e)=>t(e.status(201),e.json({}))),o.rest.get(`${r}${M(":id")}`,async(n,t,e)=>{const s={id:"1981321",accessRequirementId:n.params.id.toString(),institution:"Black Mesa Research Facility",projectLead:"Gordon Freeman",intendedDataUseStatement:"We plan to use this data to investigate the properties of antimatter. Our findings will be published in a peer-reviewed journal, and derivative data will be shared on Synapse."};return t(e.status(200),e.json(s))}),o.rest.get(`${r}${f(":id")}`,async(n,t,e)=>{const s={accessRequirementId:n.params.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.Request"};return t(e.status(200),e.json(s))}),o.rest.post(`${r}${k}`,async(n,t,e)=>t(e.status(201),e.json({id:"61561981",etag:"0000"}))),o.rest.post(`${r}${P(":id")}`,async(n,t,e)=>t(e.status(201),e.json({}))),o.rest.post(`${r}${h}`,async(n,t,e)=>{const s={requestedFiles:[{fileHandleId:E.id,fileHandle:E}]};return t(e.status(201),e.json(s))})]}};g.args={entityId:d.id,renderAsModal:!0};const Bt=["NoRequirements","HasMetRequirements","HasUnmetRequirements"];export{q as HasMetRequirements,g as HasUnmetRequirements,C as NoRequirements,Bt as __namedExportsOrder,Kt as default};
