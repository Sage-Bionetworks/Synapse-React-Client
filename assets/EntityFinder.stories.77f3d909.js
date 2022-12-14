import{E as e,F as i,V as r}from"./EntityFinder.76923cc9.js";import{E as o}from"./EntityTypeUtils.f136fe8e.js";import{j as p}from"./jsx-runtime.edcee20f.js";import"./HelpPopover.2e6d375a.js";import"./index.e284f29f.js";import"./iframe.8d602a7e.js";import"./usePopperMarginModifiers.3784b24d.js";import"./contains.73b2d2ff.js";import"./createWithBsPrefix.fb2e744c.js";import"./Button.beed9c8a.js";import"./hasClass.56fd144a.js";import"./SynapseConstants.d6ba6a96.js";import"./queryKeys.e0d3085f.js";import"./LoadingScreen.5e2052bf.js";import"./Modal.c09bb9ef.js";import"./inheritsLoose.82034c01.js";import"./divWithClassName.198d5031.js";import"./index.35ce73ec.js";import"./usePrevious.81a072b7.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.b1b60d08.js";import"./Typography.8ba12270.js";import"./styled.57026967.js";import"./useTheme.c864c010.js";import"./emotion-react.browser.esm.23bad0f9.js";import"./UserCard.d9f9873d.js";import"./getEndpoint.f1f195f5.js";import"./IconCopy.a9a46157.js";import"./SkeletonTable.eac87a94.js";import"./times.d987e694.js";import"./toInteger.93344759.js";import"./isSymbol.4e401305.js";import"./isArray.ba2a5774.js";import"./Skeleton.7309b0e8.js";import"./IconSvg.a36fd00f.js";import"./SvgIcon.cf85a686.js";import"./Tooltip.6287427b.js";import"./TransitionGroupContext.9f30f89b.js";import"./ToastMessage.fe900393.js";import"./FullWidthAlert.15c58824.js";import"./Alert.c9c7cf94.js";import"./hook.9626bae0.js";import"./uniqueId.d49ff0ce.js";import"./Overlay.0deab64d.js";import"./WarningModal.1c43b336.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.ac94f3bc.js";import"./useInfiniteQuery.62663485.js";import"./DateFormatter.49abe40b.js";import"./dayjs.min.d5c6140e.js";import"./utc.93fc2fea.js";import"./EntityIcon.085cf7bc.js";import"./core.esm.8f03e8e9.js";import"./pick.2e2f2657.js";import"./_baseClone.105264f0.js";import"./_Set.1d83ae68.js";import"./_baseSlice.50189bc5.js";import"./isEmpty.e275a76d.js";import"./isEqual.95dec00f.js";import"./_cacheHas.1076ebc6.js";import"./_setToArray.a82100c8.js";import"./index.browser.c080bb2a.js";import"./union.bbcda369.js";import"./without.958702a4.js";import"./uniq.ed37cced.js";import"./CustomSelectWidget.848159ca.js";import"./Select-54ac8379.esm.cc32b323.js";import"./isString.6a9df18d.js";import"./factory.f758f58c.js";import"./sqlFunctions.4c211c8a.js";import"./QueryFilter.7da789b0.js";import"./useEntity.04fadd8c.js";import"./useMutation.e868fb3d.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.1e07697e.js";import"./queryUtils.e800abfd.js";import"./cloneDeep.53a7b290.js";import"./use-deep-compare-effect.esm.4b9e5356.js";import"./NoSearchResults.ebb09cc2.js";import"./NoData.66425971.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.03275a84.js";import"./Dropdown.1237b504.js";import"./isRequiredForA11y.20ed4857.js";import"./useGetInfoFromIds.4de2051f.js";import"./Checkbox.81ee8444.js";import"./RadioGroup.2a913923.js";import"./RangeSlider.025e59ec.js";import"./react-sizeme.ca002b8a.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.1eaf8da7.js";import"./Close.47506959.js";import"./relativeTime.dbbb68a5.js";import"./useDownloadList.4811622f.js";import"./QueryCount.c4983d12.js";import"./react-select.esm.bbf16df8.js";import"./IconList.e5c5bad8.js";import"./UserCardList.daeed47e.js";import"./useAccessRequirements.c96b7848.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.8c5e4813.js";import"./UserSearchBox.df4fd1ed.js";import"./UserOrTeamBadge.b11a8065.js";import"./EntityLink.06d57c43.js";import"./ButtonBase.8a19de44.js";import"./SynapseVideo.dcdf2f72.js";import"./Button.237100ef.js";import"./Arrow.faa40b14.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.a369f99b.js";import"./CalendarWithIconFormGroup.cc07ccbb.js";import"./localizedFormat.dbaf13e7.js";import"./IconButton.f86e6b85.js";import"./Paper.23f56be2.js";import"./DialogContent.517d027e.js";import"./Modal.716eb234.js";import"./Fade.e73bdacf.js";import"./FormLabel.57050d86.js";import"./isMuiElement.c03c0a27.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.ef94e275.js";import"./List.c12a10d0.js";import"./groupBy.8dce4598.js";import"./EntityModal.3635e842.js";import"./Sort.fd4a021a.js";import"./useFavorites.4256c8ca.js";import"./Link.c844031a.js";const Mo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:e,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},n=t=>p(e,{...t}),m=n.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(o),versionSelection:r.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(o),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=n.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[o.PROJECT,o.FOLDER,o.TABLE],versionSelection:r.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[o.PROJECT,o.FOLDER]};const xo=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,xo as __namedExportsOrder,Mo as default};
