import{E as o,F as i,V as n}from"./EntityFinder.e0b6ee34.js";import{E as e}from"./EntityIcon.6e720173.js";import{j as p}from"./jsx-runtime.4cd7f6c3.js";import"./CardContainerLogic.8fd991da.js";import"./index.7cb9050b.js";import"./index.c5ec5593.js";import"./iframe.27dce855.js";import"./Button.cfb6901e.js";import"./index.57d09176.js";import"./withStyles.3f185fef.js";import"./utils.3d3cd8c3.js";import"./Alert.151390cd.js";import"./index.35ce73ec.js";import"./isArray.cef144cc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.7b92dd2c.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.ec0a93c7.js";import"./use-deep-compare-effect.esm.385e4e00.js";import"./uniq.160e9df6.js";import"./_baseSlice.50189bc5.js";import"./toInteger.d15c5de9.js";import"./isSymbol.678ebc7d.js";import"./_cacheHas.c7472e8e.js";import"./without.fb12d218.js";import"./uniqueId.e78092cb.js";import"./_Set.899b48a3.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.33ef3f15.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.79902b8b.js";import"./Tooltip.6e492e82.js";import"./createSvgIcon.eca8b7b9.js";import"./makeStyles.e394e1e5.js";import"./InfoOutlined.51a57d77.js";import"./Dropdown.599241b8.js";import"./Modal.434f2321.js";import"./useWaitForDOMRef.29c68d44.js";import"./inheritsLoose.a675f57d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.bf256e8b.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.7c323179.js";import"./queryUtils.a3edefc3.js";import"./useInfiniteQuery.434b28c9.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.d1e1f319.js";import"./_baseClone.dd6d5204.js";import"./_getTag.709594e5.js";import"./useEntity.c6428aa0.js";import"./useMutation.6d3cc29c.js";import"./pick.22144651.js";import"./Checkbox.e8fb2f35.js";import"./RadioGroup.8469addd.js";import"./moment.a565bb48.js";import"./RangeSlider.97251b5c.js";import"./factory.f33f2ea2.js";import"./react-sizeme.b7d24b87.js";import"./Skeleton.a445d31b.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.2d10a928.js";import"./Typography.ad724512.js";import"./TypeUtils.a2c41307.js";import"./Close.d3395515.js";import"./react-select.esm.6df07d80.js";import"./Select-54ac8379.esm.b71cede4.js";import"./CustomSelectWidget.8fdd3b39.js";import"./index.browser.9cb314e6.js";import"./WarningModal.35db236b.js";import"./react-intersection-observer.esm.f5010878.js";import"./UserCard.e68af1d5.js";import"./IconCopy.d103f0a0.js";import"./SkeletonTable.b62e268e.js";import"./times.d7ad11d2.js";import"./ToastMessage.7ffa621b.js";import"./FullWidthAlert.6976790a.js";import"./Overlay.cc756cad.js";import"./DateFormatter.e81071da.js";import"./core.esm.86cff8d0.js";import"./isEmpty.3d7ee96d.js";import"./isEqual.0f537726.js";import"./union.5b8016cf.js";import"./isString.17de64d3.js";import"./useGetDownloadListStatistics.7a98d943.js";import"./QueryCount.6dfb9cf4.js";import"./NoData.9d58c31e.js";import"./useGetAccessRequirement.916ee0ac.js";import"./ManagedACTAccessRequirementStatus.dc008bff.js";import"./FileUpload.9b09768a.js";import"./UserSearchBox.d4819085.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.8b6edb1b.js";import"./EntityLink.c2453954.js";import"./NoSearchResults.7ff9fab4.js";import"./SynapseVideo.7d5e4403.js";import"./IconList.f8fae304.js";import"./UserCardList.7a2d22c9.js";import"./Arrow.ff98ad35.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.8d18ec0e.js";import"./CalendarWithIconFormGroup.54267159.js";import"./groupBy.6b63a023.js";import"./EntityModal.2bd7585d.js";import"./Sort.1da0ef77.js";import"./useFavorites.d43d4e49.js";const le={parameters:{storySource:{source:`import React from 'react'
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
