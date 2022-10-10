import{E as o,F as i,V as n}from"./EntityFinder.394cd31a.js";import{E as e}from"./EntityIcon.301d752e.js";import{j as p}from"./jsx-runtime.1225fe79.js";import"./CardContainerLogic.f69dae4e.js";import"./index.5ba93209.js";import"./index.ecba92b3.js";import"./iframe.0fc0719c.js";import"./withStyles.65e61172.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.ffb572e5.js";import"./index.57d09176.js";import"./Button.63b1a959.js";import"./Transition.e362bf9f.js";import"./index.35ce73ec.js";import"./isArray.12f7965d.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e9f5a006.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.a0a2160f.js";import"./use-deep-compare-effect.esm.4142315a.js";import"./uniq.074f12a5.js";import"./_baseSlice.50189bc5.js";import"./toInteger.b9b2999c.js";import"./isSymbol.aedbfa18.js";import"./_cacheHas.b0dcf809.js";import"./without.841d30b7.js";import"./uniqueId.e4d116e8.js";import"./_Set.bd47b98f.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.2bd102e3.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.194d4170.js";import"./Tooltip.ef3cac5b.js";import"./createSvgIcon.e824e175.js";import"./slicedToArray.e72f11da.js";import"./useTheme.ec45c4f6.js";import"./makeStyles.3ea686be.js";import"./InfoOutlined.a9437cb5.js";import"./Dropdown.81d7ee62.js";import"./Modal.a0e2b98e.js";import"./useWaitForDOMRef.f0f2f2e1.js";import"./useWillUnmount.9fae65cc.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.0a21972a.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.8d813cfe.js";import"./queryUtils.4bbd7789.js";import"./useInfiniteQuery.ec5dd77c.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.9049580f.js";import"./_baseClone.d7be4d9e.js";import"./_getTag.05216d42.js";import"./useEntity.8206b3c7.js";import"./useMutation.2c776238.js";import"./pick.e68a58ee.js";import"./Checkbox.81ac9770.js";import"./Collapse.db882e02.js";import"./RadioGroup.880a066b.js";import"./moment.a565bb48.js";import"./RangeSlider.8adaf485.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.4da8ff9f.js";import"./react-sizeme.6e834905.js";import"./Skeleton.ad3e32c6.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.9db387c0.js";import"./Typography.f29a9c1b.js";import"./TypeUtils.a2c41307.js";import"./react-select.esm.60203cdd.js";import"./Select-54ac8379.esm.79fa9ed4.js";import"./CustomSelectWidget.877f0e9a.js";import"./index.browser.dcec01dc.js";import"./react-intersection-observer.esm.ce392905.js";import"./UserCard.bfed225a.js";import"./IconCopy.86985968.js";import"./SkeletonTable.fa38a229.js";import"./times.0d5d25c2.js";import"./ToastMessage.55c99787.js";import"./FullWidthAlert.697d5521.js";import"./Overlay.4005d66e.js";import"./DateFormatter.59dc89d9.js";import"./core.esm.9c88542e.js";import"./isEmpty.1db83ad6.js";import"./isEqual.9819111f.js";import"./union.e086287a.js";import"./isString.6af799c1.js";import"./useGetDownloadListStatistics.6cf6ac68.js";import"./QueryCount.20e6713f.js";import"./NoData.2b664c92.js";import"./useGetAccessRequirement.09510a5a.js";import"./ManagedACTAccessRequirementStatus.625a8fa7.js";import"./FileUpload.f580243b.js";import"./UserSearchBox.c0389190.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.116c0c23.js";import"./EntityLink.b3b78eaf.js";import"./NoSearchResults.2986a599.js";import"./SynapseVideo.9defc544.js";import"./IconList.807147f2.js";import"./UserCardList.1d2578d3.js";import"./Arrow.48665f59.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.71524174.js";import"./CalendarWithIconFormGroup.0a7e58ff.js";import"./groupBy.cec2a7d8.js";import"./EntityModal.667a6f50.js";import"./WarningModal.014d62d6.js";import"./Sort.523f7123.js";import"./useFavorites.fdd1f652.js";const Te={parameters:{storySource:{source:`import React from 'react'
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
