import{S as u}from"./SubmissionPage.8ed31128.js";import{a as i}from"./index.57bbd51d.js";import{cL as p,L as l,M as g,ak as y}from"./index.f6f857f5.js";import{S as a}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{j as s}from"./AccessRequirementList.3b72d65e.js";import{a as m}from"./RestrictionInformation.edfbac5a.js";import{M as e,e as S,l as d}from"./mockAccessRequirements.17b462b0.js";import{M as n}from"./getEndpoint.f1f195f5.js";import{g as E,m as R}from"./mockRejectionReasonsTableQueryResultBundle.d5f26fd1.js";import{a as T,F as _,j as c}from"./jsx-runtime.6efef3f0.js";import"./dayjs.min.8b3c16f0.js";import"./iframe.b3705b98.js";import"./DateFormatter.e4b2fe07.js";import"./utc.cd0b4238.js";import"./useDataAccessSubmission.8f5de15c.js";import"./useMutation.905ce15d.js";import"./useInfiniteQuery.6ce8309d.js";import"./useAccessRequirements.eca13162.js";import"./queryKeys.f96c2872.js";import"./SynapseConstants.aef18750.js";import"./WarningModal.121f87bc.js";import"./Modal.db10ea3b.js";import"./Button.113b0f45.js";import"./createWithBsPrefix.dc61fcfa.js";import"./contains.789c8f44.js";import"./inheritsLoose.0f44c725.js";import"./divWithClassName.39d1e3e2.js";import"./index.527b2819.js";import"./index.35ce73ec.js";import"./usePrevious.234e4743.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.265683e8.js";import"./UserCard.89fae007.js";import"./IconCopy.7b0e586f.js";import"./SkeletonTable.43182f64.js";import"./times.ce6f9568.js";import"./toInteger.a03e46d2.js";import"./isSymbol.7ee325a2.js";import"./isArray.ce0fc8e6.js";import"./Skeleton.c73b94b2.js";import"./styled.3d34e36b.js";import"./emotion-react.browser.esm.89334e8c.js";import"./IconSvg.a0ac0502.js";import"./SvgIcon.3e939805.js";import"./Tooltip.9a185035.js";import"./useTheme.2b3579a1.js";import"./TransitionGroupContext.962689fd.js";import"./ToastMessage.a9162853.js";import"./FullWidthAlert.87654e2f.js";import"./hook.4287fc8d.js";import"./Typography.a863760e.js";import"./uniqueId.a881a904.js";import"./toString.931d2742.js";import"./Overlay.6c0a21b1.js";import"./usePopperMarginModifiers.0eff8b53.js";import"./UserOrTeamBadge.fdcbf44a.js";import"./RejectDataAccessRequestModal.c5c589ec.js";import"./useGetQueryResultBundle.1228df4a.js";import"./immutable.es.28139da3.js";import"./LoadingScreen.ab408232.js";import"./DialogContent.77506dc8.js";import"./Modal.b3c768d7.js";import"./Fade.ee3053ca.js";import"./Paper.1215a022.js";import"./Stack.48d76736.js";import"./Box.1af24e1b.js";import"./IconButton.a32a330b.js";import"./ButtonBase.42d7166c.js";import"./Button.bcc1fc04.js";import"./FormLabel.d29c28ac.js";import"./isMuiElement.3cef142e.js";import"./TextField.4ead3254.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.a4fdb830.js";import"./List.643e5f14.js";import"./upperFirst.9d70c80d.js";import"./_baseSlice.50189bc5.js";import"./toLower.3ab99b30.js";import"./inherits_browser.432d22d0.js";import"./Link.f540f0ea.js";import"./useGetInfoFromIds.46c54480.js";import"./use-deep-compare-effect.esm.fa498af3.js";import"./uniq.e676b014.js";import"./_cacheHas.c0fe68d8.js";import"./without.e36cd559.js";import"./_Set.6076d8f1.js";import"./_setToArray.a82100c8.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.d0985ce6.js";import"./EntityIcon.3b4d81e3.js";import"./core.esm.7728abb9.js";import"./pick.58e246c9.js";import"./_baseClone.27a5ae2d.js";import"./isEmpty.8554a593.js";import"./isEqual.4b0c3d7f.js";import"./index.browser.0c4417bc.js";import"./union.ac9c033b.js";import"./CustomSelectWidget.227adc34.js";import"./Select-54ac8379.esm.1fa52e56.js";import"./isString.ca431768.js";import"./factory.b6e4d6a7.js";import"./sqlFunctions.ba594ce5.js";import"./QueryFilter.30eec546.js";import"./useEntity.7761124a.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.8165148a.js";import"./queryUtils.edb96664.js";import"./cloneDeep.53ea7f1e.js";import"./NoSearchResults.e2971c16.js";import"./NoData.867fffb7.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./ElementWithTooltip.c54d261b.js";import"./Dropdown.5bd05552.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.fd5e6b6d.js";import"./RadioGroup.bc45bd63.js";import"./RangeSlider.6c9bce2a.js";import"./react-sizeme.db3800c3.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.eb4309d9.js";import"./Close.2b98c3fe.js";import"./relativeTime.220aea01.js";import"./useDownloadList.06df0856.js";import"./QueryCount.62cf06b4.js";import"./react-select.esm.a9ae3588.js";import"./IconList.27dad11c.js";import"./UserCardList.4d0cf000.js";import"./FileUpload.b7cbe231.js";import"./UserSearchBox.bc3fcd89.js";import"./EntityLink.8a97d7e0.js";import"./ErrorChip.8bb6b297.js";import"./SynapseVideo.b2125f69.js";const C={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:s.RENEW_ACCESS},{userId:S.toString(),type:s.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

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
