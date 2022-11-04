import{M as i}from"./CardContainerLogic.46c33d4a.js";import{j as t}from"./jsx-runtime.d95d6493.js";import{B as n}from"./Button.a2dbd16c.js";import"./index.a967ac4c.js";import"./index.7a9149c6.js";import"./iframe.7f51ef58.js";import"./SynapseConstants.b6aa8bf5.js";import"./styled.3f404f86.js";import"./utils.39b72e5d.js";import"./Alert.ac443a97.js";import"./createWithBsPrefix.4fb80af1.js";import"./index.35ce73ec.js";import"./isArray.6553b885.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.67322144.js";import"./sqlFunctions.7213c897.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.221666e3.js";import"./useGetInfoFromIds.a7c30767.js";import"./use-deep-compare-effect.esm.61fac49d.js";import"./uniq.c4aef444.js";import"./_baseSlice.50189bc5.js";import"./toInteger.eafc4c9b.js";import"./isSymbol.641f0fe1.js";import"./_cacheHas.902be7b7.js";import"./without.6b0b9205.js";import"./uniqueId.82d1329f.js";import"./_Set.274d01e6.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.cae1a765.js";import"./queryUtils.48ac5c76.js";import"./useInfiniteQuery.6acea356.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.63080ad6.js";import"./_baseClone.2f5e4c45.js";import"./_getTag.68c416fc.js";import"./NoSearchResults.12bc7c93.js";import"./NoData.ee4cc3d1.js";import"./unCamelCase.07e38083.js";import"./useEntity.93f548ef.js";import"./useMutation.d7ef8afa.js";import"./pick.2ba7038c.js";import"./isEqual.dd9f6922.js";import"./ElementWithTooltip.a90e0a7b.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.05cf2f3e.js";import"./Tooltip.bdb5981c.js";import"./createSvgIcon.54e8e52e.js";import"./InfoOutlined.2d1c81ce.js";import"./Dropdown.8aec79ad.js";import"./usePrevious.be61f2cf.js";import"./contains.bddd4731.js";import"./usePopperMarginModifiers.d9524712.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.4ac4ac02.js";import"./RadioGroup.16460db1.js";import"./moment.a565bb48.js";import"./RangeSlider.389bf474.js";import"./factory.c6443813.js";import"./react-sizeme.491b19e0.js";import"./Skeleton.d72513ec.js";import"./emotion-react.browser.esm.1bce0706.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.7e8ade87.js";import"./Modal.44dfdffd.js";import"./inheritsLoose.003389ab.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.2249f319.js";import"./Typography.5462d0e3.js";import"./SelectionCriteriaPill.857b3a81.js";import"./Close.f3088fe6.js";import"./react-select.esm.6039698f.js";import"./Select-54ac8379.esm.467230d6.js";import"./CustomSelectWidget.7fdd1bf4.js";import"./index.browser.de06311f.js";import"./UserCard.f4ef9e5a.js";import"./IconCopy.57146dc0.js";import"./SkeletonTable.239236e1.js";import"./times.5a8d2fe1.js";import"./ToastMessage.1b9e5ec3.js";import"./FullWidthAlert.c5df0de8.js";import"./Overlay.2efb852e.js";import"./WarningModal.10b23a64.js";import"./react-intersection-observer.esm.bdb50a70.js";import"./DateFormatter.04e6c641.js";import"./EntityIcon.9488f4b0.js";import"./core.esm.f6a33a63.js";import"./isEmpty.73cf3d8e.js";import"./union.e570b19b.js";import"./isString.821ed06b.js";import"./useGetDownloadListStatistics.337bb6e8.js";import"./QueryCount.b15a2b71.js";import"./useGetAccessRequirement.d4717c56.js";import"./ManagedACTAccessRequirementStatus.a0ce8e8f.js";import"./FileUpload.a214d144.js";import"./UserSearchBox.9051ec64.js";import"./UserOrTeamBadge.25d96305.js";import"./EntityLink.f17f7e5c.js";import"./SynapseVideo.c640d11b.js";import"./IconList.6f141d04.js";import"./UserCardList.65e78400.js";const mt={parameters:{storySource:{source:`import React from 'react'
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
