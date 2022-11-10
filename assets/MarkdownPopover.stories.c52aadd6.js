import{M as i}from"./CardContainerLogic.8738f78f.js";import{j as t}from"./jsx-runtime.2ff8811e.js";import{B as n}from"./Button.774b93d6.js";import"./index.3bd83fcc.js";import"./index.95124b04.js";import"./iframe.f6116fbf.js";import"./SynapseConstants.b6aa8bf5.js";import"./styled.9a92447e.js";import"./utils.2126a84f.js";import"./TransitionGroupContext.ecfa02dc.js";import"./Alert.d722c515.js";import"./createWithBsPrefix.8ba5f7eb.js";import"./index.35ce73ec.js";import"./isArray.c66fbb5a.js";import"./getEndpoint.bb7ded34.js";import"./Link.1ad1c99a.js";import"./Typography.58720d37.js";import"./Button.52cb13cc.js";import"./ButtonBase.4576d1dd.js";import"./sqlFunctions.d75b690e.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.45c2d0f9.js";import"./useGetInfoFromIds.018ad2a0.js";import"./use-deep-compare-effect.esm.840878a7.js";import"./uniq.460f3110.js";import"./_baseSlice.50189bc5.js";import"./toInteger.a01bda2a.js";import"./isSymbol.15cce469.js";import"./_cacheHas.9af2c547.js";import"./without.b3a8be93.js";import"./uniqueId.65424154.js";import"./_Set.3fad48f0.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.798c6533.js";import"./queryUtils.3da00fc0.js";import"./useInfiniteQuery.9f4576d7.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.352b0762.js";import"./_baseClone.423855ff.js";import"./_getTag.a95b6cf9.js";import"./NoSearchResults.c2856a97.js";import"./NoData.376b9d1a.js";import"./unCamelCase.07e38083.js";import"./useEntity.1cb2c62f.js";import"./useMutation.8573a168.js";import"./pick.1b052ae0.js";import"./isEqual.bb3cc7d6.js";import"./ElementWithTooltip.bfc6e6c7.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.6f3c0dc5.js";import"./Tooltip.5bd16401.js";import"./createSvgIcon.13613b84.js";import"./InfoOutlined.419ebcb9.js";import"./Dropdown.3950f75a.js";import"./usePrevious.93022d6c.js";import"./contains.a3df61d1.js";import"./usePopperMarginModifiers.cc29aef6.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.003ebaf2.js";import"./RadioGroup.fc17b5de.js";import"./moment.a565bb48.js";import"./RangeSlider.8c1e8ecd.js";import"./factory.6b3571c3.js";import"./react-sizeme.e0d723cf.js";import"./Skeleton.cb3b50d8.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.9279b0dc.js";import"./Modal.f3959c32.js";import"./inheritsLoose.9d3c5159.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.773b3eb8.js";import"./SelectionCriteriaPill.5e112945.js";import"./Close.eea7c9a0.js";import"./react-select.esm.b673df8f.js";import"./Select-54ac8379.esm.aa8b90fd.js";import"./CustomSelectWidget.785a5201.js";import"./index.browser.4632bf29.js";import"./UserCard.91d6c8b2.js";import"./IconCopy.2b591d5d.js";import"./SkeletonTable.0cb13ee1.js";import"./times.55c175b4.js";import"./ToastMessage.e5302c4a.js";import"./FullWidthAlert.b9821286.js";import"./Overlay.dee00487.js";import"./WarningModal.473de042.js";import"./react-intersection-observer.esm.7066a935.js";import"./DateFormatter.7f5d1a7b.js";import"./EntityIcon.bcb8e0ae.js";import"./core.esm.eb80af35.js";import"./isEmpty.4e08ba4c.js";import"./union.dbaa5d43.js";import"./isString.766ccc31.js";import"./useGetDownloadListStatistics.06536ac9.js";import"./QueryCount.6a12394d.js";import"./useGetAccessRequirement.08874b7b.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.a6f8dc7b.js";import"./UserSearchBox.059f19fc.js";import"./UserOrTeamBadge.d6cd9cf2.js";import"./EntityLink.8ccdc8d6.js";import"./SynapseVideo.f0d286ac.js";import"./IconList.0aae24ee.js";import"./UserCardList.e01834cb.js";const pt={parameters:{storySource:{source:`import React from 'react'
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
