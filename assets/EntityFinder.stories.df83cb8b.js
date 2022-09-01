import{E as o,F as n,V as i}from"./EntityFinder.783ffd14.js";import{E as t}from"./EntityTypeUtils.e47ff85d.js";import"./assert.4df68bf5.js";import{j as p}from"./jsx-runtime.2e925369.js";import"./pluralize.4eb5c7d1.js";import"./iframe.066cc533.js";import"./index.d8e274a1.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.461112f3.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./FullWidthAlert.4dd40e61.js";import"./Typography.5a45efab.js";import"./index.f252d424.js";import"./makeStyles.38be5a7f.js";import"./Tooltip.3e761ad5.js";import"./SvgIcon.6d10a3ac.js";import"./slicedToArray.e9a7fa03.js";import"./Button.c582ea4c.js";import"./index.06f4a415.js";import"./ToastMessage.093903bc.js";import"./getEndpoint.0de7fccf.js";import"./react-sizeme.a46db7df.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.05ece234.js";import"./InfoOutlined.a7449f61.js";import"./use-deep-compare-effect.esm.76673280.js";import"./useGetEntityChildren.16b647a4.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.a9825398.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";import"./LoadingScreen.3ecba03a.js";import"./Modal.50036a73.js";import"./useWaitForDOMRef.679b0e64.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.ced79741.js";import"./useEntityBundle.662b53c7.js";import"./EntityIcon.4902bb1d.js";import"./SynapseTableConstants.07ecdebd.js";import"./Skeleton.3d9d9757.js";import"./moment.53181859.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.baa06737.js";import"./SchemaDrivenAnnotationEditor.e5424dab.js";import"./isEmpty.e3c7aee8.js";import"./lodash.1d1d542d.js";import"./CalendarWithIconFormGroup.e9312e54.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./Collapse.ccf7adfd.js";import"./groupBy.186a8784.js";import"./_baseMap.611076e7.js";import"./_baseIsEqual.c3a5e0ce.js";import"./_cacheHas.6c83209f.js";import"./_setToArray.a82100c8.js";import"./EntityModal.3458fa04.js";import"./HelpPopover.1fc87c98.js";import"./MarkdownPopover.0d554baa.js";import"./usePopperMarginModifiers.fc55270a.js";import"./MarkdownSynapse.0738636b.js";import"./UserCard.510790d6.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.ee346f33.js";import"./times.cfb71dc5.js";import"./toInteger.93f57d6c.js";import"./Overlay.7f5ddc31.js";import"./factory.f4988b82.js";import"./SynapseVideo.237b4bf6.js";import"./ExternalFileHandleInterface.cd891826.js";import"./WarningModal.f578b528.js";import"./LockTwoTone.30ff49a7.js";import"./cloneDeep.d5f14fdc.js";import"./Dropdown.c5bbe35b.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.5cc2759a.js";import"./EntityLink.efdc63fa.js";import"./useFavorites.caa360c2.js";import"./FileEntity.4f8cb425.js";import"./TypeUtils.a2c41307.js";var Ue={parameters:{storySource:{source:`import React from 'react'
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
//# sourceMappingURL=EntityFinder.stories.df83cb8b.js.map
