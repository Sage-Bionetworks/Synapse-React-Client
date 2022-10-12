import{E as o,F as i,V as n}from"./EntityFinder.e18ef3ac.js";import{E as e}from"./EntityIcon.38dfbeae.js";import{j as p}from"./jsx-runtime.f7cf66fc.js";import"./CardContainerLogic.525e473b.js";import"./index.a7b4e4df.js";import"./index.1e38edd3.js";import"./iframe.7a93df40.js";import"./Alert.a83e08c9.js";import"./Button.8c8504e0.js";import"./index.57d09176.js";import"./Transition.9d380883.js";import"./index.35ce73ec.js";import"./isArray.a5837af6.js";import"./withStyles.ddbf8a64.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d61a6d98.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.46d82302.js";import"./use-deep-compare-effect.esm.2af231c9.js";import"./uniq.da1993f7.js";import"./_baseSlice.50189bc5.js";import"./toInteger.2ba4f663.js";import"./isSymbol.c2dfe727.js";import"./_cacheHas.3bd942cd.js";import"./without.f66365c3.js";import"./uniqueId.bff82890.js";import"./_Set.30f40b38.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.acf8538e.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.09883cec.js";import"./Tooltip.7bec90df.js";import"./createSvgIcon.fe8b3870.js";import"./useTheme.af842711.js";import"./makeStyles.c3ae2cc2.js";import"./InfoOutlined.a5d342c6.js";import"./Dropdown.a23c4d18.js";import"./Modal.d2d919b5.js";import"./useWaitForDOMRef.58e2d194.js";import"./inheritsLoose.70012080.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.206050ec.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.15d72b7c.js";import"./queryUtils.336cf5e5.js";import"./useInfiniteQuery.9ecf2d2e.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.8f25a5be.js";import"./_baseClone.1ffdc33c.js";import"./_getTag.44672c3a.js";import"./useEntity.28ef4d9d.js";import"./useMutation.d27d3a67.js";import"./pick.193b483e.js";import"./Checkbox.2fa6725f.js";import"./Collapse.062dd5ab.js";import"./RadioGroup.e5383a0b.js";import"./moment.a565bb48.js";import"./RangeSlider.42d419bd.js";import"./factory.bc323c03.js";import"./react-sizeme.bf3eb88d.js";import"./Skeleton.76391d30.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.ce5011dc.js";import"./Typography.dfe40719.js";import"./TypeUtils.a2c41307.js";import"./react-select.esm.843836e6.js";import"./Select-54ac8379.esm.84c2d679.js";import"./CustomSelectWidget.d8898dba.js";import"./index.browser.15da9886.js";import"./WarningModal.82d863eb.js";import"./react-intersection-observer.esm.479d13c0.js";import"./UserCard.289eef41.js";import"./IconCopy.96e50061.js";import"./SkeletonTable.ff560500.js";import"./times.a9961130.js";import"./ToastMessage.9c9a0082.js";import"./FullWidthAlert.73cdbacd.js";import"./Overlay.6b8ad843.js";import"./DateFormatter.4a4a8911.js";import"./core.esm.f7516a9f.js";import"./isEmpty.529ce659.js";import"./isEqual.0a82face.js";import"./union.6ab0d04a.js";import"./isString.52071ff5.js";import"./useGetDownloadListStatistics.aec1d5de.js";import"./QueryCount.eb6004b3.js";import"./NoData.ee550e92.js";import"./useGetAccessRequirement.3f636936.js";import"./ManagedACTAccessRequirementStatus.944a52ba.js";import"./FileUpload.4a491036.js";import"./UserSearchBox.22ab5a9c.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.77421aa6.js";import"./EntityLink.03e12cb1.js";import"./NoSearchResults.cd02335c.js";import"./SynapseVideo.46a8d2ab.js";import"./IconList.df7f04f2.js";import"./UserCardList.d9ba2cad.js";import"./Arrow.51d95e86.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.8cb1a3b7.js";import"./CalendarWithIconFormGroup.c64aca4e.js";import"./groupBy.3a3d708c.js";import"./EntityModal.853cb344.js";import"./Sort.4cbe1b81.js";import"./useFavorites.6c45c08f.js";const ce={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=t=>p(o,{...t}),m=r.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),versionSelection:n.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=r.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],versionSelection:n.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const ae=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,ae as __namedExportsOrder,ce as default};
