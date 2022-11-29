import{E as t,a as r}from"./EntityModal.88ca9b24.js";import{j as i}from"./jsx-runtime.9272ed69.js";import"./index.f6d21e1b.js";import"./index.dc51ea0b.js";import"./iframe.e4b610a3.js";import"./SynapseConstants.290eab74.js";import"./Button.db898533.js";import"./styled.0de421fa.js";import"./utils.6e1717b5.js";import"./TransitionGroupContext.54f3d5ea.js";import"./useTheme.75529918.js";import"./Alert.2534b0a8.js";import"./hook.0361e512.js";import"./createWithBsPrefix.9ea76fe5.js";import"./divWithClassName.c5203597.js";import"./index.35ce73ec.js";import"./Fade.cc51c470.js";import"./isArray.f757e7ba.js";import"./getEndpoint.bb7ded34.js";import"./Link.8b0bf192.js";import"./Typography.1f221702.js";import"./Button.0c0c729f.js";import"./ButtonBase.3405045f.js";import"./emotion-react.browser.esm.1c97b976.js";import"./CardContainerLogic.4025bf40.js";import"./sqlFunctions.bf9ee2ef.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.3f245f1f.js";import"./useGetInfoFromIds.5d0f54bb.js";import"./use-deep-compare-effect.esm.76ae4c34.js";import"./uniq.67510ae5.js";import"./_baseSlice.50189bc5.js";import"./toInteger.13c3eb15.js";import"./isSymbol.04dc93d5.js";import"./_cacheHas.c948dd29.js";import"./without.3345252e.js";import"./uniqueId.f24c8a17.js";import"./_Set.64acb5b6.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.cc77dfae.js";import"./queryUtils.5d31346f.js";import"./useInfiniteQuery.35cc16ee.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.80edac49.js";import"./_baseClone.2e5b05e6.js";import"./_getTag.f2a17556.js";import"./NoSearchResults.028d391e.js";import"./NoData.51daf7bd.js";import"./unCamelCase.07e38083.js";import"./useEntity.e5686c34.js";import"./useMutation.8349b664.js";import"./pick.cd7420dd.js";import"./isEqual.98aabb8c.js";import"./ElementWithTooltip.20dbece6.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.26b6f898.js";import"./Tooltip.d2aa8c40.js";import"./createSvgIcon.1c5ae5be.js";import"./InfoOutlined.cadfca07.js";import"./Dropdown.d28c57f6.js";import"./usePrevious.d34a3e2f.js";import"./contains.27e7aea9.js";import"./usePopperMarginModifiers.d53889fd.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.50f2be5d.js";import"./RadioGroup.3f6db470.js";import"./dayjs.min.18cbb91e.js";import"./RangeSlider.c22adf0d.js";import"./factory.4b720305.js";import"./react-sizeme.3704c9c8.js";import"./Skeleton.fb3032fb.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.25a02c3d.js";import"./Modal.e699c9f3.js";import"./inheritsLoose.5c9703d4.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.cd5903ac.js";import"./SelectionCriteriaPill.6e1c66c9.js";import"./Close.ed93f062.js";import"./react-select.esm.ce9948dd.js";import"./Select-54ac8379.esm.749d2aa7.js";import"./CustomSelectWidget.d1adfe40.js";import"./index.browser.7030d3f5.js";import"./UserCard.fd71ec21.js";import"./IconCopy.5eab956d.js";import"./SkeletonTable.f9509214.js";import"./times.51f590ec.js";import"./ToastMessage.c90a289b.js";import"./FullWidthAlert.5512750c.js";import"./Overlay.5bf74367.js";import"./WarningModal.5f3b7633.js";import"./react-intersection-observer.esm.e538f341.js";import"./DateFormatter.35b93fe5.js";import"./utc.03e74faf.js";import"./EntityIcon.b8ef7967.js";import"./core.esm.2083ab36.js";import"./isEmpty.663e1621.js";import"./union.ca5e4ff7.js";import"./isString.138f81b2.js";import"./relativeTime.71ec3373.js";import"./useGetDownloadListStatistics.86ed1598.js";import"./QueryCount.e191d632.js";import"./useGetAccessRequirement.8b6f0b13.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.0bd6c1ea.js";import"./UserSearchBox.5273bd2a.js";import"./UserOrTeamBadge.f00a630e.js";import"./EntityLink.35f177b6.js";import"./SynapseVideo.a0ba38da.js";import"./IconList.d92f66a0.js";import"./UserCardList.ba94391f.js";import"./SchemaDrivenAnnotationEditor.a50fadad.js";import"./CalendarWithIconFormGroup.4685100e.js";import"./localizedFormat.c74d158c.js";import"./IconButton.f0474ddf.js";import"./List.d01ab908.js";import"./Modal.2f93c74e.js";import"./index.f2a06ad4.js";import"./MenuList.8f13070b.js";import"./groupBy.20c4f8ca.js";const So={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { EntityModal, EntityModalTabs } from './EntityModal'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/EntityModal',
  component: EntityModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof EntityModal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EntityModal> = args => (
  <EntityModal {...args} show={true} />
)

export const Project = Template.bind({})
Project.args = {
  initialTab: EntityModalTabs.ANNOTATIONS,
  entityId: 'syn23567475',
}
`,locationsMap:{project:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"Synapse/EntityModal",component:t,argTypes:{}},p=o=>i(t,{...o,show:!0}),m=p.bind({});m.args={initialTab:r.ANNOTATIONS,entityId:"syn23567475"};const No=["Project"];export{m as Project,No as __namedExportsOrder,So as default};
