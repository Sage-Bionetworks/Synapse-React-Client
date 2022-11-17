import{M as i}from"./CardContainerLogic.d77ddb9d.js";import{j as t}from"./jsx-runtime.24304d9c.js";import{B as n}from"./Button.505c8034.js";import"./index.dc703903.js";import"./index.674f08c5.js";import"./iframe.b3940f38.js";import"./SynapseConstants.b6aa8bf5.js";import"./styled.4d5a18a7.js";import"./utils.867613ea.js";import"./TransitionGroupContext.49f32f92.js";import"./Alert.ec6d4a4e.js";import"./createWithBsPrefix.ee70c17d.js";import"./index.35ce73ec.js";import"./isArray.9daed148.js";import"./getEndpoint.bb7ded34.js";import"./Link.3aacec77.js";import"./Typography.7f52bb2e.js";import"./Button.8a732419.js";import"./ButtonBase.6b005451.js";import"./sqlFunctions.1dfe61b0.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.afe7e184.js";import"./useGetInfoFromIds.5916050a.js";import"./use-deep-compare-effect.esm.750e65e1.js";import"./uniq.4b527a5f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.6ad35d4b.js";import"./isSymbol.63d43715.js";import"./_cacheHas.c4b82072.js";import"./without.3c046ffa.js";import"./uniqueId.05165c8c.js";import"./_Set.a84dd9f9.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.9aa68480.js";import"./queryUtils.5da66a42.js";import"./useInfiniteQuery.f11f30ad.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.1399766e.js";import"./_baseClone.e4e4da47.js";import"./_getTag.744b3023.js";import"./NoSearchResults.f2796746.js";import"./NoData.5ef80598.js";import"./unCamelCase.07e38083.js";import"./useEntity.e2c763ab.js";import"./useMutation.0de7594d.js";import"./pick.a2391c74.js";import"./isEqual.8fefd1e2.js";import"./ElementWithTooltip.8d389fa2.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.cb1ea6d7.js";import"./Tooltip.5f9b84c2.js";import"./createSvgIcon.54a87752.js";import"./InfoOutlined.fc47286d.js";import"./Dropdown.78a48611.js";import"./usePrevious.c5435824.js";import"./contains.940b0fb3.js";import"./usePopperMarginModifiers.3653fc2d.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.051d39f0.js";import"./RadioGroup.a0ade424.js";import"./moment.a565bb48.js";import"./RangeSlider.62395d24.js";import"./factory.b227aa5c.js";import"./react-sizeme.b08b9bd7.js";import"./Skeleton.9c115467.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.f652220b.js";import"./Modal.bbbc0f4b.js";import"./inheritsLoose.16f7de6a.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.df4b368b.js";import"./SelectionCriteriaPill.37fae84f.js";import"./Close.89a2a211.js";import"./react-select.esm.95d762ee.js";import"./Select-54ac8379.esm.59c2c14c.js";import"./CustomSelectWidget.84eeff77.js";import"./index.browser.3fa12a57.js";import"./UserCard.cf4046aa.js";import"./IconCopy.8487c5a8.js";import"./SkeletonTable.3c0636d8.js";import"./times.afc8b914.js";import"./ToastMessage.82d4ebc5.js";import"./FullWidthAlert.ca6203e3.js";import"./Overlay.051bfe68.js";import"./WarningModal.8ca8ccad.js";import"./react-intersection-observer.esm.f3a5827a.js";import"./DateFormatter.402c75ba.js";import"./EntityIcon.93819522.js";import"./core.esm.0945b8aa.js";import"./isEmpty.227272c7.js";import"./union.832e5baa.js";import"./isString.420ca797.js";import"./useGetDownloadListStatistics.59e258f3.js";import"./QueryCount.9efc16b7.js";import"./useGetAccessRequirement.2672c514.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.c05bd529.js";import"./UserSearchBox.d583ca5c.js";import"./UserOrTeamBadge.d9817f5b.js";import"./EntityLink.d60e4d09.js";import"./SynapseVideo.065d2b06.js";import"./IconList.0411cd28.js";import"./UserCardList.e9c3cf92.js";const pt={parameters:{storySource:{source:`import React from 'react'
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
