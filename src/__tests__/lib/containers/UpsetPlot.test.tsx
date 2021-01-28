import * as React from 'react'
import { shallow } from 'enzyme'
import UpsetPlot, { UpsetPlotProps } from '../../../lib/containers/UpsetPlot'
import { QueryResultBundle } from '../../../lib/utils/synapseTypes/'
import syn16787123Json from '../../../mocks/syn16787123.json'

const SynapseClient = require('../../../lib/utils/SynapseClient')
const data = syn16787123Json as QueryResultBundle
const token: string = '123444'

const createShallowComponent = async (props: UpsetPlotProps) => {
  const wrapper = shallow(<UpsetPlot {...props} />)
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('basic tests', () => {
  const props: UpsetPlotProps = {
    rgbIndex: 0,
    sql: 'select * from syn16787123',
    token,
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
