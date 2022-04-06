import * as React from 'react'
import { mount } from 'enzyme'
import UpsetPlot, { UpsetPlotProps } from '../../../lib/containers/UpsetPlot'
import { QueryResultBundle } from '../../../lib/utils/synapseTypes/'
import syn16787123Json from '../../../mocks/query/syn16787123'
import { SynapseTestContext } from '../../../mocks/MockSynapseContext'
import { resolveAllPending } from '../../../lib/testutils/EnzymeHelpers'

const SynapseClient = require('../../../lib/utils/SynapseClient')
const data = syn16787123Json as QueryResultBundle

const createShallowComponent = async (props: UpsetPlotProps) => {
  const wrapper = mount(<UpsetPlot {...props} />, {
    wrappingComponent: SynapseTestContext,
  })
  const instance = wrapper.instance()
  await resolveAllPending(wrapper)
  return { wrapper, instance }
}

describe('basic tests', () => {
  const props: UpsetPlotProps = {
    rgbIndex: 0,
    sql: 'select * from syn16787123',
    loadingScreen: <div>loading...</div>,
  }

  beforeEach(() => {
    SynapseClient.getFullQueryTableResults = jest.fn(() =>
      Promise.resolve(data),
    )
  })

  it('displays plot', async () => {
    const { wrapper } = await createShallowComponent(props)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(UpsetPlot)).toBeDefined()
  })
})
