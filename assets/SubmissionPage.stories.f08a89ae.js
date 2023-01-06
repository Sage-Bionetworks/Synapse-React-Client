import{S as u}from"./SubmissionPage.41f9eb9f.js";import{M as e,b as S,a as g,m as l,c as a}from"./mockProject.42f08064.js";import{ct as E,cu as y,cv as T,a9 as R}from"./EntityTypeUtils.02efa7e4.js";import{S as d}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{g as r}from"./HelpPopover.dd19c094.js";import{a as n}from"./RestrictionInformation.edfbac5a.js";import{M as m}from"./getEndpoint.f1f195f5.js";import{a as C,F as O,j as c}from"./jsx-runtime.cae1efce.js";import"./dayjs.min.12a0da3a.js";import"./iframe.61f567f7.js";import"./DateFormatter.70c7721e.js";import"./utc.ceb4b169.js";import"./useDataAccessSubmission.1cb800ec.js";import"./useMutation.0b342796.js";import"./useInfiniteQuery.24bd729c.js";import"./useAccessRequirements.7ffa9aac.js";import"./queryKeys.e0d3085f.js";import"./SynapseConstants.d6ba6a96.js";import"./WarningModal.e97b3e9e.js";import"./Modal.04b387a6.js";import"./Button.7727704e.js";import"./createWithBsPrefix.df7fa21f.js";import"./contains.44df3564.js";import"./inheritsLoose.beda7355.js";import"./divWithClassName.5b633697.js";import"./index.3a565a91.js";import"./index.35ce73ec.js";import"./usePrevious.0a77b2e0.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.6ca94db7.js";import"./UserCard.60a81442.js";import"./IconCopy.158d0c53.js";import"./SkeletonTable.ef7abf61.js";import"./times.df010a42.js";import"./toInteger.3ed0cd2f.js";import"./isSymbol.87b57363.js";import"./isArray.175db850.js";import"./Skeleton.5c3ed137.js";import"./styled.893b6037.js";import"./emotion-react.browser.esm.0f705697.js";import"./IconSvg.6bbb8efe.js";import"./SvgIcon.d977b0c7.js";import"./Tooltip.017a66bf.js";import"./useTheme.6ac8e7e3.js";import"./TransitionGroupContext.bc025aa2.js";import"./ToastMessage.8e99f4ca.js";import"./FullWidthAlert.9d4713f3.js";import"./Alert.e36be6ab.js";import"./hook.9b282447.js";import"./Typography.334f7e13.js";import"./uniqueId.fbe1b45a.js";import"./Overlay.879f6140.js";import"./usePopperMarginModifiers.fb0d551a.js";import"./UserOrTeamBadge.fc3f8497.js";import"./upperFirst.d5f13314.js";import"./_baseSlice.50189bc5.js";import"./toLower.aad2100a.js";import"./inherits_browser.7909c72f.js";import"./Fade.31660acb.js";import"./IconButton.68caccba.js";import"./ButtonBase.9b75ed73.js";import"./Link.c5d35787.js";import"./Button.af90093c.js";import"./LoadingScreen.476e63ba.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.6aa9d3d4.js";import"./EntityIcon.3f8a3670.js";import"./core.esm.e918ee34.js";import"./pick.9031c658.js";import"./_baseClone.aa2f9924.js";import"./_Set.1fb82960.js";import"./isEmpty.9c14b5b1.js";import"./isEqual.9e278194.js";import"./_cacheHas.ea09e558.js";import"./_setToArray.a82100c8.js";import"./index.browser.505b2ef5.js";import"./union.43cc5201.js";import"./without.ff72cb8b.js";import"./uniq.eb931bff.js";import"./CustomSelectWidget.59b7944a.js";import"./Select-54ac8379.esm.e88de38a.js";import"./isString.3cdad83a.js";import"./factory.8a69d8c4.js";import"./sqlFunctions.2fb5266e.js";import"./QueryFilter.aaa17d3c.js";import"./useEntity.140994a4.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.31a50869.js";import"./queryUtils.d83a955a.js";import"./cloneDeep.3a71c714.js";import"./use-deep-compare-effect.esm.f099afc0.js";import"./NoSearchResults.b80cc10f.js";import"./NoData.d1a26232.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.3e4ddfb9.js";import"./Dropdown.a5829948.js";import"./isRequiredForA11y.20ed4857.js";import"./useGetInfoFromIds.83017b65.js";import"./Checkbox.f51c45ab.js";import"./RadioGroup.3095c202.js";import"./RangeSlider.6882fc88.js";import"./react-sizeme.ccf3609b.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.d1a268e5.js";import"./Close.0da26c60.js";import"./relativeTime.e2bd5bcb.js";import"./useDownloadList.ebabec88.js";import"./QueryCount.8660cea9.js";import"./react-select.esm.62a82fbb.js";import"./IconList.5def42e9.js";import"./UserCardList.db0a81ca.js";import"./FileUpload.7be3edb4.js";import"./UserSearchBox.543e3e02.js";import"./EntityLink.a4968051.js";import"./SynapseVideo.1670d9eb.js";const _={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:r.RENEW_ACCESS},{userId:S.toString(),type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

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
