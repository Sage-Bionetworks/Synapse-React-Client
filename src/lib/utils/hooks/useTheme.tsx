import { createTheme, MuiThemeProvider } from '@material-ui/core'
import { merge } from 'lodash-es'
import React, { useContext, useMemo } from 'react'
import DeepPartial from '../types/DeepPartial'

/**
 * TODO: Ensure the default colors here match the default colors in _variables.scss, ideally having a single point of control
 */

export const defaultSynapseTheme: SynapseTheme = {
  colors: {
    primary: {
      main: '#407ba0',
    },
    secondary: {
      main: '#469285',
    },
    success: '#32a330',
    info: '#017fa5',
    warning: '#cc9f00',
    error: '#c13415',
  },
}

export type SynapseTheme = {
  colors: {
    primary: {
      main: string
    }
    secondary: {
      main: string
    }
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

export type ThemeProviderProps = React.PropsWithChildren<{
  theme?: DeepPartial<SynapseTheme>
}>

export function mergeTheme(theme: DeepPartial<SynapseTheme>): SynapseTheme {
  // TODO: Handle merging color palettes where an entire palette can be generated from a single base color.
  return merge({}, defaultSynapseTheme, theme)
}

export const ThemeProvider = ({
  theme = defaultSynapseTheme,
  children,
}: ThemeProviderProps) => {
  const mergedTheme = useMemo(() => mergeTheme(theme), [theme])
  const muiTheme = createTheme({
    palette: {
      primary: {
        main: mergedTheme.colors.primary.main,
      },
      secondary: {
        main: mergedTheme.colors.secondary.main,
      },
    },
    typography: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
    },
  })
  return (
    <ThemeContext.Provider value={mergedTheme}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
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
