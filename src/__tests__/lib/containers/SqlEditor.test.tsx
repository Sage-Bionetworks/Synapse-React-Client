import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  QueryWrapperContextProvider,
  QueryWrapperContextType,
} from '../../../lib/containers/QueryWrapper'
import SqlEditor from '../../../lib/containers/SqlEditor'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'

const renderComponent = (
  defaultQueryWrapperContext: Partial<QueryWrapperContextType>,
) => {
  return render(
    <QueryWrapperContextProvider
      queryWrapperContext={defaultQueryWrapperContext}
    >
      <SqlEditor />
    </QueryWrapperContextProvider>,
    {
      wrapper: createWrapper(),
    },
  )
}

const mockExecuteQueryRequest = jest.fn()
const mockGetLastQueryRequest = jest.fn()

const defaultQueryWrapperContext: Partial<QueryWrapperContextType> = {
  topLevelControlsState: {
    showSqlEditor: true,
    showFacetFilter: true,
  },
  executeQueryRequest: mockExecuteQueryRequest,
  getLastQueryRequest: mockGetLastQueryRequest,
}

describe('SqlEditor tests', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    mockGetLastQueryRequest.mockReturnValue({
      query: {},
    })
  })

  it('shows/hides the sql editor based on prop', () => {
    const component = renderComponent(defaultQueryWrapperContext)
    component.container.querySelector('.MuiCollapse-entered')
    renderComponent({
      ...defaultQueryWrapperContext,
      topLevelControlsState: {
        showSqlEditor: false, // call under test
        showFacetFilter: true,
      },
    })
    component.container.querySelector('.MuiCollapse-hidden')
  })

  it('edits the sql', () => {
    renderComponent(defaultQueryWrapperContext)
    const box = screen.getByRole('textbox')
    const newSql = 'select study from syn456'
    userEvent.type(box, newSql + '{enter}')
    expect(mockExecuteQueryRequest).toBeCalledWith(
      expect.objectContaining({
        query: expect.objectContaining({
          sql: newSql,
        }),
      }),
    )
  })
})
