import { makeStyles } from '@material-ui/core'

const basicFontStyle = {
  fontFamily: 'Lato',
  fontStyle: 'normal',
  letterSpacing: '0px',
}

const useTypographyStyle = makeStyles(
  () => ({
    headline1: {
      ...basicFontStyle,
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '28px',
      marginTop: '28px',
    },
    headline2: {
      ...basicFontStyle,
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '24px',
      marginTop: '24px',
    },
    headline3: {
      ...basicFontStyle,
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '20px',
      marginTop: '20px',
    },
    body1: {
      ...basicFontStyle,
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      marginTop: '24px',
    },
    body2: {
      ...basicFontStyle,
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      marginTop: '24px',
      fontStyle: 'italic',
    },
    breadcrumb1: {
      ...basicFontStyle,
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '16px',
      marginTop: '16px',
      textTransform: 'uppercase',
    },
    breadcrumb2: {
      ...basicFontStyle,
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '16px',
      marginTop: '16px',
      textTransform: 'uppercase',
    },
    smallText1: {
      ...basicFontStyle,
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '16px',
      marginTop: '16px',
    },
    smallText2: {
      ...basicFontStyle,
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '16px',
      marginTop: '16px',
    },
    smallLink: {
      ...basicFontStyle,
      fontSize: '14px',
      fontWeight: 900,
      lineHeight: '16px',
      marginTop: '16px',
    },
    label: {
      ...basicFontStyle,
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '16px',
      marginTop: '16px',
    },
    buttonLink: {
      ...basicFontStyle,
      fontSize: '16px',
      fontWeight: 900,
      lineHeight: '20px',
      marginTop: '20px',
    },
    hintText: {
      ...basicFontStyle,
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      marginTop: '24px',
    },
    sectionTitle: {
      ...basicFontStyle,
      fontSize: '21px',
      fontWeight: 700,
      lineHeight: '25px',
      marginTop: '25px',
      textTransform: 'uppercase',
    },
    subsectionHeader: {
      ...basicFontStyle,
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '21px',
      marginTop: '21px',
    },
  }),
  { name: 'SRC-Typography' },
)

export default useTypographyStyle
