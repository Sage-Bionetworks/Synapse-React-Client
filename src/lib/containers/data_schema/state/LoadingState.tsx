import { createReduxModule } from 'hooks-for-redux'

export const [loading, { setLoading }] = createReduxModule('loading', false, {
  setLoading: (_state: boolean, loading: boolean) => loading,
})
