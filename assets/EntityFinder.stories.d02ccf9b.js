import{E as o,F as n}from"./EntityFinder.da3f4b1e.js";import{E as e}from"./EntityTypeUtils.54e47516.js";import"./assert.f88a2d20.js";import{j as r}from"./jsx-runtime.2e925369.js";import"./iframe.a56f5c43.js";import"./index.e94f1e56.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.ab2e1d33.js";import"./toConsumableArray.b3669986.js";import"./isObject.97b5908e.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.c5966bcb.js";import"./index.06f4a415.js";import"./toString.41faaa42.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.f6f6da7c.js";import"./react-sizeme.e11fd412.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.160dd61c.js";import"./utils.38c8d0df.js";import"./useTheme.990cd45a.js";import"./makeStyles.9976e655.js";import"./createSvgIcon.88863916.js";import"./InfoOutlined.21bf844a.js";import"./Clear.eb427cfa.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./useGetEntityChildren.0426bbea.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.b6e0404b.js";import"./classCallCheck.8304ed06.js";import"./inherits.c270e637.js";import"./index.es.82d55a6a.js";import"./FullWidthAlert.96be848e.js";import"./Typography.7bd5dd17.js";import"./debounce.b9f00509.js";import"./toNumber.bfb36d17.js";import"./react-intersection-observer.m.66de6abb.js";import"./SchemaDrivenAnnotationEditor.8df95041.js";import"./isEmpty.708f5bd7.js";import"./LoadingScreen.7047b156.js";import"./Modal.59a27718.js";import"./useWaitForDOMRef.67fdb4e5.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useListState.7f5a3e64.js";import"./Collapse.6742e3ab.js";import"./groupBy.4623cc04.js";import"./_baseMap.49f63c33.js";import"./_baseIsEqual.e9d7153b.js";import"./_cacheHas.c716d685.js";import"./_setToArray.a82100c8.js";import"./moment.81704e1d.js";import"./CalendarWithIconFormGroup.c30b88d1.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./ToastMessage.87e58df2.js";import"./uniqueId.ce7b286a.js";import"./useEntityBundle.5fb8d3e4.js";import"./EntityModal.ed2147af.js";import"./SkeletonTable.9c2d923f.js";import"./times.e9ba47eb.js";import"./toInteger.ea37b69f.js";import"./Skeleton.bcb4a49e.js";import"./DateFormatter.e6da0921.js";import"./ExternalFileHandleInterface.1ae61d50.js";import"./UserCard.60c6e9c5.js";import"./IconCopy.b1eba79c.js";import"./Overlay.4a980e95.js";import"./usePopperMarginModifiers.ee427a81.js";import"./HelpPopover.22a59cfd.js";import"./MarkdownPopover.582eb3e3.js";import"./MarkdownSynapse.46a192d7.js";import"./factory.db4683b0.js";import"./SynapseVideo.3ad8429a.js";import"./WarningModal.9b648fb8.js";import"./LockTwoTone.5dc5e9c0.js";import"./Checkbox.a1204c23.js";import"./EntityIcon.dd47dd4c.js";import"./cloneDeep.22c90566.js";import"./Dropdown.d77b5878.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.db47cf66.js";import"./EntityLink.0605e0db.js";import"./useFavorites.2146f3c2.js";import"./TypeUtils.a2c41307.js";var $t={parameters:{storySource:{source:`import React from 'react'
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
//# sourceMappingURL=EntityFinder.stories.d02ccf9b.js.map
