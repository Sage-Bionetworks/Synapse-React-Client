import{E as o,F as i,V as n}from"./EntityFinder.1e759dbd.js";import{E as e}from"./EntityIcon.e4714c7a.js";import{j as p}from"./jsx-runtime.e50ee014.js";import"./CardContainerLogic.85094e92.js";import"./index.b742691b.js";import"./index.f04aa5e6.js";import"./iframe.ed5db637.js";import"./withStyles.8f619333.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.9942996b.js";import"./index.57d09176.js";import"./Button.3658dda2.js";import"./Transition.bad86374.js";import"./index.35ce73ec.js";import"./isArray.bf4f000b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.c8899896.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.d89abd16.js";import"./use-deep-compare-effect.esm.20647236.js";import"./uniq.f14349e8.js";import"./_baseSlice.50189bc5.js";import"./toInteger.5d2f4b0e.js";import"./isSymbol.5d0c998d.js";import"./_cacheHas.82e3ba6e.js";import"./without.269ffb6f.js";import"./uniqueId.b8a4404e.js";import"./_Set.d949c813.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.34c4c875.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.f9f187ed.js";import"./Tooltip.87729932.js";import"./createSvgIcon.f8724b3b.js";import"./slicedToArray.e72f11da.js";import"./useTheme.f39e60b9.js";import"./makeStyles.436c1230.js";import"./InfoOutlined.06cf4881.js";import"./Dropdown.6b97ac7e.js";import"./Modal.dbfb920f.js";import"./useWaitForDOMRef.19e54275.js";import"./useWillUnmount.c562dce3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.cad35c33.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.5fbb561e.js";import"./queryUtils.b793be1c.js";import"./useInfiniteQuery.be01094f.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.0414e1ff.js";import"./_baseClone.711d1a04.js";import"./_getTag.291304b4.js";import"./useEntity.44357283.js";import"./useMutation.6d9babbc.js";import"./pick.08c10745.js";import"./Checkbox.d21081cb.js";import"./Collapse.261e02d1.js";import"./RadioGroup.dcb4db4a.js";import"./moment.a565bb48.js";import"./RangeSlider.dd25bc15.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.1a0d6246.js";import"./react-sizeme.6eb3369a.js";import"./Skeleton.09528c75.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.4753e31c.js";import"./Typography.710a5cec.js";import"./TypeUtils.a2c41307.js";import"./react-select.esm.34809225.js";import"./Select-54ac8379.esm.e66ee859.js";import"./CustomSelectWidget.a78e83ff.js";import"./index.browser.f19486ac.js";import"./react-intersection-observer.esm.ad9bf078.js";import"./UserCard.2fd34122.js";import"./IconCopy.e7e13389.js";import"./SkeletonTable.fbfdf495.js";import"./times.193d0ecb.js";import"./ToastMessage.c7c8ad52.js";import"./FullWidthAlert.dc80d875.js";import"./Overlay.9ef918a3.js";import"./DateFormatter.ff205244.js";import"./core.esm.506cff9d.js";import"./isEmpty.67b3a200.js";import"./isEqual.eb83054b.js";import"./union.e911ba3a.js";import"./isString.77865ac7.js";import"./useGetDownloadListStatistics.4e723e09.js";import"./QueryCount.328adff2.js";import"./NoData.7f1bc903.js";import"./useGetAccessRequirement.1e37d564.js";import"./ManagedACTAccessRequirementStatus.65fdeea6.js";import"./FileUpload.d40b695f.js";import"./UserSearchBox.7d6d6541.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.2a022306.js";import"./EntityLink.e38d8006.js";import"./NoSearchResults.04e1840e.js";import"./SynapseVideo.79cfe0f1.js";import"./IconList.842b4f10.js";import"./UserCardList.83f186e8.js";import"./Arrow.313581d7.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.bec0fe0c.js";import"./CalendarWithIconFormGroup.3d6c1a80.js";import"./groupBy.9aa708fb.js";import"./EntityModal.c69adb38.js";import"./WarningModal.899b597d.js";import"./Sort.014eac6a.js";import"./useFavorites.69ef51bc.js";const Te={parameters:{storySource:{source:`import React from 'react'
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
