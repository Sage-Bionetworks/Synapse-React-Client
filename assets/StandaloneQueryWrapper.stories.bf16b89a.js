import{m as t}from"./CardContainerLogic.f69dae4e.js";import{j as i}from"./jsx-runtime.1225fe79.js";import"./index.5ba93209.js";import"./index.ecba92b3.js";import"./iframe.0fc0719c.js";import"./withStyles.65e61172.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.ffb572e5.js";import"./index.57d09176.js";import"./Button.63b1a959.js";import"./Transition.e362bf9f.js";import"./index.35ce73ec.js";import"./isArray.12f7965d.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e9f5a006.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.a0a2160f.js";import"./use-deep-compare-effect.esm.4142315a.js";import"./uniq.074f12a5.js";import"./_baseSlice.50189bc5.js";import"./toInteger.b9b2999c.js";import"./isSymbol.aedbfa18.js";import"./_cacheHas.b0dcf809.js";import"./without.841d30b7.js";import"./uniqueId.e4d116e8.js";import"./_Set.bd47b98f.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.301d752e.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.194d4170.js";import"./Tooltip.ef3cac5b.js";import"./createSvgIcon.e824e175.js";import"./slicedToArray.e72f11da.js";import"./useTheme.ec45c4f6.js";import"./makeStyles.3ea686be.js";import"./InfoOutlined.a9437cb5.js";import"./ElementWithTooltip.2bd102e3.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.81d7ee62.js";import"./Modal.a0e2b98e.js";import"./useWaitForDOMRef.f0f2f2e1.js";import"./useWillUnmount.9fae65cc.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.0a21972a.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.8d813cfe.js";import"./queryUtils.4bbd7789.js";import"./useInfiniteQuery.ec5dd77c.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.9049580f.js";import"./_baseClone.d7be4d9e.js";import"./_getTag.05216d42.js";import"./useEntity.8206b3c7.js";import"./useMutation.2c776238.js";import"./pick.e68a58ee.js";import"./Checkbox.81ac9770.js";import"./Collapse.db882e02.js";import"./RadioGroup.880a066b.js";import"./moment.a565bb48.js";import"./RangeSlider.8adaf485.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.4da8ff9f.js";import"./react-sizeme.6e834905.js";import"./Skeleton.ad3e32c6.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.9db387c0.js";import"./Typography.f29a9c1b.js";import"./react-select.esm.60203cdd.js";import"./Select-54ac8379.esm.79fa9ed4.js";import"./CustomSelectWidget.877f0e9a.js";import"./index.browser.dcec01dc.js";import"./react-intersection-observer.esm.ce392905.js";import"./UserCard.bfed225a.js";import"./IconCopy.86985968.js";import"./SkeletonTable.fa38a229.js";import"./times.0d5d25c2.js";import"./ToastMessage.55c99787.js";import"./FullWidthAlert.697d5521.js";import"./Overlay.4005d66e.js";import"./DateFormatter.59dc89d9.js";import"./core.esm.9c88542e.js";import"./isEmpty.1db83ad6.js";import"./isEqual.9819111f.js";import"./union.e086287a.js";import"./isString.6af799c1.js";import"./useGetDownloadListStatistics.6cf6ac68.js";import"./QueryCount.20e6713f.js";import"./NoData.2b664c92.js";import"./useGetAccessRequirement.09510a5a.js";import"./ManagedACTAccessRequirementStatus.625a8fa7.js";import"./FileUpload.f580243b.js";import"./UserSearchBox.c0389190.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.116c0c23.js";import"./EntityLink.b3b78eaf.js";import"./NoSearchResults.2986a599.js";import"./SynapseVideo.9defc544.js";import"./IconList.807147f2.js";import"./UserCardList.1d2578d3.js";const pt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"without-top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"with-column-alias":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}}}}},title:"Explore/StandaloneQueryWrapper",component:t},o=r=>i(t,{...r}),p=o.bind({});p.args={title:"Data Files",sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",columnLinks:[{matchColumnName:"studyOrProject",isMarkdown:!0}]};const e=o.bind({});e.args={title:"With column alias",sql:"SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')"};const n=o.bind({});n.args={title:"Data Files",name:"Top Level Controls demo",hideDownload:!1,sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",showTopLevelControls:!0};const et=["WithoutTopLevelControls","WithColumnAlias","TopLevelControls"];export{n as TopLevelControls,e as WithColumnAlias,p as WithoutTopLevelControls,et as __namedExportsOrder,pt as default};
