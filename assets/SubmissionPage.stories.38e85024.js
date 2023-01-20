import{S as u}from"./SubmissionPage.5559f7a3.js";import{a as i}from"./index.232577d7.js";import{cL as p,L as l,M as g,ak as y}from"./index.bb7b660b.js";import{S as a}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{j as s}from"./AccessRequirementList.bce081ba.js";import{a as m}from"./RestrictionInformation.edfbac5a.js";import{M as e,e as S,l as d}from"./mockAccessRequirements.7e94d95d.js";import{M as n}from"./getEndpoint.f1f195f5.js";import{g as E,m as R}from"./mockRejectionReasonsTableQueryResultBundle.72d41b60.js";import{a as T,F as _,j as c}from"./jsx-runtime.590681cd.js";import"./dayjs.min.fc41a394.js";import"./iframe.d3c6f1d5.js";import"./DateFormatter.5dc1cf20.js";import"./utc.d4722960.js";import"./useDataAccessSubmission.86c7a7eb.js";import"./useMutation.fbb1c8e7.js";import"./useInfiniteQuery.582193b6.js";import"./useAccessRequirements.e8d4b6d5.js";import"./queryKeys.f96c2872.js";import"./SynapseConstants.aef18750.js";import"./WarningModal.ca5f9f29.js";import"./Modal.4704072e.js";import"./Button.d3c811d3.js";import"./createWithBsPrefix.4b46c4d7.js";import"./contains.5e789a3e.js";import"./inheritsLoose.16461593.js";import"./divWithClassName.638b701c.js";import"./index.220fbbb9.js";import"./index.35ce73ec.js";import"./usePrevious.a5299ce0.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.1c0cdf8b.js";import"./UserCard.f8a4e9c0.js";import"./IconCopy.a05a23c9.js";import"./SkeletonTable.69520a2f.js";import"./times.58442ccf.js";import"./toInteger.4e5bd8ec.js";import"./isSymbol.acb677d8.js";import"./isArray.b759bc77.js";import"./Skeleton.95aeb5c4.js";import"./styled.1c864c13.js";import"./emotion-react.browser.esm.a07d05d9.js";import"./IconSvg.88997e16.js";import"./SvgIcon.01f2428a.js";import"./Tooltip.0f7aeb46.js";import"./useTheme.fa81c060.js";import"./TransitionGroupContext.e7de7ea1.js";import"./ToastMessage.06f6548f.js";import"./FullWidthAlert.8cff24d3.js";import"./hook.5f699942.js";import"./Typography.62f204bb.js";import"./uniqueId.ac4a52ef.js";import"./toString.e4762266.js";import"./Overlay.08bde75f.js";import"./usePopperMarginModifiers.fa06e499.js";import"./UserOrTeamBadge.b7d40120.js";import"./RejectDataAccessRequestModal.acaa5691.js";import"./useGetQueryResultBundle.42b5d08f.js";import"./immutable.es.28139da3.js";import"./LoadingScreen.8ce9c0f0.js";import"./DialogContent.fe5141da.js";import"./Modal.32fd4057.js";import"./Fade.dfa4b9be.js";import"./Paper.8b769746.js";import"./Stack.030a5c0c.js";import"./Box.d618e564.js";import"./IconButton.7622d68d.js";import"./ButtonBase.c831f7af.js";import"./Button.6aee65d4.js";import"./FormLabel.a1d88a2d.js";import"./isMuiElement.ed383d92.js";import"./TextField.37cd6126.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.6689b856.js";import"./List.a5cb3c90.js";import"./upperFirst.a3b899a7.js";import"./_baseSlice.50189bc5.js";import"./toLower.77519bad.js";import"./inherits_browser.5ef2ae5f.js";import"./Link.3f8a0a55.js";import"./useGetInfoFromIds.fe484232.js";import"./use-deep-compare-effect.esm.e5e25a62.js";import"./uniq.1eb55587.js";import"./_cacheHas.c3ef5294.js";import"./without.3cab2d82.js";import"./_Set.13ddd322.js";import"./_setToArray.a82100c8.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.6d171a39.js";import"./EntityIcon.f20fbcec.js";import"./core.esm.dff18696.js";import"./pick.cd3085d6.js";import"./_baseClone.5541a1cb.js";import"./isEmpty.ffb8061e.js";import"./isEqual.6e289403.js";import"./index.browser.c38bfbad.js";import"./union.96ffd9ca.js";import"./CustomSelectWidget.019e7101.js";import"./Select-54ac8379.esm.b77d0c67.js";import"./isString.0b29996a.js";import"./factory.f9864e7a.js";import"./sqlFunctions.7c5ea660.js";import"./QueryFilter.ee6936f9.js";import"./useEntity.e9c8ccf5.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.ed2cb769.js";import"./queryUtils.b6571b13.js";import"./cloneDeep.399b0d62.js";import"./NoSearchResults.76b8e076.js";import"./NoData.43470a81.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./ElementWithTooltip.8e8a071c.js";import"./Dropdown.ebc0212b.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.adb21e17.js";import"./RadioGroup.63697a5f.js";import"./RangeSlider.be60d483.js";import"./react-sizeme.4669bd7b.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.d3927ba9.js";import"./Close.fe4e1b6f.js";import"./relativeTime.810a453b.js";import"./useDownloadList.92dbf79d.js";import"./QueryCount.eb0c34ec.js";import"./react-select.esm.0e965a92.js";import"./IconList.b09a9d03.js";import"./UserCardList.988f8d92.js";import"./FileUpload.48f16211.js";import"./UserSearchBox.03bb705a.js";import"./EntityLink.edd798d8.js";import"./ErrorChip.ab8c6b0c.js";import"./SynapseVideo.cbf89cbf.js";const C={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:s.RENEW_ACCESS},{userId:S.toString(),type:s.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

Fix incorrect data.

Please contact us at act@sagebionetworks.org if you have any questions.

Regards,
Access and Compliance Team (ACT)
act@sagebionetworks.org`,etag:"626f9567-bf5f-41e0-9bbf-cf1cd23e6b54",subjectId:"syn12156790",subjectType:m.ENTITY},O={id:"1",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:e.toString(),type:s.GAIN_ACCESS},{userId:S.toString(),type:s.GAIN_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment where software engineers pretend to be the users for whom they are trying to build features.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:m.ENTITY},A={id:"2",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"2",ducFileHandleId:"3997211",irbFileHandleId:"3997213",attachments:["3997211"],accessorChanges:[{userId:e.toString(),type:s.GAIN_ACCESS}],researchProjectSnapshot:{id:"2",accessRequirementId:"9602626",institution:"None",projectLead:"NickACT",intendedDataUseStatement:"Give me data pls",createdOn:"2022-05-10T17:17:14.757Z",modifiedOn:"2022-05-10T17:18:17.913Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"270234fd-da28-4098-8fd2-5693fee82c19"},isRenewalSubmission:!1,submittedOn:"2022-05-10T17:18:28.801Z",modifiedOn:"2022-05-10T17:20:09.356Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.APPROVED,etag:"5fefb2d1-8600-4e1e-96e1-cf57f2ff7fd0",subjectId:"syn12156790",subjectType:m.ENTITY},j={id:"4",accessRequirementId:"9603055",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:"3431185",type:s.RENEW_ACCESS},{userId:"3350396",type:s.GAIN_ACCESS},{userId:"3371908",type:s.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9603055",institution:"Bage Sionetworks",projectLead:"Adam H",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:"3431185",modifiedBy:"3431185",etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:"3431185",modifiedBy:"3431185",state:a.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:m.ENTITY},k=[A,C,O,j],sr={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SubmissionPage from './SubmissionPage'
import { rest } from 'msw'
import {
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_WIKI_PAGE_KEY,
  DATA_ACCESS_SUBMISSION_BY_ID,
} from '../../utils/APIConstants'
import { mockSubmissions } from '../../../mocks/dataaccess/MockSubmission'
import { mockManagedACTAccessRequirement } from '../../../mocks/mockAccessRequirements'
import { SynapseErrorBoundary } from '../error/ErrorBanner'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { getHandlersForTableQuery } from '../../../mocks/msw/handlers/tableQueryHandlers'
import mockRejectionReasonsTableQueryResultBundle from '../../../mocks/query/mockRejectionReasonsTableQueryResultBundle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Governance/SubmissionPage',
  component: SubmissionPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SubmissionPage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SubmissionPage> = args => (
  <>
    <p>
      First, use the StackChanger component to switch to the Mock Data stack
    </p>
    <SynapseErrorBoundary>
      <SubmissionPage {...args} />
    </SynapseErrorBoundary>
  </>
)

export const Demo = Template.bind({})

Demo.parameters = {
  msw: {
    handlers: [
      // Return submission based on ID
      rest.get(
        \`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`,

        async (req, res, ctx) => {
          const submission = mockSubmissions.find(
            submission => req.params.id === submission.id,
          )
          return res(ctx.status(200), ctx.json(submission))
        },
      ),

      // Return a mocked access requirement
      rest.get(
        \`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`,

        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockManagedACTAccessRequirement))
        },
      ),
      rest.get(
        \`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`,
        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              wikiPageId: 123,
              ownerObjectId: mockManagedACTAccessRequirement.id,
              ownerObjectType: 'ACCESS_REQUIREMENT',
            }),
          )
        },
      ),
      rest.get(
        \`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`,
        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              id: req.id,
              creationDate: '2022-05-20T14:32:31.665Z',
              etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
              resourceAccess: [
                {
                  principalId: 3350396,
                  accessType: ['REVIEW_SUBMISSIONS'],
                },
              ],
            }),
          )
        },
      ),
      ...getHandlersForTableQuery(mockRejectionReasonsTableQueryResultBundle),
      rest.put(
        \`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`,

        async (req, res, ctx) => {
          return res(ctx.status(201), ctx.json(await req.json()))
        },
      ),
    ],
  },
}
Demo.args = {
  submissionId: 1,
}
`,locationsMap:{demo:{startLoc:{col:56,line:26},endLoc:{col:1,line:35},startBody:{col:56,line:26},endBody:{col:1,line:35}}}}},title:"Governance/SubmissionPage",component:u,argTypes:{}},h=r=>T(_,{children:[c("p",{children:"First, use the StackChanger component to switch to the Mock Data stack"}),c(y,{children:c(u,{...r})})]}),I=h.bind({});I.parameters={msw:{handlers:[i.rest.get(`${n}${p(":id")}`,async(r,o,t)=>{const b=k.find(f=>r.params.id===f.id);return o(t.status(200),t.json(b))}),i.rest.get(`${n}${l(":id")}`,async(r,o,t)=>o(t.status(200),t.json(d))),i.rest.get(`${n}${g(":id")}`,async(r,o,t)=>o(t.status(200),t.json({wikiPageId:123,ownerObjectId:d.id,ownerObjectType:"ACCESS_REQUIREMENT"}))),i.rest.get(`${n}/repo/v1/accessRequirement/:id/acl`,async(r,o,t)=>o(t.status(200),t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:3350396,accessType:["REVIEW_SUBMISSIONS"]}]}))),...E(R),i.rest.put(`${n}${p(":id")}`,async(r,o,t)=>o(t.status(201),t.json(await r.json())))]}};I.args={submissionId:1};const ir=["Demo"];export{I as Demo,ir as __namedExportsOrder,sr as default};
