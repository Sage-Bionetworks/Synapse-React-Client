import{E as o,F as i,V as n}from"./EntityFinder.27918b4c.js";import{E as e}from"./EntityIcon.6198377b.js";import{j as p}from"./jsx-runtime.af56d2f4.js";import"./CardContainerLogic.65b099cd.js";import"./index.a1936379.js";import"./index.34222f2e.js";import"./iframe.51f26e37.js";import"./withStyles.95bfae1f.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b7090dbd.js";import"./index.57d09176.js";import"./Button.288689e2.js";import"./Transition.66d770ee.js";import"./index.35ce73ec.js";import"./isArray.05e742d7.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.fd305cf0.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.f2ce4d84.js";import"./use-deep-compare-effect.esm.60be9ac1.js";import"./uniq.5db71bfa.js";import"./_baseSlice.50189bc5.js";import"./toInteger.66d32cd8.js";import"./isSymbol.691d7973.js";import"./_cacheHas.e498e8a2.js";import"./without.06c5a2bd.js";import"./uniqueId.fe0a6f5d.js";import"./_Set.739f8f8a.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.a938605e.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.c0856984.js";import"./Tooltip.4363549c.js";import"./createSvgIcon.c99f3a66.js";import"./slicedToArray.e72f11da.js";import"./useTheme.f557cee5.js";import"./makeStyles.0eb241f0.js";import"./InfoOutlined.8f86cf66.js";import"./Dropdown.07d6548d.js";import"./Modal.62623140.js";import"./useWaitForDOMRef.7c7cad70.js";import"./useWillUnmount.7ff8c062.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.abd0b162.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.7db17a6c.js";import"./queryUtils.2f601fb6.js";import"./useInfiniteQuery.cc62287f.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.64f407e4.js";import"./_baseClone.8b67dcaf.js";import"./_getTag.69b57b30.js";import"./useEntity.94a0f4bb.js";import"./useMutation.ab9dcaa8.js";import"./pick.21d20b3f.js";import"./Checkbox.1aab543e.js";import"./Collapse.65e9209c.js";import"./RadioGroup.8a51300e.js";import"./moment.a565bb48.js";import"./RangeSlider.469608ef.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.9d9616a9.js";import"./react-sizeme.e05ae4a4.js";import"./Skeleton.b1045233.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.ccaf5fac.js";import"./Typography.add999d3.js";import"./TypeUtils.a2c41307.js";import"./react-select.esm.46680d71.js";import"./Select-54ac8379.esm.f2d2d1c1.js";import"./CustomSelectWidget.99b3c48d.js";import"./index.browser.df438e04.js";import"./react-intersection-observer.esm.589d763b.js";import"./UserCard.2d2cc6f4.js";import"./IconCopy.992e7a95.js";import"./SkeletonTable.88eb5d4e.js";import"./times.41b100ff.js";import"./ToastMessage.8993ec69.js";import"./FullWidthAlert.e0d9cdf3.js";import"./Overlay.a4a42f09.js";import"./DateFormatter.5e09e6a5.js";import"./core.esm.5c6f00d3.js";import"./isEmpty.cacb1333.js";import"./isEqual.cb4edeb2.js";import"./union.4ecb3091.js";import"./isString.ecef5eed.js";import"./useGetDownloadListStatistics.ef9f1eb7.js";import"./QueryCount.db2aa427.js";import"./NoData.1468047f.js";import"./useGetAccessRequirement.8ecd9c93.js";import"./ManagedACTAccessRequirementStatus.a005139e.js";import"./FileUpload.6c56e348.js";import"./UserSearchBox.8bae26c4.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.309089ec.js";import"./EntityLink.ad9d6fdb.js";import"./NoSearchResults.c9ebbd49.js";import"./SynapseVideo.a550c112.js";import"./IconList.63d9fa55.js";import"./UserCardList.5aa92928.js";import"./Arrow.df1d9393.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.0b1bbf45.js";import"./CalendarWithIconFormGroup.fd601c47.js";import"./groupBy.84b9c9fd.js";import"./EntityModal.8cb26fab.js";import"./WarningModal.f4160cf9.js";import"./Sort.11f1a657.js";import"./useFavorites.8b8dc5eb.js";const Te={parameters:{storySource:{source:`import React from 'react'
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
