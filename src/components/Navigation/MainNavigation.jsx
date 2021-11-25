import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SideMenu from "components/Navigation/SideMenu";
import css from "./MainNavigation.module.css";
import CloseIcon from "assets/svg/close.svg";
import HamburgerIcon from "assets/svg/hamburger.svg";
import DerivIcon from "assets/svg/deriv.svg";

const nav_items = [
  { name: "Home", url: "/" },
  {
    name: "Documentation",
    url: "/docs",
    sublinks: [
      { name: "Quickstart", url: "/docs" },
      { name: "App Registration", url: "/docs/app-registration" },
      { name: "API Guide", url: "/docs/api-guide" },
      { name: "FAQ", url: "/docs/faq" },
      { name: "JSON Schemas", url: "/docs/json-schemas" },
      { name: "Bug Bounty", url: "/docs/bug-bounty" },
    ],
  },
  { name: "API Playground", url: "/playground" },
];

const MainNavigation = () => {
  const router = useRouter();
  const [is_side_menu_shown, setSideMenuShown] = useState(false);

  return (
    <React.Fragment>
      <header className={css.container}>
        <div className={css.sub}>
          {is_side_menu_shown ? (
            <CloseIcon
              onClick={() => setSideMenuShown(!is_side_menu_shown)}
              className={css.close_icon}
            />
          ) : (
            <HamburgerIcon
              onClick={() => setSideMenuShown(!is_side_menu_shown)}
              className={css.hamburger_icon}
            />
          )}
          <DerivIcon className={css.deriv_logo} />
          <div className={css.branding_text}>API</div>
          <div className={css.link_container}>
            {nav_items.map((n) => {
              return (
                <Link key={n.name} href={n.url} passHref>
                  <a className={router.pathname === n.url || (n.sublinks && n.sublinks.find(s => s.url === router.pathname)) ? css.selected : []}>
                    {n.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </header>
      <SideMenu is_shown={is_side_menu_shown} links={nav_items} />
    </React.Fragment>
  );
};

export default MainNavigation;
