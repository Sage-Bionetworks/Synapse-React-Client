import{S as p}from"./SubmissionPage.a9bb70ad.js";import{M as e,e as u,f as s,o as d}from"./mockAccessRequirements.ce58f55f.js";import{cG as f,L as g,M as E,aj as y}from"./index.7e720d98.js";import{S as a}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{i as o}from"./AccessRequirementList.817e3656.js";import{a as m}from"./RestrictionInformation.edfbac5a.js";import{M as n}from"./getEndpoint.f1f195f5.js";import{a as l,F as R,j as c}from"./jsx-runtime.8deabff4.js";import"./dayjs.min.98c05744.js";import"./iframe.9a9f3456.js";import"./DateFormatter.cae52781.js";import"./utc.4f3f9a8c.js";import"./useDataAccessSubmission.52d20a1c.js";import"./useMutation.1145132d.js";import"./useInfiniteQuery.7899d034.js";import"./useAccessRequirements.3fb1eea2.js";import"./queryKeys.e0d3085f.js";import"./SynapseConstants.71946a35.js";import"./WarningModal.a73e88cf.js";import"./Modal.8812f470.js";import"./Button.7f145214.js";import"./createWithBsPrefix.10b29307.js";import"./contains.28185ff5.js";import"./inheritsLoose.1bd8d1a6.js";import"./divWithClassName.17daa550.js";import"./index.57c4b3f6.js";import"./index.35ce73ec.js";import"./usePrevious.1aaea82b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.c2404935.js";import"./UserCard.c70cf940.js";import"./IconCopy.fec0e03b.js";import"./SkeletonTable.d18d0ed3.js";import"./times.bce2a9cd.js";import"./toInteger.5c373204.js";import"./isSymbol.0aefb815.js";import"./isArray.60ef1f80.js";import"./Skeleton.75c9e7ec.js";import"./styled.4ed13d54.js";import"./emotion-react.browser.esm.3c5e03a0.js";import"./IconSvg.c37effa3.js";import"./SvgIcon.68c0612f.js";import"./Tooltip.1a090672.js";import"./useTheme.4dbd8795.js";import"./TransitionGroupContext.f0e5bdf3.js";import"./ToastMessage.0865ace5.js";import"./FullWidthAlert.5c7c6876.js";import"./hook.1ef6fcec.js";import"./Typography.d2c075af.js";import"./uniqueId.d83e1a92.js";import"./Overlay.0adb623b.js";import"./usePopperMarginModifiers.008c5a4d.js";import"./UserOrTeamBadge.c2dd3799.js";import"./upperFirst.1e60fb34.js";import"./_baseSlice.50189bc5.js";import"./toLower.0e3ba06f.js";import"./inherits_browser.839e9211.js";import"./Fade.5eff05c6.js";import"./IconButton.88d7d90d.js";import"./ButtonBase.f183321e.js";import"./Link.150a4582.js";import"./Button.eb6e2031.js";import"./useGetInfoFromIds.31729f6a.js";import"./use-deep-compare-effect.esm.d674fd6b.js";import"./uniq.001d5121.js";import"./_cacheHas.3e10b9ea.js";import"./without.2bdc7411.js";import"./_Set.efe7ce99.js";import"./_setToArray.a82100c8.js";import"./LoadingScreen.d8050d22.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.1f53a19c.js";import"./EntityIcon.1c3aa2c3.js";import"./core.esm.61a3890e.js";import"./pick.c46cc8e3.js";import"./_baseClone.42d84618.js";import"./isEmpty.57a750a7.js";import"./isEqual.ae5ef449.js";import"./index.browser.a7937415.js";import"./union.16123856.js";import"./CustomSelectWidget.c237440f.js";import"./Select-54ac8379.esm.6d25abbe.js";import"./isString.aafd0bdb.js";import"./factory.aa9033b5.js";import"./sqlFunctions.9f009227.js";import"./QueryFilter.2f81cd8b.js";import"./useEntity.a8ca5bca.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.beb51b71.js";import"./queryUtils.da582c94.js";import"./cloneDeep.ad631675.js";import"./NoSearchResults.64813bfd.js";import"./NoData.c6c08618.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.77cbdb9a.js";import"./Dropdown.313b39ce.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.a8a5985b.js";import"./RadioGroup.d2e54988.js";import"./RangeSlider.6336bea5.js";import"./react-sizeme.19b651a3.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.ca478ed5.js";import"./Close.33c9f782.js";import"./relativeTime.2a9aa701.js";import"./useDownloadList.da07dda4.js";import"./QueryCount.42db340b.js";import"./react-select.esm.3b319a5d.js";import"./IconList.6aa6455f.js";import"./UserCardList.984aaece.js";import"./FileUpload.64bea603.js";import"./UserSearchBox.143f00a6.js";import"./EntityLink.e95bcbe1.js";import"./SynapseVideo.e9faf7fd.js";const T={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:o.RENEW_ACCESS},{userId:u.toString(),type:o.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

Fix incorrect data.

Please contact us at act@sagebionetworks.org if you have any questions.

Regards,
Access and Compliance Team (ACT)
act@sagebionetworks.org`,etag:"626f9567-bf5f-41e0-9bbf-cf1cd23e6b54",subjectId:"syn12156790",subjectType:m.ENTITY},C={id:"1",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:e.toString(),type:o.GAIN_ACCESS},{userId:u.toString(),type:o.GAIN_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment where software engineers pretend to be the users for whom they are trying to build features.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:m.ENTITY},_={id:"2",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"2",ducFileHandleId:"3997211",irbFileHandleId:"3997213",attachments:["3997211"],accessorChanges:[{userId:e.toString(),type:o.GAIN_ACCESS}],researchProjectSnapshot:{id:"2",accessRequirementId:"9602626",institution:"None",projectLead:"NickACT",intendedDataUseStatement:"Give me data pls",createdOn:"2022-05-10T17:17:14.757Z",modifiedOn:"2022-05-10T17:18:17.913Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"270234fd-da28-4098-8fd2-5693fee82c19"},isRenewalSubmission:!1,submittedOn:"2022-05-10T17:18:28.801Z",modifiedOn:"2022-05-10T17:20:09.356Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.APPROVED,etag:"5fefb2d1-8600-4e1e-96e1-cf57f2ff7fd0",subjectId:"syn12156790",subjectType:m.ENTITY},A={id:"4",accessRequirementId:"9603055",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:"3431185",type:o.RENEW_ACCESS},{userId:"3350396",type:o.GAIN_ACCESS},{userId:"3371908",type:o.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9603055",institution:"Bage Sionetworks",projectLead:"Adam H",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:"3431185",modifiedBy:"3431185",etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:"3431185",modifiedBy:"3431185",state:a.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:m.ENTITY},O=[_,T,C,A],Ut={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:24},endLoc:{col:1,line:33},startBody:{col:56,line:24},endBody:{col:1,line:33}}}}},title:"Governance/SubmissionPage",component:p,argTypes:{}},h=r=>l(R,{children:[c("p",{children:"First, use the StackChanger component to switch to the Mock Data stack"}),c(y,{children:c(p,{...r})})]}),S=h.bind({});S.parameters={msw:{handlers:[s.rest.get(`${n}${f(":id")}`,async(r,i,t)=>{const I=O.find(b=>r.params.id===b.id);return i(t.status(200),t.json(I))}),s.rest.get(`${n}${g(":id")}`,async(r,i,t)=>i(t.status(200),t.json(d))),s.rest.get(`${n}${E(":id")}`,async(r,i,t)=>i(t.status(200),t.json({wikiPageId:123,ownerObjectId:d.id,ownerObjectType:"ACCESS_REQUIREMENT"}))),s.rest.get(`${n}/repo/v1/accessRequirement/:id/acl`,async(r,i,t)=>i(t.status(200),t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:3350396,accessType:["REVIEW_SUBMISSIONS"]}]})))]}};S.args={submissionId:1};const Gt=["Demo"];export{S as Demo,Gt as __namedExportsOrder,Ut as default};
