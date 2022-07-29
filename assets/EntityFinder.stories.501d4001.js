import{E as o,F as n}from"./EntityFinder.16a8c479.js";import{E as e}from"./EntityTypeUtils.dfce348e.js";import"./assert.383bcae5.js";import{j as r}from"./jsx-runtime.2e925369.js";import"./pluralize.ece9a20a.js";import"./iframe.6f158c94.js";import"./index.392a9d35.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./Alert.eafe86e9.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.d42a873e.js";import"./index.06f4a415.js";import"./toString.8ef640ae.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";import"./react-sizeme.bd4ee58f.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.c485205d.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./useTheme.8804f8cd.js";import"./makeStyles.9dfaa099.js";import"./InfoOutlined.22a371fd.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./useGetEntityChildren.d2100d80.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.2aae5abd.js";import"./classCallCheck.8304ed06.js";import"./inherits.98d6a15d.js";import"./HelpPopover.e6906850.js";import"./MarkdownPopover.6ef824ef.js";import"./usePopperMarginModifiers.31225551.js";import"./useWaitForDOMRef.c89dbc64.js";import"./hasClass.56fd144a.js";import"./MarkdownSynapse.05267262.js";import"./UserCard.3b134836.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.f9142bb8.js";import"./times.c86e13bf.js";import"./toInteger.3fa09c21.js";import"./Skeleton.8dd0668e.js";import"./ToastMessage.f82ed562.js";import"./FullWidthAlert.e7125a09.js";import"./Typography.bfdf676e.js";import"./removeClass.27874bcb.js";import"./uniqueId.fa0dadf5.js";import"./Overlay.88992b99.js";import"./factory.33e89a37.js";import"./SynapseVideo.052efab2.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.a5db568e.js";import"./moment.53181859.js";import"./HelpOutlineTwoTone.5e2fed5c.js";import"./LoadingScreen.56f18e4f.js";import"./Modal.58357e58.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.85bb9cd4.js";import"./useEntityBundle.2f36e6d9.js";import"./EntityIcon.1a32ad7b.js";import"./SynapseTableConstants.07ecdebd.js";import"./SchemaDrivenAnnotationEditor.a09ee345.js";import"./isEmpty.b1857e0d.js";import"./lodash.5c7b687f.js";import"./CalendarWithIconFormGroup.c8bd8977.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./Collapse.fe074047.js";import"./groupBy.70cd929b.js";import"./_baseMap.9ca2c051.js";import"./_baseIsEqual.e47474ff.js";import"./_cacheHas.2a084295.js";import"./_setToArray.a82100c8.js";import"./EntityModal.24de26ec.js";import"./ExternalFileHandleInterface.b7cb32b1.js";import"./WarningModal.db1d2b8d.js";import"./LockTwoTone.32ff1570.js";import"./cloneDeep.3aa2cebc.js";import"./Dropdown.c29f5884.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.324abac0.js";import"./EntityLink.78763c7d.js";import"./useFavorites.81e57756.js";import"./TypeUtils.a2c41307.js";var Ut={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}},"single-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{}};const i=t=>r(o,{...t}),p=i.bind({});p.args={mustSelectVersionNumber:!0,treeOnly:!1,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=i.bind({});s.args={treeOnly:!0,initialScope:n.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const $t=["DualPane","SinglePane"];export{p as DualPane,s as SinglePane,$t as __namedExportsOrder,Ut as default};
//# sourceMappingURL=EntityFinder.stories.501d4001.js.map
