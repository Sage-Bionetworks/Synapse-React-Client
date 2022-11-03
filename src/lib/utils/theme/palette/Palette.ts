import { PaletteOptions } from '@mui/material'

/**
 * TODO: Ensure the default colors here match the default colors in _variables.scss, ideally having a single point of control
 */
const palette: PaletteOptions = {
  primary: {
    main: '#407ba0',
  },
  secondary: {
    main: '#469285',
  },
  grey: {
    1000: '#22252a',
    900: '#353a3f',
    800: '#4a5056',
    700: '#878e95',
    600: '#aeb5bc',
    500: '#d0d4d9',
    400: '#dfe2e6',
    300: '#eaecee',
    200: '#f1f3f5',
    100: '#fbfbfc',
  },
  success: { main: '#32a330' },
  info: { main: '#017fa5' },
  warning: { main: '#cc9f00' },
  error: { main: '#c13415' },
  text: {
    primary: '#353a3f', // gray-900
    secondary: '#4a5056', // gray-800
  },
}

export default palette
