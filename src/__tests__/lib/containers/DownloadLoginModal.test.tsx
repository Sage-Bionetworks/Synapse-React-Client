import { ReactWrapper, mount } from 'enzyme'
import * as React from 'react'
import {
  DownloadLoginModal,
  DownloadLoginModalProps,
} from '../../../lib/containers/table/table-top/DownloadLoginModal'

const mockCallback = jest.fn()

function createTestProps(
  overrides?: DownloadLoginModalProps,
): DownloadLoginModalProps {
  return {
    showModal: true,
    onHide: mockCallback,
    ...overrides,
  }
}

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
let props: DownloadLoginModalProps

function init(overrides?: DownloadLoginModalProps) {
  props = createTestProps(overrides)
  wrapper = mount(<DownloadLoginModal {...props} />)
}

beforeEach(() => init())

describe('basic function', () => {
  it('should render with explanqtory links and without login', () => {
    expect(wrapper.find('ModalHeader')).toHaveLength(1)
    expect(wrapper.find('ModalFooter').find('button')).toHaveLength(2)
    expect(
      wrapper
        .find('ModalFooter')
        .find('button')
        .at(0)
        .text(),
    ).toBe('CANCEL')
    expect(
      wrapper
        .find('ModalFooter')
        .find('button')
        .at(1)
        .text(),
    ).toBe('Sign in')
    expect(wrapper.find('a')).toHaveLength(2)
    expect(wrapper.find('Login')).toHaveLength(0)
  })

  it('should display Login  and hide header and it\'s "sign-in" button when "Sign in" is clicked', () => {
    expect(
      wrapper
        .find('ModalFooter')
        .find('button')
        .findWhere(n => n.text() === 'Sign in' && n.type() === 'button'),
    ).toHaveLength(1)

    wrapper
      .find('ModalFooter')
      .find('button')
      .at(1)
      .simulate('click')
    wrapper = wrapper.update()
    expect(wrapper.find('ModalFooter').find('button')).toHaveLength(1)
    expect(wrapper.find('Login')).toHaveLength(1)
    const but = wrapper.find('Login').find('button')
    expect(
      wrapper
        .find('Login')
        .find('button')
        .findWhere(n => n.text() === 'Sign in' && n.type() === 'button'),
    ).toHaveLength(1)
    expect(
      wrapper
        .find('ModalFooter')
        .find('button')
        .findWhere(n => n.text() === 'Sign in' && n.type() === 'button'),
    ).toHaveLength(0)
  })
})
