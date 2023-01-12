import{S as u}from"./SubmissionPage.cb5ae0c8.js";import{a as i}from"./index.766b85ba.js";import{cL as p,L as l,M as g,aj as y}from"./index.b83134ec.js";import{S as a}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{i as s}from"./AccessRequirementList.41faf05e.js";import{a as m}from"./RestrictionInformation.edfbac5a.js";import{M as e,e as S,l as d}from"./mockAccessRequirements.43415f15.js";import{M as n}from"./getEndpoint.f1f195f5.js";import{g as E,m as R}from"./mockRejectionReasonsTableQueryResultBundle.57dcd981.js";import{a as T,F as _,j as c}from"./jsx-runtime.a638b984.js";import"./dayjs.min.101fce52.js";import"./iframe.73217397.js";import"./DateFormatter.d4a7e375.js";import"./utc.b447640b.js";import"./useDataAccessSubmission.96b594a8.js";import"./useMutation.20926710.js";import"./useInfiniteQuery.26e1390d.js";import"./useAccessRequirements.48298cfd.js";import"./queryKeys.f96c2872.js";import"./SynapseConstants.aef18750.js";import"./WarningModal.f9bc313f.js";import"./Modal.b15b7fde.js";import"./Button.9991ffcd.js";import"./createWithBsPrefix.86af4a28.js";import"./contains.bb95d688.js";import"./inheritsLoose.239e8e0c.js";import"./divWithClassName.979a7568.js";import"./index.357ef824.js";import"./index.35ce73ec.js";import"./usePrevious.cd07ee7a.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.1ade44a8.js";import"./UserCard.48755798.js";import"./IconCopy.9eb37407.js";import"./SkeletonTable.5915fa08.js";import"./times.6c1e506b.js";import"./toInteger.6100b906.js";import"./isSymbol.0dd0ac71.js";import"./isArray.dae1198f.js";import"./Skeleton.9bd91a4d.js";import"./styled.d7b43787.js";import"./emotion-react.browser.esm.3d42de74.js";import"./IconSvg.9dec1c98.js";import"./SvgIcon.e74d0ad6.js";import"./Tooltip.9be437e1.js";import"./useTheme.207e8da2.js";import"./TransitionGroupContext.f8911474.js";import"./ToastMessage.1f086d0d.js";import"./FullWidthAlert.97efcbea.js";import"./hook.a59baafe.js";import"./Typography.1d6efe32.js";import"./uniqueId.409eda17.js";import"./toString.42e4c32f.js";import"./Overlay.d99e3370.js";import"./usePopperMarginModifiers.5dd6ca76.js";import"./UserOrTeamBadge.7c78ec4d.js";import"./RejectDataAccessRequestModal.c66f4653.js";import"./useGetQueryResultBundle.625d0cdf.js";import"./immutable.es.28139da3.js";import"./LoadingScreen.aa28caa1.js";import"./DialogContent.7066f2fe.js";import"./Modal.f8b95a2b.js";import"./Fade.cb073591.js";import"./Paper.90b8bc3b.js";import"./Stack.ea7c6c1e.js";import"./Box.b05d96cb.js";import"./IconButton.7cd1b748.js";import"./ButtonBase.bc378f3c.js";import"./Button.666a2c38.js";import"./FormLabel.3bba4ebc.js";import"./isMuiElement.352aba54.js";import"./TextField.ef885b7e.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.ae522529.js";import"./List.a4ec4e10.js";import"./upperFirst.4268aa06.js";import"./_baseSlice.50189bc5.js";import"./toLower.fd6ed91c.js";import"./inherits_browser.11f3aeaf.js";import"./Link.e9eeb2e9.js";import"./useGetInfoFromIds.0695acf2.js";import"./use-deep-compare-effect.esm.84f86818.js";import"./uniq.a9fb9502.js";import"./_cacheHas.3d34eb58.js";import"./without.5a3916f3.js";import"./_Set.7dca34f2.js";import"./_setToArray.a82100c8.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.acc5be8a.js";import"./EntityIcon.cd547dc5.js";import"./core.esm.5a39768d.js";import"./pick.8f751592.js";import"./_baseClone.fcfb79d0.js";import"./isEmpty.52a3bb94.js";import"./isEqual.e7127514.js";import"./index.browser.8d441949.js";import"./union.1918a2e6.js";import"./CustomSelectWidget.8bed6124.js";import"./Select-54ac8379.esm.6fca8758.js";import"./isString.40efef4d.js";import"./factory.54d8e23b.js";import"./sqlFunctions.32eb366f.js";import"./QueryFilter.b6981f76.js";import"./useEntity.4e3ff0bc.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.258625e4.js";import"./queryUtils.54998cc3.js";import"./cloneDeep.862b3fc1.js";import"./NoSearchResults.ed811a7e.js";import"./NoData.d46cdac5.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.9457f14f.js";import"./Dropdown.c6c87cc1.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.5012e4c0.js";import"./RadioGroup.7c25e269.js";import"./RangeSlider.18e46d9a.js";import"./react-sizeme.51f167fb.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.f7e1757b.js";import"./Close.f1e80c2b.js";import"./relativeTime.86b47aee.js";import"./useDownloadList.8311e29e.js";import"./QueryCount.eb0f2bab.js";import"./react-select.esm.1b1b0c13.js";import"./IconList.e17aeab0.js";import"./UserCardList.2e00fa1e.js";import"./FileUpload.7c27e3b0.js";import"./UserSearchBox.f8b4b070.js";import"./EntityLink.4711e14a.js";import"./ErrorChip.097c7e23.js";import"./SynapseVideo.a7ab2161.js";const C={id:"3",accessRequirementId:"9602626",accessRequirementVersion:1,requestId:"1",ducFileHandleId:"3997203",irbFileHandleId:"3997205",accessorChanges:[{userId:e.toString(),type:s.RENEW_ACCESS},{userId:S.toString(),type:s.REVOKE_ACCESS}],researchProjectSnapshot:{id:"1",accessRequirementId:"9602626",institution:"Bage Sionetworks",projectLead:"Nick G",intendedDataUseStatement:"Updated IDU",createdOn:"2022-05-10T15:49:56.292Z",modifiedOn:"2022-05-11T13:25:06.021Z",createdBy:e.toString(),modifiedBy:e.toString(),etag:"8d0d4ec8-4cd9-45a7-b09d-390cd64cfca4"},isRenewalSubmission:!0,publication:"",summaryOfUse:"",submittedOn:"2022-05-11T13:25:20.262Z",modifiedOn:"2022-05-11T13:26:18.583Z",submittedBy:e.toString(),modifiedBy:e.toString(),state:a.REJECTED,rejectedReason:`Thank you for submitting your data access request. Before I can accept your request, please address the following:

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
