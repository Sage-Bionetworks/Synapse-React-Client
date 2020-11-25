import React, { ReactElement } from 'react'
import IdLink from './IdLink'

interface ItemListProps {
  list?: string[]
  parent?: string
}

function ItemList({ list, parent }: ItemListProps): ReactElement {
  return list && list.length > 0 ? (
    <ul className={'itemList-dd'}>
      {list.map((item: string, index: number) => (
        <li key={`itemList-dd${index}`}>
          <IdLink id={item} parent={parent} />
        </li>
      ))}
    </ul>
  ) : (
    <></>
  )
}

export default ItemList
