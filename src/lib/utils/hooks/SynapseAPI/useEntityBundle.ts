import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { EntityBundle, EntityBundleRequest } from '../../synapseTypes'

const ALL_FIELDS: EntityBundleRequest = {
  includeEntity: true,
  includeEntityPath: true,
  includeAnnotations: true,
  includePermissions: true,
  includeHasChildren: true,
  includeAccessControlList: true,
  includeFileHandles: true,
  includeTableBundle: true,
  includeRootWikiId: true,
  includeBenefactorACL: true,
  includeDOIAssociation: true,
  includeFileName: true,
  includeThreadCount: true,
  includeRestrictionInformation: true,
}

export default function useGetEntityBundle(
  accessToken: string,
  entityId: string,
  bundleRequest: EntityBundleRequest = ALL_FIELDS,
  version?: number,
  options?: UseQueryOptions<EntityBundle, SynapseClientError, EntityBundle>,
) {
  return useQuery<EntityBundle, SynapseClientError>(
    ['entitybundle', entityId, version, bundleRequest],
    () =>
      SynapseClient.getEntityBundleV2(
        entityId,
        bundleRequest,
        version,
        accessToken,
      ),
    options,
  )
}
