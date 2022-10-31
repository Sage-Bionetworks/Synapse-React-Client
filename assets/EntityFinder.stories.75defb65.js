import{E as o,F as i,V as n}from"./EntityFinder.f86c4a0c.js";import{E as e}from"./EntityIcon.8faf30b2.js";import{j as p}from"./jsx-runtime.b29a5274.js";import"./CardContainerLogic.f0ec455f.js";import"./index.dcde5598.js";import"./index.73e3d9d7.js";import"./iframe.45f65fdb.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.c77a6de6.js";import"./index.57d09176.js";import"./withStyles.2d1152f5.js";import"./utils.c867bc57.js";import"./Alert.5f5d4d35.js";import"./createWithBsPrefix.2e8fbe6b.js";import"./index.35ce73ec.js";import"./isArray.0036f9bf.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.5f62e5e7.js";import"./sqlFunctions.a660c34a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.c3d3eddf.js";import"./TypeUtils.a2c41307.js";import"./useGetInfoFromIds.987bdce4.js";import"./use-deep-compare-effect.esm.6fd3cff2.js";import"./uniq.638d0678.js";import"./_baseSlice.50189bc5.js";import"./toInteger.8f4cfb94.js";import"./isSymbol.9796f8db.js";import"./_cacheHas.f4993e5b.js";import"./without.cbf4274d.js";import"./uniqueId.759a0be8.js";import"./_Set.14ba8e4b.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./Tooltip.76e779de.js";import"./createSvgIcon.363a4d4a.js";import"./makeStyles.90bec0f4.js";import"./FacetNav.b6c35844.js";import"./queryUtils.2742e34a.js";import"./useInfiniteQuery.d24d0056.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ca314ea1.js";import"./_baseClone.6b2ce6e1.js";import"./_getTag.88993a13.js";import"./NoSearchResults.c32e2263.js";import"./NoData.c8e3cb03.js";import"./unCamelCase.07e38083.js";import"./useEntity.3eb8931f.js";import"./useMutation.7b9e5247.js";import"./pick.2bd59cca.js";import"./isEqual.85b5a6ad.js";import"./ElementWithTooltip.28c55a12.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.9f77ee65.js";import"./InfoOutlined.e9bf0eda.js";import"./Dropdown.4147a8b4.js";import"./usePrevious.b750bb14.js";import"./contains.86bdf9ac.js";import"./usePopperMarginModifiers.5d89d5c2.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b10f9bff.js";import"./RadioGroup.b29639f6.js";import"./moment.a565bb48.js";import"./RangeSlider.c9068914.js";import"./factory.737a5844.js";import"./react-sizeme.73155a78.js";import"./Skeleton.c9932f2f.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.a52a3a17.js";import"./Typography.e39b1a57.js";import"./Modal.1f2af341.js";import"./inheritsLoose.02d2a797.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.f3a64467.js";import"./SelectionCriteriaPill.7779b758.js";import"./Close.9a7b3a99.js";import"./react-select.esm.a7bca0cc.js";import"./Select-54ac8379.esm.f0abb30f.js";import"./CustomSelectWidget.d4114699.js";import"./index.browser.376825fc.js";import"./UserCard.1da63075.js";import"./IconCopy.fa0d8a51.js";import"./SkeletonTable.94c4c988.js";import"./times.52672c9d.js";import"./ToastMessage.cdfb50d6.js";import"./FullWidthAlert.3cefffa2.js";import"./Overlay.14a6d56e.js";import"./WarningModal.559d4a18.js";import"./react-intersection-observer.esm.d88e3022.js";import"./DateFormatter.a6b80fa8.js";import"./core.esm.47975909.js";import"./isEmpty.e477a37c.js";import"./union.2f1025d7.js";import"./isString.efbbdc94.js";import"./useGetDownloadListStatistics.6b4b1459.js";import"./QueryCount.ae1d7c79.js";import"./useGetAccessRequirement.172f6b7e.js";import"./ManagedACTAccessRequirementStatus.6087eccb.js";import"./FileUpload.37f2faa4.js";import"./UserSearchBox.e5ec82c0.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.a2cc2c28.js";import"./EntityLink.43518ecd.js";import"./SynapseVideo.26c329a2.js";import"./IconList.adc62b28.js";import"./UserCardList.b78be9fd.js";import"./Arrow.a44d625e.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.ba063197.js";import"./CalendarWithIconFormGroup.03079533.js";import"./groupBy.35d54c8f.js";import"./EntityModal.9152c7d6.js";import"./Sort.f84cdf69.js";import"./useFavorites.1ae9afa3.js";const ge={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=t=>p(o,{...t}),m=r.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),versionSelection:n.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=r.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],versionSelection:n.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const Ce=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,Ce as __namedExportsOrder,ge as default};
