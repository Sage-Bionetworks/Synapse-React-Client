import{E as o,F as n,V as i}from"./EntityFinder.aa012ef6.js";import{E as t}from"./EntityTypeUtils.2e1e059f.js";import"./assert.28421ae9.js";import{j as p}from"./jsx-runtime.00d70968.js";import"./pluralize.a0c74801.js";import"./iframe.ec48e4d2.js";import"./index.6ac6fc35.js";import"./withStyles.d50e1a5a.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./FullWidthAlert.9ae706f1.js";import"./Typography.e0d7a65e.js";import"./index.57d09176.js";import"./makeStyles.733638f6.js";import"./Tooltip.006e7cf4.js";import"./SvgIcon.53be2b5b.js";import"./slicedToArray.e72f11da.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.72011e3e.js";import"./getEndpoint.bb7ded34.js";import"./react-sizeme.4b0d4f6e.js";import"./Arrow.c4d06967.js";import"./sqlFunctions.59c64146.js";import"./IconSvg.e3afc045.js";import"./InfoOutlined.31277c73.js";import"./use-deep-compare-effect.esm.76673280.js";import"./useGetEntityChildren.b8a28bdc.js";import"./EntityChildren.50133102.js";import"./Select-54ac8379.esm.498ead4f.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./LoadingScreen.b468edab.js";import"./Modal.ec8bc390.js";import"./useWaitForDOMRef.064fee4c.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.96de280e.js";import"./useEntityBundle.38b0b653.js";import"./EntityIcon.6c64fc33.js";import"./SynapseTableConstants.07ecdebd.js";import"./Skeleton.c897a2bf.js";import"./moment.a565bb48.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.ef532573.js";import"./SchemaDrivenAnnotationEditor.4dee1f1a.js";import"./union.5981aa8f.js";import"./_copyArray.4b650b89.js";import"./ajv.0c368cda.js";import"./isEmpty.060e5fe4.js";import"./lodash.8a515f69.js";import"./CalendarWithIconFormGroup.08d53e27.js";import"./index.8ed07549.js";import"./Collapse.a100796c.js";import"./groupBy.29d2b88b.js";import"./_baseMap.182d8378.js";import"./_baseIsEqual.6385ce8d.js";import"./_cacheHas.3a78be9b.js";import"./_setToArray.a82100c8.js";import"./EntityModal.107fbd0a.js";import"./HelpPopover.3601bf2a.js";import"./MarkdownPopover.5db4ca4b.js";import"./usePopperMarginModifiers.0428ddea.js";import"./MarkdownSynapse.d883b932.js";import"./UserCard.103461a8.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.9c89f8b3.js";import"./times.3b46d202.js";import"./toInteger.7d422825.js";import"./Overlay.b3559176.js";import"./factory.29907778.js";import"./SynapseVideo.3d6e2c0a.js";import"./index.2c7c76ba.js";import"./index.87b84479.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./ExternalFileHandleInterface.55960425.js";import"./WarningModal.8b08a136.js";import"./LockTwoTone.f1e9a780.js";import"./cloneDeep.ca633d44.js";import"./Dropdown.13d94a98.js";import"./isRequiredForA11y.20ed4857.js";import"./Sort.1bb6799d.js";import"./EntityLink.2d58c874.js";import"./useFavorites.1a27e053.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";const Ve={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=e=>p(o,{...e}),s=r.bind({});s.args={treeOnly:!1,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(t),versionSelection:i.TRACKED,onSelectedChange:e=>{console.log("Selection changed:",e)},selectableTypes:Object.values(t),selectedCopy:e=>`${e} Item${e>1?"s":""} Selected`};const l=r.bind({});l.args={treeOnly:!0,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[t.PROJECT,t.FOLDER,t.TABLE],versionSelection:i.DISALLOWED,onSelectedChange:e=>{console.log("Selection changed:",e)},selectableTypes:[t.PROJECT,t.FOLDER]};const ke=["DualPane","SinglePane"];export{s as DualPane,l as SinglePane,ke as __namedExportsOrder,Ve as default};
