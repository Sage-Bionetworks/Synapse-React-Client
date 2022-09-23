import{E as o,F as i,V as n}from"./EntityFinder.3177ec56.js";import{E as e}from"./EntityIcon.1041d99c.js";import"./assert.aebbcba1.js";import{j as p}from"./jsx-runtime.00d70968.js";import"./pluralize.3c137810.js";import"./iframe.7d5526d4.js";import"./index.04a7d297.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Button.fda23eee.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./toString.d84aaeca.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e37b9412.js";import"./react-sizeme.ed7c4cae.js";import"./Arrow.c4d06967.js";import"./sqlFunctions.02978512.js";import"./IconSvg.debd858a.js";import"./Tooltip.6d92cd5b.js";import"./createSvgIcon.99e72c0f.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./makeStyles.45e8b79c.js";import"./InfoOutlined.60e019a4.js";import"./use-deep-compare-effect.esm.0387ba0e.js";import"./CardContainerLogic.4436d976.js";import"./useGetInfoFromIds.ca8c12e9.js";import"./uniq.36c38197.js";import"./toInteger.845bc025.js";import"./_cacheHas.115ef553.js";import"./without.4e82a94d.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.2f18e082.js";import"./SynapseTableConstants.07ecdebd.js";import"./index.8ed07549.js";import"./Dropdown.b0dc465f.js";import"./Modal.1fb607f9.js";import"./useWaitForDOMRef.97759fd7.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.44e3343c.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.47e64b08.js";import"./queryUtils.2cdb6b2a.js";import"./cloneDeep.a3e05adb.js";import"./Checkbox.c68b07e0.js";import"./uniqueId.eba72690.js";import"./Collapse.1f37bc76.js";import"./RadioGroup.d19dd04f.js";import"./moment.a565bb48.js";import"./RangeSlider.df5d4da8.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.06c0b668.js";import"./Skeleton.99b24529.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.91642215.js";import"./Typography.868473dc.js";import"./TypeUtils.a2c41307.js";import"./Select-54ac8379.esm.edd779c2.js";import"./CustomSelectWidget.b1e9ceda.js";import"./core.esm.01d4bcd9.js";import"./index.c78c91a6.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./isEmpty.80df398e.js";import"./_baseIsEqual.9b24969b.js";import"./index.browser.48a5a324.js";import"./union.c792c877.js";import"./react-intersection-observer.esm.e445ee86.js";import"./UserCard.b5096981.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.a7c8fa00.js";import"./times.bde95261.js";import"./ToastMessage.de6992d0.js";import"./FullWidthAlert.6afa82c9.js";import"./Overlay.7bb560f6.js";import"./DateFormatter.49202ee6.js";import"./useGetDownloadListStatistics.8c1e3720.js";import"./QueryCount.f585769b.js";import"./NoData.22383cce.js";import"./useGetAccessRequirement.0c7037b1.js";import"./ManagedACTAccessRequirementStatus.13dcc250.js";import"./FileUpload.35d1c323.js";import"./UserSearchBox.19077943.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.22dca890.js";import"./EntityLink.e6016df4.js";import"./NoSearchResults.a01d676d.js";import"./SynapseVideo.ad95bb7e.js";import"./IconList.43e19c16.js";import"./UserCardList.c0b2e3b0.js";import"./EntityChildren.50133102.js";import"./SchemaDrivenAnnotationEditor.57e76fd0.js";import"./union.2a2ccb2f.js";import"./lodash.79b6a9df.js";import"./CalendarWithIconFormGroup.c8e8257d.js";import"./groupBy.6b857207.js";import"./EntityModal.90d56ec9.js";import"./WarningModal.e66d24b4.js";import"./Sort.eb3f3160.js";import"./useFavorites.7d78a5ae.js";const ce={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"dual-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}},"single-pane":{startLoc:{col:54,line:25},endLoc:{col:1,line:27},startBody:{col:54,line:25},endBody:{col:1,line:27}}}}},title:"Synapse/EntityFinder",component:o,argTypes:{versionSelection:{options:["REQUIRED","DISABLED","TRACKED","UNTRACKED"],control:{type:"select"}}}},r=t=>p(o,{...t}),m=r.bind({});m.args={treeOnly:!1,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!0,visibleTypesInList:Object.values(e),versionSelection:n.TRACKED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:Object.values(e),selectedCopy:t=>`${t} Item${t>1?"s":""} Selected`};const s=r.bind({});s.args={treeOnly:!0,initialScope:i.CURRENT_PROJECT,projectId:"syn23567475",initialContainer:"syn24183903",selectMultiple:!1,visibleTypesInTree:[e.PROJECT,e.FOLDER,e.TABLE],versionSelection:n.DISALLOWED,onSelectedChange:t=>{console.log("Selection changed:",t)},selectableTypes:[e.PROJECT,e.FOLDER]};const ae=["DualPane","SinglePane"];export{m as DualPane,s as SinglePane,ae as __namedExportsOrder,ce as default};
