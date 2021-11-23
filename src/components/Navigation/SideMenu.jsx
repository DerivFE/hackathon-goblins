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
              is_active={
                link.url === current_path ||
                link.sublinks?.includes(current_path)
              }
              name={link.name}
              sublinks={link.sublinks}
            />
          );
        })}
      </div>
    </div>
  );
};

const SideMenuItem = ({ is_active, name, sublinks }) => {
  const [is_expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!is_expanded)}
      className={classNames(`${css.wrapper}`, is_active ? css.active : "")}
    >
      <div className={css.main_item}>
        {name}
        {sublinks &&
          (is_expanded ? (
            <ArrowUpIcon className={css.expand_icon} />
          ) : (
            <ArrowDownIcon className={css.expand_icon} />
          ))}
      </div>
      {sublinks && (
        <SideMenuDrawer is_expanded={is_expanded} sublinks={sublinks} />
      )}
    </div>
  );
};

const SideMenuDrawer = ({ is_expanded, sublinks }) => {
  return (
    <div
      className={classNames(
        `${css.drawer_container}`,
        is_expanded ? css.expanded : ""
      )}
    >
      {sublinks.map((sub) => {
        return (
          <Link key={sub.url} href={sub.url} passHref>
            <a className={css.drawer_item}>{sub.name}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default SideMenu;
