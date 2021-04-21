import '@testing-library/jest-dom'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { when } from 'jest-when'
import React from 'react'
import { SynapseClient } from '../../../../lib'
import {
  EntityDetailsListDataConfiguration,
  EntityDetailsListDataConfigurationType,
} from '../../../../lib/containers/entity_finder/details/EntityDetailsList'
import EntityFinder, {
  EntityFinderProps,
} from '../../../../lib/containers/entity_finder/EntityFinder'
import { FinderScope } from '../../../../lib/containers/entity_finder/tree/TreeView'
import useGetEntityBundle from '../../../../lib/utils/hooks/SynapseAPI/useEntityBundle'
import {
  EntityHeader,
  EntityType,
  PaginatedResults,
  Reference,
} from '../../../../lib/utils/synapseTypes'

jest.mock('../../../../lib/utils/hooks/SynapseAPI/useEntityBundle')
jest.mock('react-reflex', () => {
  return {
    ReflexContainer: jest
      .fn()
      .mockImplementation(({ children }) => <div>{children}</div>),
    ReflexElement: jest
      .fn()
      .mockImplementation(({ children }) => <div>{children}</div>),
    ReflexSplitter: jest.fn().mockImplementation(() => <div></div>),
  }
})

const TreeView = require('../../../../lib/containers/entity_finder/tree/TreeView')
const DetailsList = require('../../../../lib/containers/entity_finder/details/EntityDetailsList')

let invokeToggleSelectionViaTable: (reference: Reference) => void
let invokeToggleSelectionViaTree: (reference: Reference) => void
let invokeSetConfigViaTree: (
  configuration: EntityDetailsListDataConfiguration,
) => void

TreeView.TreeView = jest
  .fn()
  .mockImplementation(({ toggleSelection, setDetailsViewConfiguration }) => {
    invokeToggleSelectionViaTree = reference => {
      toggleSelection(reference)
    }
    invokeSetConfigViaTree = configuration => {
      setDetailsViewConfiguration(configuration)
    }
    return <div role="tree"></div>
  })
DetailsList.EntityDetailsList = jest
  .fn()
  .mockImplementation(({ toggleSelection }) => {
    invokeToggleSelectionViaTable = (reference: Reference) => {
      toggleSelection(reference)
    }
    return <div role="table"></div>
  })

const mockTreeView = TreeView.TreeView
const mockDetailsList = DetailsList.EntityDetailsList

jest.mock('../../../../lib/utils/SynapseClient', () => {
  return {
    getEntityPath: jest.fn(),
    getEntityHeader: jest.fn(),
    getEntityHeaders: jest.fn(),
  }
})
const mockGetEntityHeaders = SynapseClient.getEntityHeaders as jest.Mock
const mockUseGetEntityBundle = useGetEntityBundle as jest.Mock

const mockOnSelectionChange = jest.fn()

const defaultProps: EntityFinderProps = {
  sessionToken: 'abcd',
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: 'syn456',
  initialContainer: 'syn123',
  selectMultiple: true,
  onSelectedChange: mockOnSelectionChange,
  showVersionSelection: true,
  visibleTypesInList: [EntityType.FILE],
  visibleTypesInTree: [EntityType.PROJECT, EntityType.FOLDER],
  selectableTypes: Object.values(EntityType),
  treeOnly: false,
  selectedCopy: 'Chosen Entities',
}

function renderComponent(propOverrides?: Partial<EntityFinderProps>) {
  return render(<EntityFinder {...defaultProps} {...propOverrides} />)
}

