import{E as t,a as r}from"./EntityModal.80aecfb3.js";import{j as i}from"./jsx-runtime.470fedf8.js";import"./index.d78db713.js";import"./index.a7a39b73.js";import"./iframe.2c3c563c.js";import"./SynapseConstants.290eab74.js";import"./Button.32652e66.js";import"./styled.ca076b3f.js";import"./utils.de422cb3.js";import"./TransitionGroupContext.f07704a6.js";import"./useTheme.aca7cff5.js";import"./Alert.aa708f58.js";import"./hook.b9a8fbc8.js";import"./createWithBsPrefix.2bae2e8a.js";import"./divWithClassName.b6065814.js";import"./index.35ce73ec.js";import"./Fade.260ddc4e.js";import"./isArray.35667cb8.js";import"./getEndpoint.bb7ded34.js";import"./Link.46681652.js";import"./Typography.c6dffdf6.js";import"./Button.5119f75c.js";import"./ButtonBase.776e8c8b.js";import"./emotion-react.browser.esm.95d336ef.js";import"./CardContainerLogic.5070cf39.js";import"./sqlFunctions.be5d1a4e.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.cd515180.js";import"./useGetInfoFromIds.662a20cc.js";import"./use-deep-compare-effect.esm.71ecaff2.js";import"./uniq.7877dc80.js";import"./_baseSlice.50189bc5.js";import"./toInteger.4d490e0a.js";import"./isSymbol.d795e13a.js";import"./_cacheHas.6a8d008c.js";import"./without.bad81c9f.js";import"./uniqueId.dfabcedb.js";import"./_Set.96bbcc5a.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.770ced67.js";import"./queryUtils.b5014275.js";import"./useInfiniteQuery.20432a69.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.43e4fd26.js";import"./_baseClone.a93e8b8a.js";import"./_getTag.da3e73a3.js";import"./NoSearchResults.5c6626c4.js";import"./NoData.addfae26.js";import"./unCamelCase.07e38083.js";import"./useEntity.a051f784.js";import"./useMutation.61e704e1.js";import"./pick.ef3fcb56.js";import"./isEqual.b9ce82d6.js";import"./ElementWithTooltip.c4960d74.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.f9cd712e.js";import"./Tooltip.1e1cee1e.js";import"./createSvgIcon.d70ded48.js";import"./InfoOutlined.2a13bef6.js";import"./Dropdown.2a6947a5.js";import"./usePrevious.98cde62f.js";import"./contains.2ee9a4e4.js";import"./usePopperMarginModifiers.12622bfd.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.6638f0fe.js";import"./RadioGroup.e948e185.js";import"./dayjs.min.4f8336ad.js";import"./RangeSlider.2cca730a.js";import"./factory.6c8cd09a.js";import"./react-sizeme.53fda094.js";import"./Skeleton.d220704f.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.28d2c4c6.js";import"./Modal.02af6ee8.js";import"./inheritsLoose.007b7f1b.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.42b83902.js";import"./SelectionCriteriaPill.d6d749de.js";import"./Close.a4bdb366.js";import"./react-select.esm.375ac3d3.js";import"./Select-54ac8379.esm.b34a3580.js";import"./CustomSelectWidget.a05fb370.js";import"./index.browser.ff037ea7.js";import"./UserCard.81f9cb14.js";import"./IconCopy.6e42559c.js";import"./SkeletonTable.9062b54f.js";import"./times.9aa75450.js";import"./ToastMessage.0e3c58b8.js";import"./FullWidthAlert.e4048025.js";import"./Overlay.41a15913.js";import"./WarningModal.cebca19c.js";import"./react-intersection-observer.esm.17b02c14.js";import"./DateFormatter.5fca59d3.js";import"./utc.762ba311.js";import"./EntityIcon.0733b939.js";import"./core.esm.2e89d46d.js";import"./isEmpty.6ee7f7a5.js";import"./union.5b5e6920.js";import"./isString.6b8ee545.js";import"./relativeTime.01e67285.js";import"./useGetDownloadListStatistics.35f95881.js";import"./QueryCount.83c58f8a.js";import"./useGetAccessRequirement.c6d9edea.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.5f986572.js";import"./UserSearchBox.decc11d9.js";import"./UserOrTeamBadge.a535acf5.js";import"./EntityLink.30ea011f.js";import"./SynapseVideo.dd660335.js";import"./IconList.c8b33af8.js";import"./UserCardList.b6c4f6ae.js";import"./SchemaDrivenAnnotationEditor.fd800dca.js";import"./CalendarWithIconFormGroup.e64ef29f.js";import"./localizedFormat.c1f50f9d.js";import"./IconButton.1c2e3acd.js";import"./List.4c79846f.js";import"./Modal.591332b6.js";import"./index.f2a06ad4.js";import"./MenuList.836b0492.js";import"./groupBy.0fc9d085.js";const So={parameters:{storySource:{source:`import React from 'react'
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
