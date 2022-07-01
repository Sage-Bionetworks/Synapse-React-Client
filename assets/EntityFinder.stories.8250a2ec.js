import{E as o,F as i}from"./EntityFinder.b930967a.js";import{E as e}from"./EntityTypeUtils.0e13f8a8.js";import"./assert.45ccb9fa.js";import{j as r}from"./jsx-runtime.2e925369.js";import"./iframe.dedbd728.js";import"./useUserBundle.1e187889.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./withStyles.4f64abe1.js";import"./toConsumableArray.5f669646.js";import"./index.cdf98c81.js";import"./Button.77571428.js";import"./index.f252d424.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.1f1b3522.js";import"./FormLabel.a635baa2.js";import"./index.06f4a415.js";import"./createWithBsPrefix.f7715523.js";import"./Alert.ad748791.js";import"./Fade.7bfbed49.js";import"./Transition.f54f11c8.js";import"./_Uint8Array.692793fe.js";import"./isObject.7e2c8eb3.js";import"./isArray.949e1480.js";import"./react-sizeme.e9c8cb65.js";import"./Arrow.c6e8b887.js";import"./RegularExpressions.b87376bf.js";import"./IconSvg.d5022c82.js";import"./utils.ebacc06c.js";import"./useTheme.735ed160.js";import"./makeStyles.5f6bad01.js";import"./createSvgIcon.53013205.js";import"./InfoOutlined.748401db.js";import"./Clear.53a62cf5.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./useGetEntityChildren.416d1bc1.js";import"./useInfiniteQuery.29c04cdc.js";import"./queryKeys.e0d3085f.js";import"./EntityChildren.50133102.js";import"./stateManager-845a3300.esm.4bc2dc68.js";import"./classCallCheck.8304ed06.js";import"./inherits.428c75c6.js";import"./index.es.82d55a6a.js";import"./FullWidthAlert.a054f15b.js";import"./Typography.e08e7569.js";import"./debounce.6a99f8f3.js";import"./toNumber.81238efb.js";import"./isSymbol.a6e5b306.js";import"./react-intersection-observer.m.66de6abb.js";import"./useEntity.c29d3474.js";import"./pick.85350d17.js";import"./uniqueId.4eca3697.js";import"./_getTag.260cb500.js";import"./_setToArray.78d992a5.js";import"./hasIn.d2b152d7.js";import"./_baseSlice.50189bc5.js";import"./SchemaDrivenAnnotationEditor.d46c3a12.js";import"./isEmpty.12a3904b.js";import"./LoadingScreen.85210ad1.js";import"./Modal.739750b1.js";import"./useWaitForDOMRef.088a2ede.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useListState.7f5a3e64.js";import"./groupBy.4164eb23.js";import"./_baseMap.f7bcde20.js";import"./_baseIsEqual.38511a1d.js";import"./_cacheHas.e524ea96.js";import"./moment.81704e1d.js";import"./CalendarWithIconFormGroup.b3c503d0.js";import"./index.5ef2ed87.js";import"./index.8cde812d.js";import"./ToastMessage.574c0fe0.js";import"./useEntityBundle.f151ac08.js";import"./EntityModal.5329b15e.js";import"./SkeletonTable.874b8571.js";import"./times.0a9ef28a.js";import"./toInteger.9c26e41e.js";import"./Skeleton.bf1489f0.js";import"./DateFormatter.70edf4bc.js";import"./ExternalFileHandleInterface.d33a411d.js";import"./UserCard.07b3e3b1.js";import"./IconCopy.b1eba79c.js";import"./Overlay.5ce67f19.js";import"./usePopperMarginModifiers.09a60569.js";import"./HelpPopover.07403ad1.js";import"./MarkdownPopover.48d66d51.js";import"./MarkdownSynapse.385ce618.js";import"./factory.0d7085b4.js";import"./sqlFunctions.9bad0aa7.js";import"./SynapseVideo.5ad46b8f.js";import"./WarningModal.14601faa.js";import"./LockTwoTone.5189d348.js";import"./Checkbox.995e1545.js";import"./EntityIcon.9bbd37f9.js";import"./cloneDeep.14fe87ca.js";import"./Dropdown.edf6576c.js";import"./isRequiredForA11y.61bbc671.js";import"./Sort.132830a1.js";import"./EntityLink.b30d65b8.js";import"./useFavorites.5a426f2f.js";import"./TypeUtils.a2c41307.js";var oe={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}},"single-pane":{startLoc:{col:54,line:17},endLoc:{col:1,line:19},startBody:{col:54,line:17},endBody:{col:1,line:19}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{}};const n=t=>r(o,{...t}),p=n.bind({});p.args={mustSelectVersionNumber:!0,treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const m=n.bind({});m.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],showVersionSelection:!0,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const ie=["DualPane","SinglePane"];export{p as DualPane,m as SinglePane,ie as __namedExportsOrder,oe as default};
//# sourceMappingURL=EntityFinder.stories.8250a2ec.js.map
