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
    marginTop: '28px',
  },
  headline2: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
    marginTop: '24px',
  },
  headline3: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '20px',
    marginTop: '20px',
  },
  body1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    marginTop: '24px',
  },
  body2: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    marginTop: '24px',
    fontStyle: 'italic',
  },
  breadcrumb1: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px',
    textTransform: 'uppercase',
  },
  breadcrumb2: {
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '16px',
    textTransform: 'uppercase',
  },
  smallText1: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px',
    marginTop: '16px',
  },
  smallText2: {
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '16px',
    marginTop: '16px',
  },
  smallLink: {
    fontSize: '14px',
    fontWeight: 900,
    lineHeight: '16px',
    marginTop: '16px',
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
    marginTop: '25px',
    textTransform: 'uppercase',
  },
  subsectionHeader: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '21px',
    marginTop: '21px',
  },
  dataFieldKey: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px',
    marginTop: '16px',
    color: palette.grey[700],
    textTransform: 'uppercase',
  },
})
