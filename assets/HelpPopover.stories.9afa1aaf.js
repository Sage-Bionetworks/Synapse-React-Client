import{H as o}from"./CardContainerLogic.0110c040.js";import{j as r}from"./jsx-runtime.a1d381ad.js";import"./index.c07b435e.js";import"./index.9f535dbb.js";import"./iframe.81590c6e.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.ebc3484d.js";import"./index.57d09176.js";import"./withStyles.697310ee.js";import"./utils.6cb5795e.js";import"./Alert.ae374429.js";import"./createWithBsPrefix.b8918cd7.js";import"./index.35ce73ec.js";import"./isArray.cfd918dc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.0314c6b1.js";import"./sqlFunctions.805519ce.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.bd2e15fe.js";import"./useGetInfoFromIds.abdb800c.js";import"./use-deep-compare-effect.esm.9ef0fe73.js";import"./uniq.4ff00730.js";import"./_baseSlice.50189bc5.js";import"./toInteger.6a5fcd60.js";import"./isSymbol.9201fb1c.js";import"./_cacheHas.e93d1118.js";import"./without.325b87a0.js";import"./uniqueId.cac1ac91.js";import"./_Set.3c924fe3.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./Tooltip.881da3c6.js";import"./createSvgIcon.8505b138.js";import"./makeStyles.2b248e78.js";import"./FacetNav.bcb76897.js";import"./queryUtils.f36c9064.js";import"./useInfiniteQuery.3fef2ad0.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.53ae917a.js";import"./_baseClone.8224a7e6.js";import"./_getTag.25ac8552.js";import"./NoSearchResults.c61448a7.js";import"./NoData.ebfea370.js";import"./unCamelCase.07e38083.js";import"./useEntity.ca1adaf1.js";import"./useMutation.0c99a4c1.js";import"./pick.13f2ab52.js";import"./isEqual.fddce197.js";import"./ElementWithTooltip.4022e237.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.61de10c1.js";import"./InfoOutlined.c00dd9c7.js";import"./Dropdown.20321050.js";import"./usePrevious.d92e7738.js";import"./contains.f621b86d.js";import"./usePopperMarginModifiers.7bfa5684.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.e50ea0fd.js";import"./RadioGroup.23c1b7a0.js";import"./moment.a565bb48.js";import"./RangeSlider.5627c006.js";import"./factory.772ba702.js";import"./react-sizeme.756b4b38.js";import"./Skeleton.00fa93e7.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.dc2de5f4.js";import"./Typography.1abf3c12.js";import"./Modal.f3a6a5d9.js";import"./inheritsLoose.bb535a25.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.f4d59a83.js";import"./SelectionCriteriaPill.f6044d63.js";import"./Close.3b7d3bee.js";import"./react-select.esm.918aabd4.js";import"./Select-54ac8379.esm.bfe16fe6.js";import"./CustomSelectWidget.bf7014d1.js";import"./index.browser.033cf97b.js";import"./UserCard.0e32065f.js";import"./IconCopy.9e4bc935.js";import"./SkeletonTable.eecd7a8b.js";import"./times.3a1a85cc.js";import"./ToastMessage.204b2104.js";import"./FullWidthAlert.9cc3b3c7.js";import"./Overlay.ba0f781a.js";import"./WarningModal.3103bc16.js";import"./react-intersection-observer.esm.037889e1.js";import"./DateFormatter.83954225.js";import"./EntityIcon.28fea333.js";import"./core.esm.ae41dce5.js";import"./isEmpty.3ee393d3.js";import"./union.1a7f9980.js";import"./isString.a75165dc.js";import"./useGetDownloadListStatistics.4b65d66f.js";import"./QueryCount.3c131b04.js";import"./useGetAccessRequirement.b1289395.js";import"./ManagedACTAccessRequirementStatus.85df5b7f.js";import"./FileUpload.beef5d48.js";import"./UserSearchBox.aaaa86a0.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.8b869895.js";import"./EntityLink.c3a48de1.js";import"./SynapseVideo.e60d111b.js";import"./IconList.02a063f1.js";import"./UserCardList.56a389de.js";const it={parameters:{storySource:{source:`import React from 'react'
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
