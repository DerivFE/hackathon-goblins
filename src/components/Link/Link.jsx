import NextLink from "next/link";
import classNames from "classnames";
import css from "./Link.module.css";

import React from "react";

export const Link = ({ href, unstyled, external, children, ...props }) => {
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(`${css.link}`, unstyled ? css.unstyled : null)}
    >
      {children}
    </a>
  ) : (
    <NextLink href={href} {...props}>
      <a className={classNames(`${css.link}`, unstyled ? css.unstyled : null)}>
        {" "}
        {children}
      </a>
    </NextLink>
  );
};
