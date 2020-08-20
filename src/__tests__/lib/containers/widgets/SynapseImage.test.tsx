import * as React from 'react'
import { shallow } from 'enzyme'
import SynapseImage from '../../../../lib/containers/widgets/SynapseImage'

it('renders without failing', () => {
  const tree = shallow(
    <SynapseImage
      params={{
        align: '',
        altText: '',
        scale: '',
        responsive: '',
      }}
    />,
  )
  expect(tree).toBeDefined()
})
