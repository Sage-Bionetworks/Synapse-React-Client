import '@testing-library/jest-dom'
import { render, waitFor, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import * as EntityFinderModule from '../../../../lib/containers/entity_finder/EntityFinder'
import {
  EntityFinderModal,
  EntityFinderModalProps,
  UNSAVED_CHANGES,
} from '../../../../lib/containers/entity_finder/EntityFinderModal'
import { FinderScope } from '../../../../lib/containers/entity_finder/tree/EntityTree'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import { EntityType, Reference } from '../../../../lib/utils/synapseTypes'

let capturedOnSelectionChange: ((selected: Reference[]) => void) | undefined

jest.spyOn(EntityFinderModule, 'default').mockImplementation(props => {
  capturedOnSelectionChange = props.onSelectedChange
  return <div data-testid="MockEntityFinder"></div>
})

const defaultProps: EntityFinderModalProps = {
  configuration: {
    initialScope: FinderScope.CURRENT_PROJECT,
    projectId: 'syn456',
    initialContainer: 'syn123',
    selectMultiple: true,
    showVersionSelection: true,
    visibleTypesInList: [EntityType.FILE],
    visibleTypesInTree: [EntityType.PROJECT, EntityType.FOLDER],
    selectableTypes: Object.values(EntityType),
    treeOnly: false,
    selectedCopy: 'Chosen Entities',
  },
  show: true,
  onClose: jest.fn(),
  title: 'Entity Finder Modal Title',
  onConfirm: jest.fn(),
  confirmButtonCopy: 'Confirm Selection',
  onCancel: jest.fn(),
}

function renderComponent(propOverrides?: Partial<EntityFinderModalProps>) {
  return render(<EntityFinderModal {...defaultProps} {...propOverrides} />, {
    wrapper: createWrapper(),
  })
}

describe('EntityFinderModal', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('Closes the dialog onCancel if no selection has been made', async () => {
    renderComponent()

    // Wait for the Entity Finder modal to appear
    const entityFinderModal = await screen.findByRole('dialog')
    within(entityFinderModal).findByText('Entity Finder Modal Title')

    // Get the onSelectionChange function passed to the mocked Entity Finder component
    await waitFor(() => {
      expect(capturedOnSelectionChange).toBeDefined()
    })

    // (Optionally) simulate selecting nothing, since the warning modal should occur if the selection is empty
    capturedOnSelectionChange!([])

    // Click cancel
    const cancelButton = within(entityFinderModal).getByRole('button', {
      name: 'Cancel',
    })
    userEvent.click(cancelButton)

    // The onCancel prop should be called
    expect(defaultProps.onCancel).toHaveBeenCalledTimes(1)
  })

  it('Shows a warning if items are selected on cancel', async () => {
    renderComponent()

    // Wait for the Entity Finder modal to appear
    let entityFinderModal = await screen.findByRole('dialog')
    within(entityFinderModal).findByText('Entity Finder Modal Title')

    // Get the onSelectionChange function passed to the mocked Entity Finder component
    await waitFor(() => {
      expect(capturedOnSelectionChange).toBeDefined()
    })

    // Simulate making a selection with the Entity Finder
    capturedOnSelectionChange!([{ targetId: 'syn123', targetVersionNumber: 1 }])

    // Attempt to close the modal with the cancel button
    let cancelButton = within(entityFinderModal).getByRole('button', {
      name: 'Cancel',
    })
    userEvent.click(cancelButton)

    // Unsaved Changes modal appears
    let unsavedChangedModal = await screen.findByRole('dialog')
    within(unsavedChangedModal).findByText(UNSAVED_CHANGES)

    // Cancel to close the warning modal
    const cancelWarning = within(unsavedChangedModal).getByRole('button', {
      name: 'Cancel',
    })
    userEvent.click(cancelWarning)

    // The Entity Finder modal appears once more
    entityFinderModal = await screen.findByRole('dialog')
    within(entityFinderModal).findByText('Entity Finder Modal Title')

    // Click cancel again so the modal appears (confirming that the selection is not lost)
    cancelButton = within(entityFinderModal).getByRole('button', {
      name: 'Cancel',
    })
    userEvent.click(cancelButton)
    unsavedChangedModal = await screen.findByRole('dialog')
    within(unsavedChangedModal).findByText(UNSAVED_CHANGES)

    // Confirm closing the entity finder modal and verify that the onCancel prop is called
    const confirmWarning = within(unsavedChangedModal).getByRole('button', {
      name: 'Close Finder',
    })
    userEvent.click(confirmWarning)

    expect(unsavedChangedModal).not.toBeVisible()
    expect(defaultProps.onCancel).toHaveBeenCalledTimes(1)
  })
})
