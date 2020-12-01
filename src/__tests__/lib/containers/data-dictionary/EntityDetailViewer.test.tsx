import * as React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'hooks-for-redux'
import EntityDetailViewer from 'lib/containers/data_dictionary/EntityDetailViewer'

describe('EntityDetailViewer ', () => {
  let entity = {
    id: 'schema:Text',
    type: ['schema:DataType', 'rdfs:Class'],
    description: 'Data type: Text.',
    label: 'Text',
    parentIds: [],
    attribute: ``,
    numOfDependents: 3,
    required: false,
    requiredDependencies: [],
    validationRules: [],
    validValues: [],
    domainIncludes: [],
    requiresComponent: [],
    source: ``,
  }

  it('renders correctly', async () => {
    // EntityDetailViewer needs the redux store.
    const onClose = jest.fn()
    const component = await mount(
      <Provider>
        <EntityDetailViewer entity={entity} onClose={onClose} open={true} />
      </Provider>,
    )
    expect(component).toBeDefined()

    // Click the close button.
    // const closeButton = component.find(IconButton).find(`button.button-close`)
    // closeButton.simulate(`click`)
    // expect(onClose).toHaveBeenCalled()

    // Open is false
    component.setProps({
      open: false,
    })
    expect(component).toBeDefined()

    // No passed entity
    component.setProps({
      entity: undefined,
      open: true,
    })
    expect(component).toBeDefined()
  })
})
