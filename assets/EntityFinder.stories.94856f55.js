import{E as o,F as n}from"./EntityFinder.05628fab.js";import{E as e}from"./EntityTypeUtils.e713357e.js";import"./assert.e1652bf7.js";import{j as r}from"./jsx-runtime.2e925369.js";import"./pluralize.fe0c5e27.js";import"./iframe.af98166e.js";import"./index.7b99b109.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.461112f3.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./FullWidthAlert.4dd40e61.js";import"./Typography.5a45efab.js";import"./index.f252d424.js";import"./makeStyles.38be5a7f.js";import"./Tooltip.3e761ad5.js";import"./SvgIcon.6d10a3ac.js";import"./slicedToArray.e9a7fa03.js";import"./Button.c582ea4c.js";import"./index.06f4a415.js";import"./ToastMessage.093903bc.js";import"./getEndpoint.0de7fccf.js";import"./react-sizeme.cdf6c120.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.19550831.js";import"./InfoOutlined.a7449f61.js";import"./use-deep-compare-effect.esm.76673280.js";import"./useGetEntityChildren.fe84505c.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.a9825398.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";import"./HelpPopover.43af33af.js";import"./MarkdownPopover.c0341a2a.js";import"./usePopperMarginModifiers.fc55270a.js";import"./useWaitForDOMRef.679b0e64.js";import"./MarkdownSynapse.8e1bb1ce.js";import"./UserCard.cd0ed53c.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.0ccaf18e.js";import"./times.78454f16.js";import"./toInteger.91c80714.js";import"./Skeleton.3d9d9757.js";import"./Overlay.7f5ddc31.js";import"./factory.a250fcf7.js";import"./SynapseVideo.cd487ec9.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.1fc603e0.js";import"./moment.53181859.js";import"./HelpOutlineTwoTone.70006c26.js";import"./LoadingScreen.3ecba03a.js";import"./Modal.50036a73.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.ced79741.js";import"./useEntityBundle.b03e5c46.js";import"./EntityIcon.cd0831e3.js";import"./SynapseTableConstants.07ecdebd.js";import"./SchemaDrivenAnnotationEditor.0cc5a6ef.js";import"./isEmpty.1b60db36.js";import"./lodash.49571df1.js";import"./CalendarWithIconFormGroup.ca96343f.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./Collapse.ccf7adfd.js";import"./groupBy.cf055889.js";import"./_baseMap.6a17b6fa.js";import"./_baseIsEqual.081f1487.js";import"./_cacheHas.938833a1.js";import"./_setToArray.a82100c8.js";import"./EntityModal.782e7c3a.js";import"./ExternalFileHandleInterface.8c788d80.js";import"./WarningModal.f578b528.js";import"./LockTwoTone.30ff49a7.js";import"./cloneDeep.f366132e.js";import"./Dropdown.c5bbe35b.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.5366d269.js";import"./EntityLink.aee16d01.js";import"./useFavorites.3d20d585.js";import"./FileEntity.4f8cb425.js";import"./TypeUtils.a2c41307.js";var Bt={parameters:{storySource:{source:`import React from 'react'
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
//# sourceMappingURL=EntityFinder.stories.94856f55.js.map
