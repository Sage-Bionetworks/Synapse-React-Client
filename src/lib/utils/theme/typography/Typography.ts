import { TypographyOptions } from '@mui/material/styles/createTypography'
import { Palette } from '@mui/material/styles/createPalette'

export const typographyOptions: (
  palette: Palette,
) => TypographyOptions = palette => ({
  fontFamily: ['Lato', 'sans-serif'].join(','),
  headline1: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '28px',
  },
  headline2: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  headline3: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '20px',
  },
  body1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  body2: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    fontStyle: 'italic',
  },
  breadcrumb1: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px',
  },
  breadcrumb2: {
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '16px',
  },
  smallText1: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px',
  },
  smallText2: {
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '16px',
  },
  smallLink: {
    fontSize: '14px',
    fontWeight: 900,
    lineHeight: '16px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '16px',
  },
  buttonLink: {
    fontSize: '16px',
    fontWeight: 900,
    lineHeight: '20px',
  },
  hintText: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  sectionTitle: {
    fontSize: '21px',
    fontWeight: 700,
    lineHeight: '25px',
    textTransform: 'uppercase',
  },
  subsectionHeader: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '21px',
  },
  dataFieldKey: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px',
    color: palette.grey[700],
    textTransform: 'uppercase',
  },
})
