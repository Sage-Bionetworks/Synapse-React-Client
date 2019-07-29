import * as React from 'react'
import { mount } from 'enzyme'
import ModalDownload, { ModalDownloadProps } from '../../../lib/containers/ModalDownload'
import { csvOption, tsvOption } from 'lib/containers/ModalDownload.FormSchema'

const createShallowComponent = (props: ModalDownloadProps) => {
  const wrapper = mount<ModalDownload>(
      <ModalDownload
        {...props}
      />
    )
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('it performs the expected functionality', () => {
  const mockClose = jest.fn()
  const SynapseClient = require('../../../lib/utils/SynapseClient')
  const mockGetDownloadFromTableRequest = jest.fn(() => Promise.resolve({
    resultFileHandleId: 'hello'
  }))
  SynapseClient.getDownloadFromTableRequest = mockGetDownloadFromTableRequest
  SynapseClient.getFileHandleByIdURL = jest.fn(() => 'testurl')
  const props: ModalDownloadProps = {
    sql: 'SELECT * FROM SYN123',
    entityId: 'SYN123',
    onClose: mockClose
  }

  it('renders without crashing', () => {
    const { wrapper } = createShallowComponent(props)
    expect(wrapper).toBeDefined()
  })

  it('generates a csv file', async () => {
    const { wrapper } = await createShallowComponent(props)
    expect(wrapper).toBeDefined()
    // step 1 - select csv option
    const csvInputElement = wrapper.find(`input[value="${csvOption}"]`)
    await csvInputElement.simulate('change')
    await wrapper.find('button[type="submit"]').simulate('submit')
    // step 2 - verify UI has download button showing
    expect(wrapper.find('button[type="submit"]').text()).toEqual('Download')
    expect(mockGetDownloadFromTableRequest).toHaveBeenCalledWith(expect.objectContaining({
      csvTableDescriptor: { separator: ',' },
      writeHeader: true,
      includeRowIdAndRowVersion: true
    }), undefined)
  })

  it.only('generates a tsv file without header', async () => {
    const { wrapper } = await createShallowComponent(props)
    expect(wrapper).toBeDefined()
    // step 1 - select tsv option
    const csvInputElement = wrapper.find(`input[value="${tsvOption}"]`)
    // await csvInputElement.simulate('change', {target: { checked: true }})
    await csvInputElement.simulate('change')
    // step 2 - de-select write header option
    const writerHeaderInputElement = wrapper.find(`input[type="checkbox"]`)
    expect(writerHeaderInputElement.at(0).prop('checked')).toBe(true)
    wrapper.find(`input[type="checkbox"]`).at(0).props().checked = false
    expect(writerHeaderInputElement.at(0).prop('checked')).toBe(false)
    await wrapper.find('button[type="submit"]').simulate('submit')
    // step 2 - verify UI has download button showing
    expect(wrapper.find('button[type="submit"]').text()).toEqual('Download')
    expect(mockGetDownloadFromTableRequest).toHaveBeenCalledWith(expect.objectContaining({
      csvTableDescriptor: { separator: '\t' },
      writeHeader: false,
      includeRowIdAndRowVersion: true
    }), undefined)
  })
})
