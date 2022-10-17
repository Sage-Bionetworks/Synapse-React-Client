import{n as t}from"./CardContainerLogic.35c262a6.js";import{j as i}from"./jsx-runtime.7bb0e56b.js";import"./index.cdf5fd1c.js";import"./index.a95f094b.js";import"./iframe.dbb57267.js";import"./Button.f83d0e63.js";import"./index.57d09176.js";import"./withStyles.cfb33818.js";import"./utils.82646225.js";import"./Alert.fd35fd52.js";import"./index.35ce73ec.js";import"./isArray.40a0d4da.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.fff48821.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.792f5652.js";import"./use-deep-compare-effect.esm.ccd46efa.js";import"./uniq.42abbfdd.js";import"./_baseSlice.50189bc5.js";import"./toInteger.02e5834f.js";import"./isSymbol.f94b6455.js";import"./_cacheHas.7c8e3b94.js";import"./without.5aa1f5f1.js";import"./uniqueId.a068bfca.js";import"./_Set.14c46f32.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.0ed0dcfa.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.7d7fb131.js";import"./Tooltip.463ecf05.js";import"./createSvgIcon.da2780da.js";import"./makeStyles.d82b1154.js";import"./InfoOutlined.4f1ffce6.js";import"./ElementWithTooltip.804349b2.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.23aa0b02.js";import"./Modal.b3b57ab6.js";import"./useWaitForDOMRef.17f7f910.js";import"./inheritsLoose.dc20be7f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.29212990.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.6bbd7485.js";import"./queryUtils.258979f2.js";import"./useInfiniteQuery.4c8a7be7.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.df4910af.js";import"./_baseClone.b368d9fa.js";import"./_getTag.1dcf98bf.js";import"./useEntity.9c03fb58.js";import"./useMutation.24acaae2.js";import"./pick.a8c91c13.js";import"./Checkbox.d019cf3b.js";import"./RadioGroup.efe9d41f.js";import"./moment.a565bb48.js";import"./RangeSlider.e3d7663c.js";import"./factory.41789df2.js";import"./react-sizeme.7ee6168c.js";import"./Skeleton.7484c3ca.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.80885ec5.js";import"./Typography.3da982eb.js";import"./Close.d3034466.js";import"./react-select.esm.09131c60.js";import"./Select-54ac8379.esm.fcbe3f9f.js";import"./CustomSelectWidget.18249f31.js";import"./index.browser.698bf3ba.js";import"./WarningModal.af14c968.js";import"./react-intersection-observer.esm.7bb47138.js";import"./UserCard.6fcd03bc.js";import"./IconCopy.00d0f817.js";import"./SkeletonTable.00c036ab.js";import"./times.ad0f164d.js";import"./ToastMessage.96fdad3b.js";import"./FullWidthAlert.e8b3b992.js";import"./Overlay.2de3bd36.js";import"./DateFormatter.9b702197.js";import"./core.esm.87a1590b.js";import"./isEmpty.fe66aff7.js";import"./isEqual.d768298b.js";import"./union.085ea07c.js";import"./isString.b3c72884.js";import"./useGetDownloadListStatistics.af113a93.js";import"./QueryCount.cf7f89f4.js";import"./NoData.3ee3f29a.js";import"./useGetAccessRequirement.48aac28d.js";import"./ManagedACTAccessRequirementStatus.c5f296bf.js";import"./FileUpload.500d2622.js";import"./UserSearchBox.3301445d.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.be424e81.js";import"./EntityLink.cdbea10b.js";import"./NoSearchResults.a02dd1c4.js";import"./SynapseVideo.9ee731d6.js";import"./IconList.266466e0.js";import"./UserCardList.9aa3196c.js";const $o={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"without-top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"with-column-alias":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}}}}},title:"Explore/StandaloneQueryWrapper",component:t},o=r=>i(t,{...r}),e=o.bind({});e.args={title:"Data Files",sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",columnLinks:[{matchColumnName:"studyOrProject",isMarkdown:!0}]};const n=o.bind({});n.args={title:"With column alias",sql:"SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')"};const p=o.bind({});p.args={title:"Data Files",name:"Top Level Controls demo",hideDownload:!1,sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",showTopLevelControls:!0};const ot=["WithoutTopLevelControls","WithColumnAlias","TopLevelControls"];export{p as TopLevelControls,n as WithColumnAlias,e as WithoutTopLevelControls,ot as __namedExportsOrder,$o as default};
