import{E as o,F as n}from"./EntityFinder.ed4ea10a.js";import{E as e}from"./EntityTypeUtils.8b037661.js";import"./assert.3cfd2c72.js";import{j as r}from"./jsx-runtime.2e925369.js";import"./iframe.5219a3a2.js";import"./index.8a2242e1.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./isObject.f3be1931.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.d42a873e.js";import"./index.06f4a415.js";import"./toString.f9b9a371.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";import"./react-sizeme.3a5ec3a6.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.3d20df6f.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./useTheme.8804f8cd.js";import"./makeStyles.9dfaa099.js";import"./InfoOutlined.22a371fd.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./useGetEntityChildren.20b7cc26.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.2aae5abd.js";import"./classCallCheck.8304ed06.js";import"./inherits.98d6a15d.js";import"./FullWidthAlert.1eea41b0.js";import"./Typography.53c43c81.js";import"./debounce.bb67b392.js";import"./toNumber.71be2bd9.js";import"./HelpPopover.9591775e.js";import"./MarkdownPopover.5249402f.js";import"./usePopperMarginModifiers.7a874fe8.js";import"./useWaitForDOMRef.0721218f.js";import"./hasClass.56fd144a.js";import"./MarkdownSynapse.b7a4c780.js";import"./UserCard.da3dd04a.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.4dbd8f76.js";import"./times.cfced7bd.js";import"./toInteger.1984412c.js";import"./Skeleton.8dd0668e.js";import"./ToastMessage.507eac51.js";import"./removeClass.27874bcb.js";import"./uniqueId.50daefd4.js";import"./Overlay.ac713ce0.js";import"./factory.81c9112e.js";import"./SynapseVideo.b358d8e9.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.68e90257.js";import"./moment.53181859.js";import"./LoadingScreen.2d733c1c.js";import"./Modal.ea36991f.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.7f748159.js";import"./useEntityBundle.54ad9eea.js";import"./EntityIcon.dba9dbb3.js";import"./SynapseTableConstants.07ecdebd.js";import"./SchemaDrivenAnnotationEditor.37daf9a4.js";import"./isEmpty.0f6ce682.js";import"./useListState.7f5a3e64.js";import"./Collapse.fe074047.js";import"./groupBy.722db808.js";import"./_baseMap.677463ae.js";import"./_baseIsEqual.171cba8e.js";import"./_cacheHas.154bb9e9.js";import"./_setToArray.a82100c8.js";import"./CalendarWithIconFormGroup.1eac26a0.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./EntityModal.d2e1a50e.js";import"./ExternalFileHandleInterface.fa4d3beb.js";import"./WarningModal.c0522703.js";import"./LockTwoTone.32ff1570.js";import"./cloneDeep.99916528.js";import"./Dropdown.83bddc70.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.b769385f.js";import"./EntityLink.e3fcc2c3.js";import"./useFavorites.5a6667a8.js";import"./TypeUtils.a2c41307.js";var Ut={parameters:{storySource:{source:`import React from 'react'
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
//# sourceMappingURL=EntityFinder.stories.98091e76.js.map
