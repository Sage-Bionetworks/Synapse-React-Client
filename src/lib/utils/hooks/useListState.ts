import { useState } from 'react'

export interface ListStateReturn<T> {
  list: T[]
  handleListChange: (index: number) => (changedValue: T) => void
  handleListRemove: (index: number) => () => void
  handleListPush: () => (newItem: T) => void
}
/**
 * This is used when a component's state uses a List<T> and has child components
 * that are responsible for creating, updating, deleting the objects within the List.
 *
 *
 * This should be used in conjunction with list.map() to generate child elements.
 * calling any of the handle*() functions will generate a callback function for
 * the child to use to perform an item change, push, or removal on the list.
 * For Example:
 *
 * ```
 * export const ParentComponent: React.FunctionComponent<ParentComponentProps> = ({
 *  prop1,
 *  prop2,
 * }) => {
 *    const {myList, handleMyListChange, handleMyListPush, handleMyListRemove} = useListState<string>(['asdf','qwerty'])
 *
 *    return (
 *      <div>
 *        myList.map((item, index) => {
            return <ChildComponent
              value={item}
              onChange={handleMyListChange(index)}
              onPush={handleMyListPush()}
              onRemove={handleMyListRemove(index)}
            />
          })
 *      </div>
 *    )
 *
 * }
 * ```
 *
 *
 * @param initialState The initial value of the array
 * @returns an ListStateReturn object containing the useState value and additonal change/remove/push hnndlers. Use object destructuring
 */
export const useListState = <T>(initialState: T[]): ListStateReturn<T> => {
  const [list, setList] = useState(initialState)

  const handleListChange = (index: number) => (changedValue: T): void => {
    const modifiedList = [...list]
    modifiedList[index] = changedValue
    setList(modifiedList)
  }

  const handleListRemove = (index: number) => (): void => {
    const modifiedList = list.filter((value, arr_index) => index !== arr_index)
    setList(modifiedList)
  }

  const handleListPush = () => (newItem: T): void => {
    const modifiedList = [...list]
    modifiedList.push(newItem)
    setList(modifiedList)
  }
  return { list, handleListChange, handleListRemove, handleListPush }
}
