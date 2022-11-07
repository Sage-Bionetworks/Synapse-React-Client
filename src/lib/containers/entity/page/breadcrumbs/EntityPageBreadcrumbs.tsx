import React from 'react'
import { Breadcrumbs, Link, SxProps, Typography } from '@mui/material'
import IconSvg from '../../../IconSvg'
import { truncateString } from '../../../../utils/functions/StringUtils'

type BreadcrumbItem = {
  /* The text to show in the breadcrumb item. Strings > 25 characters will be truncated */
  text: string
  /* Whether this item represents the current page. If true, this item will not have a link. Default false */
  current?: boolean
  /* Link for the item */
  href?: string
  /* Event handler fired when the link is clicked */
  onClick?: React.MouseEventHandler
}

type EntityPageBreadcrumbsProps = {
  items: BreadcrumbItem[]
}

const MAX_BREADCRUMB_LENGTH = 24

function BreadcrumbSeparator() {
  return <IconSvg icon="chevronRight" sx={{ color: 'grey.700' }} />
}

const breadcrumbStyle: SxProps = {
  marginTop: '0px',
  padding: '10px 20px',
  backgroundColor: 'grey.200',
}

const linkStyle: SxProps = {
  color: 'text.secondary',
  fontWeight: 400,
  letterSpacing: 0,
}

export default function EntityPageBreadcrumbs(
  props: EntityPageBreadcrumbsProps,
) {
  const { items } = props
  return (
    <Breadcrumbs
      separator={<BreadcrumbSeparator />}
      itemsBeforeCollapse={2}
      itemsAfterCollapse={2}
      sx={breadcrumbStyle}
    >
      {items.map((data, index) => {
        const displayedText = truncateString(data.text, MAX_BREADCRUMB_LENGTH)
        if (data.current) {
          return (
            <Typography key={index} variant={'breadcrumb1'}>
              {displayedText}
            </Typography>
          )
        }
        return (
          <Typography key={index} variant={'breadcrumb1'}>
            <Link
              key={index}
              href={data.href}
              onClick={data.onClick}
              underline="hover"
              sx={linkStyle}
            >
              {displayedText}
            </Link>
          </Typography>
        )
      })}
    </Breadcrumbs>
  )
}
