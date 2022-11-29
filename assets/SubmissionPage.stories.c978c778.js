import{S as u}from"./SubmissionPage.0f0a35ba.js";import{M as e,b as S,a as l,m as g,c as a}from"./mockProject.28ea0ef5.js";import{c9 as E,ca as y,cb as T,a8 as R}from"./index.d78db713.js";import{S as d}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{f as r}from"./CardContainerLogic.5070cf39.js";import{a as n}from"./RestrictionInformation.edfbac5a.js";import{M as m}from"./StackChanger.1f516868.js";import{a as C,F as O,j as c}from"./jsx-runtime.470fedf8.js";import"./dayjs.min.4f8336ad.js";import"./iframe.2c3c563c.js";import"./DateFormatter.5fca59d3.js";import"./utc.762ba311.js";import"./useDataAccessSubmission.4aac69c6.js";import"./useMutation.61e704e1.js";import"./useInfiniteQuery.20432a69.js";import"./useGetAccessRequirement.c6d9edea.js";import"./SynapseConstants.290eab74.js";import"./WarningModal.cebca19c.js";import"./Modal.02af6ee8.js";import"./Button.32652e66.js";import"./createWithBsPrefix.2bae2e8a.js";import"./contains.2ee9a4e4.js";import"./inheritsLoose.007b7f1b.js";import"./divWithClassName.b6065814.js";import"./index.a7a39b73.js";import"./index.35ce73ec.js";import"./usePrevious.98cde62f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.42b83902.js";import"./UserCard.81f9cb14.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.6e42559c.js";import"./SkeletonTable.9062b54f.js";import"./times.9aa75450.js";import"./toInteger.4d490e0a.js";import"./isSymbol.d795e13a.js";import"./isArray.35667cb8.js";import"./Skeleton.d220704f.js";import"./styled.ca076b3f.js";import"./emotion-react.browser.esm.95d336ef.js";import"./IconSvg.f9cd712e.js";import"./TransitionGroupContext.f07704a6.js";import"./Tooltip.1e1cee1e.js";import"./createSvgIcon.d70ded48.js";import"./useTheme.aca7cff5.js";import"./utils.de422cb3.js";import"./InfoOutlined.2a13bef6.js";import"./ToastMessage.0e3c58b8.js";import"./FullWidthAlert.e4048025.js";import"./Alert.aa708f58.js";import"./hook.b9a8fbc8.js";import"./Typography.c6dffdf6.js";import"./uniqueId.dfabcedb.js";import"./Overlay.41a15913.js";import"./usePopperMarginModifiers.12622bfd.js";import"./UserOrTeamBadge.a535acf5.js";import"./upperFirst.1efc85f3.js";import"./_baseSlice.50189bc5.js";import"./toLower.7ee1d361.js";import"./inherits_browser.ea3c7417.js";import"./Fade.260ddc4e.js";import"./Link.46681652.js";import"./Button.5119f75c.js";import"./ButtonBase.776e8c8b.js";import"./sqlFunctions.be5d1a4e.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.cd515180.js";import"./useGetInfoFromIds.662a20cc.js";import"./use-deep-compare-effect.esm.71ecaff2.js";import"./uniq.7877dc80.js";import"./_cacheHas.6a8d008c.js";import"./without.bad81c9f.js";import"./_Set.96bbcc5a.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.770ced67.js";import"./queryUtils.b5014275.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.43e4fd26.js";import"./_baseClone.a93e8b8a.js";import"./_getTag.da3e73a3.js";import"./NoSearchResults.5c6626c4.js";import"./NoData.addfae26.js";import"./unCamelCase.07e38083.js";import"./useEntity.a051f784.js";import"./pick.ef3fcb56.js";import"./isEqual.b9ce82d6.js";import"./ElementWithTooltip.c4960d74.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.2a6947a5.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.6638f0fe.js";import"./RadioGroup.e948e185.js";import"./RangeSlider.2cca730a.js";import"./factory.6c8cd09a.js";import"./react-sizeme.53fda094.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.28d2c4c6.js";import"./SelectionCriteriaPill.d6d749de.js";import"./Close.a4bdb366.js";import"./react-select.esm.375ac3d3.js";import"./Select-54ac8379.esm.b34a3580.js";import"./CustomSelectWidget.a05fb370.js";import"./index.browser.ff037ea7.js";import"./react-intersection-observer.esm.17b02c14.js";import"./EntityIcon.0733b939.js";import"./core.esm.2e89d46d.js";import"./isEmpty.6ee7f7a5.js";import"./union.5b5e6920.js";import"./isString.6b8ee545.js";import"./relativeTime.01e67285.js";import"./useGetDownloadListStatistics.35f95881.js";import"./QueryCount.83c58f8a.js";import"./FileUpload.5f986572.js";import"./UserSearchBox.decc11d9.js";import"./EntityLink.30ea011f.js";import"./SynapseVideo.dd660335.js";import"./IconList.c8b33af8.js";import"./UserCardList.b6c4f6ae.js";const _={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:r.RENEW_ACCESS},{userId:S.toString(),type:r.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:d.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

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
