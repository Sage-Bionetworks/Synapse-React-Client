import{H as o}from"./CardContainerLogic.97af0146.js";import{j as r}from"./jsx-runtime.02a28547.js";import"./index.4fdef5f4.js";import"./index.a309e2be.js";import"./iframe.0b294b31.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.47e26dba.js";import"./styled.2f449268.js";import"./utils.34aadcdd.js";import"./TransitionGroupContext.70688128.js";import"./Alert.3df3eb36.js";import"./createWithBsPrefix.c66fa874.js";import"./index.35ce73ec.js";import"./isArray.46d1af5d.js";import"./getEndpoint.bb7ded34.js";import"./Link.4b81c1ee.js";import"./Typography.67a640f4.js";import"./Button.1972b2d6.js";import"./ButtonBase.9cc6b40c.js";import"./sqlFunctions.ead23534.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.d8464a8f.js";import"./useGetInfoFromIds.258331ba.js";import"./use-deep-compare-effect.esm.7ded1864.js";import"./uniq.69f3520c.js";import"./_baseSlice.50189bc5.js";import"./toInteger.d773cbc0.js";import"./isSymbol.f23d6818.js";import"./_cacheHas.2b87484d.js";import"./without.a4daf102.js";import"./uniqueId.77032a6a.js";import"./_Set.323c8e8c.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.bff1bb1e.js";import"./queryUtils.7f349eb5.js";import"./useInfiniteQuery.47c688b2.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ab339cb4.js";import"./_baseClone.be7945a8.js";import"./_getTag.eceaa81f.js";import"./NoSearchResults.3298bc25.js";import"./NoData.aba686a4.js";import"./unCamelCase.07e38083.js";import"./useEntity.518b6229.js";import"./useMutation.76b94172.js";import"./pick.ae4dc1a6.js";import"./isEqual.a8d1bf93.js";import"./ElementWithTooltip.a41fbda5.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.19fd41bf.js";import"./Tooltip.edd9e9f0.js";import"./createSvgIcon.d569702c.js";import"./InfoOutlined.88356fd8.js";import"./Dropdown.c4adefef.js";import"./usePrevious.769406c5.js";import"./contains.81250605.js";import"./usePopperMarginModifiers.129c8d3b.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.cf382583.js";import"./RadioGroup.b47f6073.js";import"./moment.a565bb48.js";import"./RangeSlider.4e835942.js";import"./factory.6b033540.js";import"./react-sizeme.b9df939a.js";import"./Skeleton.441b86fc.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.5743cf69.js";import"./Modal.a86dbf9d.js";import"./inheritsLoose.d59fe2ec.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.030a4d07.js";import"./SelectionCriteriaPill.e9c5356b.js";import"./Close.18e94b90.js";import"./react-select.esm.79446879.js";import"./Select-54ac8379.esm.0973ae43.js";import"./CustomSelectWidget.d7e54740.js";import"./index.browser.f5189fc5.js";import"./UserCard.8e05b9f1.js";import"./IconCopy.4f34e504.js";import"./SkeletonTable.71120aff.js";import"./times.0912663f.js";import"./ToastMessage.a8e621dc.js";import"./FullWidthAlert.4f5282fe.js";import"./Overlay.f4a71f57.js";import"./WarningModal.e3204aa1.js";import"./react-intersection-observer.esm.15c9b8c9.js";import"./DateFormatter.aa2aa69b.js";import"./EntityIcon.2959aa7e.js";import"./core.esm.181bea6f.js";import"./isEmpty.796beee9.js";import"./union.b8f595c3.js";import"./isString.12e1a271.js";import"./useGetDownloadListStatistics.5a7566b6.js";import"./QueryCount.5c6cac7e.js";import"./useGetAccessRequirement.98d533d9.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.b1fb6521.js";import"./UserSearchBox.d6476648.js";import"./UserOrTeamBadge.dfa3bce5.js";import"./EntityLink.763851bf.js";import"./SynapseVideo.7ac2064d.js";import"./IconList.8e64c16b.js";import"./UserCardList.352af1af.js";const it={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HelpPopover } from './HelpPopover'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/HelpPopover',
  component: HelpPopover,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HelpPopover>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HelpPopover> = args => (
  <HelpPopover {...args} />
)

export const HelpPopoverDemo = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelpPopoverDemo.args = {
  markdownText:
    'Help that supports _rendering_ basic **Markdown**. If a helpUrl is provided then a "More info" button will be available.',
  helpUrl: 'https://help.synapse.org/',
  placement: 'right',
}
`,locationsMap:{"help-popover-demo":{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"UI/HelpPopover",component:o,argTypes:{}},p=t=>r(o,{...t}),i=p.bind({});i.args={markdownText:'Help that supports _rendering_ basic **Markdown**. If a helpUrl is provided then a "More info" button will be available.',helpUrl:"https://help.synapse.org/",placement:"right"};const mt=["HelpPopoverDemo"];export{i as HelpPopoverDemo,mt as __namedExportsOrder,it as default};
