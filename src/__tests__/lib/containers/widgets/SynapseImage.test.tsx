import React from 'react';
import {shallow} from 'enzyme';
import SynapseImage from '../../../../lib/containers/widgets/SynapseImage';

it('renders without failing', () => {
  const tree = shallow(<SynapseImage params={{}}/>)
  expect(tree).toBeDefined()
});
