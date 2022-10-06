import{E as o,F as i,V as n}from"./EntityFinder.245d02fb.js";import{E as e}from"./EntityIcon.5a3dcc6a.js";import{j as p}from"./jsx-runtime.f8072c65.js";import"./CardContainerLogic.3996d247.js";import"./index.1df77ce9.js";import"./index.1d2a784c.js";import"./iframe.aa82293a.js";import"./withStyles.630b025d.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.53bb8599.js";import"./index.57d09176.js";import"./Button.cb7914f2.js";import"./Transition.5983a677.js";import"./index.35ce73ec.js";import"./isArray.903292fc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.761f4d42.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.fd4d15c4.js";import"./use-deep-compare-effect.esm.7a42a356.js";import"./uniq.583f1864.js";import"./_baseSlice.50189bc5.js";import"./toInteger.7ac537e3.js";import"./isSymbol.28b01415.js";import"./_cacheHas.a5b7fc64.js";import"./without.10a59cc7.js";import"./uniqueId.6d4b83b5.js";import"./_Set.add49772.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.4eb14c25.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.a024e3c2.js";import"./Tooltip.5e7211d1.js";import"./createSvgIcon.52201bd3.js";import"./slicedToArray.e72f11da.js";import"./useTheme.bc44ba71.js";import"./makeStyles.9cff04c5.js";import"./InfoOutlined.ec29d19f.js";import"./Dropdown.98c5d266.js";import"./Modal.c915c8f9.js";import"./useWaitForDOMRef.c9a921b3.js";import"./useWillUnmount.0b84e1f0.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.d6f64b11.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.f90eb9ca.js";import"./queryUtils.eff52af2.js";import"./useInfiniteQuery.767b6e5c.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.96c3704a.js";import"./_baseClone.a8b81e25.js";import"./_getTag.4be430c6.js";import"./useEntity.78ae4d57.js";import"./useMutation.920a6fd3.js";import"./pick.8cf499ad.js";import"./Checkbox.e6642c32.js";import"./Collapse.efb59460.js";import"./RadioGroup.d95fc9b1.js";import"./moment.a565bb48.js";import"./RangeSlider.2fd4fe28.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.1a6ada4e.js";import"./react-sizeme.3ee9624f.js";import"./Skeleton.050d0fcb.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.9f0ce41d.js";import"./Typography.3dd8fe93.js";import"./TypeUtils.a2c41307.js";import"./react-select.esm.46a4c1bc.js";import"./Select-54ac8379.esm.56fc177e.js";import"./CustomSelectWidget.d726cc3b.js";import"./index.browser.f8b2da96.js";import"./react-intersection-observer.esm.1e854c5c.js";import"./UserCard.c3fe1aa7.js";import"./IconCopy.69a201bb.js";import"./SkeletonTable.be12aa25.js";import"./times.1eb14036.js";import"./ToastMessage.37d9d7b6.js";import"./FullWidthAlert.5a306575.js";import"./Overlay.84bc18bd.js";import"./DateFormatter.ad473e26.js";import"./core.esm.fc975ec9.js";import"./isEmpty.7f2a4b5d.js";import"./isEqual.d89d7a06.js";import"./union.e41d574b.js";import"./isString.0b4aad35.js";import"./useGetDownloadListStatistics.63081e1e.js";import"./QueryCount.75474e42.js";import"./NoData.5b126f72.js";import"./useGetAccessRequirement.2d5420de.js";import"./ManagedACTAccessRequirementStatus.ed0e9563.js";import"./FileUpload.4c732c24.js";import"./UserSearchBox.3704a104.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.0fcb71f3.js";import"./EntityLink.36306b90.js";import"./NoSearchResults.434cd460.js";import"./SynapseVideo.a1ad708e.js";import"./IconList.b63ecb91.js";import"./UserCardList.4b406a92.js";import"./Arrow.0d66bdb5.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.1612fc0e.js";import"./CalendarWithIconFormGroup.d09c45c2.js";import"./groupBy.791f8323.js";import"./EntityModal.c525741c.js";import"./WarningModal.98358e71.js";import"./Sort.1f9c5385.js";import"./useFavorites.4d20012f.js";const Te={parameters:{storySource:{source:`import React from 'react'
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
