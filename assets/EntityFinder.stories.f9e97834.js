import{E as o,F as i,V as n}from"./EntityFinder.100cac72.js";import{E as e}from"./EntityIcon.d798df03.js";import{j as p}from"./jsx-runtime.a232804d.js";import"./CardContainerLogic.421e4955.js";import"./index.df4d7189.js";import"./index.ba62157d.js";import"./iframe.10584503.js";import"./Button.6d51f091.js";import"./index.57d09176.js";import"./withStyles.1db4abc8.js";import"./utils.428c4b7a.js";import"./Alert.05377b39.js";import"./index.35ce73ec.js";import"./isArray.a5a56f48.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.885aee5a.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.e6e0a308.js";import"./use-deep-compare-effect.esm.2b5691ed.js";import"./uniq.f95d5498.js";import"./_baseSlice.50189bc5.js";import"./toInteger.99850a56.js";import"./isSymbol.af0f15b0.js";import"./_cacheHas.2f6e173d.js";import"./without.49e70119.js";import"./uniqueId.42db352a.js";import"./_Set.13d8dc83.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.6f5c5d8e.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.7d220ad3.js";import"./Tooltip.d38d9e30.js";import"./createSvgIcon.2aaf66cc.js";import"./makeStyles.403aaa55.js";import"./InfoOutlined.d81a19b2.js";import"./Dropdown.026e24f0.js";import"./Modal.487f443a.js";import"./useWaitForDOMRef.b691e8e9.js";import"./inheritsLoose.5977b5ad.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.2b01b6ad.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.f42b17a9.js";import"./queryUtils.9bf0fae4.js";import"./useInfiniteQuery.b7b3231b.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.7282c000.js";import"./_baseClone.1f24ee6e.js";import"./_getTag.c51a4401.js";import"./useEntity.7c42ef40.js";import"./useMutation.4f028f2a.js";import"./pick.aef66a75.js";import"./Checkbox.7ef807c5.js";import"./RadioGroup.cc16eeb1.js";import"./moment.a565bb48.js";import"./RangeSlider.62604c0d.js";import"./factory.6225fee9.js";import"./react-sizeme.aa00de7b.js";import"./Skeleton.e3b72fa9.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.01a40955.js";import"./Typography.9247f57a.js";import"./TypeUtils.a2c41307.js";import"./Close.c83b42bd.js";import"./react-select.esm.67e5da67.js";import"./Select-54ac8379.esm.9dfe37c4.js";import"./CustomSelectWidget.ccbb7c74.js";import"./index.browser.d89fac8c.js";import"./WarningModal.a66e9200.js";import"./react-intersection-observer.esm.d5ed9f38.js";import"./UserCard.7296873e.js";import"./IconCopy.5c84b271.js";import"./SkeletonTable.42b69551.js";import"./times.94f8f16d.js";import"./ToastMessage.b42768ca.js";import"./FullWidthAlert.5abd6e7a.js";import"./Overlay.2735c2ff.js";import"./DateFormatter.ce8cc91c.js";import"./core.esm.a7a5cd9f.js";import"./isEmpty.d7fd8764.js";import"./isEqual.18f214cb.js";import"./union.17ff043e.js";import"./isString.75f8fb7d.js";import"./useGetDownloadListStatistics.b9bf89d3.js";import"./QueryCount.ff63676b.js";import"./NoData.8f77bcd7.js";import"./useGetAccessRequirement.cd2c60ff.js";import"./ManagedACTAccessRequirementStatus.c68c8098.js";import"./FileUpload.af61c181.js";import"./UserSearchBox.7bb509e8.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.f72816e7.js";import"./EntityLink.5231b74d.js";import"./NoSearchResults.9dcecf7f.js";import"./SynapseVideo.7d27d405.js";import"./IconList.5039410a.js";import"./UserCardList.17a2ea75.js";import"./Arrow.e875503c.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.c1fb4dcb.js";import"./CalendarWithIconFormGroup.19c1a084.js";import"./groupBy.52ffe11f.js";import"./EntityModal.e8057e06.js";import"./Sort.fbd47919.js";import"./useFavorites.27ce4563.js";const le={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=t=>p(o,{...t}),m=r.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),versionSelection:n.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=r.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],versionSelection:n.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const ce=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,ce as __namedExportsOrder,le as default};
