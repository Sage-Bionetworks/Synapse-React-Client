import{M as i}from"./CardContainerLogic.7cc39be0.js";import{j as t}from"./jsx-runtime.34ce7573.js";import{B as n}from"./Button.ce0bd2bc.js";import"./index.9252e43c.js";import"./index.440cbb05.js";import"./iframe.2f145b9b.js";import"./SynapseConstants.b6aa8bf5.js";import"./styled.20fad266.js";import"./utils.02697a41.js";import"./Alert.6db3bf6f.js";import"./createWithBsPrefix.b3a1d38c.js";import"./index.35ce73ec.js";import"./isArray.c4020594.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.be1787bd.js";import"./sqlFunctions.fb2b8b19.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.cb52bd20.js";import"./useGetInfoFromIds.a3c1fbad.js";import"./use-deep-compare-effect.esm.98e326b7.js";import"./uniq.1828ee9e.js";import"./_baseSlice.50189bc5.js";import"./toInteger.237c62c7.js";import"./isSymbol.a6cfa1b9.js";import"./_cacheHas.501324b1.js";import"./without.8878821f.js";import"./uniqueId.d34fd1e6.js";import"./_Set.0beeed1b.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.10e02f1d.js";import"./queryUtils.c7f410ff.js";import"./useInfiniteQuery.c68591e1.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.6f6e5476.js";import"./_baseClone.6414188e.js";import"./_getTag.db93df7f.js";import"./NoSearchResults.ee95b549.js";import"./NoData.87904bad.js";import"./unCamelCase.07e38083.js";import"./useEntity.39d0a6df.js";import"./useMutation.1d5deb4c.js";import"./pick.ec9119f4.js";import"./isEqual.211d8e41.js";import"./ElementWithTooltip.e4a037b6.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.e4eaabe3.js";import"./Tooltip.ba09745a.js";import"./createSvgIcon.b38e43ed.js";import"./InfoOutlined.776d3e3c.js";import"./Dropdown.6c7af2c4.js";import"./usePrevious.3addf0ec.js";import"./contains.6d148a53.js";import"./usePopperMarginModifiers.08d898fd.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.a4c87e0b.js";import"./RadioGroup.fa263f64.js";import"./moment.a565bb48.js";import"./RangeSlider.8ffb999f.js";import"./factory.0c8a08a5.js";import"./react-sizeme.bfaa4e5c.js";import"./Skeleton.4a2bac74.js";import"./emotion-react.browser.esm.2f1b8c6f.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.f3df99c4.js";import"./Modal.ab93f5f1.js";import"./inheritsLoose.722dc9df.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.bd397adc.js";import"./Typography.40039e1c.js";import"./SelectionCriteriaPill.04198a45.js";import"./Close.7d039dff.js";import"./react-select.esm.92368a31.js";import"./Select-54ac8379.esm.0ae6bcaf.js";import"./CustomSelectWidget.3af0a163.js";import"./index.browser.ba1e8f37.js";import"./UserCard.d4cb2331.js";import"./IconCopy.4dd3a28c.js";import"./SkeletonTable.75981830.js";import"./times.060b00f0.js";import"./ToastMessage.25625655.js";import"./FullWidthAlert.9e017ef2.js";import"./Overlay.e9b5736d.js";import"./WarningModal.17c62954.js";import"./react-intersection-observer.esm.f463fcd8.js";import"./DateFormatter.f008c727.js";import"./EntityIcon.e98c87d6.js";import"./core.esm.41ddcaa1.js";import"./isEmpty.46fcd958.js";import"./union.4d219cd2.js";import"./isString.e5e21bc4.js";import"./useGetDownloadListStatistics.3e87488b.js";import"./QueryCount.1862eaa8.js";import"./useGetAccessRequirement.36c43b06.js";import"./ManagedACTAccessRequirementStatus.320262df.js";import"./FileUpload.b608cce8.js";import"./UserSearchBox.7dfc66c7.js";import"./UserOrTeamBadge.544df5d8.js";import"./EntityLink.8387a03e.js";import"./SynapseVideo.8475afb5.js";import"./IconList.bded4a5b.js";import"./UserCardList.dbd42a20.js";const mt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i},o=r=>t(i,{...r,children:t(n,{variant:"sds-primary",children:"Button"})}),e=o.bind({});e.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const m=o.bind({});m.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const p=o.bind({});p.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const pt=["NoAction","WithAction","WikiPage"];export{e as NoAction,p as WikiPage,m as WithAction,pt as __namedExportsOrder,mt as default};
