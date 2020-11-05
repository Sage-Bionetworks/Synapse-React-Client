// import { EvaluationRoundLimitInput } from '../../../../../../lib/containers/evaluation_queues/input_models/models'
// import { EvaluationRoundLimitType } from '../../../../../../lib/utils/synapseTypes/Evaluation'
// import { shallow } from 'enzyme'
// import { EvaluationRoundLimitOptions } from '../../../../../../lib/containers/evaluation_queues/round_limits/EvaluationRoundLimitOptions'
// import React from 'react'

import { EvaluationRoundLimitInput } from '../../../../../lib/containers/evaluation_queues/input_models/models'
import { EvaluationRoundLimitType } from '../../../../../lib/utils/synapseTypes/Evaluation'
import { shallow } from 'enzyme'
import { EvaluationRoundLimitOptions } from '../../../../../lib/containers/evaluation_queues/round_limits/EvaluationRoundLimitOptions'
import React from 'react'

describe('test evaluation round limit option', () => {
  const limitInput: EvaluationRoundLimitInput = {
    type: 'MONTHLY',
    maxSubmissionString: '34',
  }

  const mockOnChange = jest.fn()

  it('no limit options disabled', () => {
    const emptySelectedTypes = new Set<EvaluationRoundLimitType>()
    const wrapper = shallow(
      <EvaluationRoundLimitOptions
        limitInput={limitInput}
        onChange={mockOnChange}
        allSelectedTypes={emptySelectedTypes}
      />,
    )

    const select = wrapper.find('FormControl[as="select"]')
    expect(select.children()).toHaveLength(3)
    select.children().forEach(option => {
      expect(option.prop('disabled')).toBe(false)
    })
  })

  it('some options disabled', () => {
    const emptySelectedTypes = new Set<EvaluationRoundLimitType>([
      'MONTHLY',
      'WEEKLY',
    ])
    const wrapper = shallow(
      <EvaluationRoundLimitOptions
        limitInput={limitInput}
        onChange={mockOnChange}
        allSelectedTypes={emptySelectedTypes}
      />,
    )

    const select = wrapper.find('FormControl[as="select"]')

    expect(select.children()).toHaveLength(3)

    // the same type as the initial display won't be disabled
    expect(
      select.children().find('option[value="MONTHLY"]').prop('disabled'),
    ).toBe(false)
    //was never in the set
    expect(
      select.children().find('option[value="DAILY"]').prop('disabled'),
    ).toBe(false)
    //was in the set and not the initial display
    expect(
      select.children().find('option[value="WEEKLY"]').prop('disabled'),
    ).toBe(true)
  })

  it('onChange limit type', () => {
    const emptySelectedTypes = new Set<EvaluationRoundLimitType>([
      'MONTHLY',
      'WEEKLY',
    ])
    const wrapper = shallow(
      <EvaluationRoundLimitOptions
        limitInput={limitInput}
        onChange={mockOnChange}
        allSelectedTypes={emptySelectedTypes}
      />,
    )

    const select = wrapper.find('FormControl[as="select"]')
    expect(select.children()).toHaveLength(3)

    select.simulate('change', { target: { value: 'DAILY' } })

    expect(mockOnChange).toBeCalledWith({
      type: 'DAILY',
      maxSubmissionString: '34',
    })
  })

  it('onChange max submissions', () => {
    const emptySelectedTypes = new Set<EvaluationRoundLimitType>([
      'MONTHLY',
      'WEEKLY',
    ])
    const wrapper = shallow(
      <EvaluationRoundLimitOptions
        limitInput={limitInput}
        onChange={mockOnChange}
        allSelectedTypes={emptySelectedTypes}
      />,
    )

    const textInput = wrapper.find('FormControl[type="text"]')
    expect(textInput.prop('value')).toBe('34')
    textInput.simulate('change', { target: { value: '999' } })

    expect(mockOnChange).toBeCalledWith({
      type: 'MONTHLY',
      maxSubmissionString: '999',
    })
  })
})
