import{S as u}from"./SubmissionPage.dfd77e2b.js";import{a as i}from"./index.3439ac6f.js";import{cL as p,L as l,M as g,aj as y}from"./index.b3fc12c1.js";import{S as a}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{i as s}from"./AccessRequirementList.8929065e.js";import{a as m}from"./RestrictionInformation.edfbac5a.js";import{M as e,e as S,l as d}from"./mockAccessRequirements.19c1f939.js";import{M as n}from"./getEndpoint.f1f195f5.js";import{g as E,m as R}from"./mockRejectionReasonsTableQueryResultBundle.f3bbc31c.js";import{a as T,F as _,j as c}from"./jsx-runtime.d6be66a9.js";import"./dayjs.min.4289f877.js";import"./iframe.78dc3b5d.js";import"./DateFormatter.941811ce.js";import"./utc.d9b8a8fe.js";import"./useDataAccessSubmission.0792bcf4.js";import"./useMutation.4d42a75f.js";import"./useInfiniteQuery.153ac882.js";import"./useAccessRequirements.610d1a58.js";import"./queryKeys.f96c2872.js";import"./SynapseConstants.aef18750.js";import"./WarningModal.ac052005.js";import"./Modal.44d2ca28.js";import"./Button.58f5aaec.js";import"./createWithBsPrefix.139b0869.js";import"./contains.ac446ee4.js";import"./inheritsLoose.a22fc619.js";import"./divWithClassName.f4023709.js";import"./index.3b7d1b21.js";import"./index.35ce73ec.js";import"./usePrevious.263ac407.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.8bdf7b9b.js";import"./UserCard.3b30c3b3.js";import"./IconCopy.120eb6a8.js";import"./SkeletonTable.8490bedb.js";import"./times.b541d215.js";import"./toInteger.5e3c3f3b.js";import"./isSymbol.eb29c468.js";import"./isArray.3ed41029.js";import"./Skeleton.c281df81.js";import"./styled.f07e33c6.js";import"./emotion-react.browser.esm.8203c469.js";import"./IconSvg.67904b39.js";import"./SvgIcon.b9658c5d.js";import"./Tooltip.c89a275a.js";import"./useTheme.0cbb662e.js";import"./TransitionGroupContext.27368eb3.js";import"./ToastMessage.1551e33e.js";import"./FullWidthAlert.0962330c.js";import"./hook.0245101a.js";import"./Typography.079c4f38.js";import"./uniqueId.1755aefe.js";import"./toString.62a6def8.js";import"./Overlay.16f87717.js";import"./usePopperMarginModifiers.f5f095e7.js";import"./UserOrTeamBadge.8113a51e.js";import"./RejectDataAccessRequestModal.d9504e38.js";import"./useGetQueryResultBundle.0449041a.js";import"./immutable.es.28139da3.js";import"./LoadingScreen.08c127bb.js";import"./DialogContent.ae419846.js";import"./Modal.5e05ec5b.js";import"./Fade.c734522e.js";import"./Paper.57bfbc43.js";import"./Stack.934cd3bf.js";import"./Box.4987088c.js";import"./IconButton.3b892d3a.js";import"./ButtonBase.250c511d.js";import"./Button.bef5272a.js";import"./FormLabel.45d21d04.js";import"./isMuiElement.c70160d0.js";import"./TextField.c7b861c1.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.58fb38a5.js";import"./List.ea77900f.js";import"./upperFirst.c2141214.js";import"./_baseSlice.50189bc5.js";import"./toLower.26dfa336.js";import"./inherits_browser.17813e51.js";import"./Link.7f48e2dc.js";import"./useGetInfoFromIds.5d6c53d1.js";import"./use-deep-compare-effect.esm.bde19c32.js";import"./uniq.6aeaecd1.js";import"./_cacheHas.4141299d.js";import"./without.8ff8fd5d.js";import"./_Set.a2615e3e.js";import"./_setToArray.a82100c8.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.a21388e4.js";import"./EntityIcon.6af9736b.js";import"./core.esm.cbeede07.js";import"./pick.91e2fa22.js";import"./_baseClone.ecc77bcc.js";import"./isEmpty.42a8d070.js";import"./isEqual.d44fbeea.js";import"./index.browser.50c90814.js";import"./union.f5913534.js";import"./CustomSelectWidget.55025853.js";import"./Select-54ac8379.esm.38c93b4e.js";import"./isString.7b803664.js";import"./factory.bdcf20a6.js";import"./sqlFunctions.09325119.js";import"./QueryFilter.8e32ecc7.js";import"./useEntity.1de6dff7.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.81a39fd5.js";import"./queryUtils.a5d117dc.js";import"./cloneDeep.dc50f27a.js";import"./NoSearchResults.bd3638d3.js";import"./NoData.8a38dc26.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./ElementWithTooltip.80516f88.js";import"./Dropdown.917b5c6c.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.d89150eb.js";import"./RadioGroup.8ef25fc2.js";import"./RangeSlider.dddcb200.js";import"./react-sizeme.ebc4edb7.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.c4c4885d.js";import"./Close.cbbfd41e.js";import"./relativeTime.392da430.js";import"./useDownloadList.b75a79e5.js";import"./QueryCount.4a520d14.js";import"./react-select.esm.f0ac9c54.js";import"./IconList.9ab198d6.js";import"./UserCardList.a9b81b89.js";import"./FileUpload.74c81e67.js";import"./UserSearchBox.b59a0ed3.js";import"./EntityLink.bcf3716e.js";import"./ErrorChip.f30fc8e5.js";import"./SynapseVideo.de56516d.js";const C={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:s.RENEW_ACCESS},{userId:S.toString(),type:s.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

Fix incorrect data.

Please contact us at act@sagebionetworks.org if you have any questions.

Regards,
Access and Compliance Team (ACT)
act@sagebionetworks.org`,etag:"626f9567-bf5f-41e0-9bbf-cf1cd23e6b54",subjectId:"syn12156790",subjectType:m.ENTITY},O={id:"1",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:e.toString(),type:s.GAIN_ACCESS},{userId:S.toString(),type:s.GAIN_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment where software engineers pretend to be the users for whom they are trying to build features.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:m.ENTITY},A={id:"2",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"2",ducFileHandleId:"3997211",irbFileHandleId:"3997213",attachments:["3997211"],accessorChanges:[{userId:e.toString(),type:s.GAIN_ACCESS}],researchProjectSnapshot:{id:"2",accessRequirementId:"9602626",institution:"None",projectLead:"NickACT",intendedDataUseStatement:"Give me data pls",createdOn:"2022-05-10T17:17:14.757Z",modifiedOn:"2022-05-10T17:18:17.913Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"270234fd-da28-4098-8fd2-5693fee82c19"},isRenewalSubmission:!1,submittedOn:"2022-05-10T17:18:28.801Z",modifiedOn:"2022-05-10T17:20:09.356Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.APPROVED,etag:"5fefb2d1-8600-4e1e-96e1-cf57f2ff7fd0",subjectId:"syn12156790",subjectType:m.ENTITY},j={id:"4",accessRequirementId:"9603055",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",attachments:["123456","123457"],accessorChanges:[{userId:"3431185",type:s.RENEW_ACCESS},{userId:"3350396",type:s.GAIN_ACCESS},{userId:"3371908",type:s.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9603055",institution:"Bage Sionetworks",projectLead:"Adam H",intendedDataUseStatement:"I plan to see if the data is real data, because I suspect that this is really fake data created solely for a testing environment.",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-10T15:49:56.292Z",createdBy:"3431185",modifiedBy:"3431185",etag:"7ea28f9e-81cb-43be-a614-9eb1a0dabafc"},isRenewalSubmission:!1,submittedOn:"2022-05-10T15:50:19.275Z",modifiedOn:"2022-05-10T15:50:19.275Z",submittedBy:"3431185",modifiedBy:"3431185",state:a.SUBMITTED,etag:"40820b64-c436-486b-8fb8-afef931fbcb3",subjectId:"syn12156790",subjectType:m.ENTITY},h=[A,C,O,j],sr={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:26},endLoc:{col:1,line:35},startBody:{col:56,line:26},endBody:{col:1,line:35}}}}},title:"Governance/SubmissionPage",component:u,argTypes:{}},k=r=>T(_,{children:[c("p",{children:"First, use the StackChanger component to switch to the Mock Data stack"}),c(y,{children:c(u,{...r})})]}),I=k.bind({});I.parameters={msw:{handlers:[i.rest.get(`${n}${p(":id")}`,async(r,o,t)=>{const b=h.find(f=>r.params.id===f.id);return o(t.status(200),t.json(b))}),i.rest.get(`${n}${l(":id")}`,async(r,o,t)=>o(t.status(200),t.json(d))),i.rest.get(`${n}${g(":id")}`,async(r,o,t)=>o(t.status(200),t.json({wikiPageId:123,ownerObjectId:d.id,ownerObjectType:"ACCESS_REQUIREMENT"}))),i.rest.get(`${n}/repo/v1/accessRequirement/:id/acl`,async(r,o,t)=>o(t.status(200),t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:3350396,accessType:["REVIEW_SUBMISSIONS"]}]}))),...E(R),i.rest.put(`${n}${p(":id")}`,async(r,o,t)=>o(t.status(201),t.json(await r.json())))]}};I.args={submissionId:1};const ir=["Demo"];export{I as Demo,ir as __namedExportsOrder,sr as default};
