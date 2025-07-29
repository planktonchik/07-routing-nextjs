import TagsMenu from "../TagsMenu/TagsMenu";
import css from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.headerLink}>
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li className={css.navigationItem}>
            <Link className={css.headerLink} href="/">
              Home
            </Link>
          </li>
          <li className={css.navigationItem}>{<TagsMenu />}</li>
        </ul>
      </nav>
    </header>
  );
}