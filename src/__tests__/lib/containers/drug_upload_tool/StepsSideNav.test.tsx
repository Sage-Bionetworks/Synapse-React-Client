import * as React from 'react';
import { shallow } from 'enzyme';
import * as _ from 'lodash';
import {
  Step,
  StepStateEnum
} from '../../../../lib/containers/drug_upload_tool/types';
import StepsSideNav, {
  StepsSideNavProps
} from '../../../../lib/containers/drug_upload_tool/StepsSideNav';

const stepsArray: Step[] = [
  {
    id: 'toxicology _data',
    order: 60,
    title: 'Toxicology Data',
    default: 'ld50',
    static: true,
    inProgress: true,
    state: StepStateEnum.TODO,
    rules: [],
    children: ['ld50', 'acute_dosing']
  },
  {
    id: 'ld50',
    order: 61,
    title: 'LD50',
    inProgress: false,
    default: 'acute_dosing',
    state: StepStateEnum.ERROR,
    child: true,
    excluded: false,
    rules: []
  },
  {
    id: 'acute_dosing',
    order: 62,
    title: 'Acute Dosing',
    default: 'chronic_dosing',
    child: true,
    excluded: false,
    static: false,
    inProgress: false,
    state: StepStateEnum.COMPLETED,
    rules: []
  },
  {
    id: 'acute_dosing_not_child',
    order: 63,
    title: 'Acute Dosing Not Child',
    default: 'chronic_dosing',
    child: false,
    excluded: true,
    static: false,
    inProgress: false,
    state: StepStateEnum.COMPLETED,
    rules: []
  }
];

const createShallowComponent = (props: StepsSideNavProps) => {
  const wrapper = shallow(<StepsSideNav {...props} />);
  return { wrapper };
};

describe('basic tests', () => {
  const mock = {
    onStepChangeFn: jest.fn(() => 'ok')
  };
  const props: StepsSideNavProps = {
    stepList: stepsArray,
    onStepChange: mock.onStepChangeFn
  };

  it('should display correct class for the inProgress step', () => {
    const { wrapper } = createShallowComponent(props);
    expect(wrapper.find('ul')).toHaveLength(2);
    expect(wrapper.find('div.subMenu ul li')).toHaveLength(2);
    expect(wrapper.find('.container > ul > li')).toHaveLength(2);
    expect(props.stepList[0].inProgress).toBe(true);
    const firstLi = wrapper
      .find('.container > ul')
      .first()
      .find('li>div')
      .first();
    expect(firstLi.find('div').hasClass('static')).toBe(true);
    expect(firstLi.hasClass('pointed')).toBe(true);
    expect(wrapper.find('.pointed')).toHaveLength(1);
  });

  it('should display status icons correctly', () => {
    const { wrapper } = createShallowComponent(props);
    const icons = wrapper.render().find('svg');
    expect(icons[0].attribs.class).toContain('fa-circle');
    expect(icons[1].attribs.class).toContain('fa-exclamation-circle');
    expect(icons[2].attribs.class).toContain('fa-check-circle');
    expect(icons[3].attribs.class).toContain('fa-ban');
  });

  it('should call calback function with appropriate params', () => {
    const spy = jest.spyOn(mock, 'onStepChangeFn');
    const { wrapper } = createShallowComponent(props);
    //static steps will not have links so link#2 corresponds to step#3
    expect(
      wrapper
        .find('a')
        .at(2)
        .text()
    ).toEqual(stepsArray[3].title);
    wrapper
      .find('a')
      .at(2)
      .simulate('click');
    expect(spy).toHaveBeenCalledWith(stepsArray[3]);
  });
});
