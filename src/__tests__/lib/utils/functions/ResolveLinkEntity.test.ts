import { SynapseClient } from '../../../../lib'
import { resolveLinkEntity } from '../../../../lib/utils/functions/ResolveLinkEntity'

describe('ResolveLinkEntity tests', () => {
  const fileEntity = {
    id: 'syn123',
    name: 'File Entity',
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  }
  const linksToFileEntity = {
    id: 'syn124',
    name: 'Link 1',
    concreteType: 'org.sagebionetworks.repo.model.Link',
    linksTo: {
      targetId: fileEntity.id,
    },
  }

  const linksToLinkToFileEntity = {
    id: 'syn125',
    name: 'Link 2',
    concreteType: 'org.sagebionetworks.repo.model.Link',
    linksTo: {
      targetId: linksToFileEntity.id,
    },
  }

  const linkCycleAId = 'syn126'
  const linkCycleBId = 'syn127'
  const linkCycleA = {
    id: linkCycleAId,
    name: 'Link Cycle A',
    concreteType: 'org.sagebionetworks.repo.model.Link',
    linksTo: {
      targetId: linkCycleBId,
    },
  }

  const linkCycleB = {
    id: linkCycleBId,
    name: 'Link Cycle B',
    concreteType: 'org.sagebionetworks.repo.model.Link',
    linksTo: {
      targetId: linkCycleAId,
    },
  }

  const selfLinkId = 'syn128'
  const linksToSelf = {
    id: selfLinkId,
    name: 'Links to Self',
    concreteType: 'org.sagebionetworks.repo.model.Link',
    linksTo: {
      targetId: selfLinkId,
    },
  }

  beforeAll(() => {
    jest.spyOn(SynapseClient, 'getEntity').mockImplementation((_token, id) => {
      const entities = [
        fileEntity,
        linksToFileEntity,
        linksToLinkToFileEntity,
        linkCycleA,
        linkCycleB,
        linksToSelf,
      ]
      return Promise.resolve(entities.find(entity => entity.id === id))
    })
  })
  it('Resolves a non-link', async () => {
    const actual = await resolveLinkEntity(fileEntity.id!)
    expect(actual).toEqual(fileEntity)
  })
  it('Resolves a link to a non-link', async () => {
    const actual = await resolveLinkEntity(linksToFileEntity.id!)
    expect(actual).toEqual(fileEntity)
  })

  it('Handles a chain of links', async () => {
    const actual = await resolveLinkEntity(linksToLinkToFileEntity.id!)
    expect(actual).toEqual(fileEntity)
  })

  it('Throws an error on a self referential link', async () => {
    await expect(resolveLinkEntity(linksToSelf.id!)).rejects.toThrowError(
      `${linksToSelf.id} could not be resolved.\nLink forms a cycle.`,
    )
  })

  it('Throws an error on a cycle', async () => {
    await expect(resolveLinkEntity(linkCycleA.id!)).rejects.toThrowError(
      `${linkCycleA.id} could not be resolved.\nLink forms a cycle.`,
    )
  })
})
