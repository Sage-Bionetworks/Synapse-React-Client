import{E as o,F as i}from"./EntityFinder.c438ae3d.js";import{E as e}from"./EntityTypeUtils.0b7d6daf.js";import"./assert.c0798b20.js";import{j as n}from"./jsx-runtime.2e925369.js";import"./iframe.4d1963fd.js";import"./useUserBundle.81f172b7.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./withStyles.4f64abe1.js";import"./toConsumableArray.5f669646.js";import"./index.23d49b86.js";import"./Button.77571428.js";import"./index.f252d424.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.1f1b3522.js";import"./FormLabel.a635baa2.js";import"./index.06f4a415.js";import"./createWithBsPrefix.f7715523.js";import"./Alert.ad748791.js";import"./Fade.7bfbed49.js";import"./Transition.f54f11c8.js";import"./_Uint8Array.692793fe.js";import"./isObject.7e2c8eb3.js";import"./isArray.949e1480.js";import"./react-sizeme.62537895.js";import"./Arrow.c6e8b887.js";import"./sqlFunctions.b49ac766.js";import"./IconSvg.f48e59e1.js";import"./utils.ebacc06c.js";import"./useTheme.735ed160.js";import"./makeStyles.5f6bad01.js";import"./createSvgIcon.53013205.js";import"./InfoOutlined.748401db.js";import"./Clear.53a62cf5.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./useGetEntityChildren.d2470c76.js";import"./useInfiniteQuery.d8587f31.js";import"./queryKeys.e0d3085f.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.4bc2dc68.js";import"./classCallCheck.8304ed06.js";import"./inherits.428c75c6.js";import"./index.es.82d55a6a.js";import"./FullWidthAlert.a054f15b.js";import"./Typography.e08e7569.js";import"./debounce.6a99f8f3.js";import"./toNumber.81238efb.js";import"./isSymbol.a6e5b306.js";import"./react-intersection-observer.m.66de6abb.js";import"./useEntity.bd2f17c6.js";import"./pick.22f6a031.js";import"./uniqueId.4eca3697.js";import"./_getTag.a9dbc6d6.js";import"./_Set.ec75fc93.js";import"./hasIn.87b4195e.js";import"./_baseSlice.50189bc5.js";import"./SchemaDrivenAnnotationEditor.541d304f.js";import"./isEmpty.9a5eda9b.js";import"./LoadingScreen.85210ad1.js";import"./Modal.739750b1.js";import"./useWaitForDOMRef.088a2ede.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useListState.7f5a3e64.js";import"./Collapse.b335a5d4.js";import"./groupBy.344adec2.js";import"./_baseMap.f734f7e0.js";import"./_baseIsEqual.0aa7d9c9.js";import"./_cacheHas.e524ea96.js";import"./_setToArray.a82100c8.js";import"./moment.81704e1d.js";import"./CalendarWithIconFormGroup.6ace7a9b.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./ToastMessage.574c0fe0.js";import"./useEntityBundle.d9b0e5f7.js";import"./EntityModal.6f61fdcc.js";import"./SkeletonTable.9a0cd721.js";import"./times.199943af.js";import"./toInteger.9c26e41e.js";import"./Skeleton.bf1489f0.js";import"./DateFormatter.8b737876.js";import"./ExternalFileHandleInterface.9100e1e9.js";import"./UserCard.803925ad.js";import"./IconCopy.b1eba79c.js";import"./Overlay.5ce67f19.js";import"./usePopperMarginModifiers.09a60569.js";import"./HelpPopover.f5a33925.js";import"./MarkdownPopover.94b5a8d0.js";import"./MarkdownSynapse.58ffe4ac.js";import"./factory.dab46a16.js";import"./SynapseVideo.c6fc622a.js";import"./WarningModal.14601faa.js";import"./LockTwoTone.5189d348.js";import"./Checkbox.995e1545.js";import"./EntityIcon.6fef0a36.js";import"./cloneDeep.058aaa7d.js";import"./Dropdown.edf6576c.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.9d37c524.js";import"./EntityLink.db14600a.js";import"./useFavorites.6d8eaffc.js";import"./TypeUtils.a2c41307.js";var ie={parameters:{storySource:{source:`import React from 'react'
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
//# sourceMappingURL=EntityFinder.stories.7c3d3965.js.map
