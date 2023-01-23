import{S as u}from"./SubmissionPage.6038e8df.js";import{a as i}from"./index.1d65f2f1.js";import{cL as p,L as l,M as g,ak as y}from"./index.5da0c2fe.js";import{S as a}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{j as s}from"./AccessRequirementList.41da6f0a.js";import{a as m}from"./RestrictionInformation.edfbac5a.js";import{M as e,e as S,l as d}from"./mockAccessRequirements.a53793fc.js";import{M as n}from"./getEndpoint.f1f195f5.js";import{g as E,m as R}from"./mockRejectionReasonsTableQueryResultBundle.0a7d64ba.js";import{a as T,F as _,j as c}from"./jsx-runtime.b9dbe3f2.js";import"./dayjs.min.299ad3a1.js";import"./iframe.daa7e99b.js";import"./DateFormatter.d642ffb3.js";import"./utc.fbb5bd49.js";import"./useDataAccessSubmission.496eff5f.js";import"./useMutation.17976629.js";import"./useInfiniteQuery.d3f40dc1.js";import"./useAccessRequirements.04427f1b.js";import"./queryKeys.f96c2872.js";import"./SynapseConstants.aef18750.js";import"./WarningModal.d9d70f9d.js";import"./Modal.d5b47340.js";import"./Button.5e8fef04.js";import"./createWithBsPrefix.e49426e0.js";import"./contains.c92a1cab.js";import"./inheritsLoose.68af5c28.js";import"./divWithClassName.39a68f1e.js";import"./index.1d295946.js";import"./index.35ce73ec.js";import"./usePrevious.3e9a9e11.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.a0e6e40c.js";import"./UserCard.4bb4c375.js";import"./IconCopy.e1e77b1a.js";import"./SkeletonTable.4e7a5f80.js";import"./times.0d4bfec0.js";import"./toInteger.ac9e6667.js";import"./isSymbol.0dd8f9e4.js";import"./isArray.cd664950.js";import"./Skeleton.e124e8e4.js";import"./styled.b8523d56.js";import"./emotion-react.browser.esm.c079a2eb.js";import"./IconSvg.e161b9ac.js";import"./SvgIcon.07fafc9f.js";import"./Tooltip.48a3285f.js";import"./useTheme.0510b97a.js";import"./TransitionGroupContext.550f3593.js";import"./ToastMessage.3861395a.js";import"./FullWidthAlert.4c795642.js";import"./hook.8a461b2d.js";import"./Typography.67fe2a50.js";import"./uniqueId.dbc9074b.js";import"./toString.e4b44ed1.js";import"./Overlay.b50e2181.js";import"./usePopperMarginModifiers.df9835fb.js";import"./UserOrTeamBadge.b05f03b8.js";import"./RejectDataAccessRequestModal.0019d002.js";import"./useGetQueryResultBundle.c6cba393.js";import"./immutable.es.28139da3.js";import"./LoadingScreen.a4b87421.js";import"./DialogContent.f37a4ae0.js";import"./Modal.a1ffcc13.js";import"./Fade.79c18b91.js";import"./Paper.d3f81af6.js";import"./Stack.649a669e.js";import"./Box.d2dea44e.js";import"./IconButton.92911f6e.js";import"./ButtonBase.a93e0872.js";import"./Button.7c5736c7.js";import"./FormLabel.23106569.js";import"./isMuiElement.b516b39b.js";import"./TextField.bdda78a4.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.dfc5e6d3.js";import"./List.49329722.js";import"./upperFirst.4aef46d4.js";import"./_baseSlice.50189bc5.js";import"./toLower.6a42cdba.js";import"./inherits_browser.68f36edf.js";import"./Link.da3e8d7d.js";import"./useGetInfoFromIds.df5d54b4.js";import"./use-deep-compare-effect.esm.29b168ec.js";import"./uniq.cebce7b4.js";import"./_cacheHas.59c4bb78.js";import"./without.42fc4fba.js";import"./_Set.469d2b08.js";import"./_setToArray.a82100c8.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.a3a9e472.js";import"./EntityIcon.2ca31f4b.js";import"./core.esm.e765a482.js";import"./pick.c984aa8c.js";import"./_baseClone.ef57de12.js";import"./isEmpty.d81e9f95.js";import"./isEqual.e5ecbe9a.js";import"./index.browser.877b1983.js";import"./union.70e21edc.js";import"./CustomSelectWidget.428424ed.js";import"./Select-54ac8379.esm.708df6a0.js";import"./isString.7debb151.js";import"./factory.6a31a56b.js";import"./sqlFunctions.32cb4e2b.js";import"./QueryFilter.89fbadd0.js";import"./useEntity.bc266fa3.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.3a80d784.js";import"./queryUtils.5d78ee18.js";import"./cloneDeep.18f0269c.js";import"./NoSearchResults.cf2c2af3.js";import"./NoData.f256ee32.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./ElementWithTooltip.974896e1.js";import"./Dropdown.d53923ab.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b6409fc8.js";import"./RadioGroup.798ea8f4.js";import"./RangeSlider.7b6de83e.js";import"./react-sizeme.61f4b5d1.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.8cea27a1.js";import"./Close.51c782db.js";import"./relativeTime.a1b54a10.js";import"./useDownloadList.bf5786ba.js";import"./QueryCount.e531dd90.js";import"./react-select.esm.a57c6cc0.js";import"./IconList.cb121091.js";import"./UserCardList.a1e65843.js";import"./FileUpload.5c37e200.js";import"./UserSearchBox.c2dd0710.js";import"./EntityLink.c18672b0.js";import"./ErrorChip.b2a17b81.js";import"./SynapseVideo.9513cdaa.js";const C={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:s.RENEW_ACCESS},{userId:S.toString(),type:s.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

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
