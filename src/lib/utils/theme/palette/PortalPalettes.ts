import { PaletteOptions } from '@mui/material'
import palette from './Palette'

export const mtbPalette: PaletteOptions = {
  ...palette,
  primary: {
    ...palette.primary,
    light: '#777aa6',
    main: '#4F527D',
    dark: '#2b2d4a',
  },
  secondary: {
    main: '#C22E49',
  },
}
