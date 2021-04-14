/**
 * @class       : event-item
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Tuesday Apr 13, 2021 18:03:32 EDT
 * @description : event-item
 */
import Link from "next/link";

export default function EventItem({ title, image, date, location, id }) {
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const exploreLink = `/events/${id}`;
  console.log(title);
  return (
    <li key={id}>
      <img src={"/" + image} alt="" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{readableDate}</time>
          </div>
          <div>
            <address>{location}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

