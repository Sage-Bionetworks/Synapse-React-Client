import{E as o,F as n,V as i}from"./EntityFinder.f12467af.js";import{E as t}from"./EntityTypeUtils.14506bc7.js";import"./assert.88909c85.js";import{j as p}from"./jsx-runtime.00d70968.js";import"./pluralize.bdc89803.js";import"./iframe.87762dd2.js";import"./index.40bbd24f.js";import"./withStyles.d50e1a5a.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./FullWidthAlert.9ae706f1.js";import"./Typography.e0d7a65e.js";import"./index.57d09176.js";import"./makeStyles.733638f6.js";import"./Tooltip.006e7cf4.js";import"./SvgIcon.53be2b5b.js";import"./slicedToArray.e72f11da.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.72011e3e.js";import"./getEndpoint.bb7ded34.js";import"./react-sizeme.67c80c51.js";import"./Arrow.c4d06967.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.e3afc045.js";import"./InfoOutlined.31277c73.js";import"./use-deep-compare-effect.esm.357a0ad8.js";import"./useGetEntityChildren.f788267a.js";import"./EntityChildren.50133102.js";import"./Select-54ac8379.esm.12410bf4.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./LoadingScreen.b468edab.js";import"./Modal.ec8bc390.js";import"./useWaitForDOMRef.064fee4c.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.96de280e.js";import"./useEntityBundle.5d41d1f0.js";import"./EntityIcon.ff4c509d.js";import"./SynapseTableConstants.07ecdebd.js";import"./Skeleton.c897a2bf.js";import"./moment.a565bb48.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.6f01e483.js";import"./SchemaDrivenAnnotationEditor.90c6a7e6.js";import"./union.c65e83e1.js";import"./_copyArray.a5202afa.js";import"./ajv.fed6407a.js";import"./isEmpty.91e880fc.js";import"./lodash.5c4ce9b8.js";import"./CalendarWithIconFormGroup.e96a1b27.js";import"./index.8ed07549.js";import"./Collapse.a100796c.js";import"./groupBy.8482ce44.js";import"./_baseMap.fe98f1f8.js";import"./_baseIsEqual.5b3247a8.js";import"./_cacheHas.4eee6e2c.js";import"./_setToArray.a82100c8.js";import"./CustomSelectWidget.0e70c1f5.js";import"./EntityModal.28bd048d.js";import"./HelpPopover.7faf0dee.js";import"./MarkdownPopover.e5668064.js";import"./usePopperMarginModifiers.0428ddea.js";import"./MarkdownSynapse.cd05a4d7.js";import"./UserCard.6c03f119.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.14f7957b.js";import"./times.d4aa3706.js";import"./toInteger.ee4505e0.js";import"./Overlay.b3559176.js";import"./factory.663cefeb.js";import"./SynapseVideo.02e99978.js";import"./index.4e5953c7.js";import"./index.1ec0c122.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./ExternalFileHandleInterface.b1a3608a.js";import"./WarningModal.8b08a136.js";import"./LockTwoTone.f1e9a780.js";import"./cloneDeep.a525aed3.js";import"./Dropdown.13d94a98.js";import"./isRequiredForA11y.20ed4857.js";import"./Sort.f2a0482c.js";import"./EntityLink.e99fe965.js";import"./useFavorites.1956d3bf.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";const ke={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=e=>p(o,{...e}),s=r.bind({});s.args={treeOnly:!1,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(t),versionSelection:i.TRACKED,onSelectedChange:e=>{console.log("Selection changed:",e)},selectableTypes:Object.values(t),selectedCopy:e=>`${e} Item${e>1?"s":""} Selected`};const l=r.bind({});l.args={treeOnly:!0,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[t.PROJECT,t.FOLDER,t.TABLE],versionSelection:i.DISALLOWED,onSelectedChange:e=>{console.log("Selection changed:",e)},selectableTypes:[t.PROJECT,t.FOLDER]};const $e=["DualPane","SinglePane"];export{s as DualPane,l as SinglePane,$e as __namedExportsOrder,ke as default};
