import React from 'react';
import renderer from 'react-test-renderer';
import SynapseImage from '../../../../lib/containers/widgets/SynapseImage';

it('renders without failing', () => {
  const tree = renderer
    .create(<SynapseImage />)
    .toJSON();
});
