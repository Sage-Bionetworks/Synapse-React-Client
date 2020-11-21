import React, { ReactElement } from 'react'
import IdLink from './IdLink'

interface ItemListProps {
  list?: string[]
}

function ItemList({ list }: ItemListProps): ReactElement {
  return list && list.length > 0 ? (
    <ul className={'itemList-dd'}>
      {list.map((item: string, index: number) => (
        <li key={`itemList-dd${index}`}>
          <IdLink id={item} />
        </li>
      ))}
    </ul>
  ) : (
    <></>
  )
}

export default ItemList
