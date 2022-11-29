import{S as u}from"./SubmissionPage.549a95fe.js";import{M as e,b as S,a as l,m as g,c as a}from"./mockProject.8a338a0e.js";import{c9 as E,ca as y,cb as T,a8 as R}from"./index.76b38c54.js";import{S as d}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{f as r}from"./CardContainerLogic.6ade039e.js";import{a as n}from"./RestrictionInformation.edfbac5a.js";import{M as m}from"./StackChanger.5abf71dd.js";import{a as C,F as O,j as c}from"./jsx-runtime.c28691f9.js";import"./dayjs.min.0f21fca1.js";import"./iframe.180ebcad.js";import"./DateFormatter.6a862c70.js";import"./utc.689ac7ec.js";import"./useDataAccessSubmission.2ed14f2a.js";import"./useMutation.3c0f4250.js";import"./useInfiniteQuery.4ac5428a.js";import"./useGetAccessRequirement.ee9561a6.js";import"./SynapseConstants.290eab74.js";import"./WarningModal.3ead0df2.js";import"./Modal.a936254b.js";import"./Button.01687609.js";import"./createWithBsPrefix.e1e1b086.js";import"./contains.a1192dc5.js";import"./inheritsLoose.d88c30ef.js";import"./divWithClassName.5d82b3d5.js";import"./index.e19c4baa.js";import"./index.35ce73ec.js";import"./usePrevious.93bb183c.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.4971e4f8.js";import"./UserCard.4fc0c953.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.13ec7c8a.js";import"./SkeletonTable.a4cdc768.js";import"./times.56956096.js";import"./toInteger.5e16c8d9.js";import"./isSymbol.3a617ca5.js";import"./isArray.00855dd8.js";import"./Skeleton.5e7b1855.js";import"./styled.0b15883e.js";import"./emotion-react.browser.esm.07119d08.js";import"./IconSvg.7c5a9ccb.js";import"./TransitionGroupContext.4d4491d8.js";import"./Tooltip.d4e3b915.js";import"./createSvgIcon.40781e98.js";import"./useTheme.c2c5870a.js";import"./utils.147770f5.js";import"./InfoOutlined.276d33db.js";import"./ToastMessage.15875dd0.js";import"./FullWidthAlert.44d2e621.js";import"./Alert.39b51be4.js";import"./hook.668b90b8.js";import"./Typography.979062bc.js";import"./uniqueId.dd846a92.js";import"./Overlay.26aae53e.js";import"./usePopperMarginModifiers.39120970.js";import"./UserOrTeamBadge.ba139a08.js";import"./upperFirst.b33476eb.js";import"./_baseSlice.50189bc5.js";import"./toLower.bfe9ec0b.js";import"./inherits_browser.dde37ef0.js";import"./Fade.467f608c.js";import"./Link.7916e978.js";import"./Button.5474ded1.js";import"./ButtonBase.62e27216.js";import"./sqlFunctions.66d0ccb5.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.756f7d3e.js";import"./useGetInfoFromIds.d705ac97.js";import"./use-deep-compare-effect.esm.3ebc19e4.js";import"./uniq.2c176ac8.js";import"./_cacheHas.702c76d8.js";import"./without.d15374c1.js";import"./_Set.3ccae59b.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.2d7858ac.js";import"./queryUtils.29780774.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.cb414b63.js";import"./_baseClone.a1dc38d3.js";import"./_getTag.8cd19e02.js";import"./NoSearchResults.5e386327.js";import"./NoData.eaeb518a.js";import"./unCamelCase.07e38083.js";import"./useEntity.72150e51.js";import"./pick.69e60d79.js";import"./isEqual.d7457938.js";import"./ElementWithTooltip.042ad96d.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.52eb9090.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.a4ffafa3.js";import"./RadioGroup.e532ac13.js";import"./RangeSlider.ca2db74a.js";import"./factory.0601d4aa.js";import"./react-sizeme.1d1a1dc1.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.65c8c5c9.js";import"./SelectionCriteriaPill.888fe1b5.js";import"./Close.a651a325.js";import"./react-select.esm.7b3aa535.js";import"./Select-54ac8379.esm.37d3a4b7.js";import"./CustomSelectWidget.a1c56d66.js";import"./index.browser.48c43a17.js";import"./react-intersection-observer.esm.3074ea26.js";import"./EntityIcon.518b2fba.js";import"./core.esm.af84899e.js";import"./isEmpty.be2c0fe7.js";import"./union.9835e5b7.js";import"./isString.9eb5361c.js";import"./relativeTime.4b958b5a.js";import"./useGetDownloadListStatistics.6916f930.js";import"./QueryCount.6a250f74.js";import"./FileUpload.b1556377.js";import"./UserSearchBox.56587c36.js";import"./EntityLink.37d91978.js";import"./SynapseVideo.a702b220.js";import"./IconList.868a7c39.js";import"./UserCardList.ac330e4a.js";const _={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:r.RENEW_ACCESS},{userId:S.toString(),type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

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
