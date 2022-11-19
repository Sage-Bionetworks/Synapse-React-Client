import{S as u}from"./SubmissionPage.e2a45966.js";import{M as e,b as S,a as l,m as g,c as a}from"./mockProject.c9801c2f.js";import{c9 as E,ca as y,cb as T,a8 as R}from"./index.a70ddfd8.js";import{S as d}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{f as r}from"./CardContainerLogic.22dda770.js";import{a as n}from"./RestrictionInformation.edfbac5a.js";import{M as m}from"./StackChanger.617bbad9.js";import{a as C,F as O,j as c}from"./jsx-runtime.f5d212d1.js";import"./dayjs.min.cec940d1.js";import"./iframe.89bb5feb.js";import"./DateFormatter.5d346bec.js";import"./utc.c9b2619e.js";import"./useDataAccessSubmission.0e5cfc1c.js";import"./useMutation.cf0389fb.js";import"./useInfiniteQuery.e08bd0cb.js";import"./useGetAccessRequirement.727ec4cc.js";import"./SynapseConstants.290eab74.js";import"./WarningModal.c5980f0a.js";import"./Modal.4d1b1cfd.js";import"./Button.8170df20.js";import"./createWithBsPrefix.91f140d5.js";import"./contains.ea465217.js";import"./inheritsLoose.6f21ccd9.js";import"./divWithClassName.5b1e6cb1.js";import"./index.9c9305ea.js";import"./index.35ce73ec.js";import"./usePrevious.1e019527.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.e98911da.js";import"./UserCard.ecc0d7d9.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.2e6c109a.js";import"./SkeletonTable.0d96f34c.js";import"./times.3c390ae7.js";import"./toInteger.66a06a81.js";import"./isSymbol.4571438c.js";import"./isArray.b1617f44.js";import"./Skeleton.f056e7cd.js";import"./styled.f405056b.js";import"./emotion-react.browser.esm.6d1cbddb.js";import"./IconSvg.379fb95f.js";import"./TransitionGroupContext.7656eb12.js";import"./Tooltip.b3e9245c.js";import"./createSvgIcon.2626c7dc.js";import"./useTheme.e9ed9b1c.js";import"./utils.0b8153da.js";import"./InfoOutlined.1ca50192.js";import"./ToastMessage.276b1811.js";import"./FullWidthAlert.c92729a8.js";import"./Alert.257c6bb8.js";import"./hook.70591bc2.js";import"./Typography.513a1f2d.js";import"./uniqueId.7666cadc.js";import"./Overlay.9ab1c420.js";import"./usePopperMarginModifiers.35995d93.js";import"./UserOrTeamBadge.4a4f6dfb.js";import"./upperFirst.d7f16d12.js";import"./_baseSlice.50189bc5.js";import"./toLower.d9f35e38.js";import"./inherits_browser.d92eb4a0.js";import"./Link.3fccb4a8.js";import"./Button.25b7a851.js";import"./ButtonBase.5d7dfd7c.js";import"./sqlFunctions.0d8a440a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.15395a8e.js";import"./useGetInfoFromIds.65649506.js";import"./use-deep-compare-effect.esm.01e563cf.js";import"./uniq.6211bca0.js";import"./_cacheHas.30de5535.js";import"./without.4bc104a5.js";import"./_Set.90191ba0.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.4ab26323.js";import"./queryUtils.0b669d66.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.cdc6b63c.js";import"./_baseClone.f08117cf.js";import"./_getTag.3dcbc9d3.js";import"./NoSearchResults.ad7e4660.js";import"./NoData.ec1f63e9.js";import"./unCamelCase.07e38083.js";import"./useEntity.b34206e4.js";import"./pick.42efd8de.js";import"./isEqual.4e266751.js";import"./ElementWithTooltip.4d688dc9.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.913e2bbd.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.aa087756.js";import"./RadioGroup.1044ef08.js";import"./RangeSlider.4626f0f7.js";import"./factory.89112c6a.js";import"./react-sizeme.198cf4ef.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.08b51276.js";import"./SelectionCriteriaPill.fc8715f2.js";import"./Close.13308156.js";import"./react-select.esm.53fc7918.js";import"./Select-54ac8379.esm.b455933c.js";import"./CustomSelectWidget.794351ea.js";import"./index.browser.49922a6a.js";import"./react-intersection-observer.esm.4e900592.js";import"./EntityIcon.55f24a87.js";import"./core.esm.5f2a8c9d.js";import"./isEmpty.b089c1ff.js";import"./union.c830eef2.js";import"./isString.a83352a5.js";import"./relativeTime.6d8f84b5.js";import"./useGetDownloadListStatistics.69dc0d50.js";import"./QueryCount.78565120.js";import"./FileUpload.bb85c47f.js";import"./UserSearchBox.8ce39971.js";import"./EntityLink.13c84750.js";import"./SynapseVideo.ffab6e8c.js";import"./IconList.6319a730.js";import"./UserCardList.4517f10a.js";const _={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:r.RENEW_ACCESS},{userId:S.toString(),type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

Fix incorrect data.

Please contact us at act@sagebionetworks.org if you have any questions.

Regards,
Access and Compliance Team (ACT)
act@sagebionetworks.org`,etag:"626f9567-bf5f-41e0-9bbf-cf1cd23e6b54",subjectId:"syn12156790",subjectType:n.ENTITY},A={id:"1",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:e.toString(),type:r.GAIN_ACCESS},{userId:S.toString(),type:r.GAIN_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment where software engineers pretend to be the users for whom they are trying to build features.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:n.ENTITY},h={id:"2",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"2",ducFileHandleId:"3997211",irbFileHandleId:"3997213",attachments:["3997211"],accessorChanges:[{userId:e.toString(),type:r.GAIN_ACCESS}],researchProjectSnapshot:{id:"2",accessRequirementId:"9602626",institution:"None",projectLead:"NickACT",intendedDataUseStatement:"Give me data pls",createdOn:"2022-05-10T17:17:14.757Z",modifiedOn:"2022-05-10T17:18:17.913Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"270234fd-da28-4098-8fd2-5693fee82c19"},isRenewalSubmission:!1,submittedOn:"2022-05-10T17:18:28.801Z",modifiedOn:"2022-05-10T17:20:09.356Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.APPROVED,etag:"5fefb2d1-8600-4e1e-96e1-cf57f2ff7fd0",subjectId:"syn12156790",subjectType:n.ENTITY},k={id:"4",accessRequirementId:"9603055",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:"3431185",type:r.RENEW_ACCESS},{userId:"3350396",type:r.GAIN_ACCESS},{userId:"3371908",type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9603055",institution:"Bage Sionetworks",projectLead:"Adam H",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:"3431185",modifiedBy:"3431185",etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:"3431185",modifiedBy:"3431185",state:d.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:n.ENTITY},q=[h,_,A,k],p=g.id,j={id:1,name:"Mocked access requirement",etag:"26489045-3a98-405f-b214-9e1c90208c64",createdOn:"2019-02-06T21:17:25.790Z",modifiedOn:"2020-07-24T18:11:35.323Z",versionNumber:1,subjectIds:[{id:"syn12664802",type:n.ENTITY}],createdBy:"1981374",modifiedBy:"1981374",accessType:l.DOWNLOAD},s={...j,concreteType:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",areOtherAttachmentsRequired:!1,isCertifiedUserRequired:!1,isDUCRequired:!1,isIDUPublic:!1,isIDURequired:!1,ducTemplateFileHandleId:"11111",expirationPeriod:1e3*60*60*24,isIRBApprovalRequired:!1,isValidatedProfileRequired:!1};s.id.toString(),s.createdOn,s.modifiedOn,s.name,s.versionNumber.toString(),e.toString();const Ft={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:25},endLoc:{col:1,line:34},startBody:{col:56,line:25},endBody:{col:1,line:34}}}}},title:"Synapse/Governance/SubmissionPage",component:u,argTypes:{}},B=i=>C(O,{children:[c("p",{children:"First, use the StackChanger component to switch to the Mock Data stack"}),c(R,{children:c(u,{...i})})]}),I=B.bind({});I.parameters={msw:{handlers:[a.rest.get(`${m}${E(":id")}`,async(i,o,t)=>{const f=q.find(b=>i.params.id===b.id);return o(t.status(200),t.json(f))}),a.rest.get(`${m}${y(":id")}`,async(i,o,t)=>o(t.status(200),t.json(s))),a.rest.get(`${m}${T(":id")}`,async(i,o,t)=>o(t.status(200),t.json({wikiPageId:123,ownerObjectId:s.id,ownerObjectType:"ACCESS_REQUIREMENT"}))),a.rest.get(`${m}/repo/v1/accessRequirement/:id/acl`,async(i,o,t)=>o(t.status(200),t.json({id:i.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:3350396,accessType:["REVIEW_SUBMISSIONS"]}]})))]}};I.args={submissionId:1};const $t=["Demo"];export{I as Demo,$t as __namedExportsOrder,Ft as default};
