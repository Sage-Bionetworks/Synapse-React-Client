import{E as e,F as i,V as r}from"./EntityFinder.46d5f152.js";import{E as o}from"./index.96fee529.js";import{j as p}from"./jsx-runtime.0721b30f.js";import"./CardContainerLogic.405dc753.js";import"./sqlFunctions.b0106d41.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.c86a5cbb.js";import"./useGetInfoFromIds.58b9ed31.js";import"./use-deep-compare-effect.esm.401fba4c.js";import"./uniq.ab7ea7a6.js";import"./_baseSlice.50189bc5.js";import"./toInteger.0c46f3eb.js";import"./isSymbol.2a2fd570.js";import"./isArray.0e868c61.js";import"./Button.c6170972.js";import"./index.35ce73ec.js";import"./_cacheHas.f0b8833d.js";import"./without.b89900d5.js";import"./uniqueId.22a08d1e.js";import"./_Set.530d31c3.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.290eab74.js";import"./ColumnType.744125d2.js";import"./getEndpoint.bb7ded34.js";import"./FacetNav.ef313e7e.js";import"./queryUtils.bc241af6.js";import"./useInfiniteQuery.160050ed.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.d4824e0e.js";import"./_baseClone.d846e333.js";import"./_getTag.374494a2.js";import"./NoSearchResults.37564460.js";import"./NoData.48f5a675.js";import"./unCamelCase.07e38083.js";import"./useEntity.77265cb8.js";import"./useMutation.5bff6e5b.js";import"./pick.7c26c579.js";import"./isEqual.587a056a.js";import"./ElementWithTooltip.0beed2ed.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.69d2b3a3.js";import"./TransitionGroupContext.536780f6.js";import"./styled.b8cd841c.js";import"./Tooltip.95391ddc.js";import"./createSvgIcon.8972a51f.js";import"./useTheme.210faaa5.js";import"./index.84874f77.js";import"./iframe.d07454b7.js";import"./utils.61962e2e.js";import"./InfoOutlined.1d86a385.js";import"./Dropdown.cda3e88c.js";import"./usePrevious.7579f6d6.js";import"./createWithBsPrefix.60042f33.js";import"./hook.0b64fed2.js";import"./contains.4df2422e.js";import"./usePopperMarginModifiers.eef01d88.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.ad5f9514.js";import"./RadioGroup.9418e1f9.js";import"./dayjs.min.d1781a3e.js";import"./RangeSlider.84b56ff1.js";import"./factory.c5c0659e.js";import"./react-sizeme.31f58fbd.js";import"./Skeleton.bcaf6f06.js";import"./emotion-react.browser.esm.4fe99834.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.596009c1.js";import"./Modal.ffe20d01.js";import"./inheritsLoose.53a219d1.js";import"./divWithClassName.ae2eac7f.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.65459bf1.js";import"./Typography.f634a419.js";import"./SelectionCriteriaPill.e84841d0.js";import"./Close.b5d307a6.js";import"./react-select.esm.16cf96dd.js";import"./Select-54ac8379.esm.6a29fbfd.js";import"./CustomSelectWidget.b6d556eb.js";import"./index.browser.72232f2a.js";import"./UserCard.9a1acc17.js";import"./IconCopy.343b69cc.js";import"./SkeletonTable.12d4458e.js";import"./times.938b95b0.js";import"./ToastMessage.c03bf450.js";import"./FullWidthAlert.f41552e4.js";import"./Alert.e026ca2c.js";import"./Overlay.d556696c.js";import"./WarningModal.1a2883db.js";import"./react-intersection-observer.esm.3ef9875c.js";import"./DateFormatter.f6dc5f9a.js";import"./utc.ffadba9e.js";import"./EntityIcon.1e92edc0.js";import"./core.esm.4ab3feef.js";import"./isEmpty.f6cb9f52.js";import"./union.067c0c88.js";import"./isString.cb81128d.js";import"./Button.9899c0f8.js";import"./ButtonBase.c60e40b2.js";import"./relativeTime.5f274717.js";import"./useGetDownloadListStatistics.8c5e991c.js";import"./QueryCount.de45b2ad.js";import"./useGetAccessRequirement.306475cd.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.4ab691de.js";import"./UserSearchBox.f1e02549.js";import"./UserOrTeamBadge.d5bf5d62.js";import"./EntityLink.40497b38.js";import"./SynapseVideo.878bc81a.js";import"./IconList.e1c0dfc0.js";import"./UserCardList.1e3a2a6f.js";import"./Arrow.4427975e.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.23b8aea4.js";import"./CalendarWithIconFormGroup.c19aef55.js";import"./localizedFormat.63cb4675.js";import"./List.c60fc6eb.js";import"./Modal.2277ad45.js";import"./Fade.54a45bb0.js";import"./index.f2a06ad4.js";import"./MenuList.4caebc00.js";import"./groupBy.5c2147d0.js";import"./EntityModal.7a959dac.js";import"./Sort.41fe01fb.js";import"./useFavorites.a3d73d53.js";import"./Link.38c396f1.js";const jo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:e,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},n=t=>p(e,{...t}),m=n.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(o),versionSelection:r.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(o),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=n.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[o.PROJECT,o.FOLDER,o.TABLE],versionSelection:r.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[o.PROJECT,o.FOLDER]};const Ao=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,Ao as __namedExportsOrder,jo as default};
