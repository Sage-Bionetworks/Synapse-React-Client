import{E as o,F as n,V as i}from"./EntityFinder.83645d2f.js";import{E as t}from"./EntityTypeUtils.adab6f33.js";import"./assert.fe14baa7.js";import{j as p}from"./jsx-runtime.00d70968.js";import"./pluralize.f4686ff3.js";import"./iframe.809c86e7.js";import"./index.83cd4268.js";import"./withStyles.d6b2de44.js";import"./objectWithoutProperties.a0dea5ce.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./FullWidthAlert.a73af62a.js";import"./Typography.9748340b.js";import"./index.57d09176.js";import"./makeStyles.2422b359.js";import"./Tooltip.02f85a09.js";import"./SvgIcon.5d5878ed.js";import"./slicedToArray.e9a7fa03.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.0ffd35ff.js";import"./getEndpoint.bb7ded34.js";import"./react-sizeme.f57a04fe.js";import"./Arrow.c4d06967.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.45071707.js";import"./InfoOutlined.303a7ed9.js";import"./use-deep-compare-effect.esm.76673280.js";import"./useGetEntityChildren.0b27bac7.js";import"./EntityChildren.50133102.js";import"./Select-54ac8379.esm.ab9e3904.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";import"./LoadingScreen.dc53f4e3.js";import"./Modal.8f4b0da5.js";import"./useWaitForDOMRef.d07b3a07.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.3346a87d.js";import"./useEntityBundle.24138ca1.js";import"./EntityIcon.f4f9349c.js";import"./SynapseTableConstants.07ecdebd.js";import"./Skeleton.88496afb.js";import"./moment.a565bb48.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.a1d6819d.js";import"./SchemaDrivenAnnotationEditor.4ddba243.js";import"./union.d2965ebf.js";import"./_copyArray.29c4db1e.js";import"./ajv.75556aee.js";import"./isEmpty.868ebd54.js";import"./lodash.caebe99a.js";import"./CalendarWithIconFormGroup.3a1fed8c.js";import"./index.8ed07549.js";import"./Collapse.c0581257.js";import"./groupBy.b210e353.js";import"./_baseMap.96c3880f.js";import"./_baseIsEqual.90988753.js";import"./_cacheHas.218a5665.js";import"./_setToArray.a82100c8.js";import"./EntityModal.0542d870.js";import"./HelpPopover.41851349.js";import"./MarkdownPopover.efbe32fc.js";import"./usePopperMarginModifiers.1c4b2def.js";import"./MarkdownSynapse.11143e6e.js";import"./UserCard.c7556a91.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.a5be41ff.js";import"./times.49810acf.js";import"./toInteger.0eadce58.js";import"./Overlay.3297046e.js";import"./factory.d6a1d2a5.js";import"./SynapseVideo.f2101abf.js";import"./ExternalFileHandleInterface.c113fa19.js";import"./WarningModal.ca99a4a6.js";import"./LockTwoTone.24dc8c80.js";import"./cloneDeep.0741a428.js";import"./Dropdown.2144a55d.js";import"./isRequiredForA11y.20ed4857.js";import"./Sort.aedf78d9.js";import"./EntityLink.b7e25a2f.js";import"./useFavorites.10669fad.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";const Ke={parameters:{storySource:{source:`import React from 'react'
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
