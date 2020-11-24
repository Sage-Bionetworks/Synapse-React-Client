import { createReduxModule } from 'hooks-for-redux'
import { VIEW_TYPES } from './../constants'

export const [stateViewType, { setStateViewType }] = createReduxModule(
  'viewType',
  VIEW_TYPES.REQUIRES_COMPONENT,
  {
    setStateViewType: (_state: VIEW_TYPES, type: VIEW_TYPES) => {
      return type
    },
  },
)
