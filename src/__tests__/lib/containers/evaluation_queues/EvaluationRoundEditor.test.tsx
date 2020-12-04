import moment, { Moment } from 'moment'
import {
  EvaluationRoundEditor,
  EvaluationRoundEditorProps,
  HelpersToTest,
} from '../../../../lib/containers/evaluation_queues/EvaluationRoundEditor'
import {
  EvaluationRoundInput,
  EvaluationRoundLimitInput,
} from '../../../../lib/containers/evaluation_queues/input_models/models'
import { EvaluationRound } from '../../../../lib/utils/synapseTypes'
import { mount, shallow } from 'enzyme'
import React from 'react'
import { EvaluationRoundLimitOptionsList } from '../../../../lib/containers/evaluation_queues/round_limits/EvaluationRoundLimitOptionsList'
import { SynapseClient } from '../../../../lib/utils/'
import JestMockPromise from 'jest-mock-promise'
import { EvaluationRoundEditorDropdown } from '../../../../lib/containers/evaluation_queues/EvaluationRoundEditorDropdown'
import { ErrorBanner } from '../../../../lib/containers/ErrorBanner'

describe('test EvaluationRoundEditor', () => {
  let props: EvaluationRoundEditorProps
  let mockOnDelete: jest.Mock
  let mockOnSave: jest.Mock

  let mockCreateEvaluationRound: jest.Mock
  let mockUpdateEvaluationRound: jest.Mock
  let mockDeleteEvaluationRound: jest.Mock

  const fakeEvaluationRoundInput: EvaluationRoundInput = {
    otherLimits: [],
    reactListKey: 'fake key',
    totalSubmissionLimit: '121221',
    evaluationId: '12321',
    roundStart: '123123',
    roundEnd: '1231232',
  }

  const fakeSessionToken = 'fakeToken'

  beforeEach(() => {
    mockOnDelete = jest.fn()
    mockOnSave = jest.fn()

    mockCreateEvaluationRound = jest.fn(
      () => new JestMockPromise(resolve => resolve(fakeEvaluationRoundInput)),
    )
    mockUpdateEvaluationRound = jest.fn(
      () => new JestMockPromise(resolve => resolve(fakeEvaluationRoundInput)),
    )
    mockDeleteEvaluationRound = jest.fn(
      () => new JestMockPromise(resolve => resolve()),
    )

    jest
      .spyOn(SynapseClient, 'createEvaluationRound')
      .mockImplementation(mockCreateEvaluationRound)
    jest
      .spyOn(SynapseClient, 'updateEvaluationRound')
      .mockImplementation(mockUpdateEvaluationRound)

    jest
      .spyOn(SynapseClient, 'deleteEvaluationRound')
      .mockImplementation(mockDeleteEvaluationRound)

    props = {
      sessionToken: fakeSessionToken,
      evaluationRoundInput: {
        reactListKey: 'SOME FAKE KEY',
        evaluationId: '123',
        roundStart: '1970-01-01T00:00:00Z',
        roundEnd: '1970-12-01T00:00:00Z',
        totalSubmissionLimit: '',
        otherLimits: [],
      },
      utc: true,
      onDelete: mockOnDelete,
      onSave: mockOnSave,
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('test clicking advanced limits link', () => {
    const wrapper = shallow(<EvaluationRoundEditor {...props} />)

    //initially not shown
    expect(wrapper.find(EvaluationRoundLimitOptionsList).exists()).toBe(false)

    // first click enables the advanced limits list
    wrapper.find('.advanced-limits-link').simulate('click')
    expect(wrapper.find(EvaluationRoundLimitOptionsList).exists()).toBe(true)

    // click again disables the advanced limits list
    wrapper.find('.advanced-limits-link').simulate('click')
    expect(wrapper.find(EvaluationRoundLimitOptionsList).exists()).toBe(false)
  })

  it('test remove advanced RoundLimit: 1 item left in list should disable advanced Mode', () => {
    props.evaluationRoundInput.otherLimits = [
      { type: 'MONTHLY', maxSubmissionString: '45' },
      { type: 'DAILY', maxSubmissionString: '36' },
    ]

    // this requires interaction from a child component so we must use mount() to render it
    const wrapper = mount(<EvaluationRoundEditor {...props} />)

    //enable rendering of the advanced limits list
    wrapper.find('button.advanced-limits-link').simulate('click')
    expect(wrapper.find(EvaluationRoundLimitOptionsList).exists()).toBe(true)

    //we have 2 advanced limits so 2 buttons
    let removeLimitButtons = wrapper.find('button.remove-button')
    expect(removeLimitButtons).toHaveLength(2)

    // click on one button should remove one, but the EvaluationRoundLimitOptionsList is still shown
    removeLimitButtons.at(0).simulate('click')
    expect(wrapper.find(EvaluationRoundLimitOptionsList).exists()).toBe(true)

    // after 1 remove was clicked there should only be 1 more remove button left
    removeLimitButtons = wrapper.find('button.remove-button')
    expect(removeLimitButtons).toHaveLength(1)

    // once we click this button, we expect the EvaluationRoundLimitOptionsList to stop being shown at all
    removeLimitButtons.at(0).simulate('click')
    expect(wrapper.find(EvaluationRoundLimitOptionsList).exists()).toBe(false)
  })

  it('test start date input: disabled when current time past start', () => {
    const roundStartInPast = moment().subtract(1, 'day')
    const roundEnd = moment().add(1, 'day')
    props.evaluationRoundInput.roundStart = roundStartInPast.toJSON()
    props.evaluationRoundInput.roundEnd = roundEnd.toJSON()

    const wrapper = shallow(<EvaluationRoundEditor {...props} />)

    expect(
      wrapper
        .find("CalendarWithIconFormGroup[label='Round Start']")
        .prop('disabled'),
    ).toBe(true)
  })

  it('test start date input: enabled when current time not past start', () => {
    const roundStartInFuture = moment().add(1, 'day')
    const roundEnd = moment().add(2, 'day')
    props.evaluationRoundInput.roundStart = roundStartInFuture.toJSON()
    props.evaluationRoundInput.roundEnd = roundEnd.toJSON()

    const wrapper = shallow(<EvaluationRoundEditor {...props} />)

    expect(
      wrapper
        .find("CalendarWithIconFormGroup[label='Round Start']")
        .prop('disabled'),
    ).toBe(false)
  })

  it('test save: no id in props => create new EvaluationRound', () => {
    // remove the id
    delete props.evaluationRoundInput.id

    const wrapper = shallow(<EvaluationRoundEditor {...props} />)

    wrapper.find('.save-button').simulate('click')

    const expectedConvertedEvaulationRound: EvaluationRound = {
      etag: undefined,
      evaluationId: '123',
      id: undefined,
      limits: [],
      roundEnd: '1970-12-01T00:00:00.000Z',
      roundStart: '1970-01-01T00:00:00.000Z',
    }

    expect(mockCreateEvaluationRound).toBeCalledWith(
      expectedConvertedEvaulationRound,
      fakeSessionToken,
    )
    expect(mockUpdateEvaluationRound).not.toBeCalled()

    expect(mockOnSave).toBeCalled()

    //no error is shown
    expect(wrapper.find(Error).exists()).toBe(false)
  })

  it('test save: existing id in props => update EvaluationRound', () => {
    const id = '1234'
    const etag = 'eeeeeeeee'
    props.evaluationRoundInput.id = id
    props.evaluationRoundInput.etag = etag

    const wrapper = shallow(<EvaluationRoundEditor {...props} />)

    wrapper.find('.save-button').simulate('click')

    const expectedConvertedEvaulationRound: EvaluationRound = {
      etag: etag,
      evaluationId: '123',
      id: id,
      limits: [],
      roundEnd: '1970-12-01T00:00:00.000Z',
      roundStart: '1970-01-01T00:00:00.000Z',
    }

    expect(mockUpdateEvaluationRound).toBeCalledWith(
      expectedConvertedEvaulationRound,
      fakeSessionToken,
    )
    expect(mockCreateEvaluationRound).not.toBeCalled()

    expect(mockOnSave).toBeCalled()

    //no error is shown
    expect(wrapper.find(Error).exists()).toBe(false)
  })

  it('test save: Error occur', () => {
    //make the SynapseClient call throw an error
    mockUpdateEvaluationRound.mockImplementation(
      () =>
        new JestMockPromise((resolve, reject) => {
          reject(new Error('oops! you got a fake error'))
        }),
    )

    const id = '1234'
    const etag = 'eeeeeeeee'
    props.evaluationRoundInput.id = id
    props.evaluationRoundInput.etag = etag

    const wrapper = shallow(<EvaluationRoundEditor {...props} />)

    wrapper.find('.save-button').simulate('click')

    const expectedConvertedEvaulationRound: EvaluationRound = {
      etag: etag,
      evaluationId: '123',
      id: id,
      limits: [],
      roundEnd: '1970-12-01T00:00:00.000Z',
      roundStart: '1970-01-01T00:00:00.000Z',
    }

    expect(mockUpdateEvaluationRound).toBeCalledWith(
      expectedConvertedEvaulationRound,
      fakeSessionToken,
    )
    expect(mockCreateEvaluationRound).not.toBeCalled()

    expect(mockOnSave).not.toBeCalled()

    expect(wrapper.find(ErrorBanner).exists()).toBe(true)
  })

  it('test delete: no id', () => {
    delete props.evaluationRoundInput.id
    delete props.evaluationRoundInput.etag

    const wrapper = shallow(<EvaluationRoundEditor {...props} />)

    //Simulate a deletion
    wrapper.find(EvaluationRoundEditorDropdown).invoke('onDelete')()

    expect(mockOnDelete).toBeCalledWith()
    expect(mockDeleteEvaluationRound).not.toBeCalled()
  })

  it('test delete: has id and successful', () => {
    const id = '1234'
    const etag = 'eeeeeeeee'
    props.evaluationRoundInput.id = id
    props.evaluationRoundInput.etag = etag

    const wrapper = shallow(<EvaluationRoundEditor {...props} />)

    //Simulate a deletion
    wrapper.find(EvaluationRoundEditorDropdown).invoke('onDelete')()

    expect(mockOnDelete).toBeCalledWith()
    expect(mockDeleteEvaluationRound).toBeCalledWith(
      props.evaluationRoundInput.evaluationId,
      id,
      fakeSessionToken,
    )
  })

  it('test delete: has id and Error occur', () => {
    const id = '1234'
    const etag = 'eeeeeeeee'
    props.evaluationRoundInput.id = id
    props.evaluationRoundInput.etag = etag

    mockDeleteEvaluationRound.mockImplementation(
      () =>
        new JestMockPromise((resolve, reject) =>
          reject(new Error('oops! you got a fake error')),
        ),
    )

    const wrapper = shallow(<EvaluationRoundEditor {...props} />)

    //Simulate a deletion
    wrapper.find(EvaluationRoundEditorDropdown).invoke('onDelete')()

    expect(mockDeleteEvaluationRound).toBeCalledWith(
      props.evaluationRoundInput.evaluationId,
      id,
      fakeSessionToken,
    )

    //error occurred so we never used the passed in callback from props
    expect(mockOnDelete).not.toBeCalled()

    //error should be shown
    expect(wrapper.find(ErrorBanner).exists()).toBe(true)
  })
})

describe('test determineRoundStatus helper', () => {
  it('status: in progress', () => {
    const roundStart = moment().subtract(1, 'day')
    const roundEnd = moment().add(1, 'day')
    expect(
      shallow(
        HelpersToTest.determineRoundStatus(roundStart, roundEnd),
      ).hasClass('status-in-progress'),
    ).toBe(true)
  })

  it('status: completed', () => {
    const roundStart = moment().subtract(2, 'day')
    const roundEnd = moment().subtract(1, 'day')
    expect(
      shallow(
        HelpersToTest.determineRoundStatus(roundStart, roundEnd),
      ).hasClass('status-completed'),
    ).toBe(true)
  })

  it('status: not yet started', () => {
    const roundStart = moment().add(1, 'day')
    const roundEnd = moment().add(2, 'day')
    expect(
      shallow(
        HelpersToTest.determineRoundStatus(roundStart, roundEnd),
      ).hasClass('status-not-yet-started'),
    ).toBe(true)
  })
})

describe('test convertInputsToEvaluationRound', () => {
  let evaluationRoundInputProp: EvaluationRoundInput
  let startDate: string | Moment
  let endDate: string | Moment
  let totalSubmissionLimit: string
  let advancedLimits: EvaluationRoundLimitInput[]
  let expected: EvaluationRound

  beforeEach(() => {
    evaluationRoundInputProp = {
      id: '456',
      etag: 'abcdef',
      evaluationId: '123',

      //these should not be used in the conversion
      reactListKey: 'lk;ajdlaksfjsa',
      otherLimits: [],
      roundEnd: '1970-01-01T00:00:00',
      roundStart: '1970-01-02T00:00:00',
      totalSubmissionLimit: '99999999999999',
    }
    startDate = '2020-01-01T00:00:00'
    endDate = '3030-12-01T00:00:00'
    totalSubmissionLimit = '1213456'
    advancedLimits = [
      { type: 'MONTHLY', maxSubmissionString: '35' },
      { type: 'DAILY', maxSubmissionString: '42' },
    ]

    expected = {
      etag: 'abcdef',
      evaluationId: '123',
      id: '456',
      roundStart: '2020-01-01T00:00:00.000Z',
      roundEnd: '3030-12-01T00:00:00.000Z',
      limits: [
        {
          limitType: 'TOTAL',
          maximumSubmissions: 1213456,
        },
        {
          limitType: 'MONTHLY',
          maximumSubmissions: 35,
        },
        {
          limitType: 'DAILY',
          maximumSubmissions: 42,
        },
      ],
    }
  })

  it('test empty string totalSubmissionLimit is allowed', () => {
    totalSubmissionLimit = ''

    //TOTAL limits is removed
    expected.limits = [
      {
        limitType: 'MONTHLY',
        maximumSubmissions: 35,
      },
      {
        limitType: 'DAILY',
        maximumSubmissions: 42,
      },
    ]

    expect(
      HelpersToTest.convertInputsToEvaluationRound(
        evaluationRoundInputProp,
        startDate,
        endDate,
        totalSubmissionLimit,
        advancedLimits,
      ),
    ).toEqual(expected)
  })

  it('test non-numeric string totalSubmissionLimit throws exception', () => {
    totalSubmissionLimit = 'asdf'

    expect(() =>
      HelpersToTest.convertInputsToEvaluationRound(
        evaluationRoundInputProp,
        startDate,
        endDate,
        totalSubmissionLimit,
        advancedLimits,
      ),
    ).toThrow(TypeError)
  })

  it('test empty advancedLimits array is allowed', () => {
    advancedLimits = []

    //only total limit should now exists
    expected.limits = [
      {
        limitType: 'TOTAL',
        maximumSubmissions: 1213456,
      },
    ]

    expect(
      HelpersToTest.convertInputsToEvaluationRound(
        evaluationRoundInputProp,
        startDate,
        endDate,
        totalSubmissionLimit,
        advancedLimits,
      ),
    ).toEqual(expected)
  })

  it('test empty string existing in advancedLimits array is allowed', () => {
    advancedLimits = [
      {
        type: 'MONTHLY',
        maxSubmissionString: '',
      },
      {
        type: 'DAILY',
        maxSubmissionString: '42',
      },
    ]

    expected.limits = [
      {
        limitType: 'TOTAL',
        maximumSubmissions: 1213456,
      },
      {
        limitType: 'DAILY',
        maximumSubmissions: 42,
      },
    ]

    expect(
      HelpersToTest.convertInputsToEvaluationRound(
        evaluationRoundInputProp,
        startDate,
        endDate,
        totalSubmissionLimit,
        advancedLimits,
      ),
    ).toEqual(expected)
  })

  it('test non-numeric string existing in advancedLimits array throws exception', () => {
    advancedLimits = [{ type: 'WEEKLY', maxSubmissionString: 'asdf123asdf' }]

    expect(() =>
      HelpersToTest.convertInputsToEvaluationRound(
        evaluationRoundInputProp,
        startDate,
        endDate,
        totalSubmissionLimit,
        advancedLimits,
      ),
    ).toThrow(TypeError)
  })

  it('test no limits at all', () => {
    advancedLimits = []
    totalSubmissionLimit = ''

    //only total limit should now exists
    expected.limits = []

    expect(
      HelpersToTest.convertInputsToEvaluationRound(
        evaluationRoundInputProp,
        startDate,
        endDate,
        totalSubmissionLimit,
        advancedLimits,
      ),
    ).toEqual(expected)
  })

  it('general case', () => {
    expect(
      HelpersToTest.convertInputsToEvaluationRound(
        evaluationRoundInputProp,
        startDate,
        endDate,
        totalSubmissionLimit,
        advancedLimits,
      ),
    ).toEqual(expected)
  })
})

describe('test disallowCalendarDateBefore', () => {
  const now = moment()
  const generatedFunc = HelpersToTest.disallowCalendarDateBefore(now)

  it('before now', () =>
    expect(generatedFunc(now.clone().subtract(1, 'day'))).toBe(false))

  it('is now', () => expect(generatedFunc(now.clone())).toBe(true))

  it('after now', () =>
    expect(generatedFunc(now.clone().add(1, 'day'))).toBe(true))
})
