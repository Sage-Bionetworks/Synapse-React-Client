import React, { useEffect, useState } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { times } from 'lodash-es'

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

type SkeletonTableProps = {
  numRows?: number
  numCols?: number
  rowHeight?: string
  className?: string
}

/**
 * Skeleton component designed to mimic a table with an arbitrary number of rows and columns.
 *
 * Implemented using CSS grid.
 */
export const SkeletonTable: React.FC<SkeletonTableProps> = ({
  numRows = 5,
  numCols = 2,
  rowHeight,
  className,
}) => {
  const [skeletons, setSkeletons] = useState<JSX.Element[]>([])

  useEffect(() => {
    const elements: JSX.Element[] = []
    times(numRows * numCols, () => {
      elements.push(
        <>
          <Skeleton
            height={rowHeight}
            width={`${getRandomInt(35, 75)}%`}
          ></Skeleton>
        </>,
      )
    })
    setSkeletons(elements)
  }, [numRows, numCols, rowHeight])

  return (
    <div
      className={className}
      style={{ display: 'grid', gridTemplateColumns: `auto `.repeat(numCols) }}
    >
      {skeletons}
    </div>
  )
}
