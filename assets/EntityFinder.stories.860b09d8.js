import{E as o,F as n,V as i}from"./EntityFinder.21fa43fd.js";import{E as t}from"./EntityTypeUtils.68e3d8b7.js";import"./assert.e7ce4f34.js";import{j as p}from"./jsx-runtime.00d70968.js";import"./pluralize.0605d03e.js";import"./iframe.5264c002.js";import"./index.dd5d6be3.js";import"./withStyles.d50e1a5a.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./FullWidthAlert.9ae706f1.js";import"./Typography.e0d7a65e.js";import"./index.57d09176.js";import"./makeStyles.733638f6.js";import"./Tooltip.006e7cf4.js";import"./SvgIcon.53be2b5b.js";import"./slicedToArray.e72f11da.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.72011e3e.js";import"./getEndpoint.bb7ded34.js";import"./react-sizeme.a00f3d1b.js";import"./Arrow.c4d06967.js";import"./sqlFunctions.59c64146.js";import"./IconSvg.e3afc045.js";import"./InfoOutlined.31277c73.js";import"./use-deep-compare-effect.esm.76673280.js";import"./useGetEntityChildren.3305fd0b.js";import"./EntityChildren.50133102.js";import"./Select-54ac8379.esm.498ead4f.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./LoadingScreen.b468edab.js";import"./Modal.ec8bc390.js";import"./useWaitForDOMRef.064fee4c.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.96de280e.js";import"./useEntityBundle.63f9a6ca.js";import"./EntityIcon.131aaeb8.js";import"./SynapseTableConstants.07ecdebd.js";import"./Skeleton.c897a2bf.js";import"./moment.a565bb48.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.59246294.js";import"./SchemaDrivenAnnotationEditor.0efcdf31.js";import"./union.3e8aabbb.js";import"./_copyArray.7bbb2f02.js";import"./ajv.e70a8c13.js";import"./isEmpty.2a3145b5.js";import"./lodash.02645dee.js";import"./CalendarWithIconFormGroup.ff9f1c34.js";import"./index.8ed07549.js";import"./Collapse.a100796c.js";import"./groupBy.451d3cbf.js";import"./_baseMap.33d0bd0d.js";import"./_baseIsEqual.da8e3719.js";import"./_cacheHas.119854f9.js";import"./_setToArray.a82100c8.js";import"./EntityModal.0ae398cb.js";import"./HelpPopover.04ff581c.js";import"./MarkdownPopover.8865553b.js";import"./usePopperMarginModifiers.0428ddea.js";import"./MarkdownSynapse.109cfb4f.js";import"./UserCard.33fd471b.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.d7c10f5f.js";import"./times.e4c1eca8.js";import"./toInteger.a5bea2fa.js";import"./Overlay.b3559176.js";import"./factory.6dc10f54.js";import"./SynapseVideo.ada4386f.js";import"./index.cae93d1e.js";import"./index.d3481670.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./ExternalFileHandleInterface.f3ff3e21.js";import"./WarningModal.8b08a136.js";import"./LockTwoTone.f1e9a780.js";import"./cloneDeep.3ed79bbd.js";import"./Dropdown.13d94a98.js";import"./isRequiredForA11y.20ed4857.js";import"./Sort.93a551c6.js";import"./EntityLink.ea1f36c8.js";import"./useFavorites.d0912e3a.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";const Ve={parameters:{storySource:{source:`import React from 'react'
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
