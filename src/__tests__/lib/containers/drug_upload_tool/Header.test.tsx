import * as React from 'react';
import { mount } from 'enzyme';
import Header, {
  HeaderProps
} from '../../../../lib/containers/drug_upload_tool/Header';

const createMountedComponent = (props: HeaderProps) => {
  const wrapper = mount(<Header {...props} />);
  return { wrapper };
};

describe('basic tests', () => {
  const props: HeaderProps = {
    title: 'Some Header',
    copy: 'Some Copy<span class="testme"> html test </span>'
  };

  it('should display the correct title copy as html', () => {
    const { wrapper } = createMountedComponent(props);
    const bodyDiv = wrapper.find('div');
    expect(bodyDiv.get(0).props.dangerouslySetInnerHTML.__html).toBe(
      props.copy
    );
  });

  it('should not crash without copy param', () => {
    props.copy = undefined;
    const { wrapper } = createMountedComponent(props);
    const bodyDiv = wrapper.find('div');
    expect(bodyDiv).toHaveLength(0);
    expect(wrapper.find('hr')).toHaveLength(1);
  });
});
