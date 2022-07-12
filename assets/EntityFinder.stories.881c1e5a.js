import{E as o,F as n}from"./EntityFinder.5465e761.js";import{E as e}from"./EntityTypeUtils.f6c50c7c.js";import"./assert.0e10e861.js";import{j as r}from"./jsx-runtime.2e925369.js";import"./iframe.e1ed190f.js";import"./index.1a442768.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.ab2e1d33.js";import"./toConsumableArray.b3669986.js";import"./isObject.97b5908e.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.c5966bcb.js";import"./index.06f4a415.js";import"./toString.41faaa42.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.f6f6da7c.js";import"./react-sizeme.100cfa68.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.a94da8a0.js";import"./utils.38c8d0df.js";import"./useTheme.990cd45a.js";import"./makeStyles.9976e655.js";import"./createSvgIcon.88863916.js";import"./InfoOutlined.21bf844a.js";import"./Clear.eb427cfa.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./useGetEntityChildren.be0706de.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.b6e0404b.js";import"./classCallCheck.8304ed06.js";import"./inherits.c270e637.js";import"./index.es.82d55a6a.js";import"./FullWidthAlert.96be848e.js";import"./Typography.7bd5dd17.js";import"./debounce.b9f00509.js";import"./toNumber.bfb36d17.js";import"./react-intersection-observer.m.66de6abb.js";import"./SchemaDrivenAnnotationEditor.f5e4e2e7.js";import"./isEmpty.480a20f9.js";import"./LoadingScreen.7047b156.js";import"./Modal.59a27718.js";import"./useWaitForDOMRef.67fdb4e5.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useListState.7f5a3e64.js";import"./Collapse.6742e3ab.js";import"./groupBy.434a04ac.js";import"./_baseMap.3f15d352.js";import"./_baseIsEqual.ecdf8706.js";import"./_cacheHas.78de14a5.js";import"./_setToArray.a82100c8.js";import"./moment.53181859.js";import"./CalendarWithIconFormGroup.7fb53549.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./ToastMessage.87e58df2.js";import"./uniqueId.ce7b286a.js";import"./useEntityBundle.6435e1dc.js";import"./EntityModal.50d46b36.js";import"./SkeletonTable.698d9981.js";import"./times.86585c47.js";import"./toInteger.ea37b69f.js";import"./Skeleton.bcb4a49e.js";import"./DateFormatter.0805522a.js";import"./ExternalFileHandleInterface.1122fdb2.js";import"./UserCard.81397a1d.js";import"./IconCopy.b1eba79c.js";import"./Overlay.4a980e95.js";import"./usePopperMarginModifiers.ee427a81.js";import"./HelpPopover.e23d5747.js";import"./MarkdownPopover.2a9a961d.js";import"./MarkdownSynapse.43b6d774.js";import"./factory.bd86ef7b.js";import"./SynapseVideo.f852939c.js";import"./WarningModal.9b648fb8.js";import"./LockTwoTone.5dc5e9c0.js";import"./Checkbox.a1204c23.js";import"./EntityIcon.3d5b4140.js";import"./cloneDeep.b0d8a66d.js";import"./Dropdown.d77b5878.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.d8b0dbcf.js";import"./EntityLink.7b547764.js";import"./useFavorites.c1ac8024.js";import"./TypeUtils.a2c41307.js";var $t={parameters:{storySource:{source:`import React from 'react'
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
//# sourceMappingURL=EntityFinder.stories.881c1e5a.js.map
