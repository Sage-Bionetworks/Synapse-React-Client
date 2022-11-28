import{M as i}from"./CardContainerLogic.2afc3e41.js";import{j as t}from"./jsx-runtime.f4a5fef7.js";import{B as n}from"./Button.6c384231.js";import"./index.78005489.js";import"./index.ee4c3b55.js";import"./iframe.1c2d6841.js";import"./SynapseConstants.290eab74.js";import"./styled.02bbe28b.js";import"./utils.c51ff475.js";import"./TransitionGroupContext.bc250134.js";import"./useTheme.cb95caa9.js";import"./Alert.4753fb70.js";import"./hook.82a0cc8c.js";import"./createWithBsPrefix.54f05b7e.js";import"./divWithClassName.967bfcd9.js";import"./index.35ce73ec.js";import"./Fade.f600cb07.js";import"./isArray.c85c7bf8.js";import"./getEndpoint.bb7ded34.js";import"./Link.880594dd.js";import"./Typography.839bb703.js";import"./Button.4567776a.js";import"./ButtonBase.380fb064.js";import"./emotion-react.browser.esm.e2223364.js";import"./sqlFunctions.3ae34c19.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.6972a42a.js";import"./useGetInfoFromIds.b9ea821c.js";import"./use-deep-compare-effect.esm.50e2f1c1.js";import"./uniq.6266853d.js";import"./_baseSlice.50189bc5.js";import"./toInteger.7b500fdb.js";import"./isSymbol.f04221fe.js";import"./_cacheHas.dd9da3b5.js";import"./without.831c836d.js";import"./uniqueId.f0e21060.js";import"./_Set.2a56fd01.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.2cdabd29.js";import"./queryUtils.6717467d.js";import"./useInfiniteQuery.61e681b6.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.5758621c.js";import"./_baseClone.4215a3d5.js";import"./_getTag.9e31a874.js";import"./NoSearchResults.2a875ab0.js";import"./NoData.cfdac4bc.js";import"./unCamelCase.07e38083.js";import"./useEntity.7ee59141.js";import"./useMutation.db5d91df.js";import"./pick.68ed5305.js";import"./isEqual.8ad8e333.js";import"./ElementWithTooltip.f80f82bf.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.d54f7f38.js";import"./Tooltip.8a367305.js";import"./createSvgIcon.5d1f0251.js";import"./InfoOutlined.b6a78282.js";import"./Dropdown.ba5311c1.js";import"./usePrevious.7d29e7c5.js";import"./contains.9e492dba.js";import"./usePopperMarginModifiers.c2cb8c2e.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.86c981e0.js";import"./RadioGroup.e7d00023.js";import"./dayjs.min.03134d36.js";import"./RangeSlider.9f946964.js";import"./factory.09868547.js";import"./react-sizeme.a278fee9.js";import"./Skeleton.c4f2e78a.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.1bd379c3.js";import"./Modal.99d56cea.js";import"./inheritsLoose.6b8ca8e2.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.a74f5535.js";import"./SelectionCriteriaPill.ec34bcc2.js";import"./Close.0076500b.js";import"./react-select.esm.3ef19952.js";import"./Select-54ac8379.esm.5a35ae0a.js";import"./CustomSelectWidget.540fd9f6.js";import"./index.browser.74e9a6f3.js";import"./UserCard.759836bb.js";import"./IconCopy.bde4919e.js";import"./SkeletonTable.0785797a.js";import"./times.2d68f6f5.js";import"./ToastMessage.715b02dd.js";import"./FullWidthAlert.dfc3d6c6.js";import"./Overlay.c82b84a8.js";import"./WarningModal.688d0f1c.js";import"./react-intersection-observer.esm.bbb91cee.js";import"./DateFormatter.3a10c1e5.js";import"./utc.5929ab00.js";import"./EntityIcon.08c8e7b5.js";import"./core.esm.631f96e4.js";import"./isEmpty.7f389cd9.js";import"./union.6ec24068.js";import"./isString.7d2b4e5a.js";import"./relativeTime.310cd65e.js";import"./useGetDownloadListStatistics.f5ed43fc.js";import"./QueryCount.f734d68e.js";import"./useGetAccessRequirement.fb88d496.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.6a8eea9e.js";import"./UserSearchBox.f7e1c5a9.js";import"./UserOrTeamBadge.a5cc953c.js";import"./EntityLink.2900e45e.js";import"./SynapseVideo.a848d92b.js";import"./IconList.7a69fe92.js";import"./UserCardList.acde4723.js";const gt={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MarkdownPopover } from './MarkdownPopover'
import { Button } from 'react-bootstrap'

export default {
  title: 'Markdown/MarkdownPopover',
  component: MarkdownPopover,
} as ComponentMeta<typeof MarkdownPopover>

const Template: ComponentStory<typeof MarkdownPopover> = args => (
  <MarkdownPopover {...args}>
    <Button variant="sds-primary">Button</Button>
  </MarkdownPopover>
)

export const NoAction = Template.bind({})
NoAction.args = {
  contentProps: { markdown: 'Supports _rendering_ basic **Markdown**.' },
  placement: 'bottom',
}

export const WithAction = Template.bind({})
WithAction.args = {
  contentProps: {
    markdown:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis.',
  },
  placement: 'right',
  actionButton: {
    content: 'Show/Hide Hidden Text',
  },
}

export const WikiPage = Template.bind({})
WikiPage.args = {
  contentProps: {
    ownerId: 'syn12666371',
    wikiId: '585317',
  },
  showCloseButton: false,
  placement: 'right',
}
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i},o=r=>t(i,{...r,children:t(n,{variant:"sds-primary",children:"Button"})}),m=o.bind({});m.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const p=o.bind({});p.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const e=o.bind({});e.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const kt=["NoAction","WithAction","WikiPage"];export{m as NoAction,e as WikiPage,p as WithAction,kt as __namedExportsOrder,gt as default};
