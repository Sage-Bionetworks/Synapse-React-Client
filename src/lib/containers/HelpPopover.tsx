import React from 'react'
import { MarkdownPopover } from './MarkdownPopover'
import { Placement } from 'react-bootstrap/esm/Overlay'
import { HelpOutlineTwoTone } from '@material-ui/icons'

export type HelpPopoverProps = {
  markdownText: string
  helpUrl?: string
  placement?: Placement
  showCloseButton?: boolean
  style?: React.CSSProperties
}

export const HelpPopover: React.FunctionComponent<HelpPopoverProps> = ({
  markdownText,
  helpUrl,
  placement = "bottom",
  showCloseButton = true,
  style = {},
}: HelpPopoverProps) => {
  
  const actionButtonConfig = helpUrl ? {
    content: <>More info</>,
    closePopoverOnClick: true,
    onClick: () => window.open(helpUrl, '_blank'),
    variant: 'primary'
  } : undefined
  return (
    <>
      <MarkdownPopover
        contentProps={{ markdown: markdownText }}
        placement={placement}
        actionButton={ actionButtonConfig }
        showCloseButton={showCloseButton}
        strategy="fixed"
        style={{ maxWidth: '350px' }}
      >
        <HelpOutlineTwoTone
          className="HelpButton"
          style={style}
        />
      </MarkdownPopover>
    </>
  )
}
