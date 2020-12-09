import { MutableRefObject } from 'react'
import { FullScreenHandle } from 'react-full-screen'
import { createReduxModule } from 'hooks-for-redux'
import { FullscreenState } from './../types/IDataSchemaTypes'

export const [stateFullscreen, { setStateFullscreen }] = createReduxModule(
  'fullscreen',
  {
    isFullscreen: false,
    handle: {
      active: false,
      enter: () => {},
      exit: () => {},
      node: (null as unknown) as MutableRefObject<null>,
    } as FullScreenHandle,
  },
  {
    setStateFullscreen: (
      state: FullscreenState,
      newState: FullscreenState,
    ) => ({ ...state, ...newState }),
  },
)
