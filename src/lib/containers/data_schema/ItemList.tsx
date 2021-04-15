import React, { ReactElement, useState } from 'react'
import { Button } from 'react-bootstrap'
import IdLink from './IdLink'
import { LIST_LENGTH } from './constants'
import getTestIDs from './utils/getTestIds'

export const TEST_IDS = getTestIDs()

interface ItemListProps {
  list?: string[]
  parent?: string
}

function ItemList({ list, parent }: ItemListProps): ReactElement {
  const listLength = list ? list.length : 0
  const [listLimit, setListLimit] = useState(
    listLength < LIST_LENGTH ? listLength : LIST_LENGTH,
  )
  const items = list
    ? list.map((id: string, index: number) => (
        <li key={`itemList-dd${index}`} data-id={id}>
          <IdLink id={id} isParent={parent === id} />
        </li>
      ))
    : []

  return items.length > 0 ? (
    <>
      <ul className={'itemList-dd'} data-testid={TEST_IDS.list}>
        {items.slice(0, listLimit)}
      </ul>
      {listLength - listLimit > LIST_LENGTH && (
        <Button
          className={`btn-more`}
          data-testid={TEST_IDS.viewMore}
          onClick={() => setListLimit(listLimit + LIST_LENGTH)}
          title={`Show ${Math.min(
            listLength - listLimit,
            LIST_LENGTH,
          )} more (${listLength} total)`}
        >{`Show ${Math.min(listLength - listLimit, LIST_LENGTH)} more`}</Button>
      )}
      {listLimit > LIST_LENGTH && (
        <Button
          className={`btn-less`}
          data-testid={TEST_IDS.viewLess}
          onClick={() => setListLimit(LIST_LENGTH)}
          title={`Show less`}
        >{`Show less`}</Button>
      )}
      {listLimit < listLength && (
        <Button
          className={`btn-all`}
          data-testid={TEST_IDS.viewAll}
          onClick={() => setListLimit(listLength)}
          title={`Show all ${listLength}`}
        >{`Show all ${listLength}`}</Button>
      )}
    </>
  ) : (
    <></>
  )
}

export default ItemList
