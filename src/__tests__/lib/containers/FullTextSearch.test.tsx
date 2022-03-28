import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { FullTextSearch } from '../../../lib/containers/FullTextSearch'
import {
  QueryWrapperContextProvider,
  QueryWrapperContextType,
} from '../../../lib/containers/QueryWrapper'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'

const renderComponent = (
  defaultQueryWrapperContext: Partial<QueryWrapperContextType>,
) => {
  return render(
    <QueryWrapperContextProvider
      queryWrapperContext={defaultQueryWrapperContext}
    >
      <FullTextSearch />
    </QueryWrapperContextProvider>,
    {
      wrapper: createWrapper(),
    },
  )
}

const mockExecuteQueryRequest = jest.fn()
const mockGetLastQueryRequest = jest.fn()

const queryWrapperContext: Partial<QueryWrapperContextType> = {
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
    const component = renderComponent(queryWrapperContext)

    component.container.querySelector('.MuiCollapse-entered')

    renderComponent({
      ...queryWrapperContext,
      topLevelControlsState: {
        showSearchBar: false, // call under test
        showFacetFilter: true,
      },
    })

    component.container.querySelector('.MuiCollapse-hidden')
  })

  it('adds the appropriate QueryFilter when searching', () => {
    renderComponent(queryWrapperContext)

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
    renderComponent(queryWrapperContext)

    const searchBox = screen.getByRole('textbox')

    const searchQuery = 'NF'
    userEvent.type(searchBox, searchQuery + '{enter}')

    expect(mockExecuteQueryRequest).not.toBeCalled()
  })
})
