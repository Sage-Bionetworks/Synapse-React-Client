import { EntityBundleRequest } from '../../utils/synapseTypes'

// Use the same bundle request object across the entity finder so we can take advantage of the shared cache
export const BUNDLE_REQUEST_OBJECT: EntityBundleRequest = {
  includeEntity: true,
  includeEntityPath: true,
  includeAnnotations: true,
  includeBenefactorACL: true,
  includePermissions: true,
}
