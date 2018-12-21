import React from 'react';
import {shallow} from 'enzyme'
import Login from '../../../lib/containers/demo_components/Login';

describe("test ", () => {
  it('renders correctly', () => {
    const tree = shallow(
      <Login 
        icon={true}
        onTokenChange={jest.fn(() => {})}
        token={"1"}
        theme={"dark"}
        buttonText={"login"}
        authProvider={"google"}
        redirectURL={"http://localhost:3000/"}
      />)
    expect(tree).toBeDefined()
  });
})