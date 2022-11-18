import{E as o,F as i,V as n}from"./EntityFinder.7741b507.js";import{E as e}from"./index.84caca20.js";import{j as p}from"./jsx-runtime.e45f5946.js";import"./CardContainerLogic.8a51ae9f.js";import"./sqlFunctions.cedc0d99.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.68a47eb2.js";import"./useGetInfoFromIds.b7e31f92.js";import"./use-deep-compare-effect.esm.6947367c.js";import"./uniq.1d7ae387.js";import"./_baseSlice.50189bc5.js";import"./toInteger.836ec642.js";import"./isSymbol.564875b4.js";import"./isArray.8bc8137e.js";import"./Button.85a360c3.js";import"./index.35ce73ec.js";import"./_cacheHas.a4903518.js";import"./without.046078f0.js";import"./uniqueId.c6c12783.js";import"./_Set.5d4d075d.js";import"./_setToArray.a82100c8.js";import"./SynapseConstants.290eab74.js";import"./ColumnType.744125d2.js";import"./getEndpoint.bb7ded34.js";import"./FacetNav.b1ef8918.js";import"./queryUtils.5b9bb8c0.js";import"./useInfiniteQuery.8572f9ef.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.53475be9.js";import"./_baseClone.7677870c.js";import"./_getTag.adac27b6.js";import"./NoSearchResults.7acf193a.js";import"./NoData.a9d8f4b7.js";import"./unCamelCase.07e38083.js";import"./useEntity.87d22d65.js";import"./useMutation.33a42727.js";import"./pick.44941d26.js";import"./isEqual.989f48ab.js";import"./ElementWithTooltip.ca2e949f.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.fd56a75b.js";import"./TransitionGroupContext.0404639f.js";import"./styled.11fa6590.js";import"./Tooltip.2f932cf4.js";import"./createSvgIcon.25fceae1.js";import"./useTheme.c90b1c5e.js";import"./index.2f057391.js";import"./iframe.db0e90de.js";import"./utils.e1966123.js";import"./InfoOutlined.c1b233d2.js";import"./Dropdown.6d186adc.js";import"./usePrevious.820aff42.js";import"./createWithBsPrefix.a2136416.js";import"./hook.5e6c5d16.js";import"./contains.82fe9acc.js";import"./usePopperMarginModifiers.40113aa3.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7c7046f9.js";import"./RadioGroup.83968d9b.js";import"./moment.a565bb48.js";import"./RangeSlider.973fdfc9.js";import"./factory.371506bb.js";import"./react-sizeme.e3a57323.js";import"./Skeleton.d7dd8f63.js";import"./emotion-react.browser.esm.1d99b462.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.2ae08f91.js";import"./Modal.3cf810c4.js";import"./inheritsLoose.01564ab7.js";import"./divWithClassName.ba47b910.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.fd0babf1.js";import"./Typography.33698c6c.js";import"./SelectionCriteriaPill.5950976b.js";import"./Close.bd4ed5e0.js";import"./react-select.esm.f2c082aa.js";import"./Select-54ac8379.esm.1506e5bc.js";import"./CustomSelectWidget.afd0ca63.js";import"./index.browser.e3fed4e8.js";import"./UserCard.8473dff8.js";import"./IconCopy.9bac9114.js";import"./SkeletonTable.3b39696e.js";import"./times.dc5c8712.js";import"./ToastMessage.dffa6777.js";import"./FullWidthAlert.1145dd98.js";import"./Alert.93c2217c.js";import"./Overlay.2b8a7b39.js";import"./WarningModal.b9cdddf8.js";import"./react-intersection-observer.esm.69fbb5ff.js";import"./DateFormatter.a9cbfa7c.js";import"./EntityIcon.6b3ffc55.js";import"./core.esm.d3bdc97d.js";import"./isEmpty.c7d7f52e.js";import"./union.7d62ae42.js";import"./isString.b5efd261.js";import"./Button.67173b22.js";import"./ButtonBase.95f62226.js";import"./useGetDownloadListStatistics.69268546.js";import"./QueryCount.a23c9445.js";import"./useGetAccessRequirement.0efba7a1.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.3dfa701d.js";import"./UserSearchBox.84eaecbc.js";import"./UserOrTeamBadge.0dc6e448.js";import"./EntityLink.3232d5b6.js";import"./SynapseVideo.b76f842e.js";import"./IconList.7e9376dc.js";import"./UserCardList.45c04af5.js";import"./Arrow.afcad3c4.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.33a70dc2.js";import"./CalendarWithIconFormGroup.c63424bf.js";import"./groupBy.e42f1232.js";import"./EntityModal.a6c2e66e.js";import"./Sort.d336acaa.js";import"./useFavorites.46907fc2.js";import"./Link.7e8c9dbf.js";const De={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=t=>p(o,{...t}),m=r.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),versionSelection:n.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=r.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],versionSelection:n.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const Oe=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,Oe as __namedExportsOrder,De as default};
