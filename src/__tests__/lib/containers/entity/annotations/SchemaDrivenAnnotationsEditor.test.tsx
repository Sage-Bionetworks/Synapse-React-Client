import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  SchemaDrivenAnnotationEditor,
  SchemaDrivenAnnotationEditorProps,
} from '../../../../../lib/containers/entity/annotations/SchemaDrivenAnnotationEditor'
import { createWrapper } from '../../../../../lib/testutils/TestingLibraryUtils'
import {
  ENTITY_JSON,
  ENTITY_SCHEMA_BINDING,
  SCHEMA_VALIDATION_GET,
  SCHEMA_VALIDATION_START,
} from '../../../../../lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../../lib/utils/functions/getEndpoint'
import { SynapseContextType } from '../../../../../lib/utils/SynapseContext'
import {
  mockFileEntityJson,
  MOCK_FILE_ENTITY_ID,
} from '../../../../../mocks/entity/mockEntity'
import {
  mockSchemaBinding,
  mockValidationSchema,
} from '../../../../../mocks/mockSchema'
import { rest, server } from '../../../../../mocks/msw/server'

const mockAsyncTokenId = 888888

const defaultProps: SchemaDrivenAnnotationEditorProps = {
  entityId: MOCK_FILE_ENTITY_ID,
}

