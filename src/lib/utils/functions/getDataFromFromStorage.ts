import { EntityHeader, Evaluation, UserProfile } from '../synapseTypes'
import { SynapseConstants } from '..'

export const getStoredEntityHeaders = (): EntityHeader[] => {
  try {
    const lookUpEntityHeaders: EntityHeader[] = JSON.parse(
      sessionStorage.getItem(SynapseConstants.ENTITY_HEADER_STORAGE_KEY) || '',
    )
    return lookUpEntityHeaders
  } catch (e) {
    return []
  }
}

export const getStoredUserProfiles = (): UserProfile[] => {
  try {
    const lookUpUserIds: UserProfile[] = JSON.parse(
      sessionStorage.getItem(SynapseConstants.USER_PROFILE_STORAGE_KEY) || '',
    )
    return lookUpUserIds
  } catch (e) {
    return []
  }
}

export const getStoredEvaluation = (): Evaluation[] => {
  try {
    const lookUpEvaluations: UserProfile[] = JSON.parse(
      sessionStorage.getItem(SynapseConstants.EVALUATIONS_STORAGE_KEY) || '',
    )
    return lookUpEvaluations
  } catch (e) {
    return []
  }
}
