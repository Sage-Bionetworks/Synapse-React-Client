import{E as o,F as n,V as i}from"./EntityFinder.9b07a7f3.js";import{E as e}from"./EntityTypeUtils.7055b7ec.js";import"./assert.fa0c7516.js";import{j as p}from"./jsx-runtime.00d70968.js";import"./pluralize.99bb3f49.js";import"./iframe.8d2e139a.js";import"./index.238b5092.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Button.fda23eee.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./toString.d84aaeca.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e37b9412.js";import"./react-sizeme.92d8060f.js";import"./Arrow.c4d06967.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.7fcfdfd8.js";import"./Tooltip.b1e63f93.js";import"./createSvgIcon.99e72c0f.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./makeStyles.45e8b79c.js";import"./InfoOutlined.60e019a4.js";import"./use-deep-compare-effect.esm.357a0ad8.js";import"./useGetEntityChildren.64b13684.js";import"./EntityChildren.50133102.js";import"./Select-54ac8379.esm.edd779c2.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./LoadingScreen.91642215.js";import"./Typography.868473dc.js";import"./Modal.1fb607f9.js";import"./useWaitForDOMRef.97759fd7.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./Checkbox.c68b07e0.js";import"./uniqueId.eba72690.js";import"./useEntityBundle.c050031c.js";import"./EntityIcon.b5caff32.js";import"./SynapseTableConstants.07ecdebd.js";import"./Skeleton.99b24529.js";import"./moment.a565bb48.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.a800666c.js";import"./SchemaDrivenAnnotationEditor.0f7d368b.js";import"./union.11061141.js";import"./_copyArray.5d5fd00d.js";import"./ajv.0e6bdb2b.js";import"./isEmpty.9a27a3b1.js";import"./lodash.a0593819.js";import"./CalendarWithIconFormGroup.ae73bdef.js";import"./index.8ed07549.js";import"./FullWidthAlert.e63d41e9.js";import"./Collapse.675410da.js";import"./groupBy.138ca218.js";import"./_baseMap.b481d33d.js";import"./_baseIsEqual.d4b1d724.js";import"./_cacheHas.a2e28da2.js";import"./_setToArray.a82100c8.js";import"./ToastMessage.30a6258e.js";import"./CustomSelectWidget.b1e9ceda.js";import"./EntityModal.c8043f81.js";import"./HelpPopover.f9dcdcff.js";import"./MarkdownPopover.adc69d0b.js";import"./usePopperMarginModifiers.fba68454.js";import"./MarkdownSynapse.67d3e057.js";import"./index.2798a77f.js";import"./index.a9391c49.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./UserCard.e473f65b.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.f91ae5a7.js";import"./times.149801b6.js";import"./toInteger.36cb48e0.js";import"./Overlay.66930c7c.js";import"./factory.cee81593.js";import"./SynapseVideo.8f108473.js";import"./ExternalFileHandleInterface.e5731e31.js";import"./WarningModal.e66d24b4.js";import"./LockTwoTone.59b2348f.js";import"./cloneDeep.a5fcbee1.js";import"./Dropdown.65d7027b.js";import"./isRequiredForA11y.20ed4857.js";import"./Sort.911af575.js";import"./EntityLink.9f43620a.js";import"./useFavorites.6727f07c.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";const Ht={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=t=>p(o,{...t}),s=r.bind({});s.args={treeOnly:!1,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),versionSelection:i.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const m=r.bind({});m.args={treeOnly:!0,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],versionSelection:i.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const Xt=["DualPane","SinglePane"];export{s as DualPane,m as SinglePane,Xt as __namedExportsOrder,Ht as default};
