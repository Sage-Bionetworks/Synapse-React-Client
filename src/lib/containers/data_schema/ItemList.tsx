import React, { ReactElement, useState } from 'react'
import { Button } from 'react-bootstrap'
import IdLink from './IdLink'
import getTestIDs from './utils/getTestIds'

export const TEST_IDS = getTestIDs()

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
      <ul className={'itemList-dd'} data-testid={TEST_IDS.list}>
        {items.slice(0, listLimit)}
      </ul>
      {listLimit < listLength && (
        <>
          {listLength - listLimit > initialLimit && (
            <Button
              className={`btn-more`}
              data-testid={TEST_IDS.viewMore}
              onClick={() => setListLimit(listLimit + initialLimit)}
              title={`Show ${Math.min(
                listLength - listLimit,
                initialLimit,
              )} more (${listLength} total)`}
            >{`Show ${Math.min(
              listLength - listLimit,
              initialLimit,
            )} more`}</Button>
          )}
          <Button
            className={`btn-all`}
            data-testid={TEST_IDS.viewAll}
            onClick={() => setListLimit(listLength)}
            title={`Show all ${listLength}`}
          >{`Show all ${listLength}`}</Button>
        </>
      )}
    </>
  ) : (
    <></>
  )
}

export default ItemList
