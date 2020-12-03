import getSchemaData from 'lib/containers/data_schema/services/getSchemaData'

const dataUri: string = `https://raw.githubusercontent.com/generalui/Synapse-React-Client/staging-dd/src/lib/assets/data_schema/test.jsonld`

test(`getSchemaData uses default data`, async () => {
  const returnedData = await getSchemaData(``)
  expect(returnedData['@context']).toBeDefined()
  expect(returnedData['@graph']).toBeDefined()
  expect(returnedData['@id']).toBeDefined()
})

test(`getSchemaData gets data from an external URL`, async () => {
  const returnedData = await getSchemaData(dataUri)
  expect(returnedData['@context']).toBeDefined()
  expect(returnedData['@graph']).toBeDefined()
  expect(returnedData['@id']).toBeDefined()
})
