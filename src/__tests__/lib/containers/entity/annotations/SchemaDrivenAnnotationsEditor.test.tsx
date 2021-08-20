import { fireEvent, render, screen, waitFor } from '@testing-library/react'
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
import { displayToast } from '../../../../../lib/containers/ToastMessage'

jest.mock('../../../../../lib/containers/ToastMessage', () => {
  return { displayToast: jest.fn() }
})

const mockToastFn = displayToast

const mockAsyncTokenId = 888888

const mockOnSuccessFn = jest.fn()

// Captures the JSON passed to the server via msw.
const updatedJsonCaptor = jest.fn()

const defaultProps: SchemaDrivenAnnotationEditorProps = {
  entityId: MOCK_FILE_ENTITY_ID,
  liveValidate: false,
  onSuccess: mockOnSuccessFn,
}

function renderComponent(wrapperProps?: SynapseContextType) {
  return render(<SchemaDrivenAnnotationEditor {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

// Handles saving when there is no schema or the data is valid under the schema
async function clickSave() {
  const saveButton = await screen.findByRole('button', { name: 'Save' })
  userEvent.click(saveButton)
  return waitFor(() => expect(mockOnSuccessFn).toHaveBeenCalled())
}

// Handles saving when the data is invalid for the schema
// Clicks "Save" twice and then clicks "Save" in the confirmation modal
async function clickSaveAndConfirm() {
  const saveButton = await screen.findByRole('button', { name: 'Save' })
  userEvent.click(saveButton)
  userEvent.click(saveButton)

  await screen.findByText('Are you sure you want to save them?')
  const confirmSaveButton = await screen.findByRole('button', {
    name: 'Save',
  })
  userEvent.click(confirmSaveButton)

  return waitFor(() => expect(mockOnSuccessFn).toHaveBeenCalled())
}

describe('SchemaDrivenAnnotationEditor tests', () => {
  // Handle the msw lifecycle:
  beforeAll(() => server.listen())
  afterEach(() => {
    server.restoreHandlers()
    jest.resetAllMocks()
    updatedJsonCaptor.mockClear()
  })
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

  const stringArrayAnnotationsHandler = rest.get(
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
      response.showStringArray = true
      response.stringArray = ['one', 'two', 'three']

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
      updatedJsonCaptor(req.body)
      return res(ctx.status(200), ctx.json(req.body))
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
    expect(screen.queryByLabelText('state*')).not.toBeInTheDocument()

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

    expect(
      screen.queryByText('requires scientific annotations', {
        exact: false,
      }),
    ).not.toBeInTheDocument()
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

    expect(
      screen.queryByRole('textbox', {
        name: 'country-0',
      }),
    ).not.toBeInTheDocument()
  })

  it('Sends a request to update annotations (no schema)', async () => {
    server.use(annotationsHandler, noSchemaHandler, successfulUpdateHandler)

    renderComponent()

    await clickSave()

    expect(updatedJsonCaptor).toBeCalledWith(
      expect.objectContaining({ country: ['USA'], state: ['Washington'] }),
    )
  })

  it('Sends a request to update annotations (with schema)', async () => {
    // The annotations are predefined to match the schema
    server.use(annotationsHandler, ...schemaHandlers, successfulUpdateHandler)

    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    // We need the individual schema field components to render because in some cases they convert data
    // to the appropriate format (e.g. flattening arrays of one item)
    // await screen.findByLabelText('country*')
    const stateField = (await screen.findByLabelText(
      'state*',
    )) as HTMLInputElement

    await waitFor(() => expect(stateField.value).toBe('Washington'))

    userEvent.clear(stateField)
    userEvent.type(stateField, 'Ohio{enter}') // For some reason, keying "enter" here makes the test stable

    await clickSave()

    expect(updatedJsonCaptor).toBeCalledWith(
      expect.objectContaining({ country: 'USA', state: 'Ohio' }),
    )
  })

  it('Prompts confirmation when the annotations are non-conformant', async () => {
    // The schema requires annotations that are missing.
    // Verify that we get a warning, and can still click through to save
    server.use(noAnnotationsHandler, ...schemaHandlers, successfulUpdateHandler)
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    await clickSaveAndConfirm()

    await waitFor(() => expect(mockOnSuccessFn).toBeCalled())
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

  it('Converts singular data to an additionalProperty array when removed from the schema', async () => {
    // If we select "USA", then "Washington", then change "USA" to "CA", "Washington" will become ["Washington"], since all non-schema defined Synapse annotations are arrays
    server.use(annotationsHandler, ...schemaHandlers, successfulUpdateHandler)
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

    userEvent.selectOptions(countryField, 'CA')

    await clickSaveAndConfirm()

    await waitFor(() => expect(updatedJsonCaptor).toBeCalled())

    // Since it's an additional property, we expect it to be an array
    expect(updatedJsonCaptor).toBeCalledWith(
      expect.objectContaining({ state: ['Washington'] }),
    )
  })

  // Currently unstable
  it.skip('Converts an additionalProperty array back to a single value when added back to the schema', async () => {
    // If we select "USA", then "Washington", then change "USA" to "CA", "Washington" will become ["Washington"] (see previous test)
    // Here we verify that if we then select "USA" again, ["Washington"] will be converted back to "Washington"
    server.use(annotationsHandler, ...schemaHandlers, successfulUpdateHandler)
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })
    const countryField = (await screen.findByLabelText(
      'country*',
    )) as HTMLInputElement
    let stateField = (await screen.findByLabelText(
      'state*',
    )) as HTMLInputElement
    expect(countryField.value).toBe('USA')
    expect(stateField.value).toBe('Washington')

    userEvent.selectOptions(countryField, 'CA')

    // State is now an array ["Washington"], but if we pick "USA" again, it should be converted back to "Washington" (not an array)
    userEvent.selectOptions(countryField, 'USA')

    stateField = (await screen.findByLabelText('state*')) as HTMLInputElement
    expect(stateField.value).toBe('Washington')
    userEvent.tab()
    await clickSave()
    // Since it's back in the schema, it should be a string
    await waitFor(() =>
      expect(updatedJsonCaptor).toBeCalledWith(
        expect.objectContaining({ state: 'Washington' }),
      ),
    )
  })

  // Next two tests are the same as the previous two tests, but with an array.
  it('Converts data in a schema-defined array to an additionalProperty array when removed from the schema', async () => {
    // Converting an array of strings to an additional property array shouldn't change the data, because they are both arrays.
    server.use(
      stringArrayAnnotationsHandler,
      ...schemaHandlers,
      successfulUpdateHandler,
    )
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    const showStringArrayField = (await screen.findByLabelText(
      'showStringArray',
    )) as HTMLInputElement
    expect(showStringArrayField.value).toBe('true')

    // This will remove the data from the schema.
    userEvent.selectOptions(showStringArrayField, 'false')
    await clickSaveAndConfirm()

    expect(mockToastFn).toBeCalledWith(
      'warning',
      'Fields No Longer Specified By Schema',
      expect.stringContaining(
        'The following annotations are no longer specified by the schema and have been converted to Custom Fields: stringArray.',
      ),
    )

    await waitFor(() => expect(updatedJsonCaptor).toBeCalled())
    // Since it's back in the schema, it should be a string
    expect(updatedJsonCaptor).toBeCalledWith(
      expect.objectContaining({ stringArray: ['one', 'two', 'three'] }),
    )
  })

  it('Converts an additionalProperty array back to an array when added back to the schema', async () => {
    // Converting a schema-defined array of strings to an additional property array and back to schema-defined should not alter the data

    server.use(
      stringArrayAnnotationsHandler,
      ...schemaHandlers,
      successfulUpdateHandler,
    )
    renderComponent()
    await screen.findByText('requires scientific annotations', { exact: false })

    const showStringArrayField = (await screen.findByLabelText(
      'showStringArray',
    )) as HTMLInputElement
    expect(showStringArrayField.value).toBe('true')

    // This will remove the data from the schema.
    userEvent.selectOptions(showStringArrayField, 'false')

    // Add it back to the schema.
    userEvent.selectOptions(showStringArrayField, 'false')

    await clickSaveAndConfirm()

    await waitFor(() => expect(updatedJsonCaptor).toBeCalled())
    // Since it's back in the schema, it should be a string
    expect(updatedJsonCaptor).toBeCalledWith(
      expect.objectContaining({ stringArray: ['one', 'two', 'three'] }),
    )
  })

  // Currently unstable.
  it.skip('Disallows keys that collide with the Entity JSON definition and throws a custom error message', async () => {
    server.use(annotationsHandler, noSchemaHandler)

    renderComponent()

    const addAnnotationButton = await screen.findByRole('button', {
      name: 'Add Custom Field',
    })

    userEvent.click(addAnnotationButton)

    const keyField = await screen.findByLabelText('Key')

    userEvent.clear(keyField)
    userEvent.type(keyField, 'id{enter}')

    const saveButton = await screen.findByRole('button', { name: 'Save' })
    userEvent.click(saveButton)

    await screen.findByText(
      '"id" is a reserved internal key and cannot be used',
      { exact: false },
    )
  })
})
