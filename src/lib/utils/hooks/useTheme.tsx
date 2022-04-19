import React, { useContext } from 'react'

/**
 * TODO: Ensure the default colors here match the default colors in _variables.scss
 */

const defaultTheme: ThemeContextType = {
  colors: {
    success: '#32a330',
    info: '#017fa5',
    warning: '#cc9f00',
    error: '#c13415',
  },
}

export type ThemeContextType = {
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
export const ThemeContext = React.createContext<ThemeContextType>(defaultTheme)

export type ThemeProviderProps = {
  theme?: ThemeContextType
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  theme = defaultTheme,
  children,
}) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    return defaultTheme
  }
  return context
}
