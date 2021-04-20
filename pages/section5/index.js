/**
 * @class       : index
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Friday Apr 16, 2021 18:52:14 EDT
 * @description : index
 */
import fs from "fs/promises";
import path from "path";

export default function Index(props) {
  return (
    <ul>
      {props.events.map((p) => (
        <li key={p.name}>
          {p.name} | {p.age}
        </li>
      ))}
    </ul>
  );
}

