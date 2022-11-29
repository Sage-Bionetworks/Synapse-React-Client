import{q as t}from"./CardContainerLogic.9810a91e.js";import{j as i}from"./jsx-runtime.23bcdc09.js";import"./index.20c1822f.js";import"./index.a2bbbebe.js";import"./iframe.c49fa417.js";import"./SynapseConstants.290eab74.js";import"./Button.9cfa11f8.js";import"./styled.8da6873c.js";import"./utils.2eab32fe.js";import"./TransitionGroupContext.b9a824ce.js";import"./useTheme.26e47b20.js";import"./Alert.03ebe4a7.js";import"./hook.81302421.js";import"./createWithBsPrefix.26026502.js";import"./divWithClassName.fcb14682.js";import"./index.35ce73ec.js";import"./Fade.5c08504a.js";import"./isArray.1d31a80d.js";import"./getEndpoint.bb7ded34.js";import"./Link.e49ccf51.js";import"./Typography.17940352.js";import"./Button.d27fd09d.js";import"./ButtonBase.94c8520a.js";import"./emotion-react.browser.esm.599684c1.js";import"./sqlFunctions.f9b9cbac.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.bb36e699.js";import"./useGetInfoFromIds.2e06391d.js";import"./use-deep-compare-effect.esm.c436bf33.js";import"./uniq.3868c1f1.js";import"./_baseSlice.50189bc5.js";import"./toInteger.dfc8aa00.js";import"./isSymbol.017a619a.js";import"./_cacheHas.990f1aa2.js";import"./without.cde801d5.js";import"./uniqueId.5a455c2a.js";import"./_Set.ca1709e5.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.828b0ea4.js";import"./queryUtils.19a52aee.js";import"./useInfiniteQuery.6d6d1422.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.a4dd16c1.js";import"./_baseClone.5f0a5f2c.js";import"./_getTag.6f0edf19.js";import"./NoSearchResults.939072af.js";import"./NoData.da21ba5e.js";import"./unCamelCase.07e38083.js";import"./useEntity.9c9803bf.js";import"./useMutation.a00e5fbd.js";import"./pick.7185c6d7.js";import"./isEqual.325afd29.js";import"./ElementWithTooltip.5a678880.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.1982fde5.js";import"./Tooltip.cfbb546f.js";import"./createSvgIcon.e3e4a251.js";import"./InfoOutlined.61048ddd.js";import"./Dropdown.824bdf6d.js";import"./usePrevious.f1fd94eb.js";import"./contains.e26e64f1.js";import"./usePopperMarginModifiers.2032f396.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.4c21f830.js";import"./RadioGroup.b1b3d150.js";import"./dayjs.min.175e5ee6.js";import"./RangeSlider.80a9f111.js";import"./factory.945e3686.js";import"./react-sizeme.50cdb1a3.js";import"./Skeleton.93cf864e.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.0123b906.js";import"./Modal.fcfac98b.js";import"./inheritsLoose.efe8b24a.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.1d1fe719.js";import"./SelectionCriteriaPill.d4d12bc2.js";import"./Close.0f2d06e3.js";import"./react-select.esm.cd1a70c9.js";import"./Select-54ac8379.esm.6a208b47.js";import"./CustomSelectWidget.f29cd2d8.js";import"./index.browser.e71d7dd0.js";import"./UserCard.b277597c.js";import"./IconCopy.3d0604ac.js";import"./SkeletonTable.7a076046.js";import"./times.e12d7030.js";import"./ToastMessage.52d73997.js";import"./FullWidthAlert.465c2909.js";import"./Overlay.177b926b.js";import"./WarningModal.8ba465c6.js";import"./react-intersection-observer.esm.8699b4f1.js";import"./DateFormatter.6d192042.js";import"./utc.9b4935b5.js";import"./EntityIcon.cd2765eb.js";import"./core.esm.6dd03b50.js";import"./isEmpty.9a508fc8.js";import"./union.1195c535.js";import"./isString.3a866e5e.js";import"./relativeTime.efd786e6.js";import"./useGetDownloadListStatistics.e5a0a533.js";import"./QueryCount.d35559d0.js";import"./useGetAccessRequirement.cee49857.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.af585b5c.js";import"./UserSearchBox.c1fe0c21.js";import"./UserOrTeamBadge.7709bc8d.js";import"./EntityLink.2e71dd10.js";import"./SynapseVideo.81bbfb30.js";import"./IconList.c4ebe30a.js";import"./UserCardList.4bff2bca.js";const Tt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"without-top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"with-column-alias":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}}}}},title:"Explore/StandaloneQueryWrapper",component:t},o=r=>i(t,{...r}),p=o.bind({});p.args={title:"Data Files",sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",columnLinks:[{matchColumnName:"studyOrProject",isMarkdown:!0}]};const e=o.bind({});e.args={title:"With column alias",sql:"SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')"};const n=o.bind({});n.args={title:"Data Files",name:"Top Level Controls demo",hideDownload:!1,sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",showTopLevelControls:!0};const yt=["WithoutTopLevelControls","WithColumnAlias","TopLevelControls"];export{n as TopLevelControls,e as WithColumnAlias,p as WithoutTopLevelControls,yt as __namedExportsOrder,Tt as default};
