import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import {
  DetailsViewRow,
  DetailsViewRowProps,
} from '../../../../../lib/containers/entity_finder/details/view/DetailsViewRow'
import useGetEntityBundle from '../../../../../lib/utils/hooks/SynapseAPI/useEntityBundle'
import {
  EntityBundle,
  EntityType,
  Reference,
} from '../../../../../lib/utils/synapseTypes'

const SynapseClient = require('../../../../../lib/utils/SynapseClient')

jest.mock('../../../../../lib/utils/hooks/SynapseAPI/useEntityBundle')
const mockToggleSelection = jest.fn()

const defaultProps: DetailsViewRowProps = {
  sessionToken: 'abcd',
  entityHeader: {
    id: 'syn123',
    name: 'My File',
    lastActivity: 'yesterday',
    modifiedOn: 'today',
    modifiedBy: 100000,
    type: EntityType.FILE,
  },
  appearance: 'default',
  showVersionColumn: true,
  selectButtonType: 'checkbox',
  toggleSelection: mockToggleSelection,
}

function renderScreen(propOverrides?: Partial<DetailsViewRowProps>) {
  const tbody = document.createElement('tbody')
  return render(<DetailsViewRow {...defaultProps} {...propOverrides} />, {
    container: document.body.appendChild(tbody),
  })
}

describe('DetailsViewRow tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockAllIsIntersecting(true)
    const mockBundle: EntityBundle = {
      entity: {
        id: 'syn123',
        name: 'My Entity',
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
      },
    }
    ;(useGetEntityBundle as jest.Mock).mockImplementation(() => ({
      data: mockBundle,
    }))

    SynapseClient.getEntityVersions = jest.fn().mockResolvedValue({
      totalNumberOfResults: 2,
      results: [
        {
          id: 'syn123',
          versionNumber: 1,
          versionLabel: '1',
        },
        {
          id: 'syn123',
          versionNumber: 2,
          versionLabel: '2',
        },
      ],
    })
  })

  it('invokes toggleSelection when the row is clicked', async () => {
    const screen = renderScreen()
    userEvent.click(screen.getByRole('row'))

    const expectedArg: Reference = { targetId: 'syn123' }
    expect(mockToggleSelection).toBeCalledWith(expectedArg)
  })

  it('does nothing when clicked and disabled', async () => {
    const screen = renderScreen({ appearance: 'disabled' })

    userEvent.click(screen.getByRole('row'))

    expect(mockToggleSelection).not.toBeCalled()
  })

  describe('renders the correct button', () => {
    it('renders checkbox', async () => {
      const screen = renderScreen({ selectButtonType: 'checkbox' })
      expect(screen.getByRole('checkbox')).toBeDefined()
    })
    it('renders radio', async () => {
      const screen = renderScreen({ selectButtonType: 'radio' })
      expect(screen.getByRole('radio')).toBeDefined()
    })
    it('no button is created because of disabled state', async () => {
      const checkBoxScreen = renderScreen({
        selectButtonType: 'checkbox',
        appearance: 'disabled',
      })

      expect(() => checkBoxScreen.getByRole('checkbox')).toThrowError()

      const radioScreen = renderScreen({
        selectButtonType: 'radio',
        appearance: 'disabled',
      })

      expect(() => radioScreen.getByRole('radio')).toThrow()

      // There should still be a column for the button, just no button
      expect(checkBoxScreen.getByLabelText('is-selected')).toBeDefined()
      expect(checkBoxScreen.getByLabelText('is-selected')).toBeDefined()
    })

    it('no column is rendered', async () => {
      const screen = renderScreen({ selectButtonType: 'none' })

      expect(() => screen.getByLabelText('is-selected')).toThrowError()
    })
  })

  it('Only retrieves the entity bundle when in view', async () => {
    mockAllIsIntersecting(false)

    renderScreen()

    expect(useGetEntityBundle).toBeCalledWith(
      defaultProps.sessionToken,
      defaultProps.entityHeader.id,
      expect.anything(),
      undefined,
      {
        enabled: false,
        staleTime: 60 * 1000,
      },
    )

    mockAllIsIntersecting(true)

    expect(useGetEntityBundle).toBeCalledWith(
      defaultProps.sessionToken,
      defaultProps.entityHeader.id,
      expect.anything(),
      undefined,
      {
        enabled: true,
        staleTime: 60 * 1000,
      },
    )
  })

  describe('correct aria labels based on state', () => {
    it('default appearance', async () => {
      const row = renderScreen({ appearance: 'default' }).getByRole('row')
      expect(row).toHaveAttribute('aria-selected', 'false')
      expect(row).toHaveAttribute('aria-disabled', 'false')
      expect(row).toHaveAttribute('aria-hidden', 'false')
    })

    it('selected appearance', async () => {
      const row = renderScreen({ appearance: 'selected' }).getByRole('row')
      expect(row).toHaveAttribute('aria-selected', 'true')
      expect(row).toHaveAttribute('aria-disabled', 'false')
      expect(row).toHaveAttribute('aria-hidden', 'false')
    })

    it('disabled appearance', async () => {
      const row = renderScreen({ appearance: 'disabled' }).getByRole('row')
      expect(row).toHaveAttribute('aria-selected', 'false')
      expect(row).toHaveAttribute('aria-disabled', 'true')
      expect(row).toHaveAttribute('aria-hidden', 'false')
    })

    it('hidden appearance', async () => {
      const screen = renderScreen({ appearance: 'hidden' })
      const row = screen.getByRole('row', { hidden: true })
      expect(row).toHaveAttribute('aria-selected', 'false')
      expect(row).toHaveAttribute('aria-disabled', 'false')
      expect(row).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('version selection', () => {
    it('does not render the version column when specified', async () => {
      const showColumnWrapper = renderScreen({ showVersionColumn: true })

      expect(showColumnWrapper.getByLabelText('version')).toBeDefined()

      const hideColumnWrapper = renderScreen({ showVersionColumn: false })

      expect(() => hideColumnWrapper.getByLabelText('version')).toThrowError()
    })

    it('retrieves the versions when selected', async () => {
      mockAllIsIntersecting(false)

      const screen = renderScreen({ appearance: 'selected' })
      expect(() => screen.getByRole('option')).toThrowError()

      mockAllIsIntersecting(true)

      expect(SynapseClient.getEntityVersions).toBeCalledWith(
        defaultProps.sessionToken,
        defaultProps.entityHeader.id,
      )
      expect(screen.getByRole('option')).toBeDefined()
    })

    // it('calls toggle selection when a version is picked', async () => {
    //   const screen = renderScreen({ appearance: 'selected' })

    //   mockAllIsIntersecting(true)

    //   expect(SynapseClient.getEntityVersions).toBeCalledWith(
    //     defaultProps.sessionToken,
    //     defaultProps.entityHeader.id,
    //   )

    //   expect(screen.getByRole('listbox')).toBeDefined()
    // })

    // it('automatically selects no version if none selected', async () => {
    //   expect(true).toBe(false)
    // })

    // it('selects the correct version if one is selected', async () => {
    //   expect(true).toBe(false)
    // })
    //   })
    // })
  })
})
