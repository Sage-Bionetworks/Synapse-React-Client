import * as React from 'react'
import { shallow } from 'enzyme'
import * as _ from 'lodash'
import {
  Step,
  NavActionEnum,
} from '../../../../lib/containers/drug_upload_tool/types'
import {
  NavButtons,
  NavButtonsProps,
  NextStepLink,
  NextStepLinkProps,
} from '../../../../lib/containers/drug_upload_tool/NavButtons'
import { steps } from '../../../../mocks/mock_drug_tool_data'

const stepsArray: Step[] = _.cloneDeep(steps)

const createShallowNavButtonsComponent = (props: NavButtonsProps) => {
  const wrapper = shallow(<NavButtons {...props} />)
  return { wrapper }
}
const createShallowNextStepLinkComponent = (props: NextStepLinkProps) => {
  const wrapper = shallow(<NextStepLink {...props} />)
  return { wrapper }
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
    it('if wizard, only display if previousStepIds array is not empty', () => {
      const _props = { ...props, ...{ isWizardMode: true } }
      let { wrapper } = createShallowNavButtonsComponent(_props)
      expect(wrapper.find('button.prev')).toHaveLength(1)
      _props.previousStepIds = []
      wrapper = createShallowNavButtonsComponent(_props).wrapper
      expect(wrapper.find('button.prev')).toHaveLength(0)
    })

    it('if not wizard, only display if not the first step', () => {
      let { wrapper } = createShallowNavButtonsComponent(props)
      expect(wrapper.find('button.prev')).toHaveLength(1)
      const _props = { ...props, ...{ currentStep: stepsArray[0] } }
      wrapper = createShallowNavButtonsComponent(_props).wrapper
      expect(wrapper.find('button.prev')).toHaveLength(0)
    })

    it('should callback with correct params', async () => {
      const spy = jest.spyOn(mock, 'onNavActionFn')
      let { wrapper } = createShallowNavButtonsComponent(props)
      wrapper.find('button.prev').simulate('click')
      expect(spy).toHaveBeenCalledWith(NavActionEnum.PREVIOUS)
    })
  })

  describe('next and save buttons', () => {
    it('only display next if step is not final and display save on all steps', () => {
      let { wrapper } = createShallowNavButtonsComponent(props)
      expect(wrapper.find('button.next')).toHaveLength(1)
      expect(wrapper.find('button.save')).toHaveLength(1)
      const _props = { ...props, ...{ currentStep: stepsArray[2] } }
      expect(_props.currentStep.final).toBe(true)
      wrapper = createShallowNavButtonsComponent(_props).wrapper
      expect(wrapper.find('button.next')).toHaveLength(0)
      expect(wrapper.find('button.save')).toHaveLength(1)
    })

    it('should callback with correct params', () => {
      const spy = jest.spyOn(mock, 'onNavActionFn')
      let { wrapper } = createShallowNavButtonsComponent(props)
      wrapper.find('button.next').simulate('click')
      expect(spy).toHaveBeenCalledWith(NavActionEnum.NEXT)
      wrapper.find('button.save').simulate('click')
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

  it('should display step name correctly', () => {
    const { wrapper } = createShallowNextStepLinkComponent(props)
    expect(wrapper).toBeDefined()
    expect(wrapper.find('span.nav-link').text()).toContain('Acute Dosing')
  })

  it('should call calback function with appropriate params', () => {
    const spy = jest.spyOn(mock, 'onNavActionFn')
    const { wrapper } = createShallowNextStepLinkComponent(props)
    wrapper.find('span.nav-link a').simulate('click')
    expect(spy).toHaveBeenCalledWith(stepsArray[2])
  })
})
