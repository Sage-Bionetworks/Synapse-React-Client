import React from 'react'
import {
  Fade,
  makeStyles,
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from '@material-ui/core'

export type TooltipProps = MuiTooltipProps

const useTooltipStyle = makeStyles(theme => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: '14px',
    borderRadius: '2px',
  },
}))

export default function Tooltip(props: TooltipProps) {
  const classes = useTooltipStyle()
  return (
    <MuiTooltip classes={classes} arrow TransitionComponent={Fade} {...props}>
      {props.children}
    </MuiTooltip>
  )
}
