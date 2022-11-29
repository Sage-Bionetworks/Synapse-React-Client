import{S as u}from"./SubmissionPage.2b363177.js";import{M as e,b as S,a as l,m as g,c as a}from"./mockProject.58d102b9.js";import{c8 as E,c9 as y,ca as T,a8 as R}from"./index.20c1822f.js";import{S as d}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{f as r}from"./CardContainerLogic.9810a91e.js";import{a as n}from"./RestrictionInformation.edfbac5a.js";import{M as m}from"./StackChanger.4e7c1a51.js";import{a as C,F as O,j as c}from"./jsx-runtime.23bcdc09.js";import"./dayjs.min.175e5ee6.js";import"./iframe.c49fa417.js";import"./DateFormatter.6d192042.js";import"./utc.9b4935b5.js";import"./useDataAccessSubmission.49e15d3d.js";import"./useMutation.a00e5fbd.js";import"./useInfiniteQuery.6d6d1422.js";import"./useGetAccessRequirement.cee49857.js";import"./SynapseConstants.290eab74.js";import"./WarningModal.8ba465c6.js";import"./Modal.fcfac98b.js";import"./Button.9cfa11f8.js";import"./createWithBsPrefix.26026502.js";import"./contains.e26e64f1.js";import"./inheritsLoose.efe8b24a.js";import"./divWithClassName.fcb14682.js";import"./index.a2bbbebe.js";import"./index.35ce73ec.js";import"./usePrevious.f1fd94eb.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.1d1fe719.js";import"./UserCard.b277597c.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.3d0604ac.js";import"./SkeletonTable.7a076046.js";import"./times.e12d7030.js";import"./toInteger.dfc8aa00.js";import"./isSymbol.017a619a.js";import"./isArray.1d31a80d.js";import"./Skeleton.93cf864e.js";import"./styled.8da6873c.js";import"./emotion-react.browser.esm.599684c1.js";import"./IconSvg.1982fde5.js";import"./TransitionGroupContext.b9a824ce.js";import"./Tooltip.cfbb546f.js";import"./createSvgIcon.e3e4a251.js";import"./useTheme.26e47b20.js";import"./utils.2eab32fe.js";import"./InfoOutlined.61048ddd.js";import"./ToastMessage.52d73997.js";import"./FullWidthAlert.465c2909.js";import"./Alert.03ebe4a7.js";import"./hook.81302421.js";import"./Typography.17940352.js";import"./uniqueId.5a455c2a.js";import"./Overlay.177b926b.js";import"./usePopperMarginModifiers.2032f396.js";import"./UserOrTeamBadge.7709bc8d.js";import"./upperFirst.b09df5f1.js";import"./_baseSlice.50189bc5.js";import"./toLower.19ac06b8.js";import"./inherits_browser.d4195fe2.js";import"./Fade.5c08504a.js";import"./Link.e49ccf51.js";import"./Button.d27fd09d.js";import"./ButtonBase.94c8520a.js";import"./sqlFunctions.f9b9cbac.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.bb36e699.js";import"./useGetInfoFromIds.2e06391d.js";import"./use-deep-compare-effect.esm.c436bf33.js";import"./uniq.3868c1f1.js";import"./_cacheHas.990f1aa2.js";import"./without.cde801d5.js";import"./_Set.ca1709e5.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.828b0ea4.js";import"./queryUtils.19a52aee.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.a4dd16c1.js";import"./_baseClone.5f0a5f2c.js";import"./_getTag.6f0edf19.js";import"./NoSearchResults.939072af.js";import"./NoData.da21ba5e.js";import"./unCamelCase.07e38083.js";import"./useEntity.9c9803bf.js";import"./pick.7185c6d7.js";import"./isEqual.325afd29.js";import"./ElementWithTooltip.5a678880.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.824bdf6d.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.4c21f830.js";import"./RadioGroup.b1b3d150.js";import"./RangeSlider.80a9f111.js";import"./factory.945e3686.js";import"./react-sizeme.50cdb1a3.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.0123b906.js";import"./SelectionCriteriaPill.d4d12bc2.js";import"./Close.0f2d06e3.js";import"./react-select.esm.cd1a70c9.js";import"./Select-54ac8379.esm.6a208b47.js";import"./CustomSelectWidget.f29cd2d8.js";import"./index.browser.e71d7dd0.js";import"./react-intersection-observer.esm.8699b4f1.js";import"./EntityIcon.cd2765eb.js";import"./core.esm.6dd03b50.js";import"./isEmpty.9a508fc8.js";import"./union.1195c535.js";import"./isString.3a866e5e.js";import"./relativeTime.efd786e6.js";import"./useGetDownloadListStatistics.e5a0a533.js";import"./QueryCount.d35559d0.js";import"./FileUpload.af585b5c.js";import"./UserSearchBox.c1fe0c21.js";import"./EntityLink.2e71dd10.js";import"./SynapseVideo.81bbfb30.js";import"./IconList.c4ebe30a.js";import"./UserCardList.4bff2bca.js";const _={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:r.RENEW_ACCESS},{userId:S.toString(),type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

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
