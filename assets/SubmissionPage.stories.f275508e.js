import{S as u}from"./SubmissionPage.6b3468bd.js";import{a as i}from"./index.93e8746a.js";import{cL as p,L as l,M as g,ak as y}from"./index.6ade810e.js";import{S as a}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{j as s}from"./AccessRequirementList.81b763e8.js";import{a as m}from"./RestrictionInformation.edfbac5a.js";import{M as e,e as S,l as d}from"./mockAccessRequirements.94f9a6a4.js";import{M as n}from"./getEndpoint.f1f195f5.js";import{g as E,m as R}from"./mockRejectionReasonsTableQueryResultBundle.4f20b617.js";import{a as T,F as _,j as c}from"./jsx-runtime.732db4fa.js";import"./dayjs.min.0ad62631.js";import"./iframe.309bdcd0.js";import"./DateFormatter.98d76ad0.js";import"./utc.36b0c74c.js";import"./useDataAccessSubmission.934d3f38.js";import"./useMutation.ba47f1f7.js";import"./useInfiniteQuery.bc11444b.js";import"./useAccessRequirements.53cc195c.js";import"./queryKeys.f96c2872.js";import"./SynapseConstants.aef18750.js";import"./WarningModal.dce8a8d1.js";import"./Modal.4f0d6f21.js";import"./Button.14842d9b.js";import"./createWithBsPrefix.e55f4707.js";import"./contains.d723cb84.js";import"./inheritsLoose.7bb86332.js";import"./divWithClassName.0d41da1a.js";import"./index.f08547e5.js";import"./index.35ce73ec.js";import"./usePrevious.90faff06.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.08d8bdbd.js";import"./UserCard.5dc8ad35.js";import"./IconCopy.8fbe8f6c.js";import"./SkeletonTable.cff03cd3.js";import"./times.37016f17.js";import"./toInteger.e9616708.js";import"./isSymbol.3aa759ff.js";import"./isArray.ab714070.js";import"./Skeleton.00a5a513.js";import"./styled.7d1b1387.js";import"./emotion-react.browser.esm.4ae44601.js";import"./IconSvg.f8a92c9e.js";import"./SvgIcon.883206f0.js";import"./Tooltip.b3eb933e.js";import"./useTheme.23d779b8.js";import"./TransitionGroupContext.25f1619e.js";import"./ToastMessage.ca9da849.js";import"./FullWidthAlert.b4689dd3.js";import"./hook.7d829a86.js";import"./Typography.52fcc329.js";import"./uniqueId.68f55a89.js";import"./toString.083d15f6.js";import"./Overlay.c9c798f2.js";import"./usePopperMarginModifiers.7728e467.js";import"./UserOrTeamBadge.294b1b2d.js";import"./RejectDataAccessRequestModal.b503ba54.js";import"./useGetQueryResultBundle.04254d85.js";import"./immutable.es.28139da3.js";import"./LoadingScreen.33c72bbe.js";import"./DialogContent.64edeb3c.js";import"./Modal.5a727a4f.js";import"./Fade.a9768a9d.js";import"./Paper.a90a575e.js";import"./Stack.5a0cac3c.js";import"./Box.ff30b46b.js";import"./IconButton.4e309ec1.js";import"./ButtonBase.caa5bbee.js";import"./Button.2b5fc967.js";import"./FormLabel.0bcd6371.js";import"./isMuiElement.68ee6da9.js";import"./TextField.4dcacf54.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.c4065c1d.js";import"./List.e830a7b6.js";import"./upperFirst.1cd417d2.js";import"./_baseSlice.50189bc5.js";import"./toLower.a3a6fb0b.js";import"./inherits_browser.ece359ec.js";import"./Link.04b76f3f.js";import"./useGetInfoFromIds.cff80146.js";import"./use-deep-compare-effect.esm.629c5c42.js";import"./uniq.4b39b2c8.js";import"./_cacheHas.e143a942.js";import"./without.2d4a20d2.js";import"./_Set.592281c9.js";import"./_setToArray.a82100c8.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.1a638807.js";import"./EntityIcon.e00edf1c.js";import"./core.esm.62da8fa1.js";import"./pick.059515ca.js";import"./_baseClone.99830f2a.js";import"./isEmpty.6e4b20fe.js";import"./isEqual.60e31e78.js";import"./index.browser.1426cdde.js";import"./union.cd76b5cb.js";import"./CustomSelectWidget.de8d3d0a.js";import"./Select-54ac8379.esm.9fd4da62.js";import"./isString.0a68f6ae.js";import"./factory.4e484438.js";import"./sqlFunctions.fb8b0140.js";import"./QueryFilter.776eed93.js";import"./useEntity.84240992.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.158b67aa.js";import"./queryUtils.752d1e6f.js";import"./cloneDeep.20d4205c.js";import"./NoSearchResults.61aade90.js";import"./NoData.f4f8ad10.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./ElementWithTooltip.65064a09.js";import"./Dropdown.77cad14f.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.c545cc03.js";import"./RadioGroup.12a07e83.js";import"./RangeSlider.e6b14cf1.js";import"./react-sizeme.1de254a4.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.98801b8b.js";import"./Close.b8c3677a.js";import"./relativeTime.7988bd7a.js";import"./useDownloadList.9ca9a463.js";import"./QueryCount.02b64b89.js";import"./react-select.esm.76f05765.js";import"./IconList.abb797f2.js";import"./UserCardList.615341b8.js";import"./FileUpload.09f14730.js";import"./UserSearchBox.04090696.js";import"./EntityLink.a579d43a.js";import"./ErrorChip.37f500a9.js";import"./SynapseVideo.70c89d2b.js";const C={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:s.RENEW_ACCESS},{userId:S.toString(),type:s.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

Fix incorrect data.

Please contact us at act@sagebionetworks.org if you have any questions.

Regards,
Access and Compliance Team (ACT)
act@sagebionetworks.org`,etag:"626f9567-bf5f-41e0-9bbf-cf1cd23e6b54",subjectId:"syn12156790",subjectType:m.ENTITY},O={id:"1",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:e.toString(),type:s.GAIN_ACCESS},{userId:S.toString(),type:s.GAIN_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment where software engineers pretend to be the users for whom they are trying to build features.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:m.ENTITY},A={id:"2",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"2",ducFileHandleId:"3997211",irbFileHandleId:"3997213",attachments:["3997211"],accessorChanges:[{userId:e.toString(),type:s.GAIN_ACCESS}],researchProjectSnapshot:{id:"2",accessRequirementId:"9602626",institution:"None",projectLead:"NickACT",intendedDataUseStatement:"Give me data pls",createdOn:"2022-05-10T17:17:14.757Z",modifiedOn:"2022-05-10T17:18:17.913Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"270234fd-da28-4098-8fd2-5693fee82c19"},isRenewalSubmission:!1,submittedOn:"2022-05-10T17:18:28.801Z",modifiedOn:"2022-05-10T17:20:09.356Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.APPROVED,etag:"5fefb2d1-8600-4e1e-96e1-cf57f2ff7fd0",subjectId:"syn12156790",subjectType:m.ENTITY},j={id:"4",accessRequirementId:"9603055",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:"3431185",type:s.RENEW_ACCESS},{userId:"3350396",type:s.GAIN_ACCESS},{userId:"3371908",type:s.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9603055",institution:"Bage Sionetworks",projectLead:"Adam H",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:"3431185",modifiedBy:"3431185",etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:"3431185",modifiedBy:"3431185",state:a.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:m.ENTITY},k=[A,C,O,j],sr={parameters:{storySource:{source:`import React from 'react'
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
import { getHandlersForTableQuery } from '../../../mocks/msw/handlers/tableQueryHandlers'
import mockRejectionReasonsTableQueryResultBundle from '../../../mocks/query/mockRejectionReasonsTableQueryResultBundle'

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
      ...getHandlersForTableQuery(mockRejectionReasonsTableQueryResultBundle),
      rest.put(
        \`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`,

        async (req, res, ctx) => {
          return res(ctx.status(201), ctx.json(await req.json()))
        },
      ),
    ],
  },
}
Demo.args = {
  submissionId: 1,
}
`,locationsMap:{demo:{startLoc:{col:56,line:26},endLoc:{col:1,line:35},startBody:{col:56,line:26},endBody:{col:1,line:35}}}}},title:"Governance/SubmissionPage",component:u,argTypes:{}},h=r=>T(_,{children:[c("p",{children:"First, use the StackChanger component to switch to the Mock Data stack"}),c(y,{children:c(u,{...r})})]}),I=h.bind({});I.parameters={msw:{handlers:[i.rest.get(`${n}${p(":id")}`,async(r,o,t)=>{const b=k.find(f=>r.params.id===f.id);return o(t.status(200),t.json(b))}),i.rest.get(`${n}${l(":id")}`,async(r,o,t)=>o(t.status(200),t.json(d))),i.rest.get(`${n}${g(":id")}`,async(r,o,t)=>o(t.status(200),t.json({wikiPageId:123,ownerObjectId:d.id,ownerObjectType:"ACCESS_REQUIREMENT"}))),i.rest.get(`${n}/repo/v1/accessRequirement/:id/acl`,async(r,o,t)=>o(t.status(200),t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:3350396,accessType:["REVIEW_SUBMISSIONS"]}]}))),...E(R),i.rest.put(`${n}${p(":id")}`,async(r,o,t)=>o(t.status(201),t.json(await r.json())))]}};I.args={submissionId:1};const ir=["Demo"];export{I as Demo,ir as __namedExportsOrder,sr as default};
