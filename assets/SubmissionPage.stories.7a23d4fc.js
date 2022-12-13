import{S as u}from"./SubmissionPage.2fd29200.js";import{M as e,b as S,a as g,m as l,c as a}from"./mockProject.baf78e4f.js";import{cs as E,ct as y,cu as T,a8 as R}from"./EntityTypeUtils.9c2483b3.js";import{S as d}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{g as r}from"./HelpPopover.61cc5fbd.js";import{a as n}from"./RestrictionInformation.edfbac5a.js";import{M as m}from"./getEndpoint.f1f195f5.js";import{a as C,F as O,j as c}from"./jsx-runtime.d04151d1.js";import"./dayjs.min.8e3f90a2.js";import"./iframe.d32e0f35.js";import"./DateFormatter.520b6d67.js";import"./utc.360d2184.js";import"./useDataAccessSubmission.520d96c9.js";import"./useMutation.ce8e7b55.js";import"./useInfiniteQuery.10e21598.js";import"./useAccessRequirements.1d9dafa7.js";import"./queryKeys.e0d3085f.js";import"./SynapseConstants.d6ba6a96.js";import"./WarningModal.d2b7e88b.js";import"./Modal.e9042f62.js";import"./Button.a12385d6.js";import"./createWithBsPrefix.f5521544.js";import"./contains.5d34513a.js";import"./inheritsLoose.60fa261c.js";import"./divWithClassName.2e38eee3.js";import"./index.8319c373.js";import"./index.35ce73ec.js";import"./usePrevious.17fca189.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.3ce690e8.js";import"./UserCard.85628e7b.js";import"./IconCopy.f2a5ff5c.js";import"./SkeletonTable.9b156a16.js";import"./times.f1a57eab.js";import"./toInteger.ae0f3fd8.js";import"./isSymbol.4d2b99f3.js";import"./isArray.88add67b.js";import"./Skeleton.b0e23dcf.js";import"./styled.1efff5b8.js";import"./emotion-react.browser.esm.b7b35e3a.js";import"./IconSvg.23552105.js";import"./SvgIcon.d3ec47f0.js";import"./Tooltip.4974d54a.js";import"./useTheme.175bd669.js";import"./TransitionGroupContext.1ef7d36b.js";import"./ToastMessage.7ece14e4.js";import"./FullWidthAlert.8d2b5601.js";import"./Alert.770d73de.js";import"./hook.ba873afd.js";import"./Typography.73bd7049.js";import"./uniqueId.55896be5.js";import"./Overlay.68ebd8b3.js";import"./usePopperMarginModifiers.eac9bbda.js";import"./UserOrTeamBadge.f6190669.js";import"./upperFirst.2275def6.js";import"./_baseSlice.50189bc5.js";import"./toLower.2ff8494a.js";import"./inherits_browser.8fad6dd3.js";import"./Fade.f21ee508.js";import"./IconButton.f2c2856c.js";import"./ButtonBase.3d334067.js";import"./Link.45362a72.js";import"./Button.09b7bba7.js";import"./LoadingScreen.49d7a36d.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.303a0322.js";import"./EntityIcon.2ce1e0a4.js";import"./core.esm.c8184396.js";import"./pick.b8d5c0b8.js";import"./_baseClone.757cef03.js";import"./_Set.dd15e3a3.js";import"./isEmpty.0b253945.js";import"./isEqual.9e44cb41.js";import"./_cacheHas.64f4d1a5.js";import"./_setToArray.a82100c8.js";import"./index.browser.974c266e.js";import"./union.2e94c278.js";import"./without.f73f20c7.js";import"./uniq.485432af.js";import"./CustomSelectWidget.1ea8598c.js";import"./Select-54ac8379.esm.ff4e4b7d.js";import"./isString.c58efe5c.js";import"./factory.5bb06b9a.js";import"./sqlFunctions.6804c648.js";import"./QueryFilter.dd2b8000.js";import"./useEntity.3ee747be.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.fc9cd0a6.js";import"./queryUtils.922f7edc.js";import"./cloneDeep.22f3f931.js";import"./use-deep-compare-effect.esm.3b45ff57.js";import"./NoSearchResults.401bd586.js";import"./NoData.82f8f3c8.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.5969bdd3.js";import"./Dropdown.67b8871d.js";import"./isRequiredForA11y.20ed4857.js";import"./useGetInfoFromIds.630a7a88.js";import"./Checkbox.71e497ee.js";import"./RadioGroup.7c98ddae.js";import"./RangeSlider.e8aa8b17.js";import"./react-sizeme.dba70c21.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.8e402b92.js";import"./Close.76b8fc30.js";import"./relativeTime.d551b21f.js";import"./useDownloadList.f6c00095.js";import"./QueryCount.9058a4e6.js";import"./react-select.esm.7e5659f3.js";import"./IconList.466d6ff9.js";import"./UserCardList.6612b7e7.js";import"./FileUpload.d1f1221e.js";import"./UserSearchBox.0ace33e3.js";import"./EntityLink.3ceb26f0.js";import"./SynapseVideo.dc0ade69.js";const _={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:r.RENEW_ACCESS},{userId:S.toString(),type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

Fix incorrect data.

Please contact us at act@sagebionetworks.org if you have any questions.

Regards,
Access and Compliance Team (ACT)
act@sagebionetworks.org`,etag:"626f9567-bf5f-41e0-9bbf-cf1cd23e6b54",subjectId:"syn12156790",subjectType:n.ENTITY},A={id:"1",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:e.toString(),type:r.GAIN_ACCESS},{userId:S.toString(),type:r.GAIN_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment where software engineers pretend to be the users for whom they are trying to build features.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:n.ENTITY},h={id:"2",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"2",ducFileHandleId:"3997211",irbFileHandleId:"3997213",attachments:["3997211"],accessorChanges:[{userId:e.toString(),type:r.GAIN_ACCESS}],researchProjectSnapshot:{id:"2",accessRequirementId:"9602626",institution:"None",projectLead:"NickACT",intendedDataUseStatement:"Give me data pls",createdOn:"2022-05-10T17:17:14.757Z",modifiedOn:"2022-05-10T17:18:17.913Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"270234fd-da28-4098-8fd2-5693fee82c19"},isRenewalSubmission:!1,submittedOn:"2022-05-10T17:18:28.801Z",modifiedOn:"2022-05-10T17:20:09.356Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.APPROVED,etag:"5fefb2d1-8600-4e1e-96e1-cf57f2ff7fd0",subjectId:"syn12156790",subjectType:n.ENTITY},q={id:"4",accessRequirementId:"9603055",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:"3431185",type:r.RENEW_ACCESS},{userId:"3350396",type:r.GAIN_ACCESS},{userId:"3371908",type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9603055",institution:"Bage Sionetworks",projectLead:"Adam H",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:"3431185",modifiedBy:"3431185",etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:"3431185",modifiedBy:"3431185",state:d.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:n.ENTITY},j=[h,_,A,q],p=l.id,k={id:1,name:"Mocked access requirement",etag:"26489045-3a98-405f-b214-9e1c90208c64",createdOn:"2019-02-06T21:17:25.790Z",modifiedOn:"2020-07-24T18:11:35.323Z",versionNumber:1,subjectIds:[{id:"syn12664802",type:n.ENTITY}],createdBy:"1981374",modifiedBy:"1981374",accessType:g.DOWNLOAD},s={...k,concreteType:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",areOtherAttachmentsRequired:!1,isCertifiedUserRequired:!1,isDUCRequired:!1,isIDUPublic:!1,isIDURequired:!1,ducTemplateFileHandleId:"11111",expirationPeriod:1e3*60*60*24,isIRBApprovalRequired:!1,isValidatedProfileRequired:!1};s.id.toString(),s.createdOn,s.modifiedOn,s.name,s.versionNumber.toString(),e.toString();const Kt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:24},endLoc:{col:1,line:33},startBody:{col:56,line:24},endBody:{col:1,line:33}}}}},title:"Governance/SubmissionPage",component:u,argTypes:{}},B=i=>C(O,{children:[c("p",{children:"First, use the StackChanger component to switch to the Mock Data stack"}),c(R,{children:c(u,{...i})})]}),I=B.bind({});I.parameters={msw:{handlers:[a.rest.get(`${m}${E(":id")}`,async(i,o,t)=>{const f=j.find(b=>i.params.id===b.id);return o(t.status(200),t.json(f))}),a.rest.get(`${m}${y(":id")}`,async(i,o,t)=>o(t.status(200),t.json(s))),a.rest.get(`${m}${T(":id")}`,async(i,o,t)=>o(t.status(200),t.json({wikiPageId:123,ownerObjectId:s.id,ownerObjectType:"ACCESS_REQUIREMENT"}))),a.rest.get(`${m}/repo/v1/accessRequirement/:id/acl`,async(i,o,t)=>o(t.status(200),t.json({id:i.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:3350396,accessType:["REVIEW_SUBMISSIONS"]}]})))]}};I.args={submissionId:1};const Yt=["Demo"];export{I as Demo,Yt as __namedExportsOrder,Kt as default};
