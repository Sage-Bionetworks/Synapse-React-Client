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
    // gray-700
    color: '#878E95',
  },
  tooltip: {
    // gray-700
    backgroundColor: '#878E95',
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
