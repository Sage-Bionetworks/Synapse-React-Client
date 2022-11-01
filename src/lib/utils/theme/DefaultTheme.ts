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
        fontStyle: 'normal',
        letterSpacing: '0px',
      },
    },
  },
}

export default defaultMuiTheme
