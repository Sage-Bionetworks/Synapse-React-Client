import{S as u}from"./SubmissionPage.158952b0.js";import{M as e,b as S,a as g,m as l,c as a}from"./mockProject.93d01b3c.js";import{co as E,cp as y,cq as T,a5 as R}from"./index.a4d7c90b.js";import{S as d}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{g as r}from"./HasAccessV2.d3489065.js";import{a as n}from"./RestrictionInformation.edfbac5a.js";import{M as m}from"./getEndpoint.f1f195f5.js";import{a as C,F as O,j as c}from"./jsx-runtime.e6c7cb0f.js";import"./dayjs.min.b6e54d5f.js";import"./iframe.62902f49.js";import"./DateFormatter.1327d068.js";import"./utc.88a72a89.js";import"./useDataAccessSubmission.b417b0a8.js";import"./useMutation.5ddf68a2.js";import"./useInfiniteQuery.c9325a79.js";import"./useAccessRequirements.b54ba1ba.js";import"./SynapseConstants.4792b5b5.js";import"./WarningModal.9c1c6b58.js";import"./Modal.65e1d9b7.js";import"./Button.55945b82.js";import"./createWithBsPrefix.d521861c.js";import"./contains.d4d1085c.js";import"./inheritsLoose.bbace147.js";import"./divWithClassName.f3083196.js";import"./index.2be90583.js";import"./index.35ce73ec.js";import"./usePrevious.c8a35040.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.0aadaf3e.js";import"./UserCard.d526f464.js";import"./IconCopy.137bbf05.js";import"./SkeletonTable.eb79cb63.js";import"./times.f6524aef.js";import"./toInteger.e34afcf8.js";import"./isSymbol.361bd2a3.js";import"./isArray.d7f4d705.js";import"./Skeleton.fe2a8391.js";import"./styled.defe1bf4.js";import"./emotion-react.browser.esm.0fa712d1.js";import"./IconSvg.7c6c26ba.js";import"./SvgIcon.277e4012.js";import"./Tooltip.b8c59786.js";import"./useTheme.78ea417a.js";import"./TransitionGroupContext.9be55353.js";import"./ToastMessage.7470eb0d.js";import"./FullWidthAlert.194d0790.js";import"./Alert.dd9a8045.js";import"./hook.0a44a4bc.js";import"./Typography.491b6426.js";import"./uniqueId.3a766a50.js";import"./Overlay.eaf422e6.js";import"./usePopperMarginModifiers.667559d9.js";import"./UserOrTeamBadge.00bb9390.js";import"./upperFirst.1293e5ca.js";import"./_baseSlice.50189bc5.js";import"./toLower.5f72e108.js";import"./inherits_browser.8628fdf9.js";import"./Fade.43ac51c5.js";import"./IconButton.3458b12d.js";import"./ButtonBase.c32891f3.js";import"./Link.f733bec4.js";import"./Button.6ec7c4e8.js";import"./queryKeys.e0d3085f.js";import"./useGetInfoFromIds.8fc7a325.js";import"./use-deep-compare-effect.esm.28d3327d.js";import"./uniq.63cce7cd.js";import"./_cacheHas.006794e6.js";import"./without.b4578f3b.js";import"./_Set.b19d8fcb.js";import"./_setToArray.a82100c8.js";import"./LoadingScreen.1b074d5e.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.418c0465.js";import"./EntityIcon.f4576c33.js";import"./core.esm.2df00ce1.js";import"./pick.7101f3bc.js";import"./_baseClone.d1846d14.js";import"./isEmpty.ec592bbb.js";import"./isEqual.c4ae851f.js";import"./index.browser.5f261a1c.js";import"./union.a20aff29.js";import"./CustomSelectWidget.c4dea705.js";import"./Select-54ac8379.esm.1e9a4ed4.js";import"./isString.1a1855ef.js";import"./factory.18e4f30f.js";import"./sqlFunctions.1444b517.js";import"./QueryFilter.a15418f9.js";import"./useEntity.ddbaa66e.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.57c4a397.js";import"./queryUtils.db44d7f3.js";import"./cloneDeep.3598e4db.js";import"./NoSearchResults.f1ecdb1f.js";import"./NoData.4c563b5f.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.e35f48b6.js";import"./Dropdown.616646f9.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.cb4408e3.js";import"./RadioGroup.e66c93e6.js";import"./RangeSlider.cbd6b95d.js";import"./react-sizeme.b041d2db.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.cd8a0bef.js";import"./Close.d9d46688.js";import"./relativeTime.877ebaae.js";import"./useDownloadList.69656941.js";import"./QueryCount.c9193378.js";import"./react-select.esm.21528652.js";import"./IconList.e12dc649.js";import"./UserCardList.c1f20fb2.js";import"./EntityLink.b1f9e74b.js";import"./SynapseVideo.48d94448.js";import"./FileUpload.49656bdb.js";import"./UserSearchBox.8df7db9f.js";const _={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:r.RENEW_ACCESS},{userId:S.toString(),type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

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
