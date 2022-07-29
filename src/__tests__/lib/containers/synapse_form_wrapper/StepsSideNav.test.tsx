import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as _ from 'lodash-es'
import React from 'react'
import StepsSideNav, {
  StepsSideNavProps,
} from '../../../../lib/containers/synapse_form_wrapper/StepsSideNav'
import { Step } from '../../../../lib/containers/synapse_form_wrapper/types'
import { stepsWithChildren } from '../../../../mocks/mock_drug_tool_data'

const stepsArray: Step[] = _.cloneDeep(stepsWithChildren)

function renderComponent(props: StepsSideNavProps) {
  return render(<StepsSideNav {...props} />)
}

describe('StepsSideNav', () => {
  const mock = {
    onStepChangeFn: jest.fn(() => 'ok'),
  }
  const props: StepsSideNavProps = {
    stepList: stepsArray,
    onStepChange: mock.onStepChangeFn,
  }

  test('should display correct class for the inProgress step', () => {
    const { container } = renderComponent(props)
    expect(container.querySelectorAll('ul')).toHaveLength(2)
    expect(container.querySelectorAll('div.subMenu ul li')).toHaveLength(2)
    expect(
      container.querySelectorAll('.json-forms-menu > ul > li'),
    ).toHaveLength(2)
    expect(props.stepList[0].inProgress).toBe(true)
    const firstLi = container
      .querySelectorAll('.json-forms-menu > ul')[0]
      .querySelectorAll('li>div')[0]
    expect(firstLi.classList.contains('static')).toBe(true)
    expect(firstLi.classList.contains('pointed')).toBe(true)
    expect(container.querySelectorAll('.pointed')).toHaveLength(1)
  })

  test('should display status icons correctly', () => {
    const { container } = renderComponent(props)
    const icons = container.querySelectorAll('span.styled-svg-wrapper')
    expect(icons).toHaveLength(4)
    expect(icons[0].getAttribute('data-svg')).toEqual('circle')
    expect(icons[1].getAttribute('data-svg')).toEqual('errorOutlined')
    expect(icons[2].getAttribute('data-svg')).toEqual('checkCircle')
    expect(icons[3].getAttribute('data-svg')).toEqual('block')
  })

  test('should call callback function with appropriate params', () => {
    const spy = jest.spyOn(mock, 'onStepChangeFn')
    renderComponent(props)
    //steps in progress will not have links so link#2 corresponds to step#3
    const button = screen.getAllByRole('button')[2]
    within(button).getByText(stepsArray[3].title)
    userEvent.click(button)
    expect(spy).toHaveBeenCalledWith(stepsArray[3])
  })

  test('should have unclickable steps if in a wizard mode', () => {
    const _props = { ...props, ...{ isWizardMode: true } }
    renderComponent(_props)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
