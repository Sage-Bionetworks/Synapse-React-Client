import{M as i}from"./HelpPopover.63ffb224.js";import{j as t}from"./jsx-runtime.abb726e8.js";import{B as n}from"./Button.adf7cc86.js";import"./index.2c5f845c.js";import"./iframe.eb3e4e59.js";import"./usePopperMarginModifiers.b882fc0b.js";import"./contains.ec0f6536.js";import"./createWithBsPrefix.1bfef79f.js";import"./hasClass.56fd144a.js";import"./EntityTypeUtils.68b1ba2e.js";import"./Fade.a8b10681.js";import"./styled.f63790d0.js";import"./useTheme.8f8018ca.js";import"./Tooltip.6e0804a9.js";import"./SvgIcon.e2be6ff9.js";import"./TransitionGroupContext.bebd881a.js";import"./isArray.ab001f9e.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.7db66457.js";import"./IconButton.ed9fd281.js";import"./ButtonBase.5b0e8114.js";import"./emotion-react.browser.esm.e1070f55.js";import"./Link.27f5a2e0.js";import"./Typography.1b6708c1.js";import"./Button.aed7d197.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.955b55b4.js";import"./hook.f27fbe2d.js";import"./divWithClassName.dfc40d29.js";import"./queryKeys.e0d3085f.js";import"./LoadingScreen.da97ada7.js";import"./Modal.5c5237e2.js";import"./inheritsLoose.4137eaed.js";import"./usePrevious.1640f1cb.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.a8cf6b9d.js";import"./UserCard.d62c0381.js";import"./IconCopy.41b2aecf.js";import"./SkeletonTable.2b1bbbfa.js";import"./times.c2450c2f.js";import"./toInteger.3bb24d7b.js";import"./isSymbol.0b88d4fa.js";import"./Skeleton.a4e29131.js";import"./ToastMessage.34e9245f.js";import"./FullWidthAlert.7ca8861d.js";import"./uniqueId.d812a5f6.js";import"./Overlay.bdf5e094.js";import"./WarningModal.cb588769.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.44317633.js";import"./useInfiniteQuery.08a27252.js";import"./DateFormatter.b167d8c8.js";import"./dayjs.min.5866c853.js";import"./utc.5377f193.js";import"./EntityIcon.2bcd7051.js";import"./core.esm.4bcdfcb9.js";import"./pick.e687a148.js";import"./_baseClone.cdba3c44.js";import"./_Set.8dea50e2.js";import"./_baseSlice.50189bc5.js";import"./isEmpty.75a1cd8d.js";import"./isEqual.571bad91.js";import"./_cacheHas.7f99e048.js";import"./_setToArray.a82100c8.js";import"./index.browser.30abe5f1.js";import"./union.a2e7c5e7.js";import"./without.33bdfa29.js";import"./uniq.74eb5155.js";import"./CustomSelectWidget.aba6ffb7.js";import"./Select-54ac8379.esm.154f0c6d.js";import"./isString.9a009fd0.js";import"./factory.8efbd05b.js";import"./sqlFunctions.7d5708aa.js";import"./QueryFilter.71551b17.js";import"./useEntity.bdfc55d0.js";import"./useMutation.7f638909.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.9d8ad5ab.js";import"./queryUtils.cef80dce.js";import"./cloneDeep.7407a460.js";import"./use-deep-compare-effect.esm.12992f59.js";import"./NoSearchResults.f6e8efca.js";import"./NoData.47fb69f9.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.ff791b63.js";import"./Dropdown.5c7f62a8.js";import"./isRequiredForA11y.20ed4857.js";import"./useGetInfoFromIds.78222ff6.js";import"./Checkbox.357bf0d5.js";import"./RadioGroup.20499be7.js";import"./RangeSlider.a26b82ec.js";import"./react-sizeme.e05721a9.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.230b8d80.js";import"./Close.b2f6322a.js";import"./relativeTime.2c7e05ca.js";import"./useDownloadList.0667e167.js";import"./QueryCount.f76481ab.js";import"./react-select.esm.b8feb3ea.js";import"./IconList.0c6d3489.js";import"./UserCardList.f09842f4.js";import"./useAccessRequirements.49171f24.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.384731d5.js";import"./UserSearchBox.cd090aad.js";import"./UserOrTeamBadge.deeb3214.js";import"./EntityLink.ecb8bb0b.js";import"./SynapseVideo.67e04924.js";const ut={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i},o=r=>t(i,{...r,children:t(n,{variant:"sds-primary",children:"Button"})}),m=o.bind({});m.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const p=o.bind({});p.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const e=o.bind({});e.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const wt=["NoAction","WithAction","WikiPage"];export{m as NoAction,e as WikiPage,p as WithAction,wt as __namedExportsOrder,ut as default};
