import{M as i}from"./CardContainerLogic.08596215.js";import{j as t}from"./jsx-runtime.1ec48991.js";import{B as n}from"./Button.10450b9c.js";import"./index.68bd0253.js";import"./index.e6805b9d.js";import"./iframe.17825d5d.js";import"./SynapseConstants.b6aa8bf5.js";import"./styled.b563b14e.js";import"./utils.cfe4cf21.js";import"./TransitionGroupContext.bea386fe.js";import"./Alert.3ceff35f.js";import"./createWithBsPrefix.4e16079c.js";import"./index.35ce73ec.js";import"./isArray.57b36520.js";import"./getEndpoint.bb7ded34.js";import"./Link.9d6a28d3.js";import"./Typography.d731394a.js";import"./Button.a57d4d2f.js";import"./ButtonBase.385491e5.js";import"./sqlFunctions.28e88eb6.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.598ee4cd.js";import"./useGetInfoFromIds.debf247c.js";import"./use-deep-compare-effect.esm.f247efaf.js";import"./uniq.546de6f9.js";import"./_baseSlice.50189bc5.js";import"./toInteger.11c6324c.js";import"./isSymbol.39bb0bca.js";import"./_cacheHas.23a2f0cd.js";import"./without.acbd50b9.js";import"./uniqueId.18f3bcbd.js";import"./_Set.4ce988f1.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.a91679fa.js";import"./queryUtils.0d06972d.js";import"./useInfiniteQuery.32675929.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.544e9aa4.js";import"./_baseClone.56ec3078.js";import"./_getTag.387f7518.js";import"./NoSearchResults.0a7d89fe.js";import"./NoData.8191c6ba.js";import"./unCamelCase.07e38083.js";import"./useEntity.72febae8.js";import"./useMutation.214258b2.js";import"./pick.e29753d5.js";import"./isEqual.e9702a7a.js";import"./ElementWithTooltip.58248476.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.2665a8bd.js";import"./Tooltip.37175240.js";import"./createSvgIcon.bd0679c5.js";import"./InfoOutlined.12757aca.js";import"./Dropdown.7a288e5a.js";import"./usePrevious.28f2a445.js";import"./contains.bd991730.js";import"./usePopperMarginModifiers.34cf932a.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7174261f.js";import"./RadioGroup.f132105e.js";import"./moment.a565bb48.js";import"./RangeSlider.4298c9ca.js";import"./factory.4bdb8a65.js";import"./react-sizeme.39a549cd.js";import"./Skeleton.04d77aea.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.30f27451.js";import"./Modal.a4af86eb.js";import"./inheritsLoose.0edf792b.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.6116bbf2.js";import"./SelectionCriteriaPill.1ffeece6.js";import"./Close.ff66a9b6.js";import"./react-select.esm.f9ca1196.js";import"./Select-54ac8379.esm.7298567a.js";import"./CustomSelectWidget.972f265c.js";import"./index.browser.7232b0ba.js";import"./UserCard.9a31a780.js";import"./IconCopy.480c8ce4.js";import"./SkeletonTable.94937218.js";import"./times.937b25aa.js";import"./ToastMessage.68896504.js";import"./FullWidthAlert.4fc4aa23.js";import"./Overlay.2ba975ad.js";import"./WarningModal.cee853fc.js";import"./react-intersection-observer.esm.d26341a2.js";import"./DateFormatter.4d2167a5.js";import"./EntityIcon.4748b953.js";import"./core.esm.ea705688.js";import"./isEmpty.84372b7a.js";import"./union.0203303f.js";import"./isString.b8ed4888.js";import"./useGetDownloadListStatistics.d0f7fcfe.js";import"./QueryCount.0ac77dcc.js";import"./useGetAccessRequirement.01759ff4.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.0dbad1cf.js";import"./UserSearchBox.8c578c43.js";import"./UserOrTeamBadge.b078337d.js";import"./EntityLink.c35429f8.js";import"./SynapseVideo.8d6ec532.js";import"./IconList.f87d6feb.js";import"./UserCardList.141cd21a.js";const pt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i},o=r=>t(i,{...r,children:t(n,{variant:"sds-primary",children:"Button"})}),e=o.bind({});e.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const m=o.bind({});m.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const p=o.bind({});p.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const st=["NoAction","WithAction","WikiPage"];export{e as NoAction,p as WikiPage,m as WithAction,st as __namedExportsOrder,pt as default};
