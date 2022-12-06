import{q as t}from"./CardContainerLogic.80e28a7a.js";import{j as i}from"./jsx-runtime.076c7567.js";import"./index.53b0413e.js";import"./index.3dd8c113.js";import"./iframe.dc9e500a.js";import"./SynapseConstants.290eab74.js";import"./Button.a0002af7.js";import"./styled.65df53fb.js";import"./Tooltip.b4ed2e26.js";import"./TransitionGroupContext.9598a495.js";import"./useTheme.6d85215f.js";import"./Alert.052d6dda.js";import"./hook.fb6ae99a.js";import"./createWithBsPrefix.125a71ed.js";import"./divWithClassName.d855987b.js";import"./index.35ce73ec.js";import"./Fade.476b0ff7.js";import"./isArray.b8ce881a.js";import"./getEndpoint.bb7ded34.js";import"./IconSvg.94aeb20a.js";import"./IconButton.81618d29.js";import"./ButtonBase.49fff140.js";import"./emotion-react.browser.esm.74b64aae.js";import"./Link.fd8fbf97.js";import"./Typography.18dd9738.js";import"./Button.855954d3.js";import"./sqlFunctions.6aa94ea0.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.391fb5d9.js";import"./useGetInfoFromIds.1688b736.js";import"./use-deep-compare-effect.esm.2f8a811e.js";import"./uniq.5f9327c6.js";import"./_baseSlice.50189bc5.js";import"./toInteger.92753527.js";import"./isSymbol.353ed4c3.js";import"./_cacheHas.59262266.js";import"./without.87978f51.js";import"./uniqueId.0acb56b3.js";import"./_Set.650372d5.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.40bc2638.js";import"./queryUtils.9c901ffd.js";import"./useInfiniteQuery.0a9647d8.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.dd48b18e.js";import"./_baseClone.81813b93.js";import"./_getTag.14e0b047.js";import"./NoSearchResults.aff925db.js";import"./NoData.b071b2e4.js";import"./unCamelCase.07e38083.js";import"./useEntity.06da6e35.js";import"./useMutation.7eb34ba2.js";import"./pick.e04e17ce.js";import"./isEqual.2f7c36d1.js";import"./ElementWithTooltip.d02c84fa.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.909fc8e8.js";import"./usePrevious.7f44450b.js";import"./contains.3362c067.js";import"./usePopperMarginModifiers.a23c4ed0.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.0bdec9b4.js";import"./RadioGroup.ac30b43c.js";import"./dayjs.min.20a3de16.js";import"./RangeSlider.f1ddbf5e.js";import"./factory.d6f460bc.js";import"./react-sizeme.7456e7a4.js";import"./Skeleton.83217f13.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.693ddaa7.js";import"./Modal.6a4db761.js";import"./inheritsLoose.9e861b2b.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.dbc78690.js";import"./SelectionCriteriaPill.81441fbe.js";import"./Close.9952fafd.js";import"./react-select.esm.e1b9a3ee.js";import"./Select-54ac8379.esm.96245f62.js";import"./CustomSelectWidget.466b5f45.js";import"./index.browser.19d490ee.js";import"./UserCard.51dc49e5.js";import"./IconCopy.1b045a7b.js";import"./SkeletonTable.3dd63b5b.js";import"./times.2784b383.js";import"./ToastMessage.f480df01.js";import"./FullWidthAlert.c3c066c4.js";import"./Overlay.07d52eac.js";import"./WarningModal.fe9b8157.js";import"./react-intersection-observer.esm.e649c397.js";import"./DateFormatter.1f96b822.js";import"./utc.b83b7030.js";import"./EntityIcon.f7bcc06a.js";import"./core.esm.2116ac3e.js";import"./isEmpty.cb1c6f75.js";import"./union.b6ea78a3.js";import"./isString.53dbadb5.js";import"./relativeTime.c2bdff91.js";import"./useGetDownloadListStatistics.e285079b.js";import"./QueryCount.ea9a5992.js";import"./useGetAccessRequirement.08a1ff59.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.8127d6f3.js";import"./UserSearchBox.782f64fa.js";import"./UserOrTeamBadge.48c906a7.js";import"./EntityLink.5eeecbce.js";import"./SynapseVideo.a31f0d5c.js";import"./IconList.1dbbdfac.js";import"./UserCardList.305661b8.js";const ct={parameters:{storySource:{source:`import React from 'react'
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
