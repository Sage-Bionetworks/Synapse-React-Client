import{E as e,F as i,V as r}from"./EntityFinder.c64d4b02.js";import{E as o}from"./index.20c1822f.js";import{j as p}from"./jsx-runtime.23bcdc09.js";import"./CardContainerLogic.9810a91e.js";import"./sqlFunctions.f9b9cbac.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.bb36e699.js";import"./useGetInfoFromIds.2e06391d.js";import"./use-deep-compare-effect.esm.c436bf33.js";import"./uniq.3868c1f1.js";import"./_baseSlice.50189bc5.js";import"./toInteger.dfc8aa00.js";import"./isSymbol.017a619a.js";import"./isArray.1d31a80d.js";import"./Button.9cfa11f8.js";import"./index.35ce73ec.js";import"./_cacheHas.990f1aa2.js";import"./without.cde801d5.js";import"./uniqueId.5a455c2a.js";import"./_Set.ca1709e5.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.290eab74.js";import"./ColumnType.744125d2.js";import"./getEndpoint.bb7ded34.js";import"./FacetNav.828b0ea4.js";import"./queryUtils.19a52aee.js";import"./useInfiniteQuery.6d6d1422.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.a4dd16c1.js";import"./_baseClone.5f0a5f2c.js";import"./_getTag.6f0edf19.js";import"./NoSearchResults.939072af.js";import"./NoData.da21ba5e.js";import"./unCamelCase.07e38083.js";import"./useEntity.9c9803bf.js";import"./useMutation.a00e5fbd.js";import"./pick.7185c6d7.js";import"./isEqual.325afd29.js";import"./ElementWithTooltip.5a678880.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.1982fde5.js";import"./TransitionGroupContext.b9a824ce.js";import"./styled.8da6873c.js";import"./Tooltip.cfbb546f.js";import"./createSvgIcon.e3e4a251.js";import"./useTheme.26e47b20.js";import"./index.a2bbbebe.js";import"./iframe.c49fa417.js";import"./utils.2eab32fe.js";import"./InfoOutlined.61048ddd.js";import"./Dropdown.824bdf6d.js";import"./usePrevious.f1fd94eb.js";import"./createWithBsPrefix.26026502.js";import"./hook.81302421.js";import"./contains.e26e64f1.js";import"./usePopperMarginModifiers.2032f396.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.4c21f830.js";import"./RadioGroup.b1b3d150.js";import"./dayjs.min.175e5ee6.js";import"./RangeSlider.80a9f111.js";import"./factory.945e3686.js";import"./react-sizeme.50cdb1a3.js";import"./Skeleton.93cf864e.js";import"./emotion-react.browser.esm.599684c1.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.0123b906.js";import"./Modal.fcfac98b.js";import"./inheritsLoose.efe8b24a.js";import"./divWithClassName.fcb14682.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.1d1fe719.js";import"./Typography.17940352.js";import"./SelectionCriteriaPill.d4d12bc2.js";import"./Close.0f2d06e3.js";import"./react-select.esm.cd1a70c9.js";import"./Select-54ac8379.esm.6a208b47.js";import"./CustomSelectWidget.f29cd2d8.js";import"./index.browser.e71d7dd0.js";import"./UserCard.b277597c.js";import"./IconCopy.3d0604ac.js";import"./SkeletonTable.7a076046.js";import"./times.e12d7030.js";import"./ToastMessage.52d73997.js";import"./FullWidthAlert.465c2909.js";import"./Alert.03ebe4a7.js";import"./Overlay.177b926b.js";import"./WarningModal.8ba465c6.js";import"./react-intersection-observer.esm.8699b4f1.js";import"./DateFormatter.6d192042.js";import"./utc.9b4935b5.js";import"./EntityIcon.cd2765eb.js";import"./core.esm.6dd03b50.js";import"./isEmpty.9a508fc8.js";import"./union.1195c535.js";import"./isString.3a866e5e.js";import"./Button.d27fd09d.js";import"./ButtonBase.94c8520a.js";import"./relativeTime.efd786e6.js";import"./useGetDownloadListStatistics.e5a0a533.js";import"./QueryCount.d35559d0.js";import"./useGetAccessRequirement.cee49857.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.af585b5c.js";import"./UserSearchBox.c1fe0c21.js";import"./UserOrTeamBadge.7709bc8d.js";import"./EntityLink.2e71dd10.js";import"./SynapseVideo.81bbfb30.js";import"./IconList.c4ebe30a.js";import"./UserCardList.4bff2bca.js";import"./Arrow.f12a42eb.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.fa07e0d9.js";import"./CalendarWithIconFormGroup.81593d83.js";import"./localizedFormat.51d1df72.js";import"./IconButton.7eaa6d5c.js";import"./List.5628ecd7.js";import"./Modal.9205944a.js";import"./Fade.5c08504a.js";import"./index.f2a06ad4.js";import"./MenuList.9e6fb1fd.js";import"./groupBy.a98193f5.js";import"./EntityModal.f70b5daf.js";import"./Sort.fbbaabc0.js";import"./useFavorites.536d7b96.js";import"./Link.e49ccf51.js";const Ao={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:e,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},n=t=>p(e,{...t}),m=n.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(o),versionSelection:r.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(o),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=n.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[o.PROJECT,o.FOLDER,o.TABLE],versionSelection:r.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[o.PROJECT,o.FOLDER]};const ho=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,ho as __namedExportsOrder,Ao as default};
