import{E as o,F as n,V as i}from"./EntityFinder.21d3202f.js";import{E as t}from"./EntityTypeUtils.91298823.js";import"./assert.d4810e08.js";import{j as p}from"./jsx-runtime.00d70968.js";import"./pluralize.3f20a57f.js";import"./iframe.abd6b882.js";import"./index.6da2bee4.js";import"./withStyles.d6b2de44.js";import"./objectWithoutProperties.a0dea5ce.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./FullWidthAlert.a73af62a.js";import"./Typography.9748340b.js";import"./index.57d09176.js";import"./makeStyles.2422b359.js";import"./Tooltip.02f85a09.js";import"./SvgIcon.5d5878ed.js";import"./slicedToArray.e9a7fa03.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.0ffd35ff.js";import"./getEndpoint.bb7ded34.js";import"./react-sizeme.d505b0e1.js";import"./Arrow.c4d06967.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.45071707.js";import"./InfoOutlined.303a7ed9.js";import"./use-deep-compare-effect.esm.76673280.js";import"./useGetEntityChildren.9fba5302.js";import"./EntityChildren.50133102.js";import"./Select-54ac8379.esm.ab9e3904.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";import"./LoadingScreen.dc53f4e3.js";import"./Modal.8f4b0da5.js";import"./useWaitForDOMRef.d07b3a07.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.3346a87d.js";import"./useEntityBundle.af7bc0a4.js";import"./EntityIcon.ac4b0aa9.js";import"./SynapseTableConstants.07ecdebd.js";import"./Skeleton.88496afb.js";import"./moment.a565bb48.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.e7e66a00.js";import"./SchemaDrivenAnnotationEditor.4097f09e.js";import"./union.44417243.js";import"./_copyArray.559b126e.js";import"./ajv.43fe394d.js";import"./isEmpty.4d8f2830.js";import"./lodash.1ef05eb5.js";import"./CalendarWithIconFormGroup.61cde17f.js";import"./index.8ed07549.js";import"./Collapse.c0581257.js";import"./groupBy.43f001b6.js";import"./_baseMap.d7799270.js";import"./_baseIsEqual.952d12c4.js";import"./_cacheHas.6d697e58.js";import"./_setToArray.a82100c8.js";import"./EntityModal.c6ab5ea7.js";import"./HelpPopover.6981c914.js";import"./MarkdownPopover.8b990f1b.js";import"./usePopperMarginModifiers.1c4b2def.js";import"./MarkdownSynapse.d86f7b16.js";import"./UserCard.0e5c85b8.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.3566e849.js";import"./times.5e760663.js";import"./toInteger.73b1b5d3.js";import"./Overlay.3297046e.js";import"./factory.13751b6d.js";import"./SynapseVideo.59d1e4cc.js";import"./ExternalFileHandleInterface.404a24dc.js";import"./WarningModal.ca99a4a6.js";import"./LockTwoTone.24dc8c80.js";import"./cloneDeep.a19fcb41.js";import"./Dropdown.2144a55d.js";import"./isRequiredForA11y.20ed4857.js";import"./Sort.dff0626f.js";import"./EntityLink.16a377aa.js";import"./useFavorites.c2bc2523.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";const Ke={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=e=>p(o,{...e}),s=r.bind({});s.args={treeOnly:!1,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(t),versionSelection:i.TRACKED,onSelectedChange:e=>{console.log("Selection changed:",e)},selectableTypes:Object.values(t),selectedCopy:e=>`${e} Item${e>1?"s":""} Selected`};const l=r.bind({});l.args={treeOnly:!0,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[t.PROJECT,t.FOLDER,t.TABLE],versionSelection:i.DISALLOWED,onSelectedChange:e=>{console.log("Selection changed:",e)},selectableTypes:[t.PROJECT,t.FOLDER]};const Ne=["DualPane","SinglePane"];export{s as DualPane,l as SinglePane,Ne as __namedExportsOrder,Ke as default};
