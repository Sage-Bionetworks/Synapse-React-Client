import{S as p}from"./SubmissionPage.ace03abf.js";import{M as e,e as u,f as s,o as d}from"./mockAccessRequirements.fca2fcd2.js";import{cI as f,L as g,M as E,aj as y}from"./index.0297a0cb.js";import{S as a}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{i as o}from"./AccessRequirementList.e3110584.js";import{a as m}from"./RestrictionInformation.edfbac5a.js";import{M as n}from"./getEndpoint.f1f195f5.js";import{a as l,F as R,j as c}from"./jsx-runtime.76b41102.js";import"./dayjs.min.a3177bfa.js";import"./iframe.4ac8fc26.js";import"./DateFormatter.405593b2.js";import"./utc.57c73dc3.js";import"./useDataAccessSubmission.4830a003.js";import"./useMutation.bf55f3f5.js";import"./useInfiniteQuery.6628dc0b.js";import"./useAccessRequirements.dc76750b.js";import"./queryKeys.e0d3085f.js";import"./SynapseConstants.71946a35.js";import"./WarningModal.bcdb4e70.js";import"./Modal.907a4a1e.js";import"./Button.83b95483.js";import"./createWithBsPrefix.ec0f4954.js";import"./contains.015a7c6d.js";import"./inheritsLoose.9c2697f4.js";import"./divWithClassName.ae433c15.js";import"./index.bc4e6645.js";import"./index.35ce73ec.js";import"./usePrevious.4c8906d5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.ad8cb22c.js";import"./UserCard.29055287.js";import"./IconCopy.ae28a5e2.js";import"./SkeletonTable.4585cee0.js";import"./times.5539d7c0.js";import"./toInteger.e94666c7.js";import"./isSymbol.945d9b60.js";import"./isArray.8642b77d.js";import"./Skeleton.439e65be.js";import"./styled.0442482c.js";import"./emotion-react.browser.esm.cf245846.js";import"./IconSvg.175e5b3e.js";import"./SvgIcon.7ad855dc.js";import"./Tooltip.40200d96.js";import"./useTheme.6368534f.js";import"./TransitionGroupContext.e619b501.js";import"./ToastMessage.a7db9b8d.js";import"./FullWidthAlert.fa5db810.js";import"./hook.9a8069f4.js";import"./Typography.6181771e.js";import"./uniqueId.db618dfa.js";import"./toString.30e0c932.js";import"./Overlay.e607fdf1.js";import"./usePopperMarginModifiers.f84a16be.js";import"./UserOrTeamBadge.e0170d2a.js";import"./upperFirst.1cc33abe.js";import"./_baseSlice.50189bc5.js";import"./toLower.0ecb052a.js";import"./inherits_browser.b550d0d9.js";import"./Fade.e47b19bb.js";import"./IconButton.6adff82e.js";import"./ButtonBase.bd6b806f.js";import"./Link.dc8bd0fa.js";import"./Button.09259ba0.js";import"./useGetInfoFromIds.ad8b47c2.js";import"./use-deep-compare-effect.esm.c9075b1e.js";import"./uniq.4862c17b.js";import"./_cacheHas.0d545133.js";import"./without.79d3af29.js";import"./_Set.6089be3d.js";import"./_setToArray.a82100c8.js";import"./LoadingScreen.37cafde6.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.0ced2b23.js";import"./EntityIcon.409d700e.js";import"./core.esm.5ccb1dc5.js";import"./pick.77527010.js";import"./_baseClone.59c3ed7e.js";import"./isEmpty.8d6ae8cd.js";import"./isEqual.f3cbd38f.js";import"./index.browser.dfdbc042.js";import"./union.8f08a467.js";import"./CustomSelectWidget.0f29881d.js";import"./Select-54ac8379.esm.04a57595.js";import"./isString.64d04794.js";import"./factory.0ec07d04.js";import"./sqlFunctions.e7dd183a.js";import"./QueryFilter.b81da185.js";import"./useEntity.d0924c07.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.22071321.js";import"./queryUtils.cba9940e.js";import"./cloneDeep.e7a3eeef.js";import"./NoSearchResults.74466cf1.js";import"./NoData.e5f1e807.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.05b87c21.js";import"./Dropdown.f708dbe5.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b4d66a68.js";import"./RadioGroup.7d7338a2.js";import"./RangeSlider.8c92159c.js";import"./react-sizeme.e70bce6e.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.938aa7f9.js";import"./Close.64702cf9.js";import"./relativeTime.7e299a09.js";import"./useDownloadList.5afd9cdb.js";import"./QueryCount.ea7052b8.js";import"./react-select.esm.6272fded.js";import"./IconList.d9d0dd5d.js";import"./UserCardList.025f49c3.js";import"./FileUpload.8f9a5007.js";import"./UserSearchBox.2300e4da.js";import"./EntityLink.de0eb36e.js";import"./ErrorChip.fe210de4.js";import"./SynapseVideo.9b0ef7ab.js";const T={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:o.RENEW_ACCESS},{userId:u.toString(),type:o.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

Fix incorrect data.

Please contact us at act@sagebionetworks.org if you have any questions.

Regards,
Access and Compliance Team (ACT)
act@sagebionetworks.org`,etag:"626f9567-bf5f-41e0-9bbf-cf1cd23e6b54",subjectId:"syn12156790",subjectType:m.ENTITY},C={id:"1",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:e.toString(),type:o.GAIN_ACCESS},{userId:u.toString(),type:o.GAIN_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment where software engineers pretend to be the users for whom they are trying to build features.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:m.ENTITY},_={id:"2",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"2",ducFileHandleId:"3997211",irbFileHandleId:"3997213",attachments:["3997211"],accessorChanges:[{userId:e.toString(),type:o.GAIN_ACCESS}],researchProjectSnapshot:{id:"2",accessRequirementId:"9602626",institution:"None",projectLead:"NickACT",intendedDataUseStatement:"Give me data pls",createdOn:"2022-05-10T17:17:14.757Z",modifiedOn:"2022-05-10T17:18:17.913Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"270234fd-da28-4098-8fd2-5693fee82c19"},isRenewalSubmission:!1,submittedOn:"2022-05-10T17:18:28.801Z",modifiedOn:"2022-05-10T17:20:09.356Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.APPROVED,etag:"5fefb2d1-8600-4e1e-96e1-cf57f2ff7fd0",subjectId:"syn12156790",subjectType:m.ENTITY},A={id:"4",accessRequirementId:"9603055",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:"3431185",type:o.RENEW_ACCESS},{userId:"3350396",type:o.GAIN_ACCESS},{userId:"3371908",type:o.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9603055",institution:"Bage Sionetworks",projectLead:"Adam H",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:"3431185",modifiedBy:"3431185",etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:"3431185",modifiedBy:"3431185",state:a.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:m.ENTITY},O=[_,T,C,A],Gt={parameters:{storySource:{source:`import React from 'react'
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
import { SynapseErrorBoundary } from '../error/ErrorBanner'
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
`,locationsMap:{demo:{startLoc:{col:56,line:24},endLoc:{col:1,line:33},startBody:{col:56,line:24},endBody:{col:1,line:33}}}}},title:"Governance/SubmissionPage",component:p,argTypes:{}},h=r=>l(R,{children:[c("p",{children:"First, use the StackChanger component to switch to the Mock Data stack"}),c(y,{children:c(p,{...r})})]}),S=h.bind({});S.parameters={msw:{handlers:[s.rest.get(`${n}${f(":id")}`,async(r,i,t)=>{const I=O.find(b=>r.params.id===b.id);return i(t.status(200),t.json(I))}),s.rest.get(`${n}${g(":id")}`,async(r,i,t)=>i(t.status(200),t.json(d))),s.rest.get(`${n}${E(":id")}`,async(r,i,t)=>i(t.status(200),t.json({wikiPageId:123,ownerObjectId:d.id,ownerObjectType:"ACCESS_REQUIREMENT"}))),s.rest.get(`${n}/repo/v1/accessRequirement/:id/acl`,async(r,i,t)=>i(t.status(200),t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:3350396,accessType:["REVIEW_SUBMISSIONS"]}]})))]}};S.args={submissionId:1};const Zt=["Demo"];export{S as Demo,Zt as __namedExportsOrder,Gt as default};
