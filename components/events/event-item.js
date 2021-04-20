/**
 * @class       : event-item
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Tuesday Apr 13, 2021 18:03:32 EDT
 * @description : event-item
 */
import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "../ui/Button";

export default function EventItem({ title, image, date, location, id }) {
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
}

