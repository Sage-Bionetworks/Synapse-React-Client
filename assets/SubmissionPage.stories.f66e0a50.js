import{S as u}from"./SubmissionPage.650bfd97.js";import{M as e,b as S,a as g,m as l,c as a}from"./mockProject.35f89d9f.js";import{ct as E,cu as y,cv as T,a9 as R}from"./EntityTypeUtils.a88da157.js";import{S as d}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{g as r}from"./HelpPopover.a6da761d.js";import{a as n}from"./RestrictionInformation.edfbac5a.js";import{M as m}from"./getEndpoint.f1f195f5.js";import{a as C,F as O,j as c}from"./jsx-runtime.7f415a49.js";import"./dayjs.min.4b01dff6.js";import"./iframe.f0eb7e4f.js";import"./DateFormatter.da568cbd.js";import"./utc.4bce6490.js";import"./useDataAccessSubmission.e1e45d93.js";import"./useMutation.7bebd2d5.js";import"./useInfiniteQuery.e949b068.js";import"./useAccessRequirements.3fafc689.js";import"./queryKeys.e0d3085f.js";import"./SynapseConstants.d6ba6a96.js";import"./WarningModal.c247c3c8.js";import"./Modal.20d66332.js";import"./Button.03e30a54.js";import"./createWithBsPrefix.1ec397ad.js";import"./contains.12125dea.js";import"./inheritsLoose.d3989491.js";import"./divWithClassName.4f7ac618.js";import"./index.322ef20a.js";import"./index.35ce73ec.js";import"./usePrevious.9195f9b8.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.96d00667.js";import"./UserCard.d1f4475d.js";import"./IconCopy.02e8b48e.js";import"./SkeletonTable.ce10e001.js";import"./times.9ff12fd4.js";import"./toInteger.d64e3f97.js";import"./isSymbol.9047c28e.js";import"./isArray.22a05d29.js";import"./Skeleton.cf05128e.js";import"./styled.681e07cb.js";import"./emotion-react.browser.esm.3f795854.js";import"./IconSvg.4536f7bc.js";import"./SvgIcon.67c4bd7a.js";import"./Tooltip.532ca871.js";import"./useTheme.93fabebb.js";import"./TransitionGroupContext.d6cb07c1.js";import"./ToastMessage.475a246a.js";import"./FullWidthAlert.58605d4c.js";import"./Alert.41cbd6e8.js";import"./hook.926e9335.js";import"./Typography.b9cf5e4f.js";import"./uniqueId.706d73bf.js";import"./Overlay.34589b18.js";import"./usePopperMarginModifiers.1e19fcd3.js";import"./UserOrTeamBadge.45c75721.js";import"./upperFirst.978339f6.js";import"./_baseSlice.50189bc5.js";import"./toLower.6cb1ec65.js";import"./inherits_browser.a7c2d514.js";import"./Fade.91bde074.js";import"./IconButton.f87dde1e.js";import"./ButtonBase.24c8fd98.js";import"./Link.962b4b54.js";import"./Button.7a13a013.js";import"./LoadingScreen.993b2e3f.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.bfefb20b.js";import"./EntityIcon.fb6d531d.js";import"./core.esm.bf59ba7b.js";import"./pick.e08076aa.js";import"./_baseClone.12caf01d.js";import"./_Set.ec3b2e10.js";import"./isEmpty.539a569a.js";import"./isEqual.309ab92d.js";import"./_cacheHas.6bb37714.js";import"./_setToArray.a82100c8.js";import"./index.browser.5040e3d3.js";import"./union.b8f06866.js";import"./without.0cb61de1.js";import"./uniq.c00c44c0.js";import"./CustomSelectWidget.6c72a496.js";import"./Select-54ac8379.esm.3030d7a9.js";import"./isString.00645f3c.js";import"./factory.29902721.js";import"./sqlFunctions.317acf55.js";import"./QueryFilter.98e21063.js";import"./useEntity.87b43ab4.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.4f7cb853.js";import"./queryUtils.d40da240.js";import"./cloneDeep.b6d34995.js";import"./use-deep-compare-effect.esm.a50fe12d.js";import"./NoSearchResults.47339e1b.js";import"./NoData.f6f90db5.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.500e59a6.js";import"./Dropdown.d617d4af.js";import"./isRequiredForA11y.20ed4857.js";import"./useGetInfoFromIds.da2e88a2.js";import"./Checkbox.d15514ef.js";import"./RadioGroup.63fe795a.js";import"./RangeSlider.870cef18.js";import"./react-sizeme.aa998ef5.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.19e6487c.js";import"./Close.d7f6c298.js";import"./relativeTime.99226a0e.js";import"./useDownloadList.779cc4f6.js";import"./QueryCount.f359aa00.js";import"./react-select.esm.402ddf92.js";import"./IconList.8602b5e5.js";import"./UserCardList.a6514bc6.js";import"./FileUpload.9cbea4f7.js";import"./UserSearchBox.a454ac17.js";import"./EntityLink.6e5c3005.js";import"./SynapseVideo.9d2c4478.js";const _={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:r.RENEW_ACCESS},{userId:S.toString(),type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

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
