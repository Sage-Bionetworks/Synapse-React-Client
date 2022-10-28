import{E as o,F as i,V as n}from"./EntityFinder.38700f67.js";import{E as e}from"./EntityIcon.aefaf146.js";import{j as p}from"./jsx-runtime.4eaffca0.js";import"./CardContainerLogic.e1f41888.js";import"./index.e08ca228.js";import"./index.48154df0.js";import"./iframe.f6ed0eb4.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.9f15dabf.js";import"./index.57d09176.js";import"./withStyles.21c7e80a.js";import"./utils.2281a9d6.js";import"./Alert.27b9a701.js";import"./createWithBsPrefix.735cbed5.js";import"./index.35ce73ec.js";import"./isArray.33858a1d.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.4d40d0c3.js";import"./sqlFunctions.a660c34a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.c3d3eddf.js";import"./TypeUtils.a2c41307.js";import"./useGetInfoFromIds.2169a105.js";import"./use-deep-compare-effect.esm.7fe1b1d8.js";import"./uniq.ad76c02f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.27d529dc.js";import"./isSymbol.fff1a0c2.js";import"./_cacheHas.eddc2d4e.js";import"./without.84ea84a3.js";import"./uniqueId.93f128ba.js";import"./_Set.8d919665.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./Tooltip.baf92203.js";import"./createSvgIcon.d152a531.js";import"./makeStyles.c1994d74.js";import"./FacetNav.c3f6239d.js";import"./queryUtils.f5372232.js";import"./useInfiniteQuery.0db4af83.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.cd46457d.js";import"./_baseClone.342ff797.js";import"./_getTag.8907a9e9.js";import"./NoSearchResults.11fe86a6.js";import"./NoData.e6e41d35.js";import"./unCamelCase.07e38083.js";import"./useEntity.a5145ae3.js";import"./useMutation.b1729f81.js";import"./pick.a82409fa.js";import"./isEqual.f7b39916.js";import"./ElementWithTooltip.62fd30fe.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.9da8b4b8.js";import"./InfoOutlined.489c1b42.js";import"./Dropdown.c384e17c.js";import"./usePrevious.ba24858a.js";import"./contains.589a7733.js";import"./usePopperMarginModifiers.ec086152.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.43177b93.js";import"./RadioGroup.32425fa1.js";import"./moment.a565bb48.js";import"./RangeSlider.adef42b0.js";import"./factory.39ac0861.js";import"./react-sizeme.d5cbc0eb.js";import"./Skeleton.3c162426.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.0426ab40.js";import"./Typography.95636964.js";import"./Modal.a3764183.js";import"./inheritsLoose.f7a58397.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.26d65963.js";import"./SelectionCriteriaPill.4b691a97.js";import"./Close.0089b012.js";import"./react-select.esm.58fb1bbe.js";import"./Select-54ac8379.esm.3acfea25.js";import"./CustomSelectWidget.6cc1e305.js";import"./index.browser.37a67034.js";import"./WarningModal.5cc0586c.js";import"./react-intersection-observer.esm.5423f88d.js";import"./UserCard.73a822b2.js";import"./IconCopy.2759b8ec.js";import"./SkeletonTable.862e92ab.js";import"./times.025024a4.js";import"./ToastMessage.a51dddf9.js";import"./FullWidthAlert.e49b83f6.js";import"./Overlay.9f8bd32d.js";import"./DateFormatter.88c823e4.js";import"./core.esm.89dc9796.js";import"./isEmpty.e173c07d.js";import"./union.3221e458.js";import"./isString.7b237ac2.js";import"./useGetDownloadListStatistics.2dd86e99.js";import"./QueryCount.7dcd4a3b.js";import"./useGetAccessRequirement.adc2edf4.js";import"./ManagedACTAccessRequirementStatus.1a4b03b8.js";import"./FileUpload.ca13bd57.js";import"./UserSearchBox.53d689e3.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.88f72842.js";import"./EntityLink.7f21612e.js";import"./SynapseVideo.66a6b772.js";import"./IconList.5a836e6c.js";import"./UserCardList.12b6408b.js";import"./Arrow.d2823bb1.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.0778a1f7.js";import"./CalendarWithIconFormGroup.c5bead7d.js";import"./groupBy.56c79796.js";import"./EntityModal.35487cae.js";import"./Sort.401b6029.js";import"./useFavorites.dd819e35.js";const ge={parameters:{storySource:{source:`import React from 'react'
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
