import{S as p}from"./SubmissionPage.93080568.js";import{M as e,e as u,f as s,o as d}from"./mockAccessRequirements.7e89e3e1.js";import{cG as f,L as g,M as E,aj as y}from"./index.6e226ad1.js";import{S as a}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{i as o}from"./AccessRequirementList.3e05cfbf.js";import{a as m}from"./RestrictionInformation.edfbac5a.js";import{M as n}from"./getEndpoint.f1f195f5.js";import{a as l,F as R,j as c}from"./jsx-runtime.8ee42ca4.js";import"./dayjs.min.605c11f2.js";import"./iframe.57558d86.js";import"./DateFormatter.d036e8e7.js";import"./utc.c1f9545e.js";import"./useDataAccessSubmission.b635976c.js";import"./useMutation.ac2022a1.js";import"./useInfiniteQuery.c55a2f77.js";import"./useAccessRequirements.94c7e453.js";import"./queryKeys.e0d3085f.js";import"./SynapseConstants.4792b5b5.js";import"./WarningModal.2c954c9f.js";import"./Modal.5b3f34eb.js";import"./Button.32185a3f.js";import"./createWithBsPrefix.1fcef933.js";import"./contains.3c554215.js";import"./inheritsLoose.c323c5df.js";import"./divWithClassName.4fa3ddf0.js";import"./index.c68764fa.js";import"./index.35ce73ec.js";import"./usePrevious.5f3c6b24.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.b0e44e89.js";import"./UserCard.0ebf5c75.js";import"./IconCopy.fedbd76c.js";import"./SkeletonTable.7edc5c07.js";import"./times.2c182ff5.js";import"./toInteger.c3531c4d.js";import"./isSymbol.4962e9a9.js";import"./isArray.649754a9.js";import"./Skeleton.3af709e7.js";import"./styled.cab085b6.js";import"./emotion-react.browser.esm.755544ae.js";import"./IconSvg.9744025b.js";import"./SvgIcon.e7d9e8d5.js";import"./Tooltip.53b3d1bd.js";import"./useTheme.a650b60c.js";import"./TransitionGroupContext.d40bca5e.js";import"./ToastMessage.43b52073.js";import"./FullWidthAlert.a54f59d5.js";import"./Alert.4adbe9cb.js";import"./hook.b75ee742.js";import"./Typography.dc67c84b.js";import"./uniqueId.d7153eca.js";import"./Overlay.0bda75db.js";import"./usePopperMarginModifiers.78486f26.js";import"./UserOrTeamBadge.1c9fb323.js";import"./upperFirst.81cf9692.js";import"./_baseSlice.50189bc5.js";import"./toLower.f94fcce3.js";import"./inherits_browser.f9eafa70.js";import"./Fade.8d5d2209.js";import"./IconButton.0dfca4e0.js";import"./ButtonBase.442ee4f8.js";import"./Link.f5b0fcd9.js";import"./Button.73b6fb95.js";import"./useGetInfoFromIds.7d1c77e1.js";import"./use-deep-compare-effect.esm.9021590c.js";import"./uniq.c7c3eeb4.js";import"./_cacheHas.81596850.js";import"./without.4399bd14.js";import"./_Set.07f8d416.js";import"./_setToArray.a82100c8.js";import"./LoadingScreen.84b042dc.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.457fb7fa.js";import"./EntityIcon.b3ec5c45.js";import"./core.esm.c4390328.js";import"./pick.5830cd73.js";import"./_baseClone.3c4d3b67.js";import"./isEmpty.befb9208.js";import"./isEqual.16b05841.js";import"./index.browser.ddb6d3b8.js";import"./union.d4e5124f.js";import"./CustomSelectWidget.3ad03376.js";import"./Select-54ac8379.esm.e007142b.js";import"./isString.dee50017.js";import"./factory.1c3ac14e.js";import"./sqlFunctions.e821b8e9.js";import"./QueryFilter.78bffa27.js";import"./useEntity.37947b1b.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.d7245251.js";import"./queryUtils.fd75f684.js";import"./cloneDeep.afef7fdc.js";import"./NoSearchResults.c784f53b.js";import"./NoData.fa2db807.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.a8bb807d.js";import"./Dropdown.fb14a480.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.c4d81bdc.js";import"./RadioGroup.8d8e38c4.js";import"./RangeSlider.fba192e5.js";import"./react-sizeme.38aa0109.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.ad2bd521.js";import"./Close.b6d5cd77.js";import"./relativeTime.5a20f2dd.js";import"./useDownloadList.2d5013fe.js";import"./QueryCount.c03f6405.js";import"./react-select.esm.b272b6ca.js";import"./IconList.4d01a009.js";import"./UserCardList.a770fc3f.js";import"./FileUpload.a3e58444.js";import"./UserSearchBox.95ebc121.js";import"./EntityLink.3f5e6d34.js";import"./SynapseVideo.1f25d323.js";const T={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:o.RENEW_ACCESS},{userId:u.toString(),type:o.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

Fix incorrect data.

Please contact us at act@sagebionetworks.org if you have any questions.

Regards,
Access and Compliance Team (ACT)
act@sagebionetworks.org`,etag:"626f9567-bf5f-41e0-9bbf-cf1cd23e6b54",subjectId:"syn12156790",subjectType:m.ENTITY},C={id:"1",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:e.toString(),type:o.GAIN_ACCESS},{userId:u.toString(),type:o.GAIN_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment where software engineers pretend to be the users for whom they are trying to build features.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:m.ENTITY},_={id:"2",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"2",ducFileHandleId:"3997211",irbFileHandleId:"3997213",attachments:["3997211"],accessorChanges:[{userId:e.toString(),type:o.GAIN_ACCESS}],researchProjectSnapshot:{id:"2",accessRequirementId:"9602626",institution:"None",projectLead:"NickACT",intendedDataUseStatement:"Give me data pls",createdOn:"2022-05-10T17:17:14.757Z",modifiedOn:"2022-05-10T17:18:17.913Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"270234fd-da28-4098-8fd2-5693fee82c19"},isRenewalSubmission:!1,submittedOn:"2022-05-10T17:18:28.801Z",modifiedOn:"2022-05-10T17:20:09.356Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.APPROVED,etag:"5fefb2d1-8600-4e1e-96e1-cf57f2ff7fd0",subjectId:"syn12156790",subjectType:m.ENTITY},A={id:"4",accessRequirementId:"9603055",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:"3431185",type:o.RENEW_ACCESS},{userId:"3350396",type:o.GAIN_ACCESS},{userId:"3371908",type:o.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9603055",institution:"Bage Sionetworks",projectLead:"Adam H",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:"3431185",modifiedBy:"3431185",etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:"3431185",modifiedBy:"3431185",state:a.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:m.ENTITY},O=[_,T,C,A],Gt={parameters:{storySource:{source:`import React from 'react'
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
import { SynapseErrorBoundary } from '../ErrorBanner'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'

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
    ],
  },
}
Demo.args = {
  submissionId: 1,
}
`,locationsMap:{demo:{startLoc:{col:56,line:24},endLoc:{col:1,line:33},startBody:{col:56,line:24},endBody:{col:1,line:33}}}}},title:"Governance/SubmissionPage",component:p,argTypes:{}},h=r=>l(R,{children:[c("p",{children:"First, use the StackChanger component to switch to the Mock Data stack"}),c(y,{children:c(p,{...r})})]}),S=h.bind({});S.parameters={msw:{handlers:[s.rest.get(`${n}${f(":id")}`,async(r,i,t)=>{const I=O.find(b=>r.params.id===b.id);return i(t.status(200),t.json(I))}),s.rest.get(`${n}${g(":id")}`,async(r,i,t)=>i(t.status(200),t.json(d))),s.rest.get(`${n}${E(":id")}`,async(r,i,t)=>i(t.status(200),t.json({wikiPageId:123,ownerObjectId:d.id,ownerObjectType:"ACCESS_REQUIREMENT"}))),s.rest.get(`${n}/repo/v1/accessRequirement/:id/acl`,async(r,i,t)=>i(t.status(200),t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:3350396,accessType:["REVIEW_SUBMISSIONS"]}]})))]}};S.args={submissionId:1};const xt=["Demo"];export{S as Demo,xt as __namedExportsOrder,Gt as default};
