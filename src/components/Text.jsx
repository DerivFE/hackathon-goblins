import { styled } from "stitches.config";

const DEFAULT_TAG = "span";

export const Text = styled(DEFAULT_TAG, {
  // Reset
  lineHeight: "1",
  margin: "0",
  display: "block",

  variants: {
    type: {
      heading1: {
        fontSize: "$9",
        lineHeight: "1.25",
        fontWeight: "bold",

        "@tabletL": {
          fontSize: "$7",
        },
      },
      heading2: {
        fontSize: "$8",
        lineHeight: "1.25",
        fontWeight: "bold",

        "@tabletL": {
          fontSize: "$6",
        },
      },
      heading3: {
        fontSize: "$7",
        lineHeight: "1.25",
        fontWeight: "bold",

        "@tabletL": {
          fontSize: "$6",
        },
      },
      heading4: {
        lineHeight: "1.5",
        fontWeight: "bold",
      },
      subtitle1: {
        fontSize: "$6",
        lineHeight: "1.5",

        "@tabletL": {
          fontSize: "$4",
        },
      },
      subtitle2: {
        fontSize: "$5",
        lineHeight: "1.5",
      },
      paragraph1: {
        fontSize: "$4",
        lineHeight: "28px",
      },
      paragraph2: {
        fontSize: "$3",
        lineHeight: "1.5",
      },
      small: {
        fontSize: "$2",
        lineHeight: "1.5",
      },
      extraSmall: {
        fontSize: "$1",
        lineHeight: "1.5",
      },
    },
    color: {
      text: {
        color: "$text",
      },
      textLight: {
        color: "$textLight",
      },
      white: {
        color: "$white",
      },
    },
  },
  defaultVariants: {
    type: "$paragraph1",
    color: "$text",
  },
});
