import { TypographyProps, Typography as MUITypography } from '@material-ui/core'
import classNames from 'classnames'
import React, { ElementType, FC } from 'react'
import useTypographyStyle from './Typography.styles'

interface ITypography extends Omit<TypographyProps, 'variant'> {
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

const Typography: FC<ITypography> = (props) => {
  const classes = useTypographyStyle()
  const isCustom = Object.keys(classes).indexOf(props.variant) > -1
  return (
    <MUITypography
      {...props}
      variant={isCustom ? undefined : (props.variant as any)}
      className={
        isCustom
          ? classNames(classes[props.variant], props.className)
          : props.className
      }
    >
      {props.children}
    </MUITypography>
  )
}

export default Typography