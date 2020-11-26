import { createReduxModule } from 'hooks-for-redux'

export const [searchEntity, { setSearchEntity }] = createReduxModule(
  'searchEntity',
  ``,
  {
    setSearchEntity: (_state: string, id: string) => id,
  },
)
