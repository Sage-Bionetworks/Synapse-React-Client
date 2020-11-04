import { EvaluationRoundLimitInput } from '../../../../../../lib/containers/evaluation_queues/input_models/models'
import { EvaluationRoundLimitOptionsList } from '../../../../../../lib/containers/evaluation_queues/round_limits/EvaluationRoundLimitOptionsList'
import { shallow } from 'enzyme'
import React from 'react'
import { EvaluationRoundLimitOptions } from '../../../../../../lib/containers/evaluation_queues/round_limits/EvaluationRoundLimitOptions'

describe('test EvaluationRoundLimitOptionsList', () => {
  let mockHandleChange: jest.Mock<any, any>
  let mockHandleDeleteLimit: jest.Mock<any, any>
  let mockOnAddNewLimit: jest.Mock<any, any>

  // any of the mockHandle__ functions will "generate" this function
  let mockGeneratedFunction: jest.Mock<any, any>

  beforeEach(() => {
    mockGeneratedFunction = jest.fn()
    mockHandleChange = jest.fn(() => mockGeneratedFunction)
    mockHandleDeleteLimit = jest.fn(() => mockGeneratedFunction)
    mockOnAddNewLimit = jest.fn()
  })

  const limitInputs: EvaluationRoundLimitInput[] = [
    { type: 'MONTHLY', maxSubmissionString: '42' },
    { type: 'DAILY', maxSubmissionString: '86' },
  ]

  const makeElement = (limitInputs: EvaluationRoundLimitInput[]) => (
    <EvaluationRoundLimitOptionsList
      limitInputs={limitInputs}
      onAddNewLimit={mockOnAddNewLimit}
      handleDeleteLimit={mockHandleDeleteLimit}
      handleChange={mockHandleChange}
    />
  )

  it('test "add" Button only created on last value in list', () => {
    const wrapper = shallow(makeElement(limitInputs))
    const gridDiv = wrapper.find('.advanced-limits-grid')

    // since we use CSS grid system to style this, all elements are held in the same parent
    // 2 elements for each Evaluation Round (EvaluationRoundLimitOptions and "remove" button)
    // and a single "add" button for the last element
    expect(gridDiv.children()).toHaveLength(5)

    const addButton = gridDiv.find('.add-button')

    //only the last element should be the add button
    gridDiv.children().forEach((node, index) => {
      if (index === gridDiv.children().length - 1) {
        expect(node).toEqual(addButton)
      } else {
        expect(node).not.toEqual(addButton)
      }
    })
  })

  it('test "add" Button not created when all limit types are used', () => {
    //add another limit to the list
    limitInputs.push({ type: 'WEEKLY', maxSubmissionString: '84' })
    const wrapper = shallow(makeElement(limitInputs))
    const gridDiv = wrapper.find('.advanced-limits-grid')

    // since we use CSS grid system to style this, all elements are held in the same parent
    // 2 elements for each Evaluation Round (EvaluationRoundLimitOptions and "remove" button)
    // the "add" button should not exist in this case
    expect(gridDiv.children()).toHaveLength(6)

    expect(gridDiv.find('.add-button').exists()).toBe(false)
  })

  it('test "remove" Button click', () => {
    const wrapper = shallow(makeElement(limitInputs))
    const gridDiv = wrapper.find('.advanced-limits-grid')

    // since we use CSS grid system to style this, all elements are held in the same parent
    // 2 elements for each Evaluation Round (EvaluationRoundLimitOptions and "remove" button)
    // and a single "add" button for the last element
    expect(gridDiv.children()).toHaveLength(5)

    const removeButtons = gridDiv.find('.remove-button')
    expect(removeButtons).toHaveLength(2)
    removeButtons.at(0).simulate('click')

    expect(mockHandleDeleteLimit).toBeCalledWith(0)
    expect(mockGeneratedFunction).toBeCalled()
  })

  it('test "add" Button click', () => {
    const wrapper = shallow(makeElement(limitInputs))
    const gridDiv = wrapper.find('.advanced-limits-grid')

    // since we use CSS grid system to style this, all elements are held in the same parent
    // 2 elements for each Evaluation Round (EvaluationRoundLimitOptions and "remove" button)
    // and a single "add" button for the last element
    expect(gridDiv.children()).toHaveLength(5)

    const addButton = gridDiv.find('.add-button')
    expect(addButton).toHaveLength(1)
    addButton.simulate('click')

    //a unused limit type was chosen and added
    expect(mockOnAddNewLimit).toBeCalledWith({
      type: 'WEEKLY',
      maxSubmissionString: '',
    })
    //nothing was generated from the mockOnAddNewLimit
    expect(mockGeneratedFunction).not.toBeCalled()
  })

  it('test EvaluationRoundLimitOptions change', () => {
    const wrapper = shallow(makeElement(limitInputs))
    const gridDiv = wrapper.find('.advanced-limits-grid')

    // since we use CSS grid system to style this, all elements are held in the same parent
    // 2 elements for each Evaluation Round (EvaluationRoundLimitOptions and "remove" button)
    // and a single "add" button for the last element
    expect(gridDiv.children()).toHaveLength(5)

    const changedLimit = { type: 'DAILY', maxSubmissionString: '789' }

    const roundLimitOptions = gridDiv.find(EvaluationRoundLimitOptions)
    expect(roundLimitOptions).toHaveLength(2)
    roundLimitOptions.at(1).simulate('change', changedLimit)

    //a unused limit type was chosen and added
    expect(mockHandleChange).toBeCalledWith(1)
    //nothing was generated from the mockOnAddNewLimit
    expect(mockGeneratedFunction).toBeCalledWith(changedLimit)
  })
})
