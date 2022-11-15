import { PaletteOptions } from '@mui/material'
import tinycolor from 'tinycolor2'

const generatePalette = (mainColor: tinycolor.ColorInput) => {
  return {
    100: tinycolor(mainColor).desaturate(25).lighten(50).toString(),
    200: tinycolor(mainColor).desaturate(13).lighten(20).toString(),
    300: tinycolor(mainColor).desaturate(3).lighten(10).toString(),
    400: tinycolor(mainColor).desaturate(1).lighten(5).toString(),
    500: tinycolor(mainColor).toString(),
    600: tinycolor(mainColor).saturate(5).darken(4).toString(),
    700: tinycolor(mainColor).saturate(11).darken(8).toString(),
    800: tinycolor(mainColor).saturate(18).darken(10).toString(),
    900: tinycolor(mainColor).saturate(24).darken(18).toString(),
    light: tinycolor(mainColor).desaturate(1).lighten(5).toString(), // 400
    main: tinycolor(mainColor).toString(), // 500
    dark: tinycolor(mainColor).saturate(5).darken(4).toString(), // 600
  }
}

/**
 * Default colors here match the default colors in _variables.scss.  We now have a single point of control
 */
export const palette: PaletteOptions = {
  primary: generatePalette('#395979'),
  secondary: generatePalette('#469285'),
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

export const mtbPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#4F527D'),
  secondary: generatePalette('#C22E49'),
}

export const arkPortalPalette: PaletteOptions = {
  primary: generatePalette('#e79776'),
  secondary: generatePalette('#e79776'),
}

export const adKnowledgePortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#4d5491'),
  secondary: generatePalette('#2f8e94'),
}

export const nfPortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#125e81'),
  secondary: generatePalette('#404b63'),
}

export const bsmnPortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#00255c'),
  secondary: generatePalette('#2699a7'),
}

export const psychEncodePortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#00565e'),
  secondary: generatePalette('#f7a700'),
}

export const stopAdPortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#4d5491'),
  secondary: generatePalette('#4d5491'),
}

export const digitalHealthPortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#3e7293'),
  secondary: generatePalette('#164767'),
}

export const crcResearcherPortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#0085ff'),
  secondary: generatePalette('#0085ff'),
}

export const cancerComplexityPortalPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#38568e'),
  secondary: generatePalette('#47337d'),
}

export const sageBionetworksPalette: PaletteOptions = {
  ...palette,
  primary: generatePalette('#24AB9F'),
  secondary: generatePalette('#F5B33C'),
}

export default palette
