import{E as o,F as i,V as n}from"./EntityFinder.8e5f17b2.js";import{x as e}from"./index.8d274cce.js";import{j as p}from"./jsx-runtime.08584073.js";import"./CardContainerLogic.160cd6dc.js";import"./sqlFunctions.356c1293.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.e3984af8.js";import"./useGetInfoFromIds.0b77420b.js";import"./use-deep-compare-effect.esm.fad3e301.js";import"./uniq.832d3855.js";import"./_baseSlice.50189bc5.js";import"./toInteger.ebd6ba2e.js";import"./isSymbol.bad84e3a.js";import"./isArray.e00a52bc.js";import"./Button.19eb0a0d.js";import"./index.35ce73ec.js";import"./_cacheHas.8d045655.js";import"./without.d57c7f92.js";import"./uniqueId.2262e339.js";import"./_Set.2974cbe7.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.b6aa8bf5.js";import"./ColumnType.744125d2.js";import"./getEndpoint.bb7ded34.js";import"./FacetNav.f0b491fb.js";import"./queryUtils.ef308bba.js";import"./useInfiniteQuery.e2feb110.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.5688d850.js";import"./_baseClone.54734e5a.js";import"./_getTag.64bd74dc.js";import"./NoSearchResults.f15840a6.js";import"./NoData.5d93d435.js";import"./unCamelCase.07e38083.js";import"./useEntity.ac75c1c8.js";import"./useMutation.fa3cdf0e.js";import"./pick.4ca0ebc5.js";import"./isEqual.aa92ca80.js";import"./ElementWithTooltip.3eef2d7f.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.47050332.js";import"./SvgIcon.52412c7b.js";import"./styled.49e31bee.js";import"./Tooltip.f9340fc3.js";import"./createSvgIcon.5c64ba32.js";import"./utils.564f56d5.js";import"./index.10a6a474.js";import"./iframe.46cf6f9c.js";import"./InfoOutlined.aab3ebaf.js";import"./Dropdown.8b1a32a3.js";import"./usePrevious.eb4668df.js";import"./createWithBsPrefix.84280c3f.js";import"./contains.dc8b0910.js";import"./usePopperMarginModifiers.e5eb18a0.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.0589ad6c.js";import"./RadioGroup.884be978.js";import"./moment.a565bb48.js";import"./RangeSlider.3d031b55.js";import"./factory.89a755c8.js";import"./react-sizeme.8d569517.js";import"./Skeleton.caf11574.js";import"./emotion-react.browser.esm.17352205.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.39f2fb11.js";import"./Modal.6973cbd4.js";import"./inheritsLoose.e43b22d1.js";import"./Alert.50172ad9.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.5ed53cb9.js";import"./Typography.afe1a60b.js";import"./SelectionCriteriaPill.8f9f19a7.js";import"./Close.e48a33b3.js";import"./react-select.esm.fadcd49f.js";import"./Select-54ac8379.esm.305999be.js";import"./CustomSelectWidget.17052bbc.js";import"./index.browser.fb0b4558.js";import"./UserCard.94c6876c.js";import"./IconCopy.28a6d75f.js";import"./SkeletonTable.c5426c0e.js";import"./times.6ff56ad1.js";import"./ToastMessage.b76b29fc.js";import"./FullWidthAlert.c938c0bd.js";import"./Overlay.c4937a08.js";import"./WarningModal.437479d1.js";import"./react-intersection-observer.esm.dee0153b.js";import"./DateFormatter.ea5a9994.js";import"./EntityIcon.4f13962d.js";import"./core.esm.2c37a07f.js";import"./isEmpty.cc673e81.js";import"./union.e9db0191.js";import"./isString.1b0717a4.js";import"./useGetDownloadListStatistics.41fd99c5.js";import"./QueryCount.c7aad442.js";import"./useGetAccessRequirement.7772742c.js";import"./ManagedACTAccessRequirementStatus.8dc4cd07.js";import"./FileUpload.87b2b521.js";import"./UserSearchBox.93d24c31.js";import"./UserOrTeamBadge.b4d762a1.js";import"./EntityLink.4b34ca07.js";import"./SynapseVideo.70b05cce.js";import"./IconList.da9ad884.js";import"./UserCardList.1c49604c.js";import"./Arrow.5e5ed8f4.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.0b319b0f.js";import"./CalendarWithIconFormGroup.f020d8ad.js";import"./groupBy.9ffd4141.js";import"./EntityModal.9b3d8d25.js";import"./Sort.040893aa.js";import"./useFavorites.d2ef7d2d.js";const Te={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=t=>p(o,{...t}),m=r.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),versionSelection:n.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=r.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],versionSelection:n.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const Se=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,Se as __namedExportsOrder,Te as default};
