/**
 * @class       : layout
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Thursday Apr 15, 2021 15:42:55 EDT
 * @description : layout
 */

import { Fragment } from "react";
import Header from "./main-header";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
}

