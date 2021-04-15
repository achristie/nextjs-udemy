/**
 * @class       : Button
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Wednesday Apr 14, 2021 21:12:32 EDT
 * @description : Button
 */

import Link from "next/link";
import classes from "./button.module.css";

export default function Button({ link, children, onClick }) {
  if (link) {
    return (
      <Link href={link}>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
}

