import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import {
  DetailsViewRow,
  DetailsViewRowProps,
} from '../../../../../lib/containers/entity_finder/details/view/DetailsViewRow'
import useGetEntityBundle from '../../../../../lib/utils/hooks/SynapseAPI/useEntityBundle'
import { useGetUserProfileWithProfilePic } from '../../../../../lib/utils/hooks/SynapseAPI/useUserBundle'
import {
  EntityBundle,
  PaginatedResults,
  Reference,
} from '../../../../../lib/utils/synapseTypes'
import { VersionInfo } from '../../../../../lib/utils/synapseTypes/VersionInfo'

const SynapseClient = require('../../../../../lib/utils/SynapseClient')

jest.mock('../../../../../lib/utils/hooks/SynapseAPI/useEntityBundle')
jest.mock('../../../../../lib/utils/hooks/SynapseAPI/useUserBundle', () => {
  return {
    useGetUserProfileWithProfilePic: jest.fn().mockReturnValue({}),
  }
})
jest.mock('../../../../../lib/containers/UserCard')
const mockToggleSelection = jest.fn()
const mockUseGetEntityBundle = useGetEntityBundle as jest.Mock

const defaultProps: DetailsViewRowProps = {
  accessToken: 'abcd',
  entityHeader: {
    id: 'syn123',
    name: 'My File',
    lastActivity: 'yesterday',
    modifiedOn: 'today',
    modifiedBy: 100000,
    type: 'org.sagebionetworks.repo.model.FileEntity',
  },
  appearance: 'default',
  showVersionColumn: true,
  selectButtonType: 'checkbox',
  toggleSelection: mockToggleSelection,
}

const bundleResult: EntityBundle = {
  entity: {
    id: defaultProps.entityHeader.id,
    name: defaultProps.entityHeader.name,
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  },
}

const versionResult: PaginatedResults<VersionInfo> = {
  totalNumberOfResults: 2,
  results: [
    {
      id: defaultProps.entityHeader.id,
      versionNumber: 1,
      versionLabel: '1',
      versionComment: 'comment',
      modifiedBy: 'user',
      contentSize: '100000',
      contentMd5: 'abcde0123456789',
      modifiedByPrincipalId: '1',
      modifiedOn: 'yesterday',
    },
    {
      id: defaultProps.entityHeader.id,
      versionNumber: 5,
      versionLabel: 'version 5 label',
      versionComment: 'comment 2',
      modifiedBy: 'user',
      contentSize: '100001',
      contentMd5: 'deadbeef',
      modifiedByPrincipalId: '1',
      modifiedOn: 'today',
    },
  ],
}

function renderComponent(propOverrides?: Partial<DetailsViewRowProps>) {
  const tbody = document.createElement('tbody')
  return render(<DetailsViewRow {...defaultProps} {...propOverrides} />, {
    container: document.body.appendChild(tbody),
  })
}

