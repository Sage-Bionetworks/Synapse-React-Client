import React from 'react'
import MarkdownButton, { ButtonLinkWidgetParams } from './widget/MarkdownButton'
import MarkdownIDUReport, {
  MarkdownIDUReportProps,
} from './widget/MarkdownIDUReport'
import MarkdownSynapseImage, {
  ImageWidgetParams,
} from './widget/MarkdownSynapseImage'
import MarkdownSynapsePlot, {
  PlotWidgetParams,
} from './widget/MarkdownSynapsePlot'
import MarkdownSynapseTable, {
  MarkdownSynapseTableProps,
} from './widget/MarkdownSynapseTable'
import MarkdownTableOfContents from './widget/MarkdownTableOfContents'
import MarkdownUserBadge, {
  MarkdownUserBadgeProps,
} from './widget/MarkdownUserBadge'
import MarkdownVideo, { MarkdownVideoProps } from './widget/MarkdownVideo'

type ButtonLink = {
  widgetType: 'buttonlink'
  widgetParamsMapped: ButtonLinkWidgetParams
}

type Image = {
  widgetType: 'image'
  widgetParamsMapped: ImageWidgetParams
}

type Plot = {
  widgetType: 'plot'
  widgetParamsMapped: PlotWidgetParams
}

type TableOfContents = {
  widgetType: 'toc'
  widgetParamsMapped: never
}

type UserBadge = {
  widgetType: 'badge'
  widgetParamsMapped: MarkdownUserBadgeProps
}

type IDUReport = {
  widgetType: 'iduReport'
  widgetParamsMapped: MarkdownIDUReportProps
}

type Video = {
  widgetType: 'video' | 'vimeo' | 'youtube'
  widgetParamsMapped: MarkdownVideoProps
}

type SynapseTable = {
  widgetType: 'synapsetable'
  widgetParamsMapped: MarkdownSynapseTableProps
}

type MarkdownWidgetDefinition =
  | ButtonLink
  | Image
  | Plot
  | TableOfContents
  | UserBadge
  | IDUReport
  | Video
  | SynapseTable

export type MarkdownWidgetProps = MarkdownWidgetDefinition & {
  originalMarkup: string
}

export default function MarkdownWidget(props: MarkdownWidgetProps) {
  const {
    widgetType: name,
    widgetParamsMapped: descriptor,
    originalMarkup,
  } = props
  switch (name) {
    case 'buttonlink':
      return <MarkdownButton {...descriptor} />
    case 'image':
      return <MarkdownSynapseImage {...descriptor} />
    case 'plot':
      return <MarkdownSynapsePlot {...descriptor} />
    case 'toc':
      return <MarkdownTableOfContents originalMarkup={originalMarkup} />
    case 'badge':
      return <MarkdownUserBadge {...descriptor} />
    case 'iduReport':
      return <MarkdownIDUReport {...descriptor} />
    case 'video':
    case 'vimeo':
    case 'youtube':
      return <MarkdownVideo {...descriptor} />
    case 'synapsetable':
      return <MarkdownSynapseTable {...descriptor} />
    default:
      console.warn(`Unsupported widget: ${name}.`)
      return <></>
  }
}
