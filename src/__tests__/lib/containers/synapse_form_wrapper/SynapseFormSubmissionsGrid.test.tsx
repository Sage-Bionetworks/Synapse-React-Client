import * as React from 'react'
import { shallow } from 'enzyme'
import UserFileGrid, {
  SynapseFormSubmissionGridProps,
} from '../../../../lib/containers/synapse_form_wrapper/SynapseFormSubmissionsGrid'

import {
  formListDataSubmitted,
  formListDataInProgress,
} from '../../../../mocks/mock_drug_tool_data'
const SynapseClient = require('../../../../lib/utils/SynapseClient')

const token: string = '123444'
const pathpart = 'someTool'
const formGroupId = '5'
const itemNoun = 'submission'
let synapseCall: Function

const createShallowComponent = async (
  props: SynapseFormSubmissionGridProps,
  disableLifecycleMethods: boolean = false,
) => {
  const wrapper = await shallow<UserFileGrid>(<UserFileGrid {...props} />, {
    disableLifecycleMethods,
  })

  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('basic tests', () => {
  const props: SynapseFormSubmissionGridProps = {
    token,
    pathpart,
    formGroupId,
    itemNoun,
  }

  beforeEach(() => {
    synapseCall = SynapseClient.listFormData = jest
      .fn()
      .mockResolvedValue(formListDataSubmitted)
      .mockResolvedValueOnce(formListDataSubmitted)
      .mockResolvedValueOnce(formListDataInProgress)
  })

  it('displays table with file list when files are present', async () => {
    const { wrapper, instance } = await createShallowComponent(props)
    await instance.componentDidMount()
    expect(wrapper).toBeDefined()
    expect(wrapper.find('table')).toHaveLength(2)
  })

  it('not display the table when there are no files', async () => {
    const { instance } = await createShallowComponent(props)
    const spy = jest.spyOn(instance, 'getUserFileListing')
    await instance.componentDidMount()
    expect(spy).toHaveBeenCalledTimes(1)
    expect(synapseCall).toHaveBeenCalledWith(
      expect.objectContaining({ filterByState: ['WAITING_FOR_SUBMISSION'] }),
      expect.anything(),
    )
    expect(synapseCall).toHaveBeenCalledWith(
      expect.objectContaining({
        filterByState: ['SUBMITTED_WAITING_FOR_REVIEW', 'ACCEPTED', 'REJECTED'],
      }),
      expect.anything(),
    )
  })

  it('not display an icon instead of the tables when there are no files', async () => {
    SynapseClient.listFormData = jest.fn(() => Promise.resolve({ page: [] }))
    const { wrapper, instance } = await createShallowComponent(props)
    await instance.componentDidMount()
    expect(wrapper).toBeDefined()
    expect(wrapper.find('table')).toHaveLength(0)
    // In test, SVG import becomes 'ReactComponent'. Handled by SVGR when built
    expect(wrapper.find('ReactComponent').length).toBe(1)
  })

  it('should modify the modal state when clicking "delete"', async () => {
    const spy = jest.spyOn(SynapseClient, 'deleteEntity')
    const { wrapper, instance } = await createShallowComponent(props)
    await instance.componentDidMount()
    const button = wrapper.find('[aria-label="delete"]').first()
    expect(instance.state.modalContext).not.toBeDefined
    button.simulate('click')
    expect(instance.state.modalContext).toBeDefined
    expect(spy).not.toHaveBeenCalled()
  })

  it('should call deleteEntity with correct params', async () => {
    const spy = jest.spyOn(SynapseClient, 'deleteFormData')
    const { instance } = await createShallowComponent(props)
    await instance.componentDidMount()
    await instance.deleteFile('123', '456')
    expect(spy).toHaveBeenCalledWith('456', '123')
  })

  it('should have view more link if there is a token for next page and call the back end fn to get the additional items', async () => {
    const { instance, wrapper } = await createShallowComponent(props)
    const spy = jest.spyOn(SynapseClient, 'listFormData')
    await instance.componentDidMount()
    const viewMoreButton = wrapper.find('.view-more button')
    expect(viewMoreButton).toHaveLength(1)
    viewMoreButton.simulate('click')
    expect(spy).lastCalledWith(
      {
        filterByState: ['WAITING_FOR_SUBMISSION'],
        groupId: formGroupId,
        nextPageToken: formListDataInProgress.nextPageToken,
      },
      token,
    )
  })
})
