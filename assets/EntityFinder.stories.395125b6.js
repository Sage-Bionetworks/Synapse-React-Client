import{E as o,F as i}from"./EntityFinder.cadd23c4.js";import{E as e}from"./EntityTypeUtils.962859d8.js";import"./assert.84d23c9e.js";import{j as n}from"./jsx-runtime.2e925369.js";import"./iframe.286ee2d7.js";import"./useUserBundle.220e8a9a.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./withStyles.4f64abe1.js";import"./toConsumableArray.5f669646.js";import"./index.07273d6a.js";import"./Button.77571428.js";import"./index.f252d424.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.1f1b3522.js";import"./FormLabel.a635baa2.js";import"./index.06f4a415.js";import"./createWithBsPrefix.f7715523.js";import"./Alert.ad748791.js";import"./Fade.7bfbed49.js";import"./Transition.f54f11c8.js";import"./_Uint8Array.692793fe.js";import"./isObject.7e2c8eb3.js";import"./isArray.949e1480.js";import"./react-sizeme.1b7c98da.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.f48e59e1.js";import"./utils.ebacc06c.js";import"./useTheme.735ed160.js";import"./makeStyles.5f6bad01.js";import"./createSvgIcon.53013205.js";import"./InfoOutlined.748401db.js";import"./Clear.53a62cf5.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./useGetEntityChildren.9dd1a33b.js";import"./useInfiniteQuery.c68b4874.js";import"./queryKeys.e0d3085f.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.4bc2dc68.js";import"./classCallCheck.8304ed06.js";import"./inherits.428c75c6.js";import"./index.es.82d55a6a.js";import"./FullWidthAlert.a054f15b.js";import"./Typography.e08e7569.js";import"./debounce.6a99f8f3.js";import"./toNumber.81238efb.js";import"./isSymbol.a6e5b306.js";import"./react-intersection-observer.m.66de6abb.js";import"./useEntity.e50c12d0.js";import"./pick.721a8cb6.js";import"./uniqueId.4eca3697.js";import"./_getTag.a9dbc6d6.js";import"./_Set.ec75fc93.js";import"./hasIn.87b4195e.js";import"./_baseSlice.50189bc5.js";import"./SchemaDrivenAnnotationEditor.efb62709.js";import"./isEmpty.9a5eda9b.js";import"./LoadingScreen.85210ad1.js";import"./Modal.739750b1.js";import"./useWaitForDOMRef.088a2ede.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useListState.7f5a3e64.js";import"./Collapse.b335a5d4.js";import"./groupBy.c130a1a6.js";import"./_baseMap.ae43cf89.js";import"./_baseIsEqual.0aa7d9c9.js";import"./_cacheHas.e524ea96.js";import"./_setToArray.a82100c8.js";import"./moment.81704e1d.js";import"./CalendarWithIconFormGroup.9557c98e.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./ToastMessage.574c0fe0.js";import"./useEntityBundle.05c31cdc.js";import"./EntityModal.8da287fc.js";import"./SkeletonTable.81ab622f.js";import"./times.b77881cd.js";import"./toInteger.9c26e41e.js";import"./Skeleton.bf1489f0.js";import"./DateFormatter.6695dbdc.js";import"./ExternalFileHandleInterface.e09cbe70.js";import"./UserCard.aaa47711.js";import"./IconCopy.b1eba79c.js";import"./Overlay.5ce67f19.js";import"./usePopperMarginModifiers.09a60569.js";import"./HelpPopover.609a89c8.js";import"./MarkdownPopover.e9597392.js";import"./MarkdownSynapse.8fa68fa2.js";import"./factory.41f48787.js";import"./SynapseVideo.3d7fa730.js";import"./WarningModal.14601faa.js";import"./LockTwoTone.5189d348.js";import"./Checkbox.995e1545.js";import"./EntityIcon.f5f28cfc.js";import"./cloneDeep.24464b35.js";import"./Dropdown.edf6576c.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.9ea1f5ca.js";import"./EntityLink.a1eb7f80.js";import"./useFavorites.5a2cdc2b.js";import"./TypeUtils.a2c41307.js";var ie={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}},"single-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{}};const r=t=>n(o,{...t}),p=r.bind({});p.args={mustSelectVersionNumber:!0,treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const m=r.bind({});m.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const re=["DualPane","SinglePane"];export{p as DualPane,m as SinglePane,re as __namedExportsOrder,ie as default};
//# sourceMappingURL=EntityFinder.stories.395125b6.js.map
