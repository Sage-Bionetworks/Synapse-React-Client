import{g as r}from"./CardContainerLogic.22dda770.js";import{j as o,F as t}from"./jsx-runtime.f5d212d1.js";import"./index.a70ddfd8.js";import"./index.9c9305ea.js";import"./iframe.89bb5feb.js";import"./SynapseConstants.290eab74.js";import"./Button.8170df20.js";import"./styled.f405056b.js";import"./utils.0b8153da.js";import"./TransitionGroupContext.7656eb12.js";import"./useTheme.e9ed9b1c.js";import"./Alert.257c6bb8.js";import"./hook.70591bc2.js";import"./createWithBsPrefix.91f140d5.js";import"./divWithClassName.5b1e6cb1.js";import"./index.35ce73ec.js";import"./isArray.b1617f44.js";import"./getEndpoint.bb7ded34.js";import"./Link.3fccb4a8.js";import"./Typography.513a1f2d.js";import"./Button.25b7a851.js";import"./ButtonBase.5d7dfd7c.js";import"./emotion-react.browser.esm.6d1cbddb.js";import"./sqlFunctions.0d8a440a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.15395a8e.js";import"./useGetInfoFromIds.65649506.js";import"./use-deep-compare-effect.esm.01e563cf.js";import"./uniq.6211bca0.js";import"./_baseSlice.50189bc5.js";import"./toInteger.66a06a81.js";import"./isSymbol.4571438c.js";import"./_cacheHas.30de5535.js";import"./without.4bc104a5.js";import"./uniqueId.7666cadc.js";import"./_Set.90191ba0.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.4ab26323.js";import"./queryUtils.0b669d66.js";import"./useInfiniteQuery.e08bd0cb.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.cdc6b63c.js";import"./_baseClone.f08117cf.js";import"./_getTag.3dcbc9d3.js";import"./NoSearchResults.ad7e4660.js";import"./NoData.ec1f63e9.js";import"./unCamelCase.07e38083.js";import"./useEntity.b34206e4.js";import"./useMutation.cf0389fb.js";import"./pick.42efd8de.js";import"./isEqual.4e266751.js";import"./ElementWithTooltip.4d688dc9.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.379fb95f.js";import"./Tooltip.b3e9245c.js";import"./createSvgIcon.2626c7dc.js";import"./InfoOutlined.1ca50192.js";import"./Dropdown.913e2bbd.js";import"./usePrevious.1e019527.js";import"./contains.ea465217.js";import"./usePopperMarginModifiers.35995d93.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.aa087756.js";import"./RadioGroup.1044ef08.js";import"./dayjs.min.cec940d1.js";import"./RangeSlider.4626f0f7.js";import"./factory.89112c6a.js";import"./react-sizeme.198cf4ef.js";import"./Skeleton.f056e7cd.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.08b51276.js";import"./Modal.4d1b1cfd.js";import"./inheritsLoose.6f21ccd9.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.e98911da.js";import"./SelectionCriteriaPill.fc8715f2.js";import"./Close.13308156.js";import"./react-select.esm.53fc7918.js";import"./Select-54ac8379.esm.b455933c.js";import"./CustomSelectWidget.794351ea.js";import"./index.browser.49922a6a.js";import"./UserCard.ecc0d7d9.js";import"./IconCopy.2e6c109a.js";import"./SkeletonTable.0d96f34c.js";import"./times.3c390ae7.js";import"./ToastMessage.276b1811.js";import"./FullWidthAlert.c92729a8.js";import"./Overlay.9ab1c420.js";import"./WarningModal.c5980f0a.js";import"./react-intersection-observer.esm.4e900592.js";import"./DateFormatter.5d346bec.js";import"./utc.c9b2619e.js";import"./EntityIcon.55f24a87.js";import"./core.esm.5f2a8c9d.js";import"./isEmpty.b089c1ff.js";import"./union.c830eef2.js";import"./isString.a83352a5.js";import"./relativeTime.6d8f84b5.js";import"./useGetDownloadListStatistics.69dc0d50.js";import"./QueryCount.78565120.js";import"./useGetAccessRequirement.727ec4cc.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.bb85c47f.js";import"./UserSearchBox.8ce39971.js";import"./UserOrTeamBadge.4a4f6dfb.js";import"./EntityLink.13c84750.js";import"./SynapseVideo.ffab6e8c.js";import"./IconList.6319a730.js";import"./UserCardList.4517f10a.js";const dt={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProgrammaticInstructionsModal } from './ProgrammaticInstructionsModal'

export default {
  title: 'Download/ProgrammaticInstructionsModal',
  component: ProgrammaticInstructionsModal,
} as ComponentMeta<typeof ProgrammaticInstructionsModal>

const Template: ComponentStory<typeof ProgrammaticInstructionsModal> = args => (
  <ProgrammaticInstructionsModal {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  show: true,
  title: 'Programmatic Instructions',
  cliNotes: <>Can provide Synapse CLI specific notes</>,
  cliCode: 'Synapse CLI client code',
  rNotes: <>Can provide Synapse R Client specific notes</>,
  rCode: 'Synapse R client code',
  pythonNotes: <>Can provide Synapse Python Client specific notes</>,
  pythonCode: 'Synapse Python client code',
  helpUrl: 'https://help.synapse.org',
  helpMarkdown:
    'Option to show a _HelpPopover_ in the title bar with a link to the docs site',
}
`,locationsMap:{demo:{startLoc:{col:71,line:10},endLoc:{col:1,line:12},startBody:{col:71,line:10},endBody:{col:1,line:12}}}}},title:"Download/ProgrammaticInstructionsModal",component:r},p=i=>o(r,{...i}),m=p.bind({});m.args={show:!0,title:"Programmatic Instructions",cliNotes:o(t,{children:"Can provide Synapse CLI specific notes"}),cliCode:"Synapse CLI client code",rNotes:o(t,{children:"Can provide Synapse R Client specific notes"}),rCode:"Synapse R client code",pythonNotes:o(t,{children:"Can provide Synapse Python Client specific notes"}),pythonCode:"Synapse Python client code",helpUrl:"https://help.synapse.org",helpMarkdown:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"};const yt=["Demo"];export{m as Demo,yt as __namedExportsOrder,dt as default};