describe('DetailsViewRow tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockAllIsIntersecting(false)
    mockUseGetEntityBundle.mockImplementation(() => ({
      data: bundleResult,
    }))

    SynapseClient.getEntityVersions = jest.fn().mockResolvedValue(versionResult)
  })

  it('invokes toggleSelection when the row is clicked', async () => {
    renderComponent()
    userEvent.click(screen.getByRole('row'))

    const expectedArg: Reference = { targetId: 'syn123' }
    expect(mockToggleSelection).toBeCalledWith(expectedArg)
  })

  it('does nothing when clicked and disabled', async () => {
    renderComponent({ appearance: 'disabled' })

    userEvent.click(screen.getByRole('row'))

    expect(mockToggleSelection).not.toBeCalled()
  })

  describe('renders the correct button', () => {
    it('renders checkbox', async () => {
      renderComponent({ selectButtonType: 'checkbox' })
      expect(screen.getByRole('checkbox')).toBeDefined()
    })

    it('no checkbox button is created because of disabled state', async () => {
      renderComponent({
        selectButtonType: 'checkbox',
        appearance: 'disabled',
      })

      expect(() => screen.getByRole('checkbox')).toThrowError()

      // There should still be a column for the button, just no button
      expect(screen.getByLabelText('is-selected')).toBeDefined()
    })

    it('no column is rendered', async () => {
      renderComponent({ selectButtonType: 'none' })

      expect(() => screen.getByLabelText('is-selected')).toThrowError()
    })
  })

  it('Only retrieves the entity bundle when in view', async () => {
    mockAllIsIntersecting(false)

    renderComponent()

    expect(mockUseGetEntityBundle).toBeCalledWith(
      defaultProps.accessToken,
      defaultProps.entityHeader.id,
      expect.anything(),
      undefined,
      {
        enabled: false,
        staleTime: 60 * 1000,
      },
    )

    mockAllIsIntersecting(true)

    expect(mockUseGetEntityBundle).toBeCalledWith(
      defaultProps.accessToken,
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
      renderComponent({ appearance: 'default' })
      const row = screen.getByRole('row')
      expect(row).toHaveAttribute('aria-selected', 'false')
      expect(row).toHaveAttribute('aria-disabled', 'false')
      expect(row).toHaveAttribute('aria-hidden', 'false')
    })

    it('selected appearance', async () => {
      renderComponent({ appearance: 'selected' })
      const row = screen.getByRole('row')

      // This just removes the act(...) warning, we test this elsewhere
      await waitFor(() => expect(SynapseClient.getEntityVersions).toBeCalled())

      expect(row).toHaveAttribute('aria-selected', 'true')
      expect(row).toHaveAttribute('aria-disabled', 'false')
      expect(row).toHaveAttribute('aria-hidden', 'false')
    })

    it('disabled appearance', async () => {
      renderComponent({ appearance: 'disabled' })
      const row = screen.getByRole('row')
      expect(row).toHaveAttribute('aria-selected', 'false')
      expect(row).toHaveAttribute('aria-disabled', 'true')
      expect(row).toHaveAttribute('aria-hidden', 'false')
    })

    it('hidden appearance', async () => {
      renderComponent({ appearance: 'hidden' })
      const row = screen.getByRole('row', { hidden: true })
      expect(row).toHaveAttribute('aria-selected', 'false')
      expect(row).toHaveAttribute('aria-disabled', 'false')
      expect(row).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('version selection', () => {
    it('does not render the version column when specified', async () => {
      const showColumnWrapper = renderComponent({ showVersionColumn: true })

      expect(showColumnWrapper.getByLabelText('version')).toBeDefined()

      const hideColumnWrapper = renderComponent({ showVersionColumn: false })

      expect(() => hideColumnWrapper.getByLabelText('version')).toThrowError()
    })

    it('retrieves the versions when selected', async () => {
      renderComponent({ appearance: 'selected' })
      expect(await screen.findByRole('listbox')).toBeDefined()

      expect(SynapseClient.getEntityVersions).toBeCalledWith(
        defaultProps.accessToken,
        defaultProps.entityHeader.id,
      )
    })

    it('calls toggle selection when a version is picked', async () => {
      renderComponent({ appearance: 'selected' })
      expect(await screen.findByRole('listbox')).toBeDefined()

      // There are two versions, plus "Always Latest"
      expect(screen.getAllByRole('option').length).toBe(3)

      // Select 'always latest'
      userEvent.selectOptions(screen.getByRole('listbox'), '-1')
      expect(mockToggleSelection).toBeCalledWith({
        targetId: defaultProps.entityHeader.id,
        targetVersionNumber: undefined,
      })

      // Select v1
      userEvent.selectOptions(
        screen.getByRole('listbox'),
        versionResult.results[0].versionNumber.toString(),
      )
      expect(mockToggleSelection).toBeCalledWith({
        targetId: defaultProps.entityHeader.id,
        targetVersionNumber: versionResult.results[0].versionNumber,
      })

      // Select v2
      userEvent.selectOptions(
        screen.getByRole('listbox'),
        versionResult.results[1].versionNumber.toString(),
      )
      expect(mockToggleSelection).toBeCalledWith({
        targetId: defaultProps.entityHeader.id,
        targetVersionNumber: versionResult.results[1].versionNumber,
      })
    })

    it('automatically selects "Always Latest" if none selected', async () => {
      renderComponent({
        appearance: 'selected',
        selectedVersion: undefined,
      })
      expect(await screen.findByRole('listbox')).toBeDefined()

      expect(
        (screen.getAllByRole('option')[0] as HTMLOptionElement).selected,
      ).toBe(true)
      expect(
        (screen.getAllByRole('option')[1] as HTMLOptionElement).selected,
      ).toBe(false)
      expect(
        (screen.getAllByRole('option')[2] as HTMLOptionElement).selected,
      ).toBe(false)
    })

    it('selects the correct version if one is selected', async () => {
      renderComponent({
        appearance: 'selected',
        selectedVersion: versionResult.results[1].versionNumber,
      })
      expect(await screen.findByRole('listbox')).toBeDefined()

      expect(
        (screen.getAllByRole('option')[0] as HTMLOptionElement).selected,
      ).toBe(false)
      expect(
        (screen.getAllByRole('option')[1] as HTMLOptionElement).selected,
      ).toBe(false)
      expect(
        (screen.getAllByRole('option')[2] as HTMLOptionElement).selected,
      ).toBe(true)
    })
  })
})
