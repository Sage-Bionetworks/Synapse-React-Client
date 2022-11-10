import { ThemeOptions } from '@mui/material/styles'
import { typographyOptions } from './typography/Typography'
import palette from './palette/Palette'
import { Fade } from '@mui/material'
import linkTheme from './typography/Link'

const defaultMuiTheme: ThemeOptions = {
  typography: typographyOptions,
  palette: palette,
  components: {
    MuiLink: linkTheme,
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '0px',
          textTransform: 'none',
          '&:hover': {
            transition: '0.2s',
          },
        },
      },
    },
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
          // For now use p for headlines, since the bootstrap-4-backport class will override style
          headline1: 'p',
          headline2: 'p',
          headline3: 'p',
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
          hintText: 'p',
          sectionTitle: 'p',
          subsectionHeader: 'p',
          dataFieldKey: 'p',
        },
      },
    },
  },
}

export default defaultMuiTheme
