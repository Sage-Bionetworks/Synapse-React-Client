import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { Button } from 'react-bootstrap'

/**
 * Skeleton of a bootstrap button. The `placeholderText` prompt can be used to customise the length to roughly match the existing button
 */
export const SkeletonButton: React.FC<{ placeholderText?: string }> = ({
  placeholderText = 'Placeholder',
}) => {
  return (
    <Skeleton variant="rect">
      <Button>{placeholderText}</Button>
    </Skeleton>
  )
}
