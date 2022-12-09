import{S as u}from"./SubmissionPage.0ccd7436.js";import{M as e,b as S,a as g,m as l,c as a}from"./mockProject.2117a066.js";import{cq as E,cr as y,cs as T,a5 as R}from"./index.05d3527e.js";import{S as d}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{g as r}from"./HasAccessV2.977703e6.js";import{a as n}from"./RestrictionInformation.edfbac5a.js";import{M as m}from"./getEndpoint.f1f195f5.js";import{a as C,F as O,j as c}from"./jsx-runtime.43a8fcf9.js";import"./dayjs.min.0cc1d975.js";import"./iframe.f725ca92.js";import"./DateFormatter.76a82bfb.js";import"./utc.662b37b0.js";import"./useDataAccessSubmission.e4a26db5.js";import"./useMutation.ee241b25.js";import"./useInfiniteQuery.059ba1ba.js";import"./useAccessRequirements.6431b8c3.js";import"./queryKeys.e0d3085f.js";import"./SynapseConstants.4792b5b5.js";import"./WarningModal.242f7174.js";import"./Modal.b5f77acd.js";import"./Button.1bf4e27e.js";import"./createWithBsPrefix.5369d369.js";import"./contains.96fd987b.js";import"./inheritsLoose.5ef7e794.js";import"./divWithClassName.ce1df20c.js";import"./index.91cff701.js";import"./index.35ce73ec.js";import"./usePrevious.d85389cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.14fc8eae.js";import"./UserCard.85d537d7.js";import"./IconCopy.eda85edd.js";import"./SkeletonTable.2f3518f6.js";import"./times.0141f5ac.js";import"./toInteger.6147b6bf.js";import"./isSymbol.9cf935a3.js";import"./isArray.ef4abd22.js";import"./Skeleton.2b718cf1.js";import"./styled.76b26431.js";import"./emotion-react.browser.esm.4fa41df1.js";import"./IconSvg.710ae2ef.js";import"./SvgIcon.6442358d.js";import"./Tooltip.9e1c2716.js";import"./useTheme.af9f301b.js";import"./TransitionGroupContext.b91ad5da.js";import"./ToastMessage.0277286d.js";import"./FullWidthAlert.f72a4ef7.js";import"./Alert.52cd8abc.js";import"./hook.21b06627.js";import"./Typography.1c91c940.js";import"./uniqueId.5ab1be4f.js";import"./Overlay.e96f98b3.js";import"./usePopperMarginModifiers.498ed7f0.js";import"./UserOrTeamBadge.ab17001a.js";import"./upperFirst.7c52eb32.js";import"./_baseSlice.50189bc5.js";import"./toLower.7aca9316.js";import"./inherits_browser.06bc9ac8.js";import"./Fade.b7951dc7.js";import"./IconButton.f195eccf.js";import"./ButtonBase.48ba7e09.js";import"./Link.fae97ed4.js";import"./Button.c355b500.js";import"./useGetInfoFromIds.d5b3f724.js";import"./use-deep-compare-effect.esm.73b4fb0f.js";import"./uniq.bdc6ab7c.js";import"./_cacheHas.61ea5ffc.js";import"./without.ba75708a.js";import"./_Set.cd3f97a4.js";import"./_setToArray.a82100c8.js";import"./LoadingScreen.c7fc0bfd.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.847c594c.js";import"./EntityIcon.f1b03715.js";import"./core.esm.01c35439.js";import"./pick.78dd2924.js";import"./_baseClone.89a5046c.js";import"./isEmpty.7ae9700f.js";import"./isEqual.5749f0e5.js";import"./index.browser.a697beda.js";import"./union.2a91053b.js";import"./CustomSelectWidget.bf249796.js";import"./Select-54ac8379.esm.9614dc94.js";import"./isString.a2a21200.js";import"./factory.8aa29487.js";import"./sqlFunctions.c711a305.js";import"./QueryFilter.6069a860.js";import"./useEntity.f604a81d.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.df1a8b11.js";import"./queryUtils.2c3057e1.js";import"./cloneDeep.f634b7fa.js";import"./NoSearchResults.e16db7b4.js";import"./NoData.97d35328.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.edcdce96.js";import"./Dropdown.e99303c5.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.ed906ef1.js";import"./RadioGroup.ca2b8842.js";import"./RangeSlider.9dca656c.js";import"./react-sizeme.3edfc10c.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.3f0a723b.js";import"./Close.55deeabb.js";import"./relativeTime.c0627467.js";import"./useDownloadList.2c1c6acf.js";import"./QueryCount.94ee5a3e.js";import"./react-select.esm.357e96fb.js";import"./IconList.655fe748.js";import"./UserCardList.83c657fc.js";import"./EntityLink.ad279d6b.js";import"./SynapseVideo.51c7a15d.js";import"./FileUpload.c74b6586.js";import"./UserSearchBox.483d6f64.js";const _={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:r.RENEW_ACCESS},{userId:S.toString(),type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

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
`,locationsMap:{demo:{startLoc:{col:56,line:24},endLoc:{col:1,line:33},startBody:{col:56,line:24},endBody:{col:1,line:33}}}}},title:"Synapse/Governance/SubmissionPage",component:u,argTypes:{}},B=i=>C(O,{children:[c("p",{children:"First, use the StackChanger component to switch to the Mock Data stack"}),c(R,{children:c(u,{...i})})]}),I=B.bind({});I.parameters={msw:{handlers:[a.rest.get(`${m}${E(":id")}`,async(i,o,t)=>{const f=j.find(b=>i.params.id===b.id);return o(t.status(200),t.json(f))}),a.rest.get(`${m}${y(":id")}`,async(i,o,t)=>o(t.status(200),t.json(s))),a.rest.get(`${m}${T(":id")}`,async(i,o,t)=>o(t.status(200),t.json({wikiPageId:123,ownerObjectId:s.id,ownerObjectType:"ACCESS_REQUIREMENT"}))),a.rest.get(`${m}/repo/v1/accessRequirement/:id/acl`,async(i,o,t)=>o(t.status(200),t.json({id:i.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:3350396,accessType:["REVIEW_SUBMISSIONS"]}]})))]}};I.args={submissionId:1};const Yt=["Demo"];export{I as Demo,Yt as __namedExportsOrder,Kt as default};
