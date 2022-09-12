import{E as o,F as n,V as i}from"./EntityFinder.4371c0d8.js";import{E as t}from"./EntityTypeUtils.19d55b11.js";import"./assert.085e20d8.js";import{j as p}from"./jsx-runtime.00d70968.js";import"./pluralize.c81bb417.js";import"./iframe.81df3a6e.js";import"./index.a1e07a70.js";import"./withStyles.d50e1a5a.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./FullWidthAlert.9ae706f1.js";import"./Typography.e0d7a65e.js";import"./index.57d09176.js";import"./makeStyles.733638f6.js";import"./Tooltip.006e7cf4.js";import"./SvgIcon.53be2b5b.js";import"./slicedToArray.e72f11da.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.72011e3e.js";import"./getEndpoint.bb7ded34.js";import"./react-sizeme.3428cc25.js";import"./Arrow.c4d06967.js";import"./sqlFunctions.59c64146.js";import"./IconSvg.e3afc045.js";import"./InfoOutlined.31277c73.js";import"./use-deep-compare-effect.esm.76673280.js";import"./useGetEntityChildren.a10107f7.js";import"./EntityChildren.50133102.js";import"./Select-54ac8379.esm.498ead4f.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./LoadingScreen.b468edab.js";import"./Modal.ec8bc390.js";import"./useWaitForDOMRef.064fee4c.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.96de280e.js";import"./useEntityBundle.90849579.js";import"./EntityIcon.42748094.js";import"./SynapseTableConstants.07ecdebd.js";import"./Skeleton.c897a2bf.js";import"./moment.a565bb48.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.db050d7e.js";import"./SchemaDrivenAnnotationEditor.c64bc1db.js";import"./union.2ab1c407.js";import"./_copyArray.c6078bae.js";import"./ajv.ed055fdf.js";import"./isEmpty.5b6f8173.js";import"./lodash.7856bf5e.js";import"./CalendarWithIconFormGroup.de31c967.js";import"./index.8ed07549.js";import"./Collapse.a100796c.js";import"./groupBy.2700fdd8.js";import"./_baseMap.4dcc729f.js";import"./_baseIsEqual.9275e941.js";import"./_cacheHas.5070c2c3.js";import"./_setToArray.a82100c8.js";import"./EntityModal.8e12c84a.js";import"./HelpPopover.27366ce8.js";import"./MarkdownPopover.b421cc3d.js";import"./usePopperMarginModifiers.0428ddea.js";import"./MarkdownSynapse.94f07ba7.js";import"./UserCard.e9887ce4.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.b010af00.js";import"./times.70c713ca.js";import"./toInteger.a17e9bfa.js";import"./Overlay.b3559176.js";import"./factory.077bf1a0.js";import"./SynapseVideo.fa3a0f3c.js";import"./index.be94670d.js";import"./index.2f45a4ed.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./ExternalFileHandleInterface.7c2ac046.js";import"./WarningModal.8b08a136.js";import"./LockTwoTone.f1e9a780.js";import"./cloneDeep.33ad6620.js";import"./Dropdown.13d94a98.js";import"./isRequiredForA11y.20ed4857.js";import"./Sort.fabbd52f.js";import"./EntityLink.c179e265.js";import"./useFavorites.015e01a1.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";const Ve={parameters:{storySource:{source:`import React from 'react'
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
