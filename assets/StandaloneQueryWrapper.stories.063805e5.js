import{n as t}from"./CardContainerLogic.07f08fbb.js";import{j as i}from"./jsx-runtime.02fcd003.js";import"./index.91a9706e.js";import"./index.0864d1cf.js";import"./iframe.25b1a9fc.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.bd4bae0e.js";import"./styled.094a3a2c.js";import"./utils.62f6c1ea.js";import"./Alert.92a838df.js";import"./createWithBsPrefix.9fcf4917.js";import"./index.35ce73ec.js";import"./isArray.404de5ac.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.66ad72a0.js";import"./sqlFunctions.6c29bc93.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.fe898980.js";import"./useGetInfoFromIds.32f9a8a6.js";import"./use-deep-compare-effect.esm.087251af.js";import"./uniq.62ba73ed.js";import"./_baseSlice.50189bc5.js";import"./toInteger.3466557e.js";import"./isSymbol.b2b689d7.js";import"./_cacheHas.2a8fdb0c.js";import"./without.1a07f841.js";import"./uniqueId.446adc13.js";import"./_Set.46f8fc5c.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.a28a2e52.js";import"./queryUtils.a101fcf0.js";import"./useInfiniteQuery.fc6fd964.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.c98c28c0.js";import"./_baseClone.c0aa1259.js";import"./_getTag.58b2ff67.js";import"./NoSearchResults.617c97fc.js";import"./NoData.aa431ffe.js";import"./unCamelCase.07e38083.js";import"./useEntity.c0242e46.js";import"./useMutation.9d704823.js";import"./pick.b08b8dd2.js";import"./isEqual.cb9e6104.js";import"./ElementWithTooltip.c72d69a4.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.c783b477.js";import"./Tooltip.977ea0b9.js";import"./createSvgIcon.37b7d2f8.js";import"./InfoOutlined.9adbadde.js";import"./Dropdown.aec0cc51.js";import"./usePrevious.a424157a.js";import"./contains.593a857e.js";import"./usePopperMarginModifiers.417da628.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.8e723a9b.js";import"./RadioGroup.f6595d68.js";import"./moment.a565bb48.js";import"./RangeSlider.23e4f90d.js";import"./factory.7cc0356e.js";import"./react-sizeme.070dc527.js";import"./Skeleton.1c99f826.js";import"./emotion-react.browser.esm.a24af408.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.aa9f1a18.js";import"./Modal.eec014aa.js";import"./inheritsLoose.737c1083.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.abb80557.js";import"./Typography.79e944f5.js";import"./SelectionCriteriaPill.ca707430.js";import"./Close.f8c8f41e.js";import"./react-select.esm.710ced48.js";import"./Select-54ac8379.esm.865b8397.js";import"./CustomSelectWidget.2129a911.js";import"./index.browser.d22832b1.js";import"./UserCard.f776b74e.js";import"./IconCopy.5b716459.js";import"./SkeletonTable.8183c23e.js";import"./times.36513370.js";import"./ToastMessage.5f109185.js";import"./FullWidthAlert.b9addea3.js";import"./Overlay.712e50d1.js";import"./WarningModal.e7a646eb.js";import"./react-intersection-observer.esm.f439000b.js";import"./DateFormatter.a8d87905.js";import"./EntityIcon.e25991b1.js";import"./core.esm.955a0884.js";import"./isEmpty.40959c6d.js";import"./union.7d6a8421.js";import"./isString.f3f53b54.js";import"./useGetDownloadListStatistics.49a5e31c.js";import"./QueryCount.af68c71d.js";import"./useGetAccessRequirement.6942e412.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.9309f685.js";import"./UserSearchBox.9b9ba1e5.js";import"./UserOrTeamBadge.4c627245.js";import"./EntityLink.76481bb6.js";import"./ButtonBase.fb9c46ac.js";import"./SynapseVideo.6b43f73e.js";import"./IconList.f71b529d.js";import"./UserCardList.edd5ba6e.js";const nt={parameters:{storySource:{source:`import React from 'react'
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