describe('EntityFinder tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    mockUseGetEntityBundle.mockReturnValue({
      data: {
        entity: {
          id: 'syn123',
          name: 'My file entity',
          concreteType: 'org.sagebionetworks.repo.model.FileEntity',
        },
      },
    })
  })

  describe('single-select toggleSelection validation', () => {
    it('adds a new entity when it is toggled', async () => {
      renderComponent({ selectMultiple: false })

      expect(mockOnSelectionChange).not.toBeCalled()

      const reference: Reference = {
        targetId: 'syn123',
        targetVersionNumber: undefined,
      }

      // action under test
      act(() => {
        invokeToggleSelectionViaTable(reference)
      })

      await waitFor(() =>
        expect(mockOnSelectionChange).toBeCalledWith([reference]),
      )
    })

    it('removes the entity when the current selected entity is toggled', async () => {
      renderComponent({ selectMultiple: false })
      const reference: Reference = {
        targetId: 'syn123',
        targetVersionNumber: undefined,
      }

      act(() => {
        invokeToggleSelectionViaTable(reference)
      })

      await waitFor(() => expect(mockOnSelectionChange).toBeCalled())

      // action under test - remove the current reference
      act(() => {
        invokeToggleSelectionViaTable(reference)
      })
      await waitFor(() => expect(mockOnSelectionChange).toBeCalledWith([]))
    })

    it('removes the old entity when a new entity is toggled', async () => {
      renderComponent({ selectMultiple: false })
      const reference1: Reference = {
        targetId: 'syn123',
        targetVersionNumber: undefined,
      }
      const reference2: Reference = {
        targetId: 'syn456',
        targetVersionNumber: undefined,
      }

      act(() => {
        invokeToggleSelectionViaTable(reference1)
      })
      await waitFor(() => expect(mockOnSelectionChange).toBeCalled())

      // action under test - replace the current reference with the new one
      act(() => {
        invokeToggleSelectionViaTable(reference2)
      })

      await waitFor(() =>
        expect(mockOnSelectionChange).toBeCalledWith([reference2]),
      )
    })

    it('replaces an entity with the same ID when a new version is toggled', async () => {
      renderComponent({ selectMultiple: false })
      const reference1: Reference = {
        targetId: 'syn123',
        targetVersionNumber: undefined,
      }
      const reference2: Reference = {
        targetId: 'syn123',
        targetVersionNumber: 5,
      }

      act(() => {
        invokeToggleSelectionViaTable(reference1)
      })

      await waitFor(() => expect(mockOnSelectionChange).toBeCalled())

      // action under test - replace the old reference with the new one, which has the same ID but a different version
      act(() => {
        invokeToggleSelectionViaTable(reference2)
      })

      await waitFor(() =>
        expect(mockOnSelectionChange).toBeCalledWith([reference2]),
      )
    })
  })

  describe('multi-select toggleSelection validation', () => {
    it('allows adding multiple entities', async () => {
      renderComponent({ selectMultiple: true })

      expect(mockOnSelectionChange).not.toBeCalled()

      const reference1: Reference = {
        targetId: 'syn123',
        targetVersionNumber: undefined,
      }

      const reference2: Reference = {
        targetId: 'syn456',
        targetVersionNumber: undefined,
      }

      // action under test -- add multiple entities
      act(() => {
        invokeToggleSelectionViaTable(reference1)
        invokeToggleSelectionViaTable(reference2)
      })

      await waitFor(() =>
        expect(mockOnSelectionChange).toBeCalledWith([reference1, reference2]),
      )
    })

    it('removes only a re-toggled entity', async () => {
      renderComponent({ selectMultiple: true })

      expect(mockOnSelectionChange).not.toBeCalled()

      const reference1: Reference = {
        targetId: 'syn123',
        targetVersionNumber: undefined,
      }

      const reference2: Reference = {
        targetId: 'syn456',
        targetVersionNumber: undefined,
      }

      act(() => {
        invokeToggleSelectionViaTable(reference1)
        invokeToggleSelectionViaTable(reference2)
      })

      await waitFor(() =>
        expect(mockOnSelectionChange).toBeCalledWith([reference1, reference2]),
      )

      // action under test -- toggle reference 1 to remove it, while keeping reference 2
      act(() => {
        invokeToggleSelectionViaTable(reference1)
      })

      await waitFor(() =>
        expect(mockOnSelectionChange).toBeCalledWith([reference2]),
      )
    })

    it('replaces an entity when a new version is toggled', async () => {
      renderComponent({ selectMultiple: true })

      expect(mockOnSelectionChange).not.toBeCalled()

      const reference1: Reference = {
        targetId: 'syn123',
        targetVersionNumber: undefined,
      }

      const reference2: Reference = {
        targetId: 'syn123',
        targetVersionNumber: 5,
      }

      // action under test -- toggling a reference with the same ID but new version should replace the selection
      act(() => {
        invokeToggleSelectionViaTable(reference1)
        invokeToggleSelectionViaTable(reference2)
      })

      await waitFor(() =>
        expect(mockOnSelectionChange).toBeCalledWith([reference2]),
      )
    })
  })

  it('renders both the tree and the list when treeOnly is false', async () => {
    renderComponent({ treeOnly: false })

    expect(screen.getByRole('tree')) // Tree has rendered
    expect(screen.getByRole('table')) // Table/list has rendered

    const configuration: EntityDetailsListDataConfiguration = {
      type: EntityDetailsListDataConfigurationType.USER_PROJECTS,
      getProjectParams: {
        sort: 'LAST_ACTIVITY',
      },
    }

    // Check that the tree drives the list via configuration
    act(() => {
      invokeSetConfigViaTree(configuration)
    })
    await waitFor(() =>
      expect(mockDetailsList).toHaveBeenLastCalledWith(
        expect.objectContaining({
          configuration: configuration, // !
          sessionToken: defaultProps.sessionToken,
          selectableTypes: defaultProps.selectableTypes,
          visibleTypes: [
            ...defaultProps.visibleTypesInList!,
            ...defaultProps.selectableTypes!,
          ],
        }),
        {},
      ),
    )

    const reference: Reference = {
      targetId: 'syn123',
    }

    // Check that the list gets the selected entities as they are updated
    act(() => {
      invokeToggleSelectionViaTable(reference)
    })
    await waitFor(() =>
      expect(mockDetailsList).toHaveBeenLastCalledWith(
        expect.objectContaining({
          selected: [reference],
        }),
        {},
      ),
    )
  })

  it('only renders the tree when treeOnly is true', async () => {
    renderComponent({ treeOnly: true })

    expect(screen.getByRole('tree')) // Tree has rendered
    expect(() => screen.getByRole('table')).toThrowError() // Table/list has not rendered

    const reference: Reference = {
      targetId: 'syn123',
    }

    // Check that the tree drives selections.
    act(() => {
      invokeToggleSelectionViaTree(reference)
    })
    await waitFor(() =>
      expect(mockOnSelectionChange).toBeCalledWith([reference]),
    )
  })

  it('clicking the search button opens the input field', async () => {
    renderComponent({ treeOnly: true })

    // Tree should be visible before we start search. No table should be visible
    expect(() => screen.getByRole('tree')).not.toThrowError()
    expect(() => screen.getByRole('table')).toThrowError()

    // Don't show the search box before the button is clicked
    expect(() => screen.getByRole('textbox')).toThrowError()

    userEvent.click(screen.getByText('Search all of Synapse'))
    await waitFor(() => screen.getByRole('textbox'))

    // The tree should be hidden when searching. The table of search results should be visible
    expect(() => screen.getByRole('tree')).toThrowError()
    expect(() => screen.getByRole('table')).not.toThrowError()

    // Close the search
    userEvent.click(screen.getByText('Back to Browse'))

    // Tree should come back, table should be gone
    await waitFor(() => screen.getByRole('tree'))
    expect(() => screen.getByRole('table')).toThrowError()

    // Search input field should be gone too
    expect(() => screen.getByRole('textbox')).toThrowError()
  })

  it('handles searching for terms', async () => {
    renderComponent()

    const query = 'my search terms '
    const queryTerms = ['my', 'search', 'terms']
    userEvent.click(screen.getByText('Search all of Synapse'))
    await waitFor(() => screen.getByRole('textbox'))
    userEvent.type(screen.getByRole('textbox'), query)
    userEvent.type(screen.getByRole('textbox'), '{enter}')

    await waitFor(() =>
      expect(mockDetailsList).toBeCalledWith(
        expect.objectContaining({
          configuration: {
            type: EntityDetailsListDataConfigurationType.ENTITY_SEARCH,
            query: {
              queryTerm: queryTerms,
            },
          },
        }),
        {},
      ),
    )
  })

  it('handles searching for a synId', async () => {
    renderComponent()

    const entityId = 'syn123'
    const version = 2

    const entityHeaderResult = { results: [{ id: entityId }] }
    const entityHeaderResultWithVersion: PaginatedResults<
      Partial<EntityHeader>
    > = {
      results: [{ id: entityId, versionNumber: version }],
    }

    when(mockGetEntityHeaders)
      .calledWith([{ targetId: entityId }], defaultProps.sessionToken)
      .mockResolvedValue(entityHeaderResult)

    when(mockGetEntityHeaders)
      .calledWith(
        [{ targetId: entityId, targetVersionNumber: version }],
        defaultProps.sessionToken,
      )
      .mockResolvedValue(entityHeaderResultWithVersion)

    userEvent.click(screen.getByText('Search all of Synapse'))
    await waitFor(() => screen.getByRole('textbox'))
    userEvent.type(screen.getByRole('textbox'), entityId)
    userEvent.type(screen.getByRole('textbox'), '{enter}')

    await waitFor(() =>
      expect(mockDetailsList).toBeCalledWith(
        expect.objectContaining({
          configuration: {
            type: EntityDetailsListDataConfigurationType.HEADER_LIST,
            headerList: entityHeaderResult.results,
          },
        }),
        {},
      ),
    )
    expect(mockGetEntityHeaders).toBeCalledTimes(1)

    // Search with a version number
    userEvent.clear(screen.getByRole('textbox'))
    userEvent.type(screen.getByRole('textbox'), `${entityId}.${version}`)
    userEvent.type(screen.getByRole('textbox'), '{enter}')
    await waitFor(() =>
      expect(mockDetailsList).toBeCalledWith(
        expect.objectContaining({
          configuration: {
            type: EntityDetailsListDataConfigurationType.HEADER_LIST,
            headerList: entityHeaderResultWithVersion.results,
          },
        }),
        {},
      ),
    )

    expect(mockGetEntityHeaders).toHaveBeenCalledTimes(2)
  })
})