function renderComponent(wrapperProps?: SynapseContextType) {
  render(<SchemaDrivenAnnotationEditor {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('SchemaDrivenAnnotationEditor tests', () => {
  // Handle the msw lifecycle:
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  const noAnnotationsHandler = rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,

    async (req, res, ctx) => {
      const response = mockFileEntityJson
      // Delete the annotation keys in the mock--we aren't using them in this suite
      delete response.myStringKey
      delete response.myIntegerKey
      delete response.myFloatKey
      return res(ctx.status(200), ctx.json(response))
    },
  )

  const annotationsHandler = rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,

    async (req, res, ctx) => {
      const response = mockFileEntityJson
      // Delete the other annotation keys
      delete response.myStringKey
      delete response.myIntegerKey
      delete response.myFloatKey

      // Fill in annotations that match the schema in this test suite
      response.country = ['USA']
      response.state = ['Washington']
      return res(ctx.status(200), ctx.json(response))
    },
  )

  const noSchemaHandler = rest.get(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}${ENTITY_SCHEMA_BINDING(':entityId')}`,
    async (req, res, ctx) => {
      return res(ctx.status(404), ctx.json({}))
    },
  )

  const schemaHandlers = [
    rest.get(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${ENTITY_SCHEMA_BINDING(':entityId')}`,
      async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockSchemaBinding))
      },
    ),
    rest.post(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${SCHEMA_VALIDATION_START}`,
      async (req, res, ctx) => {
        return res(ctx.status(201), ctx.json({ token: mockAsyncTokenId }))
      },
    ),
    rest.get(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${SCHEMA_VALIDATION_GET(mockAsyncTokenId)}`,
      async (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({ validationSchema: mockValidationSchema }),
        )
      },
    ),
  ]

  const successfulUpdateHandler = rest.put(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(req))
    },
  )

  const unsuccessfulUpdateHandler = rest.put(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
      ':entityId',
    )}`,
    async (req, res, ctx) => {
      return res(
        ctx.status(412),
        ctx.json({
          reason: 'Object was updated since last fetched',
        }),
      )
    },
  )

  it('Works with no annotations and no schema', async () => {
    server.use(noAnnotationsHandler, noSchemaHandler)

    renderComponent()
    await screen.findByText('has no annotations', { exact: false })
    const buttons = await screen.findAllByRole('button')

    // Expect one button to add annotations, and another to save
    expect(buttons.length).toBe(2)
  })

  it('Fetches a schema, no annotations', async () => {
    server.use(noAnnotationsHandler, ...schemaHandlers)
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })
    await screen.findByLabelText('country*')
  })

  it('Handles conditional schemas', async () => {
    server.use(noAnnotationsHandler, ...schemaHandlers)
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })
    const countryField = await screen.findByLabelText('country*')

    // The required "state" field should not appear unless we select USA
    expect(() => screen.getByLabelText('state*')).toThrow()

    // Behavior under test: select "USA" and "state" field appears
    userEvent.selectOptions(countryField, 'USA')
    await screen.findByLabelText('state*')
  })

  it('Handles annotations with no schema', async () => {
    server.use(annotationsHandler, noSchemaHandler)

    renderComponent()

    // custom fields are always arrays
    // we need the '-0' suffix to reference the first textbox
    const countryField = (await screen.findByRole('textbox', {
      name: 'country-0',
    })) as HTMLInputElement
    expect(countryField.value).toBe('USA')
    const stateField = (await screen.findByRole('textbox', {
      name: 'state-0',
    })) as HTMLInputElement
    expect(stateField.value).toBe('Washington')

    expect(() =>
      screen.getAllByText('requires scientific annotations', { exact: false }),
    ).toThrow()
  })

  it('Fetches existing annotations and schema and loads them into the form', async () => {
    server.use(annotationsHandler, ...schemaHandlers)
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })
    const countryField = (await screen.findByLabelText(
      'country*',
    )) as HTMLInputElement
    const stateField = (await screen.findByLabelText(
      'state*',
    )) as HTMLInputElement
    expect(countryField.value).toBe('USA')
    expect(stateField.value).toBe('Washington')
  })

  it('Removes a custom annotation field when the last value is removed', async () => {
    server.use(annotationsHandler, noSchemaHandler)
    renderComponent()

    // Should be able to find the 'country' custom field
    await screen.findByRole('textbox', {
      name: 'country-0',
    })

    // Remove the last element
    userEvent.click(await screen.findByLabelText('Remove country-0'))

    expect(() =>
      screen.getByRole('textbox', {
        name: 'country-0',
      }),
    ).toThrow()
  })

  it('Sends a request to update annotations (no schema)', async () => {
    server.use(annotationsHandler, noSchemaHandler, successfulUpdateHandler)

    renderComponent()

    const saveButton = await screen.findByRole('button', { name: 'Save' })
    userEvent.click(saveButton)

    await screen.findByText('Annotations successfully updated.')
  })

  it('Sends a request to update annotations (with schema)', async () => {
    // The annotations are predefined to match the schema
    server.use(annotationsHandler, ...schemaHandlers, successfulUpdateHandler)
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    // We need the individual schema field components to render because in some cases they convert data
    // to the appropriate format (e.g. flattening arrays of one item)
    await screen.findByLabelText('country*')
    await screen.findByLabelText('state*')

    const saveButton = await screen.findByRole('button', { name: 'Save' })
    userEvent.click(saveButton)
    await screen.findByText('Annotations successfully updated.')
  })

  it('Prompts confirmation when the annotations are non-conformant', async () => {
    // The schema requires annotations that are missing.
    // Verify that we get a warning, and can still click through to save
    server.use(noAnnotationsHandler, ...schemaHandlers, successfulUpdateHandler)
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    const saveButton = await screen.findByRole('button', { name: 'Save' })
    userEvent.click(saveButton)
    userEvent.click(saveButton)

    await screen.findByText('Are you sure you want to save them?')
    const confirmSaveButton = await screen.findByRole('button', {
      name: 'Save',
    })
    userEvent.click(confirmSaveButton)
    await screen.findByText('Annotations successfully updated.')
  })

  it('Handles a failed update request', async () => {
    server.use(annotationsHandler, noSchemaHandler, unsuccessfulUpdateHandler)

    renderComponent()

    const saveButton = await screen.findByRole('button', { name: 'Save' })
    userEvent.click(saveButton)

    await screen.findByText(
      'Annotations could not be updated: Object was updated since last fetched',
    )
  })
})
