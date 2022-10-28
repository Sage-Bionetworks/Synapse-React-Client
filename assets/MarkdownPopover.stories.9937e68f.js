import{M as i}from"./CardContainerLogic.e1f41888.js";import{j as t}from"./jsx-runtime.4eaffca0.js";import{B as n}from"./Button.9f15dabf.js";import"./index.e08ca228.js";import"./index.48154df0.js";import"./iframe.f6ed0eb4.js";import"./SynapseConstants.b6aa8bf5.js";import"./withStyles.21c7e80a.js";import"./utils.2281a9d6.js";import"./Alert.27b9a701.js";import"./index.57d09176.js";import"./createWithBsPrefix.735cbed5.js";import"./index.35ce73ec.js";import"./isArray.33858a1d.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.4d40d0c3.js";import"./sqlFunctions.a660c34a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.c3d3eddf.js";import"./TypeUtils.a2c41307.js";import"./useGetInfoFromIds.2169a105.js";import"./use-deep-compare-effect.esm.7fe1b1d8.js";import"./uniq.ad76c02f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.27d529dc.js";import"./isSymbol.fff1a0c2.js";import"./_cacheHas.eddc2d4e.js";import"./without.84ea84a3.js";import"./uniqueId.93f128ba.js";import"./_Set.8d919665.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.aefaf146.js";import"./IconSvg.9da8b4b8.js";import"./Tooltip.baf92203.js";import"./createSvgIcon.d152a531.js";import"./makeStyles.c1994d74.js";import"./InfoOutlined.489c1b42.js";import"./FacetNav.c3f6239d.js";import"./queryUtils.f5372232.js";import"./useInfiniteQuery.0db4af83.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.cd46457d.js";import"./_baseClone.342ff797.js";import"./_getTag.8907a9e9.js";import"./NoSearchResults.11fe86a6.js";import"./NoData.e6e41d35.js";import"./unCamelCase.07e38083.js";import"./useEntity.a5145ae3.js";import"./useMutation.b1729f81.js";import"./pick.a82409fa.js";import"./isEqual.f7b39916.js";import"./ElementWithTooltip.62fd30fe.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.c384e17c.js";import"./usePrevious.ba24858a.js";import"./contains.589a7733.js";import"./usePopperMarginModifiers.ec086152.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.43177b93.js";import"./RadioGroup.32425fa1.js";import"./moment.a565bb48.js";import"./RangeSlider.adef42b0.js";import"./factory.39ac0861.js";import"./react-sizeme.d5cbc0eb.js";import"./Skeleton.3c162426.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.0426ab40.js";import"./Typography.95636964.js";import"./Modal.a3764183.js";import"./inheritsLoose.f7a58397.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.26d65963.js";import"./SelectionCriteriaPill.4b691a97.js";import"./Close.0089b012.js";import"./react-select.esm.58fb1bbe.js";import"./Select-54ac8379.esm.3acfea25.js";import"./CustomSelectWidget.6cc1e305.js";import"./index.browser.37a67034.js";import"./WarningModal.5cc0586c.js";import"./react-intersection-observer.esm.5423f88d.js";import"./UserCard.73a822b2.js";import"./IconCopy.2759b8ec.js";import"./SkeletonTable.862e92ab.js";import"./times.025024a4.js";import"./ToastMessage.a51dddf9.js";import"./FullWidthAlert.e49b83f6.js";import"./Overlay.9f8bd32d.js";import"./DateFormatter.88c823e4.js";import"./core.esm.89dc9796.js";import"./isEmpty.e173c07d.js";import"./union.3221e458.js";import"./isString.7b237ac2.js";import"./useGetDownloadListStatistics.2dd86e99.js";import"./QueryCount.7dcd4a3b.js";import"./useGetAccessRequirement.adc2edf4.js";import"./ManagedACTAccessRequirementStatus.1a4b03b8.js";import"./FileUpload.ca13bd57.js";import"./UserSearchBox.53d689e3.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.88f72842.js";import"./EntityLink.7f21612e.js";import"./SynapseVideo.66a6b772.js";import"./IconList.5a836e6c.js";import"./UserCardList.12b6408b.js";const st={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i},o=r=>t(i,{...r,children:t(n,{variant:"sds-primary",children:"Button"})}),e=o.bind({});e.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const m=o.bind({});m.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const p=o.bind({});p.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const at=["NoAction","WithAction","WikiPage"];export{e as NoAction,p as WikiPage,m as WithAction,at as __namedExportsOrder,st as default};
