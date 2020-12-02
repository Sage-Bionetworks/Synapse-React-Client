import React, { ReactElement, useState } from 'react'
// import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import IdLink from './IdLink'

interface ItemListProps {
  list?: string[]
  parent?: string
}

function ItemList({ list, parent }: ItemListProps): ReactElement {
  const initialLimit = 7
  const listLength = list ? list.length : 0
  const [listLimit, setListLimit] = useState(
    listLength < initialLimit ? listLength : initialLimit,
  )
  const items = list
    ? list.map((id: string, index: number) => (
        <li key={`itemList-dd${index}`}>
          <IdLink id={id} isParent={parent === id} />
        </li>
      ))
    : []

  return items.length > 0 ? (
    <>
      <ul className={'itemList-dd'}>{items.slice(0, listLimit)}</ul>
      {listLimit < listLength && (
        <>
          <a
            className={`link-more`}
            href={`#show ${Math.min(
              listLength - listLimit,
              initialLimit,
            )} more`}
            onClick={(
              event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
            ) => {
              event.preventDefault()
              setListLimit(listLimit + initialLimit)
            }}
            title={`Show ${Math.min(
              listLength - listLimit,
              initialLimit,
            )} more (${listLength} total)`}
          >{`Show more...`}</a>
          <a
            className={`link-all`}
            href={`#show all ${listLength}`}
            onClick={(
              event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
            ) => {
              event.preventDefault()
              setListLimit(listLength)
            }}
            title={`Show all ${listLength}`}
          >{`Show all...`}</a>
        </>
      )}
    </>
  ) : (
    <></>
  )
}

export default ItemList
