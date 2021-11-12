import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import css from "./MainNavigation.module.css";

const nav_items = [
  { name: "Home", url: "/" },
  { name: "Documentation", url: "/docs" },
  { name: "API Playground", url: "/playground" },
];

const MainNavigation = () => {
  const router = useRouter();

  return (
    <header className={css.container}>
      <div className={css.sub}>
        <Image src="/svg/deriv.svg" alt="deriv logo" width={180} height={73} />
        <div className={css.branding_text}>API</div>
        <div className={css.link_container}>
          {nav_items.map((n) => {
            return (
              <Link key={n.name} href={n.url} passHref>
                <a className={router.pathname === n.url ? css.selected : []}>
                  {n.name}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
