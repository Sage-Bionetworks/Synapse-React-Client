import{j as t}from"./CardContainerLogic.7374141a.js";import{j as i}from"./jsx-runtime.8cf0c657.js";import"./index.a6d709ad.js";import"./index.0d47cfe5.js";import"./iframe.6f47dcc9.js";import"./withStyles.f22e9c75.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.70f23d9f.js";import"./index.57d09176.js";import"./Button.89087c87.js";import"./Transition.2fb6e5a0.js";import"./index.35ce73ec.js";import"./isArray.62d496dc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.af962ab3.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.2ec70336.js";import"./use-deep-compare-effect.esm.c7792492.js";import"./uniq.69f59b21.js";import"./_baseSlice.50189bc5.js";import"./toInteger.b1cd1d84.js";import"./isSymbol.57088814.js";import"./_cacheHas.6e0abfc2.js";import"./without.04aa9dda.js";import"./uniqueId.ba83e708.js";import"./_Set.21998671.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.36aacc1e.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.894064e3.js";import"./Tooltip.8bb6ec51.js";import"./createSvgIcon.3db62023.js";import"./slicedToArray.e72f11da.js";import"./useTheme.daa899de.js";import"./makeStyles.14efd907.js";import"./InfoOutlined.7ef1e7fd.js";import"./ElementWithTooltip.6ccf1e07.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.2b40167c.js";import"./Modal.498d8359.js";import"./useWaitForDOMRef.501162ab.js";import"./useWillUnmount.836b1f97.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.1ab8820d.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.802b895d.js";import"./queryUtils.c7efffb7.js";import"./useInfiniteQuery.f5ad163c.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.089eacc4.js";import"./_baseClone.deb1d808.js";import"./_getTag.41478f78.js";import"./useEntity.e12bf5bb.js";import"./useMutation.89904a2c.js";import"./pick.2b5bb2d3.js";import"./Checkbox.5848b978.js";import"./Collapse.38604230.js";import"./RadioGroup.d3441520.js";import"./moment.a565bb48.js";import"./RangeSlider.56073dd1.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.a176279c.js";import"./react-sizeme.32a64388.js";import"./Skeleton.af6ba2d8.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.1309c9be.js";import"./Typography.0dca8b10.js";import"./react-select.esm.15c096c0.js";import"./Select-54ac8379.esm.8c9c6a11.js";import"./CustomSelectWidget.e650c3af.js";import"./core.esm.72bfe204.js";import"./index.aba22f7d.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./isEmpty.407d8302.js";import"./_baseIsEqual.51e1caab.js";import"./index.browser.944a734c.js";import"./union.cdf543e7.js";import"./react-intersection-observer.esm.e345675c.js";import"./UserCard.06fc45b4.js";import"./IconCopy.27efae90.js";import"./SkeletonTable.42e3c3ac.js";import"./times.8daad405.js";import"./ToastMessage.d368c817.js";import"./FullWidthAlert.c513e3cd.js";import"./Overlay.58c30ef0.js";import"./DateFormatter.8ed06513.js";import"./useGetDownloadListStatistics.40c5a3e1.js";import"./QueryCount.bf9e6c1f.js";import"./NoData.36c72e72.js";import"./useGetAccessRequirement.54b044a4.js";import"./ManagedACTAccessRequirementStatus.71cdf68d.js";import"./FileUpload.8e4081b6.js";import"./UserSearchBox.bea4187c.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.40572215.js";import"./EntityLink.2869f44a.js";import"./NoSearchResults.1bf290a3.js";import"./SynapseVideo.b8cf5f86.js";import"./IconList.6c7ccfe5.js";import"./UserCardList.34b63afd.js";const nt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"without-top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"with-column-alias":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}}}}},title:"Explore/StandaloneQueryWrapper",component:t},o=r=>i(t,{...r}),p=o.bind({});p.args={title:"Data Files",sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",columnLinks:[{matchColumnName:"studyOrProject",isMarkdown:!0}]};const e=o.bind({});e.args={title:"With column alias",sql:"SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')"};const n=o.bind({});n.args={title:"Data Files",name:"Top Level Controls demo",hideDownload:!1,sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",showTopLevelControls:!0};const mt=["WithoutTopLevelControls","WithColumnAlias","TopLevelControls"];export{n as TopLevelControls,e as WithColumnAlias,p as WithoutTopLevelControls,mt as __namedExportsOrder,nt as default};
