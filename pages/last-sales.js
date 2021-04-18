/**
 * @class       : LastSales
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Sunday Apr 18, 2021 15:26:25 EDT
 * @description : LastSales
 */

import { useEffect, useState } from "react";
import useSWR from "swr";

export default function LastSales(props) {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setLoading] = useState(false);

  const { data, error } = useSWR(
    "https://next-test-16187-default-rtdb.firebaseio.com/sales.json"
  );

  useEffect(() => {
    if (data) {
      const transform = [];

      for (const key in data) {
        transform.push({
          id: key,
          username: data[key].name,
          volume: data[key].volume,
        });
      }
      setSales(transform);
    }
  }, [data]);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const transform = [];

  //       for (const key in data) {
  //         transform.push({
  //           id: key,
  //           username: data[key].name,
  //           volume: data[key].volume,
  //         });
  //       }
  //       setSales(transform);
  //       setLoading(false);
  //     });
  // }, []);

  if (error) {
    return <p>Error! {error}</p>;
  }
  if (!data && !sales) {
    return <p>No Sales Data!</p>;
  }

  return (
    <ul>
      {sales &&
        sales.map((d) => (
          <li key={d.id}>
            {d.username} | {d.volume}
          </li>
        ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://next-test-16187-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await res.json();
  const transform = [];

  for (const key in data) {
    transform.push({
      id: key,
      username: data[key].name,
      volume: data[key].volume,
    });
  }

  return { props: { sales: transform } };
}

