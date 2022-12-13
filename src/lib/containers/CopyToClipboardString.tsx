import * as React from 'react'
import { Stack, Tooltip, Typography, TypographyProps } from '@mui/material'
import IconSvg from './IconSvg'

export type CopyToClipboardStringProps = {
  value: string
  typographyVariant?: TypographyProps['variant']
}

/**
 * Displays a string and a "Copy to Clipboard" icon, that, when clicked, will copy the contents of the string to the clipboard.
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
