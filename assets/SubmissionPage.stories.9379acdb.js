import{S as u}from"./SubmissionPage.14b1180e.js";import{M as e,b as S,a as l,m as g,c as a}from"./mockProject.f5b53c10.js";import{c9 as E,ca as y,cb as T,a8 as R}from"./index.90ee2b5e.js";import{S as d}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{f as r}from"./CardContainerLogic.13da2bdf.js";import{a as n}from"./RestrictionInformation.edfbac5a.js";import{M as m}from"./StackChanger.79f393e8.js";import{a as C,F as O,j as c}from"./jsx-runtime.0db21b62.js";import"./dayjs.min.8ecbf49a.js";import"./iframe.55601028.js";import"./DateFormatter.0a316f6d.js";import"./utc.07f25525.js";import"./useDataAccessSubmission.99fc155e.js";import"./useMutation.4b8ac845.js";import"./useInfiniteQuery.7f7301d1.js";import"./useGetAccessRequirement.7d6d76d6.js";import"./SynapseConstants.290eab74.js";import"./WarningModal.d9006211.js";import"./Modal.6f969a6f.js";import"./Button.8dd67db9.js";import"./createWithBsPrefix.cf2ded3d.js";import"./contains.18910bdc.js";import"./inheritsLoose.39471a71.js";import"./divWithClassName.9349f2fc.js";import"./index.9eb164f8.js";import"./index.35ce73ec.js";import"./usePrevious.0ecbef3d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.ada5a7ee.js";import"./UserCard.dbd6791d.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.1118163b.js";import"./SkeletonTable.95f35468.js";import"./times.ca2e0d7b.js";import"./toInteger.82ea438a.js";import"./isSymbol.70fe8399.js";import"./isArray.051b97b8.js";import"./Skeleton.99622f82.js";import"./styled.04f8a540.js";import"./emotion-react.browser.esm.e326a50f.js";import"./IconSvg.7ea71104.js";import"./TransitionGroupContext.59a59a19.js";import"./Tooltip.137fb27a.js";import"./createSvgIcon.2669ec85.js";import"./useTheme.6f96ca98.js";import"./utils.8a121841.js";import"./InfoOutlined.c6dcbd99.js";import"./ToastMessage.10c98715.js";import"./FullWidthAlert.257257d5.js";import"./Alert.476644bc.js";import"./hook.d21c687b.js";import"./Typography.fc802d4f.js";import"./uniqueId.9af27e73.js";import"./Overlay.8ef738fa.js";import"./usePopperMarginModifiers.6d23a00d.js";import"./UserOrTeamBadge.6b5bd345.js";import"./upperFirst.f0df8966.js";import"./_baseSlice.50189bc5.js";import"./toLower.b18d0dfc.js";import"./inherits_browser.149b1059.js";import"./Fade.002da28b.js";import"./Link.400989ff.js";import"./Button.c393a679.js";import"./ButtonBase.9b5b9b75.js";import"./sqlFunctions.89b7555a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.982fc5d7.js";import"./useGetInfoFromIds.7b424b86.js";import"./use-deep-compare-effect.esm.f1067dd3.js";import"./uniq.f7024654.js";import"./_cacheHas.5f692c9b.js";import"./without.a296bf52.js";import"./_Set.a3714456.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.6a064a63.js";import"./queryUtils.634fcbc9.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.3bba581d.js";import"./_baseClone.5ce35f9c.js";import"./_getTag.1403c71b.js";import"./NoSearchResults.92880f87.js";import"./NoData.e3ffa92d.js";import"./unCamelCase.07e38083.js";import"./useEntity.2b72a417.js";import"./pick.b1b36568.js";import"./isEqual.b5a5f095.js";import"./ElementWithTooltip.b9619929.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.dca80b57.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.d6973e75.js";import"./RadioGroup.5a5eea3b.js";import"./RangeSlider.9b930fc7.js";import"./factory.81f3a36b.js";import"./react-sizeme.569169d0.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.b865cf66.js";import"./SelectionCriteriaPill.099cfef4.js";import"./Close.e0c1c246.js";import"./react-select.esm.3ac9a570.js";import"./Select-54ac8379.esm.71de503d.js";import"./CustomSelectWidget.00ee46bf.js";import"./index.browser.0747d754.js";import"./react-intersection-observer.esm.0813a3ec.js";import"./EntityIcon.0216fd97.js";import"./core.esm.e5ea6d81.js";import"./isEmpty.16f2a54d.js";import"./union.09fb6ed0.js";import"./isString.2911fd8b.js";import"./relativeTime.181b1899.js";import"./useGetDownloadListStatistics.b1713c45.js";import"./QueryCount.c304061b.js";import"./FileUpload.88917cdc.js";import"./UserSearchBox.140d0adb.js";import"./EntityLink.af6b09fe.js";import"./SynapseVideo.2104adbb.js";import"./IconList.6b975d1e.js";import"./UserCardList.3cd94795.js";const _={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:r.RENEW_ACCESS},{userId:S.toString(),type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

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
