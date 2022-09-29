import{j as t}from"./CardContainerLogic.3cfe2288.js";import{j as i}from"./jsx-runtime.6c466647.js";import"./index.68dc45f9.js";import"./index.836cff5f.js";import"./iframe.d58db294.js";import"./withStyles.7bec7826.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.6302caff.js";import"./index.57d09176.js";import"./Button.6bac135e.js";import"./Transition.fdaeb9d2.js";import"./index.35ce73ec.js";import"./isArray.8f8da701.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.ccae0824.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.37160ba9.js";import"./use-deep-compare-effect.esm.59a8a695.js";import"./uniq.881ae797.js";import"./_baseSlice.50189bc5.js";import"./toInteger.58fbb23b.js";import"./isSymbol.e84dbf07.js";import"./_cacheHas.5da960e3.js";import"./without.1e3142d0.js";import"./uniqueId.b6a045ed.js";import"./_Set.16f6c7c4.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.cdc6f276.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.d55eaa4b.js";import"./Tooltip.a8448a48.js";import"./createSvgIcon.aebcdc24.js";import"./slicedToArray.e72f11da.js";import"./useTheme.94a4bd67.js";import"./makeStyles.0f5b4992.js";import"./InfoOutlined.b03aa53e.js";import"./ElementWithTooltip.e718efbb.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.789504d1.js";import"./Modal.e870b920.js";import"./useWaitForDOMRef.d7c5dee1.js";import"./useWillUnmount.3d2fd5eb.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.29aa4eae.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.e18544db.js";import"./queryUtils.798bc848.js";import"./useInfiniteQuery.1c313722.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.00031296.js";import"./_baseClone.cc594dc4.js";import"./_getTag.2bbcfb52.js";import"./useEntity.186b0ec3.js";import"./useMutation.b09ed22d.js";import"./pick.6d11dacb.js";import"./Checkbox.d30401c0.js";import"./Collapse.3ec40aa5.js";import"./RadioGroup.3681d686.js";import"./moment.a565bb48.js";import"./RangeSlider.d5ad57ca.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.c42f2560.js";import"./react-sizeme.cba75d0d.js";import"./Skeleton.78629bcd.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.ad9a5942.js";import"./Typography.88b87e8c.js";import"./react-select.esm.6182fa0f.js";import"./Select-54ac8379.esm.6642ddc9.js";import"./CustomSelectWidget.8cf0fafc.js";import"./react-intersection-observer.esm.ed481dc5.js";import"./UserCard.36c5101f.js";import"./IconCopy.489a58ed.js";import"./SkeletonTable.a7c50e8f.js";import"./times.cd1f7524.js";import"./ToastMessage.f1ac94ca.js";import"./FullWidthAlert.6101322c.js";import"./Overlay.cbf5f9b5.js";import"./DateFormatter.dd69913a.js";import"./useGetDownloadListStatistics.5bb3ee43.js";import"./core.esm.529435ff.js";import"./isEmpty.e86902c5.js";import"./_baseIsEqual.bd1f4122.js";import"./index.browser.042c4e1b.js";import"./union.16449719.js";import"./QueryCount.4656ccb2.js";import"./NoData.a418d2e8.js";import"./useGetAccessRequirement.5608db0c.js";import"./ManagedACTAccessRequirementStatus.b88b720b.js";import"./FileUpload.ea555d14.js";import"./UserSearchBox.2aae51b4.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.d1d99b88.js";import"./EntityLink.37d6739c.js";import"./NoSearchResults.38aa00d2.js";import"./SynapseVideo.3b575d65.js";import"./IconList.ba0edab6.js";import"./UserCardList.3c8411ce.js";const it={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import StandaloneQueryWrapper from './StandaloneQueryWrapper'

export default {
  title: 'Explore/StandaloneQueryWrapper',
  component: StandaloneQueryWrapper,
} as ComponentMeta<typeof StandaloneQueryWrapper>

const Template: ComponentStory<typeof StandaloneQueryWrapper> = args => (
  <StandaloneQueryWrapper {...args} />
)

export const WithoutTopLevelControls = Template.bind({})
WithoutTopLevelControls.args = {
  title: 'Data Files',
  sql: \`SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10\`,
  columnLinks: [
    {
      matchColumnName: 'studyOrProject',
      isMarkdown: true,
    },
  ],
}

export const WithColumnAlias = Template.bind({})
WithColumnAlias.args = {
  title: 'With column alias',
  sql: \`SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')\`,
}

export const TopLevelControls = Template.bind({})
TopLevelControls.args = {
  title: 'Data Files',
  name: 'Top Level Controls demo',
  hideDownload: false,
  sql: \`SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10\`,
  showTopLevelControls: true,
}
`,locationsMap:{"without-top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"with-column-alias":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}}}}},title:"Explore/StandaloneQueryWrapper",component:t},o=r=>i(t,{...r}),e=o.bind({});e.args={title:"Data Files",sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",columnLinks:[{matchColumnName:"studyOrProject",isMarkdown:!0}]};const p=o.bind({});p.args={title:"With column alias",sql:"SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')"};const n=o.bind({});n.args={title:"Data Files",name:"Top Level Controls demo",hideDownload:!1,sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",showTopLevelControls:!0};const et=["WithoutTopLevelControls","WithColumnAlias","TopLevelControls"];export{n as TopLevelControls,p as WithColumnAlias,e as WithoutTopLevelControls,et as __namedExportsOrder,it as default};
