import { merge } from 'lodash'
import React, { useContext, useMemo } from 'react'
import DeepPartial from '../types/DeepPartial'

/**
 * TODO: Ensure the default colors here match the default colors in _variables.scss, ideally having a single point of control
 */

export const defaultSynapseTheme: SynapseTheme = {
  colors: {
    success: '#32a330',
    info: '#017fa5',
    warning: '#cc9f00',
    error: '#c13415',
  },
}

export type SynapseTheme = {
  colors: {
    success: string
    info: string
    warning: string
    error: string
  }
}

/**
 * This must be exported to use the context in class components.
 */
export const ThemeContext =
  React.createContext<SynapseTheme>(defaultSynapseTheme)

export type ThemeProviderProps = {
  theme?: DeepPartial<SynapseTheme>
}

export function mergeTheme(theme: DeepPartial<SynapseTheme>): SynapseTheme {
  // TODO: Handle merging color palettes where an entire palette can be generated from a single base color.
  return merge({}, defaultSynapseTheme, theme)
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  theme = defaultSynapseTheme,
  children,
}) => {
  const mergedTheme = useMemo(() => mergeTheme(theme), [theme])
  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): SynapseTheme {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    return defaultSynapseTheme
  }
  return context
}
