import React from "react";
import { styled } from "stitches.config";

const SimpleCheckbox = styled("div", {
  margin: "20px 10px",

  "& input[type='checkbox']": {
    marginRight: "16px",
    transform: "scale(1.23)",
    padding: "9px",
  },
});

export const Checkbox = React.forwardRef(function Checkbox(
  { children, formFields },
  ref
) {
  return (
    <SimpleCheckbox>
      <input ref={ref} type="checkbox" {...formFields} />
      <label>{children}</label>
    </SimpleCheckbox>
  );
});
