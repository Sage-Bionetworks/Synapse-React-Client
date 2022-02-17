import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SqlEditor, { SqlEditorProps } from '../../../lib/containers/SqlEditor'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'

const renderComponent = (props: SqlEditorProps) => {
  return render(<SqlEditor {...props} />, {
    wrapper: createWrapper(),
  })
}

const mockExecuteQueryRequest = jest.fn()
const mockGetLastQueryRequest = jest.fn()

const defaultProps: SqlEditorProps = {
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
    const component = renderComponent(defaultProps)
    component.container.querySelector('.MuiCollapse-entered')
    renderComponent({
      ...defaultProps,
      topLevelControlsState: {
        showSqlEditor: false, // call under test
        showFacetFilter: true,
      },
    })
    component.container.querySelector('.MuiCollapse-hidden')
  })

  it('edits the sql', () => {
    renderComponent(defaultProps)
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
