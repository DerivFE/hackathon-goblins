import Link from "next/link";
import css from "./TopNavigation.module.css";

const top_nav_items = [
  { name: "Deriv website", url: "https://deriv.com" },
  { name: "About us", url: "https://deriv.com/about" },
  { name: "Contact us", url: "https://deriv.com/contact-us" },
];

const TopNavigation = () => {
  return (
    <div className={css.nav_container}>
      <div className={css.nav}>
        {top_nav_items.map((i) => {
          return (
            <Link key={i.name} href={i.url} passhRef>
              <a>{i.name}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopNavigation;
