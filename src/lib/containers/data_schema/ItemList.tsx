import React, { ReactElement } from 'react'
// import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import IdLink from './IdLink'

interface ItemListProps {
  list?: string[]
  parent?: string
}

function ItemList({ list, parent }: ItemListProps): ReactElement {
  return list && list.length > 0 ? (
    <ul className={'itemList-dd'}>
      {list.map((id: string, index: number) => (
        <li key={`itemList-dd${index}`}>
          <IdLink id={id} isParent={parent === id} />
        </li>
      ))}
    </ul>
  ) : (
    <></>
  )
}

export default ItemList
