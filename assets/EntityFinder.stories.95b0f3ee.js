import{E as o,F as i,V as n}from"./EntityFinder.9d3d73f0.js";import{x as e}from"./index.c07b435e.js";import{j as p}from"./jsx-runtime.a1d381ad.js";import"./CardContainerLogic.0110c040.js";import"./sqlFunctions.805519ce.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.bd2e15fe.js";import"./useGetInfoFromIds.abdb800c.js";import"./use-deep-compare-effect.esm.9ef0fe73.js";import"./uniq.4ff00730.js";import"./_baseSlice.50189bc5.js";import"./toInteger.6a5fcd60.js";import"./isSymbol.9201fb1c.js";import"./isArray.cfd918dc.js";import"./Button.ebc3484d.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./_cacheHas.e93d1118.js";import"./without.325b87a0.js";import"./uniqueId.cac1ac91.js";import"./_Set.3c924fe3.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.b6aa8bf5.js";import"./ColumnType.744125d2.js";import"./getEndpoint.bb7ded34.js";import"./Tooltip.881da3c6.js";import"./createSvgIcon.8505b138.js";import"./SvgIcon.0314c6b1.js";import"./withStyles.697310ee.js";import"./utils.6cb5795e.js";import"./index.9f535dbb.js";import"./iframe.81590c6e.js";import"./makeStyles.2b248e78.js";import"./FacetNav.bcb76897.js";import"./queryUtils.f36c9064.js";import"./useInfiniteQuery.3fef2ad0.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.53ae917a.js";import"./_baseClone.8224a7e6.js";import"./_getTag.25ac8552.js";import"./NoSearchResults.c61448a7.js";import"./NoData.ebfea370.js";import"./unCamelCase.07e38083.js";import"./useEntity.ca1adaf1.js";import"./useMutation.0c99a4c1.js";import"./pick.13f2ab52.js";import"./isEqual.fddce197.js";import"./ElementWithTooltip.4022e237.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.61de10c1.js";import"./InfoOutlined.c00dd9c7.js";import"./Dropdown.20321050.js";import"./usePrevious.d92e7738.js";import"./createWithBsPrefix.b8918cd7.js";import"./contains.f621b86d.js";import"./usePopperMarginModifiers.7bfa5684.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.e50ea0fd.js";import"./RadioGroup.23c1b7a0.js";import"./moment.a565bb48.js";import"./RangeSlider.5627c006.js";import"./factory.772ba702.js";import"./react-sizeme.756b4b38.js";import"./Skeleton.00fa93e7.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.dc2de5f4.js";import"./Typography.1abf3c12.js";import"./Modal.f3a6a5d9.js";import"./inheritsLoose.bb535a25.js";import"./Alert.ae374429.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.f4d59a83.js";import"./SelectionCriteriaPill.f6044d63.js";import"./Close.3b7d3bee.js";import"./react-select.esm.918aabd4.js";import"./Select-54ac8379.esm.bfe16fe6.js";import"./CustomSelectWidget.bf7014d1.js";import"./index.browser.033cf97b.js";import"./UserCard.0e32065f.js";import"./IconCopy.9e4bc935.js";import"./SkeletonTable.eecd7a8b.js";import"./times.3a1a85cc.js";import"./ToastMessage.204b2104.js";import"./FullWidthAlert.9cc3b3c7.js";import"./Overlay.ba0f781a.js";import"./WarningModal.3103bc16.js";import"./react-intersection-observer.esm.037889e1.js";import"./DateFormatter.83954225.js";import"./EntityIcon.28fea333.js";import"./core.esm.ae41dce5.js";import"./isEmpty.3ee393d3.js";import"./union.1a7f9980.js";import"./isString.a75165dc.js";import"./useGetDownloadListStatistics.4b65d66f.js";import"./QueryCount.3c131b04.js";import"./useGetAccessRequirement.b1289395.js";import"./ManagedACTAccessRequirementStatus.85df5b7f.js";import"./FileUpload.beef5d48.js";import"./UserSearchBox.aaaa86a0.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.8b869895.js";import"./EntityLink.c3a48de1.js";import"./SynapseVideo.e60d111b.js";import"./IconList.02a063f1.js";import"./UserCardList.56a389de.js";import"./Arrow.1263f8b7.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.6f9bbf1c.js";import"./CalendarWithIconFormGroup.9a9ef092.js";import"./groupBy.60127c0f.js";import"./EntityModal.fd4dd927.js";import"./Sort.3f366e07.js";import"./useFavorites.2543676a.js";const Se={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=t=>p(o,{...t}),m=r.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),versionSelection:n.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=r.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],versionSelection:n.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const ge=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,ge as __namedExportsOrder,Se as default};
