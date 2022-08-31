import{E as o,F as n,V as i}from"./EntityFinder.0b7d5de7.js";import{E as t}from"./EntityTypeUtils.6daf76e2.js";import"./assert.7360daab.js";import{j as p}from"./jsx-runtime.2e925369.js";import"./pluralize.a2421e27.js";import"./iframe.97ab22c6.js";import"./index.35547ae7.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.461112f3.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./FullWidthAlert.4dd40e61.js";import"./Typography.5a45efab.js";import"./index.f252d424.js";import"./makeStyles.38be5a7f.js";import"./Tooltip.3e761ad5.js";import"./SvgIcon.6d10a3ac.js";import"./slicedToArray.e9a7fa03.js";import"./Button.c582ea4c.js";import"./index.06f4a415.js";import"./ToastMessage.093903bc.js";import"./getEndpoint.0de7fccf.js";import"./react-sizeme.f5ed14d8.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.05ece234.js";import"./InfoOutlined.a7449f61.js";import"./use-deep-compare-effect.esm.76673280.js";import"./useGetEntityChildren.d7bfba68.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.a9825398.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";import"./LoadingScreen.3ecba03a.js";import"./Modal.50036a73.js";import"./useWaitForDOMRef.679b0e64.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.ced79741.js";import"./useEntityBundle.61993ba4.js";import"./EntityIcon.d1357c6a.js";import"./SynapseTableConstants.07ecdebd.js";import"./Skeleton.3d9d9757.js";import"./moment.53181859.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.9a17a26b.js";import"./SchemaDrivenAnnotationEditor.39c44e02.js";import"./isEmpty.0df3f8e9.js";import"./lodash.200ae44b.js";import"./CalendarWithIconFormGroup.8c557b44.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./Collapse.ccf7adfd.js";import"./groupBy.d5bc64d3.js";import"./_baseMap.d4a3b8f0.js";import"./_baseIsEqual.58de7d99.js";import"./_cacheHas.ecfaf0b4.js";import"./_setToArray.a82100c8.js";import"./EntityModal.236cb1be.js";import"./HelpPopover.d980b5a5.js";import"./MarkdownPopover.3d2fefaf.js";import"./usePopperMarginModifiers.fc55270a.js";import"./MarkdownSynapse.e7628a99.js";import"./UserCard.8fb31aa4.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.d5d249b4.js";import"./times.2300e3f4.js";import"./toInteger.39b702e7.js";import"./Overlay.7f5ddc31.js";import"./factory.5cabbfa7.js";import"./SynapseVideo.b11c1589.js";import"./ExternalFileHandleInterface.41dcf490.js";import"./WarningModal.f578b528.js";import"./LockTwoTone.30ff49a7.js";import"./cloneDeep.ed5a4240.js";import"./Dropdown.c5bbe35b.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.4de4c587.js";import"./EntityLink.3855dd0f.js";import"./useFavorites.2d731acd.js";import"./FileEntity.4f8cb425.js";import"./TypeUtils.a2c41307.js";var Ue={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}};const r=e=>p(o,{...e}),s=r.bind({});s.args={treeOnly:!1,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(t),versionSelection:i.TRACKED,onSelectedChange:e=>{console.log("Selection changed:",e)},selectableTypes:Object.values(t),selectedCopy:e=>`${e} Item${e>1?"s":""} Selected`};const l=r.bind({});l.args={treeOnly:!0,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[t.PROJECT,t.FOLDER,t.TABLE],versionSelection:i.DISALLOWED,onSelectedChange:e=>{console.log("Selection changed:",e)},selectableTypes:[t.PROJECT,t.FOLDER]};const _e=["DualPane","SinglePane"];export{s as DualPane,l as SinglePane,_e as __namedExportsOrder,Ue as default};
//# sourceMappingURL=EntityFinder.stories.85e290ae.js.map
