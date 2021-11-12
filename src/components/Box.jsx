import { styled } from "stitches.config";

export const Box = styled("div", {
  // Reset
  boxSizing: "border-box",

  // Custom
  display: "flex",
  width: "100%",

  variants: {
    col: {
      true: {
        flexDirection: "column",
      },
    },
    jc: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
    },
    ai: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
    },
  },
});
