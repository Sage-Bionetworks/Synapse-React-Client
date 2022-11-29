import{E as e,F as i,V as r}from"./EntityFinder.405093a4.js";import{E as o}from"./index.22d2125e.js";import{j as p}from"./jsx-runtime.31268528.js";import"./CardContainerLogic.a44526c0.js";import"./sqlFunctions.d0deafe9.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.90a1a7eb.js";import"./useGetInfoFromIds.5e8bec87.js";import"./use-deep-compare-effect.esm.b33b0620.js";import"./uniq.f8b89bad.js";import"./_baseSlice.50189bc5.js";import"./toInteger.93a4e178.js";import"./isSymbol.32cdb41a.js";import"./isArray.e45ce668.js";import"./Button.3eb9449f.js";import"./index.35ce73ec.js";import"./_cacheHas.93c5766b.js";import"./without.6ba87f76.js";import"./uniqueId.23cb78c9.js";import"./_Set.87305464.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.290eab74.js";import"./ColumnType.744125d2.js";import"./getEndpoint.bb7ded34.js";import"./FacetNav.5627db8b.js";import"./queryUtils.3c459226.js";import"./useInfiniteQuery.c6eed216.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.edfd3e7e.js";import"./_baseClone.dc0316e6.js";import"./_getTag.005e7532.js";import"./NoSearchResults.9e332b6e.js";import"./NoData.aa30cbc5.js";import"./unCamelCase.07e38083.js";import"./useEntity.e61a2fe2.js";import"./useMutation.9a2bc2f1.js";import"./pick.a80537e5.js";import"./isEqual.81f70372.js";import"./ElementWithTooltip.c6b5d0bb.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.1a319e23.js";import"./TransitionGroupContext.43d26755.js";import"./styled.0bfd4c69.js";import"./Tooltip.5176c19c.js";import"./createSvgIcon.f7c19e7b.js";import"./useTheme.910eaec3.js";import"./index.d5f32449.js";import"./iframe.c7567c2d.js";import"./utils.033d23ab.js";import"./InfoOutlined.1c97ae19.js";import"./Dropdown.8938a9f4.js";import"./usePrevious.638ecd05.js";import"./createWithBsPrefix.4103f011.js";import"./hook.78e5dc31.js";import"./contains.861fc71b.js";import"./usePopperMarginModifiers.7853b5dc.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b2ac944e.js";import"./RadioGroup.b4a59787.js";import"./dayjs.min.fa03b112.js";import"./RangeSlider.cbd19d00.js";import"./factory.f5aa0ef3.js";import"./react-sizeme.631dea86.js";import"./Skeleton.855acef4.js";import"./emotion-react.browser.esm.d60ec8ed.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.f5aeb847.js";import"./Modal.befa9583.js";import"./inheritsLoose.58664c58.js";import"./divWithClassName.a05c647c.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.f228876d.js";import"./Typography.7deb443e.js";import"./SelectionCriteriaPill.5c36fa2b.js";import"./Close.a4816efa.js";import"./react-select.esm.61342118.js";import"./Select-54ac8379.esm.73afc0b0.js";import"./CustomSelectWidget.695d030e.js";import"./index.browser.62786e23.js";import"./UserCard.0f3fab61.js";import"./IconCopy.47bd251d.js";import"./SkeletonTable.8b5a914e.js";import"./times.97f8800e.js";import"./ToastMessage.a10582c4.js";import"./FullWidthAlert.0f9fa90d.js";import"./Alert.d1d035f0.js";import"./Overlay.4f4ca7b6.js";import"./WarningModal.0aedfe85.js";import"./react-intersection-observer.esm.12900737.js";import"./DateFormatter.5cb85eed.js";import"./utc.8b3d5b7c.js";import"./EntityIcon.69a6cf7b.js";import"./core.esm.7a354c66.js";import"./isEmpty.7ec601bf.js";import"./union.8e76d114.js";import"./isString.53ba3e66.js";import"./Button.5756842c.js";import"./ButtonBase.34890086.js";import"./relativeTime.d35cf3f2.js";import"./useGetDownloadListStatistics.3d14c4e1.js";import"./QueryCount.2f8a0495.js";import"./useGetAccessRequirement.b2c1473c.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.399fb39e.js";import"./UserSearchBox.0e6910a6.js";import"./UserOrTeamBadge.86c3eff2.js";import"./EntityLink.fd06899a.js";import"./SynapseVideo.7d3137d8.js";import"./IconList.bef16bba.js";import"./UserCardList.3cb51c31.js";import"./Arrow.ad0fc4a0.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.68fa8360.js";import"./CalendarWithIconFormGroup.4bcd27a4.js";import"./localizedFormat.964c81ce.js";import"./IconButton.916ffe0f.js";import"./List.36978e17.js";import"./Modal.d9b6994f.js";import"./Fade.4ca82ca8.js";import"./index.f2a06ad4.js";import"./MenuList.07fec125.js";import"./groupBy.461d9450.js";import"./EntityModal.e77399bf.js";import"./Sort.d188dacc.js";import"./useFavorites.63c09acf.js";import"./Link.df009298.js";const Ao={parameters:{storySource:{source:`import React from 'react'
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
