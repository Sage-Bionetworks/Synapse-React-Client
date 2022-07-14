import{E as o,F as n}from"./EntityFinder.c57c9063.js";import{E as e}from"./EntityTypeUtils.c1f8d4c0.js";import"./assert.0715cc19.js";import{j as r}from"./jsx-runtime.2e925369.js";import"./iframe.0a5cef96.js";import"./index.1cc5f672.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./isObject.f3be1931.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.d42a873e.js";import"./index.06f4a415.js";import"./toString.f9b9a371.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";import"./react-sizeme.81853bcf.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.3d20df6f.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./useTheme.8804f8cd.js";import"./makeStyles.9dfaa099.js";import"./InfoOutlined.22a371fd.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./useGetEntityChildren.c18ca967.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.2aae5abd.js";import"./classCallCheck.8304ed06.js";import"./inherits.98d6a15d.js";import"./FullWidthAlert.50041932.js";import"./Typography.bfdf676e.js";import"./debounce.bb67b392.js";import"./toNumber.71be2bd9.js";import"./HelpPopover.696ce07f.js";import"./MarkdownPopover.d56eb47e.js";import"./usePopperMarginModifiers.7a874fe8.js";import"./useWaitForDOMRef.0721218f.js";import"./hasClass.56fd144a.js";import"./MarkdownSynapse.9fe55e36.js";import"./UserCard.ace31edc.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.41a19f57.js";import"./times.6fd2952d.js";import"./toInteger.1984412c.js";import"./Skeleton.8dd0668e.js";import"./ToastMessage.0defc330.js";import"./removeClass.27874bcb.js";import"./uniqueId.50daefd4.js";import"./Overlay.ac713ce0.js";import"./factory.95e67417.js";import"./SynapseVideo.46255dc9.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.c908824d.js";import"./moment.53181859.js";import"./LoadingScreen.e3fe6e43.js";import"./Modal.ea36991f.js";import"./useWillUnmount.4a16e5cd.js";import"./Checkbox.7f748159.js";import"./useEntityBundle.42385cb1.js";import"./EntityIcon.cca5405d.js";import"./SynapseTableConstants.07ecdebd.js";import"./SchemaDrivenAnnotationEditor.7d4fc575.js";import"./isEmpty.9f37707d.js";import"./useListState.7f5a3e64.js";import"./Collapse.fe074047.js";import"./groupBy.7edcb721.js";import"./_baseMap.fff976dd.js";import"./_baseIsEqual.ccc4b6a7.js";import"./_cacheHas.13201491.js";import"./_setToArray.a82100c8.js";import"./CalendarWithIconFormGroup.66010746.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./EntityModal.2fb8ef4d.js";import"./ExternalFileHandleInterface.fa0e129b.js";import"./WarningModal.c0522703.js";import"./LockTwoTone.32ff1570.js";import"./cloneDeep.31b35be9.js";import"./Dropdown.83bddc70.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.0f7ad31d.js";import"./EntityLink.3e5772cc.js";import"./useFavorites.aecfc04e.js";import"./TypeUtils.a2c41307.js";var Ut={parameters:{storySource:{source:`import React from 'react'
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
//# sourceMappingURL=EntityFinder.stories.437369f9.js.map
