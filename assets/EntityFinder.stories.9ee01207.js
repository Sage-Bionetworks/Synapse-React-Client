import{E as o,F as i,V as n}from"./EntityFinder.493b2bde.js";import{E as e}from"./EntityIcon.a4645a13.js";import{j as p}from"./jsx-runtime.66426239.js";import"./CardContainerLogic.ff1a25a1.js";import"./index.5eb45ec5.js";import"./index.06c514da.js";import"./iframe.7709cd8b.js";import"./Button.0925c41b.js";import"./index.57d09176.js";import"./withStyles.c0f84b5f.js";import"./utils.dd2a9ff9.js";import"./Alert.6f0c6d33.js";import"./index.35ce73ec.js";import"./isArray.563d20f4.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.bec2abf5.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.119a9443.js";import"./use-deep-compare-effect.esm.1637ad2d.js";import"./uniq.e2f0285b.js";import"./_baseSlice.50189bc5.js";import"./toInteger.ba340474.js";import"./isSymbol.e6b0fab2.js";import"./_cacheHas.6245eac1.js";import"./without.f02e359a.js";import"./uniqueId.2b0d7b31.js";import"./_Set.1a050ac1.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.7dedc88e.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.43ff89f7.js";import"./Tooltip.20b2ac09.js";import"./createSvgIcon.11e8f9d3.js";import"./makeStyles.c7a35cbe.js";import"./InfoOutlined.009cccae.js";import"./Dropdown.c6a10ffa.js";import"./Modal.291f0168.js";import"./useWaitForDOMRef.3996ecc7.js";import"./inheritsLoose.225e3cf9.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.ba99acc1.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.3d8d5548.js";import"./queryUtils.ca38c309.js";import"./useInfiniteQuery.3f76db01.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.7afd2120.js";import"./_baseClone.055cb747.js";import"./_getTag.89d7bb96.js";import"./useEntity.58b03ce0.js";import"./useMutation.ea725d86.js";import"./pick.6bb06e02.js";import"./Checkbox.1a22a1aa.js";import"./RadioGroup.f8494210.js";import"./moment.a565bb48.js";import"./RangeSlider.030b69d1.js";import"./factory.6ce2258f.js";import"./react-sizeme.2f27ae3e.js";import"./Skeleton.b36923c9.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.047fc901.js";import"./Typography.23a20d7c.js";import"./TypeUtils.a2c41307.js";import"./Close.1abe447b.js";import"./react-select.esm.2061b8b8.js";import"./Select-54ac8379.esm.55f4ced4.js";import"./CustomSelectWidget.c1a40e61.js";import"./index.browser.cea0bcba.js";import"./WarningModal.3dab13dd.js";import"./react-intersection-observer.esm.415ae57d.js";import"./UserCard.11db0e1e.js";import"./IconCopy.e9990250.js";import"./SkeletonTable.0efda436.js";import"./times.0a791da1.js";import"./ToastMessage.0eedc8b3.js";import"./FullWidthAlert.28f85f7a.js";import"./Overlay.99b543ad.js";import"./DateFormatter.a4e434c7.js";import"./core.esm.4c8f2701.js";import"./isEmpty.4789c1d4.js";import"./isEqual.c4465f8d.js";import"./union.b9382c01.js";import"./isString.d5517332.js";import"./useGetDownloadListStatistics.73be1e4d.js";import"./QueryCount.4865baae.js";import"./NoData.15f21b05.js";import"./useGetAccessRequirement.4709fedf.js";import"./ManagedACTAccessRequirementStatus.7164d615.js";import"./FileUpload.de0396a9.js";import"./UserSearchBox.bf763e8f.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.17035e13.js";import"./EntityLink.61591bea.js";import"./NoSearchResults.e6d50f64.js";import"./SynapseVideo.c3eb3bc1.js";import"./IconList.1b4d3d3d.js";import"./UserCardList.181a41e6.js";import"./Arrow.b20de705.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.1763a2e9.js";import"./CalendarWithIconFormGroup.2c2ae16f.js";import"./groupBy.3ebae338.js";import"./EntityModal.4097406f.js";import"./Sort.bbb52974.js";import"./useFavorites.5fce3fa0.js";const le={parameters:{storySource:{source:`import React from 'react'
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
