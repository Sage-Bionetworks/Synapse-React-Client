import{s as t}from"./AccessRequirementList.41faf05e.js";import{j as i}from"./jsx-runtime.a638b984.js";import"./index.b83134ec.js";import"./index.357ef824.js";import"./iframe.73217397.js";import"./SynapseConstants.aef18750.js";import"./Button.9991ffcd.js";import"./styled.d7b43787.js";import"./Tooltip.9be437e1.js";import"./SvgIcon.e74d0ad6.js";import"./useTheme.207e8da2.js";import"./TransitionGroupContext.f8911474.js";import"./FullWidthAlert.97efcbea.js";import"./hook.a59baafe.js";import"./createWithBsPrefix.86af4a28.js";import"./divWithClassName.979a7568.js";import"./index.35ce73ec.js";import"./Typography.1d6efe32.js";import"./Fade.cb073591.js";import"./isArray.dae1198f.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.9dec1c98.js";import"./IconButton.7cd1b748.js";import"./ButtonBase.bc378f3c.js";import"./emotion-react.browser.esm.3d42de74.js";import"./Link.e9eeb2e9.js";import"./Button.666a2c38.js";import"./useGetInfoFromIds.0695acf2.js";import"./use-deep-compare-effect.esm.84f86818.js";import"./uniq.a9fb9502.js";import"./_baseSlice.50189bc5.js";import"./toInteger.6100b906.js";import"./isSymbol.0dd0ac71.js";import"./_cacheHas.3d34eb58.js";import"./without.5a3916f3.js";import"./toString.42e4c32f.js";import"./_Set.7dca34f2.js";import"./_setToArray.a82100c8.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.aa28caa1.js";import"./Modal.b15b7fde.js";import"./contains.bb95d688.js";import"./inheritsLoose.239e8e0c.js";import"./usePrevious.cd07ee7a.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.1ade44a8.js";import"./UserCard.48755798.js";import"./IconCopy.9eb37407.js";import"./SkeletonTable.5915fa08.js";import"./times.6c1e506b.js";import"./Skeleton.9bd91a4d.js";import"./ToastMessage.1f086d0d.js";import"./uniqueId.409eda17.js";import"./Overlay.d99e3370.js";import"./usePopperMarginModifiers.5dd6ca76.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.acc5be8a.js";import"./useInfiniteQuery.26e1390d.js";import"./DateFormatter.d4a7e375.js";import"./dayjs.min.101fce52.js";import"./utc.b447640b.js";import"./EntityIcon.cd547dc5.js";import"./core.esm.5a39768d.js";import"./pick.8f751592.js";import"./_baseClone.fcfb79d0.js";import"./isEmpty.52a3bb94.js";import"./isEqual.e7127514.js";import"./index.browser.8d441949.js";import"./union.1918a2e6.js";import"./CustomSelectWidget.8bed6124.js";import"./Select-54ac8379.esm.6fca8758.js";import"./isString.40efef4d.js";import"./factory.54d8e23b.js";import"./sqlFunctions.32eb366f.js";import"./QueryFilter.b6981f76.js";import"./useEntity.4e3ff0bc.js";import"./useMutation.20926710.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.258625e4.js";import"./queryUtils.54998cc3.js";import"./cloneDeep.862b3fc1.js";import"./NoSearchResults.ed811a7e.js";import"./NoData.d46cdac5.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./useGetQueryResultBundle.625d0cdf.js";import"./ElementWithTooltip.9457f14f.js";import"./Dropdown.c6c87cc1.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.5012e4c0.js";import"./RadioGroup.7c25e269.js";import"./RangeSlider.18e46d9a.js";import"./react-sizeme.51f167fb.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.f7e1757b.js";import"./Close.f1e80c2b.js";import"./relativeTime.86b47aee.js";import"./useDownloadList.8311e29e.js";import"./QueryCount.eb0f2bab.js";import"./react-select.esm.1b1b0c13.js";import"./IconList.e17aeab0.js";import"./UserCardList.2e00fa1e.js";import"./useAccessRequirements.48298cfd.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.7c27e3b0.js";import"./UserSearchBox.f8b4b070.js";import"./UserOrTeamBadge.7c78ec4d.js";import"./EntityLink.4711e14a.js";import"./ErrorChip.097c7e23.js";import"./SynapseVideo.a7ab2161.js";const ut={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"without-top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"with-column-alias":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}},"top-level-controls":{startLoc:{col:64,line:10},endLoc:{col:1,line:12},startBody:{col:64,line:10},endBody:{col:1,line:12}}}}},title:"Explore/StandaloneQueryWrapper",component:t},o=r=>i(t,{...r}),p=o.bind({});p.args={title:"Data Files",sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",columnLinks:[{matchColumnName:"studyOrProject",isMarkdown:!0}]};const e=o.bind({});e.args={title:"With column alias",sql:"SELECT count(ownerID) as Sagers FROM syn23564971 WHERE institution has ('Sage Bionetworks')"};const n=o.bind({});n.args={title:"Data Files",name:"Top Level Controls demo",hideDownload:!1,sql:"SELECT * FROM syn21994970.5 where dhPortalIndex = 'TRUE' LIMIT 10",showTopLevelControls:!0};const Tt=["WithoutTopLevelControls","WithColumnAlias","TopLevelControls"];export{n as TopLevelControls,e as WithColumnAlias,p as WithoutTopLevelControls,Tt as __namedExportsOrder,ut as default};
