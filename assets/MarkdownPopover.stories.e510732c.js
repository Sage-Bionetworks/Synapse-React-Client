import{M as i}from"./CardContainerLogic.4ac1f764.js";import{j as t}from"./jsx-runtime.41b63a18.js";import{B as n}from"./Button.d66b1296.js";import"./index.95357afa.js";import"./index.fb0baffa.js";import"./iframe.1b6f62a5.js";import"./SynapseConstants.b6aa8bf5.js";import"./withStyles.bf9f4c29.js";import"./utils.8566b4fb.js";import"./Alert.2d23c399.js";import"./index.57d09176.js";import"./createWithBsPrefix.4703bb5e.js";import"./index.35ce73ec.js";import"./isArray.9516ce6b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d8df91d8.js";import"./sqlFunctions.be6fa141.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.425a36f4.js";import"./useGetInfoFromIds.440675b0.js";import"./use-deep-compare-effect.esm.89e0b2bf.js";import"./uniq.d1401db4.js";import"./_baseSlice.50189bc5.js";import"./toInteger.d13e0983.js";import"./isSymbol.fc7173a4.js";import"./_cacheHas.fa44402d.js";import"./without.b74e3938.js";import"./uniqueId.7743d6ef.js";import"./_Set.cf46f4c7.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./Tooltip.50b065de.js";import"./createSvgIcon.3e6e5789.js";import"./makeStyles.3de8ae0d.js";import"./FacetNav.93a63650.js";import"./queryUtils.d3ddbdc4.js";import"./useInfiniteQuery.afb80f09.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.972a710a.js";import"./_baseClone.80c04804.js";import"./_getTag.5b9f1be5.js";import"./NoSearchResults.f5a12ecf.js";import"./NoData.33ecea8a.js";import"./unCamelCase.07e38083.js";import"./useEntity.f187f17a.js";import"./useMutation.75197862.js";import"./pick.d71ecd11.js";import"./isEqual.c98a7e38.js";import"./ElementWithTooltip.a20fbba5.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.83d367d8.js";import"./InfoOutlined.62b2381c.js";import"./Dropdown.1ea1e7ae.js";import"./usePrevious.b2a56b43.js";import"./contains.35f158bd.js";import"./usePopperMarginModifiers.3543b56f.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.f849d68d.js";import"./RadioGroup.42f82ea0.js";import"./moment.a565bb48.js";import"./RangeSlider.a2b8db98.js";import"./factory.4d558efc.js";import"./react-sizeme.6754aec4.js";import"./Skeleton.2b632001.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.8b1b27b2.js";import"./Typography.dc699c3a.js";import"./Modal.493b8aac.js";import"./inheritsLoose.f9ee6081.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.054fdf82.js";import"./SelectionCriteriaPill.5fe230c2.js";import"./Close.a124524c.js";import"./react-select.esm.d77ac0dd.js";import"./Select-54ac8379.esm.a8e92046.js";import"./CustomSelectWidget.95995941.js";import"./index.browser.d13d238d.js";import"./UserCard.7b85d80c.js";import"./IconCopy.6ff102ac.js";import"./SkeletonTable.5fcf404b.js";import"./times.d1737d14.js";import"./ToastMessage.3d8ba4da.js";import"./FullWidthAlert.5cb2b687.js";import"./Overlay.b83155ef.js";import"./WarningModal.460ec494.js";import"./react-intersection-observer.esm.51a65a7f.js";import"./DateFormatter.ae20191a.js";import"./EntityIcon.d51583e3.js";import"./core.esm.4412e42d.js";import"./isEmpty.7f33a473.js";import"./union.b1c15149.js";import"./isString.eb351700.js";import"./useGetDownloadListStatistics.d1d39b56.js";import"./QueryCount.d74d4572.js";import"./useGetAccessRequirement.0e54bbee.js";import"./ManagedACTAccessRequirementStatus.e6c92b93.js";import"./FileUpload.e43615b9.js";import"./UserSearchBox.084d038d.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.b8080351.js";import"./EntityLink.e671807d.js";import"./SynapseVideo.1efe460d.js";import"./IconList.f6f41d07.js";import"./UserCardList.43b2352c.js";const pt={parameters:{storySource:{source:`import React from 'react'
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
