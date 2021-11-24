import React from "react";
import { styled } from "stitches.config";

const Fieldset = styled("div", {
  width: "100%",
  border: "none",

  '& input[type="text"]': {
    width: "100%",
    padding: "0 12px",
    borderRadius: "4px 0 0 4px",
    border: "solid 1px #d6dadb",
    fontSize: "14px",
    lineHeight: "1.43",
    color: "#333333",
  },

  "& .first": {
    marginTop: "20px",
  },

  "& .input-wrapper": {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  "& .helper-label": {
    position: "absolute",
    left: "0.5vw",
    top: "-12px",
    fontSize: "12px",
    lineHeight: "1.4",
    color: "#333333",
    backgroundColor: "white",
    marginTop: "0",
    marginBottom: "0",
    padding: "4px",
  },
  variants: {
    type: {
      default: {
        'input[type="text"]': {
          height: "36px",
        },
        ".input-wrapper": {
          marginBottom: "16px",
        },
      },
      form: {
        'input[type="text"]': {
          height: "40px",
        },
        ".input-wrapper": {
          marginBottom: "40px",
        },
      },
    },
  },
  defaultVariants: { type: "default" },
});

const FieldsetWrapper = styled("div", {
  width: "100%",
  border: "none",
});

export const Input = React.forwardRef(function Input(props, ref) {
  const {
    label,
    placeholder_text,
    width,
    maxWidth,
    type,
    defaultValue,
    onChange,
    value,
    formFieldProps,
  } = props;
  return (
    <FieldsetWrapper
      css={{
        width: width,
        maxWidth: maxWidth,
      }}
    >
      <Fieldset type={type}>
        <div className="input-wrapper first">
          <p className="helper-label">{label}</p>
          {value ? (
            <input
              ref={ref}
              id="application-name"
              type="text"
              maxLength="48"
              placeholder={placeholder_text}
              defaultValue={defaultValue}
              value={value}
              onChange={onChange}
            />
          ) : (
            <input
              ref={ref}
              id="application-name"
              type="text"
              maxLength="48"
              placeholder={placeholder_text}
              defaultValue={defaultValue}
              value={value}
              onChange={onChange}
              {...formFieldProps}
            />
          )}
        </div>
      </Fieldset>
    </FieldsetWrapper>
  );
});
