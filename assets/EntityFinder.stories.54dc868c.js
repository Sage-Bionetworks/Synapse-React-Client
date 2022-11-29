import{E as e,F as i,V as r}from"./EntityFinder.c0fa37d7.js";import{E as o}from"./index.d78db713.js";import{j as p}from"./jsx-runtime.470fedf8.js";import"./CardContainerLogic.5070cf39.js";import"./sqlFunctions.be5d1a4e.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.cd515180.js";import"./useGetInfoFromIds.662a20cc.js";import"./use-deep-compare-effect.esm.71ecaff2.js";import"./uniq.7877dc80.js";import"./_baseSlice.50189bc5.js";import"./toInteger.4d490e0a.js";import"./isSymbol.d795e13a.js";import"./isArray.35667cb8.js";import"./Button.32652e66.js";import"./index.35ce73ec.js";import"./_cacheHas.6a8d008c.js";import"./without.bad81c9f.js";import"./uniqueId.dfabcedb.js";import"./_Set.96bbcc5a.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.290eab74.js";import"./ColumnType.744125d2.js";import"./getEndpoint.bb7ded34.js";import"./FacetNav.770ced67.js";import"./queryUtils.b5014275.js";import"./useInfiniteQuery.20432a69.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.43e4fd26.js";import"./_baseClone.a93e8b8a.js";import"./_getTag.da3e73a3.js";import"./NoSearchResults.5c6626c4.js";import"./NoData.addfae26.js";import"./unCamelCase.07e38083.js";import"./useEntity.a051f784.js";import"./useMutation.61e704e1.js";import"./pick.ef3fcb56.js";import"./isEqual.b9ce82d6.js";import"./ElementWithTooltip.c4960d74.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.f9cd712e.js";import"./TransitionGroupContext.f07704a6.js";import"./styled.ca076b3f.js";import"./Tooltip.1e1cee1e.js";import"./createSvgIcon.d70ded48.js";import"./useTheme.aca7cff5.js";import"./index.a7a39b73.js";import"./iframe.2c3c563c.js";import"./utils.de422cb3.js";import"./InfoOutlined.2a13bef6.js";import"./Dropdown.2a6947a5.js";import"./usePrevious.98cde62f.js";import"./createWithBsPrefix.2bae2e8a.js";import"./hook.b9a8fbc8.js";import"./contains.2ee9a4e4.js";import"./usePopperMarginModifiers.12622bfd.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.6638f0fe.js";import"./RadioGroup.e948e185.js";import"./dayjs.min.4f8336ad.js";import"./RangeSlider.2cca730a.js";import"./factory.6c8cd09a.js";import"./react-sizeme.53fda094.js";import"./Skeleton.d220704f.js";import"./emotion-react.browser.esm.95d336ef.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.28d2c4c6.js";import"./Modal.02af6ee8.js";import"./inheritsLoose.007b7f1b.js";import"./divWithClassName.b6065814.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.42b83902.js";import"./Typography.c6dffdf6.js";import"./SelectionCriteriaPill.d6d749de.js";import"./Close.a4bdb366.js";import"./react-select.esm.375ac3d3.js";import"./Select-54ac8379.esm.b34a3580.js";import"./CustomSelectWidget.a05fb370.js";import"./index.browser.ff037ea7.js";import"./UserCard.81f9cb14.js";import"./IconCopy.6e42559c.js";import"./SkeletonTable.9062b54f.js";import"./times.9aa75450.js";import"./ToastMessage.0e3c58b8.js";import"./FullWidthAlert.e4048025.js";import"./Alert.aa708f58.js";import"./Overlay.41a15913.js";import"./WarningModal.cebca19c.js";import"./react-intersection-observer.esm.17b02c14.js";import"./DateFormatter.5fca59d3.js";import"./utc.762ba311.js";import"./EntityIcon.0733b939.js";import"./core.esm.2e89d46d.js";import"./isEmpty.6ee7f7a5.js";import"./union.5b5e6920.js";import"./isString.6b8ee545.js";import"./Button.5119f75c.js";import"./ButtonBase.776e8c8b.js";import"./relativeTime.01e67285.js";import"./useGetDownloadListStatistics.35f95881.js";import"./QueryCount.83c58f8a.js";import"./useGetAccessRequirement.c6d9edea.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.5f986572.js";import"./UserSearchBox.decc11d9.js";import"./UserOrTeamBadge.a535acf5.js";import"./EntityLink.30ea011f.js";import"./SynapseVideo.dd660335.js";import"./IconList.c8b33af8.js";import"./UserCardList.b6c4f6ae.js";import"./Arrow.c1979753.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.fd800dca.js";import"./CalendarWithIconFormGroup.e64ef29f.js";import"./localizedFormat.c1f50f9d.js";import"./IconButton.1c2e3acd.js";import"./List.4c79846f.js";import"./Modal.591332b6.js";import"./Fade.260ddc4e.js";import"./index.f2a06ad4.js";import"./MenuList.836b0492.js";import"./groupBy.0fc9d085.js";import"./EntityModal.80aecfb3.js";import"./Sort.716a5116.js";import"./useFavorites.341929a5.js";import"./Link.46681652.js";const Ao={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import EntityFinder from './EntityFinder'
import { FinderScope } from './tree/EntityTree'
import { EntityType } from '../../utils/synapseTypes'
import { VersionSelectionType } from './VersionSelectionType'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/EntityFinder',
  component: EntityFinder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    versionSelection: {
      options: ['REQUIRED', 'DISABLED', 'TRACKED', 'UNTRACKED'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof EntityFinder>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EntityFinder> = args => (
  <EntityFinder {...args} />
)

export const DualPane = Template.bind({})
DualPane.args = {
  treeOnly: false,
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: 'syn23567475',
  initialContainer: 'syn24183903',
  selectMultiple: true,
  visibleTypesInList: Object.values(EntityType),
  versionSelection: VersionSelectionType.TRACKED,
  onSelectedChange: selected => {
    console.log('Selection changed:', selected)
  },
  selectableTypes: Object.values(EntityType),
  selectedCopy: count => {
    return \`\${count} Item\${count > 1 ? 's' : ''} Selected\`
  },
}

export const SinglePane = Template.bind({})

SinglePane.args = {
  treeOnly: true,
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: 'syn23567475',
  initialContainer: 'syn24183903',
  selectMultiple: false,
  visibleTypesInTree: [EntityType.PROJECT, EntityType.FOLDER, EntityType.TABLE],
  versionSelection: VersionSelectionType.DISALLOWED,
  onSelectedChange: selected => {
    console.log('Selection changed:', selected)
  },
  selectableTypes: [EntityType.PROJECT, EntityType.FOLDER],
}
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:e,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},n=t=>p(e,{...t}),m=n.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(o),versionSelection:r.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(o),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=n.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[o.PROJECT,o.FOLDER,o.TABLE],versionSelection:r.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[o.PROJECT,o.FOLDER]};const ho=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,ho as __namedExportsOrder,Ao as default};
