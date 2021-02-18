import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../..'
import { EntityBundleRequest } from '../../synapseTypes'

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
  sessionToken: string,
  entityId: string,
  bundleRequest: EntityBundleRequest = ALL_FIELDS,
  version?: number,
  options?: UseQueryOptions,
) {
  return useQuery(
    ['entitybundle', entityId, version, bundleRequest],
    () =>
      SynapseClient.getEntityBundleV2(
        entityId,
        bundleRequest,
        version,
        sessionToken,
      ),
    options,
  )
}
