import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import css from "./SideMenu.module.css";
import ArrowUpIcon from "assets/svg/arrow_up.svg";
import ArrowDownIcon from "assets/svg/arrow_down.svg";

const SideMenu = ({ is_shown, links }) => {
  const current_path = useRouter().pathname;

  return (
    <div
      className={classNames(
        `${css.main_container}`,
        is_shown ? css.show_container : ""
      )}
    >
      <div className={css.container}>
        {links.map((link) => {
          return (
            <SideMenuItem
              key={link.name}
              is_active={link.url === current_path}
              name={link.name}
              sublinks={link.sublinks}
              url={link.url}
            />
          );
        })}
      </div>
    </div>
  );
};

const SideMenuItem = ({ is_active, name, sublinks, url }) => {
  const [is_expanded, setExpanded] = useState(!!sublinks);

  if (!sublinks) {
    return (
      <Link href={url} passHref>
        <div
          className={classNames(`${css.wrapper}`, is_active ? css.active : "")}
        >
          <div className={css.main_item}>{name}</div>
        </div>
      </Link>
    );
  }

  return (
    <div className={css.wrapper} onClick={() => setExpanded(!is_expanded)}>
      <div className={css.main_item}>
        {name}
        {is_expanded ? (
          <ArrowUpIcon className={css.expand_icon} />
        ) : (
          <ArrowDownIcon className={css.expand_icon} />
        )}
      </div>
      <SideMenuDrawer is_expanded={is_expanded} sublinks={sublinks} />
    </div>
  );
};

const SideMenuDrawer = ({ is_expanded, sublinks }) => {
  const current_path = useRouter().pathname;

  return (
    <div
      className={classNames(
        `${css.drawer_container}`,
        is_expanded ? css.expanded : ""
      )}
    >
      {sublinks.map((sub) => {
        const { url, name } = sub;
        return (
          <Link key={url} href={url} passHref>
            <a
              className={classNames(
                css.drawer_item,
                current_path === url ? css.active : ""
              )}
            >
              {name}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default SideMenu;
