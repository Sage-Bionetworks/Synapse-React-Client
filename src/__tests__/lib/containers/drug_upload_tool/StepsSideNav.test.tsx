import * as React from 'react'
import { shallow } from 'enzyme'
import * as _ from 'lodash'
import { Step } from '../../../../lib/containers/drug_upload_tool/types'
import StepsSideNav, {
  StepsSideNavProps,
} from '../../../../lib/containers/drug_upload_tool/StepsSideNav'

import { stepsWithChildren } from '../../../../mocks/mock_drug_tool_data'

const stepsArray: Step[] = _.cloneDeep(stepsWithChildren)

const createShallowComponent = (props: StepsSideNavProps) => {
  const wrapper = shallow(<StepsSideNav {...props} />)
  return { wrapper }
}

describe('basic tests', () => {
  const mock = {
    onStepChangeFn: jest.fn(() => 'ok'),
  }
  const props: StepsSideNavProps = {
    stepList: stepsArray,
    onStepChange: mock.onStepChangeFn,
  }

  it('should display correct class for the inProgress step', () => {
    const { wrapper } = createShallowComponent(props)
    expect(wrapper.find('ul')).toHaveLength(2)
    expect(wrapper.find('div.subMenu ul li')).toHaveLength(2)
    expect(wrapper.find('.json-forms-menu > ul > li')).toHaveLength(2)
    expect(props.stepList[0].inProgress).toBe(true)
    const firstLi = wrapper
      .find('.json-forms-menu > ul')
      .first()
      .find('li>div')
      .first()
    expect(firstLi.find('div').hasClass('static')).toBe(true)
    expect(firstLi.hasClass('pointed')).toBe(true)
    expect(wrapper.find('.pointed')).toHaveLength(1)
  })

  it('should display status icons correctly', () => {
    const { wrapper } = createShallowComponent(props)
    const icons = wrapper.render().find('svg')
    expect(icons[0].attribs.class).toContain('fa-circle')
    expect(icons[1].attribs.class).toContain('fa-exclamation-circle')
    expect(icons[2].attribs.class).toContain('fa-check-circle')
    expect(icons[3].attribs.class).toContain('fa-ban')
  })

  it('should call calback function with appropriate params', () => {
    const spy = jest.spyOn(mock, 'onStepChangeFn')
    const { wrapper } = createShallowComponent(props)
    //steps in progress will not have links so link#2 corresponds to step#3
    expect(
      wrapper
        .find('button')
        .at(2)
        .text(),
    ).toEqual(stepsArray[3].title)
    wrapper
      .find('button')
      .at(2)
      .simulate('click')
    expect(spy).toHaveBeenCalledWith(stepsArray[3])
  })

  it('should have unclickable steps if in a wizard mode', () => {
    const _props = { ...props, ...{ isWizardMode: true } }
    const { wrapper } = createShallowComponent(_props)
    expect(wrapper.find('button')).toHaveLength(0)
  })
})
