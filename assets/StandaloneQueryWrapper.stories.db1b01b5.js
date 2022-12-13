import{q as t}from"./HasAccessV2.06761fe8.js";import{j as i}from"./jsx-runtime.254b3176.js";import"./index.fd010cb7.js";import"./index.0a919fcb.js";import"./iframe.75dade87.js";import"./SynapseConstants.4792b5b5.js";import"./Button.87a6ff9f.js";import"./styled.0b0d8b8c.js";import"./Tooltip.8deb04e4.js";import"./SvgIcon.3abc547b.js";import"./useTheme.c977df4e.js";import"./TransitionGroupContext.8e2c28aa.js";import"./Alert.a3cded27.js";import"./hook.f1fe8c77.js";import"./createWithBsPrefix.df6e431b.js";import"./divWithClassName.7005b84b.js";import"./index.35ce73ec.js";import"./Fade.feae1643.js";import"./isArray.f97a9bbd.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.f20d6379.js";import"./IconButton.903dfe6a.js";import"./ButtonBase.373062e6.js";import"./emotion-react.browser.esm.2f156512.js";import"./Link.a0ec5041.js";import"./Typography.770de0a7.js";import"./Button.1f777938.js";import"./useAccessRequirements.f0d1a9da.js";import"./useMutation.fc3c8459.js";import"./useInfiniteQuery.c7bd3506.js";import"./queryKeys.e0d3085f.js";import"./RestrictionInformation.edfbac5a.js";import"./useGetInfoFromIds.40c1344c.js";import"./use-deep-compare-effect.esm.dd2c5436.js";import"./uniq.3d75b2a1.js";import"./_baseSlice.50189bc5.js";import"./toInteger.584e3fb4.js";import"./isSymbol.26d1d746.js";import"./_cacheHas.a5b1c75d.js";import"./without.b8d04fce.js";import"./uniqueId.45db3035.js";import"./_Set.7ee3ab32.js";import"./_setToArray.a82100c8.js";import"./LoadingScreen.c63dd2ac.js";import"./Modal.ac273403.js";import"./contains.8dcb6ab0.js";import"./inheritsLoose.37221418.js";import"./usePrevious.57c17579.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.1870fb8b.js";import"./UserCard.7ca4f703.js";import"./IconCopy.a538d8eb.js";import"./SkeletonTable.4a89f4f4.js";import"./times.af16b41b.js";import"./Skeleton.01da34f7.js";import"./ToastMessage.32c452c3.js";import"./FullWidthAlert.3a145ad4.js";import"./Overlay.8fd9ffbd.js";import"./usePopperMarginModifiers.620da183.js";import"./WarningModal.4f8c39e8.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.1ce24649.js";import"./DateFormatter.4a01699f.js";import"./dayjs.min.f047e958.js";import"./utc.a6799311.js";import"./EntityIcon.df4d5c3c.js";import"./core.esm.88ab76a6.js";import"./pick.af1437da.js";import"./_baseClone.adabff14.js";import"./isEmpty.07b1f7f9.js";import"./isEqual.f95bc163.js";import"./index.browser.e58f6c8a.js";import"./union.46f63519.js";import"./CustomSelectWidget.f8ec3434.js";import"./Select-54ac8379.esm.8e1eb034.js";import"./isString.8233ba36.js";import"./factory.eaa65980.js";import"./sqlFunctions.f81c8ae1.js";import"./QueryFilter.739dec63.js";import"./useEntity.58fed946.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.efa95965.js";import"./queryUtils.71f740e2.js";import"./cloneDeep.17c1a597.js";import"./NoSearchResults.6cc82647.js";import"./NoData.e1985754.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.7369dcad.js";import"./Dropdown.b1456386.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.d3d76aaa.js";import"./RadioGroup.6a0cb761.js";import"./RangeSlider.89e5c569.js";import"./react-sizeme.ee359759.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.f8b1a626.js";import"./Close.49a69e99.js";import"./relativeTime.b59f3c5f.js";import"./useDownloadList.932c8757.js";import"./QueryCount.e2ec8a22.js";import"./react-select.esm.d5e9ceca.js";import"./IconList.89bd817f.js";import"./UserCardList.949bbd08.js";import"./EntityLink.3f03a671.js";import"./UserOrTeamBadge.98286171.js";import"./SynapseVideo.ba257035.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.5e25f139.js";import"./UserSearchBox.3a69336f.js";const ct={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"without-top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"with-column-alias":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}}}}},title:"Explore/StandaloneQueryWrapper",component:t},o=r=>i(t,{...r}),p=o.bind({});p.args={title:"Data Files",sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",columnLinks:[{matchColumnName:"studyOrProject",isMarkdown:!0}]};const e=o.bind({});e.args={title:"With column alias",sql:"SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')"};const n=o.bind({});n.args={title:"Data Files",name:"Top Level Controls demo",hideDownload:!1,sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",showTopLevelControls:!0};const ut=["WithoutTopLevelControls","WithColumnAlias","TopLevelControls"];export{n as TopLevelControls,e as WithColumnAlias,p as WithoutTopLevelControls,ut as __namedExportsOrder,ct as default};
