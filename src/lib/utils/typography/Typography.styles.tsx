import { makeStyles } from "@material-ui/core";

const basicFontStyle = {
  fontFamily: "Lato",
  fontStyle: "normal",
  letterSpacing: "0px",
}

const useTypographyStyle = makeStyles(
  () => ({
    headline1: {
      ...basicFontStyle,
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "28px",
    },
    headline2: {
      ...basicFontStyle,
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    headline3: {
      ...basicFontStyle,
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "20px",
    },
    body1: {
      ...basicFontStyle,
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    body2: {
      ...basicFontStyle,
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      fontStyle: "italic",
    },
    breadcrumb1: {
      ...basicFontStyle,
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16px",
      textTransform: "uppercase"
    },
    breadcrumb2: {
      ...basicFontStyle,
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "16px",
      textTransform: "uppercase"
    },
    smallText1: {
      ...basicFontStyle,
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16px",
    },
    smallText2: {
      ...basicFontStyle,
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "16px",
    },
    smallLink: {
      ...basicFontStyle,
      fontSize: "14px",
      fontWeight: 900,
      lineHeight: "16px",
    },
    label: {
      ...basicFontStyle,
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "16px",
    },
    buttonLink: {
      ...basicFontStyle,
      fontSize: "16px",
      fontWeight: 900,
      lineHeight: "20px",
    },
    hintText: {
      ...basicFontStyle,
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },
  }),
  { name: 'myTypography' },
)

export default useTypographyStyle