import{E as o,F as i,V as n}from"./EntityFinder.7b22c095.js";import{x as e}from"./index.253aaada.js";import{j as p}from"./jsx-runtime.6cb91464.js";import"./CardContainerLogic.8943b1aa.js";import"./sqlFunctions.1830f92f.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.3c469190.js";import"./useGetInfoFromIds.1e4ac22b.js";import"./use-deep-compare-effect.esm.7ae859ab.js";import"./uniq.1102b3bc.js";import"./_baseSlice.50189bc5.js";import"./toInteger.70d616ab.js";import"./isSymbol.116fae96.js";import"./isArray.c85446b1.js";import"./Button.719dc857.js";import"./index.35ce73ec.js";import"./_cacheHas.9d7b6529.js";import"./without.095365fb.js";import"./uniqueId.4f03145e.js";import"./_Set.f07c2c40.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.b6aa8bf5.js";import"./ColumnType.744125d2.js";import"./getEndpoint.bb7ded34.js";import"./FacetNav.7c91c12d.js";import"./queryUtils.9424e4b1.js";import"./useInfiniteQuery.62a8c625.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.f408eeac.js";import"./_baseClone.21067d4e.js";import"./_getTag.23171a9a.js";import"./NoSearchResults.b263a0fc.js";import"./NoData.1a51e057.js";import"./unCamelCase.07e38083.js";import"./useEntity.eab415d6.js";import"./useMutation.3ad2be87.js";import"./pick.7b3b1cb8.js";import"./isEqual.3875cd1f.js";import"./ElementWithTooltip.a2bf3b61.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.e72d865a.js";import"./SvgIcon.7bbcd48d.js";import"./styled.9d49d23e.js";import"./Tooltip.9b073f35.js";import"./createSvgIcon.c493b6c9.js";import"./utils.11d89a6f.js";import"./index.13becb40.js";import"./iframe.77de7a8b.js";import"./InfoOutlined.04f2d1df.js";import"./Dropdown.a7c1bd76.js";import"./usePrevious.05e36544.js";import"./createWithBsPrefix.c2eb45fa.js";import"./contains.6a52d65a.js";import"./usePopperMarginModifiers.8332b5d5.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7069d805.js";import"./RadioGroup.dba2ae1a.js";import"./moment.a565bb48.js";import"./RangeSlider.9e136d78.js";import"./factory.4a76326a.js";import"./react-sizeme.87853ccd.js";import"./Skeleton.2376d7a3.js";import"./emotion-react.browser.esm.63b80b77.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.5bb8c5fe.js";import"./Modal.79aadbe2.js";import"./inheritsLoose.1e598ca9.js";import"./Alert.f130f9d6.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.8c62de15.js";import"./Typography.c072ef4f.js";import"./SelectionCriteriaPill.bf7e136e.js";import"./Close.e45ac9a4.js";import"./react-select.esm.4209b07f.js";import"./Select-54ac8379.esm.e3131d5c.js";import"./CustomSelectWidget.3cfd30a9.js";import"./index.browser.e6c4f87b.js";import"./UserCard.e4c786fd.js";import"./IconCopy.af1c96f6.js";import"./SkeletonTable.ab3ce48c.js";import"./times.231664f9.js";import"./ToastMessage.5ece0449.js";import"./FullWidthAlert.771b5ce8.js";import"./Overlay.b1b8d860.js";import"./WarningModal.d990b25d.js";import"./react-intersection-observer.esm.2bfa2c2a.js";import"./DateFormatter.6c0f3d6c.js";import"./EntityIcon.973857d5.js";import"./core.esm.a0032c0a.js";import"./isEmpty.2b3beab2.js";import"./union.d74c3967.js";import"./isString.729987f0.js";import"./useGetDownloadListStatistics.82077613.js";import"./QueryCount.47ab349c.js";import"./useGetAccessRequirement.30b0033c.js";import"./ManagedACTAccessRequirementStatus.b5318817.js";import"./FileUpload.1c9d038a.js";import"./UserSearchBox.91caec0d.js";import"./UserOrTeamBadge.7ea7b8dc.js";import"./EntityLink.fc84c7f7.js";import"./SynapseVideo.323e4355.js";import"./IconList.f8668156.js";import"./UserCardList.a366786c.js";import"./Arrow.47e6866a.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.11add337.js";import"./CalendarWithIconFormGroup.b2a82a57.js";import"./groupBy.1cac9945.js";import"./EntityModal.a9c37f5d.js";import"./Sort.14d5feba.js";import"./useFavorites.521c050a.js";const Te={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=t=>p(o,{...t}),m=r.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),versionSelection:n.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=r.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],versionSelection:n.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const Se=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,Se as __namedExportsOrder,Te as default};
