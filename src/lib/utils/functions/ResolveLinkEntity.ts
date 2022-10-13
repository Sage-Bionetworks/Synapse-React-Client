import { QueryOptions, useQuery } from 'react-query'
import { getEntity } from '../SynapseClient'
import { useSynapseContext } from '../SynapseContext'
import { Entity, isLink } from '../synapseTypes'

/**
 * Follows a Synapse entity ID to the end of the chain of links
 * @param synId the ID of a Synapse entity that may be a link
 * @returns the ID of the entity at the end of the chain of links
 * @throws an error if a link is found that does not resolve, or if a cycle is found
 */
export async function resolveLinkEntity(
  synId: string,
  versionNumber?: number,
  accessToken?: string,
): Promise<Entity> {
  // Track visited entities to prevent infinitely fetching a cycle of Links
  const seen: Set<string> = new Set()
  try {
    let currentEntity = await getEntity(accessToken, synId, versionNumber)
    while (isLink(currentEntity)) {
      if (seen.has(currentEntity.id!)) {
        throw new Error('Link forms a cycle.')
      }
      seen.add(currentEntity.id!)
      currentEntity = await getEntity(
        accessToken,
        currentEntity.linksTo.targetId,
        currentEntity.linksTo.targetVersionNumber,
      )
    }
    return currentEntity
  } catch (e) {
    throw new Error(`${synId} could not be resolved.\n${(e as Error).message}`)
  }
}

export function useResolveLinkEntity(
  synId: string,
  versionNumber?: number,
  options?: QueryOptions<Entity>,
) {
  const { accessToken } = useSynapseContext()
  return useQuery(
    ['resolveLinkEntity', synId, versionNumber],
    () => resolveLinkEntity(synId, versionNumber, accessToken),
    options,
  )
}
