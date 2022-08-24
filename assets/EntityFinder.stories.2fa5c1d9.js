import{E as o,F as n}from"./EntityFinder.09b4604c.js";import{E as e}from"./EntityTypeUtils.3c7b4eef.js";import"./assert.1c3e0ed9.js";import{j as r}from"./jsx-runtime.2e925369.js";import"./pluralize.ea310817.js";import"./iframe.8da640bb.js";import"./index.a2061ca9.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.670aaa99.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Alert.5f67d407.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.8d049b2f.js";import"./index.06f4a415.js";import"./toString.8ef640ae.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.2998c199.js";import"./react-sizeme.42835f20.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.4a41f208.js";import"./Tooltip.8a506c05.js";import"./createSvgIcon.0bfcb8f8.js";import"./slicedToArray.e9a7fa03.js";import"./useTheme.05af6e65.js";import"./makeStyles.72aedf90.js";import"./InfoOutlined.d201fe9f.js";import"./use-deep-compare-effect.esm.76673280.js";import"./useGetEntityChildren.b71fb64e.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.e37b74c8.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";import"./HelpPopover.a5367e09.js";import"./MarkdownPopover.9081d3ee.js";import"./usePopperMarginModifiers.4ced5867.js";import"./useWaitForDOMRef.37941199.js";import"./hasClass.56fd144a.js";import"./MarkdownSynapse.f0e12f6c.js";import"./UserCard.67086c09.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.f7622253.js";import"./times.eb857a6e.js";import"./toInteger.b296eb7d.js";import"./Skeleton.3847d4da.js";import"./ToastMessage.6439b7b0.js";import"./FullWidthAlert.279e31cc.js";import"./Typography.3a9e45b6.js";import"./removeClass.27874bcb.js";import"./uniqueId.fa0dadf5.js";import"./Overlay.bf042904.js";import"./factory.ba94229b.js";import"./SynapseVideo.a90e5c7c.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.2fae4ae3.js";import"./moment.53181859.js";import"./HelpOutlineTwoTone.6ff08a10.js";import"./LoadingScreen.efad5b29.js";import"./Modal.9056450d.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.85bb9cd4.js";import"./useEntityBundle.c055790d.js";import"./EntityIcon.e28f5646.js";import"./SynapseTableConstants.07ecdebd.js";import"./SchemaDrivenAnnotationEditor.df6be305.js";import"./isEmpty.07aa8e13.js";import"./lodash.76b26b22.js";import"./CalendarWithIconFormGroup.ae60af90.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./Collapse.8d0a3062.js";import"./groupBy.4f814238.js";import"./_baseMap.c961261a.js";import"./_baseIsEqual.3c949827.js";import"./_cacheHas.8eec52be.js";import"./_setToArray.a82100c8.js";import"./EntityModal.85f9c84c.js";import"./ExternalFileHandleInterface.06e254e2.js";import"./WarningModal.1c7626c2.js";import"./LockTwoTone.67127f07.js";import"./cloneDeep.84925adb.js";import"./Dropdown.b16d4176.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.528e234d.js";import"./EntityLink.d52127d8.js";import"./useFavorites.4d57b583.js";import"./FileEntity.4f8cb425.js";import"./TypeUtils.a2c41307.js";var zt={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import EntityFinder from './EntityFinder'
import { FinderScope } from './tree/EntityTree'
import { EntityType } from '../../utils/synapseTypes'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/EntityFinder',
  component: EntityFinder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof EntityFinder>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EntityFinder> = args => (
  <EntityFinder {...args} />
)

export const DualPane = Template.bind({})
DualPane.args = {
  mustSelectVersionNumber: true,
  treeOnly: false,
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: 'syn23567475',
  initialContainer: 'syn24183903',
  selectMultiple: true,
  visibleTypesInList: Object.values(EntityType),
  showVersionSelection: true,
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
  showVersionSelection: true,
  onSelectedChange: selected => {
    console.log('Selection changed:', selected)
  },
  selectableTypes: [EntityType.PROJECT, EntityType.FOLDER],
}
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}},"single-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{}};const i=t=>r(o,{...t}),p=i.bind({});p.args={mustSelectVersionNumber:!0,treeOnly:!1,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const m=i.bind({});m.args={treeOnly:!0,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const Gt=["DualPane","SinglePane"];export{p as DualPane,m as SinglePane,Gt as __namedExportsOrder,zt as default};
//# sourceMappingURL=EntityFinder.stories.2fa5c1d9.js.map
