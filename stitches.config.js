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
    colors: {
      coral: "#ff444f",
      blue: "#85ACB0",
      white: "#ffffff",
      text: "#333333",
      textLight: "#c2c2c2",
      black: "#0e0e0e",
      grey: "#1d1f20",
      fadedGrey: "#6e6e6e",
      lightGrey: "#d6d6d6",
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
    fonts: {},
  },
  utils: {
    p: (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),

    size: (value) => ({
      width: value,
      height: value,
    }),

    ta: (value) => ({ textAlign: value }),
    lh: (value) => ({ lineHeight: value }),

    fd: (value) => ({ flexDirection: value }),
    fw: (value) => ({ flexWrap: value }),

    ai: (value) => ({ alignItems: value }),
    ac: (value) => ({ alignContent: value }),
    jc: (value) => ({ justifyContent: value }),
    as: (value) => ({ alignSelf: value }),
    fg: (value) => ({ flexGrow: value }),
    fs: (value) => ({ flexShrink: value }),
    fb: (value) => ({ flexBasis: value }),

    bc: (value) => ({ backgroundColor: value }),
  },
});
