import { getIsAllSelectedFromInfiniteList } from '../../../../lib/utils/hooks/useGetIsAllSelectedInfiniteList'
import { Map } from 'immutable'
import { EntityHeader, EntityType } from '../../../../lib/utils/synapseTypes'
import { getEntityTypeFromHeader } from '../../../../lib/utils/functions/EntityTypeUtils'

const ALL_TYPES = Object.values(EntityType)
const mockFetchNextPage = jest.fn()

function isSelectedInMap(map: Map<string, number>) {
  return (e: EntityHeader) => {
    return map.has(e.id)
  }
}

function isSelectableByEntityType(types: EntityType[]) {
  return (e: EntityHeader) => {
    const type = getEntityTypeFromHeader(e)
    return types.includes(type)
  }
}

describe('getIsAllSelectedInifiniteList tests', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })
  it('Is false when no entities are selected', () => {
    const fetchedEntities: EntityHeader[] = [
      {
        id: 'syn123',
        name: 'A File Entity',
        type: 'org.sagebionetworks.repo.model.FileEntity',
        benefactorId: 123,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
    ]
    const selectedEntities: Map<string, number> = Map()
    expect(
      getIsAllSelectedFromInfiniteList(
        fetchedEntities,
        selectedEntities.size,
        isSelectedInMap(selectedEntities),
        isSelectableByEntityType(ALL_TYPES),
        false,
        mockFetchNextPage,
        false,
      ),
    ).toBe(false)
  })
  it('Is false where no entities are present in the current list', () => {
    const fetchedEntities: EntityHeader[] = []
    const selectedEntities: Map<string, number> = Map({ syn123: 1 })
    expect(
      getIsAllSelectedFromInfiniteList(
        fetchedEntities,
        selectedEntities.size,
        isSelectedInMap(selectedEntities),
        isSelectableByEntityType(ALL_TYPES),
        false,
        mockFetchNextPage,
        false,
      ),
    ).toBe(false)
  })
  it('Is true when all of the entities in the list are selected', () => {
    const fetchedEntities: EntityHeader[] = [
      {
        id: 'syn123',
        name: 'A File Entity',
        type: 'org.sagebionetworks.repo.model.FileEntity',
        benefactorId: 123,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
    ]
    const selectedEntities: Map<string, number> = Map({ syn123: 1 })
    expect(
      getIsAllSelectedFromInfiniteList(
        fetchedEntities,
        selectedEntities.size,
        isSelectedInMap(selectedEntities),
        isSelectableByEntityType(ALL_TYPES),
        false,
        mockFetchNextPage,
        false,
      ),
    ).toBe(true)
  })
  it('Is false when some, but not all, of the entities in the list are selected', () => {
    const fetchedEntities: EntityHeader[] = [
      {
        id: 'syn123',
        name: 'A File Entity',
        type: 'org.sagebionetworks.repo.model.FileEntity',
        benefactorId: 123,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
      {
        id: 'syn456',
        name: 'A File Entity',
        type: 'org.sagebionetworks.repo.model.FileEntity',
        benefactorId: 123,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
    ]
    const selectedEntities: Map<string, number> = Map({ syn123: 1 })
    expect(
      getIsAllSelectedFromInfiniteList(
        fetchedEntities,
        selectedEntities.size,
        isSelectedInMap(selectedEntities),
        isSelectableByEntityType(ALL_TYPES),
        false,
        mockFetchNextPage,
        false,
      ),
    ).toBe(false)
  })
  it('Is false when all of the entities in the list are unselectable', () => {
    const fetchedEntities: EntityHeader[] = [
      {
        id: 'syn123',
        name: 'A File Entity',
        type: 'org.sagebionetworks.repo.model.FileEntity',
        benefactorId: 123,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
      {
        id: 'syn456',
        name: 'A Folder',
        type: 'org.sagebionetworks.repo.model.Folder',
        benefactorId: 123,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
    ]
    const selectedEntities: Map<string, number> = Map({ syn999: 1 })
    expect(
      getIsAllSelectedFromInfiniteList(
        fetchedEntities,
        selectedEntities.size,
        isSelectedInMap(selectedEntities),
        isSelectableByEntityType([EntityType.PROJECT]), // can only select projects
        false,
        mockFetchNextPage,
        false,
      ),
    ).toBe(false)
  })
  it('Will fetch the next page when we have only retrieved selected entities and there is a next page', () => {
    const fetchedEntities: EntityHeader[] = [
      {
        id: 'syn123',
        name: 'A File Entity',
        type: 'org.sagebionetworks.repo.model.FileEntity',
        benefactorId: 123,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
      {
        id: 'syn456',
        name: 'A Folder',
        type: 'org.sagebionetworks.repo.model.Folder',
        benefactorId: 123,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
    ]
    const selectedEntities: Map<string, number> = Map({ syn123: 1, syn456: 1 })
    expect(
      getIsAllSelectedFromInfiniteList(
        fetchedEntities,
        selectedEntities.size,
        isSelectedInMap(selectedEntities),
        isSelectableByEntityType(ALL_TYPES),
        true, // There is a next page
        mockFetchNextPage,
        false,
      ),
    ).toBe(false)

    expect(mockFetchNextPage).toBeCalledTimes(1)
  })

  it('Will fetch the next page when we have only retrieved unselectable entities and there is a next page', () => {
    const fetchedEntities: EntityHeader[] = [
      {
        id: 'syn123',
        name: 'A File Entity',
        type: 'org.sagebionetworks.repo.model.FileEntity',
        benefactorId: 123,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
      {
        id: 'syn456',
        name: 'A Folder',
        type: 'org.sagebionetworks.repo.model.Folder',
        benefactorId: 123,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
    ]
    const selectedEntities: Map<string, number> = Map({ syn986: 1, syn987: 1 })
    expect(
      getIsAllSelectedFromInfiniteList(
        fetchedEntities,
        selectedEntities.size,
        isSelectedInMap(selectedEntities),
        isSelectableByEntityType([EntityType.DATASET]), // Can only select Datasets
        true, // There is a next page
        mockFetchNextPage,
        false,
      ),
    ).toBe(false)

    expect(mockFetchNextPage).toBeCalledTimes(1)
  })

  it('Will not fetch the next page is isFetching is true', () => {
    const fetchedEntities: EntityHeader[] = [
      {
        id: 'syn123',
        name: 'A File Entity',
        type: 'org.sagebionetworks.repo.model.FileEntity',
        benefactorId: 123,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
      {
        id: 'syn456',
        name: 'A Folder',
        type: 'org.sagebionetworks.repo.model.Folder',
        benefactorId: 123,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
    ]
    const selectedEntities: Map<string, number> = Map({ syn123: 1, syn456: 1 })
    expect(
      getIsAllSelectedFromInfiniteList(
        fetchedEntities,
        selectedEntities.size,
        isSelectedInMap(selectedEntities),
        isSelectableByEntityType(ALL_TYPES),
        true, // There is a next page
        mockFetchNextPage,
        true, // isFetching
      ),
    ).toBe(false)

    expect(mockFetchNextPage).not.toBeCalled()
  })

  it('Will not fetch fetch the next page if a selectable entity is unselected', () => {
    const fetchedEntities: EntityHeader[] = [
      {
        id: 'syn123',
        name: 'A File Entity',
        type: 'org.sagebionetworks.repo.model.FileEntity',
        benefactorId: 123,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
      {
        id: 'syn456',
        name: 'A Folder',
        type: 'org.sagebionetworks.repo.model.Folder',
        benefactorId: 123,
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
      },
    ]
    const selectedEntities: Map<string, number> = Map({ syn986: 1, syn987: 1 })
    expect(
      getIsAllSelectedFromInfiniteList(
        fetchedEntities,
        selectedEntities.size,
        isSelectedInMap(selectedEntities),
        isSelectableByEntityType([EntityType.FILE]), // Can only select Files
        true, // There is a next page
        mockFetchNextPage,
        false,
      ),
    ).toBe(false)

    expect(mockFetchNextPage).not.toBeCalled()
  })
})
