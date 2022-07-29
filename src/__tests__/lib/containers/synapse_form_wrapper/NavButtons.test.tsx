import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as _ from 'lodash-es'
import React from 'react'
import {
  NavButtons,
  NavButtonsProps,
  NextStepLink,
  NextStepLinkProps,
} from '../../../../lib/containers/synapse_form_wrapper/NavButtons'
import {
  NavActionEnum,
  Step,
} from '../../../../lib/containers/synapse_form_wrapper/types'
import { steps } from '../../../../mocks/mock_drug_tool_data'

const stepsArray: Step[] = _.cloneDeep(steps)

const renderNavButtonsComponent = (props: NavButtonsProps) => {
  return render(<NavButtons {...props} />)
}
const renderNextStepLinkComponent = (props: NextStepLinkProps) => {
  return render(<NextStepLink {...props} />)
}

const mock = {
  onNavActionFn: jest.fn(() => 'ok'),
}

describe('NavButtons tests', () => {
  const props: NavButtonsProps = {
    isWizardMode: false,
    previousStepIds: ['ld50', 'acute_dosing'],
    onNavAction: mock.onNavActionFn,
    steps: stepsArray,
    currentStep: { ...stepsArray[1] },
  }

  describe('previous button', () => {
    test('if wizard, display if previousStepIds array is not empty', () => {
      const _props = { ...props, ...{ isWizardMode: true } }
      renderNavButtonsComponent(_props)
      const buttons = screen.getAllByRole('button')
      expect(
        buttons.filter(button => button.classList.contains('prev')),
      ).toHaveLength(1)
    })

    test('if wizard, do not display if previousStepIds array is empty', () => {
      const _props = { ...props, ...{ isWizardMode: true } }
      _props.previousStepIds = []
      renderNavButtonsComponent(_props)
      const buttons = screen.getAllByRole('button')
      expect(
        buttons.filter(button => button.classList.contains('prev')),
      ).toHaveLength(0)
    })

    test('if not wizard, display if not the first step', () => {
      renderNavButtonsComponent(props)
      const buttons = screen.getAllByRole('button')
      expect(
        buttons.filter(button => button.classList.contains('prev')),
      ).toHaveLength(1)
    })

    test('if not wizard, do not display if on first step', () => {
      const _props = { ...props, ...{ currentStep: stepsArray[0] } }
      renderNavButtonsComponent(_props)
      const buttons = screen.getAllByRole('button')
      expect(
        buttons.filter(button => button.classList.contains('prev')),
      ).toHaveLength(0)
    })

    it('should callback with correct params', () => {
      const spy = jest.spyOn(mock, 'onNavActionFn')
      renderNavButtonsComponent(props)
      const buttons = screen.getAllByRole('button')
      const prevButton = buttons.find(button =>
        button.classList.contains('prev'),
      )
      userEvent.click(prevButton!)
      expect(spy).toHaveBeenCalledWith(NavActionEnum.PREVIOUS)
    })
  })

  describe('next and save buttons', () => {
    test('display next if step is not final and display save on all steps', () => {
      renderNavButtonsComponent(props)
      const buttons = screen.getAllByRole('button')
      expect(
        buttons.filter(button => button.classList.contains('next')),
      ).toHaveLength(1)
      screen.getByRole('button', { name: 'SAVE' })
    })

    test('do not display next if step is final and display save on all steps', () => {
      const _props = { ...props, ...{ currentStep: stepsArray[2] } }
      expect(_props.currentStep.final).toBe(true)
      renderNavButtonsComponent(_props)
      const buttons = screen.getAllByRole('button')
      expect(
        buttons.filter(button => button.classList.contains('next')),
      ).toHaveLength(0)
      screen.getByRole('button', { name: 'SAVE' })
    })

    test('should callback with correct params', () => {
      const spy = jest.spyOn(mock, 'onNavActionFn')
      renderNavButtonsComponent(props)
      const buttons = screen.getAllByRole('button')
      const nextButton = buttons.find(button =>
        button.classList.contains('next'),
      )
      userEvent.click(nextButton!)
      expect(spy).toHaveBeenCalledWith(NavActionEnum.NEXT)
      const saveButton = screen.getByRole('button', { name: 'SAVE' })
      userEvent.click(saveButton)
      expect(spy).toHaveBeenCalledWith(NavActionEnum.SAVE)
    })
  })
})

describe('NextLink tests', () => {
  const props: NextStepLinkProps = {
    onNavAction: mock.onNavActionFn,
    steps: stepsArray,
    nextStepId: 'acute_dosing',
  }

  test('should display step name correctly', () => {
    const { container } = renderNextStepLinkComponent(props)
    const navLink = container.querySelector('span.nav-link')!
    within(navLink).getByText('Acute Dosing')
  })

  test('should call calback function with appropriate params', () => {
    const spy = jest.spyOn(mock, 'onNavActionFn')
    const { container } = renderNextStepLinkComponent(props)
    const link = container.querySelector('span.nav-link a')!

    userEvent.click(link)
    expect(spy).toHaveBeenCalledWith(stepsArray[2])
  })
})
