import * as React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import EvaluationIdRenderer, {
  EvaluationIdRendererProps,
} from '../../../lib/containers/EvaluationIdRenderer'
import { act } from '@testing-library/react'
import {
  MOCK_CONTEXT_VALUE,
  SynapseTestContext,
} from '../../../mocks/MockSynapseContext'
import { render, screen, waitFor } from '@testing-library/react'
import { mockEvaluationQueue } from '../../../mocks/entity/mockEvaluationQueue'
import { getEvaluation } from '../../../lib/utils/SynapseClient'

const SynapseClient = require('../../../lib/utils/SynapseClient')

SynapseClient.getEvaluation = jest.fn().mockResolvedValue(mockEvaluationQueue)

describe('EvaluationIdRenderer: basic functionality', () => {
  const props: EvaluationIdRendererProps = {
    evaluationId: '1234',
  }

  it('renders and retrieves data without crashing', async () => {
    render(<EvaluationIdRenderer {...props} />, {
      wrapper: SynapseTestContext,
    })
    act(() => {
      mockAllIsIntersecting(true)
    })
    await waitFor(() =>
      expect(getEvaluation).toBeCalledWith(
        props.evaluationId,
        MOCK_CONTEXT_VALUE.accessToken,
      ),
    )
    screen.getByText(mockEvaluationQueue.name!)
  })
})
