import{E as o,F as n,V as i}from"./EntityFinder.f6949ff5.js";import{E as e}from"./EntityTypeUtils.c1fb28b9.js";import"./assert.277c07bd.js";import{j as p}from"./jsx-runtime.00d70968.js";import"./pluralize.f3ebeddd.js";import"./iframe.addcd329.js";import"./index.059e0d20.js";import"./withStyles.d6b2de44.js";import"./objectWithoutProperties.a0dea5ce.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./FullWidthAlert.a73af62a.js";import"./Typography.9748340b.js";import"./index.57d09176.js";import"./makeStyles.2422b359.js";import"./Tooltip.02f85a09.js";import"./SvgIcon.5d5878ed.js";import"./slicedToArray.e9a7fa03.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.0ffd35ff.js";import"./getEndpoint.bb7ded34.js";import"./react-sizeme.5ede4976.js";import"./Arrow.c4d06967.js";import"./sqlFunctions.59c64146.js";import"./IconSvg.45071707.js";import"./InfoOutlined.303a7ed9.js";import"./use-deep-compare-effect.esm.76673280.js";import"./useGetEntityChildren.b68b47d9.js";import"./EntityChildren.50133102.js";import"./Select-54ac8379.esm.ab9e3904.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";import"./LoadingScreen.dc53f4e3.js";import"./Modal.8f4b0da5.js";import"./useWaitForDOMRef.d07b3a07.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.3346a87d.js";import"./useEntityBundle.8f6c0bcd.js";import"./EntityIcon.0f44d705.js";import"./SynapseTableConstants.07ecdebd.js";import"./Skeleton.88496afb.js";import"./moment.a565bb48.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.39210394.js";import"./SchemaDrivenAnnotationEditor.b52b1e1a.js";import"./union.5c975efd.js";import"./_copyArray.e9e4f405.js";import"./ajv.11a6ed17.js";import"./isEmpty.40fc1a36.js";import"./lodash.055561fb.js";import"./CalendarWithIconFormGroup.90311805.js";import"./index.8ed07549.js";import"./Collapse.c0581257.js";import"./groupBy.2b67d1c7.js";import"./_baseMap.577f7664.js";import"./_baseIsEqual.49cbb44a.js";import"./_cacheHas.af935b3d.js";import"./_setToArray.a82100c8.js";import"./EntityModal.80911671.js";import"./HelpPopover.d50fa45f.js";import"./MarkdownPopover.a64897ce.js";import"./usePopperMarginModifiers.1c4b2def.js";import"./MarkdownSynapse.ee5cf257.js";import"./UserCard.0ffebfe2.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.d7bc91d1.js";import"./times.7c60ecae.js";import"./toInteger.26df0eb9.js";import"./Overlay.3297046e.js";import"./factory.875690b2.js";import"./SynapseVideo.d12575c5.js";import"./index.128923a6.js";import"./index.c68ec8b9.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./ExternalFileHandleInterface.1a2911ba.js";import"./WarningModal.ca99a4a6.js";import"./LockTwoTone.24dc8c80.js";import"./cloneDeep.d8d34688.js";import"./Dropdown.2144a55d.js";import"./isRequiredForA11y.20ed4857.js";import"./Sort.b1c5b3d3.js";import"./EntityLink.2ea2fc1c.js";import"./useFavorites.fc893189.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";const $t={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=t=>p(o,{...t}),s=r.bind({});s.args={treeOnly:!1,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),versionSelection:i.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const l=r.bind({});l.args={treeOnly:!0,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],versionSelection:i.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const wt=["DualPane","SinglePane"];export{s as DualPane,l as SinglePane,wt as __namedExportsOrder,$t as default};
