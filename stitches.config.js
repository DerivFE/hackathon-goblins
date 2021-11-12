import { createStitches } from "@stitches/react";

export const { styled, getCssText, CSS, keyframes } = createStitches({
  media: {
    desktop: "(max-width: 1980px)",
    laptopL: "(max-width: 1440px)",
    laptopM: "(max-width: 1200px)",
    laptop: "(max-width: 1024px)",
    tabletL: "(max-width: 992px)",
    tablet: "(max-width: 768px)",
    tabletS: "(max-width: 576px)",
    mobileL: "(max-width: 425px)",
    mobileM: "(max-width: 375px)",
    mobileS: "(max-width: 320px)",
  },
  theme: {
    fonts: {},
    colors: {
      coral: "#ff444f",
      blue: "#85ACB0",
      white: "#ffffff",
      text: "#333333",
      textLight: "#c2c2c2",
      black: "#0e0e0e",
    },
    fontSizes: {
      1: "10px",
      2: "12px",
      3: "14px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "32px",
      8: "48px",
      9: "64px",
      10: "80px",
    },
    space: {
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "80px",
    },
  },
  utils: {
    p: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (config) => (value) => ({
      paddingTop: value,
    }),
    pr: (config) => (value) => ({
      paddingRight: value,
    }),
    pb: (config) => (value) => ({
      paddingBottom: value,
    }),
    pl: (config) => (value) => ({
      paddingLeft: value,
    }),
    px: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value) => ({
      marginTop: value,
    }),
    mr: (config) => (value) => ({
      marginRight: value,
    }),
    mb: (config) => (value) => ({
      marginBottom: value,
    }),
    ml: (config) => (value) => ({
      marginLeft: value,
    }),
    mx: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),

    size: (config) => (value) => ({
      width: value,
      height: value,
    }),

    ta: (config) => (value) => ({ textAlign: value }),
    lh: (config) => (value) => ({ lineHeight: value }),

    fd: (config) => (value) => ({ flexDirection: value }),
    fw: (config) => (value) => ({ flexWrap: value }),

    ai: (config) => (value) => ({ alignItems: value }),
    ac: (config) => (value) => ({ alignContent: value }),
    jc: (config) => (value) => ({ justifyContent: value }),
    as: (config) => (value) => ({ alignSelf: value }),
    fg: (config) => (value) => ({ flexGrow: value }),
    fs: (config) => (value) => ({ flexShrink: value }),
    fb: (config) => (value) => ({ flexBasis: value }),

    bc: (config) => (value) => ({
      backgroundColor: value,
    }),
  },
});
