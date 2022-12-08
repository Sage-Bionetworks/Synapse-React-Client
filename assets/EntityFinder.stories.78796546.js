import{E as o,F as i,V as n}from"./EntityFinder.a4d06acd.js";import{E as e}from"./index.a4d7c90b.js";import{j as p}from"./jsx-runtime.e6c7cb0f.js";import"./HasAccessV2.d3489065.js";import"./getEndpoint.f1f195f5.js";import"./useAccessRequirements.b54ba1ba.js";import"./useInfiniteQuery.c9325a79.js";import"./SynapseConstants.4792b5b5.js";import"./queryKeys.e0d3085f.js";import"./RestrictionInformation.edfbac5a.js";import"./useGetInfoFromIds.8fc7a325.js";import"./use-deep-compare-effect.esm.28d3327d.js";import"./uniq.63cce7cd.js";import"./_baseSlice.50189bc5.js";import"./toInteger.e34afcf8.js";import"./isSymbol.361bd2a3.js";import"./isArray.d7f4d705.js";import"./Button.55945b82.js";import"./index.35ce73ec.js";import"./_cacheHas.006794e6.js";import"./without.b4578f3b.js";import"./uniqueId.3a766a50.js";import"./_Set.b19d8fcb.js";import"./_setToArray.a82100c8.js";import"./IconSvg.7c6c26ba.js";import"./SvgIcon.277e4012.js";import"./styled.defe1bf4.js";import"./Tooltip.b8c59786.js";import"./useTheme.78ea417a.js";import"./index.2be90583.js";import"./iframe.62902f49.js";import"./TransitionGroupContext.9be55353.js";import"./LoadingScreen.1b074d5e.js";import"./Modal.65e1d9b7.js";import"./createWithBsPrefix.d521861c.js";import"./contains.d4d1085c.js";import"./inheritsLoose.bbace147.js";import"./divWithClassName.f3083196.js";import"./usePrevious.c8a35040.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.0aadaf3e.js";import"./Typography.491b6426.js";import"./emotion-react.browser.esm.0fa712d1.js";import"./UserCard.d526f464.js";import"./IconCopy.137bbf05.js";import"./SkeletonTable.eb79cb63.js";import"./times.f6524aef.js";import"./Skeleton.fe2a8391.js";import"./ToastMessage.7470eb0d.js";import"./FullWidthAlert.194d0790.js";import"./Alert.dd9a8045.js";import"./hook.0a44a4bc.js";import"./Overlay.eaf422e6.js";import"./usePopperMarginModifiers.667559d9.js";import"./WarningModal.9c1c6b58.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.418c0465.js";import"./DateFormatter.1327d068.js";import"./dayjs.min.b6e54d5f.js";import"./utc.88a72a89.js";import"./EntityIcon.f4576c33.js";import"./core.esm.2df00ce1.js";import"./pick.7101f3bc.js";import"./_baseClone.d1846d14.js";import"./isEmpty.ec592bbb.js";import"./isEqual.c4ae851f.js";import"./index.browser.5f261a1c.js";import"./union.a20aff29.js";import"./CustomSelectWidget.c4dea705.js";import"./Select-54ac8379.esm.1e9a4ed4.js";import"./isString.1a1855ef.js";import"./Button.6ec7c4e8.js";import"./ButtonBase.c32891f3.js";import"./factory.18e4f30f.js";import"./sqlFunctions.1444b517.js";import"./QueryFilter.a15418f9.js";import"./useEntity.ddbaa66e.js";import"./useMutation.5ddf68a2.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.57c4a397.js";import"./queryUtils.db44d7f3.js";import"./cloneDeep.3598e4db.js";import"./NoSearchResults.f1ecdb1f.js";import"./NoData.4c563b5f.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.e35f48b6.js";import"./Dropdown.616646f9.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.cb4408e3.js";import"./RadioGroup.e66c93e6.js";import"./RangeSlider.cbd6b95d.js";import"./react-sizeme.b041d2db.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.cd8a0bef.js";import"./Close.d9d46688.js";import"./relativeTime.877ebaae.js";import"./useDownloadList.69656941.js";import"./QueryCount.c9193378.js";import"./react-select.esm.21528652.js";import"./IconList.e12dc649.js";import"./UserCardList.c1f20fb2.js";import"./EntityLink.b1f9e74b.js";import"./UserOrTeamBadge.00bb9390.js";import"./SynapseVideo.48d94448.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.49656bdb.js";import"./UserSearchBox.8df7db9f.js";import"./Arrow.2d204a84.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.1f5741ca.js";import"./CalendarWithIconFormGroup.3cbb154a.js";import"./localizedFormat.aa501f43.js";import"./IconButton.3458b12d.js";import"./List.73a174c7.js";import"./Modal.c06713bb.js";import"./Fade.43ac51c5.js";import"./index.f2a06ad4.js";import"./MenuList.6adf7493.js";import"./groupBy.07c8114e.js";import"./EntityModal.679d0836.js";import"./Sort.b6a86c65.js";import"./useFavorites.aba48d5a.js";import"./Link.f733bec4.js";const Ie={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import EntityFinder from './EntityFinder'
import { FinderScope } from './tree/EntityTree'
import { EntityType } from '../../utils/synapseTypes'
import { VersionSelectionType } from './VersionSelectionType'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/EntityFinder',
  component: EntityFinder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    versionSelection: {
      options: ['REQUIRED', 'DISABLED', 'TRACKED', 'UNTRACKED'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof EntityFinder>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EntityFinder> = args => (
  <EntityFinder {...args} />
)

export const DualPane = Template.bind({})
DualPane.args = {
  treeOnly: false,
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: 'syn23567475',
  initialContainer: 'syn24183903',
  selectMultiple: true,
  visibleTypesInList: Object.values(EntityType),
  versionSelection: VersionSelectionType.TRACKED,
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
  versionSelection: VersionSelectionType.DISALLOWED,
  onSelectedChange: selected => {
    console.log('Selection changed:', selected)
  },
  selectableTypes: [EntityType.PROJECT, EntityType.FOLDER],
}
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=t=>p(o,{...t}),m=r.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),versionSelection:n.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=r.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],versionSelection:n.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const Pe=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,Pe as __namedExportsOrder,Ie as default};
