import{S as u}from"./SubmissionPage.728eb7a8.js";import{M as e,b as S,a as l,m as g,c as a}from"./mockProject.54080fbb.js";import{c9 as E,ca as y,cb as T,a8 as R}from"./index.09dc23e8.js";import{S as d}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{f as r}from"./CardContainerLogic.cb33a7b8.js";import{a as n}from"./RestrictionInformation.edfbac5a.js";import{M as m}from"./StackChanger.07dfb41b.js";import{a as C,F as O,j as c}from"./jsx-runtime.ed9254b2.js";import"./dayjs.min.33c1da17.js";import"./iframe.99e068ca.js";import"./DateFormatter.f3e72c7c.js";import"./utc.9490955d.js";import"./useDataAccessSubmission.b50d2ebc.js";import"./useMutation.60f0d665.js";import"./useInfiniteQuery.800a5497.js";import"./useGetAccessRequirement.1983a1b6.js";import"./SynapseConstants.290eab74.js";import"./WarningModal.45183711.js";import"./Modal.c698b2fc.js";import"./Button.f70cf9a8.js";import"./createWithBsPrefix.a83dfdb4.js";import"./contains.7d4be39e.js";import"./inheritsLoose.c118f853.js";import"./divWithClassName.2b7a9e20.js";import"./index.6a4b5ee2.js";import"./index.35ce73ec.js";import"./usePrevious.92366a31.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.053cb997.js";import"./UserCard.07bf50f3.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.952aa6c8.js";import"./SkeletonTable.1f898edc.js";import"./times.d13dc2b1.js";import"./toInteger.b20f9fa9.js";import"./isSymbol.18579460.js";import"./isArray.9c9c9c65.js";import"./Skeleton.5cb63a0f.js";import"./styled.83fecbff.js";import"./emotion-react.browser.esm.c3af8cc3.js";import"./IconSvg.f9657569.js";import"./TransitionGroupContext.335c91bc.js";import"./Tooltip.f5ebbadc.js";import"./createSvgIcon.90f6b4eb.js";import"./useTheme.fd34ae61.js";import"./utils.ce7a07fb.js";import"./InfoOutlined.2dc079e8.js";import"./ToastMessage.2604ce43.js";import"./FullWidthAlert.adc5f173.js";import"./Alert.5c7a73ee.js";import"./hook.8985ff56.js";import"./Typography.754ee5d4.js";import"./uniqueId.0aa69bea.js";import"./Overlay.60675e59.js";import"./usePopperMarginModifiers.a98822d9.js";import"./UserOrTeamBadge.6dd7e061.js";import"./upperFirst.da4c2260.js";import"./_baseSlice.50189bc5.js";import"./toLower.a0c12387.js";import"./inherits_browser.85c59d9f.js";import"./Link.4533b1ea.js";import"./Button.3c46c29a.js";import"./ButtonBase.7ff40024.js";import"./sqlFunctions.be81fc47.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.b62d2248.js";import"./useGetInfoFromIds.b374d08a.js";import"./use-deep-compare-effect.esm.d4fdc855.js";import"./uniq.4166e015.js";import"./_cacheHas.9a7f07e6.js";import"./without.1a3a79a3.js";import"./_Set.fd0aa824.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.ef4231a4.js";import"./queryUtils.3ff51778.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.63504d31.js";import"./_baseClone.01d9004e.js";import"./_getTag.fbcd92ef.js";import"./NoSearchResults.1be5e0bb.js";import"./NoData.c4f1764e.js";import"./unCamelCase.07e38083.js";import"./useEntity.d2c714dc.js";import"./pick.962abfc3.js";import"./isEqual.bed5d254.js";import"./ElementWithTooltip.5cb18982.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.b2b7957d.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7810a3a9.js";import"./RadioGroup.c62491ea.js";import"./RangeSlider.9dc64f2c.js";import"./factory.8feb3a1e.js";import"./react-sizeme.eea81253.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.61a6cd73.js";import"./SelectionCriteriaPill.56572b2d.js";import"./Close.925f78cd.js";import"./react-select.esm.9c102701.js";import"./Select-54ac8379.esm.8e533a13.js";import"./CustomSelectWidget.99a5d587.js";import"./index.browser.38d62754.js";import"./react-intersection-observer.esm.c3cafa92.js";import"./EntityIcon.2341fbe2.js";import"./core.esm.1308c590.js";import"./isEmpty.12e3e69f.js";import"./union.7c2f104c.js";import"./isString.737fff8b.js";import"./relativeTime.35d2831e.js";import"./useGetDownloadListStatistics.b06129ff.js";import"./QueryCount.a2409428.js";import"./FileUpload.0a5e9b6d.js";import"./UserSearchBox.3a770103.js";import"./EntityLink.35fcf10a.js";import"./SynapseVideo.56518c38.js";import"./IconList.1c1b0b76.js";import"./UserCardList.f4976604.js";const _={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:r.RENEW_ACCESS},{userId:S.toString(),type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

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
