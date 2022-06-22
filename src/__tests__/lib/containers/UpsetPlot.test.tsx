import { render, waitFor } from '@testing-library/react'
import * as React from 'react'
import UpsetPlot, { UpsetPlotProps } from '../../../lib/containers/UpsetPlot'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import { QueryResultBundle } from '../../../lib/utils/synapseTypes/'
import syn16787123Json from '../../../mocks/query/syn16787123'

const SynapseClient = require('../../../lib/utils/SynapseClient')
const data = syn16787123Json as QueryResultBundle

const renderComponent = (props: UpsetPlotProps) => {
  return render(<UpsetPlot {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('UpsetPlot tests', () => {
  const props: UpsetPlotProps = {
    rgbIndex: 0,
    sql: 'select * from syn16787123',
  }

  beforeEach(() => {
    SynapseClient.getFullQueryTableResults = jest.fn(() =>
      Promise.resolve(data),
    )
  })

  it('displays plot', async () => {
    const { container } = renderComponent(props)

    await waitFor(() =>
      expect(container.querySelector('.UpsetPlot')).toBeDefined(),
    )
  })
})
