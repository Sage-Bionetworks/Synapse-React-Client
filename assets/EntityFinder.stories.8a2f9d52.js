import{E as o,F as i,V as n}from"./EntityFinder.5b926582.js";import{E as e}from"./EntityIcon.f3162245.js";import{j as p}from"./jsx-runtime.ed0bc2e8.js";import"./CardContainerLogic.70bdaa71.js";import"./index.444e3572.js";import"./index.68bd2905.js";import"./iframe.1c77586e.js";import"./Button.ead7d59a.js";import"./index.57d09176.js";import"./withStyles.5eea39d5.js";import"./utils.31a80d71.js";import"./Alert.e70a23c6.js";import"./index.35ce73ec.js";import"./isArray.69d02dee.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.1c3fe3f1.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.fc63d11c.js";import"./use-deep-compare-effect.esm.63a03aa5.js";import"./uniq.e0b70e96.js";import"./_baseSlice.50189bc5.js";import"./toInteger.c1671d6c.js";import"./isSymbol.3ae1367c.js";import"./_cacheHas.2f01a71b.js";import"./without.ae039a4c.js";import"./uniqueId.e6e71b68.js";import"./_Set.79ce457d.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.aa21c398.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.af973a0c.js";import"./Tooltip.9455954b.js";import"./createSvgIcon.b88943f5.js";import"./makeStyles.83c340c0.js";import"./InfoOutlined.10c65527.js";import"./Dropdown.cea6d11d.js";import"./Modal.2df339d5.js";import"./useWaitForDOMRef.2b50b75b.js";import"./inheritsLoose.02c5cdc5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.2ccc8168.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.244c418d.js";import"./queryUtils.b6e7a174.js";import"./useInfiniteQuery.4114925f.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.c1db8169.js";import"./_baseClone.32511df5.js";import"./_getTag.09032bbf.js";import"./useEntity.a73b6a7f.js";import"./useMutation.60a502f5.js";import"./pick.fbb2f290.js";import"./Checkbox.fc5ecb82.js";import"./RadioGroup.0bddc76f.js";import"./moment.a565bb48.js";import"./RangeSlider.e5b4fec2.js";import"./factory.ee8ba69d.js";import"./react-sizeme.22227f3d.js";import"./Skeleton.d97a08a6.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.d5fc7030.js";import"./Typography.935cd23d.js";import"./TypeUtils.a2c41307.js";import"./Close.2a111ba4.js";import"./react-select.esm.cd0b6178.js";import"./Select-54ac8379.esm.d5f59070.js";import"./CustomSelectWidget.aa330617.js";import"./index.browser.0b0b54ae.js";import"./WarningModal.57553bf6.js";import"./react-intersection-observer.esm.94964140.js";import"./UserCard.89349cd4.js";import"./IconCopy.82604258.js";import"./SkeletonTable.a364440a.js";import"./times.12135b85.js";import"./ToastMessage.f3c1e08b.js";import"./FullWidthAlert.7478a55e.js";import"./Overlay.d35a38e4.js";import"./DateFormatter.db43e9a9.js";import"./core.esm.241c4529.js";import"./isEmpty.c32e2e50.js";import"./isEqual.7b80062a.js";import"./union.ec09b824.js";import"./isString.e1b80b76.js";import"./useGetDownloadListStatistics.c8592017.js";import"./QueryCount.8c3d262b.js";import"./NoData.14d6f6b5.js";import"./useGetAccessRequirement.6e90b266.js";import"./ManagedACTAccessRequirementStatus.3daf4e8d.js";import"./FileUpload.7b8befbf.js";import"./UserSearchBox.d170c2a6.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.1f67599d.js";import"./EntityLink.cfbd5ae5.js";import"./NoSearchResults.826667f9.js";import"./SynapseVideo.10f842ec.js";import"./IconList.f6977954.js";import"./UserCardList.acf920eb.js";import"./Arrow.6382f52e.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.cab1f6d8.js";import"./CalendarWithIconFormGroup.6302b616.js";import"./groupBy.3d35b60d.js";import"./EntityModal.b499ea43.js";import"./Sort.ab0de8cc.js";import"./useFavorites.b878d0f9.js";const le={parameters:{storySource:{source:`import React from 'react'
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
