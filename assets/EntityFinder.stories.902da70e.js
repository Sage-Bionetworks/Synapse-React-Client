import{E as o,F as n}from"./EntityFinder.ac5959e5.js";import{E as e}from"./EntityTypeUtils.0c12a111.js";import"./assert.d0640514.js";import{j as r}from"./jsx-runtime.2e925369.js";import"./pluralize.8d04ad36.js";import"./iframe.6cb1b174.js";import"./index.eb7f148b.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.461112f3.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./FullWidthAlert.4dd40e61.js";import"./Typography.5a45efab.js";import"./index.f252d424.js";import"./makeStyles.38be5a7f.js";import"./Tooltip.3e761ad5.js";import"./SvgIcon.6d10a3ac.js";import"./slicedToArray.e9a7fa03.js";import"./Button.c582ea4c.js";import"./index.06f4a415.js";import"./ToastMessage.093903bc.js";import"./getEndpoint.0de7fccf.js";import"./react-sizeme.949bd6c5.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.19550831.js";import"./InfoOutlined.a7449f61.js";import"./use-deep-compare-effect.esm.76673280.js";import"./useGetEntityChildren.1672c048.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.a9825398.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";import"./HelpPopover.02a58afe.js";import"./MarkdownPopover.dd5638d6.js";import"./usePopperMarginModifiers.fc55270a.js";import"./useWaitForDOMRef.679b0e64.js";import"./MarkdownSynapse.7654314a.js";import"./UserCard.8fa896af.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.8173a3d3.js";import"./times.34217ffd.js";import"./toInteger.d4278d3a.js";import"./Skeleton.3d9d9757.js";import"./Overlay.7f5ddc31.js";import"./factory.2e782208.js";import"./SynapseVideo.79d614ed.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.2cb15a37.js";import"./moment.53181859.js";import"./HelpOutlineTwoTone.70006c26.js";import"./LoadingScreen.3ecba03a.js";import"./Modal.50036a73.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.ced79741.js";import"./useEntityBundle.bc36fa2d.js";import"./EntityIcon.9ec29372.js";import"./SynapseTableConstants.07ecdebd.js";import"./SchemaDrivenAnnotationEditor.f86bc532.js";import"./isEmpty.7018e08c.js";import"./lodash.7dd13e6a.js";import"./CalendarWithIconFormGroup.3d99d620.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./Collapse.ccf7adfd.js";import"./groupBy.14826c08.js";import"./_baseMap.6367debc.js";import"./_baseIsEqual.31515e7a.js";import"./_cacheHas.3c7bdb5d.js";import"./_setToArray.a82100c8.js";import"./EntityModal.40a0838a.js";import"./ExternalFileHandleInterface.761441e0.js";import"./WarningModal.f578b528.js";import"./LockTwoTone.30ff49a7.js";import"./cloneDeep.f8e7c1e3.js";import"./Dropdown.c5bbe35b.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.f70ad088.js";import"./EntityLink.b956d420.js";import"./useFavorites.3290d06a.js";import"./FileEntity.4f8cb425.js";import"./TypeUtils.a2c41307.js";var Bt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}},"single-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{}};const i=t=>r(o,{...t}),p=i.bind({});p.args={mustSelectVersionNumber:!0,treeOnly:!1,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=i.bind({});s.args={treeOnly:!0,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const Nt=["DualPane","SinglePane"];export{p as DualPane,s as SinglePane,Nt as __namedExportsOrder,Bt as default};
//# sourceMappingURL=EntityFinder.stories.902da70e.js.map
