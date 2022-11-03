import { ThemeOptions } from '@mui/material/styles'
import { typographyOptions } from './typography/Typography'
import palette from './palette/Palette'
import { Fade } from '@mui/material'

const defaultMuiTheme: ThemeOptions = {
  typography: typographyOptions,
  palette: palette,
  components: {
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        TransitionComponent: Fade,
      },
      styleOverrides: {
        arrow: ({ ownerState, theme }) => ({
          color: theme.palette.common.black,
        }),
        tooltip: ({ ownerState, theme }) => ({
          fontSize: '14px',
          borderRadius: '2px',
          backgroundColor: theme.palette.common.black,
        }),
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          headline1: 'h1',
          headline2: 'h2',
          headline3: 'h3',
          body1: 'p',
          body1Italic: 'p',
          body2: 'p',
          breadcrumb1: 'span',
          breadcrumb2: 'span',
          smallText1: 'p',
          smallText2: 'p',
          smallLink: 'span',
          label: 'span',
          buttonLink: 'span',
          hintText: 'span',
          sectionTitle: 'p',
          subsectionHeader: 'p',
          dataFieldKey: 'p',
        },
      },
    },
  },
}

export default defaultMuiTheme
