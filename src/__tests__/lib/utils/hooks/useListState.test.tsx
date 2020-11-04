import { useListState } from '../../../../lib/utils/hooks/useListState'
import React from 'react'
import { mount } from 'enzyme'

type UserListStateWrapperProps = {
  initialValue: string[]
}

const UseListStateWrapper: React.FunctionComponent<UserListStateWrapperProps> = ({
  initialValue,
}) => {
  const {
    list,
    handleListRemove,
    handleListChange,
    appendToList,
  } = useListState(initialValue)
  return (
    <div>
      <ul>
        {list.map((el, index) => (
          <li key={el}>
            <input
              value={el}
              onChange={event => handleListChange(index)(event.target.value)}
            />
            <button
              className={'remove-' + index}
              onClick={handleListRemove(index)}
            >
              remove + {el}
            </button>
          </li>
        ))}
      </ul>
      <button className="add" onClick={() => appendToList('new value')}>
        add value
      </button>
    </div>
  )
}

describe('test useListState()', () => {
  const initialList = ['asdf', 'qwerty']

  it('append value', () => {
    const wrapper = mount(<UseListStateWrapper initialValue={initialList} />)
    expect(wrapper.find('ul').children()).toHaveLength(initialList.length)

    wrapper.find('.add').simulate('click')
    expect(wrapper.find('ul').children()).toHaveLength(initialList.length + 1)
    expect(
      wrapper.find('ul').childAt(2).find(HTMLInputElement).prop('value'),
    ).toBe('new value')
  })

  it('remove value', () => {
    const wrapper = mount(<UseListStateWrapper initialValue={initialList} />)
    expect(wrapper.find('ul').children()).toHaveLength(initialList.length)

    wrapper.find('.remove-0').simulate('click')
    expect(wrapper.find('ul').children()).toHaveLength(initialList.length - 1)
    expect(
      wrapper.find('ul').childAt(0).find(HTMLInputElement).prop('value'),
    ).toBe('qwerty')
  })

  it('update value', () => {
    const wrapper = mount(<UseListStateWrapper initialValue={initialList} />)
    expect(wrapper.find('ul').children()).toHaveLength(initialList.length)

    wrapper
      .find('ul')
      .childAt(1)
      .find(HTMLInputElement)
      .simulate('change', { target: { value: 'changed value' } })
    expect(wrapper.find('ul').children()).toHaveLength(initialList.length)
    expect(
      wrapper.find('ul').childAt(1).find(HTMLInputElement).prop('value'),
    ).toBe('changed value')
  })
})
