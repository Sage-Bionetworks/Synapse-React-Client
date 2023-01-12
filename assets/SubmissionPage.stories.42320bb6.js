import{S as u}from"./SubmissionPage.26f49214.js";import{a as i}from"./index.64232678.js";import{cL as p,L as l,M as g,aj as y}from"./index.004e53d6.js";import{S as a}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{i as s}from"./AccessRequirementList.3ac35bdf.js";import{a as m}from"./RestrictionInformation.edfbac5a.js";import{M as e,e as S,l as d}from"./mockAccessRequirements.d39779f8.js";import{M as n}from"./getEndpoint.f1f195f5.js";import{g as E,m as R}from"./mockRejectionReasonsTableQueryResultBundle.6006b743.js";import{a as T,F as _,j as c}from"./jsx-runtime.30b0b063.js";import"./dayjs.min.bbadf1b7.js";import"./iframe.7f20f630.js";import"./DateFormatter.b0142474.js";import"./utc.ab78fb46.js";import"./useDataAccessSubmission.f542be94.js";import"./useMutation.8683269e.js";import"./useInfiniteQuery.26f32ba1.js";import"./useAccessRequirements.c825da38.js";import"./queryKeys.f96c2872.js";import"./SynapseConstants.aef18750.js";import"./WarningModal.2fe34102.js";import"./Modal.4b6f87a4.js";import"./Button.4f0daaa4.js";import"./createWithBsPrefix.67525ed1.js";import"./contains.4aff3092.js";import"./inheritsLoose.acddc658.js";import"./divWithClassName.fc6b9e1a.js";import"./index.a3b83451.js";import"./index.35ce73ec.js";import"./usePrevious.407c8514.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.0fac0f63.js";import"./UserCard.8f93d708.js";import"./IconCopy.b0b77e27.js";import"./SkeletonTable.d4ad4639.js";import"./times.9e428882.js";import"./toInteger.ac8d0258.js";import"./isSymbol.a68e106b.js";import"./isArray.1ceec0fc.js";import"./Skeleton.12921ce3.js";import"./styled.4350a8f3.js";import"./emotion-react.browser.esm.f592d4ba.js";import"./IconSvg.9b38face.js";import"./SvgIcon.a1d78dff.js";import"./Tooltip.f326ea8a.js";import"./useTheme.bbb702a0.js";import"./TransitionGroupContext.4dd5d6a9.js";import"./ToastMessage.0ad637d7.js";import"./FullWidthAlert.12957b45.js";import"./hook.82358120.js";import"./Typography.e0f3806f.js";import"./uniqueId.11b542f1.js";import"./toString.0784e7f5.js";import"./Overlay.6a310082.js";import"./usePopperMarginModifiers.ff236d51.js";import"./UserOrTeamBadge.2750084f.js";import"./RejectDataAccessRequestModal.403f01a6.js";import"./useGetQueryResultBundle.eca6bae5.js";import"./immutable.es.28139da3.js";import"./LoadingScreen.667d64ee.js";import"./DialogContent.b8fd3391.js";import"./Modal.b6ac406d.js";import"./Fade.13693e7f.js";import"./Paper.4952611a.js";import"./Stack.e4c8fa9b.js";import"./Box.1e407091.js";import"./IconButton.32d1d9ea.js";import"./ButtonBase.32a6d369.js";import"./Button.9f139960.js";import"./FormLabel.5e5cadaa.js";import"./isMuiElement.a0d4a619.js";import"./TextField.c6b6b06c.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.67812265.js";import"./List.60509602.js";import"./upperFirst.3c657cda.js";import"./_baseSlice.50189bc5.js";import"./toLower.a826cbe7.js";import"./inherits_browser.faaa32a1.js";import"./Link.671fdc30.js";import"./useGetInfoFromIds.31a24e96.js";import"./use-deep-compare-effect.esm.482de782.js";import"./uniq.4b667121.js";import"./_cacheHas.9d395393.js";import"./without.353d343d.js";import"./_Set.24e6e8e7.js";import"./_setToArray.a82100c8.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.2bc67909.js";import"./EntityIcon.14de104d.js";import"./core.esm.edaed8bc.js";import"./pick.b621d971.js";import"./_baseClone.0658ca9d.js";import"./isEmpty.2b33ff63.js";import"./isEqual.69f0b7e9.js";import"./index.browser.1f9bb947.js";import"./union.b9c69b1b.js";import"./CustomSelectWidget.37b0e148.js";import"./Select-54ac8379.esm.dc31b5d3.js";import"./isString.04e79eb0.js";import"./factory.1406cd1d.js";import"./sqlFunctions.1f9ba8fc.js";import"./QueryFilter.24d6853f.js";import"./useEntity.12f188e0.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.22d6495c.js";import"./queryUtils.8f39e513.js";import"./cloneDeep.0550986a.js";import"./NoSearchResults.f96c3e8d.js";import"./NoData.a592f593.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./ElementWithTooltip.80ed4983.js";import"./Dropdown.eeff7c4d.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.805098d5.js";import"./RadioGroup.e718da9a.js";import"./RangeSlider.27c005be.js";import"./react-sizeme.bc565794.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.b3bc1b97.js";import"./Close.5ba53f36.js";import"./relativeTime.9e7dcaa0.js";import"./useDownloadList.3c79b040.js";import"./QueryCount.6252e08a.js";import"./react-select.esm.8c0efa9b.js";import"./IconList.691fbf90.js";import"./UserCardList.09054a1e.js";import"./FileUpload.e6793fd9.js";import"./UserSearchBox.47fd0364.js";import"./EntityLink.e6477167.js";import"./ErrorChip.2b68e6ed.js";import"./SynapseVideo.f01de7a7.js";const C={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:s.RENEW_ACCESS},{userId:S.toString(),type:s.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

Fix incorrect data.

Please contact us at act@sagebionetworks.org if you have any questions.

Regards,
Access and Compliance Team (ACT)
act@sagebionetworks.org`,etag:"626f9567-bf5f-41e0-9bbf-cf1cd23e6b54",subjectId:"syn12156790",subjectType:m.ENTITY},O={id:"1",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:e.toString(),type:s.GAIN_ACCESS},{userId:S.toString(),type:s.GAIN_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment where software engineers pretend to be the users for whom they are trying to build features.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:m.ENTITY},A={id:"2",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"2",ducFileHandleId:"3997211",irbFileHandleId:"3997213",attachments:["3997211"],accessorChanges:[{userId:e.toString(),type:s.GAIN_ACCESS}],researchProjectSnapshot:{id:"2",accessRequirementId:"9602626",institution:"None",projectLead:"NickACT",intendedDataUseStatement:"Give me data pls",createdOn:"2022-05-10T17:17:14.757Z",modifiedOn:"2022-05-10T17:18:17.913Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"270234fd-da28-4098-8fd2-5693fee82c19"},isRenewalSubmission:!1,submittedOn:"2022-05-10T17:18:28.801Z",modifiedOn:"2022-05-10T17:20:09.356Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.APPROVED,etag:"5fefb2d1-8600-4e1e-96e1-cf57f2ff7fd0",subjectId:"syn12156790",subjectType:m.ENTITY},j={id:"4",accessRequirementId:"9603055",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:"3431185",type:s.RENEW_ACCESS},{userId:"3350396",type:s.GAIN_ACCESS},{userId:"3371908",type:s.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9603055",institution:"Bage Sionetworks",projectLead:"Adam H",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:"3431185",modifiedBy:"3431185",etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:"3431185",modifiedBy:"3431185",state:a.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:m.ENTITY},h=[A,C,O,j],sr={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:26},endLoc:{col:1,line:35},startBody:{col:56,line:26},endBody:{col:1,line:35}}}}},title:"Governance/SubmissionPage",component:u,argTypes:{}},k=r=>T(_,{children:[c("p",{children:"First, use the StackChanger component to switch to the Mock Data stack"}),c(y,{children:c(u,{...r})})]}),I=k.bind({});I.parameters={msw:{handlers:[i.rest.get(`${n}${p(":id")}`,async(r,o,t)=>{const b=h.find(f=>r.params.id===f.id);return o(t.status(200),t.json(b))}),i.rest.get(`${n}${l(":id")}`,async(r,o,t)=>o(t.status(200),t.json(d))),i.rest.get(`${n}${g(":id")}`,async(r,o,t)=>o(t.status(200),t.json({wikiPageId:123,ownerObjectId:d.id,ownerObjectType:"ACCESS_REQUIREMENT"}))),i.rest.get(`${n}/repo/v1/accessRequirement/:id/acl`,async(r,o,t)=>o(t.status(200),t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:3350396,accessType:["REVIEW_SUBMISSIONS"]}]}))),...E(R),i.rest.put(`${n}${p(":id")}`,async(r,o,t)=>o(t.status(201),t.json(await r.json())))]}};I.args={submissionId:1};const ir=["Demo"];export{I as Demo,ir as __namedExportsOrder,sr as default};
