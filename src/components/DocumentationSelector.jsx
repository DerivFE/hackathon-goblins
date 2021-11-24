import React from "react";
import Select from "react-select";
import Router, { useRouter } from "next/router";
import { styled } from "stitches.config";

const DocumentationSelector = () => {
  const options = [
    { value: "/docs", label: "Quickstart" },
    { value: "/docs/app-registration", label: "App registration" },
    { value: "/playground", label: "API playground" },
    { value: "/docs/api-guide", label: "API guide" },
    { value: "/docs/faq", label: "FAQ" },
    { value: "/docs/json-schemas", label: "JSON Schemas" },
    { value: "/docs/bug-bounty", label: "Bug Bounty" },
  ];

  const currentPath = useRouter().pathname;

  const handleChange = (e) => {
    Router.push(e.value);
  };

  const StyledSelect = styled(Select, {
    marginBottom: '1rem',
    height: 40,
  });

  return (
    <StyledSelect
      defaultValue={options.filter((el) => {
        return el.value === currentPath;
      })}
      name="document"
      options={options}
      onChange={handleChange}
    />
  );
};

export default DocumentationSelector;
