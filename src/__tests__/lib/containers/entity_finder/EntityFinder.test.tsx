import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import { SynapseClient } from '../../../../lib'
import EntityFinder, {
  EntityFinderProps,
} from '../../../../lib/containers/entity_finder/EntityFinder'
import { FinderScope } from '../../../../lib/containers/entity_finder/tree/TreeView'
import { EntityType } from '../../../../lib/utils/synapseTypes'

const TreeView = require('../../../../lib/containers/entity_finder/tree/TreeView')
const DetailsList = require('../../../../lib/containers/entity_finder/details/EntityDetailsList')

let invokeSetSelectedId: (containerId: string) => void

TreeView.TreeView = jest.fn()
DetailsList.EntityDetailsList = jest.fn()

const mockTreeView = TreeView.TreeView
const mockDetailsList = DetailsList.EntityDetailsList

jest.mock('../../../../lib/utils/SynapseClient', () => {
  return {
    getUserFavorites: jest.fn(),
    getEntityPath: jest.fn(),
    getEntityHeader: jest.fn(),
  }
})
const mockGetUserFavorites = SynapseClient.getUserFavorites as jest.Mock
const mockGetEntityPath = SynapseClient.getEntityPath as jest.Mock
const mockGetEntityHeader = SynapseClient.getEntityHeader as jest.Mock

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
  })

  describe('single-select toggleSelection validation', () => {
    it('adds a new entity when it is toggled', () => {})

    it('removes the entity when the current selected entity is toggled', () => {})

    it('removes the old entity when a new entity is toggled', () => {})

    it('replaces an entity when a new version is toggled', () => {})
  })

  describe('multi-select toggleSelection validation', () => {
    it('allows adding multiple entities', () => {})

    it('removes only a re-toggled entity', () => {})

    it('replaces an entity when a new version is toggled', () => {})
  })

  it('renders both the tree and the list when treeOnly is false', async () => {
    // Check that the tree drives the list via configuration
    // Check that the list drives selection
  })

  it('only renders the tree when treeOnly is true', async () => {
    // Check that the tree drives selection.
  })

  it('handles searching for terms', async () => {})

  it('handles searching for a synId', async () => {})
})
