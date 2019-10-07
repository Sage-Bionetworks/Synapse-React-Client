import * as React from 'react';
import { mount } from 'enzyme';
import Header, {
  HeaderProps
} from '../../../../lib/containers/drug_upload_tool/Header';

const createMountedComponent = (props: HeaderProps) => {
  const wrapper = mount(<Header {...props} />);
  return { wrapper };
};

const submittedText = 'Your information has been submitted';

describe('basic tests - not submitted', () => {
  const props: HeaderProps = {
    title: 'Some Header',
    isSubmitted: false,
    bodyText: 'Some bodyText<span class="testme"> html test </span>'
  };

  it('should display the correct bodyText as html', () => {
    const { wrapper } = createMountedComponent(props);
    const bodyDiv = wrapper.find('div > div');
    expect(bodyDiv.get(0).props.dangerouslySetInnerHTML.__html).toBe(
      props.bodyText
    );
  });

  it('should not crash without bodyText param', () => {
    props.bodyText = undefined;
    const { wrapper } = createMountedComponent(props);
    const bodyDiv = wrapper.find('div > div');
    expect(bodyDiv).toHaveLength(0);
    expect(wrapper.find('hr')).toHaveLength(1);
  });
});

describe('basic tests - submitted', () => {
  const props: HeaderProps = {
    title: 'Some Header',
    isSubmitted: false,
    bodyText: 'Some bodyText<span class="testme"> html test </span>'
  };

  it('should display that it has been submitted', () => {
    const _props = {...props, ...{isSubmitted: true}}
    const { wrapper } = createMountedComponent(_props);
    const bodyDiv = wrapper.find('div > div');
    expect(bodyDiv.get(0).props.dangerouslySetInnerHTML).toBe(undefined);
    expect(bodyDiv.text()).toBe(submittedText)
  });

  it('should not crash without bodyText param', () => {

    const _props = {...props, ...{isSubmitted: true, bodyText: undefined}}
    const { wrapper } = createMountedComponent(_props);
    const bodyDiv = wrapper.find('div > div');
    expect(bodyDiv).toHaveLength(1);
    expect(bodyDiv.text()).toBe(submittedText)
  });
});
