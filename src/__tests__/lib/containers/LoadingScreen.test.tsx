import * as React from 'react'
import { BlockingLoader, BlockingLoaderProps } from '../../../lib/containers/LoadingScreen'
import { mount } from 'enzyme'

const mockCallback = jest.fn()

const defaultProps: BlockingLoaderProps = {
    show: true,
    onCancel: undefined,
    currentEntities: undefined,
    totalEntities: undefined,
}

describe('basic functionality', () => {
    it('shows cancel button when loading can be cancelled', () => {
        const wrapper = mount(<BlockingLoader {...defaultProps} onCancel={mockCallback}/>)
        expect(wrapper.find('button').text()).toBe('Cancel')
    })

    it('should not show cancel button when loading cannot be cancelled', () => {
        const wrapper = mount(<BlockingLoader {...defaultProps}/>)
        expect(wrapper.find('button').exists()).toBeFalsy()
    })

    it('should show a progess bar loader if total number of entities are known', () => {
        const wrapper = mount(<BlockingLoader {...defaultProps} onCancel={mockCallback} totalEntities={3}/>)
        expect(wrapper.find('.SpinnerContainer').find('.bar-loader').exists()).toBeTruthy()
    })

    it('should show the number of entites currently loading when known', () => {
        const wrapper = mount(<BlockingLoader {...defaultProps} currentEntities={4}/>)
        expect(wrapper.find('.SpinnerContainer').text()).toBe('Fetching 4')
    })
})