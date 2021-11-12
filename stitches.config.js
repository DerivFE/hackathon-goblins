import { createStitches } from "@stitches/react";

export const { styled, getCssText, CSS, keyframes } = createStitches({
  theme: {
    fonts: {},
    colors: {},
    fontSizes: {},
    media: {
      mobileS: "(max-width: 320px)",
      mobileM: "(max-width: 375px)",
      mobileL: "(max-width: 425px)",
      tabletS: "(max-width: 576px)",
      tablet: "(max-width: 768px)",
      tabletL: "(max-width: 992px)",
      laptop: "(max-width: 1024px)",
      laptopM: "(max-width: 1200px)",
      laptopL: "(max-width: 1440px)",
      desktop: "(max-width: 1980px)",
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
  },
});
