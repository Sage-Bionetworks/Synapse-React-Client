import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import {
  DetailsView,
  DetailsViewProps,
} from '../../../../../lib/containers/entity_finder/details/view/DetailsView'
import {
  Direction,
  EntityHeader,
  EntityType,
  SortBy,
} from '../../../../../lib/utils/synapseTypes'
const DetailsViewRow = require('../../../../../lib/containers/entity_finder/details/view/DetailsViewRow')

DetailsViewRow.DetailsViewRow = jest.fn().mockReturnValue(<tr></tr>)

const mockDetailsViewRow = DetailsViewRow.DetailsViewRow
const mockToggleSelection = jest.fn()
const mockFetchNextPage = jest.fn()
const mockSetSort = jest.fn()

const entityHeaders: EntityHeader[] = [
  {
    id: 'syn123',
    name: 'My File',
    modifiedOn: 'today',
    modifiedBy: '100000',
    type: 'org.sagebionetworks.repo.model.FileEntity',
    versionNumber: 1,
    versionLabel: 'label',
    benefactorId: 456,
    createdOn: '',
    createdBy: '',
  },
  {
    id: 'syn456',
    name: 'My Project',
    modifiedOn: 'today',
    modifiedBy: '100000',
    type: 'org.sagebionetworks.repo.model.Project',
    versionNumber: 1,
    versionLabel: 'label',
    benefactorId: 456,
    createdOn: '',
    createdBy: '',
  },
]

const defaultProps: DetailsViewProps = {
  sessionToken: 'abcd',
  showVersionSelection: true,
  selectColumnType: 'none',
  visibleTypes: Object.values(EntityType),
  selected: [],
  selectableTypes: Object.values(EntityType),
  toggleSelection: mockToggleSelection,
  entities: entityHeaders,
  queryStatus: 'success',
  queryIsFetching: false,
  hasNextPage: false,
  fetchNextPage: mockFetchNextPage,
  sort: undefined,
  setSort: mockSetSort,
  noResultsPlaceholder: <></>,
}

function renderComponent(propOverrides?: Partial<DetailsViewProps>) {
  return render(<DetailsView {...defaultProps} {...propOverrides} />)
}

describe('DetailsView tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockAllIsIntersecting(false)
  })

  describe('Renders entities', () => {
    it('Renders a row for each entity', () => {
      // We already have 2 rows that don't map to entities: the header, and the next page ref
      const UNMAPPED_ROW_COUNT = 2

      renderComponent()
      expect(mockDetailsViewRow).toBeCalledTimes(2)

      expect(screen.getAllByRole('row').length).toBe(
        entityHeaders.length + UNMAPPED_ROW_COUNT,
      )
    })

    describe('Determines correct row appearance', () => {
      it('Creates a row with the default appearance', async () => {
        renderComponent({
          selected: [],
          visibleTypes: Object.values(EntityType),
          selectableTypes: Object.values(EntityType),
        })

        expect(mockDetailsViewRow).toHaveBeenNthCalledWith(
          1,
          expect.objectContaining({ appearance: 'default' }),
          {},
        )
        expect(mockDetailsViewRow).toHaveBeenNthCalledWith(
          2,
          expect.objectContaining({ appearance: 'default' }),
          {},
        )
      })

      it('Creates a row with the selected appearance', async () => {
        renderComponent({
          selected: [{ targetId: entityHeaders[0].id }], // !
          visibleTypes: Object.values(EntityType),
          selectableTypes: Object.values(EntityType),
        })

        expect(mockDetailsViewRow).toHaveBeenNthCalledWith(
          1,
          expect.objectContaining({ appearance: 'selected' }),
          {},
        )
        expect(mockDetailsViewRow).toHaveBeenNthCalledWith(
          2,
          expect.objectContaining({ appearance: 'default' }),
          {},
        )
      })

      it('Creates a row with the disabled appearance', async () => {
        renderComponent({
          selected: [],
          visibleTypes: Object.values(EntityType),
          selectableTypes: [EntityType.PROJECT], // !
        })

        // File, not selectable
        expect(mockDetailsViewRow).toHaveBeenNthCalledWith(
          1,
          expect.objectContaining({ appearance: 'disabled' }),
          {},
        )

        // Project
        expect(mockDetailsViewRow).toHaveBeenNthCalledWith(
          2,
          expect.objectContaining({ appearance: 'default' }),
          {},
        )
      })
      it('Creates a row with the hidden appearance', async () => {
        renderComponent({
          selected: [],
          visibleTypes: [EntityType.FILE], // !
          selectableTypes: Object.values(EntityType),
        })

        // File
        expect(mockDetailsViewRow).toHaveBeenNthCalledWith(
          1,
          expect.objectContaining({ appearance: 'default' }),
          {},
        )

        // Project, not visible
        expect(mockDetailsViewRow).toHaveBeenNthCalledWith(
          2,
          expect.objectContaining({ appearance: 'hidden' }),
          {},
        )
      })
    })
  })

  it('must have the ref in view to fetch the next page', () => {
    renderComponent({
      queryStatus: 'success',
      queryIsFetching: false,
      hasNextPage: true,
    })

    expect(mockFetchNextPage).not.toHaveBeenCalled()

    mockAllIsIntersecting(true)
    expect(mockFetchNextPage).toHaveBeenCalled()
  })

  describe('Conditionally hiding columns', () => {
    it('shows both the selected and version columns', () => {
      renderComponent({
        selectColumnType: 'checkbox',
        showVersionSelection: true,
      })

      expect(screen.getAllByRole('columnheader').length).toBe(8)
    })
    it('hides the selected column', () => {
      renderComponent({
        selectColumnType: 'none',
        showVersionSelection: true,
      })

      expect(screen.getAllByRole('columnheader').length).toBe(7)
    })
    it('hides the version column', () => {
      renderComponent({
        selectColumnType: 'checkbox',
        showVersionSelection: false,
      })

      expect(screen.getAllByRole('columnheader').length).toBe(7)
    })
  })

  describe('Sort functionality', () => {
    it('requests to sort descending on new SortBy', () => {
      renderComponent({
        sort: { sortBy: SortBy.CREATED_ON, sortDirection: Direction.ASC },
        setSort: mockSetSort,
      })

      userEvent.click(screen.getAllByRole('button')[0])

      expect(mockSetSort).toBeCalledWith(SortBy.NAME, Direction.DESC)
    })

    it('toggles from descending to ascending on same SortBy', () => {
      renderComponent({
        sort: { sortBy: SortBy.CREATED_ON, sortDirection: Direction.ASC },
        setSort: mockSetSort,
      })

      userEvent.click(screen.getAllByRole('button')[1])

      expect(mockSetSort).toBeCalledWith(SortBy.CREATED_ON, Direction.DESC)
    })

    it('toggles from ascending to descending on same SortBy', () => {
      renderComponent({
        sort: { sortBy: SortBy.MODIFIED_ON, sortDirection: Direction.DESC },
        setSort: mockSetSort,
      })

      userEvent.click(screen.getAllByRole('button')[2])

      expect(mockSetSort).toBeCalledWith(SortBy.MODIFIED_ON, Direction.ASC)
    })
  })
})
