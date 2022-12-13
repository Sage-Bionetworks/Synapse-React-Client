import * as React from 'react'
import { Stack, Tooltip, Typography, TypographyProps } from '@mui/material'
import IconSvg from './IconSvg'

export type CopyToClipboardStringProps = {
  value: string
  typographyVariant?: TypographyProps['variant']
}

/**
 * Component that holds a large string in a readonly <input> to be copied to the user's clipboard when clicked.
 * This component should only be used when the full length of the string value to copy does not necessarily need to be
 * seen by the user. This component was adapted from the email address copy to clipboard functionality in UserCardMedium.
 * For smaller/inline strings, look at UserCardMedium functionality for displaying the value in a <p> tag instead of a
 * readonly <input> tag.
 */
export function CopyToClipboardString(props: CopyToClipboardStringProps) {
  const { value, typographyVariant = 'smallText1' } = props
  const [tooltipText, setTooltipText] = React.useState('Copy to clipboard')

  const copyToClipboard = (event: React.SyntheticEvent) => {
    event.preventDefault()

    // use the Clipboard API
    // https://caniuse.com/mdn-api_clipboard_writetext
    navigator.clipboard.writeText(value).then(() => {
      setTooltipText('Copied to clipboard')
    })
  }

  return (
    <Stack
      direction={'row'}
      alignItems="center"
      spacing={0.5}
      sx={{ display: 'inline-flex' }}
    >
      <Typography component={'span'} variant={typographyVariant}>
        {value}
      </Typography>
      <Tooltip title={tooltipText} placement={'top'}>
        <span
          role="button"
          style={{ cursor: 'pointer' }}
          onClick={copyToClipboard}
        >
          <IconSvg icon="contentCopy" wrap={false} sx={{ width: '16px' }} />
        </span>
      </Tooltip>
    </Stack>
  )
}

export default CopyToClipboardString
