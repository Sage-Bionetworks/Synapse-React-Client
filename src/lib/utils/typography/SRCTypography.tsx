import { TypographyProps, Typography } from '@material-ui/core'
import classNames from 'classnames'
import React, { ElementType, FC } from 'react'
import useSRCTypographyStyle from './SRCTypography.styles'

interface ISRCTypography extends Omit<TypographyProps, 'variant'> {
  variant:
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'body1'
  | 'body2'
  | 'breadcrumb1'
  | 'breadcrumb2'
  | 'smallText1'
  | 'smallText2'
  | 'smallLink'
  | 'label'
  | 'buttonLink'
  | 'hintText'
  component?: ElementType
}

const SRCTypography: FC<ISRCTypography> = (props) => {
  const classes = useSRCTypographyStyle()
  const isCustom = Object.keys(classes).indexOf(props.variant) > -1
  return (
    <Typography
      {...props}
      variant={isCustom ? undefined : (props.variant as any)}
      className={
        isCustom
          ? classNames(classes[props.variant], props.className)
          : props.className
      }
    >
      {props.children}
    </Typography>
  )
}

export default SRCTypography