import { shallow } from 'enzyme'
import {
  EvaluationEditorPage,
  HelpersToTest,
} from '../../../../lib/containers/evaluation_queues/EvaluationEditorPage'
import React from 'react'
import { EvaluationRoundEditorList } from '../../../../lib/containers/evaluation_queues/EvaluationRoundEditorList'
import { EvaluationEditor } from '../../../../lib/containers/evaluation_queues/EvaluationEditor'

describe('test EvaluationEditorPage', () => {
  let mockOnDeleteSuccess: () => void
  const sessionToken = 'fake session token'

  beforeEach(() => {
    mockOnDeleteSuccess = jest.fn()
  })

  it('Test creating new Evaluation page -- no EvaluationRoundEditorList shown', () => {
    const wrapper = shallow(
      <EvaluationEditorPage
        entityId="syn123"
        onDeleteSuccess={mockOnDeleteSuccess}
        sessionToken={sessionToken}
        utc={false}
      />,
    )

    expect(wrapper.find(EvaluationRoundEditorList).exists()).toBe(false)
    expect(
      wrapper.find(HelpersToTest.FakeEvaluationRoundEditorList).exists(),
    ).toBe(true)

    //simulate a successful "save" (i.e. creation of Evaluation)
    const fakeEvaluationId = '123456'
    const onSaveSuccessCallback = wrapper
      .find(EvaluationEditor)
      .invoke('onSaveSuccess')
    expect(onSaveSuccessCallback).not.toBeNull()
    onSaveSuccessCallback!(fakeEvaluationId)

    // now that the Evaluation has been "saved", we should be able to edit its Evaluation Rounds
    expect(wrapper.find(EvaluationRoundEditorList).exists()).toBe(true)
    expect(
      wrapper.find(HelpersToTest.FakeEvaluationRoundEditorList).exists(),
    ).toBe(false)
  })

  it('Test editing existing Evaluation page -- EvaluationRoundEditorList is shown', () => {
    const wrapper = shallow(
      <EvaluationEditorPage
        evaluationId="1122334455"
        onDeleteSuccess={mockOnDeleteSuccess}
        sessionToken={sessionToken}
        utc={false}
      />,
    )

    expect(wrapper.find(EvaluationRoundEditorList).exists()).toBe(true)
    expect(
      wrapper.find(HelpersToTest.FakeEvaluationRoundEditorList).exists(),
    ).toBe(false)
  })
})
