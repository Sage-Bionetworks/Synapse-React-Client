import{S as u}from"./SubmissionPage.85ec698c.js";import{M as e,b as S,a as l,m as g,c as a}from"./mockProject.bd18fa6b.js";import{c9 as E,ca as y,cb as T,a8 as R}from"./index.22d2125e.js";import{S as d}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{f as r}from"./CardContainerLogic.a44526c0.js";import{a as n}from"./RestrictionInformation.edfbac5a.js";import{M as m}from"./StackChanger.cbe0126d.js";import{a as C,F as O,j as c}from"./jsx-runtime.31268528.js";import"./dayjs.min.fa03b112.js";import"./iframe.c7567c2d.js";import"./DateFormatter.5cb85eed.js";import"./utc.8b3d5b7c.js";import"./useDataAccessSubmission.423bec4d.js";import"./useMutation.9a2bc2f1.js";import"./useInfiniteQuery.c6eed216.js";import"./useGetAccessRequirement.b2c1473c.js";import"./SynapseConstants.290eab74.js";import"./WarningModal.0aedfe85.js";import"./Modal.befa9583.js";import"./Button.3eb9449f.js";import"./createWithBsPrefix.4103f011.js";import"./contains.861fc71b.js";import"./inheritsLoose.58664c58.js";import"./divWithClassName.a05c647c.js";import"./index.d5f32449.js";import"./index.35ce73ec.js";import"./usePrevious.638ecd05.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.f228876d.js";import"./UserCard.0f3fab61.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.47bd251d.js";import"./SkeletonTable.8b5a914e.js";import"./times.97f8800e.js";import"./toInteger.93a4e178.js";import"./isSymbol.32cdb41a.js";import"./isArray.e45ce668.js";import"./Skeleton.855acef4.js";import"./styled.0bfd4c69.js";import"./emotion-react.browser.esm.d60ec8ed.js";import"./IconSvg.1a319e23.js";import"./TransitionGroupContext.43d26755.js";import"./Tooltip.5176c19c.js";import"./createSvgIcon.f7c19e7b.js";import"./useTheme.910eaec3.js";import"./utils.033d23ab.js";import"./InfoOutlined.1c97ae19.js";import"./ToastMessage.a10582c4.js";import"./FullWidthAlert.0f9fa90d.js";import"./Alert.d1d035f0.js";import"./hook.78e5dc31.js";import"./Typography.7deb443e.js";import"./uniqueId.23cb78c9.js";import"./Overlay.4f4ca7b6.js";import"./usePopperMarginModifiers.7853b5dc.js";import"./UserOrTeamBadge.86c3eff2.js";import"./upperFirst.99d19ae0.js";import"./_baseSlice.50189bc5.js";import"./toLower.ff19f093.js";import"./inherits_browser.b403e899.js";import"./Fade.4ca82ca8.js";import"./Link.df009298.js";import"./Button.5756842c.js";import"./ButtonBase.34890086.js";import"./sqlFunctions.d0deafe9.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.90a1a7eb.js";import"./useGetInfoFromIds.5e8bec87.js";import"./use-deep-compare-effect.esm.b33b0620.js";import"./uniq.f8b89bad.js";import"./_cacheHas.93c5766b.js";import"./without.6ba87f76.js";import"./_Set.87305464.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.5627db8b.js";import"./queryUtils.3c459226.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.edfd3e7e.js";import"./_baseClone.dc0316e6.js";import"./_getTag.005e7532.js";import"./NoSearchResults.9e332b6e.js";import"./NoData.aa30cbc5.js";import"./unCamelCase.07e38083.js";import"./useEntity.e61a2fe2.js";import"./pick.a80537e5.js";import"./isEqual.81f70372.js";import"./ElementWithTooltip.c6b5d0bb.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.8938a9f4.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b2ac944e.js";import"./RadioGroup.b4a59787.js";import"./RangeSlider.cbd19d00.js";import"./factory.f5aa0ef3.js";import"./react-sizeme.631dea86.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.f5aeb847.js";import"./SelectionCriteriaPill.5c36fa2b.js";import"./Close.a4816efa.js";import"./react-select.esm.61342118.js";import"./Select-54ac8379.esm.73afc0b0.js";import"./CustomSelectWidget.695d030e.js";import"./index.browser.62786e23.js";import"./react-intersection-observer.esm.12900737.js";import"./EntityIcon.69a6cf7b.js";import"./core.esm.7a354c66.js";import"./isEmpty.7ec601bf.js";import"./union.8e76d114.js";import"./isString.53ba3e66.js";import"./relativeTime.d35cf3f2.js";import"./useGetDownloadListStatistics.3d14c4e1.js";import"./QueryCount.2f8a0495.js";import"./FileUpload.399fb39e.js";import"./UserSearchBox.0e6910a6.js";import"./EntityLink.fd06899a.js";import"./SynapseVideo.7d3137d8.js";import"./IconList.bef16bba.js";import"./UserCardList.3cb51c31.js";const _={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:r.RENEW_ACCESS},{userId:S.toString(),type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

Fix incorrect data.

Please contact us at act@sagebionetworks.org if you have any questions.

Regards,
Access and Compliance Team (ACT)
act@sagebionetworks.org`,etag:"626f9567-bf5f-41e0-9bbf-cf1cd23e6b54",subjectId:"syn12156790",subjectType:n.ENTITY},A={id:"1",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:e.toString(),type:r.GAIN_ACCESS},{userId:S.toString(),type:r.GAIN_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment where software engineers pretend to be the users for whom they are trying to build features.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:n.ENTITY},h={id:"2",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"2",ducFileHandleId:"3997211",irbFileHandleId:"3997213",attachments:["3997211"],accessorChanges:[{userId:e.toString(),type:r.GAIN_ACCESS}],researchProjectSnapshot:{id:"2",accessRequirementId:"9602626",institution:"None",projectLead:"NickACT",intendedDataUseStatement:"Give me data pls",createdOn:"2022-05-10T17:17:14.757Z",modifiedOn:"2022-05-10T17:18:17.913Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"270234fd-da28-4098-8fd2-5693fee82c19"},isRenewalSubmission:!1,submittedOn:"2022-05-10T17:18:28.801Z",modifiedOn:"2022-05-10T17:20:09.356Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.APPROVED,etag:"5fefb2d1-8600-4e1e-96e1-cf57f2ff7fd0",subjectId:"syn12156790",subjectType:n.ENTITY},k={id:"4",accessRequirementId:"9603055",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:"3431185",type:r.RENEW_ACCESS},{userId:"3350396",type:r.GAIN_ACCESS},{userId:"3371908",type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9603055",institution:"Bage Sionetworks",projectLead:"Adam H",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:"3431185",modifiedBy:"3431185",etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:"3431185",modifiedBy:"3431185",state:d.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:n.ENTITY},q=[h,_,A,k],p=g.id,j={id:1,name:"Mocked access requirement",etag:"26489045-3a98-405f-b214-9e1c90208c64",createdOn:"2019-02-06T21:17:25.790Z",modifiedOn:"2020-07-24T18:11:35.323Z",versionNumber:1,subjectIds:[{id:"syn12664802",type:n.ENTITY}],createdBy:"1981374",modifiedBy:"1981374",accessType:l.DOWNLOAD},s={...j,concreteType:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",areOtherAttachmentsRequired:!1,isCertifiedUserRequired:!1,isDUCRequired:!1,isIDUPublic:!1,isIDURequired:!1,ducTemplateFileHandleId:"11111",expirationPeriod:1e3*60*60*24,isIRBApprovalRequired:!1,isValidatedProfileRequired:!1};s.id.toString(),s.createdOn,s.modifiedOn,s.name,s.versionNumber.toString(),e.toString();const $t={parameters:{storySource:{source:`import React from 'react'
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
import { getHandlers } from '../../../mocks/msw/handlers'
import { MOCK_REPO_ORIGIN } from '../StackChanger'
import { SynapseErrorBoundary } from '../ErrorBanner'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/Governance/SubmissionPage',
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
`,locationsMap:{demo:{startLoc:{col:56,line:25},endLoc:{col:1,line:34},startBody:{col:56,line:25},endBody:{col:1,line:34}}}}},title:"Synapse/Governance/SubmissionPage",component:u,argTypes:{}},B=i=>C(O,{children:[c("p",{children:"First, use the StackChanger component to switch to the Mock Data stack"}),c(R,{children:c(u,{...i})})]}),I=B.bind({});I.parameters={msw:{handlers:[a.rest.get(`${m}${E(":id")}`,async(i,o,t)=>{const f=q.find(b=>i.params.id===b.id);return o(t.status(200),t.json(f))}),a.rest.get(`${m}${y(":id")}`,async(i,o,t)=>o(t.status(200),t.json(s))),a.rest.get(`${m}${T(":id")}`,async(i,o,t)=>o(t.status(200),t.json({wikiPageId:123,ownerObjectId:s.id,ownerObjectType:"ACCESS_REQUIREMENT"}))),a.rest.get(`${m}/repo/v1/accessRequirement/:id/acl`,async(i,o,t)=>o(t.status(200),t.json({id:i.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:3350396,accessType:["REVIEW_SUBMISSIONS"]}]})))]}};I.args={submissionId:1};const Ht=["Demo"];export{I as Demo,Ht as __namedExportsOrder,$t as default};
