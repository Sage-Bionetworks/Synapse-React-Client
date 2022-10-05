import{n as t}from"./CardContainerLogic.e7146078.js";import{j as i}from"./jsx-runtime.53ec3a99.js";import"./index.5bc63636.js";import"./index.c935dff9.js";import"./iframe.707dd820.js";import"./withStyles.2fbec1dd.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.89d8effb.js";import"./index.57d09176.js";import"./Button.aa21b764.js";import"./Transition.feec5299.js";import"./index.35ce73ec.js";import"./isArray.afa3346a.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.0bcbfb3f.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.7977be83.js";import"./use-deep-compare-effect.esm.76dab31b.js";import"./uniq.4eed699f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.82734360.js";import"./isSymbol.c005a6aa.js";import"./_cacheHas.5b560c8b.js";import"./without.51d00043.js";import"./uniqueId.84a1f40d.js";import"./_Set.bde41139.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.abcfe016.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.21136110.js";import"./Tooltip.6a46e0c0.js";import"./createSvgIcon.80ece60c.js";import"./slicedToArray.e72f11da.js";import"./useTheme.f82ec4e5.js";import"./makeStyles.0544ad0e.js";import"./InfoOutlined.72aa66a9.js";import"./ElementWithTooltip.c89f258e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.ae5a36af.js";import"./Modal.c19caf32.js";import"./useWaitForDOMRef.40b36c07.js";import"./useWillUnmount.d1dfdc7e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.e458f391.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.3afd597e.js";import"./queryUtils.b32e00ab.js";import"./useInfiniteQuery.0347999d.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.5a2bdd9b.js";import"./_baseClone.51a24973.js";import"./_getTag.96ae8cbb.js";import"./useEntity.26e2f507.js";import"./useMutation.d2f1dba7.js";import"./pick.208f5b17.js";import"./Checkbox.4a339933.js";import"./Collapse.089ddc7f.js";import"./RadioGroup.ff6eb1c1.js";import"./moment.a565bb48.js";import"./RangeSlider.0b9fee28.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.d4777b6b.js";import"./react-sizeme.1c12ebad.js";import"./Skeleton.9def93da.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.9496470b.js";import"./Typography.d6d23e6c.js";import"./react-select.esm.194cafc8.js";import"./Select-54ac8379.esm.2e959863.js";import"./CustomSelectWidget.d8bae787.js";import"./index.browser.d857f987.js";import"./react-intersection-observer.esm.51e0956e.js";import"./UserCard.cd843c54.js";import"./IconCopy.65395139.js";import"./SkeletonTable.32a35c51.js";import"./times.3460d620.js";import"./ToastMessage.d2af582b.js";import"./FullWidthAlert.a76adc9d.js";import"./Overlay.973a4260.js";import"./DateFormatter.3544d538.js";import"./core.esm.d9592e6e.js";import"./isEmpty.ac55f7e4.js";import"./isEqual.be980044.js";import"./union.4d10b684.js";import"./isString.e9ef92d3.js";import"./useGetDownloadListStatistics.c01bf7d3.js";import"./QueryCount.db0eb4c4.js";import"./NoData.c38fa66d.js";import"./useGetAccessRequirement.ee7e9ed0.js";import"./ManagedACTAccessRequirementStatus.76ac6345.js";import"./FileUpload.188e4c63.js";import"./UserSearchBox.dc9c716c.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.99f73ac4.js";import"./EntityLink.2c972cbe.js";import"./NoSearchResults.9f09815f.js";import"./SynapseVideo.22e3631b.js";import"./IconList.e59db63e.js";import"./UserCardList.f9998796.js";const pt={parameters:{storySource:{source:`import React from 'react'
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
