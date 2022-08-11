import{E as o,F as n}from"./EntityFinder.3365d7f3.js";import{E as e}from"./EntityTypeUtils.0e68196e.js";import"./assert.a74e4ee8.js";import{j as r}from"./jsx-runtime.2e925369.js";import"./pluralize.75263668.js";import"./iframe.79f58689.js";import"./index.d49816b5.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./Alert.eafe86e9.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.d42a873e.js";import"./index.06f4a415.js";import"./toString.8ef640ae.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";import"./react-sizeme.f18dda41.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.c485205d.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./useTheme.8804f8cd.js";import"./makeStyles.9dfaa099.js";import"./InfoOutlined.22a371fd.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./useGetEntityChildren.d0968250.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.2aae5abd.js";import"./classCallCheck.8304ed06.js";import"./inherits.98d6a15d.js";import"./HelpPopover.a8067c6c.js";import"./MarkdownPopover.e4733606.js";import"./usePopperMarginModifiers.31225551.js";import"./useWaitForDOMRef.c89dbc64.js";import"./hasClass.56fd144a.js";import"./MarkdownSynapse.a444a573.js";import"./UserCard.72fe08d5.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.04de3da1.js";import"./times.c0ef5e4d.js";import"./toInteger.39208b52.js";import"./Skeleton.8dd0668e.js";import"./ToastMessage.f82ed562.js";import"./FullWidthAlert.e7125a09.js";import"./Typography.bfdf676e.js";import"./removeClass.27874bcb.js";import"./uniqueId.fa0dadf5.js";import"./Overlay.88992b99.js";import"./factory.5ddbcf18.js";import"./SynapseVideo.94650b2c.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.30533853.js";import"./moment.53181859.js";import"./HelpOutlineTwoTone.5e2fed5c.js";import"./LoadingScreen.56f18e4f.js";import"./Modal.58357e58.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.85bb9cd4.js";import"./useEntityBundle.c7a4f058.js";import"./EntityIcon.5de73ee7.js";import"./SynapseTableConstants.07ecdebd.js";import"./SchemaDrivenAnnotationEditor.3b40c15b.js";import"./isEmpty.d2d9fcac.js";import"./lodash.e2ed0816.js";import"./CalendarWithIconFormGroup.abcb1424.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./Collapse.fe074047.js";import"./groupBy.7223c42f.js";import"./_baseMap.a3237ae6.js";import"./_baseIsEqual.c0fe610f.js";import"./_cacheHas.4e1ad05b.js";import"./_setToArray.a82100c8.js";import"./EntityModal.112b56a7.js";import"./ExternalFileHandleInterface.363cc7f3.js";import"./WarningModal.db1d2b8d.js";import"./LockTwoTone.32ff1570.js";import"./cloneDeep.1486fe80.js";import"./Dropdown.c29f5884.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.cd1f36cf.js";import"./EntityLink.c0aa070f.js";import"./useFavorites.a114a7b1.js";import"./FileEntity.4f8cb425.js";import"./TypeUtils.a2c41307.js";var $t={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import EntityFinder from './EntityFinder'
import { FinderScope } from './tree/EntityTree'
import { EntityType } from '../../utils/synapseTypes'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/EntityFinder',
  component: EntityFinder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof EntityFinder>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EntityFinder> = args => (
  <EntityFinder {...args} />
)

export const DualPane = Template.bind({})
DualPane.args = {
  mustSelectVersionNumber: true,
  treeOnly: false,
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: 'syn23567475',
  initialContainer: 'syn24183903',
  selectMultiple: true,
  visibleTypesInList: Object.values(EntityType),
  showVersionSelection: true,
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
  showVersionSelection: true,
  onSelectedChange: selected => {
    console.log('Selection changed:', selected)
  },
  selectableTypes: [EntityType.PROJECT, EntityType.FOLDER],
}
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}},"single-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{}};const i=t=>r(o,{...t}),p=i.bind({});p.args={mustSelectVersionNumber:!0,treeOnly:!1,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=i.bind({});s.args={treeOnly:!0,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const At=["DualPane","SinglePane"];export{p as DualPane,s as SinglePane,At as __namedExportsOrder,$t as default};
//# sourceMappingURL=EntityFinder.stories.20473ad9.js.map
