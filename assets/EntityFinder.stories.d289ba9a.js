import{E as o,F as n}from"./EntityFinder.599e4bef.js";import{E as e}from"./EntityTypeUtils.f8610ea1.js";import"./assert.a8c51c78.js";import{j as r}from"./jsx-runtime.2e925369.js";import"./iframe.eab2814f.js";import"./index.1dfcb941.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./isObject.f3be1931.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.d42a873e.js";import"./index.06f4a415.js";import"./toString.f9b9a371.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";import"./react-sizeme.dc2a05aa.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.3d20df6f.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./useTheme.8804f8cd.js";import"./makeStyles.9dfaa099.js";import"./InfoOutlined.22a371fd.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./useGetEntityChildren.8b4e2bbc.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.2aae5abd.js";import"./classCallCheck.8304ed06.js";import"./inherits.98d6a15d.js";import"./FullWidthAlert.50041932.js";import"./Typography.bfdf676e.js";import"./debounce.bb67b392.js";import"./toNumber.71be2bd9.js";import"./HelpPopover.9eae9e3e.js";import"./MarkdownPopover.b647efb7.js";import"./usePopperMarginModifiers.7a874fe8.js";import"./useWaitForDOMRef.0721218f.js";import"./hasClass.56fd144a.js";import"./MarkdownSynapse.8a891ab7.js";import"./UserCard.6654ebd2.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.951cdf81.js";import"./times.4bb416f1.js";import"./toInteger.1984412c.js";import"./Skeleton.8dd0668e.js";import"./ToastMessage.0defc330.js";import"./removeClass.27874bcb.js";import"./uniqueId.50daefd4.js";import"./Overlay.ac713ce0.js";import"./factory.4f25f066.js";import"./SynapseVideo.112f63a4.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.fb96e6b4.js";import"./moment.53181859.js";import"./LoadingScreen.e3fe6e43.js";import"./Modal.ea36991f.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.7f748159.js";import"./useEntityBundle.08e750bd.js";import"./EntityIcon.9697af22.js";import"./SynapseTableConstants.07ecdebd.js";import"./SchemaDrivenAnnotationEditor.1e21bfe0.js";import"./isEmpty.79556e26.js";import"./useListState.7f5a3e64.js";import"./Collapse.fe074047.js";import"./groupBy.b0ed911e.js";import"./_baseMap.077b3481.js";import"./_baseIsEqual.4bd8ede1.js";import"./_cacheHas.128b66a2.js";import"./_setToArray.a82100c8.js";import"./CalendarWithIconFormGroup.ce16b6d7.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./EntityModal.dd7830c2.js";import"./ExternalFileHandleInterface.fc43c631.js";import"./WarningModal.c0522703.js";import"./LockTwoTone.32ff1570.js";import"./cloneDeep.be9d9ebc.js";import"./Dropdown.83bddc70.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.0db3d277.js";import"./EntityLink.fa6f8d94.js";import"./useFavorites.351eda7e.js";import"./TypeUtils.a2c41307.js";var Ut={parameters:{storySource:{source:`import React from 'react'
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
//# sourceMappingURL=EntityFinder.stories.d289ba9a.js.map
