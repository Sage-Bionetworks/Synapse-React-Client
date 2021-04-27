import HelpOutline from '@material-ui/icons/HelpOutline'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import React from 'react'
import MarkdownIt from 'markdown-it'

type HelpButtonPopoverProps = {
  contentMarkdown: string
}

export const HelpButtonPopover: React.FunctionComponent<HelpButtonPopoverProps> = ({
  contentMarkdown,
}: HelpButtonPopoverProps) => {
  const content = new MarkdownIt().render(contentMarkdown)

  const popover = (
    <div className="bootstrap-4-backport">
      <Popover id="help-popover" placement="bottom-start">
        <Popover.Content
          dangerouslySetInnerHTML={{ __html: content }}
        ></Popover.Content>
      </Popover>
    </div>
  )

  return (
    <span className="HelpButton bootstrap-4-backport">
      <OverlayTrigger
        trigger="click"
        placement="bottom-start" // Loading both BS3 and BS4 make placement tricky, so change this with care.
        overlay={popover}
      >
        <HelpOutline style={{ cursor: 'pointer' }} />
      </OverlayTrigger>
    </span>
  )
}
