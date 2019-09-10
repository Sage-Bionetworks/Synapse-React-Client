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
    bodyText: 'Some bodyText<span class="testme"> html test </span>'
  };

  it('should display the correct bodyText as html', () => {
    const { wrapper } = createMountedComponent(props);
    const bodyDiv = wrapper.find('div');
    expect(bodyDiv.get(0).props.dangerouslySetInnerHTML.__html).toBe(
      props.bodyText
    );
  });

  it('should not crash without bodyText param', () => {
    props.bodyText = undefined;
    const { wrapper } = createMountedComponent(props);
    const bodyDiv = wrapper.find('div');
    expect(bodyDiv).toHaveLength(0);
    expect(wrapper.find('hr')).toHaveLength(1);
  });
});
