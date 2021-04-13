/**
 * @class       : [id]
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Monday Apr 12, 2021 20:36:46 EDT
 * @description : [id]
 */

import { useRouter, withRouter } from "next/router";
import Link from "next/link";

export default function PPP({ id }) {
  const router = useRouter();

  return (
    <>
      <Link href="/">Home</Link>
      <h3>{router.query.id}</h3>
    </>
  );
}

