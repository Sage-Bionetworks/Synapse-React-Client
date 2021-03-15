import * as React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import EntityIdList, { EntityIdListProps } from '../../../lib/containers/EntityIdList'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

describe('EntityIdList: basic functionality', () => {

  const props:EntityIdListProps = {
    token: '123',
    entityIdList: ['syn123', 'syn345']
  }

  it('render direct download component without crashing', async () => {
    const wrapper = mount(<EntityIdList {...props} />)
    mockAllIsIntersecting(true);
    expect(wrapper).toBeDefined()
  })

  it('test', async () => {
    const setEntityNameList = jest.fn()
    const handleStateChange = jest.spyOn(React, "useState")
    handleStateChange.mockImplementation(entityNameList => [entityNameList, setEntityNameList]);
    act(() => {
      mount(<EntityIdList {...props} />)
      mockAllIsIntersecting(true);
    })
    expect(handleStateChange).toBeCalled()
  })

})