import{S as u}from"./SubmissionPage.a7616b88.js";import{M as e,b as S,a as l,m as g,c as a}from"./mockProject.a7b88049.js";import{c8 as E,c9 as y,ca as T,a8 as R}from"./index.0a2c4939.js";import{S as d}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{e as r}from"./CardContainerLogic.fb6258f8.js";import{a as n}from"./RestrictionInformation.edfbac5a.js";import{M as m}from"./StackChanger.e5a2147e.js";import{a as C,F as O,j as c}from"./jsx-runtime.aa766aaf.js";import"./moment.a565bb48.js";import"./DateFormatter.b979f188.js";import"./useDataAccessSubmission.ead63702.js";import"./useMutation.c00b8089.js";import"./useInfiniteQuery.9a0fe06d.js";import"./useGetAccessRequirement.0c595617.js";import"./SynapseConstants.290eab74.js";import"./WarningModal.25805129.js";import"./Modal.47c74737.js";import"./Button.c2cc208f.js";import"./createWithBsPrefix.2cafb9ec.js";import"./contains.91b3e071.js";import"./inheritsLoose.37c69c63.js";import"./Alert.f1eda723.js";import"./index.2efb6d36.js";import"./iframe.bd885096.js";import"./index.35ce73ec.js";import"./usePrevious.82adf379.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.dcf70bcc.js";import"./UserCard.e95fdc99.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.0f69ca31.js";import"./SkeletonTable.e0c4ca45.js";import"./times.33cd8aa8.js";import"./toInteger.36ff5a11.js";import"./isSymbol.36b96d1e.js";import"./isArray.24130e12.js";import"./Skeleton.b9cd2726.js";import"./styled.2fe8edb9.js";import"./ButtonBase.4c393dc9.js";import"./TransitionGroupContext.4c6d8009.js";import"./IconSvg.d73f159f.js";import"./Tooltip.e4334ac7.js";import"./createSvgIcon.d27817df.js";import"./utils.b239c5dc.js";import"./InfoOutlined.548f9119.js";import"./ToastMessage.167572b3.js";import"./FullWidthAlert.8371c9c1.js";import"./Typography.57d7ee2f.js";import"./uniqueId.bdc3b93e.js";import"./Overlay.70cfa399.js";import"./usePopperMarginModifiers.77eb36d9.js";import"./UserOrTeamBadge.bf49a816.js";import"./upperFirst.81cfb7fe.js";import"./_baseSlice.50189bc5.js";import"./toLower.7fd29573.js";import"./inherits_browser.04ab7c00.js";import"./Link.d09d0f36.js";import"./Button.d4a39ac2.js";import"./sqlFunctions.9bdc2c6c.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.aa422047.js";import"./useGetInfoFromIds.4eb73be0.js";import"./use-deep-compare-effect.esm.7ff43efb.js";import"./uniq.54fc3048.js";import"./_cacheHas.f9705cd4.js";import"./without.33def38b.js";import"./_Set.f82bf539.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.ce0bb6d2.js";import"./queryUtils.4b8af5d0.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ad6bb155.js";import"./_baseClone.c6c5507c.js";import"./_getTag.416f77c8.js";import"./NoSearchResults.ed7d85d5.js";import"./NoData.4f4cb96e.js";import"./unCamelCase.07e38083.js";import"./useEntity.3fe82088.js";import"./pick.e97e604b.js";import"./isEqual.5b182270.js";import"./ElementWithTooltip.9e2e3ff2.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.346eb87c.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7ee8aada.js";import"./RadioGroup.dbc26deb.js";import"./RangeSlider.3c4afffb.js";import"./factory.65c30f6f.js";import"./react-sizeme.738acc05.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.c4224e86.js";import"./SelectionCriteriaPill.2ce4cff8.js";import"./Close.da59ddfe.js";import"./react-select.esm.7c42975f.js";import"./Select-54ac8379.esm.d21451eb.js";import"./CustomSelectWidget.036d76f7.js";import"./index.browser.851f0bde.js";import"./react-intersection-observer.esm.0c7146a8.js";import"./EntityIcon.6506c628.js";import"./core.esm.14729251.js";import"./isEmpty.963ee042.js";import"./union.85080a9c.js";import"./isString.5c25b498.js";import"./useGetDownloadListStatistics.e68dab14.js";import"./QueryCount.4ac97521.js";import"./FileUpload.6c178d44.js";import"./UserSearchBox.61d2cf0f.js";import"./EntityLink.101d699f.js";import"./SynapseVideo.4652fc0e.js";import"./IconList.c1c0cda3.js";import"./UserCardList.f3efa500.js";const _={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:r.RENEW_ACCESS},{userId:S.toString(),type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

Fix incorrect data.

Please contact us at act@sagebionetworks.org if you have any questions.

Regards,
Access and Compliance Team (ACT)
act@sagebionetworks.org`,etag:"626f9567-bf5f-41e0-9bbf-cf1cd23e6b54",subjectId:"syn12156790",subjectType:n.ENTITY},A={id:"1",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:e.toString(),type:r.GAIN_ACCESS},{userId:S.toString(),type:r.GAIN_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment where software engineers pretend to be the users for whom they are trying to build features.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:n.ENTITY},h={id:"2",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"2",ducFileHandleId:"3997211",irbFileHandleId:"3997213",attachments:["3997211"],accessorChanges:[{userId:e.toString(),type:r.GAIN_ACCESS}],researchProjectSnapshot:{id:"2",accessRequirementId:"9602626",institution:"None",projectLead:"NickACT",intendedDataUseStatement:"Give me data pls",createdOn:"2022-05-10T17:17:14.757Z",modifiedOn:"2022-05-10T17:18:17.913Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"270234fd-da28-4098-8fd2-5693fee82c19"},isRenewalSubmission:!1,submittedOn:"2022-05-10T17:18:28.801Z",modifiedOn:"2022-05-10T17:20:09.356Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.APPROVED,etag:"5fefb2d1-8600-4e1e-96e1-cf57f2ff7fd0",subjectId:"syn12156790",subjectType:n.ENTITY},k={id:"4",accessRequirementId:"9603055",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:"3431185",type:r.RENEW_ACCESS},{userId:"3350396",type:r.GAIN_ACCESS},{userId:"3371908",type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9603055",institution:"Bage Sionetworks",projectLead:"Adam H",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:"3431185",modifiedBy:"3431185",etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:"3431185",modifiedBy:"3431185",state:d.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:n.ENTITY},q=[h,_,A,k],p=g.id,j={id:1,name:"Mocked access requirement",etag:"26489045-3a98-405f-b214-9e1c90208c64",createdOn:"2019-02-06T21:17:25.790Z",modifiedOn:"2020-07-24T18:11:35.323Z",versionNumber:1,subjectIds:[{id:"syn12664802",type:n.ENTITY}],createdBy:"1981374",modifiedBy:"1981374",accessType:l.DOWNLOAD},o={...j,concreteType:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",areOtherAttachmentsRequired:!1,isCertifiedUserRequired:!1,isDUCRequired:!1,isIDUPublic:!1,isIDURequired:!1,ducTemplateFileHandleId:"11111",expirationPeriod:1e3*60*60*24,isIRBApprovalRequired:!1,isValidatedProfileRequired:!1};o.id.toString(),o.createdOn,o.modifiedOn,o.name,o.versionNumber.toString(),e.toString();const Zt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:25},endLoc:{col:1,line:34},startBody:{col:56,line:25},endBody:{col:1,line:34}}}}},title:"Synapse/Governance/SubmissionPage",component:u,argTypes:{}},B=i=>C(O,{children:[c("p",{children:"First, use the StackChanger component to switch to the Mock Data stack"}),c(R,{children:c(u,{...i})})]}),I=B.bind({});I.parameters={msw:{handlers:[a.rest.get(`${m}${E(":id")}`,async(i,s,t)=>{const f=q.find(b=>i.params.id===b.id);return s(t.status(200),t.json(f))}),a.rest.get(`${m}${y(":id")}`,async(i,s,t)=>s(t.status(200),t.json(o))),a.rest.get(`${m}${T(":id")}`,async(i,s,t)=>s(t.status(200),t.json({wikiPageId:123,ownerObjectId:o.id,ownerObjectType:"ACCESS_REQUIREMENT"}))),a.rest.get(`${m}/repo/v1/accessRequirement/:id/acl`,async(i,s,t)=>s(t.status(200),t.json({id:i.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:3350396,accessType:["REVIEW_SUBMISSIONS"]}]})))]}};I.args={submissionId:1};const vt=["Demo"];export{I as Demo,vt as __namedExportsOrder,Zt as default};
