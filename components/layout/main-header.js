/**
 * @class       : main-header
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Thursday Apr 15, 2021 15:43:53 EDT
 * @description : main-header
 */

import Link from "next/link";
import classes from "./main-header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Next Events</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

