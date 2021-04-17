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
      {props.people.map((p) => (
        <li key={p.name}>
          {p.name} | {p.age}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const file = path.join(process.cwd(), "dummy-backend2.json");
  const jsonData = await fs.readFile(file);
  const data = JSON.parse(jsonData);

  console.log("generating...");

  return {
    props: {
      people: data.people,
    },
    revalidate: 10,
  };
}

