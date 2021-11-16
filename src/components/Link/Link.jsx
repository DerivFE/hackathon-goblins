import NextLink from "next/link";
import classNames from "classnames";
import css from "./Link.module.css";

import React from "react";

export const Link = ({ unstyled, children, ...props }) => {
  return (
    <NextLink {...props}>
      <a className={classNames(`${css.link}`, unstyled ? css.unstyled : null)}>
        {" "}
        {children}
      </a>
    </NextLink>
  );
};
