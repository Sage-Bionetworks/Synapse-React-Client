import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  FullTextSearch,
  FullTextSearchProps,
} from '../../../lib/containers/FullTextSearch'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'

const renderComponent = (props: FullTextSearchProps) => {
  return render(<FullTextSearch {...props} />, {
    wrapper: createWrapper(),
  })
}

const mockExecuteQueryRequest = jest.fn()
const mockGetLastQueryRequest = jest.fn()

const defaultProps: FullTextSearchProps = {
  topLevelControlsState: {
    showSearchBar: true,
    showFacetFilter: true,
  },
  executeQueryRequest: mockExecuteQueryRequest,
  getLastQueryRequest: mockGetLastQueryRequest,
}

describe('FullTextSearch tests', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    mockGetLastQueryRequest.mockReturnValue({
      query: {},
    })
  })

  it('shows/hides the search bar based on prop', () => {
    const component = renderComponent(defaultProps)

    component.container.querySelector('.MuiCollapse-entered')

    renderComponent({
      ...defaultProps,
      topLevelControlsState: {
        showSearchBar: false, // call under test
        showFacetFilter: true,
      },
    })

    component.container.querySelector('.MuiCollapse-hidden')
  })

  it('adds the appropriate QueryFilter when searching', () => {
    renderComponent(defaultProps)

    const searchBox = screen.getByRole('textbox')

    const searchQuery = 'NF1'
    userEvent.type(searchBox, searchQuery + '{enter}')

    expect(mockExecuteQueryRequest).toBeCalledWith(
      expect.objectContaining({
        query: expect.objectContaining({
          additionalFilters: [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
              searchExpression: searchQuery,
            },
          ],
        }),
      }),
    )
  })

  it('enforces a minimum character requirement', () => {
    renderComponent(defaultProps)

    const searchBox = screen.getByRole('textbox')

    const searchQuery = 'NF'
    userEvent.type(searchBox, searchQuery + '{enter}')

    expect(mockExecuteQueryRequest).not.toBeCalled()
  })
})
