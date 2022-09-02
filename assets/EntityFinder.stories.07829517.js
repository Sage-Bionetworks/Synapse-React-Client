import{E as o,F as n,V as i}from"./EntityFinder.5c2d585b.js";import{E as t}from"./EntityTypeUtils.4804373c.js";import"./assert.2b1e1d8f.js";import{j as p}from"./jsx-runtime.00d70968.js";import"./pluralize.f93c576b.js";import"./iframe.469b3d37.js";import"./index.1cc75809.js";import"./withStyles.d6b2de44.js";import"./objectWithoutProperties.a0dea5ce.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./FullWidthAlert.a73af62a.js";import"./Typography.9748340b.js";import"./index.57d09176.js";import"./makeStyles.2422b359.js";import"./Tooltip.02f85a09.js";import"./SvgIcon.5d5878ed.js";import"./slicedToArray.e9a7fa03.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.0ffd35ff.js";import"./getEndpoint.bb7ded34.js";import"./react-sizeme.97b85ac5.js";import"./Arrow.c4d06967.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.45071707.js";import"./InfoOutlined.303a7ed9.js";import"./use-deep-compare-effect.esm.76673280.js";import"./useGetEntityChildren.3ce858fa.js";import"./EntityChildren.50133102.js";import"./Select-54ac8379.esm.ab9e3904.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";import"./LoadingScreen.dc53f4e3.js";import"./Modal.8f4b0da5.js";import"./useWaitForDOMRef.d07b3a07.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.3346a87d.js";import"./useEntityBundle.ee85e687.js";import"./EntityIcon.ecba259d.js";import"./SynapseTableConstants.07ecdebd.js";import"./Skeleton.88496afb.js";import"./moment.a565bb48.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.fbba3176.js";import"./SchemaDrivenAnnotationEditor.5c8c83a1.js";import"./union.511a5fce.js";import"./_copyArray.4bc1caea.js";import"./ajv.41ff8221.js";import"./isEmpty.cd856766.js";import"./lodash.35e6e1de.js";import"./CalendarWithIconFormGroup.a1d080c8.js";import"./index.8ed07549.js";import"./Collapse.c0581257.js";import"./groupBy.c28d4f5e.js";import"./_baseMap.cf76f30e.js";import"./_baseIsEqual.f00cbb9a.js";import"./_cacheHas.0d97d8d7.js";import"./_setToArray.a82100c8.js";import"./EntityModal.73c9da2f.js";import"./HelpPopover.752ad6fb.js";import"./MarkdownPopover.f76c988b.js";import"./usePopperMarginModifiers.1c4b2def.js";import"./MarkdownSynapse.e29dc12c.js";import"./UserCard.39fe3796.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.70db2c30.js";import"./times.10bc3cb2.js";import"./toInteger.c11fc59b.js";import"./Overlay.3297046e.js";import"./factory.d112e332.js";import"./SynapseVideo.0decf02e.js";import"./ExternalFileHandleInterface.eb6dd260.js";import"./WarningModal.ca99a4a6.js";import"./LockTwoTone.24dc8c80.js";import"./cloneDeep.bb7b6c41.js";import"./Dropdown.2144a55d.js";import"./isRequiredForA11y.20ed4857.js";import"./Sort.4ebcd301.js";import"./EntityLink.672de2c9.js";import"./useFavorites.c5536f69.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";const Ke={parameters:{storySource:{source:`import React from 'react'
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
